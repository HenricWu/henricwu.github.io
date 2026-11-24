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
image: /assets/academic/demos/voxpivot.jpg
image_width: 640
image_height: 360
image_alt: A schematic diagram links the audio mixture and the current view to prefix-based selection between two
  cameras.
figure_label: Method illustration
figure_caption: The demo follows an audio mixture and the current view through a prefix-based selector to the chosen
  camera.
demo_url: /assets/academic/demos/voxpivot.mp4
permalink: /publication/voxpivot
---

Swapping the interfering speaker can change which camera gives the best extraction. VoxPivot uses the observed audio and lip motion to choose a single view before its next frames arrive.

From the observed audio and current lip motion, VoxPivot estimates the difference in extraction quality between candidate views. Offline paired-view replay provides that comparison under the same audio mixture and extractor. At runtime the decision uses only the observed prefix and acquires one view for target speech extraction.
