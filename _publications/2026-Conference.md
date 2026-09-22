---
image: /assets/academic/papers/mcts-track.png
image_alt: "MCTS-Track overview: ambiguity-triggered local search and gated association refinement."
figure_label: "Overview"
figure_caption: "MCTS-Track: selective re-evaluation of ambiguous associations with a gated commit. Author-provided manuscript figure; work under review."
layout: academic-detail
featured: true
display_order: 4
display_year: "In review"
short_venue: "MANUSCRIPT"
status: "Under review"
project_name: "MCTS-Track"
author_line: "<strong>Haoyang Wu</strong> · First author"
summary: "Selective Monte Carlo planning explores ambiguous association decisions through a tracker's native state transitions, with conservative fallback to its original decision."
topic: "MULTI-OBJECT TRACKING"
title: "MCTS-Track: Monte Carlo Tree Search over Native Association Decisions for Multi-Object Tracking"
collection: publications
category: manuscripts
permalink: /publication/2026-mcts-track-under-review
excerpt: 'Selective Monte Carlo planning over native association decisions for multi-object tracking. Manuscript under review.'
date: 2026-03-23
venue: 'Manuscript under review'
slidesurl: ''
paperurl: ''
bibtexurl: ''
citation: 'MCTS-Track: Monte Carlo Tree Search over Native Association Decisions for Multi-Object Tracking. Manuscript under review, 2026.'
---

MCTS-Track studies how to refine ambiguous association decisions before they propagate through a multi-object tracker's state. It formulates association as Monte Carlo planning over each host tracker's legal actions, cloneable local state, and native transitions.

The shared planner activates on ambiguous local components, allocates simulations adaptively, and compares alternative current-frame associations through short-horizon replay. It commits only the selected root action and retains the host's reference decision when acceptance checks fail.

**Status**: Under review.

**Keywords**: Multi-Object Tracking; Data Association; Monte Carlo Tree Search; Identity Preservation; Selective Planning.
