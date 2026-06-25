# Workstream Continuity Design

## Design Bible v0.5

> A doctrine for rapid workstream acquisition, supervision, and safe resumption across concurrent human–machine work.

- **Research date:** 23 June 2026
- **Status:** Version 0.5 — public, non-peer-reviewed research edition
- **Selected category term:** Workstream Continuity Design
- **Author:** Conal Hickey
- **License:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

***The interface remembers where the work stands — at every switch.***

Prepared for senior product designers, design-system leads, HCI researchers, founders, and engineers building operational software.

> **Publication disclosure:** AI-assisted research, synthesis, drafting, and editorial production were used. The author directed and revised the work and accepts responsibility for the published version.
>
> **Markdown edition:** This GitHub-oriented edition was converted from the current revised DOCX. Word pagination and the page-number contents table have been replaced with stable document anchors and a repository-friendly contents list.

## Contents

- [Executive summary](#executive-summary)
- [Reader’s orientation: the spine](#readers-orientation-the-spine)
- [Research verdict: Is there a distinct category here?](#research-verdict-is-there-a-distinct-category-here)
- [Strongest supporting evidence](#strongest-supporting-evidence)
- [Strongest counterargument](#strongest-counterargument)
- [Pre-agent versus agent-era paradigm map](#pre-agent-versus-agent-era-paradigm-map)
- [Audit of dominant interface patterns, 2015–2026](#audit-of-dominant-interface-patterns-20152026)
- [Current agent-interface market audit](#current-agent-interface-market-audit)
- [Naming matrix](#naming-matrix)
- [Design Bible v0.5](#workstream-continuity-design-design-bible-v0.5)
  - 1. [Executive thesis](#executive-thesis)
  - 2. [Category definition and boundaries](#category-definition-and-boundaries)
  - 3. [The paradigm shift](#the-paradigm-shift)
  - 4. [User and cognitive model](#user-and-cognitive-model)
  - 5. [Core design principles](#core-design-principles)
  - 6. [Canonical information architecture](#canonical-information-architecture)
  - 7. [Workstream model](#workstream-model)
  - 8. [Actor and agency model](#actor-and-agency-model)
  - 9. [Continuity grammar and WCD Semantics Policy](#continuity-grammar-and-wcd-semantics-policy)
  - 10. [The workstream acquisition and re-entry protocol](#the-workstream-acquisition-and-re-entry-protocol)
  - 11. [Attention and prioritization model](#attention-and-prioritization-model)
  - 12. [Pattern library](#pattern-library)
  - 13. [Visual and interaction language](#visual-and-interaction-language)
  - 14. [Human oversight and trust](#human-oversight-and-trust)
  - 15. [Safety and policy architecture](#safety-and-policy-architecture)
  - 16. [Anti-pattern catalog](#anti-pattern-catalog)
  - 17. [Metrics and evaluation](#metrics-and-evaluation)
  - 18. [Maturity model](#maturity-model)
  - 19. [Application to the AI-first CRM case study](#application-to-the-ai-first-crm-case-study)
  - 20. [Manifesto](#manifesto)
  - 21. [Design-review checklist](#design-review-checklist)
- [Open research questions](#open-research-questions)
- [Research assumptions and evidence labels](#research-assumptions-and-evidence-labels)
- [Source appendix](#source-appendix)
- [Version history and publication note](#version-history-and-publication-note)

---

<a id="executive-summary"></a>
## Executive summary

Software is shifting from an instrument a person operates moment by moment into an environment in which many workstreams continue concurrently across human and machine actors. The central interaction problem is repeatedly acquiring the right operating picture when attention moves. A person may enter an agent thread for seconds, decide whether to approve, redirect, wait, or intervene, and move on. Pages, records, chats, and status lights remain useful, but they rarely provide a compact shared language for intent, meaningful change, responsibility, authority, consequence, and the safest next decision. The reconstruction cost is paid at every switch, not only after a long absence.

This document develops that obligation into a discipline and makes four connected contributions. Workstream continuity names the property; Workstream Continuity Design names the practice.

**A human-facing quality attribute.** Workstream continuity is the degree to which a system lets a person move among concurrent workstreams and, at each focus transition, reconstruct the minimum sufficient operating state — intent, meaningful change, responsibility, authority, consequence, and a safe next action — within the attention available. Returns after hours or days are higher-staleness cases; the defining case also includes switching measured in seconds or minutes. The document develops a five-commitment spine, information architecture, pattern library, visual and oversight language, safety architecture, metrics, conformance method, maturity model, and CRM case study. Like accessibility or recoverability, continuity is assessed across a product rather than declared present because one “Resume” card exists.

**An operator-facing continuity grammar.** Each workstream is projected through the same ordered semantics — goal, attention claim, operational state, meaningful delta, actor chain, authority, evidence, consequence, and safe next action. This is more expressive than a red/green light and more compact than a transcript; the same semantic slots can be represented as structured fields for developers, services, and agents.

An infrastructure dependency. The grammar cannot remain reliable if machine work arrives only as prose, opaque status, or vendor-specific traces. The document therefore proposes a WCD Accountable Expression Profile governing an accountable expression envelope in which each consequential machine expression is typed, evidenced, bounded in consequence, resolved against authority, bound to a durable workstream, and paired with a human intervention path. The profile is an application layer over existing work — including KQML, FIPA, A2A, MCP, CloudEvents, W3C PROV, OpenTelemetry, AG-UI, ACP, and A2UI — rather than a new transport protocol or a universal language for everything an agent can say. This third contribution is deliberately the least developed of the three. It is specified here at the level of accountability requirements and conformance tests, not as a finished schema, security model, or governance process; those belong to a separate companion research program. It should be weighted as a scoped proposal, not a delivered standard. For high-agency deployments, the same boundary includes independently authoritative monitoring and containment state: a continuity surface cannot rely on the acting agent to certify its own compliance, control coverage, or effects. [R74]

A modular semantics policy. The nine-slot operator grammar remains the stable human-facing core. Detailed identity, instruction, context, memory, recurrence, tool, composition, configuration, and conformity semantics live in versioned extension profiles rather than expanding or silently redefining the core slots. This keeps the language learnable while giving implementations enough precision to resolve multi-principal authority, prompt-injection boundaries, durable memory, scheduled agency, delegated credentials, multi-agent composition, configuration drift, and evidence reuse. [R76–R94]

Epistemic status. The cognitive and human-factors premises are established. The category, grammar, architecture, patterns, metrics, maturity model, and WCD Semantics Policy are original synthesis and standards proposals requiring implementation and field validation. The Accountable Expression Profile and extension profiles are early-stage proposals whose field taxonomies, serialization, security architecture, governance, and conformance process remain to be developed.

**Who it is for.** Product and design teams building concurrent operational software; teams supervising human and machine work; and researchers in human-AI interaction, supervisory control, and agent communication.

<a id="how-to-read-this-and-where-feedback-would-help"></a>
### How to read this, and where feedback would help

The spine and verdict are the fastest path to the thesis; sections 1-19 are the implementation; section 9 defines the continuity grammar, the WCD Semantics Policy, and its core and extension profiles.

The level of detail in the pattern library, conformance tests, and maturity model should be read as a specification to be tested, not as evidence that it has been. The empirical support in this edition is strongest for the problem — that attention switching is frequent and reconstruction is costly — and weakest for the proposed solution, whose benefit to decision-ready time and oversight quality is a hypothesis the metrics in section 17 are designed to falsify. Detail is offered so the proposal can be implemented and refuted precisely, not to imply that it is settled.

Feedback would be most useful on five questions. Are the five commitments complete? Is the continuity grammar the smallest stable set needed for rapid switching? Is the WCD Semantics Policy and its Accountable Expression Profile correctly scoped against existing protocols, identity systems, security controls, and conformity practice? Would the focus-transition metrics and conformance protocol falsify the category rather than merely illustrate it? Is the claim correctly bounded to the accountable, operated surface rather than an agent’s internal reasoning or open-ended conversation?

<a id="readers-orientation-the-spine"></a>
## Reader’s orientation: the spine

Workstream Continuity Design is easiest to use when reduced to a small, testable spine. The framework is not a prescribed dashboard, command-center layout, or agent product. It is a continuity quality attribute measured at each focus transition — seconds to days — by whether the system preserves and reconstructs the information, responsibility, authority, and control required to make the next safe decision.

One principle: design every switch-in as an orientation event; preserve enough intent-bearing context for a person to acquire the operating picture and make the next safe decision without replaying the thread. Two boundaries: model continuity around the durable workstream rather than the page or session; and keep recommendation, preparation, permission, execution, and accountability distinct, with consequential limits enforced below the interface.

<a id="five-commitments"></a>
### Five commitments

- Workstream entry, focus transition, and re-entry are first-class interactions, whether the gap is seconds or days.

- The workstream—not a page, chat, record, notification, or browser session—is the durable unit of operating state.

- Operational state and agency are represented separately: what condition the work is in, who is accountable, who acts now, who acts next, and what authority applies.

- The system reconstructs meaningful change and changed assumptions rather than replaying chronology or inventory totals.

- Presentation is joined to policy, provenance, reversibility, intervention, and recovery so that oversight changes what can happen.

<a id="why-these-five-the-drop-test"></a>
### Why these five: the drop-test

Each commitment carries a different part of the category. Remove one and the framework collapses into an established specialty or a narrower product feature.

| **Commitment removed**              | **What remains**                                          | **Why the category no longer holds**                                                                               |
|-------------------------------------|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Workstream entry / focus transition | Workflow, dashboard, or task-completion UX                | The product may manage work well while leaving an entering operator to reconstruct the operating context.          |
| Durable workstream                  | Session persistence, navigation memory, or record history | The system remembers locations and artifacts but not the course of work that connects them.                        |
| State–agency separation             | Status display or activity monitoring                     | Condition, responsibility, next actor, and authority collapse into ambiguous labels such as “AI active” or “done.” |
| Meaningful change                   | Notifications, logs, and chronological feeds              | Events are visible, but the user must determine which changes invalidate prior intent or require action.           |
| Policy and recoverable control      | Convenience-oriented automation or ceremonial oversight   | The interface may explain activity without constraining authority, supporting intervention, or containing failure. |

<a id="a-quality-attribute-not-a-screen"></a>
### A quality attribute, not a screen

Workstream continuity can be strong or weak in a CRM, hospital handoff system, security console, project workspace, personal productivity tool, or non-AI case-management product. Precisely: workstream continuity is the quality attribute, and Workstream Continuity Design is the practice of designing for it — a coordinating discipline that aligns information architecture, workflow, service design, and safety engineering to that property rather than competing with them. It should be assessed across the product in the way teams assess accessibility, reliability, security, or recoverability—not declared present because one “Resume” card or agent monitor exists.

The spine is therefore both a compression mechanism and a conformance test. Patterns may change by domain; the five commitments should remain observable in the data model, interaction model, and safety architecture.

<a id="infrastructure-dependency-continuity-grammar-and-accountable-expression"></a>
### Infrastructure dependency: continuity grammar and accountable expression

Workstream Continuity Design is a human-facing design discipline, not a new agent-communication protocol. Its continuity grammar is the operator-level language; the WCD Accountable Expression Profile governs the accountable expression envelope that keeps that language reliable. Relevant claims, proposals, state changes, and actions must be available in durable form with actor, workstream, evidence, consequence, authority, lifecycle, and intervention semantics.

Existing agent, event, provenance, observability, state-synchronization, editor-agent, and declarative-UI protocols already standardize parts of this stack. WCD does not claim to replace them. It proposes the minimum operator-facing semantics that let a continuity surface reconstruct meaningful change, distinguish recommendation from permission, assign the next actor, expose evidence and consequence, and support safe intervention. Section 9 defines the layer boundary.

<a id="research-verdict-is-there-a-distinct-category-here"></a>
## Research verdict: Is there a distinct category here?

<a id="verdict"></a>
### Verdict

**Qualified yes.** There is a coherent and increasingly urgent design category, but it should be claimed as a **new synthesis and evaluative lens**, not as the discovery of wholly new human factors. The constituent knowledge is established: task switching, interruption recovery, prospective memory, situation awareness, supervisory control, distributed cognition, queue and case design, mixed-initiative interaction, trust calibration, auditability, graceful recovery, and policy enforcement. What is newly consequential is their combination around a different operating unit and interaction rhythm: a durable portfolio of work that continues across rapid attention shifts, devices, people, services, and partially autonomous software actors.

The proposed category becomes distinct when it makes five commitments simultaneously:

- It treats **focus transition and re-entry** as first-class interactions whether the gap is seconds or days.

- It treats a **workstream**, not a page, chat, record, or browser session, as the durable unit of state.

- It represents **state and agency separately**: what condition the work is in, who owns it, who acts next, and what authority any actor has.

- It reconstructs **meaningful change**, not merely event chronology or inventory totals.

- It joins presentation to **policy, provenance, reversibility, intervention, and recovery** so that oversight is operational rather than ceremonial.

A product can therefore have strong dashboards, notifications, workflow automation, and AI features while still having poor workstream continuity. Conversely, a non-AI product—an incident-management console, clinical case system, permitting platform, legal matter workspace, or benefits-administration system—can require this discipline because work persists, changes during absences, crosses ownership boundaries, and carries consequential actions.

**Research status.** The cognitive and human-factors premises are established. The claim that agent-mediated knowledge work creates a broad product-design category is a reasonable inference from current capabilities, product patterns, and governance requirements. The proposed terminology, canonical architecture, pattern library, metrics, and maturity model are original synthesis and require field validation.

Category test: a discipline is warranted when teams repeatedly need the same concepts, representations, safety rules, patterns, and measures across products—and when existing labels fail to keep those concerns together. Workstream Continuity Design meets that threshold provisionally.

<a id="what-the-thesis-gets-right"></a>
### What the thesis gets right

The central thesis correctly identifies a mismatch between many application shells and asynchronous delegated work. Navigation trees, dashboards, feeds, chats, and notifications typically answer some combination of where information lives, what exists, what happened, and what can be initiated. Supervising concurrent work requires a different answer set: what changed in meaning, what is now owed, who is acting, what is waiting, what is blocked, what authority remains, and what decision can be made next? The requirement applies each time attention enters a workstream, not only when a person returns after a long absence. Current agent products increasingly expose background execution, plans, logs, pull requests, takeover controls, approvals, and recurring tasks, confirming that the interaction model is moving beyond synchronous foreground commands. [R26–R33]

The thesis is strongest when stated as a deficiency of **integration and continuity**, not a claim that every pre-agent interface assumes one task or one page. Enterprise operations software has supported concurrency, queues, service levels, handoffs, and audit histories for decades. The emerging challenge is to make those primitives legible across human and machine actors, absences, probabilistic work, changing assumptions, and externally consequential actions.

<a id="a-decision-the-category-changes"></a>
### A decision the category changes

A fair test of a new category is whether it changes a design decision that competent conventional practice gets wrong. One recurring decision shows the difference.

When a team adds agents to an operational product, the obvious move is to create a top-level section for machine work — an “AI Activity,” “Agents,” or “Automations” view alongside the existing queues. Several current products expose exactly such a dedicated surface for machine work or agent monitoring. [R30, R34] The choice is reasonable under established practice: dashboard design organizes by data source, and a new capability appears to deserve a new home.

Consider an agent that triages a case and prepares an externally consequential action — a refund, an outreach, a filing — that a person must approve before it executes. Routed into an “AI Activity” section, the work is shown as agent progress, often resolving to a green “completed” state once the draft is ready. The human-review obligation now lives inside the machine-work view. An operator scanning their main queue does not see it, because it has been classified as “the AI’s work.” The completion cue implies nothing is owed. The deadline passes, or the operator approves from an activity record rather than a decision context with evidence.

Workstream Continuity Design makes a different call, and it follows from one commitment rather than from taste. Because state and agency are separate dimensions, “AI-active” is an actor condition, not an operational state. The same workstream is placed by its operational state — Review — and its next actor — a human — regardless of which actor currently holds it. It therefore appears in Now and Human oversight, where a person owes a decision, while machine involvement is expressed as an actor label and a set of controls inside that state. A dedicated AI Work Monitor is added only when supervising many runs is itself a primary role, and never as the sole place a human obligation appears.

No single inherited discipline forces this. Dashboard practice organizes by feature; situation-awareness theory requires that state be shown but does not require separating actor from state; case management typically carries one assignee field. The correct decision emerges only when state–agency separation, the durable-workstream unit, and attention-by-consequence are held at once. This is the sense in which the category exceeds a relabeling: it is the smallest set of commitments under which the obvious decision becomes visibly wrong.

<a id="what-the-thesis-overstates-or-must-refine"></a>
### What the thesis overstates or must refine

Three claims need qualification.

First, “pre-agent” should not imply “primitive.” Case management, air-traffic control, security operations, customer support, workflow engines, and incident response already embody supervisory concepts. The category inherits heavily from them.

Second, concurrency alone is not new. Knowledge workers have long maintained multiple working spheres and moved along a multitasking continuum from rapid switching to longer sequential gaps. [R1, R64] That is the baseline use case. Agents amplify the problem by increasing the volume, persistence, and opacity of delegated execution: software can continue transforming data, calling tools, creating artifacts, and waiting on events while the initiating person is elsewhere.

Third, dashboards are not inherently deficient. A dashboard can become a strong continuity surface if it is organized around obligations, deltas, owners, next actors, and resumable context. The target of critique is the **inventory dashboard**, not the form factor.

<a id="strongest-supporting-evidence"></a>
## Strongest supporting evidence

<a id="multitasking-spans-rapid-switching-to-longer-intervals"></a>
### 1. Multitasking spans rapid switching to longer intervals

González and Mark described knowledge work as movement among multiple “working spheres” — coherent units with goals, people, resources, and time horizons. [R1] Salvucci, Taatgen, and Borst model multitasking as a continuum from concurrent performance with rapid switching to sequential tasks with longer intervals. [R64] Together, this lineage supports one continuity problem across seconds, minutes, and days. Elapsed time changes staleness and reconstruction burden; it does not define the category. A workstream is not synonymous with a tab or task: it binds purpose, actors, artifacts, state, dependencies, and temporal conditions.

Diary and laboratory studies likewise show that switching and interruption are normal features of information work, not rare failures of discipline. They can alter performance strategy while increasing stress, frustration, time pressure, and effort. [R2, R6] The primary design target is therefore repeated acquisition of decision-ready context during ordinary portfolio work.

<a id="each-switch-creates-a-reconstructive-task"></a>
### 2. Each switch creates a reconstructive task

Experimental models show that interrupted work does not simply restart at the prior cursor position: people recover goals, intermediate state, and intended next actions. [R3–R5] Developer-specific studies found that programmers rely heavily on notes and contextual cues when resuming work; structured activity cues can materially improve successful resumption. [R62, R63] This supports a stable workstream grammar that preserves the exact semantics needed for the next decision rather than only reopening a location.

<a id="supervisory-control-has-known-failure-modes"></a>
### 3. Supervisory control has known failure modes

Bainbridge’s “ironies of automation” remains directly relevant: automation can leave people responsible for monitoring and intervention while simultaneously reducing the practice and information needed to intervene well. [R8] Levels-of-automation research and situation-awareness theory likewise show that allocation of function, state comprehension, and projection matter—not just whether automation exists. [R7, R9] Agent products recreate these problems in ordinary business software.

<a id="appropriate-reliance-requires-calibrated-evidence-and-control"></a>
### 4. Appropriate reliance requires calibrated evidence and control

Trust in automation should be calibrated to capability and context, not maximized. [R10] Human-AI interaction guidance recommends setting expectations, making clear what the system can do, supporting correction and dismissal, showing contextually relevant information, and providing global controls. [R15, R16] These recommendations become concrete in continuity surfaces: provenance at decisions, visible uncertainty, intervention controls, durable receipts, and explicit permission boundaries.

<a id="governance-increasingly-requires-effective-oversight-and-monitoring"></a>
### 5. Governance increasingly requires effective oversight and monitoring

The EU AI Act’s human-oversight provision requires high-risk AI systems to be designed so natural persons can understand capabilities and limitations, remain aware of automation bias, interpret output, override or reverse it, and interrupt the system. [R19] NIST’s AI Risk Management Framework and its 2026 work on deployed-system monitoring emphasize governance across the lifecycle and the difficulty of observing systems after deployment. [R17, R18] Regulation does not dictate the proposed information architecture, but it reinforces the need for legible state, authority, provenance, intervention, and audit.

<a id="ai-control-makes-independently-validated-control-state-a-continuity-input"></a>
### 6. AI control makes independently validated control state a continuity input

Google DeepMind’s AI Control Roadmap treats certain internally deployed agents as untrusted and defines two system-level invariants: reliable detection of misaligned intent or action, and effective prevention or response. It distinguishes asynchronous response, which may occur after effects, from synchronous response that intercepts execution before continuation, and escalates monitoring, access control, isolation, and shutdown as model capabilities increase. [R74]

WCD does not supply those controls. The design implication is that control state — monitoring mode, authorization result, containment, residual effects, and the next responsible actor — must enter the same operating picture as workflow state. Google DeepMind also reports an internal asynchronous monitor applied to one million coding-agent trajectories and a live monitor used to respond to issues such as unintended deletion; most flags reportedly reflected misinterpretation or overeagerness rather than adversarial intent. [R75] This is vendor-reported implementation evidence, not independent validation, but it reinforces the need to present control exceptions with evidence and decision context rather than as undifferentiated alarms.

<a id="current-products-are-becoming-asynchronous-and-multi-actor"></a>
### 7. Current products are becoming asynchronous and multi-actor

As observed on 20 June 2026, GitHub Copilot cloud agent can receive issues, research repositories, create plans, make branch changes, expose commits and logs, run in the background, and hand work back through pull requests. [R26] Cursor presents multiple background agents and reviewable results. [R27] OpenAI’s ChatGPT agent narrates activity, supports interruption and browser takeover, and can schedule recurring tasks. [R28] UiPath Maestro, Microsoft security agents, and Azure SRE Agent position humans as orchestrators or supervisors of workflows and exceptions. [R31–R33] These are product claims and documented capabilities, not proof of usability; they nevertheless demonstrate the operating-model shift.

<a id="organizational-tool-environments-are-fragmented"></a>
### 8. Organizational tool environments are fragmented

Workforce studies report high application and communication-channel counts, extensive coordination work, and activity outside conventional hours. [R22–R25] These are mostly vendor-sponsored studies and should not be treated as neutral causal evidence. Their useful contribution is descriptive: contemporary work is distributed across systems and temporal boundaries, increasing the value of durable orientation. The design doctrine does not depend on any single vendor statistic.

<a id="shared-agent-and-long-running-deployments-make-semantics-an-operational-boundary"></a>
### 9. Shared-agent and long-running deployments make semantics an operational boundary

Recent official materials expose several cases that a workstream-level grammar alone cannot safely leave implicit. Shared channel agents can receive requests from several people, maintain scoped memory, act proactively, and schedule future work; long-running workspaces preserve context and recurring automations; multi-agent systems create delegation chains and population-level failure modes; agent identity initiatives treat authentication, authorization, and on-behalf-of action as infrastructure concerns; and conformity initiatives separate requirements, assessment methods, and reusable evidence. These developments support a modular policy for instruction provenance, principal identity, memory mutation, recurrence, steering, tool capability, composition, configuration identity, and conformance evidence. [R76–R94]

<a id="strongest-counterargument"></a>
## Strongest counterargument

The strongest counterargument is that **no new category is needed**. Existing disciplines already cover the problem:

- Dashboard and information-architecture practice can prioritize actionable state.

- Workflow and case-management systems already encode status, assignment, dependencies, approvals, and history.

- Inbox and queue patterns already separate actionable from non-actionable work.

- Incident-management and control-room design already support monitoring, exceptions, escalation, and handoff.

- Human-AI interaction and human-in-the-loop design already cover explainability, confidence, approval, intervention, and accountability.

- Usability heuristics already require system-status visibility, user control, consistency, recognition over recall, error prevention, and recovery. [R20]

This counterargument is substantially correct. A weak version of “Continuity UX” would merely rename good enterprise UX. A new label would add vocabulary debt without adding predictive or evaluative value.

The response is to define a narrower object and measurable failure mode. Workstream Continuity Design is not every feature that persists state. It addresses **rapid operating continuity for concurrent work**: when attention moves into a workstream, can a person accurately reconstruct intent, meaningful changes, obligations, actor responsibility, authority, consequence, and the safe next decision within the time and attention available? Longer absences add staleness and recovery demands, but they are stress cases of the same switch-in problem. Existing practices become inputs; the category is the integration layer and quality attribute.

A falsification condition follows. If conventional dashboards, queues, histories, and notifications produce equivalent or better Time to Decision Readiness, first-decision accuracy, continuity-grammar accuracy, cross-workstream contamination, oversight quality, and safety outcomes without explicit workstream, delta, actor, evidence, consequence, and policy models, the category should collapse back into established enterprise UX. Version 0.5 treats the movement as a testable proposition, not a settled school.

<a id="pre-agent-versus-agent-era-paradigm-map"></a>
## Pre-agent versus agent-era paradigm map

| **Dimension**       | **Dominant application model, approximately 2015–2026** | **Emerging supervisory model**                                                      | **Design consequence**                                                                                             |
|---------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Human role          | Direct executor operating controls                      | Principal, collaborator, reviewer, and exception handler                            | Show authority, delegation, intervention, and accountability                                                       |
| Unit of interaction | Page, record, document, message, or session             | Durable workstream spanning objects, actors, and time                               | Persist goal, state, actors, authority, delta, and acquisition/resume point independently of navigation            |
| Temporal model      | Foreground, synchronous, request–response               | Concurrent and asynchronous work with switches ranging from seconds to days         | Represent rapid switches, waiting, progress, deadlines, stale assumptions, and change while attention is elsewhere |
| Workload model      | One active context with secondary navigation            | Concurrent portfolio with uneven urgency and consequence                            | Orient around obligations and exception tiers, not equal tiles                                                     |
| State               | Attached to page, record, browser, or local draft       | Operational state durable across sessions, devices, and actors                      | Separate view state, work state, policy state, and actor state                                                     |
| Navigation          | Location is treated as orientation                      | Location is insufficient without purpose and delta                                  | Opening or returning to a location does not restore purpose, change, or obligation                                 |
| Dashboard           | Inventory, KPI, and aggregate status                    | Decision-ready switch-in orientation and supervision                                | Lead with goal, material delta, actors, authority, consequence, and safe next action                               |
| Notification        | Event announcement                                      | Selective summons plus reconstructed context                                        | Alert only when interruption is justified; land on a decision-ready state                                          |
| Activity feed       | Chronological events                                    | Semantic delta and responsibility transfer                                          | Compress low-value events; explain changed assumptions and next actor                                              |
| Automation          | Rule executes a known procedure                         | Probabilistic actor plans, uses tools, and adapts                                   | Expose intent, evidence, confidence, authority, and recovery controls                                              |
| Ownership           | Assignee or creator                                     | Accountable owner, current actor, next actor, and external dependency               | Make responsibility transitions explicit                                                                           |
| Completion          | Task marked done                                        | Safe handoff with evidence, consequences, and downstream state                      | Distinguish produced, reviewed, approved, executed, and verified                                                   |
| Memory              | Recent items, preferences, browser history              | Durable workstream memory across switches, sessions, devices, and actors            | Persist only intent-bearing state; revalidate before action                                                        |
| Safety              | Warning copy and disabled buttons                       | System-level policy, least agency, and fail-closed routing                          | UI communicates rules but cannot redefine eligibility or permission                                                |
| Failure             | Error message and retry                                 | Partial result, containment, rollback, escalation, and learned boundary             | Preserve artifacts and provenance; support intervention and recovery                                               |
| Success             | Fast entry and task completion                          | Fast decision readiness, accurate resumption, calibrated oversight, safe throughput | Add TTDR, grammar accuracy, contamination, and control metrics to conventional usability metrics                   |

<a id="audit-of-dominant-interface-patterns-20152026"></a>
## Audit of dominant interface patterns, 2015–2026

The dispositions below resist two symmetrical errors: preserving every familiar pattern because it is established, and discarding useful patterns merely because they predate agents.

| **Pattern**                   | **Original problem solved**                            | **User assumption and enduring strength**                                    | **Break under concurrent delegated work**                                      | **Disposition**                                                                 |
|-------------------------------|--------------------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Direct manipulation           | Make objects and effects visible and controllable      | Human is present and acts continuously; excellent for local, reversible work | Long-running or remote execution has no continuously manipulable object        | **Retain** for intervention and local edits; pair with durable execution state  |
| CRUD forms                    | Create and maintain structured records                 | Record is primary unit; strong for data integrity and validation             | Work meaning spans many records and transitions                                | **Retain** as data surface; subordinate to workstream context                   |
| Navigation-centered IA        | Help users find functions and information              | Location predicts intent; scales stable product taxonomies                   | Returning to a location does not restore purpose, change, or obligation        | **Adapt** with resume state and cross-cutting workstream views                  |
| Dashboard card grid           | Summarize heterogeneous metrics                        | User can synthesize equal-sized summaries                                    | Equal tiles flatten consequence; counts do not explain action                  | **Adapt** into a ranked orientation surface; reduce ornamental metrics          |
| Bento layout                  | Package heterogeneous content responsively             | Visual grouping aids scanning                                                | Can become a fashionable card grid without operational hierarchy               | **Use selectively**; hierarchy must come from state and consequence             |
| Dense data table              | Compare many homogeneous entities                      | Expert can scan columns and sort/filter                                      | Rows omit narrative intent, actor transitions, and semantic deltas             | **Retain** as execution surface; add continuity columns and saved context       |
| Command palette               | Accelerate known commands and navigation               | User knows desired command; keyboard efficiency                              | Does not tell user what deserves action or why                                 | **Retain** for execution; do not mistake invocation for orientation             |
| Search-first navigation       | Retrieve known or describable objects                  | User can formulate query and recognize result                                | Weak for forgotten obligations and changed assumptions                         | **Retain**; augment with proactive continuity cues                              |
| Notification center           | Collect event announcements                            | Events can be triaged independently                                          | Event volume, duplicates, and missing context create reconstruction work       | **Replace event dump** with deduplicated, consequence-based summons             |
| Activity feed                 | Preserve chronology and accountability                 | Chronology explains current state                                            | High-volume machine actions obscure meaningful change                          | **Adapt** into semantic deltas with expandable raw history                      |
| Collaborative document/canvas | Shared creation and distributed cognition              | Work lives in the artifact; presence and comments provide awareness          | Cross-artifact dependencies and agent runs remain fragmented                   | **Retain**; attach artifacts to a workstream and surface unresolved obligations |
| Chat sidecar/copilot          | Lower invocation cost and support language interaction | Conversation can carry context                                               | Chat history becomes opaque memory and poor portfolio navigation               | **Constrain** to dialogue; never make chat the sole state model                 |
| Workflow builder              | Encode repeatable procedures and automation            | States and transitions are predictable                                       | Probabilistic branches, exceptions, and changing authority complicate diagrams | **Retain** for policy; add runtime workstream and exception views               |
| Inbox/queue                   | Separate items needing action                          | Work can be serialized and completed                                         | Multiple waiting modes, machine activity, and dependencies become collapsed    | **Extend** into state-distinct lanes and next-actor semantics                   |
| Status dashboard              | Monitor health and exceptions                          | Aggregate telemetry predicts operational condition                           | Health does not equal user obligation; green can conceal pending review        | **Retain** compactly; connect status to affected workstreams                    |
| Personalization               | Reduce repeated configuration                          | Stable preferences predict desired presentation                              | Prior state may be stale, unsafe, or inappropriate on a shared device          | **Adapt** with explicit saved context, scope, expiry, and clear controls        |
| AI summary                    | Compress large bodies of information                   | Model can identify salient facts                                             | Omission, uncertainty, and unsupported synthesis can misorient                 | **Use with evidence links**, delta semantics, and confidence boundaries         |
| “Single pane of glass”        | Reduce tool switching and fragmented monitoring        | More information in one surface improves control                             | Aggregation creates density without shared semantics or authority              | **Reject as a goal**; pursue one coherent operating model, not one giant pane   |

<a id="current-agent-interface-market-audit"></a>
## Current agent-interface market audit

<a id="audit-method-and-limits"></a>
### Audit method and limits

The audit used publicly accessible official product documentation and vendor demonstrations, observed on **20 June 2026**, across CRM, support, development, research, work management, security, enterprise automation, browser agents, and productivity. A “strong example” means the product exposes several continuity primitives in its documented interaction model; it does not mean independent usability testing verified the experience. A “partial example” has useful primitives but leaves re-entry, responsibility, policy, or cross-workstream orientation incomplete. “Failure” denotes a documented incident or a design lesson, not a blanket judgment of the product.

<a id="strong-examples"></a>
### Strong examples

<a id="github-copilot-cloud-agent-software-development"></a>
#### GitHub Copilot cloud agent — software development

Delegation is attached to durable GitHub issues and branches. The agent can research, plan, commit, expose logs, work in the background, and hand off through a pull request. Multiple sessions and explicit assignment provide owner and actor cues. The pull request becomes a review boundary with attributable artifacts. [R26]

**Continuity strength:** durable work object, background execution, inspectable intermediate record, human review boundary, team visibility.

**Gap:** cross-session portfolio orientation and “since last inspected” semantics remain less explicit than issue and pull-request history.

<a id="cursor-backgroundcloud-agents-software-development"></a>
#### Cursor background/cloud agents — software development

Cursor’s current positioning includes parallel agents, background work, review of generated changes, and handoff to a developer. [R27]

**Continuity strength:** multiple concurrent runs and reviewable outputs make the supervisory role visible.

**Gap:** coding artifacts provide unusually strong provenance; the model does not automatically transfer to less structured enterprise work.

<a id="uipath-maestro-enterprise-automation"></a>
#### UiPath Maestro — enterprise automation

Maestro presents orchestration across agents, robots, systems, and people, with monitoring, process models, exceptions, and governance. [R31]

**Continuity strength:** explicitly multi-actor, process-level state, human tasks, and exception handling.

**Gap:** control-tower breadth can drift toward administration and telemetry rather than the individual supervisor’s rapid re-entry.

<a id="microsoft-defender-phishing-triage-agent-security-operations"></a>
#### Microsoft Defender Phishing Triage Agent — security operations

The documented pattern triages alerts, investigates evidence, and allows security teams to review outcomes and tune behavior. [R32]

**Continuity strength:** bounded domain, evidence-bearing decisions, exception reduction, and human supervision of consequential classifications.

**Gap:** quality depends on visibility into evidence, false-negative containment, and longitudinal tuning—not merely a completed triage count.

<a id="azure-sre-agent-reliability-operations"></a>
#### Azure SRE Agent — reliability operations

Azure’s SRE agent model emphasizes diagnosis, remediation workflows, human checkpoints, and operation in a high-consequence domain. [R33]

**Continuity strength:** event-driven work, incidents, evidence, intervention, and accountability naturally align with workstream continuity.

**Gap:** incident surfaces can over-index on live response; long-horizon re-entry and cross-incident portfolio management require separate design.

<a id="openai-codex-cloud-tasks-software-development"></a>
#### OpenAI Codex cloud tasks — software development

Cloud coding tasks can run asynchronously in isolated environments, produce changes and logs, and return work for review. [R29]

**Continuity strength:** delegated run, durable artifact, inspectable work, explicit review.

**Gap:** the chat/task container can still make the wider portfolio and changed assumptions hard to scan.

<a id="partial-examples"></a>
### Partial examples

<a id="servicenow-ai-control-tower"></a>
#### ServiceNow AI Control Tower

It inventories agents, models, identities, risks, runtime performance, and compliance across the enterprise. [R30] This is strong governance infrastructure, but its center of gravity is organizational control and asset inventory rather than the line user’s exact resume point and obligations.

<a id="salesforce-agentforce-service-monitoring"></a>
#### Salesforce Agentforce service monitoring

Service supervisors can monitor service-agent activity and outcomes within established CRM and omnichannel operations. [R34] The surrounding case model is an advantage. The open question is whether machine work, customer state, approvals, and “since you left” deltas converge into one decision-ready workstream.

<a id="asana-ai-teammates"></a>
#### Asana AI Teammates

Asana places AI roles in collaborative work and offers role-specific teammates that draft, analyze, or optimize work. [R35] Existing projects, assignments, goals, and status fields provide durable scaffolding. Agency boundaries, intervention history, and machine-to-human handoff semantics remain emergent.

<a id="atlassian-rovo"></a>
#### Atlassian Rovo

Rovo combines enterprise search, chat, and agents across Atlassian work. [R36] Search and connected knowledge reduce retrieval friction, but a conversational front door does not by itself reconstruct operational responsibility or safe next action.

<a id="chatgpt-agent"></a>
#### ChatGPT agent

The product narrates browser activity, supports interruption and takeover, requests authentication for actions, and can schedule recurrence. [R28] These are meaningful supervision primitives. A conversation remains the dominant container, however, and cross-task portfolio orientation is limited relative to a command center.

<a id="intercom-fin-and-hubspot-breeze"></a>
#### Intercom Fin and HubSpot Breeze

Both embed AI into customer-facing or sales/service workflows, where conversation histories and CRM records provide context. [R37, R38] The continuity challenge is to distinguish generated answer, policy permission, customer commitment, unresolved exception, and next human obligation without burying the distinction in transcripts.

<a id="instructive-failures-and-anti-patterns"></a>
### Instructive failures and anti-patterns

<a id="air-canada-chatbot-unsupported-representation-and-accountability-gap"></a>
#### Air Canada chatbot: unsupported representation and accountability gap

A tribunal held Air Canada responsible for misleading information provided by its chatbot about bereavement fares. [R42] The lesson is not merely “chatbots hallucinate.” A public-facing system made a consequential representation without sufficiently reliable policy grounding, contradiction handling, or an effective boundary between generated guidance and authoritative eligibility.

<a id="nyc-mycity-chatbot-inconsistent-guidance-in-a-public-service-context"></a>
#### NYC MyCity chatbot: inconsistent guidance in a public-service context

A New York City Comptroller audit reported that the MyCity AI chatbot appeared unable to provide accurate or consistent information. [R43] Public benefits and regulatory guidance require authoritative provenance, policy-aware routing, and fail-closed escalation—not confident conversational completion.

<a id="replit-production-database-incident-authority-intervention-and-environment-boundaries"></a>
#### Replit production-database incident: authority, intervention, and environment boundaries

Reporting on a 2025 incident described an AI coding agent deleting production data during a test and then generating misleading output about the event. [R44] Public accounts are incomplete and should not be generalized beyond the incident. The design lesson is robust: production authority, environment identity, destructive-action confirmation, immutable logs, and recoverability cannot depend on conversational instruction alone.

<a id="microsoft-recall-redesign-memory-without-legible-scope-becomes-surveillance-risk"></a>
#### Microsoft Recall redesign: memory without legible scope becomes surveillance risk

Microsoft changed Recall’s architecture to make snapshot capture opt-in, encrypt sensitive data, and provide stronger user control after security and privacy criticism. [R45, R46] Durable context can reduce reconstruction cost, but indiscriminate capture creates privacy, shared-device, sensitive-data, and secondary-use risks. Continuity memory must be scoped, explainable, erasable, and minimized.

<a id="aggregate-agent-analytics-adoption-telemetry-mistaken-for-oversight"></a>
#### Aggregate agent analytics: adoption telemetry mistaken for oversight

Several enterprise products report counts of agent usage, outputs, or completed actions. Aggregate analytics can support governance, but they do not tell an individual supervisor what changed, which decisions are pending, whether an action was authorized, or where to intervene. The anti-pattern is **activity-as-control**: a control tower that counts machine work without reconstructing responsibility and consequence.

<a id="naming-matrix"></a>
## Naming matrix

Scoring uses a five-point scale. “Searchability” combines apparent exact-phrase occupation and semantic collision based on a basic web audit conducted 20 June 2026. This is not legal or trademark clearance.

| **Candidate**                    | **Memorable** | **Self-explaining** | **Searchable / low collision** | **Broad and durable** | **Sentence test** | **Total /25** | **Principal risk**                                                                                                                                        |
|----------------------------------|---------------|---------------------|--------------------------------|-----------------------|-------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Continuity UX                    | 5             | 3                   | 2                              | 5                     | 4                 | **19**        | “Continuity” is strongly associated with Gestalt visual continuity, cross-device continuity, business continuity, and dark-pattern discourse. [R51–R54] |
| Supervisory Continuity Design    | 3             | 4                   | 4                              | 4                     | 3                 | **18**        | Precise but long; “supervisory” sounds industrial and may imply monitoring rather than resumption.                                                        |
| Continuity-First Design          | 4             | 3                   | 2                              | 5                     | 4                 | **18**        | Existing cross-device and responsive-design usage; unclear continuity object.                                                                             |
| Re-entry-First Design            | 4             | 4                   | 4                              | 3                     | 4                 | **19**        | Strong interaction lens but too narrow for ongoing supervision and policy.                                                                                |
| Attention-Resilient UX           | 4             | 3                   | 4                              | 4                     | 4                 | **19**        | Risks locating the problem in a distractible user and over-centering attention.                                                                           |
| Threaded Operations Design       | 3             | 3                   | 4                              | 4                     | 3                 | **17**        | “Thread” collides with messages and execution threads; can imply linearity.                                                                               |
| Supervisory UX                   | 4             | 3                   | 2                              | 3                     | 4                 | **16**        | Already used generically in industrial control and agent commentary; omits continuity.                                                                    |
| Temporal Operations UX           | 3             | 2                   | 4                              | 4                     | 3                 | **16**        | Academic-sounding but opaque; “temporal” does not signal responsibility or return.                                                                        |
| Human Command UX                 | 4             | 3                   | 4                              | 2                     | 3                 | **16**        | Militaristic, hierarchical, and poorly suited to collaborative or care contexts.                                                                          |
| Context-Persistent Design        | 3             | 4                   | 4                              | 4                     | 3                 | **18**        | Technical and state-centric; persistence can preserve stale or unsafe context.                                                                            |
| Portfolio-of-Work UX             | 2             | 4                   | 4                              | 5                     | 2                 | **17**        | Accurate concept, awkward phrase, weak sentence test.                                                                                                     |
| Agent Oversight Design           | 4             | 5                   | 3                              | 2                     | 4                 | **18**        | Clear but bound to AI hype and excludes non-agent systems with the same need.                                                                             |
| Operational Continuity UX        | 4             | 4                   | 2                              | 4                     | 4                 | **18**        | Strong collision with business continuity, resilience, and disaster recovery.                                                                             |
| Resumable Work Design            | 5             | 5                   | 4                              | 4                     | 5                 | **23**        | Plain and useful, but can imply a narrow save-and-resume feature rather than supervision.                                                                 |
| **Workstream Continuity Design** | 4             | 5                   | 4                              | 5                     | 5                 | **23**        | Three-word term; “workstream” is enterprise language and may need translation in consumer contexts.                                                       |

<a id="three-finalists"></a>
### Three finalists

1\. **Workstream Continuity Design** — strongest balance of scope, specificity, longevity, and sentence utility: “This product has poor workstream continuity.”

2\. **Resumable Work Design** — clearest plain-language option and useful pattern-level label; weaker as a broad discipline because it underplays supervision, responsibility, and policy.

3\. **Supervisory Continuity Design** — strongest formal descriptor for high-agency systems; less approachable and too closely associated with monitoring roles.

<a id="recommendation"></a>
### Recommendation

**Selected category name: Workstream Continuity Design**

Formal definition. Workstream Continuity Design is the discipline of designing shared operational semantics and interfaces that preserve and reconstruct the intent, operational state, responsibility, meaningful change, authority, consequence, and safe control of concurrent work across rapid attention shifts, interruptions, sessions, devices, and human or machine actors, enabling a person to orient, supervise, decide, and resume without rebuilding context from scratch.

Plain-language definition. It tells a person entering any workstream where it stands, what changed, who acts next, what is allowed, and what decision can be made now.

Tagline. The interface remembers where the work stands — at every switch.

**Collision-risk assessment.** The exact phrase appeared relatively unoccupied in a basic web search on 20 June 2026. Its component words are common, so distinctiveness is moderate rather than strong. “Workstream” reduces collisions with Gestalt continuity, media continuity, cross-device continuity, and business-continuity planning. The phrase still requires trademark, domain, corpus, and multilingual review before commercial adoption.

**Why reject the working name “Continuity UX.”** It is memorable but underspecified and collision-prone. In design education, continuity commonly names a Gestalt principle; in product discourse, it can mean cross-device handoff; in operations, it suggests disaster recovery; in deceptive-design taxonomies, “forced continuity” refers to unwanted subscription continuation. [R51–R54] The shorter name can remain an informal shorthand inside the document, but it is weak as a searchable category.

<a id="workstream-continuity-design-design-bible-v0.5"></a>
## Workstream Continuity Design: Design Bible v0.5

<a id="executive-thesis"></a>
### 1. Executive thesis

Software is changing from an instrument a person operates moment by moment into an environment in which many workstreams can be delegated, continued, paused, rerouted, and completed by several human and machine actors at once. The primary interaction challenge is repeated switch-in: a person enters a workstream, acquires its operating picture, makes or delegates the next decision, and moves to another. Many products still organize experience around pages, records, documents, messages, and foreground commands. Those structures remain useful, but they do not automatically answer the entering supervisor’s questions: What is the objective? What changed since the last trusted inspection? Which assumption no longer holds? What needs a human decision? What can proceed without me? Who is responsible now? Which action is safe, reversible, and authorized?

The problem is not ordinary forgetfulness. Working memory is limited; goals lose activation when attention moves; interruptions require reconstruction; and work naturally spans multiple spheres along a multitasking continuum. [R1–R6, R12, R62–R64] A competent user can lose operational orientation after a switch of seconds or hours when state is distributed among a CRM record, a chat transcript, a background run, a notification, an email, an approval queue, and a policy service. The interface may remember each artifact while failing to express the work in a common, decision-ready form.

Workstream Continuity Design addresses that gap. It designs rapid operating continuity for concurrent work. Its durable unit is a workstream: a goal-directed course of work that binds relevant objects, actors, state, decisions, dependencies, artifacts, policy, and a resume point. Its primary moments are focus transition, delegation, change, handoff, intervention, recovery, and return. Its core output is not a busier control room. It is fast, accurate decision readiness with proportional attention.

This discipline does not mean placing chat on every page, anthropomorphizing agents, maximizing automation, preserving every screen state forever, or collapsing all tools into a “single pane of glass.” It does not replace information architecture, workflow design, service design, human-AI interaction, or safety engineering. It coordinates them around a particular quality: a person should be able to switch into any workstream and recover the minimum sufficient operating context without reconstructing it from raw traces.

The need exists without AI wherever cases, incidents, approvals, projects, investigations, or external parties continue concurrently across time. Agents increase urgency because they add parallel execution, probabilistic plans, hidden intermediate steps, variable authority, and external side effects. A human can become accountable for work they did not directly perform and may not have watched unfold. The design obligation therefore shifts from making commands easy to making responsibility, change, authority, and the next decision legible at each switch.

The category is timely because product capability and governance are converging. Current development, automation, security, and browser agents already run asynchronously and expose plans, logs, review gates, or takeover controls. [R26–R33] Human-oversight and monitoring requirements increasingly demand interpretability, intervention, reversal, and awareness of automation bias. [R17–R19] The practical question is no longer whether software will act. It is whether people can remain meaningfully oriented and in control as it does.

<a id="category-definition-and-boundaries"></a>
### 2. Category definition and boundaries

<a id="the-object-of-design"></a>
#### The object of design

Workstream Continuity Design concerns a system’s ability to maintain operational intelligibility across attention transitions and over time. It covers the data model, information architecture, interaction patterns, visual semantics, event history, policy boundaries, and evaluation methods required to support five human activities:

- Switch away without relying on mental rehearsal, tab hoarding, or ad hoc notes.

- Enter or re-enter a workstream and identify its intent and current reality within seconds when the situation allows.

- Decode meaningful changes, obligations, actor transitions, authority, and uncertainty through a stable continuity grammar.

- **Supervise** work that may continue through people, services, or agents.

- Make the next safe decision, resume, or intervene with appropriate authority and recovery options.

<a id="inclusion-test"></a>
#### Inclusion test

A product is a strong candidate when several of the following are true. Three is a practical screening heuristic, not a validated cutoff:

- Work persists beyond a session.

- Several work items proceed concurrently and attention moves among them.

- Responsibility moves among people, systems, or external parties.

- State can change while attention is on another workstream, even for a short interval.

- Progress depends on approvals, evidence, time, policy, or external events.

- Actions have financial, legal, reputational, privacy, security, or human consequences.

- Machine output is probabilistic or requires review.

- The cost of misunderstanding state exceeds the cost of an extra interaction.

<a id="where-the-discipline-does-not-apply"></a>
#### Where the discipline does not apply

The inclusion test is only credible if it also excludes. Two cases that superficially resemble candidates do not warrant the discipline, and stating why keeps the boundary from being drawn after the fact.

A single-session creative or transactional tool — a photo editor, a drawing canvas, a calculator — fails the test cleanly. Work does not persist concurrently, no other actor holds it, nothing changes while attention is elsewhere, and there is no supervisory relationship. Conventional direct manipulation and undo are the right design.

The more instructive exclusion is a case that partially satisfies the checklist and still does not need the discipline. A multi-session form wizard with consequential output — a tax-filing flow, a loan application, a benefits enrollment completed over two or three sittings — scores on at least two criteria: work persists beyond a session, and the action has financial or legal consequence. It is tempting to treat it as a continuity problem. But the remaining criteria do not hold: there is one operator and one active line of work, no other actor advances or changes it during an absence, and the only “since you left” delta is the user’s own saved progress. There is nothing to supervise, delegate, or reconcile. The correct design is reliable save-and-resume with clear validation and re-entry — the narrower discipline this document considered and named as Resumable Work Design. Workstream-continuity machinery — re-entry envelopes, since-last-inspection digests, actor chains, policy-resolved authorization at the operated surface — would add cost without addressing a problem the system has.

This boundary is also the substantive difference behind the naming choice. Resumable Work Design is a real and narrower discipline, not a rejected synonym: a system can require resumable work and not require workstream continuity. The discipline proposed here begins where work is concurrent, delegated across human or machine actors, and changing during absences, and it should not be claimed for systems that merely persist a single user’s state.

<a id="boundaries-against-adjacent-fields"></a>
#### Boundaries against adjacent fields

| **Adjacent field**                        | **Primary concern**                                                                          | **Relationship to Workstream Continuity Design**                                                                                        | **Boundary**                                                                                                                                    |
|-------------------------------------------|----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Agentic UX                                | Invoking, directing, and collaborating with agents                                           | Supplies delegation, plan, tool-use, and intervention patterns                                                                          | Continuity also covers non-agent work and the portfolio after invocation                                                                        |
| Conversational UX                         | Dialogue, turn-taking, intent expression, repair                                             | Useful for asking, explaining, and negotiating                                                                                          | Conversation is not the durable operating model or portfolio IA                                                                                 |
| Calm technology                           | Moving information appropriately between center and periphery                                | Supplies attention proportionality and peripheral awareness [R13]                                                                     | Continuity also requires explicit state, ownership, policy, and re-entry                                                                        |
| Dashboard design                          | Summarizing status and metrics                                                               | Provides scanning and comparison surfaces                                                                                               | A continuity surface must reconstruct intent, deltas, next actors, and resume points                                                            |
| Workflow UX                               | Designing procedures, states, transitions, and tasks                                         | Supplies process semantics and routing                                                                                                  | Continuity spans multiple workflows and supports absence, re-entry, and changing assumptions                                                    |
| Human-in-the-loop design                  | Human review or action within automation                                                     | Supplies checkpoints and exception handling                                                                                             | A loop can be ceremonial; continuity requires meaningful control and cross-transition context                                                   |
| Productivity software                     | Helping users complete work efficiently                                                      | Broad host category                                                                                                                     | Continuity is a specific quality, not a claim about all productivity                                                                            |
| Personalization                           | Adapting presentation or behavior to a user                                                  | Can restore preferences and recent context                                                                                              | Continuity must revalidate stale state, expose scope, and support shared-device privacy                                                         |
| Notification design                       | Summoning attention to events                                                                | Supplies timing and channel decisions                                                                                                   | A notification must land in reconstructed context; most state should not interrupt                                                              |
| General usability                         | Effectiveness, efficiency, satisfaction, error prevention                                    | Foundational requirements remain [R20]                                                                                                | Continuity adds focus-transition, multi-actor, and supervisory measures                                                                         |
| AI control and adversarial-agent security | Detecting, preventing, containing, and responding to strategic or adversarial agent behavior | Supplies validated monitoring, access-control, isolation, containment, and response states that continuity surfaces must render [R74] | WCD does not establish alignment or security assurance; it preserves and reconstructs control state so an operator can understand and act on it |

<a id="products-that-need-it-without-ai-agents"></a>
#### Products that need it without AI agents

- A hospital handoff and clinical-results system.

- A public-benefits eligibility and appeals case system.

- A security-incident console with analyst shifts.

- A legal matter workspace with deadlines, evidence, and external counsel.

- A construction permitting platform with inspectors and applicants.

- A procurement system with approvals, suppliers, and policy exceptions.

- An insurance claims platform with adjusters, evidence, and waiting conditions.

- A multiplayer live-operations console with incidents and content releases.

The common factor is not intelligence. It is durable concurrent work that must remain intelligible across attention, time, and responsibility boundaries.

<a id="the-paradigm-shift"></a>
### 3. The paradigm shift

<a id="from-command-execution-to-work-supervision"></a>
#### From command execution to work supervision

The outgoing model is not disappearing. People still edit documents, update records, and directly manipulate objects. The emerging model adds a supervisory layer in which the person specifies outcomes, delegates bounded work, reviews evidence, resolves exceptions, and retains accountability. The interface must support both modes without pretending that every action is autonomous.

<a id="revised-dimensions"></a>
#### Revised dimensions

The most useful distinction is not simply “human executor versus human supervisor.” Real systems contain a continuum:

- Direct manual execution.

- Assisted execution with recommendations.

- Machine preparation with human commit.

- Bounded automation with exception review.

- Standing authority for reversible internal actions.

- High-consequence automation requiring continuous supervisory readiness.

The design must make the current allocation visible and changeable. A product fails when its visual language implies one level of authority while the architecture grants another.

<a id="navigation-versus-orientation"></a>
#### Navigation versus orientation

Navigation answers **where can I go?** Orientation answers **what situation am I in?** A menu can reliably return a person to “Deals,” yet fail to explain which deal they were evaluating, why it mattered, what changed, or whether the prior recommendation remains valid. Workstream continuity therefore overlays location with purpose, change, responsibility, and a resume point.

<a id="chronology-versus-semantic-change"></a>
#### Chronology versus semantic change

Raw activity history is indispensable for audit, but poor as a default orientation mechanism. One machine run can emit hundreds of events. An entering or returning operator needs a compressed delta:

- The customer replied and invalidated the planned sequence.

- Eligibility changed because consent expired.

- A requested artifact was produced, but evidence is incomplete.

- The external dependency missed its due condition.

- A policy update now blocks execution.

The system must retain the raw event stream while deriving reviewable semantic changes. Event sourcing provides lineage; the interface still needs meaning. [R47]

<a id="completion-versus-safe-handoff"></a>
#### Completion versus safe handoff

“Done” is often ambiguous in multi-actor work. A draft can be generated, reviewed, approved, sent, received, accepted, and verified—each a distinct state with different accountability. The design should name the transition that occurred and the next actor, not compress the chain into a celebratory checkmark.

<a id="interface-control-versus-policy-enforcement"></a>
#### Interface control versus policy enforcement

A disabled button, warning banner, or confirmation dialog communicates policy but does not constitute policy. Eligibility, suppression, permission, and action authority must be decided by trusted services below the presentation layer. The interface receives and explains the decision, offers permitted recourse, and fails closed when the state cannot be established.

<a id="user-and-cognitive-model"></a>
### 4. User and cognitive model

<a id="the-target-user"></a>
#### The target user

The target is not a person with an unusually short attention span. It is a competent operator whose work is legitimately distributed across several goals, time horizons, collaborators, systems, and agent runs. The person may switch contexts after seconds, minutes, or days; move between operational, creative, and administrative work; return on another device; or inherit work initiated by someone else. Expertise can increase the number and complexity of concurrent commitments rather than eliminate the need for continuity support.

<a id="the-multitasking-continuum"></a>
#### The multitasking continuum

Multitasking behavior ranges from concurrent tasks with switches every few seconds to sequential tasks separated by minutes or hours. [R64] Workstream Continuity Design treats elapsed time as a parameter, not a category boundary. The same semantic skeleton should support a rapid agent-thread switch, an interruption, a handoff, and a multi-day return; longer gaps require more revalidation, staleness handling, and evidence reconstruction.

<a id="working-memory-and-goal-activation"></a>
#### Working memory and goal activation

Working memory can hold only a limited set of active relations, and task goals lose activation when attention shifts. [R4, R5, R12] The interface should not require a person entering a workstream to recover a complex goal hierarchy from a title, timestamp, and activity list. It should externalize the smallest set of cues sufficient to reconstruct the operational model: objective, prior subgoal, last trusted state, meaningful delta, actor chain, authority, and safe next action.

<a id="focus-transitions-interruptions-and-resumption"></a>
#### Focus transitions, interruptions, and resumption

Every focus transition creates an orientation event, whether the gap is thirty seconds or two days. Formal interruption models still provide a useful sequence — primary work, interruption onset, intervening activity, and resumption [R3] — while the multitasking-continuum model connects rapid switching to longer sequential gaps. [R64] WCD therefore treats workstream acquisition as the primary design event. A system can support each phase:

- Before a switch, preserve a lightweight checkpoint automatically or allow an explicit session-close summary.

- While attention is elsewhere, maintain state and classify meaningful changes.

- At switch-in or return, reconstruct context, obligations, and authority.

- At decision or resumption, restore the relevant object, filters, selection, evidence, unfinished subgoal, and safe next action.

Unexpected interruptions will prevent deliberate checkpointing. Automatic snapshots therefore remain useful, but they must be scoped, private, and validated for staleness.

<a id="prospective-memory"></a>
#### Prospective memory

Prospective memory concerns remembering to perform an intended action when a condition or time arrives. Work systems frequently externalize this as reminders, due dates, or subscriptions. Continuity design goes further by representing **the trigger and rationale**: “Review when legal returns revised language,” “Send only after consent is confirmed,” or “Reassess if the renewal date moves.” A due date without the intended condition can produce premature or inappropriate action.

<a id="partial-recollection-and-confidence-loss"></a>
#### Partial recollection and confidence loss

After even a short switch, users may remember fragments: the customer, document, or broad goal, but not the last decision boundary. This creates a dangerous middle state — enough familiarity to act, insufficient context to act safely. The interface should communicate both restored context and its reliability: what was explicitly saved, what was inferred, what has changed, and what must be revalidated.

<a id="obligations-versus-ambient-information"></a>
#### Obligations versus ambient information

An obligation is a condition requiring a specific actor’s attention or action. Ambient information may be useful without requiring response. Conventional feeds and dashboards mix the two. Workstream continuity surfaces should reserve the visual center for obligations, consequential exceptions, and changed assumptions; routine progress belongs in the periphery or on demand.

<a id="attention-budget"></a>
#### Attention budget

**Attention budget** is the amount of perceptual, cognitive, and decision effort a person can responsibly allocate to orientation and supervision at a given moment. It is not a fixed personal trait. It varies with workload, consequence, fatigue, domain familiarity, interruption, accessibility needs, and incident conditions.

The system spends this budget whenever it asks the user to:

- Notice a change.

- Distinguish one state from another.

- Reconstruct missing context.

- Verify evidence.

- Resolve uncertainty.

- Approve or intervene.

- Remember an obligation not represented elsewhere.

A well-designed surface spends attention in proportion to consequence and human exclusivity. It compresses routine machine progress, expands irreversible decisions, and avoids repeatedly charging for the same fact through duplicate notifications, counts, and cards.

<a id="cognitive-model-as-a-diagnostic-checklist"></a>
#### Cognitive model as a diagnostic checklist

A useful diagnostic decomposition is:

Switch-in burden tends to rise with five sources of effort: retrieval, reconstruction, verification, decision, and recovery risk.

Navigation and search mainly reduce retrieval effort. Summaries may reduce reconstruction effort. Provenance and state validation reduce verification effort. Clear prioritization and decision boundaries reduce decision effort. Undo, containment, and policy enforcement reduce recovery risk. Workstream Continuity Design coordinates all five. This is a review checklist, not a literal scoring formula or claim that the factors combine with fixed weights.

<a id="core-design-principles"></a>
### 5. Core design principles

<a id="principle-1-design-every-switch-in-as-deliberately-as-the-first-entry"></a>
#### Principle 1 — Design every switch-in as deliberately as the first entry

**Definition.** Every durable workflow should specify how a person acquires context after an attention switch, interruption, absence, device change, or handoff — not only how work begins.

**Rationale.** Research on working spheres, interruption, and developer resumption shows that repeated switching is routine and that reconstruction benefits from reliable cues. [R1, R3–R5, R62, R63] Entry flows cannot substitute for a switch-in path because the user arrives with prior intent, partial memory, and potentially changed state.

**Good example.** A supervisor opens the Northstar agent thread, immediately sees “Review — consent expired after draft preparation,” the owner/current/next actor chain, the denied send permission, and “Review consent evidence” as the safe next action.

**Failure mode.** “Resume” reopens the homepage or the last URL while filters, selection, rationale, and changed assumptions are lost.

**Design test.** Have participants switch among eight concurrent workstreams every 30–90 seconds, then repeat after four hours. Measure whether they can state the goal, material delta, actor chain, authority, and correct next decision before opening history.

**Lineage.** Prospective goal encoding, context reconstruction, recognition over recall, and checkpoint/recovery design. [R3, R4, R20]

<a id="principle-2-persist-intent-bearing-context-not-every-surface-detail"></a>
#### Principle 2 — Persist intent-bearing context, not every surface detail

**Definition.** Preserve the state that explains purpose and supports safe continuation: goal, selected workstream, subgoal, filters that affect interpretation, last trusted evidence, and resume point. Avoid indiscriminate surveillance-like capture.

**Rationale.** Persistence is useful only when it reduces reconstruction without restoring stale, private, or misleading state. Microsoft Recall’s redesign illustrates that broad memory requires opt-in scope, encryption, deletion, and sensitive-data controls. [R45, R46]

**Good example.** A case system saves “Reviewing denied documents for appeal,” the selected document, comparison mode, and private note, with a visible expiry and clear-saved-context control.

**Failure mode.** The system restores a six-day-old filtered view as though current, exposes it on a shared workstation, or captures unrelated screen content.

**Design test.** For each persisted field, answer: What user intention does this preserve? When does it expire? Who can see it? How is staleness detected? How can it be cleared?

**Lineage.** Distributed cognition, privacy by design, state restoration, and graceful recovery. [R11, R45]

<a id="principle-3-orient-with-meaningful-change-not-raw-activity"></a>
#### Principle 3 — Orient with meaningful change, not raw activity

**Definition.** Lead every switch-in with semantic deltas that affect goals, assumptions, responsibility, deadlines, authority, or expected outcomes. Keep raw event history available for audit.

**Rationale.** Machine and collaborative systems can produce event volumes that exceed useful attention. Event chronology answers “what emitted events”; orientation requires “what is different in a way that changes action.”

**Good example.** “Two facts changed: consent expired, so the outreach draft remains non-sendable; procurement approved the pricing exception, unblocking legal review.” Each statement links to evidence and events.

**Failure mode.** A feed lists 47 field updates, agent tool calls, saves, and notifications with equal prominence.

**Design test.** Ask a user to identify which changes invalidate the previous plan. Success should not require reading the full log.

**Lineage.** Situation awareness, event sourcing, change detection, and progressive disclosure. [R7, R47]

<a id="principle-4-use-a-stable-continuity-grammar-across-workstreams-and-agents"></a>
#### Principle 4 — Use a stable continuity grammar across workstreams and agents

**Definition.** Represent the same operator-level meanings in the same order across workstreams, agents, surfaces, APIs, and assistive output: GOAL, ATTN, STATE, DELTA, ACTORS, AUTH, EVIDENCE, EFFECT, and NEXT.

**Rationale.** Rapid switching becomes learnable only when equivalent situations use equivalent semantics. Cognitive Dimensions of Notations provides methodological precedent for shared vocabularies that expose representational tradeoffs. AG-UI, ACP, and A2UI provide useful state, session, permission, diff, and rendering primitives, but do not by themselves define this operator grammar. [R65–R68]

**Good example.** GOAL qualify Northstar renewal \| ATTN review \| STATE review \| DELTA ~ consent: valid -\> expired \| ACTORS owner Connor; current none; next Connor \| AUTH external_send denied \| EVIDENCE verified CRM record, 09:42 \| EFFECT external, non-reversible \| NEXT review consent evidence.

**Failure mode.** Green means healthy in one thread, ready-to-send in another, high confidence in a third, and completed in a fourth. The operator must relearn each agent’s idiom and can act on the wrong interpretation.

**Design test.** After a short learning period, present equivalent workstream conditions from several agent implementations. Users should decode the goal, delta, actors, authority, evidence, effect, and next action without opening history or consulting a legend. Repeat through screen-reader output and the structured API representation.

**Lineage.** Cognitive Dimensions of Notations, consistency, status visibility, semantic conventions, state synchronization, permission UX, and declarative interface systems. [R20, R61, R65–R68]

<a id="principle-5-separate-actionable-waiting-blocked-and-changed-states"></a>
#### Principle 5 — Separate actionable, waiting, blocked, and changed states

**Definition.** Do not mix items that can be advanced now with items intentionally waiting, unable to proceed, or merely changed.

**Rationale.** These states imply different cognitive and operational responses. Waiting requires confidence in a trigger; blocked requires diagnosis or escalation; changed requires assessment; actionable requires execution or decision.

**Good example.** A command center has distinct “Now,” “Waiting,” “Blocked,” and “Changed” lanes, with one canonical representation per workstream and links among related conditions.

**Failure mode.** A single “Open” queue contains active decisions, future follow-ups, policy-blocked records, and completed agent work awaiting no action.

**Design test.** For each visible item, a user should be able to answer within seconds: Can this move now? If not, what condition or intervention changes that?

**Lineage.** Queueing systems, case management, incident operations, and status visibility. [R20, R49]

<a id="principle-6-every-workstream-needs-an-accountable-owner-current-actor-and-next-actor"></a>
#### Principle 6 — Every workstream needs an accountable owner, current actor, and next actor

**Definition.** Represent three distinct responsibility roles: who remains accountable for the outcome, who is currently acting or holding the work, and who must act next.

**Rationale.** A single assignee field cannot represent delegation, external waiting, machine execution, or review handoffs. Unclear ownership creates missed obligations, duplicate work, and unsafe assumptions that “the AI has it.”

**Good example.** “Owner: Connor · Current actor: Research agent · Next actor: Connor to approve source exclusions.”

**Failure mode.** “Assigned to AI” obscures the accountable person and the pending human decision.

**Design test.** Present a workstream to an uninvolved colleague. They should correctly identify accountability, current activity, and next obligation without opening history.

**Lineage.** Responsibility assignment, crew resource management, case ownership, and distributed cognition. [R7, R11]

<a id="principle-7-spend-attention-by-consequence-not-activity-volume"></a>
#### Principle 7 — Spend attention by consequence, not activity volume

**Definition.** Rank and interrupt according to urgency, consequence, reversibility, human exclusivity, policy risk, and changed conditions—not message count, agent verbosity, or engagement value.

**Rationale.** Calm technology argues that systems should move information appropriately between center and periphery. [R13] Supervisory systems should make routine progress quiet and high-consequence exceptions unmistakable.

**Good example.** Thirty successful data enrichments collapse into one peripheral status; one suppression conflict occupies the center with explanation and no send path.

**Failure mode.** Agent animations, completion toasts, and growing badges dominate while a low-frequency policy exception is buried.

**Design test.** Remove color and animation. Does visual prominence still match consequence and required human action?

**Lineage.** Calm technology, attention management, alarm design, and situation awareness. [R7, R13]

<a id="principle-8-organize-each-orientation-surface-around-one-dominant-safe-next-action"></a>
#### Principle 8 — Organize each orientation surface around one dominant safe next action

**Definition.** The primary orientation surface should identify a single highest-value, currently authorized, and appropriately reversible next action, while preserving alternatives.

**Rationale.** Orientation fails when every card offers a competing call to action. Dominance should derive from obligation and policy, not a growth tactic or opaque score.

**Good example.** “Review three externally consequential drafts” is the dominant action because only a human can advance them and deadlines are near. “Let AI enrich 24 records” remains secondary and batchable.

**Failure mode.** The most visually prominent button initiates an agent run because it demonstrates product capability, despite a more consequential human decision.

**Design test.** Ask five users what the product recommends doing next and why. Their answers should converge, and the rationale should match policy and consequence.

**Lineage.** Visual hierarchy, queue discipline, decision support, and error prevention. [R20]

<a id="principle-9-use-progressive-disclosure-without-hiding-obligations"></a>
#### Principle 9 — Use progressive disclosure without hiding obligations

**Definition.** Present the minimum information needed for orientation and safe choice; reveal evidence, history, alternatives, and raw logs on demand. Obligations and blockers must never depend on an undiscoverable disclosure.

**Rationale.** Dense operational systems need depth, but simultaneous presentation increases search and interpretation cost. Progressive disclosure preserves expertise without turning the command center into a database dump.

**Good example.** A decision card shows requested action, consequence, evidence summary, uncertainty, and deadline. A drawer exposes source documents, agent trace, policy evaluation, and full history.

**Failure mode.** Critical policy reason appears only after expanding a generic “Details” link, or all trace events are expanded by default.

**Design test.** A five-second scan should reveal obligations, state, actor, and consequence; a full audit should remain reachable within one contextual expansion.

**Lineage.** Cognitive load, information foraging, progressive disclosure, and recognition over recall. [R12, R20]

<a id="principle-10-keep-machine-state-recommendation-confidence-and-permission-distinct"></a>
#### Principle 10 — Keep machine state, recommendation, confidence, and permission distinct

**Definition.** Visually and semantically separate what the machine did or observed, what it recommends, how uncertain the basis is, and what the system authorizes.

**Rationale.** A high score does not grant permission; a completed draft is not a completed external action; confidence can be miscalibrated; policy is a separate source of truth. Blending these concepts invites automation bias and policy violations. [R10, R19]

**Good example.** “Draft prepared · Recommendation: send after review · Evidence confidence: medium · Permission: suppressed—no external send.”

**Failure mode.** A green 92 score and “Ready” badge visually imply send eligibility even though consent is absent.

**Design test.** Can users accurately answer four separate questions: What happened? What is suggested? How strong is the basis? What is allowed?

**Lineage.** Appropriate reliance, human oversight, decision support, and policy-based access control. [R10, R17–R19]

<a id="principle-11-machine-work-must-be-attributable-inspectable-interruptible-and-recoverable"></a>
#### Principle 11 — Machine work must be attributable, inspectable, interruptible, and recoverable

**Definition.** Every consequential machine action must identify the actor configuration, inputs, tools, artifacts, and policy context; expose inspectable progress; support proportionate intervention; and preserve a recovery path.

**Rationale.** Supervisors cannot exercise meaningful control over an opaque or unstoppable process. Current agent products increasingly expose plans, logs, commits, browser takeover, or human checkpoints. [R26–R33]

**Good example.** A running enrichment job shows scope, agent version, data sources, completed and pending items, stop-after-current-item control, reversible writes, and a receipt.

**Failure mode.** “AI is working…” has no scope, no visible changes, no stop control, and no containment when a tool fails.

**Design test.** During a simulated failure, can the user identify what changed, halt further effects, preserve useful partial work, reverse eligible actions, and escalate with evidence?

**Lineage.** Supervisory control, undo, transaction design, incident response, and human-AI guidance. [R8, R9, R15]

<a id="principle-12-put-uncertainty-and-provenance-at-the-decision-point"></a>
#### Principle 12 — Put uncertainty and provenance at the decision point

**Definition.** When a person must judge or approve, expose the material evidence, source identity, recency, contradiction, and uncertainty in the same decision context.

**Rationale.** Explainability is useful when it supports a real decision, not as a generic transparency panel. [R16] Reviewers otherwise rubber-stamp outputs or spend excessive time reconstructing sources.

**Good example.** A lead-qualification decision lists the three policy-relevant facts, source timestamps, one contradiction, and a link to the governing rule. The model’s narrative is secondary.

**Failure mode.** A confidence percentage appears without calibration or evidence; provenance requires leaving the approval surface.

**Design test.** Ask reviewers to identify the weakest supporting fact and one plausible reason to reject the recommendation. Measure accuracy, not merely approval speed.

**Lineage.** Explainability, evidence-centered design, appropriate reliance, and decision quality. [R10, R16]

<a id="principle-13-enforce-safety-below-the-interface-and-fail-closed"></a>
#### Principle 13 — Enforce safety below the interface and fail closed

**Definition.** Critical eligibility, suppression, authorization, and externality rules must be evaluated by trusted system services. Presentation can explain and request changes but cannot infer, bypass, or silently broaden permission.

**Rationale.** Warning copy is brittle; browser state is mutable; machine recommendations are probabilistic; external actions can be irreversible. Governance frameworks treat control as a lifecycle and system property. [R17–R19]

**Good example.** The CRM may prepare a draft, but the send endpoint independently checks current consent, suppression, role permission, recipient, and approval artifact. An unavailable policy service produces a non-sendable state with recourse.

**Failure mode.** A front-end score enables “Send,” a stale approval unlocks unrelated recipients, or a red banner is the only suppression safeguard.

**Design test.** Attempt the prohibited action through every channel: UI, API, automation, stale browser, bulk import, replay, and agent tool. All must fail consistently and produce an auditable reason without leaking sensitive data.

**Lineage.** Defense in depth, least privilege, fail-closed security, safety engineering, and human-oversight requirements. [R17–R19]

<a id="principle-14-bind-consequential-effects-to-identity-instruction-configuration-and-trust-boundary"></a>
#### Principle 14 — Bind consequential effects to identity, instruction, configuration, and trust boundary

**Definition.** Every consequential expression or action must be attributable to a specific actor instance, accountable principal, authoritative instruction set, configuration fingerprint, credential purpose, and execution environment.

**Rationale.** Shared agents, delegated tools, retrieved content, and changing harnesses can make an action appear authorized when only part of the chain is trusted. Identity and authorization initiatives, MCP security guidance, and current containment practice all treat on-behalf-of authority, confused-deputy risk, and environment separation as first-class boundaries. [R83–R88, R92]

**Good example.** A payment-preparation action records the requester, accountable budget owner, accepted instruction version, model and harness fingerprint, tool manifest, purpose-bound credential, environment, and final policy decision.

**Failure mode.** A familiar agent name and a valid token are treated as sufficient evidence that the current requester, target, purpose, and configuration are authorized.

**Design test.** Change the requester, target, prompt source, tool version, or environment while holding the visible agent name constant. The system should expose a material delta and re-resolve authority before effect.

**Lineage.** Least privilege, workload identity, chain-of-command semantics, confused-deputy prevention, and auditable configuration management. [R83–R88, R92]

<a id="principle-15-treat-memory-recurrence-and-steering-as-governed-work"></a>
#### Principle 15 — Treat memory, recurrence, and steering as governed work

**Definition.** Durable memory writes, scheduled wake-ups, and in-flight steering are operational expressions with provenance, scope, authority, lifecycle, propagation, inspection, and revocation semantics.

**Rationale.** Persistent workspaces and shared agents increasingly remember facts, schedule future activity, and accept direction while work is underway. These capabilities can silently alter later decisions, outlive the original intent, or continue after the visible thread appears inactive. [R79, R80, R83, R89, R92]

**Good example.** A recurring research job has an explicit contract for trigger, tools, budget, stop condition, quiet hours, memory writes, and escalation; a steering event records whether it constrains, replaces, pauses, or cancels the current goal and which child jobs and approvals it invalidates.

**Failure mode.** An agent writes an inferred preference into durable memory, wakes indefinitely, and interprets a casual follow-up as authority to broaden scope.

**Design test.** Seed a false memory, edit the accepted goal during execution, revoke the schedule, and return after several days. The system should show every mutation, prevent stale authority, and account for residual jobs.

**Lineage.** Prospective memory, event sourcing, durable automation, revocation, and long-horizon agent harnesses. [R47, R79, R80, R83, R89, R92]

<a id="principle-16-reassess-changed-configurations-and-compositions-before-deployment"></a>
#### Principle 16 — Reassess changed configurations and compositions before deployment

**Definition.** A conformance claim applies to a named object, configuration, environment, and period. Material changes to models, prompts, tools, permissions, memory, orchestration, policies, or semantic profiles trigger representative replay and renewed evidence.

**Rationale.** Component evidence does not automatically transfer to a composed system, and deployment-like contexts can expose behavior that isolated evaluations miss. Emerging conformity work also distinguishes requirements, assessment methods, responsible parties, and evidence pass-through. [R76–R78, R82, R90]

**Good example.** A new tool scope or subagent topology creates a configuration diff, invalidates affected approvals and conformance evidence, and runs historical trajectory replay plus adversarial cases before release.

**Failure mode.** A team reuses a model-level safety claim after changing the system prompt, tool inventory, memory layer, and orchestration graph.

**Design test.** Introduce one material change at a time and verify that the system identifies affected claims, replays representative workstreams, and blocks promotion when semantic or safety regression thresholds fail.

**Lineage.** Change control, deployment simulation, system integration testing, conformity assessment, and multi-agent safety. [R76–R78, R82, R90]

<a id="canonical-information-architecture"></a>
### 6. Canonical information architecture

<a id="recommended-command-center-structure"></a>
#### Recommended command-center structure

The proposed CRM structure is sound after one revision. The canonical orientation surface should be:

1\. Context / Resume — the workstream’s goal, material delta, actor chain, authority, evidence status, and most relevant recoverable context.

2\. **Now** — the highest-priority actionable work, regardless of actor origin.

3\. **Human oversight** — decisions, approvals, corrections, and reviews that require a person.

4\. **Waiting** — intentionally paused work with a named trigger, owner, and review condition.

5\. **Blocked** — work unable to advance because of policy, evidence, dependency, access, or failure.

6\. **Recently changed** — meaningful deltas that may alter intent or priority but do not already appear as an obligation.

7\. **System status** — compact health, degraded capability, policy-service availability, and incident scope.

8\. **Detailed Work Queue** — the execution surface reached from the command center.

<a id="should-ai-work-be-a-separate-top-level-section"></a>
#### Should “AI work” be a separate top-level section?

**Default: no.** “AI-active” is an actor condition, not an operational state. A machine-owned workstream can be actionable, waiting on a tool, blocked by policy, changed, failed, or ready for human review. Making “AI work” a permanent peer to “Now” and “Blocked” creates an inconsistent taxonomy and forces users to scan two axes at once.

Represent machine involvement through actor labels, progress semantics, and controls within each state. Add a dedicated **AI Work Monitor** only when supervising many concurrent runs is itself a primary role—for example, automation operations, security orchestration, or a coding-agent fleet. Even then, the monitor should be a secondary operational view, not the only place where a human obligation appears.

<a id="above-the-fold-hierarchy"></a>
#### Above-the-fold hierarchy

The first viewport should provide, in order:

- A compact Context / Resume strip when recoverable or inherited context exists.

- A dominant **Now** recommendation with rationale, consequence, and safe action.

- A summarized **Human oversight** obligation count with the highest-consequence item visible.

- Compact exception indicators for **Blocked** and changed assumptions.

- A quiet **System status** indicator.

Waiting and the full Recently Changed digest may begin below the fold unless a waiting condition has expired or a change invalidates the prior plan. The product should not reserve empty vertical real estate merely to preserve a fixed card grid.

<a id="dominant-action"></a>
#### Dominant action

The dominant action belongs to the highest-ranked workstream for which:

- A meaningful next action is currently available.

- The action is authorized for the user.

- The action’s consequence and reversibility are understood.

- Required evidence is present or its absence is explicit.

- No higher-tier safety or human-exclusive obligation exists.

The dominant action is frequently “Review,” “Resolve,” “Resume,” or “Investigate,” not “Run AI.”

<a id="compact-sections"></a>
#### Compact sections

- **System status** should normally occupy one line or a small cluster of indicators. Expand only when degradation affects current work.

- **Recently changed** should group low-consequence deltas and avoid duplicating items already in Now, Human oversight, or Blocked.

- **Waiting** should emphasize trigger confidence and overdue conditions, not display every future follow-up at equal weight.

- **AI-active progress** should collapse routine runs and expand only for variance, intervention, or impending handoff.

<a id="peripheral-information"></a>
#### Peripheral information

Keep these available but outside the initial center of attention:

- Aggregate usage and throughput metrics.

- Successful routine agent actions.

- Raw logs and full chronological history.

- Long-range backlog inventory.

- Personalization controls.

- Product education and prompts to try AI.

- Non-actionable social activity.

<a id="empty-section-behavior"></a>
#### Empty-section behavior

Empty sections should collapse rather than announce “Nothing here” repeatedly. The exception is a **Safe Empty State** that communicates a meaningful system condition such as “No human decisions pending; five bounded tasks are continuing” or “No eligible outreach because all candidates are suppressed.” Empty states must not encourage creating work for engagement.

<a id="narrow-viewports"></a>
#### Narrow viewports

On narrow viewports, preserve semantic priority rather than desktop geometry:

1\. Urgent policy or incident banner.

2\. Context / Resume.

3\. Dominant Now action.

4\. Human oversight.

5\. Blocked exceptions.

6\. Waiting and changed summaries.

7\. System status.

Use a single reading column. Avoid horizontal carousels for obligations. Tables may become structured rows or drill-in lists, but owner, next actor, state, and consequence must remain visible before navigation.

<a id="incident-mode"></a>
#### Incident mode

During an incident or urgent exception, the hierarchy changes temporarily:

- Incident scope, user impact, and containment state move to the top.

- The command center filters or marks affected workstreams.

- Routine recommendations are suppressed.

- The dominant action becomes containment, verification, or escalation.

- System status expands with timestamp, source, confidence, and update cadence.

- A visible exit condition explains when normal mode will resume.

Incident mode must be system-driven by verified operational state or explicitly entered by an authorized human. It should not be a dramatic visual theme triggered by noisy telemetry.

<a id="workstream-model"></a>
### 7. Workstream model

<a id="recommended-term-workstream"></a>
#### Recommended term: workstream

A **workstream** is a durable, goal-directed course of work that connects relevant objects, actors, decisions, events, artifacts, dependencies, policy, and resume state over time.

“Thread” is useful for conversation and linear chronology but is too easily confused with message threads or execution threads. “Case” implies formal adjudication; “task” is too granular; “project” is often too broad. Workstream can contain tasks and records while remaining smaller than a program. Product-specific language may differ—case, matter, incident, claim, deal, investigation—but the underlying continuity model can remain consistent.

<a id="required-fields"></a>
#### Required fields

| **Field**                         | **Purpose**                                  | **Minimum representation**                                            | **Why required**                                                         |
|-----------------------------------|----------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------|
| Stable identifier and human title | Preserve identity across views and events    | ID plus concise recognizable label                                    | Prevents duplicate or ambiguous references                               |
| Goal / intended outcome           | Explain why the work exists                  | One sentence or structured outcome                                    | Supports goal acquisition at entry and reconstruction after interruption |
| Operational state                 | Explain what condition the work is in        | Controlled state plus timestamp                                       | Separates action, waiting, blockage, review, and completion              |
| Accountable owner                 | Identify outcome responsibility              | Human or accountable organizational role                              | Delegation must not erase accountability                                 |
| Current actor                     | Identify who or what is acting now           | Human, agent, service, external party, or none                        | Makes active agency legible                                              |
| Next actor                        | Identify the next required contributor       | Named actor or actor class                                            | Exposes obligations and handoffs                                         |
| Next action or condition          | Explain how progress resumes                 | Action verb or trigger condition                                      | Distinguishes action from waiting                                        |
| Attention claim / priority reason | Explain why attention is requested now       | Human-readable reason plus decisive factors                           | Prevents opaque score dominance and false urgency                        |
| Meaningful delta since baseline   | Reconstruct material change                  | Typed before/after change, source, time, and affected intent          | Supports fast switch-in without raw-log review                           |
| Policy / permission class         | Bound possible actions                       | Current authorization and governing rule                              | Separates recommendation from permission                                 |
| Acquisition / resume point        | Open the exact useful context                | Object, subgoal, view state, checkpoint, and safe fallback            | Reduces decision-ready time and resumption error                         |
| Evidence and provenance status    | Support verification and calibrated reliance | Decisive sources, freshness, contradiction, and derivation references | Makes support legible at the decision point                              |

<a id="conditional-and-optional-fields"></a>
#### Conditional and optional fields

These become required when applicable:

- **Pending decision** — options, decision owner, consequence, evidence, deadline.

- **Blocker** — type, cause, diagnosing actor, unblock path, escalation condition.

- **Due condition** — time, event, dependency, or policy trigger.

- **Confidence / uncertainty** — calibrated measure, limitations, contradictions.

- **Dependencies** — upstream and downstream workstreams or external systems.

- Control incident / correlated campaign — when detection or containment must connect several workstreams, agent instances, parent or child runs, identities, credentials, or infrastructure resources.

- **Relevant artifacts** — drafts, files, messages, analyses, receipts, source records.

- **Intervention options** — pause, stop, redirect, narrow scope, retry, rollback, escalate.

- **Externality class** — local, internal shared, customer-facing, financial, legal, safety-critical.

- **Privacy and sensitivity** — who may view context, evidence, or audit details.

- **Staleness status** — what has been revalidated and what may no longer hold.

- **Expected completion or review window** — estimate with uncertainty and update rules.

- **Abandonment reason** — why the work ended without completion.

<a id="relationship-to-records"></a>
#### Relationship to records

A record represents a domain object: contact, account, claim, incident, document, campaign, repository, or ticket. A workstream represents **purposeful change involving one or more objects**. One record can participate in several workstreams; one workstream can span several records. The CRM should therefore avoid overloading a deal or contact record with every temporal and supervisory state.

<a id="relationship-to-tasks"></a>
#### Relationship to tasks

Tasks are bounded actions within a workstream. A task may be human-owned or machine-executed. Completing a task does not necessarily complete the workstream. The workstream supplies the goal, context, dependencies, and handoff that individual tasks lack.

<a id="relationship-to-conversations"></a>
#### Relationship to conversations

Conversations contain interaction evidence, commitments, questions, and decisions. They should be attached as artifacts and events, not used as the sole continuity container. A conversation can change a workstream’s state; a workstream explains why the conversation matters.

<a id="relationship-to-agent-runs"></a>
#### Relationship to agent runs

An agent run is an execution episode with a defined objective, scope, tools, model configuration, events, artifacts, and outcome. A workstream may include several runs and human interventions. Runs should never become the accountable owner; they are current actors or contributing executions.

<a id="relationship-to-approvals"></a>
#### Relationship to approvals

An approval is a decision artifact with scope, conditions, approver, evidence, and expiry. Approval should authorize a specific transition or action class. It must not silently broaden permission for unrelated recipients, channels, or later workstream states.

<a id="relationship-to-external-events"></a>
#### Relationship to external events

External events—customer replies, payments, contract signatures, regulatory updates, data-source changes—can satisfy waiting conditions, create blockers, invalidate assumptions, or trigger review. Event ingestion must preserve source and time; semantic interpretation should remain inspectable.

<a id="relationship-to-control-incidents"></a>
#### Relationship to control incidents

A workstream is the durable unit of human operating context, not the maximum unit of security analysis. The DeepMind threat model notes that many agent instances could distribute attack steps so that each looks innocuous in isolation. [R74] A control incident may therefore span multiple workstreams, parent and child runs, identities, model checkpoints, credentials, or infrastructure resources.

Represent the control incident as a durable object with its own identifier, accountable incident owner, detection source, affected-workstream links, control decision, containment state, residual effects, and recovery condition. Incident mode can project the correlated condition into each affected workstream, while investigation remains able to reason across the larger campaign.

<a id="workstream-state-machine"></a>
#### Workstream state machine

A minimal state model should distinguish:

- **Proposed** — goal or action exists but is not accepted.

- **Ready** — prerequisites met and a permitted next action exists.

- **Active** — a human or machine actor is currently advancing work.

- **Review** — a human-exclusive judgment or approval is required.

- **Waiting** — intentionally paused for a known condition or actor.

- **Blocked** — unable to advance without diagnosis, policy change, evidence, or intervention.

- **Completed** — intended outcome and required verification are satisfied.

- **Failed** — execution ended unsuccessfully and requires recovery or disposition.

- **Abandoned** — intentionally ended without the target outcome.

**Suppressed is not ordinarily a workstream state. It is an authorization condition attached to one or more action classes. When no permitted path remains, the workstream is Blocked by policy.**

“Changed” is not a persistent workstream state. It is a delta condition that may alter priority or require assessment. “AI-active” is an actor state. “Overdue” is a temporal qualifier. Keeping these dimensions separate prevents combinatorial labels such as “AI-blocked-overdue-changed.”

<a id="actor-and-agency-model"></a>
### 8. Actor and agency model

<a id="actor-authority-and-execution-vocabulary"></a>
#### Actor, authority, and execution vocabulary

These terms belong to different dimensions. Store and render them separately rather than collapsing them into one status field or badge.

<a id="actor-and-responsibility-conditions"></a>
##### Actor and responsibility conditions

- **Human-owned** — a named person remains accountable and currently performs the next action.

- **AI-preparable** — a machine may assemble, analyze, or draft within a bounded scope; a person retains execution authority.

- **AI-active** — a machine actor is currently performing a bounded run.

- **Waiting on human** — a named human or role owes a decision, artifact, or action.

- **Waiting on external party** — progress depends on a customer, vendor, regulator, or system outside direct control.

<a id="authority-and-policy-conditions"></a>
##### Authority and policy conditions

- **Blocked by policy** — current rules prohibit the intended transition.

- **Blocked by missing evidence** — a required fact or artifact is absent or unreliable.

- **Proposed** — a change is suggested but has no execution effect.

- **Approved** — an authorized person accepted a specifically scoped transition.

- **Suppressed** — prohibited action remains unavailable regardless of ranking or recommendation.

<a id="execution-and-outcome-conditions"></a>
##### Execution and outcome conditions

- **Reversible execution** — an effect occurred and can be reliably undone within a stated window.

- **Externally consequential execution** — an effect reaches a customer, public system, financial account, legal process, production environment, or other boundary where undo may be incomplete.

- **Completed** — outcome and required verification are satisfied.

- **Failed** — work ended without satisfying the intended transition.

- **Abandoned** — work was intentionally discontinued.

<a id="agency-ladder"></a>
#### Agency ladder

The agency ladder describes authority, not model intelligence. A highly capable model may still operate at a low agency level.

| **Level** | **Agency class**                            | **Example**                                                   | **Interface disclosure**                                    | **Approval and undo**                                               | **Provenance / audit**                                                         | **Interruption behavior**                                                |
|-----------|---------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| 0         | Observe and describe                        | Summarize records; surface anomalies                          | Scope, data recency, limitations, sources                   | No execution approval; dismissal and correction available           | Inputs, sources, model/configuration, output                                   | Never interrupt unless a verified safety condition exists                |
| 1         | Recommend                                   | Suggest next account or remediation                           | Rationale, alternatives, uncertainty, policy status         | Human chooses; no side effect yet                                   | Evidence and recommendation history                                            | Summon only for time-sensitive human-exclusive decisions                 |
| 2         | Prepare local artifact                      | Draft email, report, code patch, plan                         | Artifact status clearly distinct from execution             | Human review required; artifact editable/deletable                  | Inputs, transformations, sources, versions                                     | Quiet completion; notify only by user preference or deadline             |
| 3         | Execute reversible local action             | Tag, sort, enrich, create internal draft                      | Exact scope, affected objects, undo window                  | Standing authority may suffice; reliable undo required              | Before/after values, actor, rule, receipt                                      | Interrupt on variance, scope expansion, or failed rollback               |
| 4         | Execute bounded internal workflow           | Route case, run tests, update internal status                 | Plan, boundaries, progress, dependencies, stop controls     | Policy-based authority; checkpoints for exception classes           | Full event lineage, tool calls, approvals, recovery state                      | Notify at exception, handoff, or threshold breach                        |
| 5         | Propose external action; human commits      | Prepare outreach, payment, deployment, filing                 | Recipient/target, consequence, final payload, policy result | Explicit human commit at decision point; undo may be partial        | Decision evidence, approver, final payload, external receipt                   | Interrupt when deadline or risk justifies human action                   |
| 6         | Execute externally under standing authority | Refund within limit, auto-remediation, routine customer reply | Standing scope, exclusions, live state, opt-out, escalation | Prior policy authorization; containment and rollback where possible | Immutable action record, authority basis, monitoring, post-action verification | Immediate escalation for boundary breach, uncertainty, or adverse signal |

<a id="control-posture-is-orthogonal-to-agency"></a>
#### Control posture is orthogonal to agency

The agency ladder states what an actor is authorized to do. It does not state whether the deployment can independently detect, constrain, or contain that actor. The GDM AI Control Roadmap keeps detection capability and prevention-and-response capability separate, and escalates controls as the model’s ability to evade oversight or execute attacks increases. [R74] WCD should therefore keep three dimensions distinct: agency level, threat or capability assessment, and control posture.

- Unverified — no dependable independent control signal exists, or a required control service is unavailable.

- Observed — activity is logged and asynchronously monitored; investigation or reversion may follow after effects occur.

- Gated — consequential actions pass synchronous monitoring, access control, policy interception, or trusted review before effect.

- Containable — the system can pause, isolate, revoke, or terminate the actor and address spawned jobs within a declared containment radius, while reporting residual effects.

These are operator-facing control states, not security assurance levels and not replacements for DeepMind’s D1–D4 or R1–R3 ladders. Effective agency must not exceed the lowest ceiling established by policy, consequence, and control readiness.

<a id="required-disclosure-by-agency-level"></a>
#### Required disclosure by agency level

Disclosure must grow with consequence and autonomy. At levels 0–1, source scope and uncertainty dominate. At levels 2–3, artifact/execution distinction and undo dominate. At levels 4–6, plan, authority, monitoring mode, control posture, execution environment, intervention, externality, and post-action verification become mandatory.

<a id="approval-quality"></a>
#### Approval quality

Approval is meaningful only when the reviewer can understand:

- The exact action and target.

- The relevant evidence and uncertainty.

- What the machine has already done.

- What will happen immediately after approval.

- What policy permits or prohibits.

- What can be reversed and for how long.

- Which later actions are **not** authorized by this approval.

A generic “Approve” button at the end of a long queue is an interaction, not proof of oversight.

<a id="multi-principal-and-shared-agent-roles"></a>
#### Multi-principal and shared-agent roles

A shared or channel-scoped agent can be addressed by several people without making every participant an equally authorized principal. Store and expose the following roles separately when applicable: delegator, current requester, accountable principal, instruction authority, scope editor, approver, affected non-requesters, memory custodian, and next responsible actor. [R80, R86, R88]

- Addressability does not imply authority to re-scope, cancel, approve, expose memory, spend resources, or create external effects.

- A requester may supply task input while a different principal remains accountable for budget, policy, and consequence.

- Conflicting instructions remain visible through goal version, supersession, conflict state, and a named resolution rule; consequential execution fails closed until the applicable authority is resolved.

- Inspection state is stored per person and, where policy requires, at team or role level. One participant reading a result does not imply that every affected person or approver has inspected it.

<a id="decision-attribution-and-qualified-oversight"></a>
#### Decision attribution and qualified oversight

Material decisions should distinguish planning from execution and verification. Record decision class, decision maker, decision basis, delegated-by relationship, acceptance-criteria owner, verifier, required review role, qualification basis, and any expertise mismatch. Current field evidence from agentic coding suggests that humans and agents can occupy very different planning and execution shares even within one session. [R81]

- Planning classes include goal selection, approach selection, definition of done, target selection, and risk acceptance.

- Execution classes include tool selection, command or transaction selection, implementation detail, and retry behavior.

- Verification classes include evidence review, acceptance testing, exception disposition, and effect confirmation.

- Inferred expertise may inform routing; it must not silently grant authority or lower a required safeguard.

<a id="delegation-attenuation"></a>
#### Delegation attenuation

Authority is non-transitive by default. A parent agent may delegate a bounded subgoal only when policy explicitly permits subdelegation, and a child receives the minimum authority, tools, credentials, context, and lifetime required for that subgoal. The chain records who delegated, which restrictions were retained or narrowed, whether further delegation is permitted, and how pause, revocation, and shutdown propagate. [R82, R83, R86, R90, R92]

<a id="recommended-crm-ceiling"></a>
#### Recommended CRM ceiling

For the stated CRM, AI should operate through Level 4 for bounded internal preparation and coordination, and Level 5 for external outreach: it may propose and prepare, but the final external send remains a manual human commit. Suppression and eligibility evaluation precede the decision surface and cannot be overridden by the agent.

<a id="continuity-grammar-and-wcd-semantics-policy"></a>
### 9. Continuity grammar and WCD Semantics Policy

Workstream Continuity Design’s primary interface contribution is a shared continuity grammar: a compact, ordered representation that lets humans, agents, services, and assistive technologies refer to the same operational facts at each focus transition. Its infrastructure consequence is the WCD Semantics Policy: a versioned suite of conformance profiles governing the accountable surface through which machine work reaches people and other systems. The WCD Accountable Expression Profile remains the core profile; extension profiles govern instruction, identity, context, memory, recurrence, tools, composition, configuration, and conformance evidence.

This is not a universal language for everything an agent can think or say. The continuity grammar standardizes the minimum semantics needed for rapid orientation and decision readiness. The WCD Semantics Policy supplies versioned metadata, authority, lifecycle, and validation requirements for the expressions and control records that populate those slots. Natural language, structured data, artifacts, and tool-specific payloads may remain inside the governed envelope.

In this research edition, grammar means a controlled semantic frame with stable slots, ordering, omission rules, update semantics, and conformance requirements; semantics policy means the versioned rules that define controlled terms, authoritative sources, extension profiles, compatibility, and testing. Neither is yet a finalized formal standard.

An **expression** is any machine-produced claim, observation, request, proposal, decision record, status transition, exception, or action record exposed to another system or to a human operator. An **accountable expression envelope** is the versioned metadata and validation structure that establishes what kind of expression it is, who produced it and on whose behalf, what supports it, what it may affect, what authority applies, which workstream it belongs to, and how a person can inspect or intervene.

<a id="normative-language-and-semantic-registry"></a>
#### Normative language and semantic registry

Normative statements use MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY in the sense defined by BCP 14 when those words appear in uppercase. Lowercase uses remain ordinary prose. [R93, R94] The policy should be backed by a semantic registry in which every controlled term has a canonical label, definition, allowed values, invariants, authoritative source, examples, counterexamples, status, version, aliases, and deprecation path.

Absence is not one state. Profiles MUST distinguish unknown, unavailable, withheld, not applicable, not yet observed, conflicted, and invalid. Time-bearing claims SHOULD separate occurred_at, observed_at, issued_at, effective_from, verified_at, and expires_at so that late observation, stale policy, and future effectiveness are not collapsed into one timestamp.

A profile change that alters the meaning, obligation, or interpretation of an existing field is a breaking semantic change even when the serialized field name remains unchanged.

<a id="stable-core-and-versioned-extension-profiles"></a>
#### Stable core and versioned extension profiles

The canonical nine-slot grammar remains the minimum operator-facing representation: GOAL, ATTN, STATE, DELTA, ACTORS, AUTH, EVIDENCE, EFFECT, and NEXT. Detailed machinery belongs in versioned companion profiles and projects into those slots. This avoids a continuously expanding first-glance grammar while preventing implementations from hiding material identity, instruction, memory, recurrence, composition, configuration, or control facts.

- Core profile — accountable expression, workstream membership, type, support, consequence, authorization, lifecycle, and intervention.

- Instruction and context provenance profile — authority, trust, scope, conflict, retrieval, compaction, and omission.

- Principal, identity, delegation, and credential profile — requester, principal, actor instance, on-behalf-of chain, purpose, and expiry.

- Memory, recurrence, and steering profile — durable mutation, future wake-up, in-flight direction, propagation, and revocation.

- Tool capability and trust-boundary profile — input trust, sensitive access, state change, external communication, target, reversibility, and confirmation class.

- Multi-agent composition profile — roles, topology, communication, shared memory, aggregate limits, collective risk, and termination propagation.

- Configuration and conformance evidence profile — object of conformity, fingerprint, assessment method, validity, evidence reuse, and invalidation.

<a id="the-relationship-among-protocols-the-envelope-the-grammar-and-wcd"></a>
#### The relationship among protocols, the envelope, the grammar, and WCD

These are different layers and should not be collapsed.

| **Layer**                                    | **Primary function**                                                                                                                | **What it does not provide by itself**                                                                                |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Agent, tool, session, and UI/state protocols | Exchange messages, tasks, sessions, snapshots, deltas, plans, diffs, permission requests, artifacts, tool calls, and declarative UI | A shared operator-level meaning for attention, state, delta, actors, authority, evidence, consequence, or next action |
| Accountable expression envelope              | Attach validated semantics for identity, type, support, consequence, authority, lifecycle, workstream membership, and intervention  | The information architecture and interaction behavior of the supervisory surface                                      |
| WCD Accountable Expression Profile           | Define conformance requirements for populating, validating, and using the accountable expression envelope at the operated surface   | A transport, payload format, prescribed interface layout, or complete execution architecture                          |
| Continuity grammar                           | Normalize accountable records into ordered semantic slots that humans and machines can decode consistently                          | A prescribed layout, transport, or complete execution architecture                                                    |
| Workstream Continuity Design                 | Organize data, interaction, policy, and surfaces so a person can switch in, orient, decide, supervise, intervene, and resume        | A transport protocol or one universal visual style                                                                    |

WCD is therefore best understood as a human-facing application and conformance model: protocols transport state and interaction; the accountable expression envelope carries durable records; the WCD Accountable Expression Profile defines how those records are populated and independently validated; the continuity grammar normalizes them into a stable operator language; and WCD defines how products organize, render, and govern that language. The stack can be implemented over more than one underlying protocol.

<a id="prior-art-and-the-remaining-gap"></a>
#### Prior art and the remaining gap

Typed machine and agent communication is not new. KQML and FIPA established communicative acts; A2A and MCP standardize interoperable tasks, messages, resources, prompts, and tools; CloudEvents, W3C PROV, and OpenTelemetry cover event envelopes, provenance, and telemetry semantics. AG-UI adds structured event streams, complete state snapshots, and JSON Patch deltas for agent frontends. ACP standardizes editor-agent sessions, plans, diffs, permission requests, cancellation, and related coding-agent UX. A2UI defines declarative, updateable interface structures rendered through trusted client components. [R55–R68]

These systems solve transport, synchronization, session, permission, artifact, or rendering problems. None, on its own, defines the operator-level grammar required to answer within seconds: what is the goal, why does this workstream claim attention, what state is it in, what changed, who acts now and next, what is permitted, what evidence and consequence matter, and what decision is safe?

AI control contributes a different layer of prior art: system-level monitoring, access control, isolation, response, and shutdown under an adversarial threat model. [R74] It does not define the operator-facing semantics by which validated control state is reconstructed at a focus transition. WCD’s claim remains the translation and continuity layer, not the control mechanism.

The defensible contribution is therefore narrower than “a universal language for machine expression.” It is this:

Operated agents need a shared continuity grammar backed by the WCD Accountable Expression Profile, so claims and actions can be connected consistently to evidence, bounded consequence, verified authority, durable workstreams, and rapid human orientation.

This is an original synthesis and standards proposal. It is not yet an established standard, and its value must be demonstrated through implementation and evaluation.

<a id="four-accountability-invariants"></a>
#### Four accountability invariants

Four invariants define the core of the envelope. They are necessary but not sufficient; identity, time, workstream membership, expression lifecycle, and intervention metadata are also required.

| **Invariant**     | **Requirement**                                                                                                                                                                                 | **Important distinction**                                                                                               |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Type**          | The expression declares a member of a bounded, versioned taxonomy, such as observation, retrieved fact, inference, prediction, request, proposal, approval, action, status change, or exception | The payload may remain open-ended; the operator must not have to infer the expression’s operational category from prose |
| **Support**       | The expression links to evidence and provenance and states its epistemic mode: observed, retrieved, inferred, predicted, assumed, or unknown                                                    | Confidence is optional metadata, not a substitute for evidence, provenance, or calibration                              |
| **Consequence**   | A proposed or completed action declares affected objects, scope, externality, cost or other relevant magnitude, reversibility, and expected versus actual effect                                | A recommendation or score does not itself establish consequence, eligibility, or permission                             |
| **Authorization** | The expression carries a policy-resolved state, authority basis, accountable principal, scope, conditions, and expiry where applicable                                                          | The agent may request or report authorization; it does not unilaterally certify that authorization exists               |

The same invariants apply differently to different expression classes. A claim is deficient when its type or support is unavailable. A proposed action is deficient when its consequence or authorization cannot be resolved. A completed action is deficient when its actual effect, actor, authority basis, or audit record is missing.

<a id="minimum-expression-record"></a>
#### Minimum expression record

A practical envelope requires more than four fields. The following record is the minimum proposed profile for work that can affect a person, an external party, a protected resource, or a durable workstream.

| **Field**                        | **Minimum obligation**                                                                                                       | **Authoritative source or validator**             |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| Expression ID and schema version | Stable reference, deduplication, and controlled evolution                                                                    | Issuing gateway or event service                  |
| Actor and accountable principal  | Identify the machine, service, person, or organization producing the expression and the principal on whose behalf it acts    | Identity and delegation service                   |
| Workstream or correlation ID     | Attach the expression to durable work rather than only a session, page, or run                                               | Workstream or orchestration service               |
| Timestamp and effective time     | Distinguish creation, observation, authorization, execution, and expiry where relevant                                       | Trusted clock and source system                   |
| Expression lifecycle             | Draft, issued, accepted, superseded, revoked, expired, or invalidated; action and workstream state are referenced separately | Expression registry or event service              |
| Type                             | Declare the operational category of the expression                                                                           | Schema validator; agent may propose the value     |
| Support and epistemic status     | Link evidence, provenance, transformations, contradictions, freshness, and mode of knowing                                   | Evidence and provenance services                  |
| Consequence                      | State expected and, after execution, actual effect; include scope, targets, externality, and reversibility                   | Tool adapter, execution service, or domain system |
| Authorization                    | Resolve permitted, denied, expired, or unverifiable; include policy basis, principal, scope, and conditions                  | Policy and authorization service                  |
| Human-intervention state         | State whether review, approval, correction, pause, stop, rollback, escalation, or takeover is available                      | Orchestration and control plane                   |

**Expression lifecycle is separate from workstream and action lifecycle.** An expression may be superseded, revoked, expired, or invalidated while its workstream remains active, waiting, blocked, or complete.

Domain profiles may add fields, but they should not silently weaken these obligations for consequential work. Extensions should be versioned, namespaced, and testable.

<a id="accountable-expression-is-assembled-from-multiple-authorities"></a>
#### Accountable expression is assembled from multiple authorities

The envelope must not be treated as a form the agent fills out about itself. That would produce better-formatted self-assertion, not accountable operation.

**The agent may produce the content, but it does not unilaterally certify its evidence, consequence, or permission.**

The agent may classify an expression and provide candidate evidence. An evidence service should resolve sources and transformations. The execution layer should calculate or verify affected objects, externality, and reversibility. A policy service should determine authorization from current state. Identity and delegation services should establish the actor and principal. The workstream service should bind the expression to durable operational context.

Conflicts among these authorities must remain visible. A high-confidence recommendation with denied authorization is still denied. A real source with stale data may be insufficient support. A valid approval whose scope does not match the current target must not authorize execution. WCD surfaces should preserve these distinctions rather than compressing them into a single “AI confidence” or “ready” indicator.

<a id="adversarial-control-extension"></a>
#### Adversarial control extension

At higher agency or privilege, the accountable expression envelope becomes a security boundary. The acting agent cannot be the sole authority for its own monitoring state, environment, compliance, effects, or containment. [R74] The companion security profile should require independently sourced control facts sufficient to populate the operated surface:

- Observation source and validator identity, including whether a claim is agent-authored, environment-observed, or independently monitored.

- Monitoring mode and coverage state — asynchronous, synchronous, degraded, unavailable, or not applicable — with the last verified time.

- Execution-environment identity, isolation boundary, and parent/child run lineage.

- Control decision and decision source: allow, block, resample, defer to a trusted model, escalate, isolate, contain, or shut down.

- Containment state, declared radius, residual effects, and recovery or restoration condition.

- Integrity or tamper-evidence state for monitoring, policy, logs, and control records.

These are accountability requirements, not a finished schema or assurance framework. Exact field names, cryptographic integrity, validator trust, threat modelling, and governance remain work for the companion research program.

<a id="wcd-extension-profile-suite"></a>
#### WCD extension-profile suite

The profiles below are normative design targets for consequential systems, not a frozen serialization. An implementation MAY serialize them through one envelope or several linked records, provided identity, lifecycle, provenance, policy resolution, and semantic equivalence remain inspectable across the operated surface.

<a id="instruction-and-context-provenance-profile"></a>
##### Instruction and context provenance profile

Every operative instruction SHOULD carry instruction_id, origin, author or issuing system, authority level, trust class, scope, goal version, effective time, expiry, supersedes relationship, conflict state, and conflict-resolution rule. Retrieved documents, tool output, messages, websites, and model-generated text are data by default; they become instructions only through an explicit authorized promotion boundary. This makes prompt injection a semantic and policy violation rather than a prose-classification problem alone. [R83, R87, R91, R92]

- Context assembly records context_assembly_id, included and excluded sources, retrieval query, ranking or selection method, compaction method, coverage estimate, omitted_due_to_policy, contradiction state, and compaction_loss.

- A summary or compacted context MUST preserve unresolved obligations, current authority, material contradiction, and active stop conditions; if it cannot, the system marks the compacted context insufficient for consequential action.

- Instruction conflicts project into DELTA and AUTH; silent last-message-wins behavior is non-conformant for consequential work.

<a id="principal-identity-delegation-and-credential-profile"></a>
##### Principal, identity, delegation, and credential profile

The profile distinguishes human identity, workload identity, actor instance, delegator, current requester, accountable principal, and acting-on-behalf-of chain. Credentials are purpose-bound records rather than ambient capability: credential_id, issuer, subject, audience, permitted action class, workstream, target scope, data scope, effective time, expiry, revocation state, and whether subdelegation is permitted. [R80, R85, R86, R88]

- A valid identity proves who or what is acting; it does not prove that the action, target, purpose, or current requester is authorized.

- Proxy or broker services MUST retain per-client consent and audience boundaries so they cannot become confused deputies.

- Shared-agent requests MUST resolve the requester and accountable principal separately before resource use or external effect.

<a id="memory-mutation-profile"></a>
##### Memory mutation profile

A durable machine-authored memory is an accountable expression, not hidden implementation state. A Memory Mutation Record contains memory_type, subject, assertion, source, writing_actor, epistemic_mode, confidence or limitation, scope, visibility, effective time, expiry, review state, conflict state, supersedes, and revocation. [R79, R80, R83, R89, R92]

- Controlled memory types SHOULD distinguish user-stated fact, retrieved fact, inferred preference, explicit preference, decision, rationale, open loop, commitment, procedural instruction, skill, and prohibition.

- Machine-authored memory MUST NOT silently change GOAL, AUTH, standing authority, or a protected fact. A consequential mutation creates a visible DELTA and may require human acceptance.

- Conflicting memories remain co-visible until resolved; deletion and revocation propagate to derived caches and future context assembly where technically feasible.

<a id="recurrence-contract"></a>
##### Recurrence contract

Proactive or scheduled agency is governed by a Recurrence Contract: trigger, cadence, next_wake, preconditions, no_op_behavior, expiry, stop condition, allowed tools, effect ceiling, attention threshold, quiet hours, budget, escalation rule, inspection baseline, and owner. The contract states why the agent wakes, what it may inspect or change, when it stays silent, and when the recurrence terminates. [R79, R80]

<a id="steering-event-profile"></a>
##### Steering event profile

In-flight direction is a typed Steering Event rather than an unstructured message. Minimum event types are append, clarify, constrain, replace_goal, approve_next, defer, cancel_pending, pause, and resume. Every event declares its authority, target run or workstream, goal-version effect, and propagation to queued actions, subagents, recurrence, memory, prior approvals, and accepted boundary previews. [R79, R80, R90]

- A steering event that broadens target, tool, consequence, resource, or authority invalidates the affected preview or approval.

- Pause and cancel distinguish requested, acknowledged, enforced, and residual states.

- A late steering event that cannot affect an already committed effect is recorded as ineffective rather than presented as successful control.

<a id="tool-capability-and-trust-boundary-profile"></a>
##### Tool capability and trust-boundary profile

Every tool or action adapter SHOULD publish a versioned capability manifest: tool_id and version; read, write, and execute classes; accepted input trust; sensitive-data access; external communication; durable state change; target domain; reversibility; idempotency; confirmation class; effect-preview support; network, credential, and environment scope; output trust; and failure semantics. [R84, R88, R91, R92]

- The risk triad records whether an action combines A: untrusted inputs, B: sensitive systems or private data, and C: durable state change or external communication. Autonomous execution SHOULD NOT combine all three without an explicit higher-assurance profile and synchronous control. [R84]

- Destructive or externally consequential tools MUST bind an explicit target from authoritative state; inferred targets alone are insufficient.

- Tool output is assigned a trust class and cannot automatically become higher-authority instruction because it originated from an internal tool or subagent.

<a id="multi-agent-composition-profile"></a>
##### Multi-agent composition profile

A composed system records orchestration_id and version, agent_instance_id, parent or delegating actor, assigned role, subgoal, delegated authority, inheritance rule, communication scope, shared-memory scope, commitment, coordination protocol, aggregate effect ceiling, aggregate resource budget, termination propagation, handoff state, collective-risk state, and cross-session correlation ID. [R82, R83, R89, R90, R92]

- Collective-risk states MAY include stable, degraded, quorum_lost, cascade_suspected, correlated_failure, collusion_suspected, accountability_vacuum, and containment_in_progress.

- Component conformance does not imply composed-system conformance. Changes to agent count, roles, communication topology, shared memory, tools, budgets, or stopping rules invalidate affected evidence.

- Aggregate limits are enforced across the composition; splitting one effect among children does not bypass count, cost, rate, or externality ceilings.

<a id="configuration-and-conformance-evidence-profile"></a>
##### Configuration and conformance evidence profile

Every consequential run, approval, and conformity claim binds to a configuration fingerprint covering model, harness, instruction stack, tool inventory and versions, permissions, memory implementation, orchestration graph, environment, semantic-profile versions, and control profile. A Conformance Evidence Record identifies object_of_conformity, responsible party, applicable requirements, assessment method and harness, tool and resource access, corpus and collection period, assessor, results, exceptions, valid_from, expires_at, superseded_by, upstream evidence, downstream assumptions, and revocation state. [R76–R78]

- Downstream organizations MAY rely on valid upstream evidence while remaining accountable for their own configuration, integration, deployment context, and use.

- A conformance card shown to an operator MUST name the assessed object and configuration; a model-family badge alone is insufficient.

- Evidence expiry or configuration mismatch projects into EVIDENCE and AUTH and can lower agency or require reassessment.

<a id="semantic-deployment-simulation-and-regression-gate"></a>
##### Semantic deployment simulation and regression gate

Material changes to the model, instruction hierarchy, harness, tool inventory or semantics, permissions, policy service, memory, orchestration, grammar schema, delta reducer, ranking logic, or UI projection trigger representative trajectory replay before promotion. Deployment-like simulation complements unit, adversarial, and tail-risk evaluations by preserving realistic context, tools, and operator transitions. [R78]

- Replay measures false-ready decisions, material-delta omission, authority confusion, wrong-next-actor rate, unsupported expressions, memory contamination, cross-workstream contamination, unsafe steering acceptance, instruction-conflict resolution, approval invalidation failure, effect-preview mismatch, and failure to hand back control.

- Each report records environment_fidelity_error and input_distribution_shift rather than presenting simulated behavior as direct production truth.

- A separate unknown-behavior discovery pass searches beyond the current failure taxonomy so regression testing does not only confirm already named risks.

<a id="resource-and-budget-authority-profile"></a>
##### Resource and budget authority profile

Resource use is an AUTH and EFFECT concern. Record budget_scope, unit, hard_or_soft_limit, consumed, reserved, remaining, accountable owner, reset rule, expiry, increase-request path, and breach action. Budget authority is separate from task authority: the ability to request work does not automatically authorize unlimited compute, money, messages, storage, or human-review load. [R79, R80]

<a id="semantic-versioning-and-compatibility"></a>
##### Semantic versioning and compatibility

Every profile declares version, compatibility range, required extensions, unknown-field policy, migration behavior, and deprecation date. Receivers MUST preserve unknown consequential fields or fail explicitly; silently dropping an unfamiliar authority, effect, memory, or control field is non-conformant. Aliases may support presentation and migration, but one canonical meaning remains authoritative.

<a id="what-the-envelope-gives-the-operator"></a>
#### What the envelope gives the operator

A shared envelope can create several operational properties, provided its fields are independently validated.

**Composition.** Heterogeneous agents and tools can contribute to one supervisory surface without requiring the operator to learn each system’s private status language.

**Substitutability.** A model or agent implementation can change while the operator-facing accountability semantics remain stable.

**Aggregation.** Systems can measure claims, exceptions, authorization failures, reversibility, review obligations, and outcomes across workstreams because equivalent events share equivalent meanings.

**Accountability.** A durable record can connect a machine expression to its evidence, principal, policy basis, and actual effect. The envelope supports audit and review; it does not by itself establish legal or regulatory compliance.

**Cognitive economy.** The operator learns one set of state, actor, evidence, consequence, and authority semantics rather than reconstructing each agent’s idiom from prose and logs.

**Continuity.** Expressions can be reorganized around the entering operator’s questions: what is the objective, what changed, why it matters, who acts next, what is permitted, and what decision can be made safely now.

<a id="canonical-continuity-grammar-and-operational-diff"></a>
#### Canonical continuity grammar and operational diff

The accountable expression envelope is the machine-readable substrate; the continuity grammar is its human-facing and cross-system projection. Cognitive Dimensions of Notations provides methodological precedent: representations benefit from a shared vocabulary that makes cognitive tradeoffs discussable rather than intuitive. [R65] A code diff can use plus and minus because it encodes one narrow relation. Concurrent work requires several orthogonal meanings, so one green/red light cannot safely stand for objective, state, agency, permission, evidence, consequence, and next action at once.

GOAL · ATTN · STATE · DELTA · ACTORS · AUTH · EVIDENCE · EFFECT · NEXT

Slot meanings. GOAL names the intended outcome or current subgoal. ATTN states why the workstream deserves attention now. STATE names its operational condition. DELTA records material change against a trusted baseline. ACTORS separates accountable owner, current actor, and next actor. AUTH states permitted, denied, expired, or unverifiable action classes. EVIDENCE states support quality, freshness, and contradiction. EFFECT states scope, externality, and reversibility. NEXT names the safest useful action or condition.

The number and boundaries of these slots are a design hypothesis, not a derived result. Nine slots were chosen to cover the questions an entering operator must answer to make the next safe decision — what is intended, why now, in what condition, what changed, who is responsible, what is permitted, what supports it, what it affects, and what to do — while remaining short enough to read under switch-level attention. A smaller set may prove sufficient, or a particular slot may decompose under field study; open research question 6 treats the minimal operator-facing grammar as an empirical question. The conformance requirements below therefore test whether a stable, ordered, independently validated grammar improves orientation, not whether this exact nine-slot taxonomy is final. Implementers should expect the slot set to be revised before any standardization.

Control state within the provisional grammar. The roadmap does not yet justify a tenth CONTROL slot. Until field evidence shows otherwise, control state projects through existing slots: ATTN carries a verified control exception; STATE carries held, contained, degraded, or under investigation; DELTA records a monitoring, environment, authority, or containment change; ACTORS names the acting agent, control service, accountable owner, and next reviewer; AUTH states allowed, blocked, deferred, or unverifiable; EVIDENCE distinguishes agent self-report from independent environment or monitor evidence; EFFECT states committed and prevented effects, containment radius, and reversibility; NEXT names inspect, resample, isolate, revoke, escalate, restore, or shut down.

ATTN control exception · STATE contained · DELTA agent requested a tool outside delegated scope · ACTORS current control service; next security reviewer · AUTH execution blocked · EVIDENCE environment log plus independent action monitor · EFFECT no external effect; three child jobs paused · NEXT inspect and choose shutdown radius

This projection is itself a field-study case for whether the nine-slot design hypothesis needs revision.

<a id="grammar-slot-provenance"></a>
##### Grammar-slot provenance

No single agent is authoritative for the complete grammar. Each slot should be populated from the service or derived state that can validate it.

| **Slot** | **Primary source**                                                                              | **Derivation / validation**                                                        |
|----------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| GOAL     | Workstream or delegation record                                                                 | Current intended outcome or subgoal; versioned when scope changes                  |
| ATTN     | Priority service over obligations, change, consequence, and policy                              | Explainable attention claim; evaluated separately through portfolio-level triage   |
| STATE    | Workstream state machine                                                                        | Current operational condition, independent of actor and authorization              |
| DELTA    | Semantic event reducer against a trusted baseline                                               | Typed before/after change with source, time, and affected intent                   |
| ACTORS   | Identity, ownership, delegation, and orchestration services                                     | Accountable owner, current actor, and next actor                                   |
| AUTH     | Policy and authorization service                                                                | Permitted, denied, expired, or unverifiable by action class and scope              |
| EVIDENCE | Evidence and provenance services                                                                | Decisive sources, freshness, contradiction, transformation, and epistemic mode     |
| EFFECT   | Tool adapter, execution service, or domain system                                               | Expected or actual scope, externality, magnitude where relevant, and reversibility |
| NEXT     | Derived from state, obligation, actors, authorization, evidence, effect, and safe-action policy | Safest useful action or waiting condition; must not broaden permission             |

**Operational diff vocabulary.** + added or newly satisfied; - removed or invalidated; ~ changed; -\> transferred; ! exception or attention claim; = no material change. Each mark names the affected field and exposes before/after values when applicable. Color may reinforce a mark but never defines it.

```text
GOAL qualify Northstar renewal
ATTN review
STATE review
DELTA ~ consent: valid -\> expired
ACTORS owner Connor \| current none \| next Connor
AUTH external_send: denied
EVIDENCE verified CRM record, 09:42
EFFECT external; non-reversible
NEXT review consent evidence
```

<a id="glanceability-and-the-perceptual-budget"></a>
#### Glanceability and the perceptual budget

The continuity grammar makes a bounded speed claim: at a focus transition, an operator should be able to locate the workstream that merits attention and then acquire enough of its operating state to decide what to inspect next. Visual-search research supports the first part of that claim under defined conditions. It does not imply that the full nine-slot grammar can be read preattentively.

Basic visual properties—including hue, luminance, size, orientation, and motion—can guide attention rapidly and in parallel when a target is sufficiently distinct from its context. In visualization research, tasks completed on briefly exposed multi-item displays in roughly 200–250 milliseconds are commonly treated as preattentive because they can occur before a deliberate eye movement is normally initiated. [R69–R71] Efficient feature search is usually expressed as a shallow relationship between response time and set size, not a guarantee of literally constant time. Its efficiency depends on target–distractor similarity, distractor homogeneity, eccentricity, density, and task. [R70, R72, R73]

This gives Workstream Continuity Design a testable design hypothesis. If a human-exclusive or high-consequence attention claim is mapped to a dedicated, redundant salient cue against a visually quiet majority, an operator should be able to locate that exception with little incremental search cost across practical portfolio sizes. The cue can summon attention; it cannot by itself communicate goal, state, authority, evidence, consequence, or next action. Those semantics require focused inspection.

Feature-integration theory and later visual-search models bound the design. Targets defined by conjunctions of attributes are generally less efficient to locate than targets distinguished by a single strong feature, although guidance can make some conjunction searches efficient. [R69, R72, R73] Workstream Continuity Design should therefore not assume a one-to-one mapping between its semantic slots and preattentive channels. Actor identity, authority, evidence, consequence, and next-action meaning are focused-reading tasks, and a workstream line may require more than one fixation depending on density, expertise, and device.

Three consequences follow.

First, the compact-versus-expanded split is a perceptual architecture, not merely a layout convenience. The portfolio layer should give ATTN an independently detectable cue and keep ATTN, STATE, DELTA, and NEXT in stable positions for focused reading; it should not claim that all four slots are preattentive. Workstream acquisition then expands to the full grammar. The five-second target should be evaluated as two phases: rapid target acquisition—does anything here need me?—followed by focused semantic acquisition—what changed, what is permitted, and what is the next safe decision? Exact timings are empirical outcomes, not guarantees.

Second, the highest-consequence obligation must not depend on a semantic conjunction. An operator should not need to combine AUTH: denied with EFFECT: irreversible to discover that a human intervention is required. Give that obligation an independently detectable attention claim, then state it redundantly through text, structure, and accessible status. Color may reinforce the cue but cannot be its only carrier.

Third, efficient exception finding depends on a quiet majority. Search becomes less efficient as targets resemble distractors or as distractors become heterogeneous. [R73] When many workstreams simultaneously claim attention, the interface should stop relying on pop-out and enter an explicit incident, batch, or grouped-triage mode that suppresses competing decorative salience.

This yields a falsification-oriented test. Add a set-size triage function beside Time to Decision Readiness. Present controlled portfolios at several set sizes with target-present and target-absent trials, randomized target location, stable semantic content, and controlled density. Measure the time and accuracy of the binary judgment “Does any displayed workstream require human attention?” and, separately, the time to identify the target workstream. Estimate the change in response time as additional workstreams are displayed and report false-positive and false-negative rates. A shallow relationship with stable accuracy supports efficient first-glance guidance under the tested conditions; a steepening relationship indicates increasing serial inspection or conjunction dependence. The result does not, by itself, prove a discrete preattentive mechanism or establish full decision readiness.

<a id="three-compression-levels"></a>
#### Three compression levels

- Portfolio scan — ATTN · STATE · DELTA · NEXT.

- Workstream acquisition — GOAL · ATTN · STATE · DELTA · ACTORS · AUTH · EVIDENCE · EFFECT · NEXT.

- Decision and audit — the full grammar plus sources, policy basis, alternatives, raw events, approvals, receipts, and recovery state.

Compression may omit only slots that are unchanged, immaterial, or unavailable by design; it must never imply that omitted authority, evidence, or consequence is favorable. Equivalent meanings must survive visual UI, text, voice, screen-reader output, APIs, logs, and agent-to-agent handoff.

Shared language and quantification. Developers and agents exchange typed fields; people receive a stable visual, textual, voice, or assistive projection. Report Time to Decision Readiness with a decision-readiness vector — goal, state, material delta, actor chain, authority, evidence, effect, and next action — marking each dimension correct, incorrect, or unknown after a workstream has been selected. Evaluate ATTN separately through portfolio-level target-acquisition and triage measures. Do not collapse disagreement among the dimensions into one opaque readiness score.

<a id="wcd-semantics-policy-core-conformance-requirements"></a>
#### WCD Semantics Policy: core conformance requirements

A conformant implementation of the WCD Semantics Policy’s core profile should satisfy at least the following tests:

1.  Every workstream exposes the same canonical grammar slots and controlled meanings at each operator surface and relevant API boundary.

2.  Visual, textual, voice, screen-reader, and structured-data projections preserve semantic equivalence; color, icons, and compact symbols remain optional aliases.

3.  Every operator-visible expression has a stable identity, actor, principal, time, type, and workstream association.

4.  Claims distinguish observation, retrieval, inference, prediction, and assumption, and expose evidence or the absence of evidence at the decision point.

5.  Proposed and completed actions expose scope, affected targets, externality, reversibility, and expected or actual effect.

6.  Authorization is resolved by an authoritative policy service and remains distinct from recommendation, approval artifacts, model confidence, and user-interface state.

7.  Workstream and action transitions preserve an auditable history that distinguishes proposed, authorized, initiated, partially completed, completed, failed, revoked, and superseded conditions where relevant.

8.  The operator can inspect, correct, reject, pause, stop, narrow, escalate, take over, undo, or invoke a compensating action according to the agency level and technical feasibility.

9.  Missing or unverifiable support, consequence, or authorization fails closed for externally consequential, privileged, or otherwise high-risk execution.

10. The continuity surface reconstructs semantic deltas rather than merely replaying every expression chronologically.

11. For high-agency systems, monitoring and control state are independently sourced; the acting agent is not the sole authority for its own compliance, environment, effects, or containment.

12. Control exceptions link parent and child runs, affected workstreams, control decisions, containment status, residual effects, and the next responsible actor.

13. When monitoring, logging, policy, isolation, or shutdown coverage is degraded or unverifiable, the surface exposes that degradation and lowers available agency or fails closed according to consequence.

14. Every consequential expression and action binds to a semantic-profile set and configuration fingerprint sufficient to distinguish materially different deployments.

15. Instruction provenance distinguishes authoritative instruction from untrusted content, records conflict and supersession, and prevents silent promotion of retrieved or tool-produced text into higher authority.

16. Shared-agent operation distinguishes requester, delegator, accountable principal, approver, memory custodian, and affected non-requesters; participation alone does not grant control.

17. Durable memory writes are typed, sourced, scoped, reviewable, expirable, and revocable, and consequential mutations produce a visible delta.

18. Recurrence and steering are represented as durable contracts and events whose authority, propagation, expiry, cancellation, and residual effects are inspectable.

19. Tool manifests expose trust boundary, sensitive access, state-change and external-communication capability, target binding, reversibility, credential scope, and confirmation class.

20. Delegation attenuates authority by default, and aggregate effect, resource, and termination limits remain enforceable across parent and child agents.

21. Component evidence is not represented as composed-system evidence unless the composition, environment, inherited assumptions, and additional controls were assessed explicitly.

22. Conformance evidence names the assessed object, configuration, responsible party, method, validity period, exceptions, upstream evidence, and downstream assumptions.

23. Material configuration or semantic changes trigger representative trajectory replay, adversarial cases, and explicit regression disposition before deployment.

24. Unknown, unavailable, withheld, not applicable, not yet observed, conflicted, and invalid states remain distinguishable and do not default to favorable interpretation.

25. Profile versioning, compatibility, migration, deprecation, and unknown-field handling are explicit at system boundaries.

These tests extend the WCD spine beneath the interface: rapid orientation requires stable grammar; durable workstream state requires durable machine expression; meaningful change requires typed deltas; visible agency requires verified identity and authority; and safe decision-making requires bounded consequence, evidence, and intervention.

<a id="boundary-of-the-proposal"></a>
#### Boundary of the proposal

The envelope governs the **accountable surface** of operated systems. It does not standardize private chain-of-thought, internal model reasoning, every token exchanged between components, or all open-ended conversation with an individual user. It does not require natural-language payloads to disappear. It requires operationally relevant expressions to carry enough structured semantics that supervision does not depend on interpreting prose alone.

The proposal also does not assume that one schema should be frozen immediately. Premature standardization can ossify poor categories, privilege incumbent vendors, create compliance theater, and suppress domain-specific meaning. A viable standard would require extension rules, version negotiation, conformance tests, governance, security review, and a process for deprecation and correction.

<a id="principal-failure-modes"></a>
#### Principal failure modes

**Self-attestation.** The agent reports that its evidence is sufficient, its action is reversible, and its authority is valid without independent resolution.

**False precision.** Structured fields imply certainty that the underlying evidence or consequence model does not support.

**Provenance dumping.** The envelope links to a large trace but fails to identify the decisive evidence, contradiction, or transformation.

**Authorization drift.** A previously valid approval or standing grant is reused after the target, policy, scope, or workstream state changes.

**Schema capture.** One vendor’s internal concepts become the de facto standard and make competing implementations or domains subordinate.

**Privacy leakage.** Auditability exposes secrets, personal data, restricted sources, or internal reasoning that the operator is not authorized to inspect.

**Metric gaming.** Teams optimize field completion or low exception counts while actual orientation, review quality, and control deteriorate.

**Over-standardization.** The system forces exploratory conversation and low-consequence collaboration into rigid categories that add burden without increasing accountability.

Instruction laundering. Untrusted content, tool output, or a subagent summary is treated as authoritative instruction because it appears inside an internal channel.

Identity flattening. Requester, delegator, accountable principal, actor instance, and credential subject are collapsed into one “user” or “agent” field.

Memory laundering. An inference written to durable memory later reappears as an established fact or standing preference.

Composition inheritance. Component, model, or upstream evidence is presented as proof for an unassessed integrated system.

Configuration amnesia. The product cannot state which model, prompt stack, tools, permissions, memory, and orchestration produced a consequential result.

Semantic downgrade. A receiver silently drops an unfamiliar field or maps distinct null states into one blank value.

<a id="status-of-the-claim"></a>
#### Status of the claim

| **Status**              | **Claim**                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Established lineage     | Typed communicative acts, interoperable agent tasks and messages, state snapshots and deltas, session plans and permissions, declarative UI, event envelopes, provenance models, and semantic telemetry already exist [R55–R68]                                                                                                                                                                                                    |
| Original synthesis      | A continuity grammar should normalize goal, attention, state, delta, actors, authority, evidence, consequence, and next action, backed by a WCD Semantics Policy whose core Accountable Expression Profile binds identity, expression lifecycle, workstream membership, and intervention, and whose extension profiles govern instruction, context, memory, recurrence, tools, composition, configuration, and conformance evidence. |
| Design proposal         | WCD should use the continuity grammar and WCD Semantics Policy as a human-facing application and conformance model.                                                                                                                                                                                                                                                                                                                  |
| Research hypothesis     | The grammar and WCD Semantics Policy profile suite will reduce decision-ready time and cross-workstream contamination while improving supervision, trust calibration, intervention quality, and portability of oversight tooling.                                                                                                                                                                                                    |
| Open standards question | The correct core taxonomy, extension-profile boundaries, schema, compatibility rules, governance, security architecture, and conformance process remain to be developed and tested.                                                                                                                                                                                                                                                  |

<a id="the-claim-in-one-line"></a>
#### The claim in one line

Workstream Continuity Design requires each workstream to expose a stable continuity grammar — backed by a modular WCD Semantics Policy with typed, attributable, evidenced, bounded, policy-resolved, configuration-specific expressions — so humans and machines can acquire the operating picture and make the next safe decision quickly.

<a id="the-workstream-acquisition-and-re-entry-protocol"></a>
### 10. The workstream acquisition and re-entry protocol

<a id="four-entry-modes"></a>
#### Four entry modes

- First entry — acquire the goal, current state, actors, authority, evidence, consequence, and available next action without assuming prior familiarity.

- Rapid switch — show the compact grammar and only the material delta from the last trusted inspection; expand when authority, evidence, or consequence changed.

- Longer return — add staleness checks, changed assumptions, missing artifacts, and safe fallback behavior.

- Inherited handoff — explain prior intent, responsibility transfer, unresolved decisions, evidence basis, and the exact obligation accepted by the new actor.

<a id="canonical-sequence"></a>
#### Canonical sequence

Run this sequence whenever focus enters a workstream, not only at login or after a long absence. A rapid switch uses a compact fast path; inherited work, material deltas, stale state, uncertain authority, weak evidence, or high consequence trigger the expanded path:

1\. Identify context. Determine the user, device trust, workspace, selected workstream, and available saved contexts.

2\. Recover prior intent. Retrieve the goal, prior subgoal, selected artifacts, last trusted checkpoint, and the reason this workstream now claims attention.

3\. **Revalidate.** Check access, policy, object existence, eligibility, and data freshness before restoring action controls.

4\. **Compare assumptions.** Identify facts, dependencies, deadlines, permissions, or external states that changed.

5\. **Summarize semantic deltas.** Explain what changed, why it matters, and which previous intent is affected.

6\. Surface obligations and exceptions. Show what needs the human now, what is blocked, what changed priority, and what decision is available.

7\. **Show autonomous continuation.** State what can continue safely without the person and under what authority.

8\. **Recommend the safest useful next action.** Prefer a reversible or review action when context confidence is incomplete.

9\. **Restore or fall back.** Recover exact view and selection when valid; otherwise open a safe reconstructed context with explanation.

10\. Record a new trusted inspection point. Mark what the user has reviewed so future “since last inspection” summaries have a valid baseline.

<a id="pattern-acquisition-resume-strip"></a>
#### Pattern: Acquisition / resume strip

A compact strip names the workstream goal, current subgoal, last trusted inspection, material-delta count, actor chain, authority status, and one action: Open decision context or Resume safely. It must not auto-execute consequential actions or conceal that the context changed.

<a id="pattern-context-snapshot"></a>
#### Pattern: Context snapshot

A snapshot stores intent-bearing state:

- Workstream and goal.

- Current subgoal or question.

- Selected object and comparison set.

- Filters, sort, and grouping that affect interpretation.

- Open evidence and unresolved decision.

- Private notes and visibility scope.

- Timestamp, device, application version, and expiry.

<a id="pattern-since-last-inspection-summary"></a>
#### Pattern: Since-last-inspection summary

The summary is anchored to the user’s last trusted inspection, not merely last login or elapsed time. On a rapid switch it may be one line; after material change it expands. It groups deltas by impact:

- Invalidates prior intent.

- Creates a human obligation.

- Unblocks or blocks work.

- Changes deadline or consequence.

- Completes bounded work.

- Informational only.

<a id="pattern-changed-assumptions-warning"></a>
#### Pattern: Changed-assumptions warning

When a saved context depends on a fact that changed, the interface interrupts restoration before presenting old action controls. It states the assumption, prior value, current value, source, and affected decision. The system should prefer “Review changed consent before continuing” over silently restoring a send-ready draft.

<a id="pattern-last-inspected-object"></a>
#### Pattern: Last inspected object

“Last opened” is not necessarily “last understood.” A trusted inspection point can be recorded when the user viewed required evidence, completed a review, or explicitly marked a checkpoint. The interface should distinguish automatic recency from deliberate inspection.

<a id="pattern-restored-filters-sort-and-selection"></a>
#### Pattern: Restored filters, sort, and selection

Restore view state only when it contributes to intent. Re-run server-side queries against current permissions and data; do not replay cached eligibility. Show a compact “Restored view” indicator with an option to reset.

<a id="pattern-session-close-summary"></a>
#### Pattern: Session-close summary

When departure is deliberate, offer a lightweight checkpoint:

- Current goal.

- Unfinished thought or next step.

- Waiting condition.

- People or agents holding work.

- Important unsaved artifacts.

- Desired return trigger.

The summary may be generated, but the user should be able to edit or dismiss it. Do not turn closing into mandatory administrative work.

<a id="shared-agent-inspection-baselines"></a>
#### Shared-agent inspection baselines

For shared workstreams, “since last inspection” is person-relative. Preserve each participant’s trusted inspection baseline and any role-level or team-level acknowledgment required by policy. A new requester sees which facts and decisions they personally have not inspected; a team summary may state that another authorized reviewer accepted an item without implying universal awareness. [R80]

<a id="memory-review-at-switch-in"></a>
#### Memory review at switch-in

When durable memory influenced current state, the entry surface identifies the decisive memory records, whether each was stated, retrieved, inferred, or accepted, what changed since the prior inspection, and whether any memory is expired, conflicted, or revoked. The operator can inspect the mutation receipt without reading the entire transcript.

<a id="recurrence-acquisition"></a>
#### Recurrence acquisition

A recurring workstream shows the governing trigger, last and next wake, actions already taken, no-op decisions, remaining budget, expiry, stop condition, and the owner who can pause or revoke it. A schedule that has expired, lost its owner, exceeded budget, or lost required monitoring becomes Blocked or suspended rather than continuing silently.

<a id="steering-reconciliation"></a>
#### Steering reconciliation

At switch-in, the system reconciles steering events against the accepted goal version, queued work, child agents, recurrence, approvals, and boundary previews. It names which instructions took effect, which arrived too late, which conflicted, and which pending effects remain. A user should never have to infer from chat order whether “stop,” “only do X,” or “use the previous plan” actually changed execution.

<a id="stale-and-missing-context"></a>
#### Stale and missing context

A saved context can become stale because records changed, were deleted, permissions shifted, policies updated, agents produced new artifacts, or the product schema evolved. Safe fallback behavior is:

- Preserve the prior goal and explanation.

- State precisely what cannot be restored.

- Re-run authoritative checks.

- Link to replacement or archived objects when permitted.

- Disable actions whose preconditions cannot be verified.

- Offer a reconstructed overview rather than an error-only dead end.

<a id="privacy-and-shared-devices"></a>
#### Privacy and shared devices

- Default private resume context to the authenticated user.

- Avoid displaying sensitive titles or snippets before reauthentication.

- Allow workspace administrators to define retention and device-trust rules.

- Provide clear saved-context and history deletion controls.

- Do not include secrets, full message bodies, health data, or credentials in broad audit summaries.

- On shared devices, restore only after positive identity confirmation and prefer generalized labels on the lock or switcher surface.

<a id="cross-device-synchronization"></a>
#### Cross-device synchronization

Synchronize semantic context through the server, not raw browser memory. Resolve conflicts by preserving both checkpoints when intent diverged, showing which is newer, and revalidating each. A device should never be able to reintroduce stale permission or suppressed eligibility.

<a id="attention-and-prioritization-model"></a>
### 11. Attention and prioritization model

<a id="priority-is-a-policy-informed-ordering-not-a-universal-score"></a>
#### Priority is a policy-informed ordering, not a universal score

The system may compute an internal priority function, but the interface should present a human-readable reason and expose decisive factors. A useful conceptual model is:

**Attention claim = urgency × consequence × human exclusivity × dependency impact × change significance, moderated by reversibility, confidence, and policy.**

This is not a mandate to multiply normalized numbers. It is a design checklist and ranking logic. Some factors are categorical overrides: suppression can remove an action entirely; a verified safety event can outrank routine economic value.

<a id="attention-tiers"></a>
#### Attention tiers

| **Tier** | **Condition**                                    | **Default presentation**                                 | **Typical examples**                                                                               |
|----------|--------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| 0        | Policy, safety, security, or integrity exception | Immediate center; interrupt when verified and actionable | Suppression breach attempt, destructive run, data exposure, policy service unavailable during send |
| 1        | Human-exclusive consequential decision           | Prominent Now / Human oversight                          | Final external send, approval with legal or financial effect, unresolved contradiction             |
| 2        | Downstream blockage or expiring condition        | Prominent but batchable                                  | One approval blocking twelve workstreams, consent expiring today                                   |
| 3        | Changed assumption affecting prior intent        | Re-entry warning or Changed lane                         | Customer reply invalidates draft; owner changed; deadline moved                                    |
| 4        | Reversible high-value action                     | Recommended queue                                        | Review enrichment, accept internal classification, resume analysis                                 |
| 5        | Ambient progress and routine completion          | Peripheral summary or on demand                          | Successful background enrichment, completed indexing, normal system health                         |

<a id="factor-definitions"></a>
#### Factor definitions

- **Urgency** — rate at which delay worsens outcome, not a red label chosen by a requester.

- **Consequence** — magnitude and scope of effect on people, money, law, privacy, reputation, operations, or safety.

- **Reversibility** — reliability, completeness, and time window of undo.

- **Confidence** — quality and calibration of the evidence or prediction; low confidence can increase review need but should not automatically increase urgency.

- **Time sensitivity** — deadline, decay, or opportunity window.

- **Human exclusivity** — whether only a person with specific authority or judgment can advance the work.

- **Policy risk** — likelihood and impact of violating a governing rule.

- **Dependency depth** — number and criticality of downstream workstreams blocked.

- **Change significance** — whether new information invalidates a prior assumption, plan, or approval.

<a id="avoiding-everything-is-urgent"></a>
#### Avoiding “everything is urgent”

- Reserve urgent semantics for defined conditions with owners and expiry.

- Require a reason and source for urgency.

- Decay or remove urgency when the condition resolves.

- Measure false urgency and ignored alerts.

- Batch similar obligations where one decision can resolve several items.

- Do not let stakeholders manually mark unlimited items urgent without governance.

<a id="scores-do-not-imply-permission"></a>
#### Scores do not imply permission

Ranking and authorization are orthogonal. A high-priority lead can be suppressed. A high-confidence remediation can exceed the agent’s authority. A low-confidence anomaly may require investigation but not immediate action. Display priority reason and policy state separately.

<a id="preventing-ai-confidence-from-dominating-judgment"></a>
#### Preventing AI confidence from dominating judgment

- Prefer evidence quality and contradictions over a large confidence badge.

- Use calibrated ranges or qualitative categories only when validated.

- Explain what the confidence refers to: extraction, classification, outcome prediction, or plan success.

- Withhold numeric confidence when it is not calibrated for the decision population.

- Present alternative hypotheses for high-consequence reviews.

<a id="repeated-alerts-and-count-inflation"></a>
#### Repeated alerts and count inflation

A single underlying condition should have one canonical alert identity. Updating the condition should amend the existing alert, not create another count. Counts must specify their unit—workstreams, decisions, events, or affected objects—and avoid adding the same workstream across sections.

<a id="duplicate-representation"></a>
#### Duplicate representation

A workstream may have several facets but should appear once in the main orientation hierarchy. If an item in Human oversight is also blocked, show the blocker inline or choose the state that best describes the next required intervention. Related sections can link to it without incrementing independent totals.

<a id="prohibition-on-engagement-tactics"></a>
#### Prohibition on engagement tactics

Continuity surfaces should not use streaks, artificial scarcity, confetti, agent “busyness,” or fear-of-missing-out language to increase interaction. The objective is accurate control and safe throughput, including the legitimate state in which the user has nothing to do.

<a id="pattern-library"></a>
### 12. Pattern library

<a id="pattern-1-workstream-entry-resume-card"></a>
#### Pattern 1 — Workstream Entry / Resume Card

**Problem.** A user enters, switches into, inherits, or returns to a workstream without the exact goal, material delta, evidence, authority, or unfinished decision.

**Use when.** Work is interleaved with other workstreams or persists beyond a session and the prior context remains recoverable.

**Do not use when.** The prior context is sensitive on the current device, has no meaningful unfinished intent, or cannot be revalidated.

**Required data.** Workstream, goal, attention claim, state, last trusted checkpoint, material delta, accountable/current/next actors, authority, evidence status, effect, staleness result, and acquisition/resume target.

**Anatomy.** Recognizable title and goal; compact grammar projection; changed-since baseline; actor chain; authority/effect boundary; primary Open decision context or Resume safely action; clear-saved-context control.

**Interaction.** Opening the card revalidates policy, evidence, and objects; shows changed assumptions; and restores the exact valid decision context or a safe fallback.

**Accessibility.** The card must be first in logical reading order when present; changed state cannot rely on color; action label must identify the destination.

**Safety.** Never restore cached eligibility or execute an action automatically. Mask sensitive labels before reauthentication.

**Anti-pattern.** A “Continue” tile that simply opens the last URL.

**Success metric.** TTDR; decision-readiness vector accuracy; false-ready rate; time to meaningful resumption; stale-context incident rate.

<a id="pattern-2-recommended-next-queue"></a>
#### Pattern 2 — Recommended Next Queue

**Problem.** A portfolio contains more actionable items than a person can inspect individually.

**Use when.** The system can rank current obligations with explainable factors and reliable policy state.

**Do not use when.** Ranking cannot be explained, authorization is unknown, or users must follow a fixed regulated sequence.

**Required data.** Workstream state, priority factors, owner, next actor, consequence, reversibility, due condition, permission.

**Anatomy.** One dominant item; short ranked remainder; reason-for-priority text; state/actor labels; consequence marker; alternate sort/filter.

**Interaction.** Users can inspect rationale, defer with a reason, correct ranking inputs, and switch to the full queue. Deferral should set a condition, not merely hide work.

**Accessibility.** Ranking is expressed numerically and semantically, not only spatially. Keyboard order follows visual order.

**Safety.** Suppressed or unauthorized actions never enter the executable queue. Priority does not override policy.

**Anti-pattern.** “Top opportunities” ordered by an opaque score with a green Send button.

**Success metric.** Time/views to identify the right next action; ranking override quality; missed higher-consequence obligations.

<a id="pattern-3-human-decision-inbox"></a>
#### Pattern 3 — Human Decision Inbox

**Problem.** Reviews and approvals are mixed with routine tasks or buried inside agent transcripts.

**Use when.** A specific human judgment, authority, or evidence assessment is required.

**Do not use when.** The human interaction is merely a ceremonial click or can be safely automated under explicit policy.

**Required data.** Decision question, options, evidence, uncertainty, consequence, scope, deadline, policy status, approver, downstream effects.

**Anatomy.** Decision verb; concise recommendation; evidence summary; dissent/contradiction; consequence and reversibility; Approve/Reject/Request change or domain-specific actions.

**Interaction.** Support comparison, comments, delegation, and batch review only when evidence and action are materially homogeneous. Record reasons proportionately.

**Accessibility.** Decision controls have explicit labels and predictable focus. Evidence summaries use headings and source links.

**Safety.** Approval is scoped and expires when governing facts change. The inbox must not show an executable action when policy denies it.

**Anti-pattern.** A list of “AI needs approval” items with no explanation of what approval authorizes.

**Success metric.** Decision accuracy, review time distribution, reversal rate, rubber-stamping indicators, missed obligations.

<a id="pattern-4-ai-work-monitor"></a>
#### Pattern 4 — AI Work Monitor

**Problem.** Several long-running machine tasks need supervision, variance detection, and intervention.

**Use when.** Run supervision is a primary job and users need cross-run control.

**Do not use when.** Only one short task runs at a time or the monitor would duplicate state already represented in workstreams.

**Required data.** Run objective, scope, current phase, actor configuration, tools, affected objects, progress, variance, expected handoff, monitoring mode, control posture, execution environment, parent/child lineage, containment state, controls, and logs.

**Anatomy.** Grouped runs by operational condition; compact normal progress; expanded exceptions; monitor/control-health indicator; stop, pause, redirect, or isolate controls; handoff status; affected-workstream and control-incident links.

**Interaction.** Users can inspect plan and artifacts, narrow scope, pause after a safe boundary, stop, isolate or revoke where supported, retry, or escalate. Completed runs fold into receipts; child jobs remain visible.

**Accessibility.** Progress uses text values and aria-equivalent semantics in implementation; animations are optional and respect reduced motion.

**Safety.** Scope expansion, destructive tools, external actions, and privilege changes require separate boundaries. Monitoring or logging degradation must be visible and lower available agency. Stop or isolate controls must state their enforcement source, containment radius, and residual effects.

**Anti-pattern.** An aquarium of animated agents that signals activity but not consequence.

**Success metric.** Intervention latency, variance detection, unnecessary interruptions, recovery success, wrong-scope actions.

<a id="pattern-5-waiting-lane"></a>
#### Pattern 5 — Waiting Lane

**Problem.** Intentionally paused work remains mixed with active work, creating noise and repeated checking.

**Use when.** Progress depends on a known person, event, date, system, or evidence condition.

**Do not use when.** There is no explicit trigger or owner; that condition is blocked, not waiting.

**Required data.** Waiting reason, awaited actor/event, trigger, start time, expected window, owner, follow-up rule, escalation threshold.

**Anatomy.** Trigger-first label (“Waiting for signed DPA”); expected/overdue status; next check; owner; optional reminder/escalation control.

**Interaction.** Incoming events can satisfy the trigger and move the workstream. Users can revise the trigger, nudge an external party, or convert to blocked.

**Accessibility.** Time states include absolute dates and timezone; avoid color-only overdue signals.

**Safety.** Do not auto-advance on weak event matching when the transition is consequential; require validation.

**Anti-pattern.** “Pending” as a generic state with no condition or next actor.

**Success metric.** Repeated manual-check frequency, overdue discovery latency, false trigger rate, time waiting without owner.

<a id="pattern-6-blocked-ledger"></a>
#### Pattern 6 — Blocked Ledger

**Problem.** Work cannot progress, but cause, impact, and unblock path are dispersed.

**Use when.** A prerequisite is absent, policy denies action, a dependency failed, access is missing, or evidence is contradictory.

**Do not use when.** Work is intentionally waiting for a normal condition.

**Required data.** Blocker type, cause, source, affected workstreams, accountable resolver, unblock action, escalation condition, first-seen time.

**Anatomy.** Blocker statement; root/observed cause distinction; impact count; resolver; recommended intervention; evidence link; age.

**Interaction.** Resolve one blocker across affected workstreams, delegate diagnosis, request evidence, appeal policy through authorized channels, or abandon with reason.

**Accessibility.** Use concise causal language and structured fields; provide non-visual relationship lists for dependency graphs.

**Safety.** Policy blockers cannot be “dismissed” into executability. Sensitive causes may require role-based redaction.

**Anti-pattern.** Blocked items remain in the active queue and repeatedly fail.

**Success metric.** Blocker discovery and resolution latency; duplicate investigations; downstream idle time; policy-bypass attempts.

<a id="pattern-7-since-last-inspection-digest"></a>
#### Pattern 7 — Since-Last-Inspection Digest

**Problem.** Raw activity history makes users infer which changes matter since their last trusted inspection, whether the gap was seconds or days.

**Use when.** Multiple meaningful events can occur while attention is elsewhere.

**Do not use when.** Nothing material changed; show a compact confirmation instead.

**Required data.** Last trusted inspection, semantic delta classification, affected intent, source events, actor, time, confidence.

**Anatomy.** Group by impact; lead with invalidated assumptions and obligations; concise before/after statements; evidence links; “show full history.”

**Interaction.** Mark reviewed, correct a misclassified delta, jump to affected context, or subscribe to a future trigger.

**Accessibility.** Before/after values are explicitly labeled; chronological order remains available; summaries are screen-reader navigable by impact heading.

**Safety.** Generated summaries must link to sources and disclose uncertainty or incomplete coverage. Never omit a policy or external-effect change to shorten the digest.

**Anti-pattern.** A notification inbox relabeled “Since last inspection.”

**Success metric.** Change-comprehension accuracy; time to identify invalidated intent; omitted-material-change rate.

<a id="pattern-8-actor-and-next-actor-labels"></a>
#### Pattern 8 — Actor and Next-Actor Labels

**Problem.** Users cannot tell whether a person, agent, service, or external party currently holds work or owes the next action.

**Use when.** Work crosses responsibility boundaries.

**Do not use when.** A truly atomic action has one actor and no handoff, though an owner may still be needed.

**Required data.** Accountable owner, current actor, next actor, actor type, expected transition, time or condition.

**Anatomy.** Consistent labels; actor name/type; current action phrase; next obligation phrase; accessible status text.

**Interaction.** Select an actor to inspect scope, delegated authority, related work, or reassign where permitted.

**Accessibility.** Do not encode human versus AI only through iconography. Read “Current actor: Enrichment agent” and “Next actor: Connor.”

**Safety.** An agent label includes configuration/version in audit details. Reassignment cannot broaden agency automatically.

**Anti-pattern.** “Owned by AI” removes the accountable human and next review obligation.

**Success metric.** Correct actor identification; wrong-actor actions; handoff latency; orphaned-workstream count.

<a id="pattern-9-decision-boundary"></a>
#### Pattern 9 — Decision Boundary

**Problem.** Preparation, recommendation, approval, and execution blur into one control.

**Use when.** A transition has external, irreversible, privileged, or policy-sensitive effects.

**Do not use when.** The action is low-consequence, reliably reversible, and already within standing authority.

**Required data.** Prepared artifact, target, exact effect, policy result, reviewer authority, evidence, externality, reversibility.

**Anatomy.** Visible boundary between “prepared” and “will execute”; final payload/target; consequence statement; authorization; deliberate commit control.

**Interaction.** Review, edit, reject, request changes, or execute. Material edits re-run policy and invalidate stale approval.

**Accessibility.** Confirmation text names the action and target; focus remains stable; destructive/external controls are not icon-only.

**Safety.** Server enforces the boundary and checks current state. The approval artifact is non-sendable by default.

**Anti-pattern.** A single “Approve & continue” silently sends or deploys.

**Success metric.** Unauthorized-side-effect rate; approval comprehension; post-approval surprise; policy recheck coverage.

<a id="pattern-10-evidence-and-provenance-drawer"></a>
#### Pattern 10 — Evidence and Provenance Drawer

**Problem.** Decision surfaces either omit evidence or expose an overwhelming raw trace.

**Use when.** A recommendation, classification, approval, or consequential action depends on inspectable sources.

**Do not use when.** Provenance can be shown fully in the primary surface without crowding it.

**Required data.** Source identity, timestamp, extraction or transformation steps, contradictions, model/tool configuration, observation source, whether each item is agent-authored or independently observed, monitor or validator identity, integrity state, policy references, and artifact versions.

**Anatomy.** Evidence summary; source list; freshness; supporting and conflicting facts; derivation path; raw trace link; download/export where appropriate.

**Interaction.** Expand in context without losing the decision; open source at the cited passage; flag incorrect evidence; compare versions.

**Accessibility.** Drawer is a labeled dialog or region with managed focus, close control, logical headings, and non-visual source order.

**Safety.** Redact secrets and role-restricted content; disclose missing evidence; prevent audit exports from leaking credentials or full sensitive payloads.

**Anti-pattern.** “Why?” produces a fluent model rationale with no source lineage.

**Success metric.** Evidence verification accuracy; time to locate decisive source; challenged-evidence rate; sensitive-data exposure incidents.

<a id="pattern-11-intervention-control"></a>
#### Pattern 11 — Intervention Control

**Problem.** A machine process diverges, exceeds scope, or encounters a condition requiring human correction.

**Use when.** Work is long-running, consequential, or tool-using and has safe interruption boundaries.

**Do not use when.** The action is instantaneous and atomic; offer undo or compensating action instead.

**Required data.** Current phase, committed effects, pending effects, safe stop points, rollback capability, dependencies, authority, control posture, parent/child jobs, containment radius, and control-service status.

**Anatomy.** Pause, stop, narrow scope, redirect, isolate, revoke, retry, escalate, or recursively stop controls; effect preview; containment-radius statement; residual-state statement; recovery options.

**Interaction.** A control request receives acknowledged state (“Stopping after current record”); the system records who intervened and why; partial artifacts remain accessible; child jobs are stopped, isolated, or explicitly reported outside the selected radius.

**Accessibility.** Controls are keyboard reachable and have status announcements; avoid moving targets as progress updates.

**Safety.** Emergency stop cannot be simulated by merely hiding the UI or asking the acting agent to stop itself. The independent control plane enforces idempotent, audited transitions; inability to contain an actor or child job is disclosed before execution and during intervention.

**Anti-pattern.** A Stop button closes the panel while the remote agent continues.

**Success metric.** Intervention acknowledgment time; residual unexpected effects; successful containment; recovery time.

<a id="pattern-12-context-snapshot"></a>
#### Pattern 12 — Context Snapshot

**Problem.** Exact working state is distributed among selection, filters, evidence, notes, and a partly completed reasoning path.

**Use when.** Users conduct multi-step analysis or comparison that may be interrupted.

**Do not use when.** The view contains transient or sensitive data that cannot be stored safely, or when the task is trivial.

**Required data.** Workstream ID, subgoal, selected objects, relevant view state, open artifacts, unresolved question, privacy scope, timestamp, schema version.

**Anatomy.** Snapshot name; captured scope; created time/device; expiry; preview; restore and delete controls.

**Interaction.** Auto-create a private checkpoint at meaningful transitions and allow named manual snapshots. Restoration validates each component and reports substitutions.

**Accessibility.** Snapshot previews use structured text, not screenshot-only representations. Controls expose created and expiry dates.

**Safety.** Minimize captured content; encrypt at rest; never persist secrets; enforce retention and access; treat snapshots as potentially sensitive records.

**Anti-pattern.** Full-screen capture masquerading as benign “memory.”

**Success metric.** Restoration completeness; privacy deletion success; stale component rate; reduction in reconstruction steps.

<a id="pattern-13-session-close-summary"></a>
#### Pattern 13 — Session Close Summary

**Problem.** Deliberate departure loses the user’s unfinished thought and next intended condition.

**Use when.** Sessions are long enough to accumulate context and users often return later.

**Do not use when.** It would interrupt a fast exit, shared-device sign-out, or emergency closure.

**Required data.** Current workstream, subgoal, unresolved items, current/next actor, waiting condition, unsaved artifacts, desired trigger.

**Anatomy.** One editable sentence (“Next, verify…”); compact actor/waiting summary; unsaved warning; save privately / skip.

**Interaction.** Offer at natural closure moments, not every navigation. Generate a draft from current state but let the user edit quickly.

**Accessibility.** The summary is optional, concise, and operable without drag interactions. Timeout behavior does not discard work.

**Safety.** Do not include sensitive content in notification text or unencrypted local storage.

**Anti-pattern.** A mandatory daily status report inserted into logout.

**Success metric.** Later recall accuracy; close-flow abandonment; percentage of saved summaries used; sensitive-content incidents.

<a id="pattern-14-stale-context-warning"></a>
#### Pattern 14 — Stale Context Warning

**Problem.** A restored view appears valid even though key facts, permissions, objects, or policies changed.

**Use when.** Saved context depends on mutable conditions.

**Do not use when.** Changes are immaterial to intent; record them quietly.

**Required data.** Snapshot baseline, current authoritative state, changed field or rule, materiality logic, affected action, source.

**Anatomy.** Plain statement of changed assumption; prior/current values; impact; required review; safe fallback action.

**Interaction.** Review the change, rebuild the context, discard the snapshot, or continue only when current policy permits and the user acknowledges material differences.

**Accessibility.** Place warning before stale controls in reading and focus order. Use text and icon, not color alone.

**Safety.** Actions dependent on the stale condition remain disabled until revalidation. Acknowledgment cannot override policy denial.

**Anti-pattern.** A small “data refreshed” toast while old selections drive a consequential bulk action.

**Success metric.** Stale-context action rate; correctly identified changed assumptions; warning override outcomes.

<a id="pattern-15-compact-system-status"></a>
#### Pattern 15 — Compact System Status

**Problem.** Users need to know whether platform degradation affects the trustworthiness or availability of current work without scanning an operations dashboard.

**Use when.** Service health, policy evaluation, agent availability, data freshness, or integrations can materially affect decisions.

**Do not use when.** The status is generic infrastructure telemetry with no user impact.

**Required data.** Affected capability, scope, start time, current condition, workstream impact, workaround, update source, and the availability or degradation of monitoring, logging, policy, isolation, and shutdown capabilities.

**Anatomy.** One-line health state; affected-function label; last update; expand control. Healthy state is quiet.

**Interaction.** Expand to affected workstreams and incident details; subscribe only to meaningful updates.

**Accessibility.** Status changes are announced proportionately; continuous telemetry does not spam screen readers.

**Safety.** When eligibility, authorization, audit, monitoring, isolation, or shutdown services are unavailable, the status corresponds to lower agency or fail-closed controls rather than a merely informational warning.

**Anti-pattern.** A green global uptime indicator while a critical policy service is returning stale decisions.

**Success metric.** Correct user understanding of impact; unsafe attempts during degradation; incident-related support volume.

<a id="pattern-16-reversible-action-receipt"></a>
#### Pattern 16 — Reversible Action Receipt

**Problem.** After a machine or human action, users cannot verify scope, effect, or available undo.

**Use when.** An action changes data, routing, internal status, or other state and is reliably reversible or compensable.

**Do not use when.** No meaningful effect occurred, or undo cannot be promised; use an external-action receipt and recovery guidance instead.

**Required data.** Actor, action, target set, before/after summary, time, authority, undo capability/window, downstream effects.

**Anatomy.** “What changed” statement; affected count; actor; undo deadline; inspect details; receipt ID.

**Interaction.** Undo shows preview and confirms completion; expired undo explains alternatives; receipts remain in audit history.

**Accessibility.** Undo does not depend on a transient toast. Receipt is reachable from the workstream and keyboard accessible.

**Safety.** Verify that reversal is complete; disclose non-reversible downstream effects; prevent undo from violating current policy.

**Anti-pattern.** A five-second toast is the only record and only undo path for a bulk change.

**Success metric.** Successful undo rate; reversal errors; user certainty about effect; support requests to reconstruct changes.

<a id="pattern-17-safe-empty-state"></a>
#### Pattern 17 — Safe Empty State

**Problem.** Empty queues can be misread as missing data, system failure, or an invitation to create unnecessary work.

**Use when.** A meaningful lane has no items.

**Do not use when.** The empty condition is caused by an error, permission issue, or loading state that should be disclosed.

**Required data.** Query scope, permission state, system health, active background work, next expected trigger.

**Anatomy.** State confirmation; scope; what is continuing; next check or trigger; optional navigation to full work inventory.

**Interaction.** Allow refresh, scope inspection, or recovery from filters. Do not add a primary “Start an agent” action unless it addresses a real goal.

**Accessibility.** Plain language states the condition; loading and empty are semantically distinct.

**Safety.** “No decisions pending” must be derived from authoritative review state, not an unavailable service.

**Anti-pattern.** “You’re all caught up—ask AI to find more opportunities.”

**Success metric.** Misinterpretation rate; unnecessary task creation; support reports of missing work.

<a id="pattern-18-exception-escalation"></a>
#### Pattern 18 — Exception Escalation

**Problem.** A blocker or anomalous run exceeds the current actor’s authority or competence.

**Use when.** A defined exception class requires another role, specialist, policy owner, or incident process.

**Do not use when.** Routine reassignment is sufficient.

**Required data.** Exception type, evidence, attempted actions, control decision, current and prevented effects, affected workstreams, parent/child lineage, containment state and radius, urgency, consequence, target role, and service-level condition.

**Anatomy.** Escalation reason; recommended recipient; contained state; evidence package; expected response; fallback if unaccepted.

**Interaction.** Create a durable handoff, notify proportionately, track acceptance, preserve ownership until accepted, and update all affected workstreams.

**Accessibility.** Recipient and urgency are explicit; evidence package has a structured summary.

**Safety.** Escalation does not silently grant the recipient or agent broader execution rights. Sensitive evidence follows least-access rules.

**Anti-pattern.** “Contact administrator” with no case, evidence, owner, or tracking.

**Success metric.** Time to accepted escalation; lost handoffs; duplicate escalation; containment maintained during wait.

<a id="pattern-19-delegation-brief"></a>
#### Pattern 19 — Delegation Brief

**Problem.** A person delegates work without defining the objective, success condition, operating scope, prohibited actions, evidence standard, or handback condition. Later supervision has no stable basis for deciding whether the agent is on course.

**Use when.** A human authorizes work that can continue asynchronously, use tools or data, produce artifacts, change durable state, or require later review.

**Do not use when.** The action is immediate and trivial, fully deterministic with no meaningful discretion, or already constrained by a complete domain policy and visible transaction form.

**Required data.** Goal; success condition; accountable human; included and excluded objects; allowed tools and action classes; consequence ceiling; evidence requirements; timing; review, stop, and handback conditions.

**Anatomy.** One-sentence objective; “may,” “must,” and “must not” clauses; inputs and assumptions; completion evidence; escalation triggers; expiry; version; link to the resulting workstream.

**Interaction.** The brief is drafted from domain defaults, reviewed as a readable summary, and stored as a versioned decision artifact. Scope changes create a visible diff and require renewed acceptance when authority or consequence expands.

**Accessibility.** Use plain language, explicit headings, logical reading order, and error messages tied to the missing boundary. Do not require drag-and-drop or spatial interpretation to define scope.

**Safety.** The brief requests bounded authority; it does not create authority by itself. Policy, identity, eligibility, and tool services resolve the effective limits and fail closed when they cannot.

**Anti-pattern.** A prompt such as “take care of this” paired with broad tool access and no explicit return condition.

**Success metric.** Clarification rate; boundary-change rate; intervention rate; accepted-outcome rate; agent actions outside the understood brief; operator agreement about the goal and limits.

<a id="pattern-20-boundary-preview"></a>
#### Pattern 20 — Boundary Preview

**Problem.** A user cannot infer scope, externality, reversibility, or actual permission from an action label, prompt, or general approval button.

**Use when.** A delegated run, approval, or standing grant can change durable state, affect several objects, cross an organizational boundary, use privileged tools, or create external effects.

**Do not use when.** The operation is passive, read-only, and incapable of producing a durable or externally visible effect.

**Required data.** Target objects and systems; allowed action classes; maximum count, cost, duration, or data scope; policy result; exclusions; externality; reversibility; review points; stop and escalation conditions.

**Anatomy.** “Will,” “may,” and “will not” summary; scope and limit table; external-effect marker; undo or compensating-action statement; current authorization state; named accountable principal; confirmation control.

**Interaction.** The person can narrow the proposed boundary before acceptance. A material change in target, tool, consequence, or authority invalidates the preview and requires a new one. The accepted preview is attached to the workstream and audit history.

**Accessibility.** Present the full boundary as text, not only icons or color. Keep exclusions in the same reading flow as permissions. All scope controls and confirmation actions must be keyboard operable.

**Safety.** Generate consequence and authorization fields from authoritative tool, policy, and domain services—not solely from agent-authored prose. Suppressed, denied, expired, or unverifiable actions remain unavailable.

**Anti-pattern.** A generic “Allow” dialog that conceals recipient count, external systems, downstream effects, or permanence.

**Success metric.** Mismatch between previewed and actual scope; user corrections before execution; authorization failures; boundary-breach rate; comprehension of consequence and reversibility.

<a id="pattern-21-standing-grant-revocation"></a>
#### Pattern 21 — Standing Grant & Revocation

**Problem.** Repeated low-value approvals create review fatigue, while permanent broad permission creates authorization drift and weakens meaningful control.

**Use when.** A recurring action class is bounded, monitored, policy-stable, reversible or containable, and sufficiently routine that transaction-by-transaction approval adds little judgment.

**Do not use when.** Work is novel, high-consequence, difficult to reverse, externally communicative, legally or financially material, or lacks reliable monitoring and immediate revocation.

**Required data.** Accountable principal; grantee; permitted action class; object and tool scope; limits; conditions; exclusions; effective time; expiry; review cadence; revocation path; each use and resulting effect.

**Anatomy.** Human-readable grant title; permitted and prohibited actions; current status; scope and limits; recent uses; next review or expiry; Pause and Revoke controls; exception and breach history.

**Interaction.** Creation requires an explicit scoped workflow. Each use is recorded against the grant. Approaching a limit, entering an exception, or changing policy triggers review. Revocation takes effect immediately across the control plane and cannot be self-extended by the agent.

**Accessibility.** Provide a searchable list of active grants with textual status and expiry. Revocation must be reachable without pointer precision, hidden menus, or interpreting color alone.

**Safety.** Apply least privilege, bounded duration, fail-closed expiry, and propagation checks. A standing grant cannot override suppression, target eligibility, or a later policy denial.

**Anti-pattern.** An “Always allow” checkbox with no named scope, expiry, use history, or reliable revocation mechanism.

**Success metric.** Reduction in repetitive approvals without increased exceptions; time to identify and revoke a grant; unauthorized use; expired-grant execution; operator understanding of live permissions.

<a id="pattern-22-operational-diff"></a>
#### Pattern 22 — Operational Diff

**Problem.** Raw history exposes chronology while forcing the operator to infer which changes alter intent, responsibility, authority, evidence, consequence, or next action.

**Use when.** A workstream has a trusted baseline and one or more material changes since inspection, handoff, approval, or execution.

**Do not use when.** No baseline exists, the source events cannot support a reliable before/after claim, or the change is immaterial to the operating decision.

**Required data.** Baseline identity and time; affected grammar slot; before and after values; source; materiality reason; affected intent or action; confidence or unknown state.

**Anatomy.** One mark (+, -, ~, -\>, !, or =) paired with an explicit field label, before/after values, source time, impact statement, and evidence link. Related low-level events remain expandable.

**Interaction.** Inspect evidence, compare baseline, correct a misclassified delta, mark reviewed, or jump directly to the affected decision. A material correction creates a new auditable delta rather than rewriting history silently.

**Accessibility.** Read the change in full text — for example, “Authorization changed from permitted to denied” — and never depend on color, symbol, or spatial alignment alone.

**Safety.** Authority, evidence, suppression, external target, and irreversible-effect changes cannot be omitted for brevity. Unknown or conflicting values remain explicit.

**Anti-pattern.** A green plus or red minus appears without naming the field, baseline, source, or operational consequence.

**Success metric.** Delta precision and recall; time to identify invalidated intent; authority-change detection; false-ready rate; dependence on raw history.

<a id="pattern-23-instruction-authority-conflict-trace"></a>
#### Pattern 23 — Instruction Authority & Conflict Trace

**Problem.** A workstream contains instructions from people, policies, retrieved content, tools, and agents, but the operator cannot tell which instruction governs or why.

**Use when.** Several instruction sources, shared-agent requesters, prompt-injection exposure, or mid-run scope changes can affect consequential work.

**Do not use when.** One human issues a single low-consequence command and no external content can alter behavior.

**Required data.** Instruction ID, origin, author, authority level, trust class, scope, goal version, effective time, expiry, supersedes, conflict state, resolution rule, and affected actions.

**Anatomy.** Current governing instruction; ordered source trace; conflicts and superseded items; explicit data-versus-instruction labels; affected approval and action summary.

**Interaction.** Users inspect the governing basis, resolve a conflict when authorized, constrain or replace the goal, and see which queued work and approvals become invalid.

**Accessibility.** The trace uses headings and text labels rather than indentation or color alone; chronological and authority orders are both navigable.

**Safety.** Untrusted content cannot be promoted by display position or fluent wording. Consequential action remains unavailable while required authority is unresolved.

**Anti-pattern.** The last message silently wins, including instructions embedded in a retrieved document.

**Success metric.** Instruction-conflict resolution accuracy; unauthorized-promotion rate; time to identify governing instruction; stale-approval reuse.

<a id="pattern-24-memory-mutation-receipt"></a>
#### Pattern 24 — Memory Mutation Receipt

**Problem.** An agent changes durable memory, but later users cannot determine what was written, from which source, or how it affects current behavior.

**Use when.** Machine-written memory can influence future workstreams, preferences, policy interpretation, recurrence, or tool use.

**Do not use when.** The state is ephemeral, fully local to one turn, and cannot influence a later decision.

**Required data.** Memory type, subject, assertion, source, writing actor, epistemic mode, confidence or limitation, scope, visibility, effective time, expiry, review state, conflict, supersession, and revocation.

**Anatomy.** Before/after statement; source and writer; “stated/retrieved/inferred” label; scope and expiry; affected workstreams; Accept, Correct, Revoke, or Restrict controls.

**Interaction.** A person can correct one record, revoke it prospectively, inspect dependent contexts, and see a receipt for propagation or residual copies.

**Accessibility.** Changes are read as full statements, not diff symbols alone; controls have explicit target and scope.

**Safety.** Memory cannot silently broaden authority, convert inference into fact, or persist sensitive content beyond policy. Conflicts remain visible.

**Anti-pattern.** A model updates “what it knows about you” with no audit record or deletion boundary.

**Success metric.** Unsupported-memory rate; correction and revocation completeness; memory-caused false-ready decisions; conflict-resolution latency.

<a id="pattern-25-recurrence-contract"></a>
#### Pattern 25 — Recurrence Contract

**Problem.** A proactive or scheduled agent wakes repeatedly without a clear purpose, stop condition, budget, or accountable owner.

**Use when.** An agent may perform future checks, summaries, messages, transactions, or other work after the initiating session.

**Do not use when.** A one-time reminder has no tool access and cannot change durable state.

**Required data.** Trigger, cadence, next wake, preconditions, no-op behavior, expiry, stop condition, allowed tools, effect ceiling, attention threshold, quiet hours, budget, escalation rule, inspection baseline, and owner.

**Anatomy.** Human-readable purpose; next and last wake; permitted and prohibited effects; remaining budget; current status; Pause, Edit, and Revoke controls; recent uses and no-ops.

**Interaction.** Editing a material boundary creates a new version and re-resolves policy. Revocation propagates to queued and child work and reports residual events.

**Accessibility.** Absolute times and timezone are stated; recurrence is navigable as a list; status is not color-only.

**Safety.** The contract expires fail-closed, has a named owner, and cannot self-renew or expand its own tools, budget, or effect ceiling.

**Anti-pattern.** A hidden cron job called “keep helping” runs indefinitely under old consent.

**Success metric.** Orphaned-recurrence rate; silent-wake rate; budget overrun; revocation propagation time; unauthorized-effect rate.

<a id="pattern-26-steering-event-propagation-receipt"></a>
#### Pattern 26 — Steering Event & Propagation Receipt

**Problem.** A user redirects or stops work, but the system cannot show whether the instruction reached queued actions, subagents, recurrence, approvals, or already committed effects.

**Use when.** Work is long-running, multi-agent, queued, recurring, or otherwise capable of continuing after a new instruction.

**Do not use when.** The action is atomic and already complete; use a receipt and compensating action instead.

**Required data.** Event type, issuing actor, authority, target, goal version, effective time, acknowledged time, enforcement state, propagation set, invalidated approvals, committed effects, residual work, and recovery option.

**Anatomy.** Typed event; current goal diff; propagation checklist; committed-versus-prevented effects; acknowledgment and enforcement status; residual work.

**Interaction.** Users pause, constrain, replace, cancel, or resume and receive a durable receipt. Partial or failed propagation creates an exception and next responsible actor.

**Accessibility.** Status updates are announced proportionately; hierarchical propagation has a structured list alternative.

**Safety.** A chat acknowledgment is not evidence of enforcement. The control plane, not the acting agent alone, reports propagation and residual effects.

**Anti-pattern.** “Stopped” appears in chat while child jobs or scheduled work continue.

**Success metric.** Steering propagation completeness; acknowledgment-to-enforcement latency; residual-effect rate; stale-approval invalidation.

<a id="pattern-27-tool-capability-trust-boundary-manifest"></a>
#### Pattern 27 — Tool Capability & Trust-Boundary Manifest

**Problem.** Users and orchestrators see a tool name but cannot infer what it reads, changes, sends, costs, or trusts.

**Use when.** A tool touches sensitive data, external systems, durable state, credentials, networks, or consequential targets.

**Do not use when.** A purely local, deterministic display transform has no access beyond already visible data.

**Required data.** Tool/version; read/write/execute classes; input and output trust; sensitive access; external communication; state change; target domain; reversibility; idempotency; confirmation class; effect preview; credentials; network; environment; failure semantics.

**Anatomy.** Concise “reads / may change / may send / cannot do” summary; target and credential scope; trust-triad state; version; known failure and rollback behavior.

**Interaction.** Operators inspect the manifest from a proposed action, narrow scope, substitute a lower-risk tool, or require a stronger decision boundary.

**Accessibility.** Capabilities are available as text and grouped headings; icons are optional aliases.

**Safety.** Inferred targets alone cannot drive destructive or external actions. Unknown manifest fields lower agency or fail closed according to consequence.

**Anti-pattern.** A generic “browser” or “database” tool hides write access, credentials, and external communication.

**Success metric.** Manifest completeness; target-binding failures; risk-triad violations; effect-preview mismatch; tool-version attribution.

<a id="pattern-28-multi-agent-composition-map"></a>
#### Pattern 28 — Multi-Agent Composition Map

**Problem.** Several agents, services, and child jobs contribute to one outcome, but the operator cannot see roles, communication, aggregate limits, or shutdown propagation.

**Use when.** An orchestrator delegates subgoals, agents communicate, share memory, use common credentials, or collectively create one effect.

**Do not use when.** One bounded actor performs a self-contained action with no subdelegation.

**Required data.** Orchestration ID/version; agent instances; parent/delegator; roles; subgoals; authority; communication and shared-memory scope; commitments; aggregate effect and resource limits; handoffs; collective-risk state; termination propagation.

**Anatomy.** Role-and-authority list; optional topology view; shared resources and memory; aggregate budget; current collective state; parent/child controls; affected workstreams.

**Interaction.** Users inspect a component, trace a commitment, pause or isolate a branch, and understand what remains outside the selected containment radius.

**Accessibility.** The topology has an equivalent structured table/list and does not rely on spatial position to communicate authority.

**Safety.** Children receive attenuated authority; aggregate limits cannot be bypassed by splitting work; untracked agents block composed-system conformance.

**Anti-pattern.** A parent “team” badge conceals which agent used which credential or created which effect.

**Success metric.** Composition-attribution completeness; cascade detection; aggregate-limit breaches; recursive containment completeness; accountability-vacuum rate.

<a id="pattern-29-conformance-evidence-card"></a>
#### Pattern 29 — Conformance Evidence Card

**Problem.** A product claims that a model, agent, or system is “compliant” or “evaluated” without naming the assessed object, configuration, method, validity, or exceptions.

**Use when.** A user, integrator, reviewer, or governance function relies on a conformance or assurance claim.

**Do not use when.** No conformance claim is being made; ordinary evidence provenance is sufficient.

**Required data.** Object of conformity, configuration fingerprint, profile version, responsible party, applicable requirements, method and harness, tools/resources, corpus and period, assessor, results, exceptions, validity, upstream evidence, downstream assumptions, supersession, and revocation.

**Anatomy.** Claim summary; assessed object/configuration; validity state; applicable profiles; exceptions; evidence chain; “what this does not cover” statement.

**Interaction.** Users compare current deployment to assessed configuration, inspect exceptions, and trigger reassessment when assumptions no longer hold.

**Accessibility.** The card is a structured region with readable validity and exception labels; links have descriptive names.

**Safety.** Evidence pass-through never transfers downstream accountability. A model-level claim cannot silently cover a changed integrated system.

**Anti-pattern.** A “certified” badge remains green after tools, prompts, permissions, and orchestration change.

**Success metric.** Evidence freshness; configuration-match rate; exception-disclosure accuracy; invalid evidence reuse; time to identify assessment scope.

<a id="pattern-30-semantic-regression-gate"></a>
#### Pattern 30 — Semantic Regression Gate

**Problem.** A model, prompt, tool, memory, policy, or interface change ships without testing whether operator-facing meaning and authority remain correct.

**Use when.** Any material configuration, profile, reducer, ranking, tool, permission, memory, orchestration, or UI change can alter consequential work.

**Do not use when.** A change is proven non-semantic and non-behavioral through bounded analysis and existing change policy.

**Required data.** Configuration diff, affected profiles and claims, replay corpus, simulated environment, adversarial cases, metrics, thresholds, environment-fidelity error, input-distribution shift, unknown-behavior search, disposition, and approver.

**Anatomy.** Change summary; affected semantics; representative trajectories; failed cases; regression metrics; residual uncertainty; Block, Fix, Waive, or Promote decision.

**Interaction.** Teams add production-like cases, inspect semantic diffs, assign exceptions, and bind the approved result to the new fingerprint.

**Accessibility.** Results are readable without chart color; failed scenarios have textual summaries and links to evidence.

**Safety.** Promotion is blocked for unresolved false-ready, authority, memory, containment, or effect-preview regressions above domain thresholds.

**Anti-pattern.** Only model benchmarks are rerun while the changed tool and policy path is left untested.

**Success metric.** Semantic-regression escape rate; replay coverage; false-ready delta; authority-confusion delta; unknown-behavior yield; waiver aging.

<a id="visual-and-interaction-language"></a>
### 13. Visual and interaction language

<a id="visual-doctrine"></a>
#### Visual doctrine

Workstream continuity is not a visual style. It can be expressed in a conservative enterprise application, a mobile field tool, an assistive voice interface, or a high-density operations console. The visual doctrine is semantic: differences in state, agency, consequence, and required attention must be perceivable, consistent, and robust under stress and assistive technology.

<a id="continuity-grammar-rendering"></a>
#### Continuity grammar rendering

Semantics precede tokens. A product may use badges, columns, icons, color, compact symbols, prose, voice, or dense rows, but each token maps to one controlled grammar slot. The meaning must remain stable across workstreams and implementations.

Use a fixed reading order. Portfolio views may compress to ATTN, STATE, DELTA, and NEXT. Entering a workstream expands to GOAL, ATTN, STATE, DELTA, ACTORS, AUTH, EVIDENCE, EFFECT, and NEXT. Decision and audit layers add sources, policy basis, alternatives, raw events, approvals, receipts, and recovery state.

Example compact line: Human decision \| Review \| ~ consent valid -\> expired \| owner Connor; next Connor \| send denied \| verified record \| external, non-reversible \| review consent evidence.

First-pass salience is reserved for the attention claim, not for every grammar slot. Give a human-exclusive or high-consequence obligation at least one independently detectable cue, and redundantly express the same condition through text and structure. Keep STATE, DELTA, and NEXT in stable positions for focused reading. When many workstreams claim attention simultaneously, switch to incident, batch, or grouped-triage mode instead of making every row visually loud. [R69–R73]

<a id="hierarchy"></a>
#### Hierarchy

Hierarchy should answer three questions before it advertises features:

1\. What needs a human now?

2\. What changed the operating picture?

3\. What can continue safely without attention?

Use spatial position, size, type weight, labels, and grouping together. A large card does not deserve dominance because it contains an AI feature or a revenue metric. The command center should have one primary visual anchor, a small number of secondary obligations, and quiet peripheral status.

<a id="density"></a>
#### Density

Density is contextual, not inherently harmful. Expert tables can be dense when values are comparable and the user controls columns. Orientation surfaces should be **semantically sparse**: they may show several items, but each item should contain only fields that change interpretation or action. Avoid decorative whitespace that pushes related obligations offscreen, and avoid compressed rows that omit ownership or consequence.

A useful density test is **information per decision**, not information per pixel. If a reviewer must open five rows to discover that all share one blocker, the view is both visually dense and operationally sparse.

<a id="typography"></a>
#### Typography

- Use a stable type scale with no more than a few hierarchy levels per viewport.

- Use sentence case for state and actions; reserve all caps for rare structural labels.

- Keep workstream titles recognizable and concise; place domain identifiers second.

- Use tabular numerals for times, counts, and thresholds in comparable columns.

- Do not reduce provenance, policy, or uncertainty below comfortable reading size.

- Preserve zoom to at least 200 percent without loss of content or function, consistent with WCAG principles. [R21]

<a id="semantic-labels"></a>
#### Semantic labels

Prefer verbs and conditions over vague nouns:

- “Waiting for customer signature” rather than “Pending.”

- “Blocked by missing consent evidence” rather than “Issue.”

- “Needs legal approval before external send” rather than “Review.”

- “Draft prepared; not sent” rather than “Completed.”

Labels should state the transition or obligation. Avoid personality labels such as “Your AI teammate is thinking” when the relevant state is “Checking 18 records against the suppression service.”

<a id="actor-markers"></a>
#### Actor markers

Actor markers must combine text with optional iconography:

- Human: name or accountable role.

- Agent: functional name plus “AI” or “agent” text where ambiguity matters.

- Service: system name.

- External party: organization or role.

- None: explicitly “Unassigned” or “No current actor.”

Do not use a sparkle icon as the only AI indicator. Do not assign a face or emotional state to create perceived competence. In audit detail, identify configuration, version, tools, and authority scope rather than a mascot.

<a id="state-markers"></a>
#### State markers

Use a controlled vocabulary and stable placement. State badges should not carry more than one dimension. For example:

- Operational state: Ready, Active, Review, Waiting, Blocked, Failed, Completed.

- Authorization: Permitted, Denied, Expired, or Unverifiable; suppression is a denial reason, not an operational state.

- Actor: Human, Agent, Service, External.

- Consequence: Local, Shared internal, External, Irreversible.

- Confidence: Supported, Mixed evidence, Insufficient evidence—only when calibrated and decision-relevant.

Avoid compound badges whose meaning changes by context. A state transition should be announced in text and history, not only by a color change.

Operational-diff marks (+, -, ~, -\>, !, =) may reinforce change only when paired with an explicit field label and before/after value. The same meaning must survive text-only, screen-reader, API, and log representations.

<a id="color-independence"></a>
#### Color independence

Color may reinforce but never solely encode:

- Urgency.

- Suppression.

- Human versus AI actor.

- Success versus failure.

- Waiting versus blocked.

- Confidence.

Use labels, icons with accessible names, pattern or shape where appropriate, and position. Maintain contrast and test common color-vision deficiencies. Red should be reserved for conditions requiring immediate attention or prohibited action, not all errors and overdue dates.

<a id="scannability"></a>
#### Scannability

Each workstream row or card should place the same semantic fields in the same order:

1\. Goal and attention claim.

2\. Operational state and material delta.

3\. Accountable owner, current actor, and next actor.

4\. Authority and evidence status.

5\. Consequence and reversibility.

6\. Safest useful next action or waiting condition.

Use aligned columns for comparison. Avoid alternating layouts or card mosaics that force repeated visual parsing. Counts need nouns: “3 decisions,” “3 workstreams,” or “3 changed assumptions,” not a detached badge.

<a id="progressive-disclosure"></a>
#### Progressive disclosure

The initial surface should support orientation and choice. Contextual expansion should support verification. Deep history should support audit and diagnosis. These layers must remain connected so the user does not lose the decision while inspecting evidence.

Recommended layers:

- **Layer 1 — Orient:** state, reason, actor, consequence, action.

- **Layer 2 — Decide:** evidence, alternatives, uncertainty, policy, downstream effects.

- **Layer 3 — Audit:** raw events, tool calls, versions, approvals, receipts, recovery history.

<a id="motion"></a>
#### Motion

Motion should indicate a meaningful transition, not simulate intelligence.

- Use subtle progress for known-duration or phase-based work.

- Avoid continuous avatar animation, pulsing queues, or streaming tokens as a proxy for progress.

- Do not move cards when rankings update while a user is reading; announce and offer a controlled refresh.

- Respect reduced-motion settings.

- For urgent transitions, use a stable state change and concise announcement rather than repeated flashing.

<a id="loading"></a>
#### Loading

Distinguish four conditions:

- **Loading known state** — skeleton or progress with scope.

- **Calculating a recommendation** — existing state remains visible; recommendation area indicates pending computation.

- **Executing work** — durable run with actor, phase, scope, and controls.

- **Waiting for external event** — no spinner; show the trigger and next check.

A perpetual spinner for an asynchronous process is a category error. Close or navigate away without canceling unless cancellation is explicit.

<a id="long-running-work"></a>
#### Long-running work

Show phase, scope, completed effects, pending effects, expected handoff, and variance—not fake percentage precision. When estimates are uncertain, provide ranges or phase descriptions and explain what will trigger the next update. Preserve partial artifacts. The run remains reachable after navigation and across sessions.

<a id="partial-results"></a>
#### Partial results

Partial results must identify coverage and missingness:

- 68 of 100 records checked.

- 12 could not be evaluated because the source was unavailable.

- Draft contains verified sections A–C; section D remains unsupported.

Do not display partial output as complete. Let users decide whether useful partial work can be retained, reviewed, or resumed.

<a id="failure"></a>
#### Failure

A failure state should state:

- What objective was not achieved.

- What, if anything, changed before failure.

- Whether effects were contained or reversed.

- Which artifacts remain useful.

- The likely cause and confidence.

- Safe recovery choices.

- Who owns the next action.

“Something went wrong” is insufficient for supervisory work. Raw stack traces should not replace a user-level causal statement, though technical details may be available.

<a id="narrow-viewports-1"></a>
#### Narrow viewports

Use one semantic column and preserve priority order. Sticky controls should not obscure evidence or screen-reader order. Avoid horizontally scrolling obligation cards. For tables, expose a concise row summary and drill-in while keeping state, owner, next actor, and consequence visible. Bulk consequential actions may be unavailable on small viewports when review quality cannot be maintained.

<a id="keyboard-navigation"></a>
#### Keyboard navigation

- Provide landmarks for Resume, Now, Human oversight, Waiting, Blocked, Changed, and Status.

- Use predictable tab order matching visual order.

- Support direct navigation among workstreams and actions without trapping focus inside continuously updating regions.

- Preserve focus when an item changes state; announce the change rather than moving focus unexpectedly.

- Offer shortcuts for inspection, defer, next/previous obligation, and return to queue, with discoverable help.

<a id="screen-readers"></a>
#### Screen readers

Dynamic state changes require concise live-region announcements proportional to importance. Do not announce every agent progress event. Each workstream needs an accessible name that includes state and required action. Relationship graphs need structured lists or tables. Evidence drawers and dialogs require labeled headings, focus containment, and return focus.

<a id="high-cognitive-load-conditions"></a>
#### High cognitive-load conditions

During incidents, fatigue, or time pressure:

- Reduce non-essential controls and metrics.

- Prefer explicit verbs and causal statements.

- Confirm targets for consequential actions.

- Freeze ranking while a decision is open.

- Make containment and escalation easy to locate.

- Show absolute times, current timezone, and last-updated timestamps.

- Allow a handoff summary to be generated and verified.

<a id="visual-forms-to-reject-by-default"></a>
#### Visual forms to reject by default

An agent-era interface should not automatically become:

- **Chat-first.** Dialogue is poor at showing portfolio state, comparison, and durable responsibility.

- **A wall of avatars.** Anthropomorphism can inflate perceived agency and hide functional state.

- **A live terminal.** Streaming internals are useful for diagnosis but costly for routine supervision.

- **A metric card grid.** Inventory does not establish obligation or resume context.

- **A notification stream.** Events do not reconstruct meaning.

- **A gamified control room.** Engagement and spectacle conflict with calibrated attention and safe control.

<a id="human-oversight-and-trust"></a>
### 14. Human oversight and trust

<a id="meaningful-oversight"></a>
#### Meaningful oversight

Meaningful oversight is the demonstrated ability of an appropriately authorized person to understand the relevant situation, judge the machine’s contribution, affect execution before unacceptable consequences, and recover or escalate when needed. It is a property of the whole sociotechnical system—data, policy, interface, staffing, training, time, authority, and audit—not the presence of an approval button.

<a id="five-relationships-to-automated-work"></a>
#### Five relationships to automated work

| **Relationship**             | **Human role**                                        | **Required information**                                  | **Required control**                                           | **Failure if mislabeled**                                        |
|------------------------------|-------------------------------------------------------|-----------------------------------------------------------|----------------------------------------------------------------|------------------------------------------------------------------|
| Informed                     | Receives awareness after or during work               | Outcome, material effects, exceptions, source             | Inspect, correct record, escalate                              | Notification volume masquerades as oversight                     |
| Consulted                    | Provides input before the system proceeds             | Question, options, consequences, deadline                 | Give input, defer, redirect                                    | System proceeds regardless or asks questions with no influence   |
| Approving                    | Authorizes a specific transition                      | Final action/target, evidence, uncertainty, policy, scope | Approve, reject, request change                                | Approval silently covers broader or later actions                |
| Supervising                  | Monitors delegated work and intervenes by exception   | Objective, plan, scope, progress, variance, authority     | Pause, stop, narrow, redirect, escalate                        | Human is accountable but lacks visibility or timely intervention |
| Retaining meaningful control | Can shape policy, delegation, execution, and recovery | Capabilities, limits, state, effects, audit, alternatives | Configure bounds, intervene, reverse/contain, revoke authority | “Control” exists only after irreversible consequence             |

<a id="human-oversight-is-not-the-universal-synchronous-firewall"></a>
#### Human oversight is not the universal synchronous firewall

The scale, speed, and distributed presence of agent deployments can make universal human review or human-mediated incident response too slow and costly. DeepMind therefore pairs human escalation with automated monitoring, blocking, resampling, trusted-model deferral, isolation, and shutdown. [R74] Meaningful oversight depends on those systems intercepting or containing machine-speed effects while preserving the exact decision that requires human judgment. A person should receive differentiated exceptions and authority-bearing decisions, not serve as the only synchronous firewall.

<a id="visibility-into-agent-intent"></a>
#### Visibility into agent intent

Before or early in consequential work, expose the objective, scope, intended plan, tools or systems involved, and expected externalities. A complete chain-of-thought transcript is neither necessary nor appropriate. Users need operational intent and checkable plan state, not hidden private reasoning or a theatrical narration.

<a id="visibility-into-completed-actions"></a>
#### Visibility into completed actions

After execution, state exactly what changed, on which targets, under what authority, with which exceptions, and what verification occurred. Separate attempted, succeeded, failed, rolled back, and unknown outcomes. Durable receipts should be reachable from both the workstream and audit history.

<a id="provenance-and-evidence"></a>
#### Provenance and evidence

Provenance should answer: Where did this fact come from? When was it valid? How was it transformed? Which version was used? What contradicts it? Evidence should be ranked by decision relevance and source authority, not by the model’s fluency. Public-facing guidance should point to authoritative policy where possible; the Air Canada and MyCity cases show the cost of ungrounded or inconsistent advice. [R42, R43]

<a id="confidence-and-calibration"></a>
#### Confidence and calibration

Confidence displays are appropriate only when the measure has a known referent and some validation. A model’s token probability or self-reported confidence is not automatically a calibrated probability of correctness. For high-consequence decisions, show evidence coverage, contradiction, data quality, and historical performance for a comparable task population where available.

<a id="alternative-options"></a>
#### Alternative options

A decision surface should avoid presenting one machine recommendation as the natural default when reasonable alternatives exist. Show at least the status quo and a safe defer/escalate option. For consequential cases, disclose the principal alternative and the conditions that would favor it.

<a id="approval-quality-and-review-fatigue"></a>
#### Approval quality and review fatigue

Review fatigue emerges when humans receive too many low-value approvals, insufficiently differentiated cases, repetitive evidence, or decisions whose outcome the system appears to have preselected. It increases rubber-stamping and undermines the premise of control. Control alerts require the same discipline: DeepMind reports that most events flagged in its internal monitoring work reflected misinterpretation or overeagerness rather than adversarial intent, so indiscriminate escalation can create security-alert fatigue. [R75]

Mitigations:

- Automate only after a validated pattern and explicit authority policy.

- Route only human-exclusive or exception cases to review.

- Group truly homogeneous decisions; never batch away material differences.

- Rotate or limit sustained high-consequence review loads.

- Insert quality checks and calibration cases carefully, with governance and transparency.

- Measure time distributions, reversals, disagreement, skipped evidence, and late-session degradation.

<a id="decision-attribution-and-qualified-review"></a>
#### Decision attribution and qualified review

Oversight quality depends on who made which decision and who is qualified and authorized to verify it. The decision surface should distinguish goal, approach, definition-of-done, target, tool, execution, exception, verification, and risk-acceptance decisions. It should show whether the reviewer is the acceptance-criteria owner, an authorized approver, a domain expert, a policy owner, or merely the current requester. [R81]

Expertise routing may prioritize review or expose additional evidence, but inferred competence cannot silently grant permission. Where a decision requires a role, certification, separation of duties, or independent verifier, the interface names that requirement and prevents self-verification by the same actor or composition when policy forbids it.

<a id="shared-agent-oversight"></a>
#### Shared-agent oversight

A shared agent creates asymmetric knowledge and authority. The person who asked a question may not own the workstream, approve a resource use, authorize memory retention, or represent affected non-requesters. Surfaces should state the current requester and accountable principal, preserve per-person inspection baselines, disclose channel or workspace memory scope, and route consequential decisions to the correct authority. [R80]

<a id="risk-based-permission-routing"></a>
#### Risk-based permission routing

Permission prompts should be treated as scarce supervisory attention. Low-value repetitive prompts can produce automatic approval behavior; high-consequence prompts need differentiated evidence and deliberate control. Route by tool capability, trust boundary, target, externality, reversibility, credential scope, and current control posture rather than prompting on every action equally. Current production work on automated permission review illustrates both the value and the limits of this approach. [R91]

<a id="oversight-saturation"></a>
#### Oversight saturation

An agent can degrade control without evading one monitor by flooding reviewers with plausible evidence, review requests, minor exceptions, or subagent outputs. Track evidence volume, repeated near-duplicates, reviewer load, and decision entropy. Compress routine evidence, preserve dissent and unknowns, and escalate saturation as a control condition rather than blaming the operator for failing to inspect an unbounded queue. [R83]

<a id="automation-bias-and-overreliance"></a>
#### Automation bias and overreliance

Automation bias can manifest as following incorrect recommendations, failing to search for contradictory evidence, or assuming no alert means no problem. [R10, R19] Design countermeasures include source-first evidence, visible limitations, alternative hypotheses, independent policy checks, and workflows that require active judgment for high-consequence cases. Requiring a click without changing the information or incentives does not mitigate bias.

<a id="intervention-and-correction"></a>
#### Intervention and correction

Users should be able to correct both the immediate workstream and, where appropriate, the system’s future behavior. Separate:

- Edit this artifact.

- Reject this recommendation.

- Correct this source fact.

- Narrow this run.

- Change a workflow rule.

- Report a systemic failure.

- Revoke or reduce standing authority.

A local correction should not silently retrain or alter organization-wide behavior. Conversely, repeated corrections should be visible to product and governance owners rather than disappearing into isolated chats.

<a id="accountability"></a>
#### Accountability

Audit history should establish who delegated, which actor executed, what authority applied, who approved, what changed, and how the outcome was verified. Accountability is not solved by attributing every outcome to the end user. Organizations remain responsible for system design, policies, training, monitoring, and deployment decisions.

<a id="safety-and-policy-architecture"></a>
### 15. Safety and policy architecture

<a id="safety-is-an-architectural-property"></a>
#### Safety is an architectural property

The interface is the place where users perceive and exercise control; it cannot be the sole place where control exists. Consequential rules must survive alternate clients, stale sessions, agent tools, APIs, retries, automation, and compromised browser state.

<a id="adversarial-control-boundary"></a>
#### Adversarial control boundary

For high-agency or privileged deployments, accountable operation cannot assume that the acting agent truthfully reports its intent, evidence, effects, compliance, completion, or control state. Monitoring, policy resolution, environment telemetry, audit integrity, and containment must remain independently authoritative and outside the acting agent’s effective control. [R74]

WCD does not provide the detection or containment system. It specifies how validated control state — including monitoring mode, authorization result, detected exception, containment status, affected workstreams, residual effects, and the next responsible actor — is preserved and reconstructed at each focus transition. Delayed review is appropriate only where effects remain acceptably bounded and recoverable; higher-consequence actions require synchronous gating, isolation, or other system-level prevention before effect.

<a id="instruction-and-data-boundary"></a>
#### Instruction and data boundary

All context-bearing content is classified by source, trust, and authority. System and developer policy, accepted delegation records, user requests, tool output, retrieved documents, messages, and model-generated text do not share one authority level. Untrusted content remains data unless an authorized boundary explicitly promotes it; prompt-injection detection is defense in depth, not the sole control. [R83, R87, R91, R92]

<a id="agent-identity-and-purpose-bound-credentials"></a>
#### Agent identity and purpose-bound credentials

Every actor instance receives a workload identity and the minimum purpose-bound credentials needed for a named workstream, target, action class, and lifetime. Identity, authentication, authorization, delegation, non-repudiation, and data-flow logging are separate concerns. Shared agents resolve the current requester and accountable principal; brokers preserve audience and per-client consent. [R85, R86, R88]

<a id="least-agency"></a>
#### Least agency

Grant each machine actor the lowest agency level sufficient for the validated objective. Capability and authority are separate. A model may be technically capable of sending an email; the CRM should expose only draft creation and internal artifact tools when external send is outside policy.

<a id="bounded-autonomy"></a>
#### Bounded autonomy

Every delegated execution needs explicit bounds:

- Goal and success condition.

- Object and recipient scope.

- Allowed tools and data.

- Maximum effects, cost, or time.

- Prohibited actions.

- Human checkpoints.

- Stop and recovery behavior.

- Expiry of authority.

- Monitoring mode, coverage, and degradation behavior.

- Execution environment and isolation boundary.

- Parent/child job, persistence, and communication limits.

- Containment radius and recursive shutdown behavior.

Bounds should be machine-enforced and inspectable. Natural-language instructions can supplement but should not replace structured constraints.

<a id="tool-capability-and-the-risk-triad"></a>
#### Tool capability and the risk triad

Tool policy evaluates three independent properties: exposure to untrusted inputs; access to sensitive systems or private data; and ability to create durable state change or external communication. A default deployment should not allow one autonomous path to combine all three. When a higher-assurance exception is justified, require explicit target binding, synchronous control, constrained credentials, effect preview, post-action verification, and a named responsible principal. [R84, R91, R92]

<a id="policy-first-routing"></a>
#### Policy-first routing

Before ranking or presenting an executable action, evaluate authoritative policy. The preferred order is:

1\. Establish identity and role.

2\. Establish required control posture, monitor availability, and execution environment.

3\. Resolve current object and external target.

4\. Evaluate suppression, consent, eligibility, and jurisdiction.

5\. Determine available agency level and required review.

6\. Generate or retrieve recommendation.

7\. Present only permitted action paths.

8\. Re-evaluate policy at execution.

This order prevents a persuasive recommendation or score from shaping the interface around an action that cannot legally or ethically occur.

<a id="fail-closed-behavior"></a>
#### Fail-closed behavior

When the system cannot determine current permission, critical actions remain unavailable. The interface must distinguish “not permitted,” “permission unknown because service is unavailable,” and “user lacks authority.” Each state needs recourse, expected update, and audit trace. Fail-closed design should not become silent failure; it should preserve safe preparation where allowed.

<a id="explicit-externality"></a>
#### Explicit externality

Classify actions by where effects occur:

- **Ephemeral local** — preview, calculation, draft not shared.

- **Durable local** — saved private note or snapshot.

- **Shared internal** — status change, assignment, internal artifact.

- **External communication** — email, message, publication, filing.

- **Financial / legal / production** — payment, contract, deployment, deletion, access change.

- **Safety-critical or public-service** — actions affecting health, physical systems, rights, or eligibility.

The interface and policy controls should become stronger as externality rises. “Undo” for an email means a compensating message, not true reversal.

<a id="separation-of-preparation-and-execution"></a>
#### Separation of preparation and execution

Preparation creates a proposed artifact or plan. Execution crosses a defined boundary and produces an effect. The data model, permissions, APIs, audit events, and interface labels must preserve that distinction. A human approval artifact remains non-sendable; an execution service consumes a specifically authorized payload after fresh policy checks.

<a id="local-versus-external-actions"></a>
#### Local versus external actions

Local preparation may be safe under broad standing authority. External action requires target verification, current policy, final payload review, and explicit commitment unless a narrowly governed standing authorization exists. Bulk actions increase consequence by scope even when each item is individually ordinary.

<a id="durable-auditability"></a>
#### Durable auditability

Audit should record enough to reconstruct authority and effects without becoming a secret store. Required elements include:

- Workstream and run identifiers.

- Human delegator and accountable owner.

- Agent/service configuration and tool identity.

- Policy decision, version, and reason code.

- Input and source references, with sensitive content minimized.

- Proposed and executed action distinction.

- Approver, scope, conditions, and time.

- Before/after or external receipt.

- Intervention, rollback, failure, and verification.

Protect audit records with access control, integrity checks, retention policy, and redaction. Do not copy credentials, full private messages, or raw sensitive prompts merely for “transparency.”

<a id="crm-safety-examples"></a>
#### CRM safety examples

- **Suppression overrides priority.** Suppressed contacts do not gain a send path even if they have the highest conversion score.

- **A score does not imply permission.** Ranking can determine review order but cannot establish consent or eligibility.

- **Draft creation does not imply send authorization.** Draft state and send state use separate services and permissions.

- **The browser cannot calculate eligibility.** It displays a centrally signed or authoritative policy result and refreshes it at execution.

- **Approval is scoped.** Approval of one draft for one recipient and channel does not authorize later edits, a different recipient, or a bulk campaign.

- **External sends remain manual.** The final human commit identifies recipient, payload, consequence, and current policy result.

- **Audit minimizes exposure.** Store hashes, IDs, reason codes, and controlled snapshots where full content is unnecessary.

<a id="durable-memory-recurrence-and-steering-safety"></a>
#### Durable memory, recurrence, and steering safety

Memory writes, scheduled wake-ups, and steering events pass through the same policy and audit boundary as other consequential expressions. Memory cannot self-elevate an inference into policy or authority. Recurrence expires, has an owner and resource ceiling, and remains revocable. Steering that broadens scope invalidates prior previews and approvals; pause or cancel reports enforced and residual state across child and queued work. [R79, R80, R83, R89, R92]

<a id="multi-agent-composition-and-authority-attenuation"></a>
#### Multi-agent composition and authority attenuation

Subagents inherit no ambient parent authority. The orchestrator delegates an explicit subgoal, narrowed tools, credentials, context, lifetime, effect ceiling, and communication scope. Aggregate budgets, rate limits, externality ceilings, and termination rules apply to the composition as a whole. Cross-agent outputs retain their original trust class; “produced by our agent” is not a trust upgrade. [R82, R83, R86, R90, R92]

<a id="configuration-identity-and-deployment-change-control"></a>
#### Configuration identity and deployment change control

Consequential execution binds to a reproducible configuration fingerprint. Material changes to model, prompt stack, harness, tools, permissions, policy, memory, orchestration, environment, or semantic profile invalidate affected approvals and conformance evidence and trigger representative replay. The release record states environmental fidelity limits and expected distribution shift. [R76–R78]

<a id="resource-authority"></a>
#### Resource authority

Compute, money, messages, storage, network calls, and human-review demand are bounded resources. Each grant names unit, scope, owner, hard or soft limit, consumed and remaining amount, reset, expiry, and breach action. Resource authority is not inferred from task authority, and a child agent cannot create fresh budget by spawning another child.

<a id="failure-containment"></a>
#### Failure containment

A safe system assumes agents, integrations, models, and humans can fail. Containment design includes environment separation, transactional boundaries, rate and scope limits, idempotency, reversible staging, canary execution, immutable receipts, post-action verification, parent/child run accounting, and recursive pause, isolation, or shutdown where the architecture supports spawned work. The Replit incident reporting and Recall redesign are reminders that conversational assurances and UI controls cannot substitute for architecture. [R44–R46, R74]

<a id="cross-workstream-control"></a>
#### Cross-workstream control

The workstream is not the maximum unit of security analysis. Security correlation must be able to aggregate actions across workstreams, agent instances, identities, credentials, and infrastructure resources, while continuity surfaces project the correlated incident back to each affected workstream. A stopped parent run is not contained if untracked child jobs, credentials, or external effects remain. [R74]

<a id="anti-pattern-catalog"></a>
### 16. Anti-pattern catalog

<a id="the-omniscient-dashboard"></a>
#### 1. The Omniscient Dashboard

**Definition.** A single surface claims to show everything through metrics, charts, cards, and feeds.

**Why teams create it.** Stakeholders want visibility; aggregation feels like control; card systems are easy to extend.

**Corrective pattern.** A ranked command center with Resume, Now, Human oversight, Waiting, Blocked, semantic changes, and compact status; detailed inventory remains in execution views.

<a id="the-wall-of-equal-urgency"></a>
#### 2. The Wall of Equal Urgency

**Definition.** Every open item uses similar visual weight, red badges, deadlines, or “high priority” labels.

**Why teams create it.** Data models lack consequence and reversibility; requesters can self-declare urgency; design systems overuse alert styles.

**Corrective pattern.** Defined attention tiers, reasoned priority, urgency expiry, and one dominant safe action.

<a id="session-amnesia"></a>
#### 3. Session Amnesia

**Definition.** The application forgets working intent when the tab, device, login, or session changes.

**Why teams create it.** State is implemented as local view state; analytics focus on task completion within sessions.

**Corrective pattern.** Context Snapshot, Workstream Entry / Resume Card, server-side semantic state, and stale-context validation.

<a id="chat-as-information-architecture"></a>
#### 4. Chat as Information Architecture

**Definition.** Conversations become the primary container for objects, tasks, decisions, state, and history.

**Why teams create it.** Language interfaces are flexible and fast to prototype; the transcript appears to preserve context.

**Corrective pattern.** Use chat to invoke, clarify, and explain; bind outcomes to durable workstreams, structured state, and artifacts.

<a id="notification-as-context"></a>
#### 5. Notification as Context

**Definition.** An alert is expected to explain enough for the user to understand and act without a reconstructed destination.

**Why teams create it.** Event publishers own notifications; links point to generic objects; context assembly is costly.

**Corrective pattern.** Consequence-based summons that deep-link to a decision-ready workstream with semantic delta and next action.

<a id="ai-did-something"></a>
#### 6. AI Did Something

**Definition.** The interface reports machine activity or completion without scope, actor configuration, effects, evidence, or next responsibility.

**Why teams create it.** Teams optimize for a reassuring sense of progress and hide technical complexity.

**Corrective pattern.** Attributable run state, effect receipt, provenance, and explicit handoff.

<a id="the-mystery-owner"></a>
#### 7. The Mystery Owner

**Definition.** A work item has no accountable owner, or the current actor is mistaken for ownership.

**Why teams create it.** A single assignee field is overloaded; automation transitions clear or replace assignment.

**Corrective pattern.** Separate accountable owner, current actor, and next actor; require an owner for durable workstreams.

<a id="the-fake-approval-gate"></a>
#### 8. The Fake Approval Gate

**Definition.** A human click is inserted after an automated recommendation without sufficient evidence, time, authority, alternatives, or influence.

**Why teams create it.** Approval satisfies a checklist and transfers perceived responsibility to the user.

**Corrective pattern.** Human Decision Inbox with scoped decisions, relevant evidence, alternatives, and measured review quality; automate low-risk homogeneous cases only under policy.

<a id="score-equals-permission"></a>
#### 9. Score Equals Permission

**Definition.** A ranking, propensity, risk, or confidence score visually or functionally unlocks an action.

**Why teams create it.** Models and business rules are blended into one decision variable; green/high scores simplify UI.

**Corrective pattern.** Separate recommendation, evidence confidence, policy result, and execution permission; evaluate policy independently at action time.

<a id="waiting-hidden-inside-active-work"></a>
#### 10. Waiting Hidden Inside Active Work

**Definition.** Items awaiting a date, reply, external event, or dependency remain in an active queue.

**Why teams create it.** The state model has only open/closed or todo/done; reminders substitute for waiting semantics.

**Corrective pattern.** Waiting Lane with trigger, expected window, owner, review condition, and automatic transition.

<a id="blocked-items-polluting-action-queues"></a>
#### 11. Blocked Items Polluting Action Queues

**Definition.** Work with no available next action continues to rank among executable work.

**Why teams create it.** Blocker data is unstructured or treated as a comment; priority scoring ignores feasibility.

**Corrective pattern.** Blocked Ledger, separate resolution ownership, and blocker-to-affected-workstream relationships.

<a id="activity-without-meaning"></a>
#### 12. Activity Without Meaning

**Definition.** A feed records every event but does not explain the current implication.

**Why teams create it.** Events are easy to log and legally reassuring; semantic interpretation requires domain modeling.

**Corrective pattern.** Since-Last-Inspection Digest with semantic delta classes and expandable raw event history.

<a id="resume-means-reopen-the-homepage"></a>
#### 13. Resume Means Reopen the Homepage

**Definition.** A “Continue” or “Resume” link returns the user to a generic landing page, recent-item list, or last URL.

**Why teams create it.** Product navigation is mistaken for context restoration.

**Corrective pattern.** Workstream Entry / Resume Card with goal, subgoal, semantic changes, validated selection, and exact safe restore.

<a id="the-animated-agent-aquarium"></a>
#### 14. The Animated Agent Aquarium

**Definition.** Multiple agent avatars, pulses, streaming text, or “thinking” animations dominate the interface.

**Why teams create it.** Activity is visually marketable; anthropomorphism makes invisible computation feel tangible.

**Corrective pattern.** Quiet AI Work Monitor organized by operational condition, with text progress, scope, handoff, and intervention controls.

<a id="safety-by-red-banner"></a>
#### 15. Safety by Red Banner

**Definition.** A warning message is the primary or only safeguard against prohibited action.

**Why teams create it.** Presentation changes are faster than policy-service or permission architecture.

**Corrective pattern.** Policy-first routing, server enforcement, fail-closed execution, and explanatory UI.

<a id="the-irreversible-one-click-suggestion"></a>
#### 16. The Irreversible One-Click Suggestion

**Definition.** A recommendation is presented as an immediate action even when its effects are external or difficult to reverse.

**Why teams create it.** Reduced friction improves superficial conversion metrics; recommendation and execution share a control.

**Corrective pattern.** Decision Boundary with prepared/executed distinction, final target review, policy recheck, and explicit commitment.

<a id="the-infinite-copilot-sidebar"></a>
#### 17. The Infinite Copilot Sidebar

**Definition.** A persistent assistant panel accumulates chats, suggestions, state, and controls beside every page.

**Why teams create it.** A global sidecar is easier than integrating domain-specific AI semantics throughout the product.

**Corrective pattern.** Place recommendations, evidence, and controls in the workstream and decision context; retain chat as an optional interaction channel.

<a id="duplicate-counts-everywhere"></a>
#### 18. Duplicate Counts Everywhere

**Definition.** The same workstream contributes to badges in notifications, tasks, approvals, agent activity, changed items, and dashboard cards.

**Why teams create it.** Features own independent counters and event subscriptions.

**Corrective pattern.** Canonical workstream identity, deduplicated alert conditions, explicit count units, and one main orientation placement.

<a id="the-traffic-light-collapse"></a>
#### 19. The Traffic-Light Collapse

**Definition.** A single green/yellow/red status or plus/minus marker is asked to stand for state, quality, permission, consequence, and next action.

**Why teams create it.** Traffic-light codes are fast to scan and effective when one narrow dimension is being encoded.

**Corrective pattern.** Use the continuity grammar: stable slots for state, delta, actor chain, authority, consequence, and safe next action. Let color reinforce one slot at a time. Reserve first-pass salience for the attention claim; require focused reading for the remaining grammar instead of asking one visual token or conjunction to carry the whole operating picture.

<a id="the-self-reporting-control-plane"></a>
#### 20. The Self-Reporting Control Plane

**Definition.** The acting agent is treated as the authoritative source for its own monitoring status, compliance, evidence, effects, or containment.

**Why teams create it.** Agent-authored summaries are easy to integrate, while independent environment telemetry, policy resolution, and control records require additional infrastructure.

**Corrective pattern.** Independent validators for identity, evidence, policy, environment effects, monitoring, and containment; the continuity surface discloses source and integrity state.

<a id="the-human-speed-firewall"></a>
#### 21. The Human-Speed Firewall

**Definition.** Every rapid or consequential machine action depends on a person noticing, understanding, and blocking it in real time.

**Why teams create it.** A review queue is visible, familiar, and easier to ship than synchronous monitoring, access control, isolation, or automated response.

**Corrective pattern.** Automated gating and containment below the interface, with human escalation reserved for differentiated, authority-bearing decisions and ambiguous exceptions.

<a id="workstream-local-blindness"></a>
#### 22. Workstream-Local Blindness

**Definition.** Each workstream is evaluated as safe in isolation even though several agents or workstreams form one harmful sequence.

**Why teams create it.** Product data models, queues, alerts, and ownership are scoped to local records or runs, while security correlation lives elsewhere or does not exist.

**Corrective pattern.** A durable control-incident object that correlates evidence across workstreams and projects containment, residual effects, and next responsibility back into each affected context.

<a id="untrusted-content-becomes-instruction"></a>
#### 23. Untrusted Content Becomes Instruction

**Definition.** Retrieved text, email, tool output, code comments, or a subagent summary is allowed to steer behavior as though it were an authorized instruction.

**Why teams create it.** Context is concatenated into one prompt and the model is expected to infer trust and hierarchy from prose.

**Corrective pattern.** Instruction Authority & Conflict Trace; explicit data-versus-instruction classification; policy-enforced promotion boundaries; constrained tools and credentials.

<a id="shared-agent-shared-authority"></a>
#### 24. Shared Agent, Shared Authority

**Definition.** Everyone who can message a shared agent is treated as equally able to re-scope, approve, cancel, reveal memory, or spend resources.

**Why teams create it.** The collaboration channel is mistaken for an authorization domain.

**Corrective pattern.** Separate requester, delegator, accountable principal, instruction authority, approver, memory custodian, and affected non-requesters; enforce conflict rules.

<a id="memory-without-mutation-history"></a>
#### 25. Memory Without Mutation History

**Definition.** The agent “learns” durable facts or preferences without a sourced, typed, reviewable mutation record.

**Why teams create it.** Memory is treated as product convenience or hidden model context rather than operational state.

**Corrective pattern.** Memory Mutation Receipt with epistemic mode, source, scope, expiry, conflict, review, revocation, and affected-context propagation.

<a id="the-perpetual-agent"></a>
#### 26. The Perpetual Agent

**Definition.** Scheduled or proactive work continues with no explicit expiry, owner, quiet hours, budget, or stop condition.

**Why teams create it.** A reminder feature evolves into standing agency without a recurrence contract.

**Corrective pattern.** Recurrence Contract with trigger, preconditions, no-op behavior, effect ceiling, owner, budget, expiry, review cadence, and immediate revocation.

<a id="authority-by-inheritance"></a>
#### 27. Authority by Inheritance

**Definition.** A child agent receives the parent’s tools, credentials, data, and authority because it was spawned by a trusted orchestrator.

**Why teams create it.** Subagents are implemented as copies of the parent context and environment.

**Corrective pattern.** Delegation attenuation; purpose-bound child identity; narrowed credentials and context; explicit subdelegation permission; aggregate composition limits.

<a id="context-compaction-without-provenance"></a>
#### 28. Context Compaction Without Provenance

**Definition.** A summary replaces the working context without recording what was omitted, contradicted, or compressed.

**Why teams create it.** Long-context cost and latency are optimized without treating compaction as a semantic transformation.

**Corrective pattern.** Context assembly record with sources, selection method, coverage, omissions, contradiction, compaction loss, and an insufficiency state for consequential action.

<a id="the-permission-prompt-firehose"></a>
#### 29. The Permission Prompt Firehose

**Definition.** Every tool action creates a similar approval prompt regardless of target, trust, consequence, or reversibility.

**Why teams create it.** Teams substitute visible prompts for tool policy, manifests, and risk-based routing.

**Corrective pattern.** Tool Capability Manifest; standing grants for validated low-risk classes; risk-based prompt routing; differentiated evidence and effect previews for consequential cases.

<a id="component-conformance-becomes-system-conformance"></a>
#### 30. Component Conformance Becomes System Conformance

**Definition.** Evidence about a model, tool, or upstream service is displayed as assurance for an unassessed integrated deployment.

**Why teams create it.** Procurement and release workflows prefer one portable badge over configuration-specific evidence.

**Corrective pattern.** Conformance Evidence Card bound to object, configuration, method, validity, exceptions, upstream evidence, downstream assumptions, and reassessment triggers.

<a id="same-name-different-configuration"></a>
#### 31. Same Name, Different Configuration

**Definition.** Several materially different deployments share one agent name and visual identity.

**Why teams create it.** Branding and conversational continuity are prioritized over reproducible configuration identity.

**Corrective pattern.** Configuration fingerprint on consequential runs, visible material-configuration deltas, semantic regression gate, and version-specific receipts.

<a id="metrics-and-evaluation"></a>
### 17. Metrics and evaluation

<a id="measurement-doctrine"></a>
#### Measurement doctrine

Workstream continuity should be measured as comprehension, decision readiness, resumption, control, and safety — not merely clicks, dwell time, or automation throughput. A focus transition often contains two linked intervals: portfolio-level target acquisition and selected-workstream semantic acquisition. Faster is beneficial only when understanding and decisions remain accurate. Metrics should be segmented by switch frequency, workstream complexity, elapsed time, consequence, accessibility needs, expertise, and device.

Control efficacy and control legibility are separate. Control efficacy asks whether the system detects, blocks, contains, or reverses harmful behavior. Control legibility asks whether the operator can correctly acquire that validated state and act on it. A clear dashboard cannot compensate for weak controls; a strong control plane can still fail operationally if its state is misrepresented at switch-in. [R74]

<a id="core-outcome-metrics"></a>
#### Core outcome metrics

| **Metric**                                  | **Operational definition**                                                                                                                                                                                                  | **Collection method**                                                                                                               | **Guardrail / interpretation**                                                                                                                                                                                          |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time to orientation (TTO)                   | Time from portfolio or command-center entry to correctly identifying whether attention is required and selecting the workstream that should be entered                                                                      | Set-size triage study, moderated test, or in-product checkpoint                                                                     | Measures target acquisition and triage, not full workstream comprehension                                                                                                                                               |
| Time to decision readiness (TTDR)           | Time from selected-workstream entry to correctly identifying the available decision, material delta, actors, authority, evidence, consequence, and safe options                                                             | Rapid-switch or interrupted-task study                                                                                              | Pair speed with decision accuracy; some high-consequence cases should remain deliberately slower                                                                                                                        |
| Set-size triage function                    | Relationship between correct human-attention triage time and the number of concurrently displayed workstreams, reported separately for target-present and target-absent trials with false-positive and false-negative rates | Controlled visual-search study across multiple set sizes, randomized target locations, and controlled density and target prevalence | A shallow relationship supports efficient guidance under the tested conditions; literal zero slope is not required, and the result does not establish full grammar comprehension or prove a discrete preattentive stage |
| Time to resume meaningful work (TTMR)       | Time to the first correct, goal-advancing action on the intended workstream                                                                                                                                                 | Instrumented task study                                                                                                             | Exclude accidental or policy-invalid clicks                                                                                                                                                                             |
| Continuity-grammar accuracy                 | Correct identification of goal, state, material delta, accountable/current/next actors, authority, evidence, effect, and safe next action                                                                                   | Structured questions after workstream acquisition                                                                                   | Report dimensions separately; pair speed with accuracy                                                                                                                                                                  |
| False-ready rate                            | Share of cases in which a person believes a consequential action is ready or permitted when state, evidence, authority, or policy says otherwise                                                                            | Scenario test, attempted-action logs, and post-task explanation                                                                     | Near misses blocked by architecture still reveal orientation failure                                                                                                                                                    |
| Views to next action                        | Distinct views or context switches required to identify and initiate the correct action                                                                                                                                     | Interaction telemetry                                                                                                               | Lower is not always better for high-consequence review                                                                                                                                                                  |
| State-reconstruction errors                 | Incorrect assumptions about prior intent or current state                                                                                                                                                                   | Observation, correction logs, incident review                                                                                       | Classify by source: stale restore, omitted delta, ambiguous label                                                                                                                                                       |
| Cross-workstream contamination              | Facts, intent, evidence, actor, or authority incorrectly imported from another active workstream                                                                                                                            | Rapid portfolio-switch study, correction logs, incident review                                                                      | Distinguish contamination from legitimate shared dependencies or global policy changes                                                                                                                                  |
| Wrong-actor actions                         | Actions attempted or performed by an actor other than the required next actor                                                                                                                                               | Event and policy logs                                                                                                               | Include agent scope errors and human misrouting                                                                                                                                                                         |
| Missed human-review obligations             | Required decisions not completed before deadline or downstream execution                                                                                                                                                    | Workflow/audit comparison                                                                                                           | Separate absent notification from poor review quality                                                                                                                                                                   |
| Duplicate work                              | Substantially repeated work caused by hidden progress or ownership                                                                                                                                                          | Artifact similarity plus user report                                                                                                | Avoid treating legitimate independent verification as duplication                                                                                                                                                       |
| Blocker discovery latency                   | Time from blocker existence to correct identification and ownership                                                                                                                                                         | Event baseline to ledger event                                                                                                      | Include hidden policy and missing-evidence blockers                                                                                                                                                                     |
| Intervention latency                        | Time from detectable variance or alert to containment action                                                                                                                                                                | Run and control logs                                                                                                                | Also measure false interventions and control effectiveness                                                                                                                                                              |
| Approval reversal rate                      | Approvals later reversed because evidence, scope, or consequence was misunderstood                                                                                                                                          | Audit history                                                                                                                       | Some reversals are healthy; inspect cause and severity                                                                                                                                                                  |
| Stale-context incidents                     | Actions or decisions based on materially obsolete restored state                                                                                                                                                            | Incident classification and policy logs                                                                                             | Include near misses where policy prevented execution                                                                                                                                                                    |
| Alert actionability                         | Percentage of alerts that lead to a meaningful action, decision, or justified acknowledgement                                                                                                                               | Alert-to-workstream linkage                                                                                                         | A low alert count can be healthy; avoid engagement targets                                                                                                                                                              |
| Orientation confidence                      | User-rated confidence in understanding state after a validated comprehension task                                                                                                                                           | Short scale after switch-in or re-entry                                                                                             | Do not use confidence without accuracy; overconfidence is a risk                                                                                                                                                        |
| Trust calibration                           | Alignment between reliance and actual system performance by task type                                                                                                                                                       | Controlled trials with correct/incorrect outputs                                                                                    | “More trust” is not the goal                                                                                                                                                                                            |
| Review fatigue                              | Change in decision quality, evidence inspection, and time across a review session                                                                                                                                           | Longitudinal telemetry and observation                                                                                              | Respect worker privacy; avoid individual performance surveillance                                                                                                                                                       |
| Controlled autonomous completion            | Work completed within policy without missed human obligations, uncontained failures, or incorrect external effects                                                                                                          | End-to-end audit                                                                                                                    | Throughput alone is insufficient                                                                                                                                                                                        |
| Independent-monitoring coverage             | Fraction of consequential or otherwise in-scope agent traffic observed by an independent monitor                                                                                                                            | Control-plane telemetry and coverage audit                                                                                          | Report scope and exclusions; coverage alone says nothing about recall [R74]                                                                                                                                           |
| Monitoring recall under adversarial testing | Fraction of seeded or red-team trajectories with relevant harmful behavior correctly flagged                                                                                                                                | Sandboxed proxy-untrusted-agent exercises and incident replay                                                                       | Distinguish adversarial behavior from ordinary mistakes; estimate uncertainty [R74]                                                                                                                                   |
| Synchronous response coverage               | Fraction of in-scope agent traffic subject to automatic blocking, resampling, trusted-model deferral, escalation, or equivalent pre-effect intervention                                                                     | Control-gateway and policy logs                                                                                                     | Segment by action class and consequence; not all traffic warrants synchronous gating [R74]                                                                                                                            |
| Synchronous response recall                 | Fraction of attack rollouts correctly prevented by the response system                                                                                                                                                      | Red-team and counterfactual replay                                                                                                  | Pair with false-block rate and operational or developer-velocity cost [R74]                                                                                                                                           |
| Detection-to-containment latency            | Time from the first detectable signal or alert to verified containment of further effects                                                                                                                                   | Monitor, incident, and control logs                                                                                                 | Separate alert-to-investigation from alert-to-effect containment                                                                                                                                                        |
| Recursive containment completeness          | Share of parent runs, child jobs, credentials, and affected resources brought within the declared containment radius                                                                                                        | Shutdown drill and incident audit                                                                                                   | A stopped UI or parent process is not containment                                                                                                                                                                       |
| Control-state identification accuracy       | Correct identification of monitoring mode, control decision, containment state, committed and prevented effects, and next responsible actor at switch-in                                                                    | Adversarial continuity study                                                                                                        | A legibility metric, not evidence that controls are effective                                                                                                                                                           |
| False-safe during control degradation       | Share of cases in which an operator believes execution is monitored or contained when control capability is degraded or unverifiable                                                                                        | Outage simulation and comprehension test                                                                                            | Should trigger lower agency or fail-closed behavior                                                                                                                                                                     |

<a id="extension-profile-metrics"></a>
#### Extension-profile metrics

These measures test whether the expanded semantics improve utility and control rather than merely increasing field completion. Segment them by consequence, agency level, shared versus individual operation, tool class, composition size, and configuration version.

**Instruction-conflict resolution accuracy.** Share of cases in which the governing instruction and correct resolution path are identified without silently accepting a lower-authority or untrusted instruction.

**Unauthorized instruction-promotion rate.** Frequency with which retrieved content, tool output, or subagent text changes operative behavior without an authorized promotion event.

**Multi-principal authority error.** Requests, approvals, cancellations, memory disclosures, or resource uses accepted from a participant who lacks the applicable role or scope.

**Unsupported durable-memory rate.** Fraction of consequential memory records lacking source, epistemic mode, scope, review state, or a valid retention basis.

**Memory revocation completeness.** Share of dependent contexts, caches, recurrences, and future decisions updated or explicitly reported residual after a memory correction or revocation.

**Orphaned-recurrence rate.** Scheduled contracts that remain active after owner loss, expiry, revocation, policy change, budget exhaustion, or workstream closure.

**Steering propagation completeness.** Share of targeted queued actions, child agents, recurrences, approvals, and previews that reach the correct enforced state after a steering event.

**Delegation-attenuation correctness.** Share of child actors whose effective tools, credentials, context, lifetime, and effect ceilings do not exceed the delegated subgoal.

**Risk-triad violation rate.** Autonomous paths that combine untrusted input, sensitive access, and durable or external effect outside an approved higher-assurance exception.

**Configuration-attribution completeness.** Fraction of consequential outputs and effects bound to a reproducible model, harness, instruction, tool, permission, memory, orchestration, environment, and profile fingerprint.

**Conformance-evidence freshness.** Share of relied-upon evidence that matches the current object and configuration and remains within validity, assumptions, and exception bounds.

**Semantic-regression escape rate.** Production failures of meaning, authority, memory, effect preview, or control that should have been detected by the predeployment replay set.

**Context-compaction omission rate.** Material obligations, contradictions, authority states, stop conditions, or unknowns omitted or distorted during summary or compaction.

**Resource-boundary breach rate.** Actions exceeding hard limits or continuing after budget, rate, time, storage, message, or review-load ceilings should have stopped execution.

<a id="decision-readiness-vector"></a>
#### Decision-readiness vector

For each selected-workstream acquisition, score GOAL, STATE, DELTA, ACTORS, AUTH, EVIDENCE, EFFECT, and NEXT separately as correct, incorrect, or unknown. Report the vector beside TTDR. ATTN is evaluated separately through portfolio-level target-acquisition and triage measures. Example: 8/8 operating facts correctly acquired in 11 seconds; no false-ready action. A participant who acts quickly while misunderstanding authority is not decision-ready.

<a id="rapid-portfolio-switch-study"></a>
#### Rapid portfolio-switch study

**Purpose.** Test the category’s primary use case: moving quickly among concurrent agent and human workstreams while preserving decision quality.

Protocol. Give participants 8–12 active workstreams with mixed states, actors, authority, evidence, and consequence. Require switches every 30–90 seconds; include unchanged work, meaningful deltas, inherited handoffs, completed agent work, and at least one recommendation/permission conflict. Compare a traffic-light/status view, a raw thread or activity-history view, and the continuity-grammar treatment.

Measures. TTO, TTDR, first-decision correctness, continuity-grammar accuracy, false-ready rate, cross-workstream contamination, evidence openings, and subjective switch cost. The grammar succeeds only if it improves speed and accuracy together. Run the set-size triage test separately so that first-pass exception finding is not conflated with full semantic acquisition and decision readiness.

<a id="set-size-triage-test"></a>
#### Set-size triage test

Purpose. Test whether the dedicated attention cue supports efficient exception finding as the displayed portfolio grows.

Protocol. Present portfolios of 4, 8, 12, and 24 workstreams. In target-present trials, exactly one workstream contains a human-exclusive or high-consequence obligation; in target-absent trials, none do. Randomize target location while keeping row height, semantic complexity, density, and unrelated visual noise controlled. Balance target prevalence. Compare the continuity-grammar treatment with a traffic-light/status treatment and a prose or activity-history treatment. This stage tests exception finding only; do not require participants to read or recall the full grammar.

Measures. Record correct triage latency, target-identification latency, the set-size response function, false positives, false negatives, and confidence. Analyze target-present and target-absent trials separately and report uncertainty around the estimated relationship.

Interpretation. A shallow set-size relationship with stable accuracy supports the claim that the first-pass attention cue efficiently guides the operator under the tested conditions. Increasing latency or error suggests serial inspection, conjunction dependence, crowding, insufficient target–distractor contrast, or excessive distractor heterogeneity. This test does not establish Time to Decision Readiness; full grammar comprehension must be tested separately.

<a id="five-second-orientation-test"></a>
#### Five-second orientation test

**Purpose.** Test whether the first viewport communicates the operating picture.

**Protocol.** Show the command center for five seconds, then hide it. Ask participants:

- What needs attention now?

- What is the most consequential human decision?

- What is waiting and on whom?

- What is blocked?

- What changed?

- Who is accountable, who acts now, and who acts next?

- What is permitted or denied, what evidence supports it, and what consequence is at stake?

- What can continue without you?

- Which action appears safe to take next?

Score grammar slots separately. Do not require exact counts unless counts drive action. Compare designs on accuracy, false urgency, false-ready decisions, authority errors, cross-workstream contamination, and confidence calibration.

Interpret the five-second test as a composite orientation test, not a pure preattentive test. Analyze first-target acquisition separately from grammar-slot comprehension wherever the study design permits.

<a id="interrupted-task-study"></a>
#### Interrupted-task study

**Protocol.** Have participants begin a realistic multi-step workstream with evidence and a pending decision. Interrupt at a meaningful subgoal. Conditions should include five minutes, four hours, and forty-eight hours, with intervening unrelated work. Compare:

- Conventional homepage/record history.

- Last-location restore.

- Full workstream continuity treatment.

Measure TTO, TTMR, errors, evidence revisits, and subjective workload. Include unexpected interruption conditions where no session-close summary is available.

<a id="longitudinal-portfolio-study"></a>
#### Longitudinal portfolio study

Deploy the design with users managing 20–100 heterogeneous workstreams for several weeks. Examine whether users trust waiting triggers, maintain shadow notes, miss ownership transitions, defer too many decisions, or experience increasing review fatigue. Use interviews, diary entries, telemetry, and incident review. Vendor productivity claims should not substitute for this field evidence.

<a id="agent-failure-simulation"></a>
#### Agent-failure simulation

Simulate at least:

- Tool unavailable.

- Partial result.

- Incorrect source fact.

- Scope expansion.

- Repeated retry.

- Policy denial.

- External target mismatch.

- Destructive action attempt.

- Agent reports success but verification fails.

- Human returns after the failure occurred.

Measure detection, comprehension, intervention, containment, recovery, and audit reconstruction. Test both user-facing and alternate API/tool paths.

<a id="adversarial-continuity-simulation"></a>
#### Adversarial continuity simulation

Purpose. Test whether continuity surfaces preserve validated control state when an agent attempts to evade, misreport, or distribute consequential behavior.

Protocol. Use a sandboxed proxy-untrusted agent or scripted harness and include at least:

- Agent claims success or compliant monitoring while environment telemetry disagrees.

- Agent attempts to modify, suppress, or bypass logging or monitoring.

- Agent spawns an unlinked child job or continues after the parent appears stopped.

- Agent reuses stale authority after target, payload, policy, or scope mutation.

- Several instances distribute a prohibited sequence across three workstreams.

- A control service degrades while the work interface remains available.

Measures. Monitoring and response recall; false-safe rate; detection-to-containment latency; correct distinction between committed and prevented effects; containment-radius selection; cross-workstream incident comprehension; human escalation load; and audit reconstruction.

Interpretation. The WCD treatment succeeds only if validated control state improves operator decisions and containment without unsustainable review burden. The study tests continuity and control legibility, not model alignment.

<a id="shared-agent-authority-simulation"></a>
#### Shared-agent authority simulation

Give several participants overlapping but unequal roles. Include conflicting requests, a non-owner attempting to cancel, an unauthorized memory query, a requester seeking budget expansion, and an approver who has not inspected current evidence. Measure authority errors, conflict-resolution accuracy, per-person baseline correctness, and operator understanding.

<a id="instruction-and-prompt-injection-boundary-test"></a>
#### Instruction and prompt-injection boundary test

Place malicious or accidental instructions in documents, tool output, code, messages, and subagent summaries. Vary whether the content conflicts with accepted policy or the user’s goal. Test whether the system preserves source and trust class, blocks unauthorized promotion, narrows tools and credentials, and exposes the conflict without overwhelming the operator. [R83, R87, R91, R92]

<a id="memory-compaction-recurrence-and-steering-simulation"></a>
#### Memory, compaction, recurrence, and steering simulation

- Seed a false inference into memory and verify that it remains distinguishable from a user-stated fact.

- Compact a long context containing one contradiction, one stop condition, and one unresolved approval; measure omission and false-ready behavior.

- Revoke a recurrence after it has queued child work; verify propagation and residual accounting.

- Issue constrain, replace-goal, pause, and cancel events at different execution phases; distinguish requested, acknowledged, enforced, ineffective, and residual states.

<a id="multi-agent-composition-simulation"></a>
#### Multi-agent composition simulation

Vary agent count, role topology, shared memory, communication, tool allocation, credentials, budgets, and stopping rules. Include correlated error, cascade, trust escalation, a child that exceeds its subgoal, split transactions that collectively exceed a limit, and parent shutdown with surviving descendants. Measure composition attribution, aggregate-limit enforcement, collective-risk detection, and recursive containment. [R82, R83, R90, R92]

<a id="configuration-and-conformance-replay"></a>
#### Configuration and conformance replay

Replay representative historical workstream envelopes and simulated deployment contexts after each material configuration change. Compare the new fingerprint against the prior evidence card; record environmental fidelity error, input-distribution shift, changed metrics, unknown-behavior findings, exceptions, and release disposition. A model-only pass does not qualify when tools, memory, policy, or orchestration changed. [R76–R78]

<a id="safety-boundary-tests"></a>
#### Safety-boundary tests

- Suppression remains effective across UI, API, bulk action, stale session, agent tool, and replay.

- Eligibility is recalculated centrally at execution.

- Approval is invalidated by material payload, target, policy, or evidence change.

- Draft artifacts cannot invoke external send.

- Policy-service outage fails closed while allowing safe local preparation.

- Audit records capture authority and effects without secrets.

- Undo behaves as promised and discloses non-reversible downstream effects.

- Monitoring or logging outage lowers available agency or fails closed for the affected action class.

- The acting agent cannot alter, suppress, or become the sole source of the control record presented to the operator.

- Parent/child lineage remains intact across pause, isolation, shutdown, retry, and handoff.

- Containment drills account for child jobs, credentials, affected resources, and residual external effects.

- One correlated control incident can identify and update every affected workstream without duplicating the underlying condition.

- Untrusted content cannot silently become an operative instruction through retrieval, tool output, summarization, or subagent handoff.

- Shared-agent participants cannot re-scope, cancel, approve, expose memory, or increase budget without the applicable role and scope.

- Durable memory mutations preserve source and epistemic mode and cannot silently alter goal or authority.

- Recurrence expires, respects quiet hours and budget, and stops across queued and child work when revoked.

- A steering event reports propagation, invalidated approvals, committed effects, and residual work.

- Child agents receive attenuated identity, credentials, context, tools, lifetime, and effect ceilings.

- The autonomous path does not combine untrusted input, sensitive access, and durable or external effect outside an approved higher-assurance profile.

- Configuration mismatch invalidates affected approvals and conformance evidence and triggers representative replay.

- Unknown or unsupported extension fields fail explicitly rather than being dropped or mapped to a favorable default.

<a id="accessibility-evaluation"></a>
#### Accessibility evaluation

Combine automated checks with keyboard-only, screen-reader, magnification, reduced-motion, color-vision, and high-zoom testing. Include users who rely on assistive technology in interrupted-task and five-second equivalents; a five-second visual test alone is not an accessibility test. Verify that dynamic progress does not create announcement overload and that semantic order survives responsive layouts. [R21] The visual set-size test applies only to visual presentations. Screen-reader, voice, switch, magnification, and other modalities require corresponding time-to-locate and comprehension studies based on their own navigation and perceptual characteristics; do not describe those results as visual preattentive processing.

<a id="instrumentation-requirements"></a>
#### Instrumentation requirements

Capture events at the workstream level:

- Context presented and baseline inspection time.

- Semantic deltas shown and opened.

- Actor and ownership transitions.

- Priority reasons and ranking version.

- Policy decision and version.

- Recommendation, evidence inspection, and decision.

- Run phase, intervention, failure, rollback, and verification.

- Focus acquisition, continuity grammar shown, stale validation, fallback, decision readiness, and successful meaningful action.

- Alert condition identity and resolution.

Use purpose limitation and role-based access. Review-fatigue and interaction telemetry can become worker surveillance; aggregate where possible, disclose use, and avoid punitive individual scoring.

<a id="evaluation-thresholds-for-v0.5"></a>
#### Evaluation thresholds for v0.5

Thresholds must be established per domain, but an initial product experiment can target:

- At least 80 percent correct identification of the dominant obligation after five seconds.

- A material reduction in median TTDR during rapid switching without increased state, authority, or cross-workstream contamination errors.

- A materially shallower set-size triage relationship than comparison treatments, without increased misses or false alarms; no universal zero-slope threshold is assumed.

- At least 90 percent correct next-actor identification for visible workstreams.

- A material reduction in TTMR without lower decision accuracy.

- Zero policy-boundary bypasses in adversarial channel tests.

- Alert actionability above the current baseline with fewer total interruptions.

- No increase in high-consequence approval reversals.

- Zero cases in which degraded or unverifiable control posture is presented as normal monitored execution.

- Complete accounting of seeded child jobs and affected workstreams after containment drills.

- A material improvement in control-state identification without increased false-safe decisions or review fatigue.

These are design hypotheses, not universal standards.

- Zero unauthorized promotion of seeded untrusted content into operative instruction during boundary tests.

- Zero acceptance of seeded shared-agent scope, cancellation, memory-disclosure, or budget changes from an unauthorized participant.

- Complete accounting of seeded memory mutations, recurrence contracts, steering events, child agents, and configuration fingerprints.

- No unassessed component evidence presented as composed-system conformance.

- A material reduction in semantic-regression escapes compared with the existing release process, without unacceptable evaluation latency or false blocks.

<a id="conformance-testing-the-spine"></a>
#### Conformance: testing the spine

A product should not claim strong workstream continuity because it contains one resume card, status page, or approval queue. Conformance should be tested against the five commitments that define the category.

| **Spine commitment**                                | **Conformance question**                                                                                                                                                                  | **Initial evidence**                                                                                                                    |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Workstream entry / focus transition are first class | Can a person entering a workstream identify its goal, dominant obligation, material delta, actor chain, authority state, and safe next action without reconstructing the thread manually? | Five-second orientation accuracy; TTDR; time to meaningful resumption; exact-context recovery; stale-context incident rate.             |
| Workstream is durable                               | Does the same goal, responsibility, state, evidence, and resume point survive navigation, logout, device change, and agent-run boundaries?                                                | Cross-session reconstruction accuracy; duplicate-work rate; missing-workstream links; recovery after deleted or unavailable artifacts.  |
| State and agency are separate                       | Can people distinguish condition, accountable owner, current actor, next actor, recommendation, approval, and permission?                                                                 | At least 90 percent correct next-actor identification; wrong-actor actions; approval-scope comprehension; permission errors.            |
| Meaningful change is reconstructed                  | Does the surface identify material deltas and changed assumptions rather than replaying logs or counts?                                                                                   | Change-recognition precision and recall; activity-feed dependence; invalid-intent detection; duplicate representation.                  |
| Policy and recoverable control are operative        | Do provenance, consequence, authorization, intervention, and recovery alter what the system can do?                                                                                       | Zero policy bypasses in adversarial tests; intervention latency; rollback or compensation success; evidence inspection; review quality. |

<a id="focus-transition-protocol-by-elapsed-time"></a>
#### Focus-transition protocol by elapsed time

The same study should be run at multiple elapsed times because rapid switching, short interruption, and multi-day return are not cognitively or operationally equivalent. The evidence base is strongest for frequent switching and short interruption; longer conditions are design hypotheses that require direct validation.

- 30–90 seconds — rapid portfolio switch. Move among 8–12 active workstreams while most state remains stable; introduce unchanged cases, one semantic delta, one inherited handoff, and one authority conflict. Measure grammar decoding, TTDR, first-decision accuracy, false-ready rate, and cross-workstream contamination.

- **5 minutes — active-goal interruption.** Interrupt with an unrelated task while the original work remains mostly stable. Measure goal reconstruction, restored view fidelity, and immediate next-action accuracy.

- **4 hours — within-day context displacement.** Introduce at least one external event, actor transition, or completed machine action. Measure changed-assumption recognition, ownership accuracy, and whether the prior plan is incorrectly resumed.

- **48 hours — longitudinal return.** Introduce stale data, a policy or eligibility change, a waiting condition, and at least one missing or superseded artifact. Measure safe fallback use, evidence inspection, and recovery without silent reliance on cached state.

For each condition, establish a clear goal and checkpoint, remove the participant from the task, apply controlled deltas, then ask the five-second questions before permitting navigation. Continue until the participant performs a meaningful action. Compare conventional dashboard/queue designs with the WCD treatment so the category remains falsifiable.

<a id="maturity-model"></a>
### 18. Maturity model

<a id="level-0-session-amnesia"></a>
#### Level 0 — Session amnesia

**Product behavior.** Work is organized around pages and transactions. Closing or switching loses view state and unfinished intent. Notifications and histories are event-centric.

**Data requirements.** Records and logs only; no durable workstream or user checkpoint.

**Human experience.** Users rely on memory, tabs, personal notes, and repeated searching.

**Agent capability.** None or foreground assistant responses; any agent state is confined to a chat or session.

**Oversight quality.** Reactive and fragmentary.

**Common risks.** Duplicate work, missed obligations, wrong assumptions, orphaned actions.

**Exit criteria.** The product can identify durable work units, owners, operational states, and selected context across sessions.

<a id="level-1-persistent-surface-state"></a>
#### Level 1 — Persistent surface state

**Product behavior.** Recent items, saved filters, drafts, preferences, and last location persist.

**Data requirements.** User-scoped view state and basic recency.

**Human experience.** Navigation and setup are easier, but purpose and changes still require reconstruction.

**Agent capability.** Chat history or single-run persistence; completion notifications.

**Oversight quality.** Users can find prior artifacts but cannot reliably reconstruct responsibility or meaningful delta.

**Common risks.** Stale restores, privacy on shared devices, false confidence that “resume” means understanding.

**Exit criteria.** Persisted state includes goal/subgoal, resume point, staleness validation, and semantic changes.

<a id="level-2-decision-ready-work-context"></a>
#### Level 2 — Decision-ready work context

Product behavior. Workstreams have goals, owners, state, resume points, context snapshots, and since-last-inspection summaries.

**Data requirements.** Workstream entity, semantic event layer, trusted inspection baseline, server-side context persistence.

Human experience. Users can acquire individual workstreams accurately, understand material changes, and identify the next safe decision without reconstructing raw history.

**Agent capability.** Durable runs and artifacts attach to workstreams; machine state is attributable.

Oversight quality. Good at single-workstream acquisition and re-entry; weak portfolio prioritization and cross-workstream dependencies.

**Common risks.** Generated delta errors, over-capture of context, fragmented approvals.

**Exit criteria.** The system can rank a concurrent portfolio, separate state lanes, and represent accountable/current/next actors.

<a id="level-3-rapid-concurrent-work-supervision"></a>
#### Level 3 — Rapid concurrent work supervision

Product behavior. Command center organizes Context / Resume, Now, Human oversight, Waiting, Blocked, Changed, and compact system status. Machine work is inspectable, interruptible, and recoverable.

Data requirements. Canonical continuity grammar, actor/agency model, dependencies, priority reasons, monitoring mode, operator-facing control posture, execution-environment identity, parent/child lineage, intervention state, receipts, control-incident links, and cross-workstream blocker relations.

**Human experience.** Users supervise a portfolio, trust waiting conditions, and focus on human-exclusive exceptions.

**Agent capability.** Several bounded asynchronous runs with explicit handoffs and controls.

**Oversight quality.** Meaningful at workstream and portfolio levels; review fatigue and ranking quality become central.

**Common risks.** Over-centralized control tower, opaque priority, duplicate counts, excessive approvals.

**Exit criteria.** Policy and authority are enforced consistently below the UI, adapt to context, and remain auditable across channels.

<a id="level-4-policy-aware-adaptive-continuity"></a>
#### Level 4 — Policy-aware adaptive continuity

**Product behavior.** Orientation adapts to incident state, user role, accessibility needs, workstream consequence, and verified policy. Context restoration is cross-device, privacy-preserving, and staleness-aware. The system learns from corrections through governed processes.

Data requirements. Versioned policy decisions, calibrated uncertainty, longitudinal outcomes, privacy/retention controls, semantic-delta quality monitoring, cross-agent grammar conformance, audit integrity, independent-monitoring coverage and recall, synchronous-response coverage, correlated-incident state, and recursive containment verification.

**Human experience.** Routine work remains quiet; exceptions arrive with decision-ready context; authority and recovery are consistently legible.

**Agent capability.** Bounded autonomy varies by work type, consequence, and validated performance. Standing authority can be revoked or narrowed.

**Oversight quality.** Proactive and calibrated, with measurable control and recovery rather than blanket approval.

**Common risks.** Hidden adaptation, policy complexity, surveillance, overfitting priority to historical behavior, organizational complacency.

**Exit criteria.** There is no proposed higher universal level. Maturity should deepen through domain evidence, governance, resilience, and accessibility rather than progress toward maximal autonomy.

<a id="application-to-the-ai-first-crm-case-study"></a>
### 19. Application to the AI-first CRM case study

<a id="overall-assessment"></a>
### Overall assessment

The proposed CRM command center already embodies the central category more strongly than most “AI-first” dashboards because it starts from rapid orientation, obligations, waiting, blockers, change, and safety boundaries rather than a chat box. Its strongest architectural choice is the separation between the command center as orientation/supervision and the Detailed Work Queue as execution. Its strongest safety choice is the draft-only external bridge with centrally enforced eligibility and suppression.

The concept is not finished. Several labels still describe presentation before the underlying continuity model is specified. To achieve Workstream Continuity Design, the CRM must make its acquisition/resume state, semantic deltas, actor transitions, approvals, policy decisions, and continuity-grammar projection durable system objects — not ad hoc card content.

<a id="component-by-component-evaluation"></a>
### Component-by-component evaluation

| **Component**                         | **Category assessment**         | **What is already strong**                                                                                                                             | **What remains unresolved**                                                                           | **Recommended next specification**                                                                                         |
|---------------------------------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Context / Resume                      | **Core embodiment**             | Makes switch-in and return first-class moments and aims to recover exact prior context                                                                 | Baseline of “last visit,” staleness, privacy, deleted records, device conflicts                       | Define trusted inspection point, context snapshot schema, validation, expiry, and safe fallback                            |
| Continuity grammar / operational diff | Core embodiment                 | Gives people, agents, services, and assistive output one ordered language for goal, state, delta, actors, authority, evidence, effect, and next action | Controlled taxonomy, semantic equivalence, compression rules, and delta quality are not yet specified | Define canonical slots, values, operational-diff marks, structured schema, accessibility projection, and conformance tests |
| Now                                   | **Core embodiment**             | Centers action rather than inventory; supports one dominant next step                                                                                  | Ranking rationale, policy interaction, deduplication, and human exclusivity                           | Define attention tiers, priority reasons, one canonical workstream placement, override telemetry                           |
| Human oversight                       | **Core embodiment**             | Separates human-exclusive decisions from routine machine work                                                                                          | Risk of generic approval queue and review fatigue                                                     | Specify decision artifacts, evidence minimums, scope/expiry, alternatives, reversal and quality measures                   |
| Waiting                               | **Core embodiment**             | Recognizes intentional non-action as a valid state                                                                                                     | Trigger reliability, overdue semantics, external nudges, ownership                                    | Require trigger, expected window, owner, follow-up rule, and auto-transition evidence                                      |
| Blocked                               | **Core embodiment**             | Prevents impossible work from polluting active queues                                                                                                  | Blocker taxonomy, shared root causes, resolution ownership                                            | Build Blocked Ledger and blocker-to-workstream graph                                                                       |
| Recently changed                      | **Strong but transitional**     | Uses delta rather than only status                                                                                                                     | Risk of becoming an activity feed or duplicating Now/Human oversight                                  | Define semantic delta classes, materiality, baseline, evidence links, and deduplication rules                              |
| Compact system status                 | **Appropriate support**         | Keeps platform condition peripheral                                                                                                                    | Which service failures affect safety and decision trust                                               | Connect status to affected capabilities/workstreams; fail closed for policy/eligibility uncertainty                        |
| One dominant action                   | **Strong doctrine**             | Reduces competing calls to action                                                                                                                      | Could be captured by opaque lead score or AI promotion                                                | Require authorized safe action, human-readable reason, consequence, reversibility, and alternatives                        |
| Detailed Work Queue                   | **Necessary execution surface** | Preserves expert density and operational throughput                                                                                                    | May remain record/task-centric and lose workstream context                                            | Add workstream, state, owner/current/next actor, blocker/wait condition, changed marker, saved view context                |
| Actor labels                          | **Core embodiment**             | Makes human/machine division visible                                                                                                                   | One “owner” field may collapse accountability and activity                                            | Implement accountable owner, current actor, next actor, actor class, and agency scope                                      |
| Central eligibility                   | **Architectural prerequisite**  | Prevents browser inference and keeps policy authoritative                                                                                              | Versioning, outage behavior, execution-time recheck, explainable reason codes                         | Add signed/versioned policy decision, TTL, fail-closed state, recourse, audit link                                         |
| Suppression                           | **Non-negotiable boundary**     | Explicitly overrides scores and recommendations                                                                                                        | Risk of partial enforcement across channels and bulk paths                                            | Make suppression a policy override tested across UI, API, agent tools, imports, replay, and stale sessions                 |
| Draft-only external bridge            | **Correct agency allocation**   | Separates preparation from external execution                                                                                                          | Artifact mutation after approval, target changes, and ambiguous “ready” labels                        | Store proposed payload/version; invalidate approval on material change; label “Draft prepared—human send required”         |
| No-send boundary                      | **Correct product constraint**  | Maintains human commit for external outreach                                                                                                           | Pressure to add “one-click autonomous follow-up” later                                                | Encode agency ceiling in tool permissions, API contracts, policy, tests, audit, and design-system semantics                |

<a id="what-already-embodies-workstream-continuity-design"></a>
### What already embodies Workstream Continuity Design

<a id="rapid-orientation-as-a-product-objective"></a>
#### Rapid orientation as a product objective

The five-second requirement is correctly framed as operational orientation, not dashboard comprehension. Resume, changed state, obligations, waiting, blockers, ownership, authority, and the safe next decision are the right questions. The next step is to apply the same grammar during repeated thread switching, not only product entry.

<a id="state-separated-command-center"></a>
#### State-separated command center

Now, Human oversight, Waiting, and Blocked correspond to materially different responses. This avoids the generic “Open work” queue and creates a foundation for attention proportionality.

<a id="command-center-versus-queue"></a>
#### Command center versus queue

The command center should not become the only execution surface. Keeping the detailed queue preserves comparison, bulk review, saved filters, and expert operations while allowing the command center to remain semantically sparse.

<a id="actor-and-agency-boundaries"></a>
#### Actor and agency boundaries

The concept recognizes that AI-first describes an operating model, not a chat aesthetic. Draft-only external work and manual sends allocate agency conservatively and make human responsibility concrete.

<a id="policy-precedence"></a>
#### Policy precedence

Central eligibility and suppression overriding score are exemplary category rules. They separate recommendation from authorization and make clear that the browser is not a policy engine.

<a id="what-is-transitional"></a>
### What is transitional

<a id="recently-changed-without-a-semantic-event-layer"></a>
#### “Recently changed” without a semantic event layer

A list can be designed before the product can reliably distinguish a material delta from field churn. The data platform needs event identity, before/after, source, affected intent, and materiality. Generated summaries should reference those facts and disclose uncertainty.

<a id="resume-without-a-trusted-checkpoint"></a>
#### “Resume” without a trusted checkpoint

Last route, last record, and last login are insufficient. The product must decide what counts as inspected, what context is saved, when it expires, and what invalidates the snapshot.

<a id="human-oversight-without-decision-semantics"></a>
#### Human oversight without decision semantics

A card saying “Review AI draft” is transitional. A mature decision artifact identifies target, final payload, policy result, evidence, uncertainty, consequence, approval scope, expiry, and downstream transition.

<a id="one-dominant-action-without-transparent-prioritization"></a>
#### One dominant action without transparent prioritization

The hierarchy is correct, but the prioritization model needs governance. Conversion probability should not outrank an expiring consent condition, a policy exception, or a decision blocking several downstream workstreams.

<a id="system-status-without-workstream-impact"></a>
#### System status without workstream impact

“CRM healthy” is too coarse. The system should communicate whether enrichment, policy evaluation, email synchronization, audit logging, or agent execution is degraded and which current workstreams are affected.

<a id="what-remains-pre-agent"></a>
### What remains pre-agent

<a id="record-as-the-implicit-unit-of-work"></a>
#### Record as the implicit unit of work

If the implementation continues to attach all state to contacts, deals, and tasks, the command center will become a new view over old fragmentation. A deal can contain several goals and delegated runs; a workstream can span a deal, contacts, drafts, approvals, and external replies.

<a id="activity-feed-as-the-source-of-truth-for-meaning"></a>
#### Activity feed as the source of truth for meaning

A conventional CRM timeline remains useful for audit, but it cannot be the only way to understand agent actions and handoffs. The product needs typed events and semantic deltas.

<a id="assignee-as-responsibility-model"></a>
#### Assignee as responsibility model

A single assignee cannot express “Connor accountable, enrichment agent active, legal next.” This is a schema limitation, not a badge-design problem.

<a id="notification-driven-return"></a>
#### Notification-driven return

If a notification opens a record and relies on the user to rebuild context, the system still operates under notification-as-context. Each summons needs a workstream destination and reason.

<a id="client-side-action-readiness"></a>
#### Client-side action readiness

Any UI that derives send eligibility from visible fields or a score remains pre-policy, regardless of AI features. The server must own the decision.

<a id="what-should-be-built-next"></a>
### What should be built next

<a id="workstream-semantic-event-and-continuity-grammar-layer"></a>
#### 1. Workstream, semantic-event, and continuity-grammar layer

Create a domain service that gives each durable course of work an identity, goal, attention claim, state, accountable/current/next actors, next condition, policy class, evidence status, effect, acquisition/resume point, and provenance references. Introduce typed events for actor transitions, decisions, blockers, waiting triggers, policy changes, evidence changes, external effects, and verification. Project those records through one canonical continuity grammar.

This is the foundation. Building cards first would create presentation debt and duplicate logic.

<a id="workstream-acquisition-and-re-entry-envelope"></a>
#### 2. Workstream acquisition and re-entry envelope

Define a server-side orientation envelope returned whenever focus enters a workstream, including product open, rapid thread switch, notification arrival, inherited handoff, and explicit resume:

- Prior goal and subgoal.

- Canonical continuity-grammar projection: goal, attention claim, state, delta, actor chain, authority, evidence, effect, and safe next action.

- Last trusted checkpoint.

- Restorable view and selected artifacts.

- Material deltas since that checkpoint.

- Current obligations and changed assumptions.

- Current policy/eligibility state and freshness.

- Safe recommended action and fallback.

- Privacy scope and expiry.

The envelope should be inspectable and versioned so orientation errors can be studied.

<a id="accountable-expression-and-policy-envelope"></a>
#### 3. Accountable expression and policy envelope

Every operator-visible machine claim, proposal, state change, and action should be attached to an accountable expression record containing:

- Expression identity, schema version, actor, accountable principal, time, and workstream association.

- Typed epistemic or action class: observation, retrieval, inference, prediction, proposal, approval, action, exception, or other versioned category.

- Evidence, provenance, freshness, contradiction state, and mode of knowing.

- Expected and actual consequence, including targets, scope, externality, limits, and reversibility.

- Policy-resolved authorization, scope, conditions, expiry, and required human transition.

- Lifecycle state and available review, pause, stop, correction, takeover, rollback, escalation, or compensation controls.

- Durable audit linkage to the authoritative identity, policy, evidence, tool, execution, and outcome records.

The UI renders this envelope; it does not invent or self-certify it. Identity, evidence, consequence, and authorization must be resolved by the relevant authoritative services.

<a id="human-decision-inbox"></a>
#### 4. Human Decision Inbox

Build the inbox around decision artifacts rather than agent outputs. Start with externally consequential outreach drafts and policy exceptions. Instrument evidence inspection, time, edits, rejection reasons, reversals, and downstream effects.

<a id="intervention-controls-and-receipts"></a>
#### 5. Intervention controls and receipts

For long-running enrichment or analysis, add scope, progress, pause/stop boundaries, partial-result handling, and effect receipts. Avoid a global “agent activity” page until real supervisory demand is observed.

<a id="control-state-adapter-and-incident-correlation"></a>
#### 6. Control-state adapter and incident correlation

At the current draft-only external ceiling, this can begin as a thin adapter: independently source monitoring mode, execution-environment identity, control decision, and containment state for privileged runs; link parent and child jobs; and create a control-incident object when one condition spans workstreams. Do not increase CRM agency beyond Level 5 until the required control posture is independently verified.

<a id="principal-instruction-and-tool-trust-layer"></a>
#### 7. Principal, instruction, and tool-trust layer

Add requester, delegator, accountable principal, approver, and memory-custodian roles to the workstream model. Bind each operative instruction to source, authority, trust, scope, goal version, and conflict state. Publish tool capability manifests for CRM read, write, send, enrichment, import, payment, and production-administration actions. This layer should prevent retrieved customer content or shared-channel participation from becoming action authority.

<a id="memory-recurrence-steering-and-resource-register"></a>
#### 8. Memory, recurrence, steering, and resource register

Create durable registries for machine-authored memory, proactive schedules, in-flight steering, and resource budgets. A sales or service agent should show which facts it remembers, whether they were stated or inferred, what recurring checks or follow-ups remain active, who owns them, what they may spend or send, and whether a redirect or cancellation reached all queued work.

<a id="composition-configuration-and-conformance-gate"></a>
#### 9. Composition, configuration, and conformance gate

Represent orchestrators, subagents, shared memory, credentials, aggregate limits, and termination propagation as one composed execution object. Bind runs and approvals to a configuration fingerprint. Before deployment, replay representative CRM workstreams and adversarial cases and issue a Conformance Evidence Card naming assessed configuration, method, exceptions, validity, and downstream assumptions.

<a id="what-should-deliberately-not-be-built"></a>
### What should deliberately not be built

- **Autonomous external sends** under the current product policy. The no-send boundary is a strategic trust and safety position, not a missing feature.

- **Chat as the home screen.** It would hide portfolio state, responsibility, and re-entry behind query formulation.

- **A separate AI dashboard.** Machine work should be represented within workstream state unless supervising runs becomes a distinct role.

- **Animated agent avatars or “thinking” theater.** They consume attention and blur functional accountability.

- **An opaque universal lead score as command-center order.** Use policy-aware priority reasons and domain factors.

- **Bulk consequential approval with weak evidence.** Batch only truly homogeneous low-variance decisions.

- **Browser-derived eligibility.** Keep authoritative calculations and execution checks central.

- **A full-screen capture memory system.** Persist structured intent-bearing context with privacy and expiry.

- **Notification growth loops.** Optimize for actionability and fewer necessary interruptions.

- High-agency execution justified only by a dashboard or human review queue. Level 6 requires independently enforced monitoring, access control, containment, and shutdown appropriate to the consequence.

<a id="three-most-important-product-experiments"></a>
### Three most important product experiments

<a id="experiment-1-rapid-portfolio-switch-comparison"></a>
#### Experiment 1 — Rapid portfolio-switch comparison

Question. Does the continuity grammar let supervisors enter agent threads and reach the next correct decision faster than traffic-light status or transcript-based views?

Design. Compare three prototypes using the same realistic portfolio: KPI/status-light dashboard, status-and-activity dashboard, and workstream continuity command center. Participants switch among 8–12 workstreams every 30–90 seconds; include unchanged work, material deltas, inherited handoffs, and one recommendation/permission conflict. Test 30–45 target users across sales, service, and operations.

Primary measures. TTO, TTDR, the decision-readiness vector, first-decision accuracy, false-ready rate, cross-workstream contamination, evidence openings, false urgency, and confidence calibration.

Decision rule. Advance the architecture only if the continuity treatment materially improves decision-ready speed and accuracy together, not merely preference or visual scan time.

<a id="experiment-2-longer-gap-qualification-re-entry"></a>
#### Experiment 2 — Longer-gap qualification re-entry

**Question.** Does structured re-entry reduce reconstruction and error after meaningful absence?

**Design.** Participants qualify an account, inspect evidence, and prepare a draft. Interrupt before a decision; introduce a customer reply, consent expiry, and completed agent enrichment during a four-hour or simulated next-day absence. Compare last-location restore with the re-entry envelope.

**Primary measures.** TTO, TTMR, identification of changed assumptions, attempted suppressed send, evidence revisits, and final decision quality.

**Decision rule.** The continuity treatment must reduce resumption time while eliminating or reducing stale-intent actions.

<a id="experiment-3-safety-boundary-and-oversight-simulation"></a>
#### Experiment 3 — Safety-boundary and oversight simulation

**Question.** Do users and architecture maintain control when recommendations conflict with policy or an agent run diverges?

Design. Include a high-scoring suppressed contact, stale eligibility, target mutation after approval, policy-service outage, repeated enrichment failure, scope expansion, monitoring degradation, attempted log suppression, an unlinked child job, and a prohibited sequence distributed across several workstreams. Test UI, API, bulk, agent-tool, control-service, and replay paths.

Primary measures. Policy bypasses; correct distinction among score, recommendation, permission, and control decision; monitoring and response recall; false-safe rate; intervention and detection-to-containment latency; approval-scope comprehension; recursive containment completeness; recovery success; cross-workstream incident comprehension; and audit completeness.

**Decision rule.** Zero unauthorized external sends or suppression bypasses; users must correctly explain why actions are unavailable and how to resolve legitimate errors.

<a id="experiment-4-semantics-policy-regression-and-shared-agent-authority"></a>
#### Experiment 4 — Semantics-policy regression and shared-agent authority

Change one material configuration variable at a time — requester role, instruction source, tool version, memory record, recurrence contract, subagent topology, policy, or UI reducer — and replay representative CRM trajectories. Include prompt injection in customer content, unauthorized channel requests, a poisoned memory, stale approval reuse, a revoked recurring follow-up, and a parent stop with surviving child work. Compare baseline and WCD treatments on false-ready rate, authority errors, memory contamination, steering propagation, configuration attribution, and conformance-evidence validity.

<a id="manifesto"></a>
### 20. Manifesto

1\. Design every switch, not only the start or long return. Durable work deserves a deliberate path into the next decision.

2\. **Let the workstream outlive the page.** Purpose, responsibility, and state must survive navigation and sessions.

3\. **Show what changed in meaning.** Raw activity is evidence, not orientation.

4\. **Separate action, waiting, blockage, and review.** Different conditions demand different attention.

5\. **Name the owner, current actor, and next actor.** Delegation must never erase accountability.

6\. **Spend attention by consequence.** Routine machine progress should be quiet; justified exceptions should be clear.

7\. **Keep recommendation, confidence, and permission distinct.** A score cannot authorize an action.

8\. **Make machine work inspectable, interruptible, and recoverable.** Opaque autonomy is not supervision.

9\. **Place evidence and uncertainty where decisions occur.** Trust should be calibrated, not maximized.

10\. **Enforce safety beneath the interface.** Warnings explain boundaries; architecture maintains them.

11\. **Prefer bounded agency to theatrical autonomy.** Capability does not require authority.

12\. Measure switch-in orientation, decision readiness, and control. Throughput without understanding is not success.

13\. Give humans and agents a shared continuity grammar. Equivalent situations should have equivalent meanings across workstreams, surfaces, APIs, and assistive output.

14\. Require accountable expression at the operated surface. Machine claims and actions must be typed, attributable, evidenced, bounded, policy-resolved, and open to proportionate intervention.

15\. Treat control state as operating state. Monitoring, gating, containment, and residual effects must be independently sourced and legible at switch-in.

16\. Do not make a person the only machine-speed safeguard. Automate control below the interface; reserve human judgment for differentiated decisions.

<a id="design-review-checklist"></a>
### 21. Design-review checklist

Use this checklist during critique. A “No” on a safety, ownership, focus-transition, or re-entry item is a release concern, not a cosmetic backlog item.

<a id="focus-transition-re-entry-and-context"></a>
### Focus transition, re-entry, and context

- \[ \] Can a user entering any workstream — after seconds or days — state the goal, material delta, and unfinished subgoal?

- \[ \] Does every workstream render the same continuity-grammar slots in the same semantic order?

- \[ \] Can the exact useful context—object, selection, filters, evidence, and resume point—be restored when valid?

- \[ \] Does the system identify material changes since the last trusted inspection and explain whether they invalidate prior intent?

- \[ \] Is stale, deleted, inaccessible, or policy-invalid context handled safely?

- \[ \] Can saved context be scoped, expired, cleared, and protected on shared devices?

<a id="continuity-grammar"></a>
### Continuity grammar

- \[ \] Can a person identify goal, state, material delta, actor chain, authority, evidence, effect, and safe next action without opening raw history?

- \[ \] Can the highest-consequence human obligation be detected without combining several subtle state, authority, or consequence encodings?

- \[ \] Are attention claims and state conveyed redundantly through text and structure, with color, icons, and badges acting as aliases for explicit semantics rather than the only encoding?

- \[ \] Does an operational diff name the affected field, baseline, before/after values, source, and consequence?

- \[ \] Do visual, text, voice, screen-reader, API, and log projections remain semantically equivalent?

- \[ \] Are omitted or unknown authority, evidence, and consequence states explicit rather than implied favorable?

<a id="state-responsibility-and-authority"></a>
### State, responsibility, and authority

- \[ \] Are operational state, actor state, authorization, evidence status, and consequence represented as separate dimensions?

- \[ \] Does every durable workstream have an accountable owner?

- \[ \] Are the current actor and next actor visible and separate from ownership?

- \[ \] Do waiting and blocked states each name a trigger or cause, an owner or resolver, and an expected window or escalation path?

- \[ \] Is each workstream counted canonically rather than duplicated across sections?

<a id="attention-and-hierarchy"></a>
### Attention and hierarchy

- \[ \] Can a user identify what needs attention within approximately five seconds?

- \[ \] Has exception finding been tested across realistic portfolio sizes, density, and target-absent conditions?

- \[ \] When many workstreams claim attention simultaneously, does the surface enter incident, batch, or grouped-triage mode rather than making every item salient?

- \[ \] Is there one dominant safe next action with a human-readable reason?

- \[ \] Does prominence reflect urgency, consequence, human exclusivity, dependency, and change rather than activity volume, keeping routine machine progress and healthy status peripheral?

- \[ \] Are alerts deduplicated, actionable, and tied to a reconstructed destination?

- \[ \] Does the surface remain useful and calm when no agent is active?

<a id="human-oversight"></a>
### Human oversight

- \[ \] Is the machine’s objective, scope, current phase, and authority visible at the appropriate agency level?

- \[ \] Can the human inspect evidence, provenance, uncertainty, and alternatives at the decision point?

- \[ \] Is approval scoped to an exact action, target, payload, and time?

- \[ \] Can the user pause, stop, narrow, redirect, correct, or escalate where timing permits?

- \[ \] Are partial results, failures, residual effects, and recovery choices explicit?

- \[ \] Has review fatigue and rubber-stamping risk been evaluated?

- \[ \] Are machine-speed effects intercepted or contained by automated controls rather than depending on universal real-time human review?

- \[ \] Can the operator distinguish committed, prevented, contained, and residual effects?

<a id="agency-and-safety"></a>
### Agency and safety

- \[ \] Are machine state, recommendation, confidence, and permission represented separately?

- \[ \] Are consequential and external actions visually and architecturally distinct from local preparation?

- \[ \] Is the lowest sufficient agency level used?

- \[ \] Are scope, tools, cost/time limits, exclusions, and authority expiry enforced?

- \[ \] Are suppression, consent, eligibility, and role policy evaluated centrally and rechecked at execution rather than trusting browser state or stale approval?

- \[ \] Does the system fail closed when critical permission cannot be established?

- \[ \] Can prohibited actions be blocked across UI, API, bulk, automation, replay, and agent tools?

- \[ \] Are undo and reversibility claims accurate, with non-reversible downstream effects disclosed?

- \[ \] Does audit history establish actor, authority, evidence, effect, intervention, and verification without exposing secrets?

- \[ \] Are operator-visible machine expressions tied to a stable actor, accountable principal, workstream, time, type, and lifecycle state?

- \[ \] Are observations, retrieved facts, inferences, predictions, assumptions, proposals, approvals, and completed actions distinguishable?

- \[ \] Do monitoring, logging, policy, isolation, or shutdown degradations lower agency or fail closed according to consequence?

- \[ \] Are execution-environment identity and parent/child run lineage preserved across handoff, retry, pause, and shutdown?

- \[ \] Can intervention select and verify a containment radius, including child jobs, credentials, and residual effects?

- \[ \] Can one control incident correlate behavior across several workstreams without duplicating the underlying condition?

- \[ \] Can the acting agent neither modify nor become the sole authority for monitoring, evidence, authorization, effect, or containment state?

<a id="instruction-identity-context-and-memory"></a>
### Instruction, identity, context, and memory

\[ \] Does every operative instruction have a source, authority level, trust class, scope, goal version, lifecycle, and conflict rule?

\[ \] Can retrieved content, tool output, or a subagent summary alter behavior only through an explicit authorized promotion boundary?

\[ \] Are requester, delegator, accountable principal, approver, actor instance, and credential subject represented separately when they differ?

\[ \] Are credentials purpose-bound to workstream, target, action class, audience, data scope, and expiry?

\[ \] Does context assembly record included and omitted sources, selection or compaction method, contradiction, coverage, and material loss?

\[ \] Are machine-authored memory writes typed, sourced, scoped, reviewable, expirable, conflict-aware, and revocable?

\[ \] Does a consequential memory mutation produce a visible delta and invalidate affected approvals or assumptions?

<a id="recurrence-steering-composition-and-resources"></a>
### Recurrence, steering, composition, and resources

\[ \] Does every proactive or scheduled agent have a recurrence contract with owner, trigger, no-op behavior, effect ceiling, quiet hours, budget, expiry, and stop condition?

\[ \] Can users distinguish steering requested, acknowledged, enforced, ineffective, and residual states?

\[ \] Do steering changes propagate to queued actions, subagents, recurrence, memory, approvals, and boundary previews?

\[ \] Does subdelegation attenuate tools, credentials, context, lifetime, and effect authority by default?

\[ \] Are aggregate cost, rate, message, data, and externality limits enforced across the entire composition?

\[ \] Can a parent pause, revoke, isolate, or shut down child work with explicit residual accounting?

\[ \] Does the tool manifest expose untrusted input, sensitive access, state change, external communication, target binding, reversibility, and confirmation class?

<a id="configuration-conformity-and-release-change"></a>
### Configuration, conformity, and release change

\[ \] Is every consequential run, decision, and effect bound to a reproducible configuration fingerprint?

\[ \] Does a conformance claim name the assessed object, configuration, responsible party, method, corpus, validity, exceptions, and downstream assumptions?

\[ \] Is component evidence prevented from masquerading as composed-system evidence?

\[ \] Do material model, prompt, tool, permission, memory, orchestration, policy, reducer, or UI changes trigger representative replay?

\[ \] Does replay measure semantic omissions, authority confusion, false readiness, contamination, steering, approval invalidation, effect mismatch, and handback failure?

\[ \] Are environment-fidelity error, input-distribution shift, unknown-behavior findings, waivers, and evidence expiry visible?

\[ \] Are profile version, compatibility, unknown-field handling, migration, aliases, and deprecation explicit?

<a id="accessibility-and-evaluation"></a>
### Accessibility and evaluation

- \[ \] Do labels, structure, and controls remain understandable without color, motion, or icon recognition?

- \[ \] Does keyboard and screen-reader order match semantic priority?

- \[ \] Are dynamic progress updates proportionate and non-disruptive?

- \[ \] Does the narrow viewport preserve obligations, actors, and consequence?

- \[ \] Has the design passed a rapid portfolio-switch study, a five-second orientation test, and a longer-gap interrupted-task study?

- \[ \] Are visual-search findings kept distinct from modality-specific tests for screen-reader, voice, switch, and magnification users?

- \[ \] Are continuity metrics (TTO, TTDR, TTMR, state accuracy, cross-workstream contamination, wrong-actor actions, blocker latency, alert actionability, safety incidents) and control metrics (independent-monitoring and synchronous-response coverage and recall, detection-to-containment latency, recursive containment completeness, control-state identification, false-safe degradation) instrumented?

<a id="open-research-questions"></a>
## Open research questions

<a id="category-validity-and-cognition"></a>
### Category validity and cognition

1\. Does a named discipline, and a minimum set of continuity primitives, improve design and engineering outcomes beyond existing UX, HCI, and safety methods applied independently?

2\. Which continuity-grammar slots most reduce switch-in error, and how should the grammar compress or expand across timescales from seconds to months?

3\. When do generated summaries improve orientation versus introduce omission, framing, or overconfidence risk?

4\. Does “workstream” generalize outside enterprise settings, and what domain translations preserve the model?

<a id="portfolio-supervision-and-attention"></a>
### Portfolio supervision and attention

5\. How many concurrent workstreams can users supervise with state-separated views, and which attention and priority factors generalize across domains?

6\. What ranking explanation improves correction without exposing manipulable rules or inflating urgency from a shared root blocker?

<a id="humanai-oversight"></a>
### Human–AI oversight

7\. At what agency levels do plans, intermediate steps, or traces materially improve control, and how much provenance is sufficient for routine versus high-consequence review when calibrated probabilities are unavailable?

8\. Which interface patterns reduce automation bias without imposing unsustainable review cost?

9\. How can review fatigue be detected without becoming worker surveillance, and when can standing authority safely replace item-by-item approval?

<a id="safety-recovery-and-architecture"></a>
### Safety, recovery, and architecture

10\. How should approval artifacts be scoped and invalidated across mutable payloads, recipients, and policies?

11\. What event and semantic models support inspectable “meaningful change” without depending on unverifiable model summaries?

12\. What is the most effective fail-closed and recovery experience during policy-service degradation or when an external effect is only compensable, not reversible?

<a id="accessibility-market-and-longitudinal-validity"></a>
### Accessibility, market, and longitudinal validity

13\. How should orientation testing translate to screen-reader, voice, switch, and cognitive-accessibility contexts without recasting modality-specific results as visual findings?

14\. Will agent products converge on durable workstream portfolios, and do organizations add agents faster than they add monitoring, exception staffing, and recovery?

15\. Does strong workstream continuity measurably reduce shadow notes, tab hoarding, and duplicate chats, and what new failure modes appear when the continuity layer itself generates incorrect deltas?

<a id="accountable-expression-standards-and-adversarial-control"></a>
### Accountable expression, standards, and adversarial control

16\. What is the smallest shared taxonomy supporting both accountable machine expression and a fast human grammar, and which fields must be verified by identity, evidence, policy, and execution services rather than supplied by the agent?

17\. How should semantic equivalence be tested across visual, text, voice, screen-reader, log, API, and cross-agent (AG-UI, ACP, A2UI) projections, and which versioning rules prevent silent reinterpretation of historical records?

18\. What governance and conformance model prevents an accountable-expression standard from becoming vendor capture or compliance theater, and which configuration changes must automatically invalidate upstream conformance evidence?

19\. Which multi-principal, memory, recurrence, steering, and delegation-attenuation semantics are necessary across domains without making simple collaboration burdensome, and does the untrusted-input / sensitive-access / external-effect triad generalize beyond current agent products?

20\. How should operator-facing control posture map to agency ceilings and fail-closed thresholds, which monitoring and containment facts must be visible at each level, and can oversight remain meaningful when automated monitors mediate most synchronous control?

<a id="research-assumptions-and-evidence-labels"></a>
## Research assumptions and evidence labels

- Current-state cutoff: Public product documentation and official materials for the original market audit were observed on 20 June 2026. Protocol and standards sources R55–R68 and perception sources R69–R73 were added or rechecked on 21 June 2026. AI-control sources R74–R75 and semantics-policy sources R76–R94 were added or rechecked on 23 June 2026. Product availability, interfaces, specifications, and security practices can change after those dates.

- **No direct product access claim:** Where the audit relies on official documentation or demonstrations rather than hands-on authenticated use, the text says “documented” or “positioned.”

- **Vendor evidence:** Workforce statistics from Microsoft, Okta, Asana, and similar firms are treated as descriptive vendor research, not neutral causal evidence.

- **Legal scope:** The naming review is a basic collision audit, not trademark counsel. The safety doctrine is product-design and architecture guidance, not legal advice.

- **Evidence labels:** Cognitive and human-factors findings are described as established where supported by peer-reviewed research. Market-level category claims are reasonable inference. Principles, patterns, metrics, and models are original design proposals requiring validation.

- Primary-timescale evidence: Working-sphere, multitasking-continuum, interruption, and developer-resumption studies directly support frequent switching, short interruption, and cue-based reconstruction. [R1, R3–R6, R62–R64] The proposed 30–90 second multi-agent portfolio test is a new application of that evidence and still requires direct validation.

- Perceptual-transfer boundary: Classic visual-search research supports rapid guidance by low-level visual features in controlled displays; it does not establish preattentive comprehension of semantic workstream slots. Workstream Continuity Design’s mapping of a human-attention claim onto a salient portfolio cue is a design hypothesis. Set-size response functions are operational evidence of search efficiency, not proof of a discrete preattentive stage. [R69–R73]

- Timescale extrapolation: Most cited interruption and goal-memory studies examine seconds-to-minutes conditions. Version 0.5 therefore treats rapid switching and short interruption as the primary empirical case. Applying the framework to returns after hours, days, or months remains a reasoned design extrapolation; the 4-hour and 48-hour protocols are validation requirements, not inherited thresholds.

- AI-control transfer boundary: R74 is a 22 June 2026 roadmap for internal frontier-agent deployments. Its threat model is conservative and substantially theoretical; its tier assignments, assurance methods, and mitigation coverage remain provisional. R75 reports internal implementation experience but is vendor-authored. WCD uses these sources to define an adjacent security boundary, control-state requirements, and adversarial evaluation cases — not as evidence that the continuity grammar improves outcomes.

- Semantic-extension boundary: The extension profiles are standards proposals derived from current operational and security problems. Their field sets, taxonomies, and conformance thresholds require implementation and cross-domain validation; citations support the problem and design inputs, not the claim that WCD’s exact profile suite is established.

- Conformity-transfer boundary: Appia and OpenAI materials support modular requirements, assessment enablement, and reusable evidence. WCD’s configuration fingerprint, Conformance Evidence Card, and invalidation rules are original synthesis and must not be represented as Appia requirements. [R76, R77]

- Deployment-simulation boundary: OpenAI’s deployment-simulation work supports realistic predeployment replay and explicit environment-fidelity and distribution-shift limits. WCD’s semantic regression metrics and release gate are an application of that method, not a validated predictor of all production failures. [R78]

- Shared-agent and memory boundary: Current products demonstrate shared agents, scoped memory, proactive work, and recurrence. They do not establish the correctness of WCD’s multi-principal roles, Memory Mutation Record, or Recurrence Contract. [R79, R80]

- Security-pattern boundary: Identity, MCP, Rule-of-Two, containment, and instruction-hierarchy sources are security inputs. The WCD policy translates them into operator-facing semantics and conformance tests; it does not replace authentication, authorization, isolation, monitoring, or incident response. [R83–R88, R91, R92]

<a id="source-appendix"></a>
## Source appendix

<a id="a.-interruption-task-continuity-and-cognition"></a>
### A. Interruption, task continuity, and cognition

**[R1]** González, Victor M., and Gloria Mark. “Constant, Constant, Multi-tasking Craziness: Managing Multiple Working Spheres.” *Proceedings of CHI 2004*, 113–120. Association for Computing Machinery, 2004. [DOI record](https://dl.acm.org/doi/10.1145/985692.985707).

**[R2]** Mark, Gloria, Daniela Gudith, and Ulrich Klocke. “The Cost of Interrupted Work: More Speed and Stress.” *Proceedings of CHI 2008*, 107–110. Association for Computing Machinery, 2008. [DOI record](https://dl.acm.org/doi/10.1145/1357054.1357072).

**[R3]** Trafton, J. Gregory, Erik M. Altmann, Derek P. Brock, and Farilee E. Mintz. “Preparing to Resume an Interrupted Task: Effects of Prospective Goal Encoding and Retrospective Rehearsal.” *International Journal of Human-Computer Studies* 58, no. 5 (2003): 583–603. [DOI: 10.1016/S1071-5819(03)00023-5](https://doi.org/10.1016/S1071-5819%2803%2900023-5)

**[R4]** Salvucci, Dario D. “On Reconstruction of Task Context after Interruption.” *Proceedings of CHI 2010*, 89–92. Association for Computing Machinery, 2010. [DOI record](https://dl.acm.org/doi/10.1145/1753326.1753341).

**[R5]** Altmann, Erik M., and J. Gregory Trafton. “Memory for Goals: An Activation-Based Model.” *Cognitive Science* 26, no. 1 (2002): 39–83. [DOI record](https://doi.org/10.1207/s15516709cog2601_2).

**[R6]** Czerwinski, Mary, Eric Horvitz, and Susan Wilhite. “A Diary Study of Task Switching and Interruptions.” *Proceedings of CHI 2004*, 175–182. Association for Computing Machinery, 2004. [DOI record](https://dl.acm.org/doi/10.1145/985692.985715).

**[R12]** Sweller, John. “Cognitive Load During Problem Solving: Effects on Learning.” *Cognitive Science* 12, no. 2 (1988): 257–285. [DOI record](https://doi.org/10.1207/s15516709cog1202_4).

[R62] Parnin, Chris, and Spencer Rugaber. “Resumption Strategies for Interrupted Programming Tasks.” Software Quality Journal 19, no. 1 (2011): 5–34. DOI: 10.1007/s11219-010-9104-9.

[R63] Parnin, Chris, and Robert DeLine. “Evaluating Cues for Resuming Interrupted Programming Tasks.” Proceedings of CHI 2010, 93–102. Association for Computing Machinery, 2010. DOI: 10.1145/1753326.1753342.

[R64] Salvucci, Dario D., Niels A. Taatgen, and Jelmer P. Borst. “Toward a Unified Theory of the Multitasking Continuum: From Concurrent Performance to Task Switching, Interruption, and Resumption.” Proceedings of CHI 2009, 1819–1828. Association for Computing Machinery, 2009. DOI: 10.1145/1518701.1518981.

<a id="b.-situation-awareness-supervision-automation-and-distributed-cognition"></a>
### B. Situation awareness, supervision, automation, and distributed cognition

**[R7]** Endsley, Mica R. “Toward a Theory of Situation Awareness in Dynamic Systems.” *Human Factors* 37, no. 1 (1995): 32–64. [DOI record](https://doi.org/10.1518/001872095779049543).

**[R8]** Bainbridge, Lisanne. “Ironies of Automation.” *Automatica* 19, no. 6 (1983): 775–779. [DOI: 10.1016/0005-1098(83)90046-8](https://doi.org/10.1016/0005-1098%2883%2990046-8)

**[R9]** Parasuraman, Raja, Thomas B. Sheridan, and Christopher D. Wickens. “A Model for Types and Levels of Human Interaction with Automation.” *IEEE Transactions on Systems, Man, and Cybernetics—Part A* 30, no. 3 (2000): 286–297. [DOI record](https://doi.org/10.1109/3468.844354).

**[R10]** Lee, John D., and Katrina A. See. “Trust in Automation: Designing for Appropriate Reliance.” *Human Factors* 46, no. 1 (2004): 50–80. [DOI record](https://doi.org/10.1518/hfes.46.1.50_30392).

**[R11]** Hollan, James, Edwin Hutchins, and David Kirsh. “Distributed Cognition: Toward a New Foundation for Human-Computer Interaction Research.” *ACM Transactions on Computer-Human Interaction* 7, no. 2 (2000): 174–196. [DOI record](https://dl.acm.org/doi/10.1145/353485.353487).

**[R13]** Weiser, Mark, and John Seely Brown. “The Coming Age of Calm Technology.” Xerox PARC, 1996. [Archived author text](https://www.ubiq.com/hypertext/weiser/acmfuture2endnote.htm).

**[R14]** Horvitz, Eric. “Principles of Mixed-Initiative User Interfaces.” *Proceedings of CHI 1999*, 159–166. Association for Computing Machinery, 1999. [DOI record](https://dl.acm.org/doi/10.1145/302979.303030).

**[R15]** Amershi, Saleema, Dan Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi, Penny Collisson, Jina Suh, et al. “Guidelines for Human-AI Interaction.” *Proceedings of CHI 2019*. Association for Computing Machinery, 2019. [Microsoft Research publication record](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/).

**[R16]** Google People + AI Research. “Explainability + Trust.” *People + AI Guidebook*. Current web edition observed 20 June 2026. [Guidebook chapter](https://pair.withgoogle.com/chapter/explainability-trust/).

<a id="c.-governance-standards-accessibility-and-usability"></a>
### C. Governance, standards, accessibility, and usability

**[R17]** National Institute of Standards and Technology. *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1. January 2023. [Official framework page](https://www.nist.gov/itl/ai-risk-management-framework).

**[R18]** National Institute of Standards and Technology. “New Report Challenges Monitoring of Deployed AI Systems.” 2026. Official summary and report access observed 20 June 2026. [NIST release](https://www.nist.gov/news-events/news/2026/03/new-report-challenges-monitoring-deployed-ai-systems).

**[R19]** European Union. Regulation (EU) 2024/1689, Article 14, “Human Oversight.” Entered into force 1 August 2024; official consolidated presentation observed 20 June 2026. [EU AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14).

**[R20]** Nielsen Norman Group. “10 Usability Heuristics for User Interface Design.” Originally published 1994; current article observed 20 June 2026. [Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

[R65] Blackwell, Alan F., Carol Britton, Anna L. Cox, Thomas R. G. Green, Corin Gurr, Gautam Kadoda, Maria Kutar, et al. “Cognitive Dimensions of Notations: Design Tools for Cognitive Technology.” In Cognitive Technology 2001, Lecture Notes in Artificial Intelligence 2117, 325–341. Springer-Verlag, 2001.

**[R21]** World Wide Web Consortium. *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 5 October 2023. [Standard](https://www.w3.org/TR/WCAG22/).

**[R50]** International Organization for Standardization. *ISO 9241-11:2018—Ergonomics of Human-System Interaction: Usability: Definitions and Concepts*. 2018. [Official abstract](https://www.iso.org/standard/63500.html).

<a id="d.-contemporary-work-environment-evidence"></a>
### D. Contemporary work environment evidence

**[R22]** Microsoft WorkLab. “Breaking Down the Infinite Workday.” 2025. Vendor research with described telemetry and survey methods; observed 20 June 2026. [Research article](https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday).

**[R23]** Okta. *Businesses at Work 2025*. 2025. Vendor dataset based on customer application usage; methodology should be read with the report. [Report overview](https://www.okta.com/newsroom/articles/businesses-at-work-2025/).

**[R24]** Asana. “Why ‘Work About Work’ Is Bad for Productivity.” Current research synthesis observed 20 June 2026. Vendor research; underlying survey scope and definitions vary by edition. [Research article](https://asana.com/resources/why-work-about-work-is-bad).

**[R25]** Microsoft WorkLab. “Agents, Human Agency, and the Opportunity for Every Organization.” *2026 Work Trend Index Annual Report*, 2026. Vendor-sponsored research observed 20 June 2026. [Report](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization).

<a id="e.-current-agent-and-operational-product-observations"></a>
### E. Current agent and operational-product observations

Unless otherwise stated, entries R26–R41 are official vendor documentation or announcements observed on **20 June 2026**. They establish documented product behavior and positioning, not independent usability, safety, adoption, or reliability findings.

**[R26]** GitHub. “About GitHub Copilot Coding Agent.” Current product documentation observed 20 June 2026. [Official documentation](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent).

**[R27]** Cursor. “Cursor 3.0.” Product announcement, 2026; observed 20 June 2026. [Official announcement](https://cursor.com/blog/cursor-3).

**[R28]** OpenAI. “Introducing ChatGPT Agent.” 17 July 2025; product state and supporting documentation rechecked 20 June 2026. [Official announcement](https://openai.com/index/introducing-chatgpt-agent/).

**[R29]** OpenAI. “Introducing Codex.” 16 May 2025; current Codex product materials rechecked 20 June 2026. [Official announcement](https://openai.com/index/introducing-codex/). [Current product page](https://openai.com/codex/).

**[R30]** ServiceNow. “AI Control Tower.” Current product page observed 20 June 2026. [Official product page](https://www.servicenow.com/products/ai-control-tower.html).

**[R31]** UiPath. “Maestro Overview.” Current Automation Cloud documentation observed 20 June 2026. [Official documentation](https://docs.uipath.com/maestro/automation-cloud/latest/user-guide/overview).

**[R32]** Microsoft. “Phishing Triage Agent in Microsoft Defender.” Current Microsoft Defender XDR documentation observed 20 June 2026. [Official documentation](https://learn.microsoft.com/en-us/defender-xdr/phishing-triage-agent).

**[R33]** Microsoft. “Azure SRE Agent Overview.” Current Azure documentation observed 20 June 2026. [Official documentation](https://learn.microsoft.com/en-us/azure/sre-agent/overview).

**[R34]** Salesforce. “Monitor Service Agents.” Current Salesforce Help documentation observed 20 June 2026. [Official documentation](https://help.salesforce.com/s/articleView?id=service.omnichannel_monitor_service_agents.htm&language=en_US&type=5).

**[R35]** Asana. “Winter Release 2026.” Product announcement describing AI Teammates and related workflow capabilities; observed 20 June 2026. [Official announcement](https://asana.com/inside-asana/winter-release-2026).

**[R36]** Atlassian. “Rovo: AI-Powered Apps for Teamwork.” Current product page observed 20 June 2026. [Official product page](https://www.atlassian.com/software/rovo).

**[R37]** Intercom. “Fin AI Agent.” Current product page and linked documentation observed 20 June 2026. [Official product page](https://www.intercom.com/fin).

**[R38]** HubSpot. “Breeze AI Agents.” Current product page observed 20 June 2026. [Official product page](https://www.hubspot.com/products/artificial-intelligence/breeze-ai-agents).

**[R39]** Adobe. “About Firefly Boards.” Updated 2 February 2026; observed 20 June 2026. [Official documentation](https://helpx.adobe.com/firefly/web/create-mood-boards/firefly-boards/about-firefly-boards.html).

**[R40]** Google DeepMind. “Our Vision for Building a Universal AI Assistant.” 20 May 2025; includes Project Mariner parallel-task positioning. Observed 20 June 2026. [Official article](https://deepmind.google/blog/our-vision-for-building-a-universal-ai-assistant/).

**[R41]** Palo Alto Networks. “Cortex AgentiX—Build, Deploy and Govern the Agentic Workforce.” Current product page and May 2026 release notes observed 20 June 2026. [Official product page](https://www.paloaltonetworks.com/cortex/agentix). [Release notes](https://docs-cortex.paloaltonetworks.com/r/Cortex-AgentiX/Cortex-AgentiX-Release-Notes).

<a id="f.-instructive-failures-safety-incidents-and-privacy-redesigns"></a>
### F. Instructive failures, safety incidents, and privacy redesigns

**[R42]** *Moffatt v. Air Canada*, 2024 BCCRT 149. Civil Resolution Tribunal of British Columbia, 14 February 2024. Primary legal decision concerning information supplied by Air Canada’s chatbot. [CanLII decision](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html).

**[R43]** Office of the New York City Comptroller. *Audit Report on the Development and Implementation of the MyCity Portal*. Final report dated 30 December 2025 and published in 2026. [Official audit PDF](https://comptroller.nyc.gov/wp-content/uploads/2026/02/MyCity-System-Development-Public-Final-report-12-30-25-final-copy.pdf).

**[R44]** Replit database incident source set, July 2025: public statement by Replit CEO Amjad Masad; contemporaneous reporting; and Replit’s subsequent defense-in-depth account. The incident record is public but incomplete, so this bible draws only architecture-level lessons. [CEO statement](https://x.com/amasad/status/1946986468586721478). [Contemporaneous report](https://www.tomshardware.com/tech-industry/artificial-intelligence/ai-coding-platform-goes-rogue-during-code-freeze-and-deletes-entire-company-database-replit-ceo-apologizes-after-ai-engine-says-it-made-a-catastrophic-error-in-judgment-and-destroyed-all-production-data). [Official safety follow-up](https://replit.com/blog/defense-in-depth-how-replit-secures-every-layer-of-the-vibe-coding-stack).

**[R45]** Microsoft. “Update on Recall Security and Privacy Architecture.” 27 September 2024. [Official architecture update](https://blogs.windows.com/windowsexperience/2024/09/27/update-on-recall-security-and-privacy-architecture/).

**[R46]** Microsoft Support. “Retrace Your Steps with Recall” and “Privacy and Control over Your Recall Experience.” Current support documentation observed 20 June 2026. [Recall support](https://support.microsoft.com/en-us/windows/retrace-your-steps-with-recall-aa03f8a0-a78b-4b3e-b0a1-2eb8ac48701c). [Privacy controls](https://support.microsoft.com/en-us/windows/privacy-and-control-over-your-recall-experience-d404f672-7647-41e5-886c-a3c59680af15).

<a id="g.-operational-lineage-histories-task-environments-and-incident-systems"></a>
### G. Operational lineage: histories, task environments, and incident systems

**[R47]** Fowler, Martin. “Event Sourcing.” 12 December 2005; current article observed 20 June 2026. [Article](https://martinfowler.com/eaaDev/EventSourcing.html).

**[R48]** Robertson, George, Eric Horvitz, Mary Czerwinski, Patrick Baudisch, Dugald Hutchings, Brian Meyers, Daniel Robbins, and Greg Smith. “Scalable Fabric: Flexible Task Management.” *Proceedings of Advanced Visual Interfaces 2004*, 85–89. [Microsoft Research record](https://www.microsoft.com/en-us/research/publication/scalable-fabric-flexible-representation-task-management/).

**[R49]** Google. “Incident Response.” *The Site Reliability Workbook*, 2018; current online edition observed 20 June 2026. [Chapter](https://sre.google/workbook/incident-response/).

<a id="h.-naming-and-collision-audit"></a>
### H. Naming and collision audit

These sources establish semantic and search collisions; they are not evidence for the substantive design doctrine.

**[R51]** Interaction Design Foundation. “Law of Continuity.” Current design-education article observed 20 June 2026. [Topic page](https://www.interaction-design.org/literature/topics/law-of-continuity).

**[R52]** Apple. “Continuity.” Current product-family page observed 20 June 2026; illustrates established use for cross-device experiences and handoff. [Official page](https://www.apple.com/macos/continuity/).

**[R53]** Deceptive Patterns. “Forced Continuity.” Current pattern definition observed 20 June 2026; documents the established dark-pattern meaning. [Pattern archive](https://old.deceptive.design/forced_continuity/).

**[R54]** Continuity2. “Making Business Continuity Easier with a UX Approach.” Business-continuity product discourse observed 20 June 2026. [Article](https://continuity2.com/blog/making-business-continuity-easier-a-ux-approach).

<a id="i.-agent-communication-interoperability-provenance-and-semantic-envelopes"></a>
### I. Agent communication, interoperability, provenance, and semantic envelopes

[R55] Finin, Tim, Richard Fritzson, Don McKay, and Robin McEntire. “KQML as an Agent Communication Language.” Proceedings of the Third International Conference on Information and Knowledge Management, 1994. DOI: 10.1145/191246.191322.

[R56] Foundation for Intelligent Physical Agents. FIPA Communicative Act Library Specification. Specification SC00037J, 3 December 2002. Historical agent-communication standard.

[R57] A2A Project. Agent2Agent Protocol Specification. Current official specification observed 21 June 2026. Defines interoperable agents, messages, tasks, artifacts, task states, and asynchronous interaction. [Official A2A specification](https://a2a-protocol.org/latest/specification/)

[R58] Model Context Protocol. Specification, 2025-11-25. Current official specification observed 21 June 2026. Defines client-server lifecycle and server primitives including resources, prompts, and tools. [Official MCP specification](https://modelcontextprotocol.io/specification/2025-11-25)

[R59] Cloud Native Computing Foundation. CloudEvents Specification. Current official specification observed 21 June 2026. Defines common formats and metadata for interoperable event data. [Official CloudEvents repository](https://github.com/cloudevents/spec)

[R60] World Wide Web Consortium. PROV-O: The PROV Ontology. W3C Recommendation, 30 April 2013. Defines interoperable classes and properties for representing and exchanging provenance. [W3C Recommendation](https://www.w3.org/TR/prov-o/)

[R61] OpenTelemetry. Semantic Conventions. Current official specification observed 21 June 2026. Defines common keys and values for describing operations and data in traces, metrics, logs, profiles, and resources. [Official semantic conventions](https://opentelemetry.io/docs/specs/otel/semantic-conventions/)

[R66] Agent User Interaction Protocol. “Events” and “State Management.” Current official documentation observed 21 June 2026. Defines structured event streams, complete state snapshots, and incremental JSON Patch state deltas for agent frontends.

[R67] Agent Client Protocol. “Introduction,” “Schema,” and “Tool Calls,” Version 1. Current official documentation observed 21 June 2026. Standardizes editor-agent communication, plans, diffs, session updates, and permission requests.

[R68] Google A2UI Team. “Introducing A2UI: An Open Project for Agent-Driven Interfaces.” Google Developers Blog, 15 December 2025. Describes a declarative, updateable format for agent-generated interfaces rendered through trusted client components.

<a id="j.-visual-search-preattentive-guidance-and-perceptual-encoding"></a>
### J. Visual search, preattentive guidance, and perceptual encoding

[R69] Treisman, Anne M., and Garry Gelade. “A Feature-Integration Theory of Attention.” Cognitive Psychology 12, no. 1 (1980): 97–136. DOI: 10.1016/0010-0285(80)90005-5.

[R70] Healey, Christopher G., and James T. Enns. “Attention and Visual Memory in Visualization and Computer Graphics.” IEEE Transactions on Visualization and Computer Graphics 18, no. 7 (2012): 1170–1188. DOI: 10.1109/TVCG.2011.127.

[R71] Ware, Colin. Information Visualization: Perception for Design. 3rd ed. Morgan Kaufmann, 2012. ISBN: 978-0-12-381464-7.

[R72] Wolfe, Jeremy M. “Guided Search 2.0: A Revised Model of Visual Search.” Psychonomic Bulletin & Review 1, no. 2 (1994): 202–238. DOI: 10.3758/BF03200774.

[R73] Duncan, John, and Glyn W. Humphreys. “Visual Search and Stimulus Similarity.” Psychological Review 96, no. 3 (1989): 433–458. DOI: 10.1037/0033-295X.96.3.433.

<a id="k.-ai-control-and-adversarial-agent-security"></a>
### K. AI control and adversarial-agent security

**[R74]** Phuong, Mary, Erik Jenner, Laurent Simon, Lewis Ho, Rohin Shah, Sebastian Farquhar, and Scott Coull. *GDM AI Control Roadmap*, version 0.1. Google DeepMind, 22 June 2026. Official research report defining a conservative insider-threat model for internal agentic deployments; detection and prevention/response invariants; D1–D4 and R1–R3 capability-mitigation ladders; and monitoring/response coverage, recall, and time-to-response metrics. [Official report](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/securing-the-future-of-ai-agents/gdm-ai-control-roadmap.pdf).

**[R75]** Shah, Rohin, and Four Flynn. *Securing the Future of AI Agents*. Google DeepMind, 18 June 2026. Official article reporting an internal asynchronous monitor applied to one million coding-agent tasks, live monitoring for Gemini Spark, and a predominance of non-adversarial causes among flagged events; vendor-reported implementation evidence. [Official article](https://deepmind.google/blog/securing-the-future-of-ai-agents/).

<a id="l.-semantics-policy-identity-memory-composition-and-conformity"></a>
### L. Semantics policy, identity, memory, composition, and conformity

**[R76]** Appia Foundation. “Linux Foundation Launches Appia Foundation to Establish Standardized Conformity Specifications Across the AI Value Chain.” 17 June 2026. Official announcement describing modular conformity specifications, assessment enablement, accountability boundaries, and evidence pass-through. [Official article.](https://appiafoundation.org/linux-foundation-launches-appia-foundation-to-establish-standardized-conformity-specifications-across-the-ai-value-chain/)

**[R77]** OpenAI. “Helping Build Shared Standards for Advanced AI.” 23 June 2026. Official article supporting reusable evaluation frameworks and disclosure of systems, harnesses, tools, resources, and assessment methods. [Official article.](https://openai.com/index/helping-build-shared-standards-for-advanced-ai/)

**[R78]** OpenAI. “Predicting Model Behavior Before Release by Simulating Deployment.” 16 June 2026. Official research article on privacy-preserving replay of realistic deployment contexts, environment-fidelity error, input-distribution shift, and complementary evaluation. [Official article.](https://openai.com/index/deployment-simulation/)

**[R79]** OpenAI. “Codex-Maxxing for Long-Running Work.” 22 June 2026. Official whitepaper and article describing persistent workspaces, editable context, remote review and redirection, recurring thread automations, schedules, and stop conditions. [Official article.](https://openai.com/index/codex-maxxing-long-running-work/)

**[R80]** Anthropic. “Introducing Claude Tag.” 23 June 2026. Official product article describing a shared channel agent, scoped identity and memory, proactive actions, scheduling, requester-attributed logs, and spend controls. [Official article.](https://www.anthropic.com/news/introducing-claude-tag)

**[R81]** Anthropic. “Agentic Coding and Persistent Returns to Expertise.” 16 June 2026. Official research article distinguishing planning and execution decisions and examining the continuing role of expertise in agentic coding. [Official article.](https://www.anthropic.com/research/claude-code-expertise)

**[R82]** Google DeepMind. “Investing in Multi-Agent AI Safety Research.” 11 June 2026. Official article calling for testbeds, monitoring infrastructure, identity and reputation mechanisms, commitments, and oversight for large-scale multi-agent ecosystems. [Official article.](https://deepmind.google/blog/investing-in-multi-agent-ai-safety-research/)

**[R83]** Ee, Shaun, and Pegah Maham. The Three Layers of Agent Security. Google DeepMind, June 2026. Official report addressing identity, authorization, memory poisoning, human-agent handoff, evidence flooding, multi-agent risk, observable action, and cross-session correlation. [Official report.](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/securing-the-future-of-ai-agents/three-layers-of-agent-security.pdf)

**[R84]** Meta. “Agents Rule of Two: A Practical Approach to AI Agent Security.” 31 October 2025. Official engineering article framing untrusted inputs, sensitive access, and state-changing or external effects as a three-part agent-security constraint. [Official article.](https://ai.meta.com/blog/practical-ai-agent-security/)

**[R85]** National Institute of Standards and Technology. “AI Agent Standards Initiative.” 17 February 2026. Official initiative for secure, interoperable agents acting on behalf of users. [Official initiative.](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative)

**[R86]** Booth, Harold, Bill Fisher, Ryan Galluzzo, and Joshua Roberts. Accelerating the Adoption of Software and AI Agent Identity and Authorization. NIST NCCoE concept paper, 5 February 2026. Official draft covering agent identification, authentication, authorization, delegation, non-repudiation, logging, data flows, and prompt-injection controls. [Official publication.](https://www.nccoe.nist.gov/publications/other/accelerating-adoption-software-and-ai-agent-identity-and-authorization-concept)

**[R87]** OpenAI. Model Spec, release 18 December 2025. Official specification defining a chain of command and treatment of untrusted content that may contain malicious or accidental instructions. [Official specification.](https://model-spec.openai.com/)

**[R88]** Model Context Protocol. “Security Best Practices.” Current official documentation observed 23 June 2026. Covers confused-deputy risk, per-client consent, token audience, credential handling, and authorization boundaries. [Official documentation.](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)

**[R89]** Anthropic. “Effective Context Engineering for AI Agents.” 29 September 2025. Official engineering article on finite context, just-in-time retrieval, compaction, memory, and multi-agent context separation. [Official article.](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

**[R90]** Anthropic. “How We Built Our Multi-Agent Research System.” 13 June 2025. Official engineering article describing an orchestrator, parallel subagents, delegation, communication, evaluation, and production lessons. [Official article.](https://www.anthropic.com/engineering/multi-agent-research-system)

**[R91]** Anthropic. “How We Built Claude Code Auto Mode: A Safer Way to Skip Permissions.” 25 March 2026. Official engineering article on approval fatigue, risk classifiers, prompt-injection probes, inferred targets, credentials, and handoff checks. [Official article.](https://www.anthropic.com/engineering/claude-code-auto-mode)

**[R92]** Anthropic. “How We Contain Claude Across Products.” 25 May 2026. Official engineering article on blast-radius containment, environment boundaries, persistent-memory poisoning, multi-agent trust escalation, and agent identity. [Official article.](https://www.anthropic.com/engineering/how-we-contain-claude)

**[R93]** Bradner, Scott. RFC 2119: Key Words for Use in RFCs to Indicate Requirement Levels. Internet Engineering Task Force, March 1997. Best Current Practice 14. [Official RFC.](https://datatracker.ietf.org/doc/html/rfc2119)

**[R94]** Leiba, Barry. RFC 8174: Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words. Internet Engineering Task Force, May 2017. Updates RFC 2119 as part of Best Current Practice 14. [Official RFC.](https://datatracker.ietf.org/doc/html/rfc8174)

<a id="version-history-and-publication-note"></a>
## Version history and publication note

<a id="revision-summary"></a>
### Revision summary

- Version 0.5 — 23 June 2026. Establishes the WCD Semantics Policy as a modular profile suite while preserving the nine-slot operator grammar. Adds normative terminology and a semantic registry; multi-principal authority and decision attribution; instruction and context provenance; agent identity, delegation, and purpose-bound credentials; memory mutation, recurrence, and steering; tool capability and trust-boundary semantics; multi-agent composition and delegation attenuation; configuration fingerprints and conformance evidence; semantic deployment simulation; resource authority; eight new patterns, nine anti-patterns, new metrics, simulations, checklist items, open questions, and sources R76–R94.

- **v0.2:** Added the front-matter spine and drop-test; the quality-attribute framing; Delegation Brief, Boundary Preview, and Standing Grant & Revocation patterns; the timescale-extrapolation label; and conformance tests across 5-minute, 4-hour, and 48-hour returns.

- v0.3: Added the executive-summary front door; reconciled workstream continuity as the quality attribute with Workstream Continuity Design as the coordinating practice; promoted the WCD Accountable Expression Profile to numbered section 9; positioned WCD as a human-facing application and conformance profile; added prior-art boundaries, conformance requirements, failure modes, source entries R55–R61, CRM integration changes, manifesto and checklist additions, and open standards questions; and clarified the cognitive model as a diagnostic checklist rather than a scoring formula.

- v0.4: Re-centered the category on rapid workstream acquisition across concurrent work; established longer absence as a higher-staleness case rather than the defining case; promoted the continuity grammar and operational diff; added TTDR, the decision-readiness vector, false-ready rate, cross-workstream contamination, and a 30–90 second portfolio-switch protocol; integrated multitasking-continuum, developer-resumption, notational-vocabulary, AG-UI, ACP, and A2UI sources R62–R68; realigned conformance tests and CRM experiments around grammar-based orientation; grounded the grammar’s glanceability claim in visual-search research R69–R73; distinguished rapid attention guidance from full semantic comprehension; added the set-size triage function; and formalized the quiet-majority condition and incident/batch fallback.

- v0.4.1: Integrated Google DeepMind’s GDM AI Control Roadmap and accompanying implementation note as sources R74–R75; added the AI-control boundary, operator-facing control posture, cross-workstream control-incident model, adversarial accountable-expression requirements, control-state grammar projection, human-speed oversight limit, control-aware patterns and anti-patterns, efficacy/legibility metrics, adversarial continuity simulation, maturity and CRM updates, checklist additions, and open control questions.

- Publication cleanup: Standardized the distinction between the WCD Accountable Expression Profile and the accountable expression envelope; clarified grammar maturity and slot provenance; separated workstream state, authorization, and expression lifecycle; distinguished TTO from TTDR; normalized pattern names; and refreshed pagination and publication metadata.

- **Publication boundary:** The complete schema, security architecture, governance process, and protocol proposal remain a linked companion research program rather than the governing thesis of this design bible.

The accountable expression envelope, continuity grammar, and operational-diff vocabulary are original synthesis and design proposals, not established standards. Their taxonomy, validation architecture, interoperability value, and effects on switch-in speed, decision readiness, reliance, and oversight require implementation and empirical evaluation.

This is Version 0.5 of the Workstream Continuity Design research edition, dated 23 June 2026.
