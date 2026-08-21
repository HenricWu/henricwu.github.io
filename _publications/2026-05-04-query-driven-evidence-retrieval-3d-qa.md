---
title: "Query-Driven Evidence Retrieval for Efficient 3D Question Answering"
collection: publications
category: manuscripts
permalink: /publication/2026-05-04-query-driven-evidence-retrieval-3d-qa
excerpt: 'This paper presents Opti3D, a training-free and plug-and-play visual abstraction framework for efficient 3D visual question answering by retrieving compact, query-driven visual evidence from complex 3D scenes.'
date: 2026-08-04
venue: 'IEEE Access'
slidesurl: ''
paperurl: '10.1109/ACCESS.2026.3720265'
bibtexurl: ''
citation: 'Huihui Liu and <b>Haoyang Wu</b>. (2026). "Query-Driven Evidence Retrieval for Efficient 3D Question Answering." <i>IEEE Access</i>.'
---

This paper presents Opti3D, a query-driven evidence retrieval framework for efficient 3D visual question answering. The work addresses the computational redundancy and attention dilution problems caused by directly feeding dense multi-view video streams or full 3D point clouds into large vision-language models.

Opti3D is designed as a training-free and plug-and-play adaptive visual abstraction module. Given a natural language query and a 3D scene, the framework constructs a global bird's-eye-view representation to preserve macroscopic spatial topology, while using instruction-guided open-vocabulary detection to identify query-relevant local candidates. A 3D ray-based instance merging strategy is further introduced to remove redundant cross-view observations and extract compact, high-quality visual evidence for downstream multimodal reasoning.

The method converts complex and unstructured 3D visual inputs into a refined visual prompt dossier consisting of global BEV context and selected optimal local views. This design follows a "less is more" principle, reducing unnecessary visual token consumption while improving spatial consistency, reasoning robustness, and hallucination resistance in 3D question answering.

Experiments on ScanQA and SQA3D demonstrate that Opti3D improves 3D QA performance in a zero-shot setting. The framework achieves stronger reasoning accuracy than uniform frame sampling and other frame selection strategies, while maintaining a lightweight inference process suitable for efficient 3D scene understanding.

**Status**: Published.

**Role**: Second author and corresponding author.

**Publisher**: IEEE Access.

**Keywords**: 3D Scene Understanding; 3D Visual Question Answering; Large Vision-Language Models; Query-Driven Evidence Retrieval; Visual Token Compression; Multimodal Reasoning.
