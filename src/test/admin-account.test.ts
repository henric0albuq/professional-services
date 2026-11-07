import { describe, expect, it, vi } from "vitest";
import type { SupabaseClient } from "@supabase/supabase-js";
import { changeAdminAccount, validateAccountChange } from "../lib/admin-account";

const input = { userId: "admin-id", currentEmail: "admin@example.com", currentPassword: "old-test-pass", kind: "password" as const, value: "new-test-pass", confirmation: "new-test-pass", redirectTo: "https://example.com/admin" };
function mockClient({ id = "admin-id", admin = true, error = null as unknown } = {}) {
  const auth = { signInWithPassword: vi.fn().mockResolvedValue({ data: { user: { id } }, error }), updateUser: vi.fn().mockResolvedValue({ error: null }) };
  const rpc = vi.fn().mockResolvedValue({ data: admin, error: null });
  return { client: { auth, rpc } as unknown as SupabaseClient, auth, rpc };
}
describe("Administrative account changes", () => {
  it("requires the current password", () => expect(() => validateAccountChange("email", "new@example.com", "", "", input.currentEmail)).toThrow());
  it("requires at least eight characters", () => expect(() => validateAccountChange("password", "1234567", "1234567", input.currentPassword, input.currentEmail)).toThrow());
  it("rejects mismatched password confirmation", () => expect(() => validateAccountChange("password", "new-test-pass", "different", input.currentPassword, input.currentEmail)).toThrow());
  it("rejects reuse of the current password", () => expect(() => validateAccountChange("password", input.currentPassword, input.currentPassword, input.currentPassword, input.currentEmail)).toThrow());
  it("rejects unchanged email", () => expect(() => validateAccountChange("email", "ADMIN@example.com", "", input.currentPassword, input.currentEmail)).toThrow());
  it("never updates credentials after failed reauthentication", async () => {
    const { client, auth } = mockClient({ error: { message: "invalid" } });
    await expect(changeAdminAccount(client, input)).rejects.toThrow();
    expect(auth.updateUser).not.toHaveBeenCalled();
  });
  it("never changes a different account", async () => {
    const { client, auth } = mockClient({ id: "other-id" });
    await expect(changeAdminAccount(client, input)).rejects.toThrow();
    expect(auth.updateUser).not.toHaveBeenCalled();
  });
  it("requires a database-verified administrator role", async () => {
    const { client, auth } = mockClient({ admin: false });
    await expect(changeAdminAccount(client, input)).rejects.toThrow();
    expect(auth.updateUser).not.toHaveBeenCalled();
  });
  it("sends the current password with a password change", async () => {
    const { client, auth } = mockClient();
    await changeAdminAccount(client, input);
    expect(auth.updateUser).toHaveBeenCalledWith({ password: "new-test-pass", current_password: "old-test-pass" });
  });
  it("requests an email confirmation without recreating the account", async () => {
    const { client, auth } = mockClient();
    await changeAdminAccount(client, { ...input, kind: "email", value: " NEW@example.com " });
    expect(auth.updateUser).toHaveBeenCalledWith({ email: "new@example.com" }, { emailRedirectTo: "https://example.com/admin" });
  });
});