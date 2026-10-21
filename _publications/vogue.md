---
image: /assets/academic/papers/vogue.png
image_width: 1932
image_height: 1029
image_alt: "VOGUE architecture with sliding-window graph construction, virtual long-term memory, a sequence-adaptive policy generator, and hierarchical association."
figure_label: "Fig. 2"
figure_caption: "VOGUE architecture, reproduced from the author-provided revision manuscript."
layout: academic-detail
featured: true
display_order: 0
display_year: "2026"
short_venue: "PATTERN RECOGNITION"
status: "Accepted"
project_name: "VOGUE"
author_line: "Yuhao Wei, Shoudong Han, Wenbo Zheng, <strong>Haoyang Wu</strong>"
summary: "VOGUE addresses identity continuity when targets disappear behind occlusions in online multi-object tracking. It combines a sliding-window graph of recent observations with virtual memory nodes that retain lost identities beyond the active window. A sequence-adaptive policy adjusts association thresholds, cue weights, and reconnection budgets, allowing unresolved detections to query long-term memory before starting new tracks."
topic: "MULTI-OBJECT TRACKING"
title: "VOGUE: Sequence-adaptive online graph tracking with virtual long-term memory"
collection: publications
category: manuscripts
permalink: /publication/vogue
excerpt: 'Online multi-object tracking with virtual long-term memory and sequence-adaptive graph association. Accepted by Pattern Recognition.'
date: 2026-10-21
venue: 'Pattern Recognition (accepted)'
paperurl: ''
citation: 'Yuhao Wei, Shoudong Han, Wenbo Zheng, and <b>Haoyang Wu</b>. "VOGUE: Sequence-adaptive online graph tracking with virtual long-term memory." <i>Pattern Recognition</i>, accepted.'
---

VOGUE addresses identity continuity in online multi-object tracking when occlusion separates observations of the same target. It augments a sliding-window graph of recent detections and track states with virtual memory nodes that retain representations of lost identities. Message passing combines current observations with this long-term memory.

A sequence-adaptive policy adjusts association thresholds, cue weights, and reconnection budgets using graph statistics and online sequence cues. Association proceeds in two stages: active tracks are matched to current detections first, then unresolved detections query virtual memory before starting new tracks.

**Status**: Accepted by *Pattern Recognition*.

**Authors**: Yuhao Wei, Shoudong Han, Wenbo Zheng, and Haoyang Wu. Yuhao Wei and Shoudong Han contributed equally; Shoudong Han is the corresponding author.

**Keywords**: Multi-Object Tracking; Online Graph Tracking; Virtual Long-Term Memory; Sequence-Adaptive Association; Identity Recovery.
