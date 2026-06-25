# Roadmap

This roadmap lists candidate tracks for turning Workstream Continuity Design from a research proposal into testable practice. It is not a standards commitment.

## 1. Reference prototype

- Develop a future reference prototype only after its scope, publication status, and review path are explicit.
- Represent the nine grammar slots as structured data, not only prose.
- Show acquisition, rapid switching, stale return, blocked state, delegated action, denied authority, changed assumptions, and recovery.
- Include a fixture set that makes failure modes reproducible.

## 2. Grammar pressure-testing

- Test whether GOAL, ATTN, STATE, DELTA, ACTORS, AUTH, EVIDENCE, EFFECT, and NEXT are minimal.
- Identify slots that collapse cleanly, split under pressure, or become domain-specific extensions.
- Compare the grammar against conventional queues, dashboards, transcripts, and notification centers.

## 3. Empirical validation

- Define Time to Orientation (TTO), Time to Decision Readiness (TTDR), false-ready rate, cross-workstream contamination, and intervention quality.
- Create study tasks for rapid switching and higher-staleness return.
- Compare WCD surfaces against baseline operational UI patterns.
- Publish anonymized protocols, fixtures, and results when available.

## 4. Semantics policy refinement

- Specify accountable-expression fields at a schema level.
- Crosswalk the proposal against MCP, A2A, CloudEvents, W3C PROV, OpenTelemetry, AG-UI, ACP, A2UI, and related work.
- Separate core operator grammar from extension profiles for identity, memory, recurrence, tools, configuration, authority, and conformance evidence.

## 5. Accessibility and design-system guidance

- Turn the visual and interaction guidance into reusable component patterns.
- Test keyboard navigation, screen-reader behavior, color independence, density, and progressive disclosure.
- Define anti-pattern examples that can be recognized in product reviews.

## 6. Release process

- Keep citable releases on Zenodo as report/publication records.
- Use GitHub Releases for versioned repository snapshots and PDF assets.
- Update `CITATION.cff`, `CHANGELOG.md`, and README citation details when a new citable edition is published.
