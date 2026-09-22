---
image: /assets/academic/papers/ambicorrect.png
image_alt: "AmbiCorrect overview: cross-view evidence favors an alternative target, while a typed graph, ambiguity memory, and revision policy separate evidence from action."
figure_label: "Fig. 1"
figure_caption: "Query-conditioned identity misalignment: local evidence supports the wrong target, while evidence across views supports an alternative. AmbiCorrect separates evidence accumulation from the decision to revise an identity. Figure from the author-provided manuscript; work under review."
layout: academic-detail
featured: true
display_order: 5
display_year: "In review"
short_venue: "MANUSCRIPT"
status: "Under review"
project_name: "AmbiCorrect"
summary: "Cross-view evidence and persistent ambiguity memory guide selective identity revision for language-specified targets, with decisions to keep, replace, defer, or restore an assignment."
topic: "CROSS-VIEW REFERRING TRACKING"
title: "AmbiCorrect: Selective Query-Conditioned Identity Revision for Cross-View Referring Multi-Object Tracking"
collection: publications
category: manuscripts
permalink: /publication/ambicorrect
excerpt: 'Selective query-conditioned identity revision through cross-view evidence, relational reasoning, and persistent ambiguity memory. Manuscript under review.'
venue: 'Manuscript under review'
paperurl: ''
---

AmbiCorrect addresses identity mistakes in cross-view referring multi-object tracking, where a language description may be supported only by observations distributed across several cameras. A locally plausible tracklet can be assigned to the query before later views reveal a better-supported candidate.

The method separates evidence accumulation from the decision to revise an association. Its Query-Centric Tracking Ambiguity Network (QTAN) compares tracker-exposed candidates through a typed graph and carries unresolved evidence across windows with persistent memory. Separate prediction heads estimate candidate support, revision readiness, overwrite harm, and restoration.

A validation-thresholded policy chooses whether to **keep**, **replace**, **abstain**, or **roll back** the query-to-tracklet assignment. The host tracker's detections and geometric tracklets remain unchanged; rollback restores cached state when later evidence contradicts an accepted revision in time-ordered replay.

**Status**: Under review.

**Keywords**: Cross-View Referring Multi-Object Tracking; Query-Conditioned Identity; Selective Revision; Graph Reasoning; Persistent Memory.
