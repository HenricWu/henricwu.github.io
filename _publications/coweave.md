---
layout: academic-detail
featured: true
display_order: 8
short_venue: "MANUSCRIPT"
status: "Under review"
project_name: CoWeave
title: 'CoWeave: Identity-Specific Context Reasoning for Persistent Multi-Camera Tracking'
summary: CoWeave links people across cameras when group context supports several plausible identity assignments.
  It scores competing assignments with identity-specific evidence and spends a shared retrieval budget on
  observations expected to reduce decision loss. The system can leave an arrival unresolved when the evidence is
  weak and revise which identity an earlier observation belongs to as new evidence arrives.
topic: MULTI-CAMERA TRACKING
venue: 'Manuscript under review'
image: /assets/academic/papers/coweave-overview.webp
image_width: 1536
image_height: 663
image_alt: The CoWeave overview shows how an arrival is scored, how shared evidence is retrieved, and how memory
  ownership is revised.
figure_label: Fig. 2
figure_caption: Identity-specific evidence, candidate decisions, shared retrieval, and memory revision at a cross-camera
  arrival. Example frames from MTMMC.
demo_url: /assets/academic/demos/coweave.mp4
permalink: /publication/coweave
---

People arriving together can share context that fits several identity assignments. CoWeave retrieves evidence that distinguishes the candidates and keeps memory ownership revisable when new evidence arrives.

CoWeave scores competing assignments using evidence specific to their identities. It reads historical sources within a budget, can leave an arrival unresolved, and keeps the ownership of stored observations open to revision as evidence accumulates.
