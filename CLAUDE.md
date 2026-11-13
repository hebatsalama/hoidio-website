# Hoidio website – Claude Code

All project rules live in AGENTS.md (shared with other coding tools). Follow it in full:

@AGENTS.md

## Claude Code specifics

- Current task: Hoidio Family on the website. Run `/hoidio-family`, or follow `docs/claude/hoidio-family.md` directly. Use its texts word for word.
- Work on the branch `claude/hoidio-family`. Never push to `main`: it is live on hoidio.com.
- Use a task list for the brief's sections (1 navigation, 2 Prices section, 3 family tab, 4 FAQ, 5 terms, 6 privacy, 7 extras, checks) and tick them off as you go.
- Edit the English page first, then copy the same structure into the Finnish and Arabic pages, changing only the texts.
- To look at the pages, run `python3 -m http.server 8080` in the background and open http://localhost:8080/, /fi/ and /ar/. If you can take screenshots, check 375 px and 1280 px wide, light and dark mode.
- Open the pull request with `gh pr create --base main --head claude/hoidio-family`. If `gh` is not available, push the branch and give Heba the "compare" link: https://github.com/hebatsalama/hoidio-website/compare/main...claude/hoidio-family
- When done, report in a few plain sentences what changed, the PR link, and anything you could not do. Heba is not a developer: no jargon.
