const slots = ["GOAL", "ATTN", "STATE", "DELTA", "ACTORS", "AUTH", "EVIDENCE", "EFFECT", "NEXT"];

const workstreams = [
  {
    id: "northstar",
    title: "Northstar renewal consent",
    short: "Review · stale approval",
    state: "review",
    goal: "Qualify renewal email for Northstar account",
    change: "Consent approval aged out overnight",
    actor: "Maya, account owner",
    auth: "expired",
    next: "Recheck consent evidence before any outbound send",
    ready: false,
    slots: {
      GOAL: "Qualify whether the Northstar renewal email can be sent today.",
      ATTN: "A machine-prepared renewal message is queued for review before the campaign window closes.",
      STATE: "Review. Content is prepared, but authorization evidence is stale.",
      DELTA: "Consent changed from valid yesterday to expired after the 30-day window elapsed.",
      ACTORS: "Owner Maya. Agent drafted the message. Next actor Maya.",
      AUTH: "Expired approval. External send is not authorized until consent is reverified.",
      EVIDENCE: "CRM consent record last verified 31 days ago; no newer consent event found.",
      EFFECT: "External customer contact; low reversibility once sent.",
      NEXT: "Recheck consent evidence and refresh approval before committing the send."
    },
    feed: [
      ["08:14", "Renewal draft created", "Agent prepared a customer renewal email from the Q3 account notes."],
      ["08:19", "Campaign window flagged", "Northstar is in the morning send batch if the owner approves."],
      ["08:27", "Consent note attached", "Prior consent record was linked from the account timeline."],
      ["08:33", "Reviewer pinged", "Maya was asked to approve or hold before the outbound job runs."],
      ["08:41", "Policy check updated", "Send eligibility moved to review because the consent timestamp is outside the current approval window."]
    ]
  },
  {
    id: "bayline",
    title: "Bayline onboarding file",
    short: "Waiting · vendor evidence",
    state: "waiting",
    goal: "Complete Bayline vendor onboarding packet",
    change: "Waiting on signed security addendum",
    actor: "Bayline vendor contact",
    auth: "permitted",
    next: "Wait for addendum before marking onboarding complete",
    ready: false,
    slots: {
      GOAL: "Complete the Bayline vendor onboarding packet without fabricating missing evidence.",
      ATTN: "The packet is near complete, but one source document is still absent.",
      STATE: "Waiting. Internal fields are filled; external evidence has not arrived.",
      DELTA: "Tax and routing documents were accepted; security addendum remains missing.",
      ACTORS: "Owner Priya. Vendor contact is current actor. Next actor Bayline.",
      AUTH: "Permitted to prepare the packet; not permitted to mark complete.",
      EVIDENCE: "Checklist has seven of eight required documents with timestamps and hashes.",
      EFFECT: "Internal onboarding state; moderate reversibility if corrected before approval.",
      NEXT: "Wait for the signed addendum or request it again after the due time."
    },
    feed: [
      ["09:02", "Checklist advanced", "Tax form and routing documents passed validation."],
      ["09:09", "Packet draft updated", "Agent copied the vendor address into the onboarding packet."],
      ["09:21", "Reminder scheduled", "A follow-up reminder was scheduled for the external contact."],
      ["09:34", "Security addendum missing", "The addendum link has not been uploaded by Bayline."],
      ["09:39", "Queue item held", "Completion remains blocked on vendor-supplied evidence."]
    ]
  },
  {
    id: "axon",
    title: "Axon incident export",
    short: "Blocked · policy denial",
    state: "blocked",
    goal: "Export incident packet for external counsel",
    change: "Policy denied export because restricted notes are included",
    actor: "Rina, policy owner",
    auth: "denied",
    next: "Remove restricted notes or request policy-owner exception",
    ready: false,
    slots: {
      GOAL: "Produce an incident packet that can be shared with external counsel.",
      ATTN: "Counsel requested the packet today, but the generated export includes restricted notes.",
      STATE: "Blocked by policy denial.",
      DELTA: "New restricted witness notes entered the packet after the previous safe preview.",
      ACTORS: "Owner Sam. Export agent attempted packaging. Next actor Rina, policy owner.",
      AUTH: "Denied for external export while restricted notes remain attached.",
      EVIDENCE: "Policy engine denial cites restricted_notes.external_share=false and packet manifest line 18.",
      EFFECT: "External legal disclosure; high consequence and low reversibility.",
      NEXT: "Remove restricted notes or request a policy-owner exception before exporting."
    },
    feed: [
      ["10:11", "Export assembled", "Agent assembled the incident PDF and attachment manifest."],
      ["10:18", "Counsel deadline noted", "External counsel requested the packet before end of day."],
      ["10:23", "Notes merged", "Witness notes were merged into the incident packet."],
      ["10:28", "Export attempt failed", "The final export action did not complete."],
      ["10:29", "Policy event recorded", "External share rule denied the packet because restricted notes are included."]
    ]
  },
  {
    id: "meridian",
    title: "Meridian renewal action",
    short: "Active · human commitment",
    state: "active",
    goal: "Commit approved renewal action for Meridian",
    change: "Machine-prepared action is ready for human commitment",
    actor: "Jon, account owner",
    auth: "permitted",
    next: "Human owner commits the prepared renewal action",
    ready: true,
    slots: {
      GOAL: "Finalize the Meridian renewal action after human review.",
      ATTN: "The agent prepared the action and all required checks are green.",
      STATE: "Active. Awaiting human commitment.",
      DELTA: "Pricing exception resolved; action moved from review to ready for commitment.",
      ACTORS: "Owner Jon. Agent prepared the action. Next actor Jon.",
      AUTH: "Permitted. Required approval and pricing checks are current.",
      EVIDENCE: "Approval ticket, pricing rule check, and draft action manifest all verified at 11:06.",
      EFFECT: "External account update; reversible only through a follow-up correction.",
      NEXT: "Jon commits the prepared renewal action or explicitly cancels it."
    },
    feed: [
      ["10:48", "Pricing exception closed", "Finance approved the exception after a correction to seat count."],
      ["10:55", "Action prepared", "Agent prepared the renewal action and generated an effect preview."],
      ["11:02", "Approval ticket linked", "Approval ticket was attached to the action manifest."],
      ["11:06", "Checks passed", "Pricing, approval, and account state checks all passed."],
      ["11:08", "Commit requested", "Jon was asked to commit or cancel the prepared action."]
    ]
  },
  {
    id: "grove",
    title: "Grove safety audit",
    short: "Changed · assumption break",
    state: "changed",
    goal: "Prepare Grove facility safety audit summary",
    change: "Assumption changed: night shift added forklift operations",
    actor: "Luis, site lead",
    auth: "review",
    next: "Update hazard model before summarizing risk",
    ready: false,
    slots: {
      GOAL: "Prepare a facility safety audit summary for Grove.",
      ATTN: "The draft summary relies on an assumption that is no longer true.",
      STATE: "Changed. The previous baseline is contaminated by new operating conditions.",
      DELTA: "Assumption changed from no night forklift operations to night forklift operations active.",
      ACTORS: "Owner Elena. Site lead Luis changed the operating note. Next actor Elena.",
      AUTH: "Review required before summary can be issued.",
      EVIDENCE: "Shift roster update and floor supervisor note entered after the first draft.",
      EFFECT: "Internal safety assessment; downstream training recommendations may change.",
      NEXT: "Update the hazard model and regenerate the summary before sharing."
    },
    feed: [
      ["12:17", "Audit draft generated", "Agent drafted the Grove safety summary from the morning inspection."],
      ["12:29", "Roster updated", "Night shift roster changed after the initial draft."],
      ["12:33", "Supervisor note added", "Floor supervisor added a note about forklift activity after 20:00."],
      ["12:40", "Summary marked stale", "The prior draft no longer matches the current operating conditions."],
      ["12:42", "Reviewer pinged", "Elena was asked to update the hazard model before sharing."]
    ]
  },
  {
    id: "lumen",
    title: "Lumen escalation triage",
    short: "Review · contradiction",
    state: "review",
    goal: "Triage high-value customer escalation",
    change: "Evidence contradiction detected",
    actor: "Owen, support lead",
    auth: "review",
    next: "Resolve contradictory SLA evidence before response",
    ready: false,
    slots: {
      GOAL: "Decide whether the Lumen escalation requires an SLA breach response.",
      ATTN: "Two authoritative systems disagree about the elapsed outage time.",
      STATE: "Review. Evidence conflict prevents a confident decision.",
      DELTA: "Monitoring says 42 minutes; ticket history says 71 minutes.",
      ACTORS: "Owner Owen. Monitoring bot supplied evidence. Next actor Owen.",
      AUTH: "Review required; breach response cannot be asserted while evidence conflicts.",
      EVIDENCE: "Monitoring export and ticket timeline disagree; both sources are current.",
      EFFECT: "Customer-facing breach communication with contractual implications.",
      NEXT: "Resolve the SLA evidence conflict, then decide response posture."
    },
    feed: [
      ["13:02", "Escalation opened", "Customer escalation moved into the high-value queue."],
      ["13:08", "Monitoring data linked", "Monitoring export shows a 42-minute incident duration."],
      ["13:12", "Ticket history attached", "Ticket timeline shows the impact began earlier."],
      ["13:16", "Draft response generated", "Agent drafted an SLA breach response for review."],
      ["13:19", "Evidence conflict noted", "Two current sources disagree about whether the breach threshold was crossed."]
    ]
  },
  {
    id: "solace",
    title: "Solace payroll correction",
    short: "Active · reversible",
    state: "active",
    goal: "Correct payroll classification for Solace contractor",
    change: "Correction preview matches source evidence",
    actor: "Nora, payroll admin",
    auth: "permitted",
    next: "Apply reversible internal correction",
    ready: true,
    slots: {
      GOAL: "Correct an internal payroll classification error for one contractor.",
      ATTN: "The pay period closes today and the correction is reversible before finalization.",
      STATE: "Active. Ready for internal correction.",
      DELTA: "Classification changed from temporary employee to contractor after source review.",
      ACTORS: "Owner Nora. Payroll agent prepared correction. Next actor Nora.",
      AUTH: "Permitted for internal correction within the open pay period.",
      EVIDENCE: "Signed contract and HRIS record agree; correction preview matches both sources.",
      EFFECT: "Internal payroll state; reversible until pay period finalization.",
      NEXT: "Apply the prepared correction and retain the evidence bundle."
    },
    feed: [
      ["14:05", "Classification mismatch found", "Payroll audit found a mismatch for one worker."],
      ["14:13", "Contract attached", "Signed contractor agreement was added to the evidence bundle."],
      ["14:20", "HRIS record checked", "HRIS record matches the contractor classification."],
      ["14:28", "Correction preview prepared", "Agent prepared an internal correction preview."],
      ["14:31", "Admin action requested", "Nora was asked to apply or cancel before payroll close."]
    ]
  },
  {
    id: "atlas",
    title: "Atlas access removal",
    short: "Waiting · confirmation",
    state: "waiting",
    goal: "Remove departing contractor access",
    change: "Waiting on identity-provider confirmation",
    actor: "Identity provider sync",
    auth: "pending",
    next: "Wait for IdP confirmation before closing task",
    ready: false,
    slots: {
      GOAL: "Remove application access for a departing Atlas contractor.",
      ATTN: "Access removal was requested, but closure requires independent IdP confirmation.",
      STATE: "Waiting for system confirmation.",
      DELTA: "App-side removal request submitted; IdP confirmation has not returned.",
      ACTORS: "Owner Cam. Access agent submitted removal. Next actor identity provider sync.",
      AUTH: "Pending confirmation; do not close as complete yet.",
      EVIDENCE: "Removal request id AR-771 exists; IdP sync event is still absent.",
      EFFECT: "Access-control state; premature closure can leave residual access hidden.",
      NEXT: "Wait for IdP confirmation or escalate if the sync deadline passes."
    },
    feed: [
      ["15:02", "Offboarding task opened", "Contractor access removal entered the queue."],
      ["15:08", "Application removal requested", "Access agent submitted removal request AR-771."],
      ["15:14", "Checklist updated", "App-side checklist item was marked submitted."],
      ["15:27", "Confirmation missing", "Identity provider confirmation event has not appeared."],
      ["15:32", "Task held open", "Closure is waiting on the independent sync event."]
    ]
  }
];

const answers = {
  goal: workstreams.map((stream) => stream.goal),
  change: workstreams.map((stream) => stream.change),
  actor: workstreams.map((stream) => stream.actor),
  auth: ["permitted", "review", "pending", "expired", "denied"],
  next: workstreams.map((stream) => stream.next)
};

const state = {
  currentIndex: 0,
  condition: new URLSearchParams(window.location.search).get("condition") === "wcd" ? "wcd" : "feed",
  switchStartedAt: performance.now(),
  sessionStartedAt: null,
  autoTimer: null,
  nextSwitchAt: null,
  results: []
};

const els = {
  streamList: document.querySelector("#streamList"),
  workspaceTitle: document.querySelector("#workspace-title"),
  conditionLabel: document.querySelector("#conditionLabel"),
  stateChip: document.querySelector("#stateChip"),
  authChip: document.querySelector("#authChip"),
  actorChip: document.querySelector("#actorChip"),
  feedCondition: document.querySelector("#feedCondition"),
  wcdCondition: document.querySelector("#wcdCondition"),
  activityFeed: document.querySelector("#activityFeed"),
  wcdGrid: document.querySelector("#wcdGrid"),
  probeForm: document.querySelector("#probeForm"),
  timerLabel: document.querySelector("#timerLabel"),
  cadence: document.querySelector("#cadence"),
  startSession: document.querySelector("#startSession"),
  nextSwitch: document.querySelector("#nextSwitch"),
  exportJson: document.querySelector("#exportJson"),
  resetSession: document.querySelector("#resetSession"),
  ttdrMetric: document.querySelector("#ttdrMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  falseReadyMetric: document.querySelector("#falseReadyMetric"),
  contaminationMetric: document.querySelector("#contaminationMetric"),
  lastResult: document.querySelector("#lastResult")
};

function classForAuth(auth) {
  if (auth === "denied" || auth === "expired") return "danger";
  if (auth === "review" || auth === "pending") return "warn";
  return "ok";
}

function classForState(streamState) {
  if (streamState === "blocked") return "danger";
  if (streamState === "waiting" || streamState === "changed" || streamState === "review") return "warn";
  return "ok";
}

function renderStreams() {
  els.streamList.innerHTML = "";
  workstreams.forEach((stream, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stream-button";
    button.setAttribute("aria-current", String(index === state.currentIndex));
    button.innerHTML = `<strong>${index + 1}. ${stream.title}</strong><span>${stream.short}</span>`;
    button.addEventListener("click", () => switchTo(index));
    item.append(button);
    els.streamList.append(item);
  });
}

function renderOptions() {
  for (const [name, values] of Object.entries(answers)) {
    const select = els.probeForm.elements[name];
    select.innerHTML = '<option value="">Choose...</option>';
    [...new Set(values)].forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  }
}

function renderCurrent() {
  const stream = workstreams[state.currentIndex];
  els.workspaceTitle.textContent = stream.title;
  els.conditionLabel.textContent = state.condition === "feed" ? "Activity-feed condition" : "WCD orientation-surface condition";
  els.stateChip.textContent = `State: ${stream.state}`;
  els.stateChip.className = classForState(stream.state);
  els.authChip.textContent = `Auth: ${stream.auth}`;
  els.authChip.className = classForAuth(stream.auth);
  els.actorChip.textContent = `Next: ${stream.actor}`;

  els.feedCondition.hidden = state.condition !== "feed";
  els.wcdCondition.hidden = state.condition !== "wcd";

  els.activityFeed.innerHTML = "";
  stream.feed.forEach(([time, label, copy]) => {
    const item = document.createElement("li");
    item.innerHTML = `<span class="feed-time">${time}</span><div class="feed-copy"><strong>${label}</strong><p>${copy}</p></div>`;
    els.activityFeed.append(item);
  });

  els.wcdGrid.innerHTML = "";
  slots.forEach((slot) => {
    const card = document.createElement("div");
    card.className = "wcd-card";
    card.innerHTML = `<dt>${slot}</dt><dd>${stream.slots[slot]}</dd>`;
    els.wcdGrid.append(card);
  });

  renderStreams();
  resetProbe();
}

function resetProbe() {
  els.probeForm.reset();
  state.switchStartedAt = performance.now();
}

function switchTo(index) {
  state.currentIndex = index;
  renderCurrent();
}

function nextIndex() {
  return (state.currentIndex + 1) % workstreams.length;
}

function switchNow() {
  switchTo(nextIndex());
  scheduleAutoSwitch();
}

function cadenceMs() {
  const value = els.cadence.value;
  if (value === "random") return (30 + Math.floor(Math.random() * 61)) * 1000;
  return Number(value) * 1000;
}

function clearAutoTimer() {
  if (state.autoTimer) {
    window.clearTimeout(state.autoTimer);
    state.autoTimer = null;
  }
  state.nextSwitchAt = null;
}

function scheduleAutoSwitch() {
  clearAutoTimer();
  const ms = cadenceMs();
  if (!ms) {
    els.timerLabel.textContent = "Manual";
    return;
  }
  state.nextSwitchAt = Date.now() + ms;
  els.timerLabel.textContent = `${Math.round(ms / 1000)}s`;
  state.autoTimer = window.setTimeout(switchNow, ms);
}

function startSession() {
  state.sessionStartedAt = new Date().toISOString();
  state.results = [];
  state.currentIndex = 0;
  renderCurrent();
  scheduleAutoSwitch();
  updateMetrics();
  els.lastResult.textContent = "Session started. Answer each probe after switching.";
}

function contaminationFor(response, stream) {
  const fields = ["goal", "change", "actor", "next"];
  const contaminated = fields.filter((field) => {
    if (response[field] === stream[field]) return false;
    return workstreams.some((candidate) => candidate.id !== stream.id && candidate[field] === response[field]);
  });
  return contaminated;
}

function handleProbe(event) {
  event.preventDefault();
  const stream = workstreams[state.currentIndex];
  const form = new FormData(els.probeForm);
  const response = Object.fromEntries(form.entries());
  const ttdrMs = Math.round(performance.now() - state.switchStartedAt);
  const checks = {
    goal: response.goal === stream.goal,
    change: response.change === stream.change,
    actor: response.actor === stream.actor,
    auth: response.auth === stream.auth,
    next: response.next === stream.next,
    ready: (response.ready === "yes") === stream.ready
  };
  const correct = Object.values(checks).filter(Boolean).length;
  const contamination = contaminationFor(response, stream);
  const falseReady = response.ready === "yes" && !stream.ready;
  const result = {
    timestamp: new Date().toISOString(),
    condition: state.condition,
    workstreamId: stream.id,
    workstreamTitle: stream.title,
    ttdrMs,
    response,
    checks,
    accuracy: correct / Object.keys(checks).length,
    falseReady,
    contamination
  };
  state.results.push(result);
  updateMetrics();
  els.lastResult.textContent = `Recorded ${Math.round(result.accuracy * 100)}% accuracy in ${(ttdrMs / 1000).toFixed(1)}s. ${falseReady ? "False-ready judgment detected. " : ""}${contamination.length ? `Contamination fields: ${contamination.join(", ")}.` : "No cross-workstream contamination detected."}`;
  resetProbe();
}

function updateMetrics() {
  if (!state.results.length) {
    els.ttdrMetric.textContent = "--";
    els.accuracyMetric.textContent = "--";
    els.falseReadyMetric.textContent = "0";
    els.contaminationMetric.textContent = "0";
    return;
  }
  const total = state.results.length;
  const avgTtdr = state.results.reduce((sum, result) => sum + result.ttdrMs, 0) / total;
  const avgAccuracy = state.results.reduce((sum, result) => sum + result.accuracy, 0) / total;
  const falseReadyCount = state.results.filter((result) => result.falseReady).length;
  const contaminationCount = state.results.filter((result) => result.contamination.length).length;
  els.ttdrMetric.textContent = `${(avgTtdr / 1000).toFixed(1)}s`;
  els.accuracyMetric.textContent = `${Math.round(avgAccuracy * 100)}%`;
  els.falseReadyMetric.textContent = String(falseReadyCount);
  els.contaminationMetric.textContent = String(contaminationCount);
}

function exportJson() {
  const payload = {
    exportedAt: new Date().toISOString(),
    sessionStartedAt: state.sessionStartedAt,
    workstreamCount: workstreams.length,
    measures: ["TTDR", "response accuracy", "false-ready judgments", "cross-workstream contamination"],
    results: state.results
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wcd-demonstrator-results.json";
  link.click();
  URL.revokeObjectURL(url);
}

function setCondition(value) {
  state.condition = value;
  const url = new URL(window.location.href);
  if (value === "wcd") {
    url.searchParams.set("condition", "wcd");
  } else {
    url.searchParams.delete("condition");
  }
  window.history.replaceState({}, "", url);
  renderCurrent();
}

document.querySelectorAll('input[name="condition"]').forEach((input) => {
  input.addEventListener("change", (event) => setCondition(event.target.value));
});

els.cadence.addEventListener("change", scheduleAutoSwitch);
els.startSession.addEventListener("click", startSession);
els.nextSwitch.addEventListener("click", switchNow);
els.probeForm.addEventListener("submit", handleProbe);
els.exportJson.addEventListener("click", exportJson);
els.resetSession.addEventListener("click", () => {
  clearAutoTimer();
  state.results = [];
  state.sessionStartedAt = null;
  state.currentIndex = 0;
  renderCurrent();
  updateMetrics();
  els.lastResult.textContent = "Session reset.";
});

document.querySelector(`input[name="condition"][value="${state.condition}"]`).checked = true;
renderOptions();
renderCurrent();
updateMetrics();
