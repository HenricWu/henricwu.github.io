---
layout: academic-detail
featured: true
display_order: 6
short_venue: RESEARCH PROJECT
status: Demo available
project_name: VoxPivot
title: 'VoxPivot: Interference-Aware Camera Selection for Target Speech Extraction'
summary: Swapping the interfering speaker can change which camera gives the best extraction. VoxPivot uses the observed
  audio and lip motion to choose a single view before its next frames arrive.
topic: AUDIO-VISUAL SPEECH EXTRACTION
venue: Audio-visual speech extraction
image: /assets/academic/papers/voxpivot-overview.webp
image_width: 1536
image_height: 594
image_alt: The VoxPivot pipeline connects the observed audio and held camera to the online view decision. Paired-view
  replay provides training labels and offline scores.
figure_label: Fig. 2
figure_caption: Online camera selection from the observed prefix and offline paired-view replay for training labels
  and evaluation. Example frames from MEAD.
demo_url: /assets/academic/demos/voxpivot.mp4
permalink: /publication/voxpivot
---

Swapping the interfering speaker can change which camera gives the best extraction. VoxPivot uses the observed audio and lip motion to choose a single view before its next frames arrive.

From the observed audio and current lip motion, VoxPivot estimates the difference in extraction quality between candidate views. Offline paired-view replay provides that comparison under the same audio mixture and extractor. At runtime the decision uses only the observed prefix and acquires one view for target speech extraction.
