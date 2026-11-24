---
layout: academic-detail
featured: true
display_order: 7
short_venue: RESEARCH PROJECT
status: Demo available
project_name: BindAdapt
title: 'BindAdapt: Joint Camera–Computation Scheduling for Persistent Target Identity in PTZ Tracking'
summary: A tracker can draw a confident box around the wrong person after a crossing. BindAdapt schedules camera
  motion, the verification operator, and its start time so the evidence arrives when it can still preserve the target
  identity.
topic: ACTIVE PTZ TRACKING
venue: Active PTZ tracking
image: /assets/academic/demos/bindadapt.jpg
image_width: 640
image_height: 360
image_alt: A timeline illustrates two crossing target trajectories, the start of verification, and the return of
  identity evidence.
figure_label: Method illustration
figure_caption: The demo shows how a verification result can return before the identity becomes ambiguous at a crossing.
demo_url: /assets/academic/demos/bindadapt.mp4
permalink: /publication/bindadapt
---

A tracker can draw a confident box around the wrong person after a crossing. BindAdapt schedules camera motion, the verification operator, and its start time so the evidence arrives when it can still preserve the target identity.

BindAdapt treats camera motion, the visual operator, and the operator start time as a single scheduling decision. A provenance graph records which cues share a source. A receding-horizon scheduler uses predicted result-return times and identity outcomes to select actions under motion and computation budgets.
