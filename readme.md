---
repo-uri: osg://repo/github.com/cristianvasquez/rdf-explainers
repo-name: rdf-explainers
repo-group: temp
tags: [repo/temp]
---

# [rdf-explainers](osg://repo/github.com/cristianvasquez/rdf-explainers)

Explainers for RDF tools made by Claude. Site: https://cristianvasquez.github.io/rdf-explainers/

| Explainer | Explains |
|---|---|
| [claimer-cascade](explainers/claimer-cascade/) | `rdf claim`: SHACL claimers, own vs. borrow (frontier), CONSTRUCT views, pipe-order precedence |
| [quad-pipes](explainers/quad-pipes/) | RDF as a stream of quads: filter, map and sink pieces, pipe order, outputs of SELECT, pretty, canonicalize, skolem and ASK |

## Layout

```
explainers/<slug>/index.html   one explainer, self-contained (assets go in the same folder)
scripts/build.mjs              copies explainers/ to dist/ and writes dist/index.html
.github/workflows/deploy.yml   builds and deploys to GitHub Pages on push to main
```

## Add an explainer

1. Create `explainers/<slug>/index.html`, a complete HTML document.
2. Give it a `<title>` and a `<meta name="description" content="...">`. The build fails without them, because the index page uses them.
3. Run `node scripts/build.mjs` and open `dist/index.html` to check.
4. Push to `main`. The workflow deploys it to `https://cristianvasquez.github.io/rdf-explainers/<slug>/`.

No dependencies: Node 20 or later.
