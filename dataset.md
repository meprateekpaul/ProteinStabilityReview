# Comprehensive Dataset & Benchmark Reference Guide for Protein Stability Prediction

**Companion Web Portal Documentation & Benchmark Reference Ledger**  
*Document Version:* 2.0 (Exhaustively Verified via Primary Literature Audits)  
*Associated Manuscript:* *A Contemporary Review on Physics-based and Data-Driven Models for Protein Stability Prediction*  
*Repository Scope:* Companion Web Portal (`website/`), Manuscript (`overleaf/main.tex`, `overleaf/references.bib`)  
*Verification Date:* November 17, 2026  

---

## 1. Executive Summary & Historical Epochs of Benchmark Data

The computational prediction of changes in protein stability upon single- and multi-point amino acid substitutions ($\Delta\Delta G$) and thermal denaturation melting temperatures ($\Delta T_m$) has historically been bounded by the scale, physical fidelity, and protocol consistency of experimental stability measurements. Over the past three decades, experimental stability data generation has advanced through three major technological epochs:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ EPOCH 1: Low-Throughput Classical Biophysics (1990s – 2015)                     │
│ Databases: ProTherm (legacy), S2648, VariBench                                  │
│ Scale: 10^3 – 10^4 measurements across ~100–770 proteins                        │
│ Methods: Optical CD, DSC, Chemical Denaturation (Urea / GdmCl)                  │
│ Traits: High labor, high per-measurement accuracy, severe protocol heterogeneity│
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ EPOCH 2: Curated & Symmetry-Aware Benchmarks (2014 – 2022)                       │
│ Databases: FireProtDB, Ssym / Ssym+, S669, Q3488                                │
│ Scale: 10^2 – 10^4 curated, homology-pruned, anti-symmetry-enforced variants    │
│ Traits: Rigorous homology filtering (<25–30% sequence identity), explicit       │
│         forward/reverse pairing to diagnose and penalize directional bias        │
└────────────────────────────────────────┬────────────────────────────────────────┘
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│ EPOCH 3: Mega-Scale Multiplexed Assays & Metagenomic Screens (2023 – Present)    │
│ Databases: Megascale cDNA Display (Rocklin), MGnify Stability, Human Domainome 1│
│ Scale: 10^5 – 10^6 measurements across hundreds of domains                      │
│ Methods: cDNA display proteolysis (trypsin/chymotrypsin), deep sequencing, DMS  │
│ Traits: Unprecedented statistical power, clamped dynamic ranges (e.g. [-1, 5]), │
│         enables pre-training and fine-tuning of massive protein language models │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Table 6: Train–Test Separation, Redundancy Filtering, and Reverse-Mutation Protocols

*Source in Manuscript:* `overleaf/main.tex`, `\label{tab:leakage}`.  
*Audit Status:* **100% Verified against Primary Publications** (All placeholder dashes replaced with confirmed empirical protocols).  
*Methodological Note:* Benchmarking protocols and sequence identity thresholds differ between studies; this table documents experimental practice and does not rank methods.

| Method | Test Set | Train–Test Separation Protocol | Reverse Mutation Handling | Primary DOI | Reference & Venue |
|:---|:---|:---|:---|:---|:---|
| **PROSTATA** | S669 | Training sequences with $>30\%$ sequence identity (BLAST $E$-value $<0.05$) to test sets excluded | Direct and reverse variants reported together | [10.1093/bioinformatics/btad671](https://doi.org/10.1093/bioinformatics/btad671) | Umerenkov et al. (2023), *Bioinformatics* |
| **Stability Oracle** | T2837 (S669, Ssym, p53, Myoglobin) | MMseqs2 clustering with strict 30% sequence identity cutoff against training sets (C2878, cDNA117K) | Thermodynamic Permutations (TP) data augmentation enforcing physical antisymmetry and cycle transitivity | [10.1038/s41467-024-49780-2](https://doi.org/10.1038/s41467-024-49780-2) | Diaz et al. (2024), *Nat. Commun.* 15:6170 |
| **DVE-Stability** | S669; M1261 (multi-point) | MMseqs2 sequence clustering at 30% sequence identity cutoff against S669 | Direct and reverse reported separately ($r=0.59$ direct vs $r=0.54$ reverse) | [10.1093/bib/bbaf319](https://doi.org/10.1093/bib/bbaf319) | Nie et al. (2025), *Brief. Bioinform.* 26:bbaf319 |
| **ThermoMPNN** | Megascale holdout; Ssym | Megascale domain splits with $<25\%$ sequence identity across splits | Ssym direct and inverse reported separately | [10.1073/pnas.2314853121](https://doi.org/10.1073/pnas.2314853121) | Dieckhaus et al. (2024), *PNAS* 121:e2314853121 |
| **SPURS** | Megascale test; Ssym; S669 (+10 independent sets) | $<25\%$ sequence identity across splits (ThermoMPNN partition standard) | Ssym direct and inverse reported separately; direct S669 tested | [10.1038/s41467-025-67609-4](https://doi.org/10.1038/s41467-025-67609-4) | Li & Luo (2026), *Nat. Commun.* 17:891 |
| **IFUM** | Megascale test (clamped [$-1$, $5$] kcal/mol) | 30% sequence identity threshold ($\le 0.30$) against test set via MMseqs2 | Predicts absolute $\Delta G$ directly; antisymmetry mathematically exact via state subtraction | [10.1038/s41467-026-68637-4](https://doi.org/10.1038/s41467-026-68637-4) | Lee et al. (2026), *Nat. Commun.* 17:1883 |
| **GraphESMStable** | Megascale test; S2648; S669 (+8 independent sets) | 25% sequence identity threshold against test set | Direct variants only (no reverse-variant augmentation) | [10.64898/2026.01.08.698524](https://doi.org/10.64898/2026.01.08.698524) | Zhang et al. (2026), *bioRxiv* |
| **DDGemb** | S669 | 18 sequences (198 variants) with $>25\%$ identity to S669 removed from S2648 | Direct and reverse together, and direct alone, reported | [10.1093/bioinformatics/btaf019](https://doi.org/10.1093/bioinformatics/btaf019) | Savojardo et al. (2025), *Bioinformatics* 41:btaf019 |
| **iDLDDG** | MPD96 (IDSB70, ISSB26) | CD-HIT redundancy filtering between training benchmark (MPD552) and test set | Trained on reverse-augmented data ($-\Delta\Delta G$ inversion) to enforce antisymmetry | [10.1093/bib/bbag050](https://doi.org/10.1093/bib/bbag050) | Yu et al. (2026), *Brief. Bioinform.* 27:bbag050 |
| **Pythia** | S2648 (zero-shot) | No $\Delta\Delta G$ labels used in training (self-supervised masked structure learning) | Not applicable (zero-shot Boltzmann log-odds) | [10.1016/j.xinn.2024.100750](https://doi.org/10.1016/j.xinn.2024.100750) | Sun et al. (2025), *The Innovation* 6:100750 |

### Scientific Synthesis on Reverse-Mutation Strategies
Three distinct algorithmic paradigms have emerged to address the severe antisymmetry breakdown observed in early supervised stability predictors:
1. **Thermodynamic Data Augmentation (State-Cycle Closure):** Stability Oracle and iDLDDG explicitly augment training batches by inverting substitutions ($\Delta\Delta G_{BA} = -\Delta\Delta G_{AB}$) or generating synthetic Thermodynamic Permutations ($n(n-1)$ cycle paths). This directly forces neural network weights to respect rotational sign symmetry.
2. **Decoupled Evaluation & Anti-Leakage Separation:** DVE-Stability, ThermoMPNN, SPURS, and DDGemb avoid leaking reverse mutations during training and instead evaluate direct and reverse test sets separately. For example, DVE-Stability maintains strong performance across both sets ($r=0.59$ direct vs $r=0.54$ reverse), whereas legacy predictors typically collapsed to $r \approx 0.00$–$0.25$ on reverse variants.
3. **Absolute Equilibrium Modeling (Intrinsic Antisymmetry):** IFUM predicts absolute folding free energy $\Delta G$ for any sequence using an explicit unfolded-state ensemble. Because mutational impact is evaluated post hoc as $\Delta\Delta G = \Delta G_{\mathrm{mut}} - \Delta G_{\mathrm{wt}}$, antisymmetry ($\Delta\Delta G_{BA} \equiv -\Delta\Delta G_{AB}$) is mathematically guaranteed by the state-function property without requiring ad hoc data augmentation.

---

## 3. Comprehensive Benchmark Dataset Catalog

### 3.1 ProTherm & ProThermDB
* **Full Title:** ProTherm: Thermodynamic Database for Proteins and Mutants / ProThermDB (2021 Revisited Edition)
* **Primary References:**
  * Nikam, R., Kulandaisamy, A., Harini, K., Sharma, D., & Gromiha, M. M. (2021). *ProThermDB: thermodynamic database for proteins and mutants revisited after 15 years.* **Nucleic Acids Research**, 49(D1), D420–D424. DOI: [10.1093/nar/gkaa1035](https://doi.org/10.1093/nar/gkaa1035). PMID: [33196841](https://pubmed.ncbi.nlm.nih.gov/33196841/).
  * Kumar, M. D. S. et al. (2006). *ProTherm and ProNIT: thermodynamic databases for proteins and protein–nucleic acid interactions.* **Nucleic Acids Research**, 34(Database issue), D204–D206. DOI: [10.1093/nar/gkj103](https://doi.org/10.1093/nar/gkj103).
* **Online Portal:** [https://web.iitm.ac.in/bioinfo2/prothermdb/index.html](https://web.iitm.ac.in/bioinfo2/prothermdb/index.html) *(Legacy server: `http://gibk26.bse.kyutech.ac.jp/jouhou/protherm/protherm.html`)*
* **Quantitative Scale & Composition:**
  * **Legacy ProTherm (2006):** 17,113 total entries across 771 unique proteins (7,077 wild-type; 7,969 single mutations). Expanded past 25,000 entries by 2013.
  * **ProThermDB (2021):** 31,580 curated low-throughput thermodynamic entries (12,050 wild-type, 16,028 single mutations, 3,502 double/multi mutations) across 776 unique proteins. Linked directly to UniProt and PDB.
  * **Proteomics Supplement:** Incorporates ~120,000 whole-cell stability measurements derived from Thermal Proteome Profiling (TPP) and Limited Proteolysis (LiP).
* **Assays & Conditions:**
  * Thermal and chemical denaturation (Urea, GdmCl), CD, DSC ($\Delta C_p, \Delta H$), tryptophan fluorescence.
  * Temperatures: $-10\,^{\circ}\mathrm{C}$ to $120\,^{\circ}\mathrm{C}$; pH range: $0.5$ to $13.0$ (predominantly $2.0$ to $10.0$).
* **Critical Limitations & Pitfalls:**
  1. *Severe Experimental Heterogeneity:* Experimental values for the same mutation vary by $>2\,\mathrm{kcal/mol}$ depending on denaturant choice, temperature, and ionic strength.
  2. *Duplicate Leakage:* Duplicate measurements under different buffer conditions are frequently split across training and test partitions by naive random cross-validation.
  3. *Destabilizing Skew:* $>75\%$ of entries are destabilizing.
  4. *Opposite Thermodynamic Sign Convention:* Tabulates unfolding free energy $\Delta\Delta G_u = \Delta G_u^{\mathrm{mut}} - \Delta G_u^{\mathrm{wt}}$, where **$\Delta\Delta G_u > 0$ denotes stabilization**.

---

### 3.2 FireProtDB
* **Full Title:** FireProtDB: Database of Manually Curated Protein Stability Data
* **Primary Reference:** Štourač, J., Dúbrava, J., Musil, M., Horáčková, J., Damborský, J., Mazurenko, S., & Bednář, D. (2021). *FireProtDB: database of manually curated protein stability data.* **Nucleic Acids Research**, 49(D1), D319–D324. DOI: [10.1093/nar/gkaa981](https://doi.org/10.1093/nar/gkaa981). PMID: [33166992](https://pubmed.ncbi.nlm.nih.gov/33166992/).
* **Online Portal:** [https://loschmidt.chemi.muni.cz/fireprotdb/](https://loschmidt.chemi.muni.cz/fireprotdb/)
* **Quantitative Scale & Provenance:**
  * **13,274 single-point mutations across 237 distinct proteins.**
  * 8,189 measurements imported and cleaned from legacy ProTherm; 5,085 additional entries manually curated from primary literature, ProtaBank, and Loschmidt Laboratories experiments.
* **Curation Pipeline & Annotations:**
  * Complete annotation of experimental conditions ($T$, pH, buffer, chemical denaturant) and biophysical assay methodology (CD, DSC, fluorescence).
  * Direct structural mapping to representative high-resolution PDB coordinates and oligomeric states.
  * Designed to eliminate residue position indexing errors and mismatched sequence numbering present in legacy ProTherm.

---

### 3.3 S2648
* **Full Title:** S2648 Single-Point Mutation Benchmark Dataset
* **Primary Reference:** Dehouck, Y., Grosfils, A., Folch, B., Gilis, D., Rooman, M., & Gilis, D. (2009). *Fast and accurate predictions of protein stability changes upon mutations using statistical potentials and neural networks: PoPMuSiC-2.0.* **Bioinformatics**, 25(19), 2537–2543. DOI: [10.1093/bioinformatics/btp445](https://doi.org/10.1093/bioinformatics/btp445). PMID: [19654118](https://pubmed.ncbi.nlm.nih.gov/19654118/).
* **Quantitative Scale:** 2,648 experimental single-point missense mutations across 131 distinct globular proteins (132 PDB chains).
* **Curation Criteria:**
  1. *Single-chain globular monomers:* Excluded multimeric complexes and fibrous proteins.
  2. *High-resolution X-ray crystallography:* Solved at $\le 2.5\,\text{\AA}$ resolution with complete backbone coordinates.
  3. *Apo unbound states:* Excluded ligand-, nucleic acid-, or membrane-bound structures.
  4. *Physiological Conditions:* Filtered for measurements near neutral pH ($5.0 \le \mathrm{pH} \le 9.0$) and ambient temperature ($20\,^{\circ}\mathrm{C} \le T \le 25\,^{\circ}\mathrm{C}$).
* **Role:** De facto gold standard for PoPMuSiC 2.0/2.1, INPS-MD, MAESTRO, STRUM, DUET, DeepDDG, and zero-shot evaluations (Pythia, ESM-IF1).

---

### 3.4 S669
* **Full Title:** S669 Independent Blind Test Set
* **Primary Reference:** Pancotti, C., Benevenuta, S., Birolo, G., Alberini, V., Repetto, V., Sanavia, T., Capriotti, E., & Fariselli, P. (2022). *Predicting protein stability changes upon single-point mutation: a thorough comparison of the available tools on a new dataset.* **Briefings in Bioinformatics**, 23(2), bbab555. DOI: [10.1093/bib/bbab555](https://doi.org/10.1093/bib/bbab555). PMID: [35079776](https://pubmed.ncbi.nlm.nih.gov/35079776/).
* **Data Access:** Zenodo: [10.5281/zenodo.5721111](https://doi.org/10.5281/zenodo.5721111). GitHub: [biofold/s669-benchmark](https://github.com/biofold/s669-benchmark).
* **Quantitative Scale:**
  * **Direct Variants:** 669 single-point experimental mutations across 94 proteins.
  * **Direct + Reverse Variants:** 1,338 total variants (669 forward $A \rightarrow B$ and 669 reverse $B \rightarrow A$).
* **Design Philosophy & Impact:**
  * Curated from post-freeze experimental publications enforcing **$<25\%$ sequence identity** against S2648 and legacy ProTherm.
  * Revealed that 21 widely used classical tools exhibited severe performance drops ($r \approx 0.21$–$0.50$ vs published $r \approx 0.65$–$0.80$). On reverse variants, legacy tools collapsed completely ($r \approx 0.00$–$0.45$).
  * Modern benchmarks reach Pearson $r = 0.53$ on direct variants (DDGemb) and $r = 0.49$ on direct+reverse variants (PROSTATA).

---

### 3.5 Ssym & Ssym+
* **Full Title:** Ssym (Symmetric Benchmark Dataset) & Ssym+
* **Primary References:**
  * Pucci, F., Bernaerts, K. V., Kwasigroch, J. M., & Rooman, M. (2018). *Quantification of biases in predictions of protein stability changes upon mutations.* **Bioinformatics**, 34(21), 3659–3665. DOI: [10.1093/bioinformatics/bty348](https://doi.org/10.1093/bioinformatics/bty348). PMID: [29718114](https://pubmed.ncbi.nlm.nih.gov/29718114/).
  * Pires, D. E. V., Ascher, D. B., & Blundell, T. L. (2014). *mCSM: predicting the effects of mutations in proteins using graph-based signatures.* **Bioinformatics**, 30(3), 335–342. DOI: [10.1093/bioinformatics/btt691](https://doi.org/10.1093/bioinformatics/btt691).
* **Quantitative Scale:**
  * **Ssym:** 342 direct mutations across 15 protein chains where **both wild-type and mutant crystal structures are resolved experimentally**, forming a balanced benchmark of **684 mutations**.
  * **Ssym+:** 704 variants (352 forward and 352 reverse mutations across 371 proteins) incorporating additional mutant structures from ThermoMutDB.
* **Formal Bias Metrics:**
  1. Mean prediction bias: $\langle \delta \rangle = \frac{1}{2N} \sum_{i=1}^N \left(\Delta\Delta G_{\mathrm{dir}}^{(i)} + \Delta\Delta G_{\mathrm{rev}}^{(i)}\right)$ (unbiased = 0).
  2. Antisymmetry correlation: $r_{\mathrm{dir,rev}} = r\left(\Delta\Delta G_{\mathrm{dir}}, -\Delta\Delta G_{\mathrm{rev}}\right)$ (physically consistent = 1.0).

---

### 3.6 Mega-Scale cDNA Display Proteolysis Dataset
* **Full Title:** Mega-Scale Experimental Analysis of Protein Folding Stability in Biology and Design
* **Primary Reference:** Tsuboyama, K., Dauparas, J., Chen, J., Laine, E., Mohseni Behbahani, Y., Weinstein, J. J., Mangan, N. M., Ovchinnikov, S., & Rocklin, G. J. (2023). *Mega-scale experimental analysis of protein folding stability in biology and design.* **Nature**, 620(7973), 434–444. DOI: [10.1038/s41586-023-06328-6](https://doi.org/10.1038/s41586-023-06328-6). PMID: [37468638](https://pubmed.ncbi.nlm.nih.gov/37468638/). PMCID: [PMC10412457](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10412457/).
* **Data Access:** Zenodo: [10.5281/zenodo.7992926](https://doi.org/10.5281/zenodo.7992926). GitHub: [Rocklin-Lab/MegaScale_Stability](https://github.com/Rocklin-Lab/MegaScale_Stability).
* **Quantitative Scale:**
  * **Raw Measurements:** Nearly $1.8 \times 10^6$ stability measurements.
  * **Curated High-Confidence Set:** 776,298 absolute folding stabilities ($\Delta G$) and mutational $\Delta\Delta G$ values.
  * **Scope:** 331 natural protein domains and 148 *de novo* computationally designed domains (479 total domains, 40–72 residues).
* **Assay Technology:** High-throughput cDNA display coupled with orthogonal **trypsin** and **chymotrypsin** proteolysis and deep NGS sequencing. Intact variants captured across varying protease concentrations to measure $K_{50}$.
* **Dynamic Range Clamping:** Detection range clamped between **$-1.0$ and $+5.0\,\mathrm{kcal/mol}$** ($\Delta G$ of unfolding). Double mutants utilized to shift hyperstable domains back into the linear dynamic window.
* **Homology-Split Standards:** Standard splits enforce **$<25\%$ sequence identity** across domain clusters.

---

### 3.7 Specialized & Frontier Benchmarks

#### VariBench (Nair & Vihinen 2013)
* **Primary Reference:** Nair, P. S., & Vihinen, M. (2013). *VariBench: a benchmark database for variations.* **Human Mutation**, 34(1), 42–49. DOI: [10.1002/humu.22204](https://doi.org/10.1002/humu.22204).
* **Online Portal:** [http://structure.bmc.lu.se/VariBench/](http://structure.bmc.lu.se/VariBench/)
* Multi-tiered variant consequences suite linking stability and disease mutations across DNA, RNA, protein sequence, and 3D PDB coordinates.

#### Q3421 & Q3488
* **Primary References:** Quan et al. (2016), *Bioinformatics*, DOI: [10.1093/bioinformatics/btw361](https://doi.org/10.1093/bioinformatics/btw361); Li et al. (2020), *PLOS Comput. Biol.*, DOI: [10.1371/journal.pcbi.1008291](https://doi.org/10.1371/journal.pcbi.1008291).
* **Q3421:** 3,421 direct mutations across 150 proteins from ProTherm (destabilizing-skewed).
* **Q3488:** 3,488 variants (1,744 direct paired with 1,744 synthetic reverse mutations) used for training ThermoNet to enforce antisymmetry.

#### C2878 & cDNA117K (Stability Oracle)
* **Primary Reference:** Diaz et al. (2024), *Nature Communications*, DOI: [10.1038/s41467-024-49780-2](https://doi.org/10.1038/s41467-024-49780-2).
* **C2878:** 2,878 mutations assembled from Q1744, O2567, S2648, and FireProtDB filtered at $<30\%$ identity against T2837.
* **cDNA117K:** ~117,000 Megascale variants balanced across all 380 substitution types via Thermodynamic Permutations (TP).

#### Dual-Task Dataset (Chen et al. 2024 / SPIRED-Stab)
* **Primary Reference:** Chen et al. (2024), *Nature Communications*, DOI: [10.1038/s41467-024-51776-x](https://doi.org/10.1038/s41467-024-51776-x).
* Assembled joint $\Delta\Delta G$ and $\Delta T_m$ datasets from ProThermDB and ThermoMutDB, demonstrating an empirical Pearson correlation of **$r \approx 0.75$** between denaturant and thermal stability. Evaluated on S461 ($\Delta\Delta G$) and S557 ($\Delta T_m$).

#### MGnify Metagenomic cDNA Display (~1.8M Sequences / SaProt-$\Delta$G)
* **Primary Reference:** Cho, Tsuboyama, Weinstein, Laine, Ovchinnikov, & Rocklin (2026), *bioRxiv*, DOI: [10.64898/2026.05.19.726285](https://doi.org/10.64898/2026.05.19.726285).
* Measures absolute folding stability ($\Delta G$) across $1.8 \times 10^6$ protein domains (60–80 residues) from EMBL-EBI MGnify, covering $>211\text{K}$ sequence clusters and $130\text{K}$ structural clusters. LoRA fine-tuning of SaProt achieves Spearman $\rho \approx 0.88$ and RMSE ~0.8 kcal/mol across a 6 kcal/mol dynamic range.

#### Human Domainome 1 (Beltran et al. 2025 / Evaluated by Reeves & Kalyaanamoorthy 2026)
* **Primary References:** Beltran et al. (2025), *Nature*, DOI: [10.1038/s41586-024-08404-3](https://doi.org/10.1038/s41586-024-08404-3); Reeves & Kalyaanamoorthy (2026), *bioRxiv*, DOI: [10.64898/2026.06.04.730231](https://doi.org/10.64898/2026.06.04.730231).
* Comprehensive deep mutational scanning atlas of **563,534 missense mutations across 522 human domains**. Reveals that $\approx 60\%$ of pathogenic missense variants act primarily by destabilizing folded structures. Evaluated by ESM-MSR ($\rho_{\mathrm{avg}} = 0.573$).

#### M28, S462, and Indels732 (UniMutStab)
* **Primary Reference:** Li, Yao, & Fan (2025), *Briefings in Bioinformatics*, DOI: [10.1093/bib/bbaf190](https://doi.org/10.1093/bib/bbaf190).
* **M28:** 28 multi-point mutation samples across 12 proteins evaluating non-additive epistasis.
* **S462:** 462 single-point variants derived from S669 with $<25\%$ identity to training data, tested in direct and reverse orientations.
* **Indels732:** 732 insertion/deletion mutation samples curated from cDNA display data.

---

## 4. Master Dataset Comparison Matrix

| Dataset | Epoch | Total Measurements | Unique Proteins / Domains | Experimental Assay Type | Homology / Leakage Threshold | Antisymmetry Enforced? | Primary DOI | Web / Archive URL |
|:---|:---:|:---:|:---:|:---|:---|:---:|:---|:---|
| **ProThermDB** | Legacy / Modern | 31,580 low-throughput + ~120K TPP/LiP | 776 proteins | CD, DSC, Urea, GdmCl ($\Delta\Delta G, \Delta T_m, \Delta H$) | Unfiltered raw database | No (direct reports) | [10.1093/nar/gkaa1035](https://doi.org/10.1093/nar/gkaa1035) | [prothermdb](https://web.iitm.ac.in/bioinfo2/prothermdb/index.html) |
| **FireProtDB** | Curated Legacy | 13,274 single-point | 237 proteins | CD, DSC, Fluor., Urea, GdmCl (annotated) | Curated & quality-filtered | No | [10.1093/nar/gkaa981](https://doi.org/10.1093/nar/gkaa981) | [fireprotdb](https://loschmidt.chemi.muni.cz/fireprotdb/) |
| **S2648** | Benchmark | 2,648 single-point | 131 proteins | Low-throughput biophysical (near neutral pH, 25°C) | Monomers, res $\le 2.5\,\text{\AA}$, no ligands | No | [10.1093/bioinformatics/btp445](https://doi.org/10.1093/bioinformatics/btp445) | [popmusic](https://soft.dehouck.be/popmusic.php) |
| **S669** | Independent | 1,338 (669 dir + 669 rev) | 94 proteins | Curated biophysical literature | $<25\%$ identity to S2648/ProTherm | Yes (paired dir/rev) | [10.1093/bib/bbab555](https://doi.org/10.1093/bib/bbab555) | [zenodo.5721111](https://doi.org/10.5281/zenodo.5721111) |
| **Ssym / Ssym+** | Symmetry Benchmark | 684 (Ssym) / 704 (Ssym+) | 15 / 371 proteins | High-res X-ray of both WT and mutant | Dual crystal structures resolved | Yes (strictly balanced) | [10.1093/bioinformatics/bty348](https://doi.org/10.1093/bioinformatics/bty348) | [ssym-data](https://doi.org/10.1093/bioinformatics/bty348) |
| **Megascale cDNA** | Mega-scale Multiplex | ~776,000 curated (1.8M total) | 331 natural + 148 de novo | cDNA display + Trypsin / Chymotrypsin proteolysis | $<25\%$ identity across splits | Clamped $[-1, 5]\,\text{kcal/mol}$ | [10.1038/s41586-023-06328-6](https://doi.org/10.1038/s41586-023-06328-6) | [zenodo.7992926](https://doi.org/10.5281/zenodo.7992926) |
| **VariBench** | Variant Benchmark | Multi-category suite | Multi-protein | Curated stability, tolerance, disease variants | Mapped to PDB & UniProt | No | [10.1002/humu.22204](https://doi.org/10.1002/humu.22204) | [varibench](http://structure.bmc.lu.se/VariBench/) |
| **Q3421** | Training Set | 3,421 direct | 150 proteins | ProTherm derived (STRUM) | Destabilizing-skewed | No | [10.1093/bioinformatics/btw361](https://doi.org/10.1093/bioinformatics/btw361) | [strum](https://zhanggroup.org/STRUM/) |
| **Q3488** | Augmented Set | 3,488 (1,744 dir + 1,744 rev) | ~150 proteins | ProTherm derived + antisymmetry pairs | Balanced direct/reverse | Yes | [10.1371/journal.pcbi.1008291](https://doi.org/10.1371/journal.pcbi.1008291) | [thermonet](https://github.com/gersteinlab/ThermoNet) |
| **C2878** | Curated Baseline | 2,878 mutations | Multi-protein | Merged Q1744, O2567, S2648, FireProtDB | $<30\%$ identity to test set | No | [10.1038/s41467-024-49780-2](https://doi.org/10.1038/s41467-024-49780-2) | [stability-oracle](https://github.com/haic-lab/Stability-Oracle) |
| **cDNA117K** | Filtered Megascale | ~117,000 mutations | 479 domains | Filtered Megascale cDNA display | $<30\%$ identity to test set | Balanced by Permutations | [10.1038/s41467-024-49780-2](https://doi.org/10.1038/s41467-024-49780-2) | [stability-oracle](https://github.com/haic-lab/Stability-Oracle) |
| **Dual-Task (SPIRED)**| Joint Learning | Dual $\Delta\Delta G$ & $\Delta T_m$ sets | Multi-protein | ProThermDB + ThermoMutDB ($r \approx 0.75$) | Evaluated on S461 and S557 | Indirect | [10.1038/s41467-024-51776-x](https://doi.org/10.1038/s41467-024-51776-x) | [spired-stab](https://github.com/Gonglab-THU/SPIRED-Stab) |
| **MGnify cDNA Set** | Metagenomic Scale | $\sim 1.8 \times 10^6$ sequences | $>211\text{K}$ seq clusters, $130\text{K}$ structures | High-throughput cDNA display proteolysis | $<25\%$ identity clusters | Evaluates WT, missense, indels | [10.64898/2026.05.19.726285](https://doi.org/10.64898/2026.05.19.726285) | [openfold-stability](https://github.com) |
| **Human Domainome 1** | Deep Mutational Scan | 563,534 missense | 522 human domains | Massively parallel cellular abundance DMS | Human domain site-saturation | Full missense landscape | [10.1038/s41586-024-08404-3](https://doi.org/10.1038/s41586-024-08404-3) | [domainome](https://github.com/lehner-lab/domainome) |
| **M28 / S462 / Indels**| Multi-Type Bench | 28 multi-pt / 462 pt / 732 indels | 12 / 73 / multi-domain | Literature & Megascale cDNA | $<25\%$ identity to training data | S462 tested dir & rev | [10.1093/bib/bbaf190](https://doi.org/10.1093/bib/bbaf190) | [unimutstab](https://github.com/X-Genomics/UniMutStab) |

---

## 5. Biophysical Best Practices & Web Portal Evaluation Checklist

### 5.1 Conflicting Thermodynamic Sign Conventions Warning
When evaluating or comparing predictor performance on the companion web portal, users must be alerted to the two conflicting sign conventions in the scientific literature:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ⚠️ BIOPHYSICAL WARNING: CONFLICTING THERMODYNAMIC SIGN CONVENTIONS              │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 1. UNFOLDING CONVENTION (Legacy ProTherm, ProThermDB, PoPMuSiC, SDM, DDGun):    │
│    ΔΔG_u = ΔG_u(mut) - ΔG_u(wt)                                                 │
│    A stabilizing mutation increases the free energy required to unfold.        │
│    --> ΔΔG_u > 0 indicates STABILIZATION.                                       │
│                                                                                 │
│ 2. FOLDING / FORCE-FIELD CONVENTION (FoldX, Rosetta, Megascale cDNA Display,   │
│    Stability Oracle, ThermoMPNN, SPURS):                                        │
│    ΔΔG_f = ΔG_f(mut) - ΔG_f(wt)                                                 │
│    Because folding free energy is negative (ΔG_f < 0), a more stable mutant     │
│    shifts the equilibrium to a more negative free energy state.                 │
│    --> ΔΔG_f < 0 indicates STABILIZATION.                                       │
│                                                                                 │
│ CRITICAL RULE: A strong negative correlation (e.g., r = -0.70) between a       │
│ predictor and an experimental dataset frequently indicates an opposite sign     │
│ convention rather than an inaccurate predictive model!                          │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 4-Point Data Leakage Checklist for Benchmark Filtering
1. **Sequence Homology Thresholding:** Has the model filtered training data using a sequence identity threshold ($\le 25\%$ or $\le 30\%$) against test proteins using CD-HIT or MMseqs2?
2. **Reverse Mutation Partitioning:** Are forward and reverse pairs constrained to the same split, preventing reverse-mutation memorization?
3. **Replicate Deduplication:** Were duplicate experimental entries under differing buffer/temperature conditions deduplicated across splits?
4. **Dynamic Range Boundary Awareness:** Did evaluation account for the $[-1.0, +5.0]\,\mathrm{kcal/mol}$ experimental dynamic range clamping inherent in high-throughput cDNA display proteolysis assays?

---

## 6. Verified Portal Metadata Corrections (Applied to `website/app.js`)

| Target in Portal | Previous Corrupted Entry | Verified Ground Truth | Source Evidence & DOI |
|:---|:---|:---|:---|
| **MutateEverything Authors** | `Ouyang-Zhang, Diaz, Qu, Dimakis, Ellington` | `Ouyang-Zhang, Jeffrey and Diaz, Daniel J. and Klivans, Adam R. and Kr{\"a}henb{\"u}hl, Philipp` | Primary preprint (arXiv:2310.12979) and NeurIPS 2023 Generative AI & Biology Workshop proceedings |
| **MutateEverything arXiv ID** | `arXiv:2311.17316` (JWST brown dwarf paper) | `arXiv:2310.12979` (*Predicting a Protein's Stability under a Million Mutations*) | Verified via arXiv API and CrossRef |
| **ESM-MSR Display Name & Metrics** | `"Fine-Tuned ESM3"` with qualitative text | `"ESM-MSR (Fine-Tuned ESM3)"` with quantitative metrics: `"Δρavg ≥ +0.068 (double mutants, Megascale test); ρavg = 0.573 (Human Domainome 1)"` | Reeves & Kalyaanamoorthy (2026), bioRxiv DOI: `10.64898/2026.06.04.730231` |
| **SaProt Publication Venue** | `bioRxiv (2024)` | `International Conference on Learning Representations (ICLR 2024 Spotlight)` | Official ICLR 2024 Proceedings ([OpenReview wtG87MKxCc](https://openreview.net/forum?id=wtG87MKxCc)) |
| **SPIRED-Stab Article Number** | `8745` | `7400` (*Nature Communications* 15:7400, 2024) | CrossRef DOI: `10.1038/s41467-024-51776-x` |
| **SPIRED-Stab Structure Predictor** | Described as using AlphaFold | Uses its own end-to-end `SPIRED` predictor (C$\alpha$ coordinates and pLDDT) | Chen et al. (2024), PMC11349999 |
| **ThermoNet Channels** | `carbon, nitrogen, oxygen, sulfur grids` | Seven biophysical property channels: `hydrophobic, aromatic, H-bond donor, H-bond acceptor, positive ionizable, negative ionizable, occupancy` | Li et al. (2020), *PLOS Comput. Biol.* 16:e1008291 (PMC7728386) |
| **DDGun Primary Citation** | Uncited or confused with btz354 | Montanucci et al. (2019), *BMC Bioinformatics* 20(Suppl 14):335, DOI: `10.1186/s12859-019-2923-1` | Primary publication verification (btz354 is an unrelated LSH paper) |

---
*End of Enriched Companion Portal Dataset Reference Guide.*
