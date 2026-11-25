---
layout: academic-detail
featured: true
display_order: 7
short_venue: "MANUSCRIPT"
status: "Under review"
project_name: BindAdapt
title: 'BindAdapt: Joint Camera–Computation Scheduling for Persistent Target Identity in PTZ Tracking'
summary: A tracker can draw a confident box around the wrong person after a crossing. BindAdapt schedules camera
  motion, the verification operator, and its start time so the evidence arrives when it can still preserve the target
  identity.
topic: ACTIVE PTZ TRACKING
venue: 'Manuscript under review'
image: /assets/academic/papers/bindadapt-overview.webp
image_width: 1536
image_height: 556
image_alt: The BindAdapt overview shows source provenance, predictions of identity response, and joint scheduling
  under compute and camera-motion budgets.
figure_label: Fig. 2
figure_caption: From shared cue provenance and predicted identity responses to joint camera and verification scheduling.
  Example frames from DanceTrack.
demo_url: /assets/academic/demos/bindadapt.mp4
permalink: /publication/bindadapt
---

A tracker can draw a confident box around the wrong person after a crossing. BindAdapt schedules camera motion, the verification operator, and its start time so the evidence arrives when it can still preserve the target identity.

BindAdapt treats camera motion, the visual operator, and the operator start time as a single scheduling decision. A provenance graph records which cues share a source. A receding-horizon scheduler uses predicted result-return times and identity outcomes to select actions under motion and computation budgets.
