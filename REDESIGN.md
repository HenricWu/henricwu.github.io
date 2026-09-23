# Academic homepage redesign

A custom academic presentation for Haoyang Wu, preserving the existing GitHub Pages / Jekyll repository and publication URLs.

## Open-source selection (checked 2026-09-22)

| Project | License | Last repository push | Fit and integration cost |
| --- | --- | --- | --- |
| [minimal-light](https://github.com/yaoyao-liu/minimal-light) | CC0-1.0 | 2026-07-21 | Chosen for its lightweight image / title / authors / venue / resource-links publication component. Works with standard Jekyll and requires no new frontend dependencies. |
| [academic-homepage](https://github.com/luost26/academic-homepage) | MIT | 2026-09-13 | Strong publication previews and structured academic content; adopting the complete Bootstrap-based shell would require migrating more of the existing site. |
| [al-folio](https://github.com/alshedivat/al-folio) | MIT | 2026-09-21 | Rich bibliography and academic features; its plugin and bibliography pipeline introduces more migration work than this homepage needs. |

All three repositories were non-archived when checked. Push dates describe repository activity, not a guarantee of future maintenance. The reference site https://zhangzhh.cn/ informed the paper-thumbnail and concise-summary arrangement; its code and personal content were not copied.

The publication component adapts `_includes/publications.md` from minimal-light at commit `1ea07f39518ac44644406380c83da6f89037c4fc`. It retains the figure/title/authors/venue/optional-links structure, mapped onto this site's Jekyll collections. The full upstream license is in `licenses/minimal-light-CC0.txt`. The existing AcademicPages license remains intact. The site shell, typography, CSS, navigation, and responsive layouts are custom.

## Editing content

- Homepage biography, research, education and industry projects: `_pages/about.md`.
- Publications: one Markdown file per work in `_publications/`.
- Add `featured: true` and `display_order` to include a paper in the redesigned lists.
- Paper metadata: `short_venue`, `display_year`, `status`, `author_line`, `summary`, `topic`, `project_name`.
- Paper images: `image`, `image_alt`, `figure_label`, `figure_caption`, and attribution fields for published figures.
- Paper links: `paperurl` (full URL), optional `code`; existing overview permalinks remain unchanged.
- Teaching: `_teaching/`, with `course_name`, `teaching_role`, and `summary`.
- Shared design: `_layouts/academic.html`, `_layouts/academic-detail.html`, `assets/academic/style.css` and `site.js`.

## Preview / build

Use a current Ruby runtime and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

The site remains compatible with the repository's existing GitHub Pages build. No frontend build step is needed for the new design. The original theme's package manifest and assets are preserved for legacy pages.

## Content and image boundaries

The biography and paper statuses come from the existing homepage and repository. Two published method figures were extracted from the final IEEE papers and matched to their DOI and captions. MCTS-Track uses an author manuscript figure and remains marked under review. No experimental results were regenerated or independently validated for this redesign.

The publishing branch is `master`. The pre-redesign version is preserved at `backup/pre-redesign-2026-09-22`; all updates remain reversible through Git history.

## Homepage engagement (2026-09-24)

The separate Chinese name below the English name follows the typographic hierarchy of https://zheng-kai.com/; no personal content or code was copied.

`assets/academic/engagement.js` adds a shared like count using the public Applause API at `https://applause.chabouis.fr`, the replacement service recommended by [applause-button](https://github.com/ColinEberhardt/applause-button). The small heart component is a custom implementation of its documented GET/POST protocol. All homepage URL variations use `https://henricwu.github.io/` as their key. Only confirmed server responses update the count. A local browser flag and Web Locks prevent ordinary repeat likes in the same browser; this is not account-based voting or fraud prevention. Clearing storage or using another browser removes that local restriction. A network failure never generates a fake increment or automatically retries a write.

The footer uses [Busuanzi](https://busuanzi.ibruce.info/)'s official script and `site_pv`. The script runs once per homepage load on the production hostname only, grouping homepage query/hash variants into the same total. Inner pages and local previews do not increment visits. This counts page loads, including repeat visits and checks, rather than unique people; ad blockers, disabled JavaScript or service outages can prevent a visit from being recorded. Counts depend on these third-party public services, and `—` indicates unavailable data. No credentials or private keys are embedded. The counters do not reconstruct historical visits before integration.

Additional motion includes the rotating photo border, staggered diagram scans, click ripples, confirmed-like heart particles and subtle label/status pulses. Visible photo/diagram loops pause offscreen and in hidden tabs; reduced-motion settings disable decorative animation. The existing five-photo carousel and four-paper selection are preserved.
