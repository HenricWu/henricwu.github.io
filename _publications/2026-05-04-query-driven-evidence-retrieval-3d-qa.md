---
title: "Query-Driven Evidence Retrieval for Efficient 3D Question Answering"
collection: publications
category: manuscripts
permalink: /publication/2026-05-04-query-driven-evidence-retrieval-3d-qa
excerpt: 'This manuscript proposes Opti3D, a training-free and plug-and-play visual abstraction framework for efficient 3D visual question answering by retrieving compact, query-driven visual evidence from complex 3D scenes.'
date: 2026-05-07
venue: 'Manuscript submitted to IEEE Access'
slidesurl: ''
paperurl: ''
bibtexurl: ''
citation: 'Huihui Liu and <b>Haoyang Wu</b>. (2026). "Query-Driven Evidence Retrieval for Efficient 3D Question Answering." Manuscript submitted to <i>IEEE Access</i>. <b>Haoyang Wu is the corresponding author.</b>'
---

This manuscript presents Opti3D, a query-driven evidence retrieval framework for efficient 3D visual question answering. The work addresses the computational redundancy and attention dilution problems caused by directly feeding dense multi-view video streams or full 3D point clouds into large vision-language models.

Opti3D is designed as a training-free and plug-and-play adaptive visual abstraction module. Given a natural language query and a 3D scene, the framework constructs a global bird's-eye-view representation to preserve macroscopic spatial topology, while using instruction-guided open-vocabulary detection to identify query-relevant local candidates. A 3D ray-based instance merging strategy is further introduced to remove redundant cross-view observations and extract compact, high-quality visual evidence for downstream multimodal reasoning.

The method converts complex and unstructured 3D visual inputs into a refined visual prompt dossier consisting of global BEV context and selected optimal local views. This design follows a "less is more" principle, reducing unnecessary visual token consumption while improving spatial consistency, reasoning robustness, and hallucination resistance in 3D question answering.

Experiments on ScanQA and SQA3D demonstrate that Opti3D improves 3D QA performance in a zero-shot setting. The framework achieves stronger reasoning accuracy than uniform frame sampling and other frame selection strategies, while maintaining a lightweight inference process suitable for efficient 3D scene understanding.

**Status**: Manuscript submitted.

**Role**: Second author and corresponding author.

**Publisher**: IEEE Access, under review.

**Keywords**: 3D Scene Understanding; 3D Visual Question Answering; Large Vision-Language Models; Query-Driven Evidence Retrieval; Visual Token Compression; Multimodal Reasoning.
