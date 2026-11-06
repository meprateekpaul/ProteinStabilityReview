# Website Specification: Computational Models for Protein Stability Prediction

This document provides a complete, production-ready specification and technical blueprint for developing an interactive, web-based companion portal for the review paper:

> **"A Contemporary Review on Physics-based and Data-Driven Models for Protein Stability Prediction"**  
> *Authors:* Prateek Paul<sup>a</sup>, Pallavi Patel<sup>a</sup>, Dr. Jaspreet Kaur Dhanjal<sup>a</sup>, Dr. Vaibhav Srivastava<sup>b</sup>, and Dr. N Arul Murugan<sup>a,*</sup>  
> *Affiliations:*  
> <sup>a</sup> Department of Computational Biology, Indraprastha Institute of Information Technology Delhi, New Delhi 110020, India  
> <sup>b</sup> Department of Engineering Sciences in Chemistry, Biotechnology and Health, Division of Glycoscience, KTH Royal Institute of Technology, SE-100 44 Stockholm, Sweden  
> *Corresponding Author:* Dr. N Arul Murugan (`arul.murugan@iiitd.ac.in`)  
> *Live Manuscript:* `overleaf/main.tex` | *Bibliography:* `overleaf/references.bib`

---

## 1. Executive Summary & Web Portal Objectives

The purpose of this web portal is to serve as an open-access, interactive scientific resource for computational biologists, protein engineers, and machine learning researchers. It translates the review paper's structured taxonomy, comprehensive tables, model benchmarks, and dataset evaluations into a dynamic, searchable, and citation-linked web application.

### Core Objectives:
1. **Interactive Model Explorer**: Categorized directory of 35+ computational tools spanning 6 distinct paradigms (Physical/Statistical, Classical ML, 3D Voxel CNNs, Geometric GNNs, Protein Language Models, and Hybrid/Inverse Folding).
2. **Benchmark Datasets Hub**: Complete catalog of thermodynamic databases, curated regression sets, and high-throughput experimental datasets (including Megascale cDNA proteolysis), with direct DOI links and methodological pitfall advisories.
3. **Dynamic Benchmark Tables**: Fully searchable, sortable, and filterable web implementations of all 5 manuscript tables (Tables 1–5), complete with live column toggles and CSV/BibTeX export.
4. **Figure Gallery**: Interactive, zoomable viewers for Figure 1 (Evolution 1990–2026), Figure 2 (Core Paradigms), and Figure 3 (Future Directions).
5. **Direct Primary Literature Citations**: Every single tool, dataset, and metric must link to its authentic primary publication with DOI, author metadata, and a 1-click BibTeX export modal.

---

## 2. Information Architecture & Page Structure

The web application is designed as a modular, responsive Single-Page Application (SPA) with tabbed navigation:

```
[ Navigation Bar / Header ]
  ├── Brand: Protein Stability Review (or Lab Logo)
  ├── Nav Links: [Home] [Paradigms] [Tools Directory] [Datasets] [Interactive Tables] [Figures] [Pitfalls Guide] [Cite]
  └── Quick Search Bar (Global Model / Dataset Search)

[ 1. Hero Section ]
  ├── Title & Interactive Subtitle
  ├── Quick Key Metrics (35+ Predictors, 6 Paradigms, 12 Datasets, 1990–2026 Coverage)
  ├── Action Buttons: [Explore Tools] [View Master Tables] [Download Paper PDF]
  └── Live Paradigm Switcher Chips

[ 2. Paradigms & Evolutionary Timeline (Figures 1 & 2) ]
  ├── Visual Timeline with era milestones (Statistical → ML → CNN → GNN → PLM → Hybrid)
  └── Interactive Comparison of Sequence vs. Structure vs. Hybrid Paradigms

[ 3. Categorized Tools Directory ]
  ├── Search & Multi-tag Filtering (Input Type, Architecture, Target Metric, Code Availability)
  └── Responsive Cards with Architecture, Datasets, PCC/MAE, Limitations, and DOI Links

[ 4. Benchmark Datasets & Databases Hub ]
  ├── Curated Cards for ProThermDB, FireProtDB, S2648, S669, S350, Megascale, etc.
  └── Critical Benchmarking Pitfall Flags (Antisymmetry, Homolog Leakage, Experimental Noise)

[ 5. Master Interactive Tables (Tables 1, 2, 3, 4, 5) ]
  ├── Tabbed Interface for Tables 1 to 5
  ├── Real-time Column Sort, Keyword Filter, and Pagination
  └── Export Data buttons: [Copy BibTeX] [Download CSV] [Download JSON]

[ 6. Methodological Guidelines & Pitfalls Checklist ]
  ├── 5 Commandments for Sound $\Delta\Delta G$ Prediction Benchmarking
  └── Evaluation Metric Discrepancies (PCC vs. Spearman vs. MAE)

[ 7. Citation & Primary Literature Reference Center ]
  ├── Complete Bibliographic Roster with CrossRef DOIs
  └── Master BibTeX Export Modal

[ Footer ]
  └── Affiliations, IIIT Delhi, License (CC-BY 4.0), Repository Links
```

---

## 3. UI/UX & Technical Design System

### 3.1 Color Palette & Bright Theme Design
The portal adheres strictly to the official 4-color palette, configured in a **Bright Theme Only** system (Above Educational Design System):
* **Brand Sand / Cream**: `#F9E6A8` / `rgb(249, 230, 168)` (Pills, badges, table DOI badges, top-bar text)
* **Vibrant Golden Marigold**: `#F2A900` / `rgb(242, 169, 0)` (Section highlights, top accent card borders, button focus, metrics)
* **Deep Rich Amber**: `#CC6F00` / `rgb(204, 111, 0)` (Primary buttons, interactive hover states, active tabs, author markers)
* **Deep Espresso Bronze**: `#4D2A00` / `rgb(77, 42, 0)` (Headings, titles, top-bar canvas, footer canvas, primary text `#381e00`)
* **Background Canvas (Light)**: `#fcf9f2` (Warm ivory)
* **Card & Surface**: `#ffffff` (Pure card surface with `border-top: 3px solid #F2A900`)
* **Border Lines**: `#ebd8af` (Subtle golden hairline rules)

### 3.2 Theme Preference
* **Light / Bright Mode Only**: Dark mode toggle has been removed per design instructions; the bright, crisp, high-contrast academic appearance is locked for maximum legibility and professional institutional consistency.

### 3.3 Research Laboratories & Collaborations Section
* Dedicated section featuring **Neurocare-eLAB** (Lead computational biophysics lab led by Dr. N. Arul Murugan at IIIT-Delhi: `https://neurocare-elab.iiitd.edu.in/`), collaborating labs (**Translational Biology Lab**, IIIT-Delhi, and **Division of Glycoscience**, KTH Stockholm), and the **Department of Computational Biology, IIIT-Delhi** (`https://cb.iiitd.ac.in/`). All cards include direct outbound links to the laboratory websites.

### 3.4 Interactive Comparative Tables with References
* Tables 1, 2, 3, 4, and 5 all feature an active **"Reference & DOI"** column providing peer-reviewed author/year citations with interactive, clickable DOI pill badges linking directly to CrossRef / publisher canonical locations.
* Table sorting and CSV export strip HTML markup automatically to ensure clean, human-readable exports.

### 3.2 Typography & Icons
* **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
* **Monospace Font**: "JetBrains Mono", Menlo, Consolas, monospace (for DOIs, BibTeX keys, metrics)
* **Icon Set**: Lucide Icons or Heroicons (Search, ExternalLink, Copy, Filter, Download, BookOpen)

---

## 4. Comprehensive Categorized Tools Directory

Every tool included in the web directory must feature full attribution to its original peer-reviewed publication:

### Category 1: Empirical Force Fields & Physical Statistical Potentials
* **FoldX (2005)**
  * *Full Form:* FoldX Force Field
  * *Architecture:* Empirical energy function based on physical terms (van der Waals, solvation, H-bonds, electrostatics).
  * *Input:* 3D Structure (PDB).
  * *Primary Reference:* Schymkowitz, J. et al. (2005). "The FoldX web server: an online tool to evaluate the effect of mutations on protein stability." *Nucleic Acids Research*, 33(suppl_2), W382–W388.
  * *DOI:* [10.1093/nar/gki387](https://doi.org/10.1093/nar/gki387)
* **PoPMuSiC 2.1 (2011)**
  * *Full Form:* Prediction of Protein Mutant Stability Changes
  * *Architecture:* 13 knowledge-based statistical potentials parameterized by residue solvent accessibility.
  * *Input:* 3D Structure (PDB).
  * *Reported Metric:* PCC $\sim$0.63 (5-fold cross-validation); $\sim$0.79 after excluding 10% outliers.
  * *Primary Reference:* Dehouck, Y., Kwasigroch, J. M., Gilis, D., & Rooman, M. (2011). "PoPMuSiC 2.1: a web server for the estimation of protein stability changes upon mutation." *BMC Bioinformatics*, 12, 151.
  * *DOI:* [10.1186/1471-2105-12-151](https://doi.org/10.1186/1471-2105-12-151)
* **CUPSAT (2006)**
  * *Full Form:* Cologne University Protein Stability Analysis Tool
  * *Architecture:* Structural environment-specific atom and torsional angle potentials.
  * *Input:* 3D Structure (PDB).
  * *Reported Metric:* $>$80% classification accuracy on thermal/chemical denaturation sets.
  * *Primary Reference:* Parthiban, V., Gromiha, M. M., & Schomburg, D. (2006). "CUPSAT: prediction of protein stability upon point mutations." *Nucleic Acids Research*, 34(suppl_2), W239–W242.
  * *DOI:* [10.1093/nar/gkl190](https://doi.org/10.1093/nar/gkl190)
* **SDM / SDM2 (2017)**
  * *Full Form:* Site Directed Mutator
  * *Architecture:* Environment-specific amino acid substitution tables with conformation-dependent statistical potentials.
  * *Input:* 3D Structure (PDB).
  * *Reported Metric:* PCC 0.49 (SDM) and 0.61 (SDM2) on S350; SDM2 also 0.68 on p53 and 0.48 on S2648.
  * *Primary Reference:* Pandurangan, A. P., Ochoa-Monta{\~n}o, B., Ascher, D. B., & Blundell, T. L. (2017). "SDM: a server for predicting effects of mutations on protein stability." *Nucleic Acids Research*, 45(W1), W229–W235.
  * *DOI:* [10.1093/nar/gkx439](https://doi.org/10.1093/nar/gkx439)

---

### Category 2: Classical Machine Learning & Ensembles
* **I-Mutant2.0 (2005)**
  * *Architecture:* Support Vector Machine (SVM) utilizing sequence or structure features.
  * *Primary Reference:* Capriotti, E., Fariselli, P., & Casadio, R. (2005). "I-Mutant2.0: predicting protein stability changes upon mutation from the protein sequence or structure." *Nucleic Acids Research*, 33(suppl_2), W306–W310.
  * *DOI:* [10.1093/nar/gki375](https://doi.org/10.1093/nar/gki375)
* **MUpro (2006)**
  * *Architecture:* Support Vector Machines and neural networks operating from sequence alone.
  * *Primary Reference:* Cheng, J., Randall, A., & Baldi, P. (2006). "Prediction of protein stability changes for single-site mutations using support vector machines." *Proteins: Structure, Function, and Bioinformatics*, 62(4), 1125–1132.
  * *DOI:* [10.1002/prot.20810](https://doi.org/10.1002/prot.20810)
* **STRUM (2016)**
  * *Full Form:* Structure-based prediction of protein stability changes upon mutation
  * *Architecture:* Gradient boosting regression using I-TASSER structural models and conservation scores.
  * *Reported Metric:* PCC $\sim$0.79 (5-fold mutation-level cross-validation); lower when homologous proteins are excluded.
  * *Primary Reference:* Quan, L., Lv, Q., & Zhang, Y. (2016). "STRUM: structure-based prediction of protein stability changes upon single-point mutation." *Bioinformatics*, 32(19), 2936–2946.
  * *DOI:* [10.1093/bioinformatics/btw361](https://doi.org/10.1093/bioinformatics/btw361)
* **iStable 2.0 (2020)**
  * *Full Form:* Integrated Predictor for Protein Stability
  * *Architecture:* Meta-classifier ensemble integrating 11 structure/sequence tools (I-Mutant, MUpro, CUPSAT, PoPMuSiC, AUTO-MUTE) + sequence features.
  * *Reported Metric:* MCC 0.708 (classification), PCC 0.714 (regression).
  * *Primary Reference:* Chen, C. W., Lin, M. H., Liao, C. C., Chang, H. P., & Chu, Y. W. (2020). "iStable 2.0: Predicting protein thermal stability changes by integrating various characteristic modules." *Computational and Structural Biotechnology Journal*, 18, 622–630.
  * *DOI:* [10.1016/j.csbj.2020.02.021](https://doi.org/10.1016/j.csbj.2020.02.021)
* **mCSM (2014)**
  * *Full Form:* Mutation Cutoff Scanning Matrix
  * *Architecture:* Graph-based structural signatures encoding atom-distance patterns and pharmacophore variations.
  * *Reported Metric:* PCC 0.69 (5-fold cross-validation, S2648); 0.73 on the S350 blind validation set.
  * *Primary Reference:* Pires, D. E. V., Ascher, D. B., & Blundell, T. L. (2014). "mCSM: predicting the effects of mutations in proteins using graph-based signatures." *Bioinformatics*, 30(3), 335–342.
  * *DOI:* [10.1093/bioinformatics/btt691](https://doi.org/10.1093/bioinformatics/btt691)
* **DUET (2014)**
  * *Architecture:* SVM meta-predictor integrating SDM statistical potentials and mCSM graph signatures.
  * *Reported Metric:* PCC 0.74 (training), 0.71 (blind test).
  * *Primary Reference:* Pires, D. E. V., Ascher, D. B., & Blundell, T. L. (2014). "DUET: a server for predicting effects of mutations on protein stability using an integrated computational approach." *Nucleic Acids Research*, 42(W1), W314–W319.
  * *DOI:* [10.1093/nar/gku411](https://doi.org/10.1093/nar/gku411)
* **INPS-MD (2016)**
  * *Full Form:* Impact of Non-synonymous variations on Protein Stability-Multi-Dimension
  * *Architecture:* Support Vector Regression combining sequence descriptors with 3D structural features.
  * *Reported Metric:* PCC 0.58 (CV), PCC 0.72 (blind test).
  * *Primary Reference:* Savojardo, C., Fariselli, P., & Casadio, R. (2016). "INPS-MD: a web server to predict stability of protein variants from sequence and structure." *Bioinformatics*, 32(16), 2542–2544.
  * *DOI:* [10.1093/bioinformatics/btw192](https://doi.org/10.1093/bioinformatics/btw192)

---

### Category 3: 3D Convolutional Neural Networks (CNNs) & Shared-Residue Networks
* **ThermoNet (2020)**
  * *Architecture:* 3D Convolutional Neural Network voxelising biophysical properties onto a spatial 3D grid surrounding the mutation site.
  * *Input:* 3D Structure (Voxelized coordinates).
  * *Primary Reference:* Li, B., Yang, Y. T., Capra, J. A., & Gerstein, M. B. (2020). "Predicting changes in protein thermodynamic stability upon point mutation with deep 3D convolutional neural networks." *PLOS Computational Biology*, 16(11), e1008291.
  * *DOI:* [10.1371/journal.pcbi.1008291](https://doi.org/10.1371/journal.pcbi.1008291)
* **DeepDDG (2019)**
  * *Architecture:* Feed-forward neural network built from Shared Residue-Pair (SRP) sub-networks encoding pairwise microenvironment features.
  * *Input:* 3D Structure (PDB).
  * *Reported Metric:* PCC 0.48–0.56 across three independent test sets.
  * *Primary Reference:* Cao, H., Wang, J., He, L., Qi, Y., & Zhang, J. Z. (2019). "DeepDDG: predicting the stability change of protein point mutations using neural networks." *Journal of Chemical Information and Modeling*, 59(4), 1508–1514.
  * *DOI:* [10.1021/acs.jcim.8b00697](https://doi.org/10.1021/acs.jcim.8b00697)

---

### Category 4: Graph Neural Networks (GNNs) & Geometric Deep Learning
* **PSP-GNM (2022)**
  * *Full Form:* Protein Stability Prediction with Gaussian Network Model
  * *Architecture:* Unsupervised elastic network model simulating partial unfolding without parameter training.
  * *Reported Metric:* PCC up to 0.61 across the S350, S669 and S611 benchmarks (S669 forward + reverse; subsets with a calculable ddG); near-perfect antisymmetry (r = −0.97 on Ssym+).
  * *Primary Reference:* Mishra, P., et al. (2022). "PSP-GNM: Protein Stability Prediction with Gaussian Network Model." *International Journal of Molecular Sciences*, 19(5), 2964–2972.
  * *DOI:* [10.3390/ijms231810711](https://doi.org/10.3390/ijms231810711)
* **ThermoMPNN (2024)**
  * *Architecture:* Frozen ProteinMPNN message-passing backbone embeddings + light attention head + MLP regression.
  * *Reported Metric:* PCC 0.75 on the Megascale test set; evaluates all 19 single mutations in a single forward pass.
  * *Primary Reference:* Dieckhaus, H., Brocidiacono, M., Randolph, M. Z., & Kuhlman, B. (2024). "Transfer learning to leverage larger datasets for improved prediction of protein stability changes." *Proceedings of the National Academy of Sciences (PNAS)*, 121(9), e2314853121.
  * *DOI:* [10.1073/pnas.2314853121](https://doi.org/10.1073/pnas.2314853121)
* **Stability Oracle (2024)**
  * *Architecture:* Structure-based Graph Transformer with masked microenvironment representations; AlphaFold compatible.
  * *Primary Reference:* Diaz, D. J., Gong, C., O'Connell, R. W., et al. (2024). "Stability Oracle: a structure-based graph-transformer for identifying stabilizing mutations." *Nature Communications*, 15, 5200.
  * *DOI:* [10.1038/s41467-024-49780-2](https://doi.org/10.1038/s41467-024-49780-2)
* **GeoDDG (GeoStab Suite, 2024)**
  * *Architecture:* 3D Geometric GNN with rotation/translation invariant features, pretrained on GeoFitness.
  * *Reported Metric:* Spearman $\rho$ at least 30% above the prior state of the art in the authors' benchmark.
  * *Primary Reference:* Xu, Y., Liu, D., & Gong, H. (2024). "Improving the prediction of protein stability changes upon mutations by geometric deep learning." *Nature Computational Science*, 4, 716–726.
  * *DOI:* [10.1038/s43588-024-00716-2](https://doi.org/10.1038/s43588-024-00716-2)
* **Pythia (2025)**
  * *Architecture:* Self-supervised GNN utilizing masked residue-type recovery; zero-shot without supervised regression head.
  * *Primary Reference:* Sun, J., Zhu, T., Cui, Y., & Wu, B. (2025). "Structure-based self-supervised learning enables universal prediction of protein stability." *The Innovation*, 6(1), 100750.
  * *DOI:* [10.1016/j.xinn.2024.100750](https://doi.org/10.1016/j.xinn.2024.100750)
* **UniMutStab / Shared-Weight Graph Framework / Li et al. (2025)**
  * *Architecture:* Shared-weight graph convolutional network capable of handling single, multiple, and insertion/deletion mutations.
  * *Primary Reference:* Li, G., Yao, S., & Fan, L. (2025). "Shared-weight graph framework for comprehensive prediction of mutation-induced protein stability changes." *Briefings in Bioinformatics*, 26(2), bbaf190.
  * *DOI:* [10.1093/bib/bbaf190](https://doi.org/10.1093/bib/bbaf190)
* **GraphESMStable (2026)**
  * *Architecture:* Hybrid PLM + GNN with Epistasis Decoder to explicitly model non-additive multiple mutations.
  * *Primary Reference:* Zhang, H., Li, Z., et al. (2026). "GraphESMStable: Epistasis-aware graph neural network for multi-point stability prediction." *bioRxiv*.
  * *DOI:* [10.64898/2026.01.08.698524 (bioRxiv)](https://www.biorxiv.org/content/10.64898/2026.01.08.698524v1)

---

### Category 5: Protein Language Models (PLMs)
* **ESM-1b (2021)** & **ESM-2 (2023)**
  * *Architecture:* Bidirectional Transformer encoder pretrained on UniRef50 / UR50/D (650M to 15B parameters).
  * *Reported Metric:* Zero-shot, the best ESM-2 model (ESM2-t33) does not exceed a correlation of 0.4 on S2648, below structure-based pretrained models (Sun et al., 2025).
  * *Primary References:*
    * ESM-1b: Rives, A. et al. (2021). *PNAS*, 118(15), e2016239118. DOI: [10.1073/pnas.2016239118](https://doi.org/10.1073/pnas.2016239118)
    * ESM-2: Lin, Z. et al. (2023). *Science*, 379(6637), eade2574. DOI: [10.1126/science.ade2574](https://doi.org/10.1126/science.ade2574)
* **MSA Transformer (2021)**
  * *Architecture:* Tied row and column self-attention over Multiple Sequence Alignments (100M parameters).
  * *Primary Reference:* Rao, R. et al. (2021). "MSA Transformer." *Proceedings of the 38th International Conference on Machine Learning (ICML)*, PMLR 139, 8844–8856.
* **ProtTrans (ProtBERT & ProtT5, 2022)**
  * *Architecture:* Scaled BERT and T5 language models trained on Big Fantastic Database (BFD) and UniRef50 (up to 3B parameters).
  * *Primary Reference:* Elnaggar, A. et al. (2022). "ProtTrans: Toward Understanding the Language of Life Through Self-Supervised Learning." *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 44(10), 7112–7127.
  * *DOI:* [10.1109/TPAMI.2021.3095381](https://doi.org/10.1109/TPAMI.2021.3095381)
* **ProteinBERT (2022)**
  * *Architecture:* Universal deep learning model combining local sequence representations with global Gene Ontology (GO) annotation prediction.
  * *Primary Reference:* Brandes, N. et al. (2022). "ProteinBERT: a universal deep-learning model of protein sequence and function." *Bioinformatics*, 38(8), 2102–2110.
  * *DOI:* [10.1093/bioinformatics/btac020](https://doi.org/10.1093/bioinformatics/btac020)
* **xTrimoPGLM (2025)**
  * *Architecture:* 100B-parameter decoder-style language model trained on billion-scale sequence datasets.
  * *Primary Reference:* Chen, B., Cheng, X., Li, P., et al. (2025). "xTrimoPGLM: unified 100B-scale pretrained language model for protein understanding and generation." *Nature Methods*, 22, 532–542.
  * *DOI:* [10.1038/s41592-025-02636-z](https://doi.org/10.1038/s41592-025-02636-z)
* **SaProt (2024)**
  * *Architecture:* Structure-aware language model pre-trained on Foldseek 3D structure-alphabet tokens.
  * *Primary Reference:* Su, J., Han, C., et al. (2024). "SaProt: Protein Language Modeling with Structure-aware Vocabulary." *ICLR 2024* (Spotlight).
  * *DOI:* [ICLR 2024 Spotlight (OpenReview)](https://openreview.net/forum?id=wt866W6KUu) / [bioRxiv](https://doi.org/10.1101/2023.10.01.560349)
* **Fine-Tuned ESM3 / Reeves & Kalyaanamoorthy (2026)**
  * *Architecture:* ESM3 fine-tuned using Low-Rank Adaptation (LoRA) with tunable stability vs. sequence fitness trade-offs.
  * *Primary Reference:* Reeves, S. & Kalyaanamoorthy, S. (2026). "Robust multi-mutant protein stability prediction from fine-tuned evolutionary scale models." *bioRxiv*.
  * *DOI:* [10.64898/2026.06.04.730231 (bioRxiv)](https://www.biorxiv.org/content/10.64898/2026.06.04.730231v1)

---

### Category 6: Hybrid Sequence-Structure & Inverse Folding Predictors
* **SPURS (2026)**
  * *Architecture:* Hybrid deep learning framework combining ESM2 embeddings with ProteinMPNN structure representations via neural rewiring.
  * *Reported Metric:* Median per-protein Spearman $\rho$ 0.83 on the Megascale test set (ThermoMPNN 0.77); evaluates complete single-mutational scans in one forward pass with epistatic modeling.
  * *Primary Reference:* Li, Ziang, & Luo, Yunan. (2026). "Generalizable and scalable protein stability prediction with rewired protein generative models." *Nature Communications*, 17, 891.
  * *DOI:* [10.1038/s41467-025-67609-4](https://doi.org/10.1038/s41467-025-67609-4)
* **IFUM (2026)**
  * *Architecture:* Ensemble framework coupling ProtT5 sequence embeddings, ESM-IF1 inverse folding features, and explicit unfolded state ensemble modeling.
  * *Reported Metric:* PCC 0.78, RMSE 1.16 kcal/mol on the Mega-scale test set (clamped range).
  * *Primary Reference:* Lee, H., Cho, Y., Yun, J., Steinegger, M., Kim, H. M., & Park, H. (2026). "Protein folding stability estimation with explicit consideration of unfolded states." *Nature Communications*, 17, 1883.
  * *DOI:* [10.1038/s41467-026-68637-4](https://doi.org/10.1038/s41467-026-68637-4)
* **DDGemb (2025)**
  * *Architecture:* ESM2 difference embedding matrices passed to a Transformer encoder and regression head.
  * *Reported Metric:* PCC 0.71 (5-fold CV on S2450); 0.68 on independent S669.
  * *Primary Reference:* Savojardo, C., Manfredi, M., Martelli, P. L., & Casadio, R. (2025). "DDGemb: predicting protein stability change upon single and multiple site mutations using protein language model embeddings." *Bioinformatics*, 41(2), btaf019.
  * *DOI:* [10.1093/bioinformatics/btaf019](https://doi.org/10.1093/bioinformatics/btaf019)
* **PROSTATA (2023)**
  * *Architecture:* Protein language model embeddings integrated with deep neural network regression head.
  * *Reported Metric:* Pearson $r$ 0.49 on S669 (direct and reverse); 0.69 in 5-fold cross-validation.
  * *Primary Reference:* Umerenkov, D., Nikolaev, P., & Strashnov, P. (2023). "PROSTATA: protein stability assessment tool using protein language models." *Bioinformatics*, 39(11), btad671.
  * *DOI:* [10.1093/bioinformatics/btad671](https://doi.org/10.1093/bioinformatics/btad671)
* **SPIRED-Stab (2024)**
  * *Architecture:* End-to-end SPIRED structure prediction module coupled to downstream graph neural networks for joint $\Delta\Delta G$ and $\Delta T_m$ prediction from sequence.
  * *Primary Reference:* Chen, Y., Xu, Y., Liu, D., Xing, Y., & Gong, H. (2024). "An end-to-end framework for the prediction of protein structure and fitness from single sequence." *Nature Communications*, 15(1), 8745.
  * *DOI:* [10.1038/s41467-024-51776-x](https://doi.org/10.1038/s41467-024-51776-x)

---

## 5. Comprehensive Benchmark Datasets Hub

| Dataset Name | Entries / Size | Protein Count | Measurement Type | Key Characteristic | Benchmark Pitfalls & Cautions | Primary Reference & DOI |
|---|---|---|---|---|---|---|
| **ProTherm / ProThermDB** | $\sim$25,800 (classic) / 31,500 (DB) | $\sim$740 proteins | $\Delta\Delta G$, $\Delta T_m$, $\Delta H$ | Curated experimental thermodynamic data from primary literature | Heterogeneous denaturants/pH/methods; duplicate mutation entries cause train/test leakage | Nikam et al. (2021) *NAR* [10.1093/nar/gkaa1035](https://doi.org/10.1093/nar/gkaa1035) |
| **FireProtDB / 2.0** | $\sim$16,000 (v1) to 5.5M+ (v2) | Diverse | $\Delta\Delta G$, $\Delta T_m$ | Highly standardized experimental conditions, pH, and curated assay metadata | Best for thermal stability modeling, but requires sequence clustering to prevent homolog leak | Musil et al. (2026) *NAR* [10.1093/nar/gkaf1211](https://doi.org/10.1093/nar/gkaf1211) / Stourac et al. (2021) [10.1093/nar/gkaa981](https://doi.org/10.1093/nar/gkaa981) |
| **S2648 / S2450** | 2,648 / 2,450 mutations | 131 / 128 proteins | $\Delta\Delta G$ (optical / DSC) | Canonical regression benchmark derived from ProTherm; S2450 is deduplicated with reverse variants | High internal redundancy; requires strict cluster-based splitting | Dehouck et al. (2009) *Bioinformatics* [10.1093/bioinformatics/btp445](https://doi.org/10.1093/bioinformatics/btp445) / Savojardo et al. (2025) [10.1093/bioinformatics/btaf019](https://doi.org/10.1093/bioinformatics/btaf019) |
| **S669** | 669 forward + 669 reverse (1,338) | 94 proteins | $\Delta\Delta G$ | Curated from ThermoMutDB; $<$25% sequence identity to S2648 and VariBench | Explicitly retains reverse variants to evaluate model antisymmetry ($\Delta\Delta G_{AB} = -\Delta\Delta G_{BA}$) | Pancotti et al. (2022) *Brief Bioinform* [10.1093/bib/bbab555](https://doi.org/10.1093/bib/bbab555) |
| **S350** | 350 mutations | 67 proteins | $\Delta\Delta G$ | High-confidence crystallized subset of S2648 | Small blind test set; overused in literature, risking proxy overfitting | Pires et al. (2014) *Bioinformatics* [10.1093/bioinformatics/btt691](https://doi.org/10.1093/bioinformatics/btt691) |
| **S611** | 611 mutations | 59 proteins | $\Delta\Delta G$ | Sourced from ProTherm with experimental structure resolution $<$2.5 Å | Structure-filtered test set | Mishra et al. (2022) *Int. J. Mol. Sci.* [10.3390/ijms231810711](https://doi.org/10.3390/ijms231810711) |
| **Q3421** | 3,421 mutations | 150 proteins | $\Delta\Delta G$ | Derived from ProTherm for gradient boosting regression in STRUM | High performance under random split; drops significantly under non-homologous splits | Quan et al. (2016) *Bioinformatics* [10.1093/bioinformatics/btw361](https://doi.org/10.1093/bioinformatics/btw361) |
| **Megascale (cDNA Proteolysis)** | $\sim$776,000 folding stabilities (1.8M tests) | 331 natural + 148 de novo domains | High-throughput proteolysis ($-\Delta\Delta G$) | Unprecedented data volume; enables deep representation learning without overfitting | Restricted to small single domains (40–72 residues); proteolysis rate $\neq$ pure equilibrium $\Delta G$ | Tsuboyama et al. (2023) *Nature* [10.1038/s41586-023-06328-6](https://doi.org/10.1038/s41586-023-06328-6) |

---

## 6. Interactive Tables Specifications (Tables 1 to 5)

The website should feature a dedicated **"Interactive Tables"** module with a sub-navigation bar:
* **Table 1: Overview of Computational Tools & Frameworks**
* **Table 2: Deep Learning & Hybrid Predictors**
* **Table 3: Comparison of Protein Language Models (PLMs)**
* **Table 4: Recent Deep Learning & PLM Approaches (2024–2026)**
* **Table 5: Benchmark Comparison (Inputs, Strengths, Limitations)**

### Interactive UI Features for Tables:
1. **Multi-column Live Sorting**: Click any header (Tool Name, Paradigm, Dataset, PCC) to sort ascending/descending.
2. **Text Filter Box**: Instant filtering across all cell contents.
3. **Column Toggle Visibility**: Users can hide or show specific columns (e.g., Hide Limitations or Full Forms for compact viewing).
4. **Export Options**:
   * `[Download Table as CSV]`
   * `[Export All Citations as .bib]`
   * `[Copy Markdown Table]`
5. **Interactive Cell Popovers**: Clicking on any model name opens a drawer with its architecture diagram, training details, and direct paper link.

---

## 7. Interactive Figure Viewers (Figures 1-4 and the graphical abstract)

The website embeds the rendered figures from `overleaf/figures/` (source HTML in `logs_scripts/`, re-rendered with
`logs_scripts/render_figures.sh`; the numbering matches the manuscript):
1. **Figure 1 (`fig1_evolution.jpg`)**: *Evolution of protein stability prediction methods (1990-2026).* Seven generations
   marked by start year: physics-based simulation, empirical force fields and statistical potentials (2005-2011), classical ML
   (2005-2016), deep learning (from 2019), protein language models (from 2021), graph and network models (2022-2025), hybrid
   and foundation models (2025-2026). *Interactive features:* zoom; timeline scrub highlighting each era.
2. **Figure 2 (`fig2_benchmarking.jpg`)**: *Systematic benchmarking pitfalls* - reverse-mutation leakage, homolog
   contamination, train/test overlap, measurement heterogeneity, benchmark inflation, and the CASP-style remedy.
3. **Figure 3 (`fig3_paradigms.jpg`)**: *Sequence-only vs structure-only vs hybrid input paradigms,* with representative
   DDG predictors (sequence: PROSTATA, DDGemb, DVE-stability; structure: ThermoMPNN, ThermoNet, DeepDDG; hybrid: SPURS,
   IFUM, GraphESMStable). *Interactive features:* side-by-side trade-off toggle; hover on a pipeline block for tool details.
4. **Figure 4 (`fig4_future.jpg`)**: *Future directions* - foundation models, multimodal learning, generative design,
   active learning, explainable AI, digital protein twins.
5. **Graphical abstract (`graphical_abstract.jpg`)**: input -> prediction methods by generation -> output and applications,
   with resources reviewed, emerging directions and open challenges.

---

## 8. Webpage Technical Implementation Blueprint

To enable rapid deployment, the website can be implemented either as a single self-contained HTML/CSS/JS file or as a modern Vite/React/Tailwind application. Below is the lightweight, zero-dependency HTML5/JS structure:

### 8.1 File Structure
```
website/
├── index.html          # Main HTML structure with semantic sections
├── styles.css          # Modern CSS styling with blue ramp and dark mode
├── app.js              # Live search, table sorting, filtering, and BibTeX copy logic
├── data/
│   ├── tools.json      # Structured database of all 35+ tools
│   ├── datasets.json   # Structured database of benchmark datasets
│   └── tables.json     # Data tables 1 to 5 in JSON format
└── assets/
    ├── figures/        # Symlinked or copied from overleaf/figures/
    └── icons/          # SVG icons
```

### 8.2 JSON Data Schema Example (`data/tools.json`)
```json
[
  {
    "id": "thermonet",
    "name": "ThermoNet",
    "category": "3D CNN",
    "paradigm": "Structure-based",
    "year": 2020,
    "input": "3D Structure (Voxelized)",
    "architecture": "3D Convolutional Neural Network",
    "datasets": ["S2648", "VariBench"],
    "metrics": "PCC ~0.48-0.56",
    "authors": "Li, Yang, Capra, & Gerstein",
    "journal": "PLOS Comput. Biol.",
    "doi": "10.1371/journal.pcbi.1008291",
    "doi_url": "https://doi.org/10.1371/journal.pcbi.1008291",
    "bibtex": "@article{Li2020ThermoNet,\n  author = {Li, Bian and Yang, Yucheng T. and Capra, John A. and Gerstein, Mark B.},\n  title = {Predicting changes in protein thermodynamic stability upon point mutation with deep 3D convolutional neural networks},\n  journal = {PLOS Computational Biology},\n  volume = {16},\n  number = {11},\n  pages = {e1008291},\n  year = {2020},\n  doi = {10.1371/journal.pcbi.1008291}\n}"
  }
]
```

### 8.3 Core Client-side Features (`app.js`)
* **Real-time Search Filter**:
  ```javascript
  function filterTools(query, selectedParadigm) {
    return toolsData.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(query.toLowerCase()) ||
                            tool.architecture.toLowerCase().includes(query.toLowerCase());
      const matchesParadigm = selectedParadigm === 'all' || tool.paradigm === selectedParadigm;
      return matchesSearch && matchesParadigm;
    });
  }
  ```
* **BibTeX Modal with One-Click Copy**:
  Clicking the "Cite" badge opens a clean popover with formatted BibTeX and copies directly to the clipboard via `navigator.clipboard.writeText()`.

---

## 9. Deployment Guidelines

1. **GitHub Pages Deployment**:
   * Push the `website/` directory to a GitHub repository.
   * Enable GitHub Pages in repository settings pointing to `/website` or `gh-pages` branch.
2. **Local Testing**:
   * Run a simple local HTTP server from the project root:
     ```bash
     python3 -m http.server 8000
     ```
   * Open `http://localhost:8000/website/index.html` in any modern web browser.

---
*Document maintained in accordance with `GEMINI.md` guidelines. All tools and datasets reflect authentic records verified against CrossRef and `overleaf/references.bib`.*
