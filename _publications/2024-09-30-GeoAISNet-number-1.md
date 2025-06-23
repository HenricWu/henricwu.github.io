---
title: "AIS Data-Guided Geolocation Correction Method for Low-Orbit Satellite Remote Sensing Imagery"
collection: publications
category: manuscripts
permalink: /publication/2024-09-30-ais-geolocation-correction
excerpt: 'This paper proposes a novel AIS data-guided geolocation correction method that improves maritime object localization in low-Earth orbit satellite imagery using a deep learning approach.'
date: 2024-09-30
venue: 'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (Volume: 17, Pages: 18703–18726)'
slidesurl: ''
paperurl: 'https://doi.org/10.1109/JSTARS.2024.3470903'
bibtexurl: ''
citation: 'Haoyang Wu, Zishuo Huang, Qinyou Hu, Xin Ran, Qiang Mei. (2024). "AIS Data-Guided Geolocation Correction Method for Low-Orbit Satellite Remote Sensing Imagery." <i>IEEE J-STARS</i>, 17, 18703–18726. DOI:10.1109/JSTARS.2024.3470903.'
---

Accurate geolocation of maritime objects in satellite imagery is challenging due to geometric distortions, atmospheric conditions, and sensor inaccuracies in low-Earth orbit satellites. This study presents a novel automatic identification system (AIS) data-guided geolocation correction method that integrates real-time AIS data with satellite imagery to rectify geolocation errors.

The approach utilizes the GeoAISNet neural network, which enhances positional accuracy without relying on ground control points. By incorporating a modified YOLOv8 architecture with orientation parameters and the convolutional block attention module (CBAM), detection performance improved significantly, achieving precision, recall, and F1 scores of 91.82%, 89.56%, and 90.67%, respectively.

Ablation studies demonstrated the crucial impact of feature integration and attention mechanisms. Results indicate a mean average precision of 89%, with general cargo ships achieving 99.9% AP50. Localization accuracy saw a notable improvement, with root-mean-squared error reduced from 12 to 3 m, and layer normalization further enhanced stability, increasing precision, recall, and F1 scores to 94.23%, 92.67%, and 93.44%, respectively.

The use of differential AIS data decreased maximum positional errors by 30%, achieving errors around 2 m. Computational efficiency was also enhanced, with processing time reduced from 2 to 0.5 s per image. This method effectively addresses oil spills and non-AIS vessel detection, expanding maritime surveillance capabilities. The global training dataset, validated with data from the South China Sea, ensures the method's applicability across diverse conditions.

**Funding**: This research was supported by the National Natural Science Foundation of China (Grant No. 52372316).

**Publisher**: IEEE

**ISSN**: Print: 1939-1404, Electronic: 2151-1535
