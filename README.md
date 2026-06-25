# Workstream Continuity Design

**Canonical repository:** [github.com/Conalh/workstream-continuity-design](https://github.com/Conalh/workstream-continuity-design)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20837409.svg)](https://doi.org/10.5281/zenodo.20837409)

> **The interface remembers where the work stands — at every switch.**

**Workstream Continuity Design (WCD)** is a proposed HCI and product-design discipline for software in which people must repeatedly enter, leave, understand, supervise, and safely resume concurrent work carried by humans, services, and AI agents.

Its central question is:

> When attention enters a live workstream—after seconds, minutes, or days—can the accountable person recover the minimum sufficient operating picture quickly enough to supervise, decide, resume, or intervene safely without reconstructing context from raw activity?

## Read the research edition

**[Workstream Continuity Design: Design Bible v0.5](./WORKSTREAM_CONTINUITY_DESIGN.md)**

Public, non-peer-reviewed research edition · 23 June 2026 · Conal Hickey

**Citable publication:** [Zenodo report record](https://zenodo.org/records/20837409) · DOI: [10.5281/zenodo.20837409](https://doi.org/10.5281/zenodo.20837409) · Version 0.5.3 · CC BY 4.0

**Canonical PDF:** [WCD_Design_Bible_v0_5_3.pdf](https://zenodo.org/api/records/20837409/files/WCD_Design_Bible_v0_5_3.pdf/content)

**GitHub release:** [v0.5 initial public research edition](https://github.com/Conalh/workstream-continuity-design/releases/tag/v0.5)

**Reference demonstrator:** [synthetic WCD switching experiment](https://conalh.github.io/workstream-continuity-design/) ([source](./docs/index.html))

Preview images:

- [Conventional activity-feed condition](./docs/assets/demo-feed-condition.png)
- [WCD orientation-surface condition](./docs/assets/demo-wcd-surface.png)
- [Mobile WCD condition](./docs/assets/demo-mobile.png)
- [Repository social preview image](./docs/assets/social-preview.png)

## Core proposal

WCD treats **workstream continuity** as a product-level quality attribute and **Workstream Continuity Design** as the coordinating practice used to design for that attribute.

The current research edition proposes a provisional operator-facing continuity grammar:

```text
GOAL · ATTN · STATE · DELTA · ACTORS · AUTH · EVIDENCE · EFFECT · NEXT
```

The grammar asks a continuity surface to make nine questions recoverable:

| Slot | Operator question |
|---|---|
| **GOAL** | What outcome or subgoal is intended? |
| **ATTN** | Why does this workstream deserve attention now? |
| **STATE** | What operational condition is the work in? |
| **DELTA** | What materially changed against the last trusted baseline? |
| **ACTORS** | Who is accountable, who is acting now, and who acts next? |
| **AUTH** | What is permitted, denied, expired, or unverifiable? |
| **EVIDENCE** | What supports the current state, and how fresh or contradictory is it? |
| **EFFECT** | What consequence, scope, externality, and reversibility are at stake? |
| **NEXT** | What is the safest useful action or waiting condition? |

The exact slot set is a design hypothesis. It is intended to be implemented, challenged, reduced, decomposed, or rejected through empirical work.

## Five commitments

1. Treat workstream entry, focus transition, and re-entry as first-class interactions—from rapid switching to higher-staleness return.
2. Model continuity around the durable **workstream**, rather than the page, record, chat, notification, or browser session.
3. Represent operational state and agency separately: condition, accountability, current actor, next actor, and authority.
4. Reconstruct meaningful change and changed assumptions rather than replaying chronology or inventory totals.
5. Join presentation to policy, provenance, reversibility, intervention, and recovery so oversight can change what happens.

## What the document contains

The design bible develops:

- category boundaries and human-factors lineage;
- a canonical information architecture and durable workstream model;
- actor, delegation, agency, and operator-facing control-posture models;
- acquisition and re-entry protocols;
- an attention and prioritization model;
- a 30-pattern library and 31-item anti-pattern catalog;
- visual, accessibility, human-oversight, safety, and policy guidance;
- metrics, experiments, conformance tests, and a maturity model;
- an applied AI-first CRM case study; and
- the early-stage **WCD Semantics Policy**, including the Accountable Expression Profile and extension profiles for instruction provenance, identity and delegation, memory, recurrence, steering, tools, multi-agent composition, configuration identity, resource authority, and conformance evidence.

## Research status

The report separates established premises from original proposals:

- The human-factors premises draw on established work in interruption, task resumption, prospective memory, situation awareness, supervisory control, distributed cognition, appropriate reliance, and recoverability.
- The WCD category terminology, nine-slot grammar, information architecture, pattern library, metrics, maturity model, and Semantics Policy are original synthesis and require implementation and empirical validation.
- The Accountable Expression Profile is an application- and conformance-layer proposal. It is not a finished transport protocol, security architecture, formal standard, or universal language for an agent’s internal reasoning.

A falsification condition is explicit: if conventional dashboards, queues, histories, and notifications perform equivalently or better on decision-ready time, first-decision accuracy, continuity comprehension, contamination, oversight quality, and safety outcomes without WCD’s explicit models, the category should collapse back into established enterprise UX practice.

## Collaboration and critique

Useful contributions include:

- controlled studies of Time to Orientation, Time to Decision Readiness, false-ready rate, cross-workstream contamination, and intervention quality;
- reference implementations in agent interfaces, case-management systems, incident consoles, coding-agent environments, or operational CRMs;
- critiques of category novelty, scope, terminology, and overlap with established HCI, workflow, identity, provenance, security, observability, and conformity practice;
- crosswalks to existing protocols and standards; and
- field reports showing where the framework fails, over-specifies, or creates unacceptable cognitive and implementation cost.

Open an issue or discussion with a bounded objection, implementation result, replication proposal, or standards comparison. Pull requests that improve accessibility, source accuracy, terminology, or Markdown structure are also useful.

## Repository contents

| File | Purpose |
|---|---|
| [`CITATION.cff`](./CITATION.cff) | Machine-readable citation metadata for GitHub and citation tools |
| [`CHANGELOG.md`](./CHANGELOG.md) | Version history and publication notes |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md) | Contribution routes for discussions, issues, and pull requests |
| [`LICENSE.md`](./LICENSE.md) | CC BY 4.0 license notice for the research and documentation |
| [`README.md`](./README.md) | Project orientation, research status, and contribution routes |
| [`ROADMAP.md`](./ROADMAP.md) | Candidate implementation, research, and validation tracks |
| [`WORKSTREAM_CONTINUITY_DESIGN.md`](./WORKSTREAM_CONTINUITY_DESIGN.md) | Full GitHub-readable Design Bible v0.5 |
| [`docs/index.html`](./docs/index.html) | Static reference demonstrator for the WCD switching experiment |

## Citation

```text
Hickey, Conal. 2026. Workstream Continuity Design: Design Bible.
Version 0.5.3. Zenodo. https://doi.org/10.5281/zenodo.20837409
```

For machine-readable citation metadata, see [`CITATION.cff`](./CITATION.cff).

## License

© 2026 Conal Hickey. The report is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

Attribution should identify the author, title, version, date, and a link to the source repository or canonical publication when available.

## Disclosure

AI-assisted research, synthesis, drafting, and editorial production were used. The author directed and revised the work and accepts responsibility for the published version.
