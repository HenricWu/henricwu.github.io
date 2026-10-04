---
layout: academic-detail
featured: true
display_order: 3
display_year: "2026"
short_venue: "arXiv"
status: "Preprint"
project_name: "ReWorld-Track"
title: "ReWorld-Track: A Recursive Event World Model for Language-Guided Multi-Camera Tracking"
author_line: "<strong>Haoyang Wu</strong>, Shoudong Han, Chaoyue Li, Sijia Chen, Zhenyang Xie, Sihan Wang"
summary: "A recursive event world model carries identity uncertainty across blind camera gaps, coupling language-guided association with forecasts of the next camera, arrival time, and entry region."
topic: "LANGUAGE-GUIDED MULTI-CAMERA TRACKING"
collection: publications
category: manuscripts
permalink: /publication/reworld-track
excerpt: "Recursive belief updates connect event prediction and language-guided identity association across blind camera gaps."
date: 2026-09-29
venue: "arXiv:2609.36677 · Preprint, 2026"
paperurl: "https://arxiv.org/abs/2609.36677"
paper_label: "arXiv"
paper_action_label: "View on arXiv"
pdfurl: "https://arxiv.org/pdf/2609.36677"
htmlurl: "https://arxiv.org/html/2609.36677v1"
image: /assets/academic/papers/reworld-track.svg
image_width: 1587
image_height: 892
image_alt: "ReWorld-Track overview: prediction, candidate-or-null association, and posterior feedback form a recursive loop across successive camera observations."
figure_label: "Fig. 2"
figure_caption: "Prediction guides candidate-or-null association; the resulting posterior updates the target belief and carries uncertainty into the next forecast. Bars and curves are illustrative."
figure_source_label: "Source: arXiv preprint"
figure_license: "CC BY 4.0"
figure_license_url: "https://creativecommons.org/licenses/by/4.0/"
citation: 'Haoyang Wu, Shoudong Han, Chaoyue Li, Sijia Chen, Zhenyang Xie, and Sihan Wang. (2026). “ReWorld-Track: A Recursive Event World Model for Language-Guided Multi-Camera Tracking.” <i>arXiv:2609.36677</i>.'
---

ReWorld-Track studies language-guided tracking across multiple cameras when a target disappears into a blind gap before becoming visible again. Instead of committing immediately to a single identity, the method maintains uncertainty over plausible candidates and continued waiting.

A recursive event world model links three steps: **prediction**, **association**, and **posterior feedback**. The current target belief forecasts the next camera, arrival time, and entry region. Appearance and language evidence then guide candidate-or-null association, and the resulting posterior updates the belief used for the next forecast.

Training across successive handoffs connects event prediction to identity association over time. The preprint evaluates the approach on CityFlowV2 and MTMMC.

**Status**: Public preprint on arXiv, first posted September 29, 2026.

**Keywords**: Multi-Camera Tracking; Language-Guided Tracking; World Models; Recursive Belief; Blind Gaps.
