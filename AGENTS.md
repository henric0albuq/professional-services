<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep imported page markup and interaction state in its route file, with separate CSS and local captured assets, to preserve source fidelity during repairs.
- Keep portfolio service groups and gallery interaction state in the portfolio route, with uploaded media referenced through CDN asset pointers and gallery styling in a separate stylesheet, to preserve the imported page while supporting real work galleries.
- Portfolio photos live in the portfolio_photos table (public read, admin-only writes via has_role); /admin manages them with uploads in the private 'portfolio' bucket using long-lived signed URLs, because public buckets are blocked in this workspace.
