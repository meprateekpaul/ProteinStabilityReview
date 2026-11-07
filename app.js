/**
 * Protein Stability Review - Companion Web Portal Script
 * Comprehensive Database of Tools, Datasets, and Benchmarks for Protein Stability Prediction
 */

// ============================================================================
// 1. DATA REPOSITORY
// ============================================================================

const toolsData = [
  // --- Category: Empirical & Physical Statistical Potentials ---
  {
    id: "foldx",
    name: "FoldX",
    full_form: "FoldX Force Field",
    year: 2005,
    category: "empirical",
    category_label: "Empirical Force Field",
    paradigm: "Structure-based",
    architecture: "Empirical physical energy function (van der Waals, solvation, H-bonds, electrostatics)",
    datasets: "Thousands of engineered mutants",
    metrics: "PCC ~0.50–0.65",
    authors: "Schymkowitz et al.",
    journal: "Nucleic Acids Res.",
    doi: "10.1093/nar/gki387",
    doi_url: "https://doi.org/10.1093/nar/gki387",
    bibtex: `@article{schymkowitz2005,
  author = {Schymkowitz, Joost and Borg, Jesper and Stricher, Francois and Nys, Robby and Rousseau, Frederic and Serrano, Luis},
  title = {The FoldX web server: an online force field},
  journal = {Nucleic Acids Research},
  volume = {33},
  number = {suppl_2},
  pages = {W382--W388},
  year = {2005},
  doi = {10.1093/nar/gki387}
}`
  },
  {
    id: "popmusic",
    name: "PoPMuSiC 2.1",
    full_form: "Prediction of Protein Mutant Stability Changes",
    year: 2011,
    category: "empirical",
    category_label: "Statistical Potentials",
    paradigm: "Structure-based",
    architecture: "13 knowledge-based statistical potentials weighted by solvent accessibility",
    datasets: "Thousands of experimental ΔΔG values (ProTherm)",
    metrics: "PCC 0.63 (5-fold CV); 0.79 excluding 10% outliers",
    authors: "Dehouck, Kwasigroch, Gilis, & Rooman",
    journal: "BMC Bioinformatics",
    doi: "10.1186/1471-2105-12-151",
    doi_url: "https://doi.org/10.1186/1471-2105-12-151",
    bibtex: `@article{dehouck2011,
  author = {Dehouck, Yves and Kwasigroch, Jean Marc and Gilis, Dimitri and Rooman, Marianne},
  title = {PoPMuSiC 2.1: a web server for the estimation of protein stability changes upon mutation and sequence optimality},
  journal = {BMC Bioinformatics},
  volume = {12},
  pages = {151},
  year = {2011},
  doi = {10.1186/1471-2105-12-151}
}`
  },
  {
    id: "cupsat",
    name: "CUPSAT",
    full_form: "Cologne University Protein Stability Analysis Tool",
    year: 2006,
    category: "empirical",
    category_label: "Statistical Potentials",
    paradigm: "Structure-based",
    architecture: "Structural environment-specific atom and torsional angle potentials",
    datasets: "1,538 thermal & 1,603 chemical denaturation mutations (ProTherm)",
    metrics: ">80% accuracy; PCC up to 0.77 (k-fold cross-validation)",
    authors: "Parthiban, Gromiha, & Schomburg",
    journal: "Nucleic Acids Res.",
    doi: "10.1093/nar/gkl190",
    doi_url: "https://doi.org/10.1093/nar/gkl190",
    bibtex: `@article{Parthiban2006CUPSATMutations,
  author = {Parthiban, V. and Gromiha, M. Michael and Schomburg, D.},
  title = {CUPSAT: prediction of protein stability upon point mutations},
  journal = {Nucleic Acids Research},
  volume = {34},
  number = {suppl_2},
  pages = {W239--W242},
  year = {2006},
  doi = {10.1093/nar/gkl190}
}`
  },
  {
    id: "sdm",
    name: "SDM / SDM2",
    full_form: "Site Directed Mutator",
    year: 2017,
    category: "empirical",
    category_label: "Statistical Potentials",
    paradigm: "Structure-based",
    architecture: "Environment-specific amino acid substitution tables (ESSTs) with conformation potentials",
    datasets: "2,690 point mutations from 132 protein structures (SDM2)",
    metrics: "PCC 0.49 (SDM) and 0.61 (SDM2) on S350",
    authors: "Pandurangan, Ochoa-Montaño, Ascher, & Blundell",
    journal: "Nucleic Acids Res.",
    doi: "10.1093/nar/gkx439",
    doi_url: "https://doi.org/10.1093/nar/gkx439",
    bibtex: `@article{Pandurangan2017SDMStability,
  author = {Pandurangan, Arun Prasad and Ochoa-Monta{\~n}o, Bernardo and Ascher, David B. and Blundell, Tom L.},
  title = {SDM: a server for predicting effects of mutations on protein stability},
  journal = {Nucleic Acids Research},
  volume = {45},
  number = {W1},
  pages = {W229--W235},
  year = {2017},
  doi = {10.1093/nar/gkx439}
}`
  },
  {
    id: "maestroweb",
    name: "MAESTROweb",
    full_form: "Multi AgEnt STability pRedictiOn",
    year: 2016,
    category: "empirical",
    category_label: "Multi-Agent Consensus",
    paradigm: "Structure-based",
    architecture: "Multi-agent machine-learning consensus combining statistical scoring functions, MLR, neural networks, and SVM",
    datasets: "SP1 (S2648) and SP4 (ProTherm) for regression; SS1 and SS2 for disulfide bonds",
    metrics: "PCC 0.68 (cross-validation, S2648 and SP4)",
    authors: "Laimer, Hiebl-Flach, Lengauer, & Lackner",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btv769",
    doi_url: "https://doi.org/10.1093/bioinformatics/btv769",
    bibtex: `@article{Laimer2016MAESTROweb,
  author = {Laimer, Josef and Hiebl-Flach, Julia and Lengauer, Daniel and Lackner, Peter},
  title = {MAESTROweb: a web server for structure-based protein stability prediction},
  journal = {Bioinformatics},
  volume = {32},
  number = {9},
  pages = {1414--1416},
  year = {2016},
  doi = {10.1093/bioinformatics/btv769}
}`
  },

  // --- Category: Classical Machine Learning & Ensembles ---
  {
    id: "imutant",
    name: "I-Mutant2.0",
    full_form: "I-Mutant 2.0",
    year: 2005,
    category: "ml",
    category_label: "Support Vector Machine",
    paradigm: "Sequence / Structure",
    architecture: "Support Vector Machine (SVM) trained on sequence or structure descriptors",
    datasets: "ProTherm database subset",
    metrics: "Classification accuracy ~77–80%",
    authors: "Capriotti, Fariselli, & Casadio",
    journal: "Nucleic Acids Res.",
    doi: "10.1093/nar/gki375",
    doi_url: "https://doi.org/10.1093/nar/gki375",
    bibtex: `@article{capriotti2005,
  author = {Capriotti, Emidio and Fariselli, Piero and Casadio, Rita},
  title = {I-Mutant2.0: predicting stability changes upon mutation from the protein sequence or structure},
  journal = {Nucleic Acids Research},
  volume = {33},
  number = {suppl_2},
  pages = {W306--W310},
  year = {2005},
  doi = {10.1093/nar/gki375}
}`
  },
  {
    id: "mupro",
    name: "MUpro",
    full_form: "MUpro",
    year: 2006,
    category: "ml",
    category_label: "Support Vector Machine",
    paradigm: "Sequence-based",
    architecture: "Support Vector Machines and Neural Networks operating from primary sequence alone",
    datasets: "S1614 & S2648 ProTherm subsets",
    metrics: "Accuracy ~84% (classification); PCC ~0.65",
    authors: "Cheng, Randall, & Baldi",
    journal: "Proteins",
    doi: "10.1002/prot.20810",
    doi_url: "https://doi.org/10.1002/prot.20810",
    bibtex: `@article{Cheng2006PredictionMachines.,
  author = {Cheng, Jianlin and Randall, Arlo and Baldi, Pierre},
  title = {Prediction of protein stability changes for single-site mutations using support vector machines},
  journal = {Proteins: Structure, Function, and Bioinformatics},
  volume = {62},
  number = {4},
  pages = {1125--1132},
  year = {2006},
  doi = {10.1002/prot.20810}
}`
  },
  {
    id: "strum",
    name: "STRUM",
    full_form: "Structure-based prediction of protein stability",
    year: 2016,
    category: "ml",
    category_label: "Gradient Boosting",
    paradigm: "Structure-based",
    architecture: "Gradient boosting regression combining I-TASSER models with sequence conservation",
    datasets: "Q3421 dataset (3,421 mutations)",
    metrics: "PCC 0.79 (mutation-based cross-validation); lower when homologous proteins are excluded",
    authors: "Quan, Lv, & Zhang",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btw361",
    doi_url: "https://doi.org/10.1093/bioinformatics/btw361",
    bibtex: `@article{quan2016,
  author = {Quan, L. and Lv, Q. and Zhang, Y.},
  title = {STRUM: structure-based prediction of protein stability changes upon single-point mutation},
  journal = {Bioinformatics},
  volume = {32},
  number = {19},
  pages = {2936--2946},
  year = {2016},
  doi = {10.1093/bioinformatics/btw361}
}`
  },
  {
    id: "istable",
    name: "iStable 2.0",
    full_form: "–-",
    year: 2020,
    category: "ml",
    category_label: "Meta-Classifier Ensemble",
    paradigm: "Hybrid Ensemble",
    architecture: "Machine-learning meta-classifier integrating 11 tools (I-Mutant, MUpro, CUPSAT, PoPMuSiC) + sequence features",
    datasets: "S2648 + independent test sets",
    metrics: "PCC 0.714 (regression); MCC 0.708 (classification); S630 independent test, structure-based model",
    authors: "Chen, Lin, Liao, et al.",
    journal: "Comput. Struct. Biotechnol. J.",
    doi: "10.1016/j.csbj.2020.02.021",
    doi_url: "https://doi.org/10.1016/j.csbj.2020.02.021",
    bibtex: `@article{Chen2020IStableModules,
  author = {Chen, Chi-Wei and Lin, Meng-Hsun and Liao, Chia-Ching and Chang, Hsien-Pin and Chu, Yi-Wen},
  title = {iStable 2.0: Predicting protein thermal stability changes by integrating various characteristic modules},
  journal = {Computational and Structural Biotechnology Journal},
  volume = {18},
  pages = {622--630},
  year = {2020},
  doi = {10.1016/j.csbj.2020.02.021}
}`
  },
  {
    id: "mcsm",
    name: "mCSM",
    full_form: "Mutation Cutoff Scanning Matrix",
    year: 2014,
    category: "ml",
    category_label: "Graph Signatures",
    paradigm: "Structure-based",
    architecture: "Graph-based structural signatures encoding atom-distance patterns and pharmacophore changes",
    datasets: "S350, S2648, and interaction datasets",
    metrics: "PCC 0.69 (5-fold CV, S2648); 0.73 (S350 blind test)",
    authors: "Pires, Ascher, & Blundell",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btt691",
    doi_url: "https://doi.org/10.1093/bioinformatics/btt691",
    bibtex: `@article{Pires2014MCSMSignatures,
  author = {Pires, Douglas E. V. and Ascher, David B. and Blundell, Tom L.},
  title = {mCSM: predicting the effects of mutations in proteins using graph-based signatures},
  journal = {Bioinformatics},
  volume = {30},
  number = {3},
  pages = {335--342},
  year = {2014},
  doi = {10.1093/bioinformatics/btt691}
}`
  },
  {
    id: "duet",
    name: "DUET",
    full_form: "–-",
    year: 2014,
    category: "ml",
    category_label: "Consensus Meta-Predictor",
    paradigm: "Structure-based",
    architecture: "Support Vector Machine integrating SDM statistical potentials and mCSM graph signatures",
    datasets: "S2648 ProTherm benchmark",
    metrics: "PCC 0.74 (training), 0.71 (blind test)",
    authors: "Pires, Ascher, & Blundell",
    journal: "Nucleic Acids Res.",
    doi: "10.1093/nar/gku411",
    doi_url: "https://doi.org/10.1093/nar/gku411",
    bibtex: `@article{Pires2014DUETApproach,
  author = {Pires, Douglas E. V. and Ascher, David B. and Blundell, Tom L.},
  title = {DUET: a server for predicting effects of mutations on protein stability using an integrated computational approach},
  journal = {Nucleic Acids Research},
  volume = {42},
  number = {W1},
  pages = {W314--W319},
  year = {2014},
  doi = {10.1093/nar/gku411}
}`
  },
  {
    id: "inpsmd",
    name: "INPS-MD",
    full_form: "Impact of Non-synonymous variations on Protein Stability",
    year: 2016,
    category: "ml",
    category_label: "Support Vector Regression",
    paradigm: "Structure + Sequence",
    architecture: "Support Vector Regression combining sequence descriptors with 3D structural features",
    datasets: "S2648 dataset",
    metrics: "PCC 0.58 (cross-validation); 0.72 (blind test, INPS3D)",
    authors: "Savojardo, Fariselli, Martelli, & Casadio",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btw192",
    doi_url: "https://doi.org/10.1093/bioinformatics/btw192",
    bibtex: `@article{Savojardo2016INPS-MDStructure,
  author = {Savojardo, Castrense and Fariselli, Piero and Martelli, Pier Luigi and Casadio, Rita},
  title = {INPS-MD: a web server to predict stability of protein variants from sequence and structure},
  journal = {Bioinformatics},
  volume = {32},
  number = {16},
  pages = {2542--2544},
  year = {2016},
  doi = {10.1093/bioinformatics/btw192}
}`
  },
  {
    id: "pfeature",
    name: "Pfeature",
    full_form: "–-",
    year: 2023,
    category: "ml",
    category_label: "Feature Toolkit",
    paradigm: "Sequence / Structure",
    architecture: "Feature engineering and extraction library computing >200,000 sequence, structural, and evolutionary descriptors for ML models",
    datasets: "Universal feature toolkit for protein stability and bioactivity modeling",
    metrics: "Over 200,000 computed descriptors; supports thousands of structural/sequence variants",
    authors: "Pande, Patiyal, Lathwal, et al.",
    journal: "J. Comput. Biol.",
    doi: "10.1089/cmb.2022.0241",
    doi_url: "https://doi.org/10.1089/cmb.2022.0241",
    bibtex: `@article{Pande2023PfeatureModels,
  author = {Pande, Akshara and Patiyal, Sumeet and Lathwal, Anjali and Arora, Chakit and Kaur, Dilraj and Dhall, Anjali and Mishra, Gaurav and Raghava, Gajendra P. S.},
  title = {Pfeature: A Tool for Computing Wide Range of Protein Features and Building Prediction Models},
  journal = {Journal of Computational Biology},
  volume = {30},
  number = {2},
  pages = {204--222},
  year = {2023},
  doi = {10.1089/cmb.2022.0241}
}`
  },

  // --- Category: 3D Convolutional Neural Networks & Shared-Residue Nets ---
  {
    id: "thermonet",
    name: "ThermoNet",
    full_form: "Thermodynamic Neural Network",
    year: 2020,
    category: "cnn",
    category_label: "3D Voxel CNN",
    paradigm: "Structure-based",
    architecture: "3D Convolutional Neural Network voxelising biophysical properties on a spatial grid around mutation",
    datasets: "S2648 + VariBench",
    metrics: "PCC 0.48–0.56 (independent tests)",
    authors: "Li, Yang, Capra, & Gerstein",
    journal: "PLOS Comput. Biol.",
    doi: "10.1371/journal.pcbi.1008291",
    doi_url: "https://doi.org/10.1371/journal.pcbi.1008291",
    bibtex: `@article{Li2020ThermoNet,
  author = {Li, Bian and Yang, Yucheng T. and Capra, John A. and Gerstein, Mark B.},
  title = {Predicting changes in protein thermodynamic stability upon point mutation with deep 3D convolutional neural networks},
  journal = {PLOS Computational Biology},
  volume = {16},
  number = {11},
  pages = {e1008291},
  year = {2020},
  doi = {10.1371/journal.pcbi.1008291}
}`
  },
  {
    id: "deepddg",
    name: "DeepDDG",
    full_form: "Deep Delta Delta G",
    year: 2019,
    category: "cnn",
    category_label: "Neural Network",
    paradigm: "Structure-based",
    architecture: "Neural network trained on more than 5,700 manually curated mutations",
    datasets: ">5,700 curated mutations",
    metrics: "PCC 0.48–0.56 (three independent test sets)",
    authors: "Cao, Wang, He, Qi, & Zhang",
    journal: "J. Chem. Inf. Model.",
    doi: "10.1021/acs.jcim.8b00697",
    doi_url: "https://doi.org/10.1021/acs.jcim.8b00697",
    bibtex: `@article{Cao2019DeepDDGNetworks,
  author = {Cao, Huali and Wang, Jingxue and He, Liping and Qi, Yifei and Zhang, John Z. H.},
  title = {DeepDDG: Predicting the Stability Change of Protein Point Mutations Using Neural Networks},
  journal = {Journal of Chemical Information and Modeling},
  volume = {59},
  number = {4},
  pages = {1508--1514},
  year = {2019},
  doi = {10.1021/acs.jcim.8b00697}
}`
  },

  // --- Category: Graph Neural Networks & Geometric Deep Learning ---
  {
    id: "pspgnm",
    name: "PSP-GNM",
    full_form: "Protein Stability Prediction with Gaussian Network Model",
    year: 2022,
    category: "gnn",
    category_label: "Elastic Network Model",
    paradigm: "Structure-based",
    architecture: "Unsupervised Gaussian elastic network model simulating partial unfolding without parameter training",
    datasets: "Evaluated on S350, S669, S611",
    metrics: "PCC up to 0.61 (S669, forward + reverse; 0.36 forward); 0.51 (S350), 0.57 (S611); subsets with a calculable ΔΔG",
    authors: "Mishra",
    journal: "Int. J. Mol. Sci.",
    doi: "10.3390/ijms231810711",
    doi_url: "https://doi.org/10.3390/ijms231810711",
    bibtex: `@article{Mishra2022PSP-GNMModel,
  author = {Mishra, Sambit Kumar},
  title = {PSP-GNM: Predicting Protein Stability Changes upon Point Mutations with a Gaussian Network Model},
  journal = {International Journal of Molecular Sciences},
  volume = {23},
  number = {18},
  pages = {10711},
  year = {2022},
  doi = {10.3390/ijms231810711}
}`
  },
  {
    id: "thermompnn",
    name: "ThermoMPNN",
    full_form: "–-",
    year: 2024,
    category: "gnn",
    category_label: "GNN Transfer Learning",
    paradigm: "Structure-based",
    architecture: "Frozen ProteinMPNN message-passing embeddings + light attention head + MLP regression",
    datasets: "Megascale cDNA proteolysis (391,090 filtered single substitutions)",
    metrics: "PCC 0.75 (Megascale test); 0.72 and 0.60 on Ssym direct and inverse",
    authors: "Dieckhaus, Brocidiacono, Randolph, & Kuhlman",
    journal: "PNAS",
    doi: "10.1073/pnas.2314853121",
    doi_url: "https://doi.org/10.1073/pnas.2314853121",
    bibtex: `@article{dieckhaus2024,
  author = {Dieckhaus, Henry and Brocidiacono, Michael and Randolph, Nicholas Z. and Kuhlman, Brian},
  title = {Transfer learning to leverage larger datasets for improved prediction of protein stability changes},
  journal = {Proceedings of the National Academy of Sciences},
  volume = {121},
  number = {6},
  pages = {e2314853121},
  year = {2024},
  doi = {10.1073/pnas.2314853121}
}`
  },
  {
    id: "stabilityoracle",
    name: "Stability Oracle",
    full_form: "Stability Oracle",
    year: 2024,
    category: "gnn",
    category_label: "Graph Transformer",
    paradigm: "Structure-based",
    architecture: "Graph Transformer with masked microenvironment representations; AlphaFold compatible",
    datasets: "C2878 and cDNA117K, with Thermodynamic Permutations augmentation",
    metrics: "Spearman ρ 0.53 (S669)",
    authors: "Diaz, Gong, Ouyang-Zhang, et al.",
    journal: "Nat. Commun.",
    doi: "10.1038/s41467-024-49780-2",
    doi_url: "https://doi.org/10.1038/s41467-024-49780-2",
    bibtex: `@article{Diaz2024StabilityOracle,
  author = {Diaz, Daniel J. and Gong, Chen and Ouyang-Zhang, Jiaqi and others},
  title = {Stability Oracle: a structure-based graph-transformer framework for identifying stabilizing mutations},
  journal = {Nature Communications},
  volume = {15},
  pages = {6170},
  year = {2024},
  doi = {10.1038/s41467-024-49780-2}
}`
  },
  {
    id: "mutateeverything",
    name: "MutateEverything",
    full_form: "MutateEverything",
    year: 2024,
    category: "hybrid",
    category_label: "PLM + Structure Hybrid",
    paradigm: "Sequence + Structure",
    architecture: "Parallel decoding on an ESM-2 and AlphaFold backbone: all single and double mutations scored in one forward pass",
    datasets: "Mega-scale cDNA proteolysis dataset",
    metrics: "Spearman ρ 0.56 (S669, single mutations)",
    authors: "Ouyang-Zhang, Diaz, Qu, et al.",
    journal: "arXiv",
    doi: "10.48550/arXiv.2311.17316",
    doi_url: "https://doi.org/10.48550/arXiv.2311.17316",
    bibtex: `@article{OuyangZhang2023MutateEverything,
  author = {Ouyang-Zhang, Jeffrey and Diaz, Daniel J. and Qu, Yan and Dimakis, Alex and Ellington, Andrew D.},
  title = {MutateEverything: Rapid Protein Mutational Scanning via Parallel Sequence-Structure Decoding},
  journal = {arXiv preprint arXiv:2311.17316},
  year = {2023},
  doi = {10.48550/arXiv.2311.17316}
}`
  },
  {
    id: "geoddg",
    name: "GeoDDG",
    full_form: "Geometric Deep Learning ΔΔG",
    year: 2024,
    category: "gnn",
    category_label: "Geometric Deep Learning",
    paradigm: "Structure-based",
    architecture: "3D Geometric GNN with rotation/translation invariant features, pretrained on GeoFitness",
    datasets: "S2648 and S8754 (training), S669 (test); GeoFitness pretraining on deep mutational scanning data",
    metrics: "Spearman ρ at least 30% above prior state of the art (reported benchmark)",
    authors: "Xu, Liu, & Gong",
    journal: "Nat. Comput. Sci.",
    doi: "10.1038/s43588-024-00716-2",
    doi_url: "https://doi.org/10.1038/s43588-024-00716-2",
    bibtex: `@article{Zhang2024GeoDDG3D,
  author = {Xu, Yunxin and Liu, Di and Gong, Haipeng},
  title = {Improving the prediction of protein stability changes upon mutations by geometric learning and a pre-training strategy},
  journal = {Nature Computational Science},
  volume = {4},
  number = {11},
  pages = {840--850},
  year = {2024},
  doi = {10.1038/s43588-024-00716-2}
}`
  },
  {
    id: "pythia",
    name: "Pythia",
    full_form: "Pythia GNN",
    year: 2025,
    category: "gnn",
    category_label: "Self-Supervised GNN",
    paradigm: "Structure-based",
    architecture: "Self-supervised GNN with masked residue-type pretraining; zero-shot without supervised head",
    datasets: "Pretrained on PDB structures",
    metrics: "PCC ~0.60; Spearman ρ ~0.62 (S2648 zero-shot)",
    authors: "Sun, Zhu, Cui, & Wu",
    journal: "The Innovation",
    doi: "10.1016/j.xinn.2024.100750",
    doi_url: "https://doi.org/10.1016/j.xinn.2024.100750",
    bibtex: `@article{Wu2024Pythia,
  author = {Sun, Jinyuan and Zhu, Tong and Cui, Yinglu and Wu, Bian},
  title = {Structure-based self-supervised learning enables ultrafast protein stability prediction upon mutation},
  journal = {The Innovation},
  volume = {6},
  number = {1},
  pages = {100750},
  year = {2025},
  doi = {10.1016/j.xinn.2024.100750}
}`
  },
  {
    id: "sharedweight",
    name: "UniMutStab / Shared-Weight Graph",
    full_form: "Shared-Weight Graph Framework for Protein Stability",
    year: 2025,
    category: "gnn",
    category_label: "Graph Convolutional Network",
    paradigm: "Structure-based",
    architecture: "Shared-weight GCN capable of handling single, multiple, and insertion/deletion mutations",
    datasets: "Mega-scale dataset",
    metrics: "PCC 0.41 (S462 direct); 0.58 (M28, multi-point)",
    authors: "Li, Yao, & Fan",
    journal: "Brief. Bioinform.",
    doi: "10.1093/bib/bbaf190",
    doi_url: "https://doi.org/10.1093/bib/bbaf190",
    bibtex: `@article{UniMutStab2025,
  author = {Li, Gen and Yao, Sijie and Fan, Long},
  title = {Shared-weight graph framework for comprehensive protein stability prediction across diverse mutation types},
  journal = {Briefings in Bioinformatics},
  volume = {26},
  number = {2},
  pages = {bbaf190},
  year = {2025},
  doi = {10.1093/bib/bbaf190}
}`
  },
  {
    id: "graphesmstable",
    name: "GraphESMStable",
    full_form: "GraphESMStable",
    year: 2026,
    category: "gnn",
    category_label: "PLM + GNN Epistasis",
    paradigm: "Hybrid",
    architecture: "PLM + GNN with Epistasis Decoder to explicitly model non-additive multi-point mutations",
    datasets: "Various experimental mutation sets",
    metrics: "Median Spearman ρ 0.84 (Megascale test); 0.79 (S2648)",
    authors: "Zhang, Li, & He",
    journal: "bioRxiv",
    doi: "10.64898/2026.01.08.698524",
    doi_url: "https://doi.org/10.64898/2026.01.08.698524",
    bibtex: `@article{GraphESMStable2026,
  author = {Zhang, Haoyu and Li, Zhenyu and He, Jiahao},
  title = {GraphESMStable: A Deep Learning Framework for Protein Stability Prediction Fusing Pre-trained Sequence Models and Graph Neural Networks},
  journal = {bioRxiv},
  year = {2026},
  doi = {10.64898/2026.01.08.698524}
}`
  },

  // --- Category: Protein Language Models ---
  {
    id: "esm2",
    name: "ESM-2",
    full_form: "Evolutionary Scale Modeling 2",
    year: 2023,
    category: "plm",
    category_label: "Transformer Encoder",
    paradigm: "Sequence-based",
    architecture: "Bidirectional Transformer encoder pretrained on UR50/D (~65M seqs; 8M to 15B params)",
    datasets: "UniRef50 clusters (43M) sampled from UniRef90 (138M seqs)",
    metrics: "ρ <0.4 (zero-shot, ESM2-t33; S2648)",
    authors: "Lin et al. (Meta AI)",
    journal: "Science",
    doi: "10.1126/science.ade2574",
    doi_url: "https://doi.org/10.1126/science.ade2574",
    bibtex: `@article{Lin2023ESM,
  author = {Lin, Zeming and others},
  title = {Evolutionary-scale prediction of atomic-level protein structure with a language model},
  journal = {Science},
  volume = {379},
  number = {6637},
  pages = {eade2574},
  year = {2023},
  doi = {10.1126/science.ade2574}
}`
  },
  {
    id: "xtrimopglm",
    name: "xTrimoPGLM",
    full_form: "Extreme Protein General Language Model",
    year: 2025,
    category: "plm",
    category_label: "100B Foundation Model",
    paradigm: "Sequence-based",
    architecture: "100B-parameter decoder-style Transformer trained on billion-scale protein sequences",
    datasets: "Billion-scale protein sequences",
    metrics: "No ΔΔG benchmark; TAPE stability (Spearman) reported",
    authors: "Chen, Cheng, Li, et al.",
    journal: "Nat. Methods",
    doi: "10.1038/s41592-025-02636-z",
    doi_url: "https://doi.org/10.1038/s41592-025-02636-z",
    bibtex: `@article{chen2025xtrimopglm,
  author = {Chen, Bo and Cheng, Xingyi and Li, Pan and others},
  title = {xTrimoPGLM: unified 100-billion-parameter pretrained transformer for deciphering the language of proteins},
  journal = {Nature Methods},
  volume = {22},
  number = {5},
  pages = {1028--1039},
  year = {2025},
  doi = {10.1038/s41592-025-02636-z}
}`
  },
  {
    id: "saprot",
    name: "SaProt",
    full_form: "Structure-aware Protein Language Model",
    year: 2024,
    category: "plm",
    category_label: "Structure-Aware PLM",
    paradigm: "Sequence + Structure",
    architecture: "Transformer with Foldseek 3D structure-alphabet tokens integrated into vocabulary",
    datasets: "AlphaFold DB structural sequences",
    metrics: "Base structure-aware PLM; its ΔG fine-tune (SaProtΔG, Cho et al. 2025) reports Spearman ρ 0.87 on its MGnify test set",
    authors: "Su, Han, et al.",
    journal: "ICLR / bioRxiv",
    doi: "10.1101/2023.10.01.560349",
    doi_url: "https://doi.org/10.1101/2023.10.01.560349",
    bibtex: `@article{SaProt2024,
  author = {Su, Jin and Han, Chenchen and Zhou, Yuyang and Shan, Junjie and Zhou, Xibin and Yuan, Fajie},
  doi = {10.1101/2023.10.01.560349},
  journal = {bioRxiv},
  title = {SaProt: protein language modeling with structure-aware vocabulary},
  year = {2024}
}`
  },
  {
    id: "proteinbert",
    name: "ProteinBERT",
    full_form: "Protein Bidirectional Encoder Representations",
    year: 2022,
    category: "plm",
    category_label: "BERT + GO Transformer",
    paradigm: "Sequence-based",
    architecture: "BERT transformer combining local sequence representations with global Gene Ontology prediction (16M params)",
    datasets: "UniProt sequences",
    metrics: "Spearman ρ 0.76 (TAPE protease stability; not ΔΔG)",
    authors: "Brandes et al.",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btac020",
    doi_url: "https://doi.org/10.1093/bioinformatics/btac020",
    bibtex: `@article{Brandes2022ProteinBERT,
  author = {Brandes, Nadav and Ofer, Dan and Peleg, Yam and Rappoport, Nadav and Linial, Michal},
  title = {ProteinBERT: a universal deep-learning model of protein sequence and function},
  journal = {Bioinformatics},
  volume = {38},
  number = {8},
  pages = {2102--2110},
  year = {2022},
  doi = {10.1093/bioinformatics/btac020}
}`
  },
  {
    id: "finetuned-esm",
    name: "Fine-Tuned ESM3",
    full_form: "LoRA Adapted ESM3",
    year: 2026,
    category: "plm",
    category_label: "Fine-Tuned PLM",
    paradigm: "Sequence-based",
    architecture: "ESM3 fine-tuned using Low-Rank Adaptation (LoRA) with tunable stability vs fitness trade-off",
    datasets: "ESM3 baseline fine-tuning",
    metrics: "Tunable parameter controlling stability versus sequence fitness",
    authors: "Reeves & Kalyaanamoorthy",
    journal: "bioRxiv",
    doi: "10.64898/2026.06.04.730231",
    doi_url: "https://www.biorxiv.org/content/10.64898/2026.06.04.730231v1",
    bibtex: `@article{ESMMSR2026,
  author = {Reeves, Shawn and Kalyaanamoorthy, Subha},
  title = {Robust Multi-Mutant Protein Stability Prediction from a Fine-Tuned Evolutionary Scale Model},
  journal = {bioRxiv},
  year = {2026},
  doi = {10.64898/2026.06.04.730231}
}`
  },

  // --- Category: Hybrid Sequence-Structure & Inverse Folding Predictors ---
  {
    id: "spurs",
    name: "SPURS",
    full_form: "Stability Prediction Using a Rewired Strategy",
    year: 2026,
    category: "hybrid",
    category_label: "Hybrid PLM + Inverse Folding",
    paradigm: "Hybrid",
    architecture: "ESM2 + ProteinMPNN coupled via neural rewiring; scores all single mutations in 1 forward pass",
    datasets: "Megascale cDNA proteolysis + PDB",
    metrics: "Median per-protein Spearman ρ 0.83 (Megascale test; ThermoMPNN 0.77)",
    authors: "Li & Luo",
    journal: "Nat. Commun.",
    doi: "10.1038/s41467-025-67609-4",
    doi_url: "https://doi.org/10.1038/s41467-025-67609-4",
    bibtex: `@article{Li2026SPURS,
  author = {Li, Ziang and Luo, Yunan},
  title = {Generalizable and scalable protein stability prediction with rewired protein generative models},
  journal = {Nature Communications},
  volume = {17},
  pages = {891},
  year = {2026},
  doi = {10.1038/s41467-025-67609-4}
}`
  },
  {
    id: "ifum",
    name: "IFUM",
    full_form: "In silico evaluation of unfolding Free energy with Unfolded state ensemble Modeling",
    year: 2026,
    category: "hybrid",
    category_label: "Unfolded State Ensemble",
    paradigm: "Hybrid",
    architecture: "ProtT5 + ESM-IF1 inverse folding features + explicit unfolded state ensemble modeling",
    datasets: "Multi-source thermodynamic datasets",
    metrics: "PCC 0.78, RMSE 1.16 kcal/mol (Mega-scale test set, clamped range)",
    authors: "Lee, Cho, Yun, et al.",
    journal: "Nat. Commun.",
    doi: "10.1038/s41467-026-68637-4",
    doi_url: "https://doi.org/10.1038/s41467-026-68637-4",
    bibtex: `@article{Lee2026IFUM,
  author = {Lee, Heechan and Cho, Yugyeong and Yun, Jeongwon and Steinegger, Martin and Kim, Ho Min and Park, Hahnbeom},
  title = {Protein folding stability estimation with explicit consideration of unfolded states},
  journal = {Nature Communications},
  volume = {17},
  pages = {1883},
  year = {2026},
  doi = {10.1038/s41467-026-68637-4}
}`
  },
  {
    id: "ddgemb",
    name: "DDGemb",
    full_form: "–-",
    year: 2025,
    category: "hybrid",
    category_label: "PLM Difference Matrices",
    paradigm: "Hybrid",
    architecture: "ESM2 difference embedding matrices fed to a Transformer encoder and regression head",
    datasets: "S2450 (derived from S2648)",
    metrics: "PCC 0.71 (5-fold CV); 0.68 on S669 (direct + reverse), 0.53 direct",
    authors: "Savojardo, Manfredi, Martelli, & Casadio",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btaf019",
    doi_url: "https://doi.org/10.1093/bioinformatics/btaf019",
    bibtex: `@article{Savojardo2025DDGemb,
  author = {Savojardo, Castrense and Manfredi, Matteo and Martelli, Pier Luigi and Casadio, Rita},
  title = {DDGemb: predicting protein stability change upon single- and multi-point variations with embeddings and deep learning},
  journal = {Bioinformatics},
  volume = {41},
  number = {1},
  pages = {btaf019},
  year = {2025},
  doi = {10.1093/bioinformatics/btaf019}
}`
  },
  {
    id: "dve-stability",
    name: "DVE-Stability",
    full_form: "Dual-View Ensemble Stability",
    year: 2025,
    category: "plm",
    category_label: "PLM + Ensemble",
    paradigm: "Sequence only",
    architecture: "Dual-view ensemble learning on a fine-tuned ESM-2-650M backbone: a global CLS-token view and a structural-microenvironment simulation module are computed for both wild-type and mutant sequences and fused by ensemble learning; attention scores give interpretable intramolecular interactions",
    datasets: "Mega-scale cDNA proteolysis high-throughput set (213,000 mutations from 116 proteins, 30% identity cutoff to test), S2648, S8754, C2878",
    metrics: "Spearman \u03c1 0.59 / AUC 0.78 / MCC 0.34 / RMSE 1.35 (S669 direct); Spearman \u03c1 0.54 (S669 reverse)",
    authors: "Nie, Ma, Liu, et al.",
    journal: "Brief. Bioinform.",
    doi: "10.1093/bib/bbaf319",
    doi_url: "https://doi.org/10.1093/bib/bbaf319",
    bibtex: `@article{Nie2025DVEStability,
  author = {Nie, Zhiwei and Ma, Yiming and Liu, Yutian and Huang, Xiansong and Liu, Zhihong and Yang, Peng and Xu, Fan and Yin, Feng and Li, Zigang and Fu, Jie and Ren, Zhixiang and Zhang, Wen-Bin and Chen, Jie},
  title = {Predicting protein stability changes upon mutations with dual-view ensemble learning from single sequence},
  journal = {Briefings in Bioinformatics},
  volume = {26},
  number = {4},
  pages = {bbaf319},
  year = {2025},
  doi = {10.1093/bib/bbaf319}
}`
  },
  {
    id: "prostata",
    name: "PROSTATA",
    full_form: "–-",
    year: 2023,
    category: "hybrid",
    category_label: "PLM + Neural Net",
    paradigm: "Sequence-based",
    architecture: "Protein Language Model (PLM) embeddings integrated with deep neural network regression head",
    datasets: "Own homology-filtered set (S2648, Q3214, VariBench); Q3421 and Q3488 only for the Ssym symmetry test",
    metrics: "Pearson r 0.49 (S669, direct and reverse); 0.69 (5-fold CV)",
    authors: "Umerenkov, Nikolaev, & Strashnov",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btad671",
    doi_url: "https://doi.org/10.1093/bioinformatics/btad671",
    bibtex: `@article{Umerenkov2023PROSTATA,
  author = {Umerenkov, Dmitriy and Nikolaev, Fedor and Strashnov, Pavel},
  title = {PROSTATA: a framework for protein stability assessment using transformers},
  journal = {Bioinformatics},
  volume = {39},
  number = {11},
  pages = {btad671},
  year = {2023},
  doi = {10.1093/bioinformatics/btad671}
}`
  },
  {
    id: "spiredstab",
    name: "SPIRED-Stab",
    full_form: "Structural prediction based on inter-residue relative displacement (SPIRED), with a stability head",
    year: 2024,
    category: "hybrid",
    category_label: "End-to-End Structure + GNN",
    paradigm: "Sequence to Structure",
    architecture: "End-to-end SPIRED structure predictor coupled to downstream GNNs for joint ΔΔG and ΔTm prediction",
    datasets: "Dual Task Dataset (ΔΔG and ΔTm labels)",
    metrics: "S669: ρ 0.58, PCC 0.55 (per-protein means); ΔTm (S557): ρ 0.50",
    authors: "Chen, Xu, Liu, & Gong",
    journal: "Nat. Commun.",
    doi: "10.1038/s41467-024-51776-x",
    doi_url: "https://doi.org/10.1038/s41467-024-51776-x",
    bibtex: `@article{zhou2024,
  author = {Chen, Yinghui and Xu, Yunxin and Liu, Di and Xing, Yaoguang and Gong, Haipeng},
  doi = {10.1038/s41467-024-51776-x},
  journal = {Nature Communications},
  number = {1},
  pages = {7338},
  title = {An end-to-end framework for the prediction of protein structure and fitness from single sequence},
  volume = {15},
  year = {2024}
}`
  },
  {
    id: "idlddg",
    name: "iDLDDG",
    full_form: "–-",
    year: 2026,
    category: "hybrid",
    category_label: "Specialized Deep Learning",
    paradigm: "Sequence + Structure",
    architecture: "Multi-channel deep learning integrating ESM2, ProtTrans, and ESM1v embeddings with structural features tailored for DNA-binding proteins",
    datasets: "DNA-binding protein mutation sets (MPD552, reverse-augmented)",
    metrics: "PCC 0.755 (10-fold CV, MPD552); 0.632 (independent set, MPD96)",
    authors: "Yu, Ge, Yu, & Deng",
    journal: "Brief. Bioinform.",
    doi: "10.1093/bib/bbag050",
    doi_url: "https://doi.org/10.1093/bib/bbag050",
    bibtex: `@article{Yu2026iDLDDG,
  author = {Yu, Xuan and Ge, Fang and Yu, Dong-Jun and Deng, Zhaohong},
  title = {iDLDDG: predicting protein stability changes from missense mutations in DNA-binding proteins using integrated deep learning features},
  journal = {Briefings in Bioinformatics},
  volume = {27},
  number = {1},
  pages = {bbag050},
  year = {2026},
  doi = {10.1093/bib/bbag050}
}`
  }
];

// ============================================================================
// 2. BENCHMARK DATASETS REPOSITORY
// ============================================================================

const datasetsData = [
  {
    id: "prothermdb",
    name: "ProThermDB",
    size: "31,500+ entries",
    proteins: "~740 proteins",
    type: "Experimental ΔΔG, ΔTm, ΔH",
    desc: "The largest historical compilation of thermodynamic parameters extracted from primary literature.",
    caution: "High heterogeneity in denaturants (urea, GdnHCl), pH, and temperatures. Contains duplicate entries that risk train/test leakage if not carefully deduplicated.",
    ref_authors: "Nikam et al.",
    ref_year: "2021",
    ref_journal: "Nucleic Acids Res.",
    doi_url: "https://doi.org/10.1093/nar/gkaa1035",
    bibtex: `@article{Nikam2021ProThermDB,
  author = {Nikam, Rahul and Kulandaisamy, A. and others},
  title = {ProThermDB: thermodynamic database for proteins and mutants revisited after 15 years},
  journal = {Nucleic Acids Research},
  volume = {49},
  number = {D1},
  pages = {D420--D424},
  year = {2021},
  doi = {10.1093/nar/gkaa1035}
}`
  },
  {
    id: "fireprotdb",
    name: "FireProtDB / 2.0",
    size: "~16,000 (v1) to 5.5M+ (v2) entries",
    proteins: "Diverse (~700+ to thousands of domains)",
    type: "Thermostability, ΔTm, and ΔΔG",
    desc: "Rigorous manually curated database with standardized experimental assay conditions, pH, and metadata. Version 2.0 expands to multi-point mutations and indels.",
    caution: "Requires sequence-identity clustering prior to model evaluation to prevent homolog contamination between splits.",
    ref_authors: "Stourac et al. (2021) / Musil et al. (2026)",
    ref_year: "2021",
    ref_journal: "Nucleic Acids Res.",
    doi_url: "https://doi.org/10.1093/nar/gkaa981",
    bibtex: `@article{Stourac2021FireProtDB,
  author = {Stourac, Jan and Dubrava, Juraj and Musil, Milos and Horackova, Jana and Damborsky, Jiri and Mazurenko, Stanislav and Bednar, David},
  doi = {10.1093/nar/gkaa981},
  journal = {Nucleic Acids Research},
  number = {D1},
  pages = {D319--D324},
  title = {{FireProtDB}: a database of experimentally characterized protein mutants},
  volume = {49},
  year = {2021}
}`
  },
  {
    id: "s2648",
    name: "S2648 / S2450",
    size: "2,648 / 2,450 mutations",
    proteins: "131 / 128 proteins",
    type: "ΔΔG (optical / DSC)",
    desc: "Canonical benchmark curated from ProTherm for regression models; S2450 deduplicates redundant entries and pairs reverse mutations.",
    caution: "Significant internal homology between entries; random cross-validation yields inflated correlation.",
    ref_authors: "Dehouck et al. (2009)",
    ref_year: "2009",
    ref_journal: "Bioinformatics",
    doi_url: "https://doi.org/10.1093/bioinformatics/btp445",
    bibtex: `@article{Dehouck2009S2648,
  author = {Dehouck, Yves and Grosfils, Aline and Folch, Benjamin and Gilis, Dimitri and Bogaerts, Philippe and Rooman, Marianne},
  title = {Fast and accurate predictions of protein stability changes upon mutations using statistical potentials and neural networks},
  journal = {Bioinformatics},
  volume = {25},
  number = {19},
  pages = {2537--2543},
  year = {2009},
  doi = {10.1093/bioinformatics/btp445}
}`
  },
  {
    id: "s669",
    name: "S669",
    size: "1,338 mutations (669 fwd + 669 rev)",
    proteins: "94 proteins",
    type: "ΔΔG",
    desc: "Curated from ThermoMutDB with <25% sequence identity to S2648 and VariBench. Retains forward and reverse pairs to test model antisymmetry.",
    caution: "Essential for verifying physical anti-symmetry: ΔΔG(A→B) = -ΔΔG(B→A). Models failing this test rely on statistical bias.",
    ref_authors: "Pancotti et al.",
    ref_year: "2022",
    ref_journal: "Brief. Bioinform.",
    doi_url: "https://doi.org/10.1093/bib/bbab555",
    bibtex: `@article{Pancotti2022S669,
  author = {Pancotti, Corrado and Benevenuta, Silvia and Birolo, Giovanni and Alberini, Virginia and Repetto, Valeria and Sanavia, Tiziana and Capriotti, Emidio and Fariselli, Piero},
  title = {Predicting protein stability changes upon single-point mutation: a thorough comparison of the available tools on a new dataset},
  journal = {Briefings in Bioinformatics},
  volume = {23},
  number = {2},
  pages = {bbab555},
  year = {2022},
  doi = {10.1093/bib/bbab555}
}`
  },
  {
    id: "s350",
    name: "S350",
    size: "350 mutations",
    proteins: "67 proteins",
    type: "ΔΔG",
    desc: "High-resolution crystallized subset of S2648 widely used as a standard blind test set for structure-based predictors.",
    caution: "Small size makes it susceptible to benchmark overfitting and random noise.",
    ref_authors: "Pires, Ascher, & Blundell",
    ref_year: "2014",
    ref_journal: "Bioinformatics",
    doi_url: "https://doi.org/10.1093/bioinformatics/btt691",
    bibtex: `@article{Pires2014MCSMSignatures,
  author = {Pires, Douglas E. V. and Ascher, David B. and Blundell, Tom L.},
  title = {mCSM: predicting the effects of mutations in proteins using graph-based signatures},
  journal = {Bioinformatics},
  volume = {30},
  number = {3},
  pages = {335--342},
  year = {2014},
  doi = {10.1093/bioinformatics/btt691}
}`
  },
  {
    id: "megascale",
    name: "Megascale cDNA Proteolysis",
    size: "776,000 curated stabilities (1.8M tests)",
    proteins: "331 natural + 148 de novo domains",
    type: "High-throughput proteolysis (-ΔΔG)",
    desc: "Unprecedented high-throughput dataset generated via cDNA display proteolysis, establishing a new paradigm for deep learning transfer.",
    caution: "Restricted to small compact single domains (40–72 residues); proteolysis rate is a kinetic proxy and does not always match true thermodynamic equilibrium ΔG.",
    ref_authors: "Tsuboyama et al.",
    ref_year: "2023",
    ref_journal: "Nature",
    doi_url: "https://doi.org/10.1038/s41586-023-06328-6",
    bibtex: `@article{Tsuboyama2023Megascale,
  author = {Tsuboyama, Kotaro and Dauparas, Justas and others},
  title = {Mega-scale experimental analysis of protein folding stability in biology and design},
  journal = {Nature},
  volume = {620},
  pages = {434--444},
  year = {2023},
  doi = {10.1038/s41586-023-06328-6}
}`
  }
];

// ============================================================================
// 3. MASTER TABLES DATA
// ============================================================================

const tablesData = {
  tab1: {
    title: "Table 1: Overview of Computational Tools & Deep Learning Frameworks",
    headers: ["Model Building", "Tool Name", "Full Form", "Mode of Working (Methodology)", "Training Models / Datasets", "Accuracy / Metrics", "Reference & DOI"],
    rows: [
      ["Feature extraction toolkit", "Pfeature", "–-", "Computes >200,000 descriptors across six modules: composition, binary profiles, evolutionary information, structural features, patterns and model building", "Model-building module supports feature selection, classification and regression; no stability-specific training set of its own", "Not applicable (descriptor library; no ΔΔG benchmark reported)", "Pande et al. (2023) <a href=\"https://doi.org/10.1089/cmb.2022.0241\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1089/cmb.2022.0241</a>"],
      ["Structure-based", "CUPSAT", "Cologne University Protein Stability Analysis Tool", "Uses structural environment-specific atom and torsional angle potentials", "1,538 thermal & 1,603 chemical denaturation mutations (ProTherm)", ">80% accuracy; PCC up to 0.77 (k-fold cross-validation)", "Parthiban et al. (2006) <a href=\"https://doi.org/10.1093/nar/gkl190\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/nar/gkl190</a>"],
      ["Structure-based", "DUET", "–-", "Integrates SDM and mCSM predictions using Support Vector Machine (SVM)", "Integrated ML framework trained on experimental mutation datasets", "PCC 0.74 (training), 0.71 (blind test)", "Pires et al. (2014) <a href=\"https://doi.org/10.1093/nar/gku411\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/nar/gku411</a>"],
      ["Structure-based", "iStable", "–-", "Machine-learning integration of 11 sequence- and structure-based prediction tools, with protein sequence added as a feature", "Predictions of the 11 integrated tools used as features (iStable 2.0)", "PCC 0.714 (regression); MCC 0.708 (classification); S630 independent test, structure-based model", "Chen et al. (2020) <a href=\"https://doi.org/10.1016/j.csbj.2020.02.021\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1016/j.csbj.2020.02.021</a>"],
      ["Structure-based", "SDM", "Site Directed Mutator", "Knowledge-based statistical potentials using amino acid substitution tables", "Validated on 2,690 point mutations from 132 structures (SDM2)", "PCC 0.49 (SDM) and 0.61 (SDM2) on S350", "Pandurangan et al. (2017) <a href=\"https://doi.org/10.1093/nar/gkx439\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/nar/gkx439</a>"],
      ["Structure-based", "mCSM", "Mutation Cutoff Scanning Matrix", "Graph-based signatures encoding distance patterns and pharmacophore changes", "Large mutation datasets for protein stability and affinity", "PCC 0.69 (5-fold CV, S2648); 0.73 (S350 blind test)", "Pires et al. (2014) <a href=\"https://doi.org/10.1093/bioinformatics/btt691\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btt691</a>"],
      ["Structure-based", "INPS-MD", "Impact of Non-synonymous variations on Stability", "Support Vector Regression using sequence and structural descriptors", "S2648 dataset curated from ProTherm", "PCC 0.58 (cross-validation); 0.72 (blind test, INPS3D)", "Savojardo et al. (2016) <a href=\"https://doi.org/10.1093/bioinformatics/btw192\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btw192</a>"],
      ["Structure-based", "DeepDDG", "Deep Delta Delta G", "Neural network trained on manually curated mutation data", ">5,700 experimentally curated mutations", "PCC 0.48–0.56 (three independent test sets)", "Cao et al. (2019) <a href=\"https://doi.org/10.1021/acs.jcim.8b00697\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1021/acs.jcim.8b00697</a>"],
      ["Molecular Graph", "PSP-GNM", "Protein Stability with Gaussian Network Model", "Unsupervised elastic network model simulating partial unfolding", "Evaluated on S350, S669, and S611 datasets", "PCC up to 0.61 (S669, forward + reverse; 0.36 forward); 0.51 (S350), 0.57 (S611); subsets with a calculable ΔΔG", "Mishra (2022) <a href=\"https://doi.org/10.3390/ijms231810711\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.3390/ijms231810711</a>"],
      ["3D Structure", "MAESTROweb", "Multi AgEnt STability pRedictiOn", "Multi-agent ML consensus prediction framework", "SP1 (S2648) and SP4 (ProTherm) for regression; SS1 and SS2 for disulfide bonds", "PCC 0.68 (cross-validation, S2648 and SP4)", "Laimer et al. (2016) <a href=\"https://doi.org/10.1093/bioinformatics/btv769\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btv769</a>"],
      ["Machine Learning", "STRUM", "Structure-based prediction of stability", "Gradient boosting regression using I-TASSER and conservation scores", "Q3421 dataset containing 3,421 mutations", "PCC 0.79 (mutation-based cross-validation); lower when homologous proteins are excluded", "Quan et al. (2016) <a href=\"https://doi.org/10.1093/bioinformatics/btw361\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btw361</a>"],
      ["Statistical Method", "PoPMuSiC", "Prediction of Protein Mutant Stability Changes", "Statistical potentials dependent on solvent accessibility", "Thousands of experimentally measured ΔΔG values", "PCC 0.63 (5-fold CV); 0.79 excluding 10% outliers", "Dehouck et al. (2011) <a href=\"https://doi.org/10.1186/1471-2105-12-151\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1186/1471-2105-12-151</a>"],
      ["PLM + Deep Learning + Hybrid", "DVE-Stability", "Dual-View Ensemble Stability", "Sequence-only dual-view ensemble: ESM-2-650M fine-tuned end-to-end over wild-type and mutant sequences, combining a global CLS-token view with a structural-microenvironment simulation module", "Mega-scale cDNA proteolysis set (213,000 mutations, 116 proteins), S2648, S8754, C2878", "Spearman \u03c1 0.59 (S669 direct), 0.54 (S669 reverse)", "Nie et al. (2025) <a href=\"https://doi.org/10.1093/bib/bbaf319\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bib/bbaf319</a>"],
      ["PLM + Hybrid", "PROSTATA", "–-", "Sequence-only PLM integrated with deep neural network head", "Own homology-filtered set (S2648, Q3214, VariBench); Q3421 and Q3488 only for the Ssym symmetry test", "Pearson r 0.49 (S669, direct and reverse); 0.69 (5-fold CV)", "Umerenkov et al. (2023) <a href=\"https://doi.org/10.1093/bioinformatics/btad671\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btad671</a>"],
      ["Transformer + Regr", "SPIRED-Stab", "Structural prediction based on inter-residue relative displacement (SPIRED), with a stability head", "End-to-end SPIRED structure predictor coupled to downstream GNNs", "Dual Task Dataset (ΔΔG and ΔTm labels)", "S669: ρ 0.58, PCC 0.55 (per-protein means); ΔTm (S557): ρ 0.50", "Chen et al. (2024) <a href=\"https://doi.org/10.1038/s41467-024-51776-x\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-024-51776-x</a>"],
      ["Language Model", "ESM-based Models", "Evolutionary Scale Modeling", "Transformer-based protein language models (ESM-1b, ESM-2)", "UniRef50-derived sequences (ESM-1b: UR50/S; ESM-2: UniRef50 clusters sampled from UniRef90)", "Zero-shot correlation <0.4 on S2648 (ESM2-t33)", "Lin et al. (2023) <a href=\"https://doi.org/10.1126/science.ade2574\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1126/science.ade2574</a>"],
      ["Language Model", "ProteinBERT", "Protein Bidirectional Encoder Representations", "BERT-like transformer for protein representation learning", "About 106M protein sequences (UniProt-derived)", "Spearman ρ 0.76 (TAPE protease stability; not ΔΔG)", "Brandes et al. (2022) <a href=\"https://doi.org/10.1093/bioinformatics/btac020\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btac020</a>"],
      ["Language Model", "xTrimoPGLM", "Extreme Protein General Language Model", "100B parameter decoder-style transformer architecture", "About 940M unique sequences", "No ΔΔG benchmark; TAPE stability (Spearman) reported", "Chen et al. (2025) <a href=\"https://doi.org/10.1038/s41592-025-02636-z\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41592-025-02636-z</a>"],
      ["Structure + GNN", "Pythia", "Pythia GNN", "Self-supervised Graph Neural Network (zero-shot)", "PDB structures", "PCC ~0.60; Spearman ρ ~0.62 (S2648 zero-shot)", "Sun et al. (2025) <a href=\"https://doi.org/10.1016/j.xinn.2024.100750\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1016/j.xinn.2024.100750</a>"],
      ["Structure + GNN", "GeoDDG", "Geometric Deep ΔΔG", "3D geometric deep learning with GeoFitness pretraining", "S2648 and S8754 (training), S669 (test); GeoFitness pretraining on deep mutational scanning data", "Spearman ρ at least 30% above prior state of the art (reported benchmark)", "Xu et al. (2024) <a href=\"https://doi.org/10.1038/s43588-024-00716-2\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s43588-024-00716-2</a>"],
      ["Structure + GNN", "ThermoMPNN", "–-", "Frozen ProteinMPNN embeddings + light attention + MLP", "Megascale cDNA proteolysis (391,090 filtered single substitutions)", "PCC ~0.75 (Megascale holdout)", "Dieckhaus et al. (2024) <a href=\"https://doi.org/10.1073/pnas.2314853121\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1073/pnas.2314853121</a>"],
["PLM + Structure Hybrid", "MutateEverything", "–-", "Parallel sequence-structure decoding via ESM-2 and AlphaFold backbone", "Mega-scale cDNA proteolysis dataset", "Spearman ρ = 0.56 (S669, single mutations)", "Ouyang-Zhang et al. (2023) <a href=\"https://doi.org/10.48550/arXiv.2311.17316\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">arXiv:2311.17316</a>"],
    ]
  },
  tab2: {
    title: "Table 2: Deep Learning & Hybrid Protein Stability Predictors",
    headers: ["Model Building", "Tool Name", "Full Form", "Mode of Working (Methodology)", "Training Models / Datasets", "Accuracy / Metrics", "Reference & DOI"],
    rows: [
      ["Structure + GNN", "Stability Oracle", "Stability Oracle", "Deep learning with structural embeddings and graph transformers", "C2878 and cDNA117K, with Thermodynamic Permutations augmentation", "Spearman ρ 0.53 (S669)", "Diaz et al. (2024) <a href=\"https://doi.org/10.1038/s41467-024-49780-2\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-024-49780-2</a>"],
      ["Hybrid / Advanced DL", "SPURS", "Stability Prediction Using a Rewired Strategy", "ESM2 + ProteinMPNN via neural rewiring", "Megascale + PDB", "Median per-protein Spearman ρ 0.83 (Megascale test; ThermoMPNN 0.77)", "Li & Luo (2026) <a href=\"https://doi.org/10.1038/s41467-025-67609-4\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-025-67609-4</a>"],
      ["Hybrid / Advanced DL", "DDGemb", "–-", "Embedding-based regression using PLM difference matrices", "S2450 (derived from S2648)", "PCC 0.71 (5-fold CV); 0.68 on S669 (direct + reverse), 0.53 direct", "Savojardo et al. (2025) <a href=\"https://doi.org/10.1093/bioinformatics/btaf019\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btaf019</a>"],
      ["Hybrid / Advanced DL", "IFUM", "In Silico Folding & Unfolded State Modeling", "Ensemble deep learning with explicit folded/unfolded state modeling", "Multi-source thermodynamic datasets", "PCC 0.78, RMSE 1.16 kcal/mol (Mega-scale test set, clamped range)", "Lee et al. (2026) <a href=\"https://doi.org/10.1038/s41467-026-68637-4\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-026-68637-4</a>"],
      ["Hybrid / Advanced DL", "iDLDDG", "–-", "Specialized deep learning for DNA-binding proteins", "DNA-binding protein mutation sets (MPD552, reverse-augmented)", "PCC 0.755 (10-fold CV, MPD552); 0.632 (independent set, MPD96)", "Yu et al. (2026) <a href=\"https://doi.org/10.1093/bib/bbag050\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bib/bbag050</a>"]
    ]
  },
  tab3: {
    title: "Table 3: Comparison of Protein Language Models for Stability Prediction",
    headers: ["Model", "Parameters", "Training Dataset", "Architecture", "Reported ΔΔG / stability benchmark", "Reference & DOI"],
    rows: [
      ["ESM-1b", "650M", "UniRef50 (UR50/S), a clustering of the 250M-sequence UniParc database", "Bidirectional Transformer", "–-", "Rives et al. (2021) <a href=\"https://doi.org/10.1073/pnas.2016239118\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1073/pnas.2016239118</a>"],
      ["ESM-2", "8M–15B", "UniRef50 clusters (43M) sampled from UniRef90 (138M seqs)", "Bidirectional Transformer", "ρ <0.4 (zero-shot, ESM2-t33; S2648)", "Lin et al. (2023) <a href=\"https://doi.org/10.1126/science.ade2574\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1126/science.ade2574</a>"],
      ["MSA Transformer", "100M", "UniRef50 MSAs", "Row/column attention on MSA", "–-", "Rao et al. (2021) <a href=\"https://doi.org/10.1101/2021.02.12.430858\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1101/2021.02.12.430858</a>"],
      ["ProtBERT", "420M", "BFD (2B+ seqs); UniRef100 variant", "BERT encoder", "–-", "Elnaggar et al. (2022) <a href=\"https://doi.org/10.1109/TPAMI.2021.3095381\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1109/TPAMI.2021.3095381</a>"],
      ["ProtT5", "3B", "BFD, then UniRef50 fine-tuning", "T5 encoder-decoder", "–-", "Elnaggar et al. (2022) <a href=\"https://doi.org/10.1109/TPAMI.2021.3095381\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1109/TPAMI.2021.3095381</a>"],
      ["ProteinBERT", "16M", "UniProt", "BERT + GO annotation prediction", "ρ 0.76 (TAPE protease stability; not ΔΔG)", "Brandes et al. (2022) <a href=\"https://doi.org/10.1093/bioinformatics/btac020\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btac020</a>"],
      ["xTrimoPGLM", "~100B", "About 940M unique sequences", "GLM Transformer (bidirectional + autoregressive)", "ρ (TAPE stability; not ΔΔG)", "Chen et al. (2025) <a href=\"https://doi.org/10.1038/s41592-025-02636-z\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41592-025-02636-z</a>"]
    ]
  },
  tab4: {
    title: "Table 4: Recent Deep Learning & PLM Approaches (2024–2026)",
    headers: ["Model", "Architecture", "Key Innovation", "Dataset", "Reported performance", "Reference & DOI"],
    rows: [
      ["SPURS", "ESM2 + ProteinMPNN (neural rewiring)", "All single mutations in one forward pass; epistatic modelling", "Megascale", "Median Spearman ρ 0.83 (Megascale test)", "Li & Luo (2026) <a href=\"https://doi.org/10.1038/s41467-025-67609-4\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-025-67609-4</a>"],
      ["IFUM", "ProtT5 + ESM-IF1 + distograms + MLP", "Explicit unfolded-state ensemble modelling", "Multi-source thermodynamic", "PCC 0.78 (Mega-scale test, clamped to $-1$–5 kcal/mol)", "Lee et al. (2026) <a href=\"https://doi.org/10.1038/s41467-026-68637-4\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-026-68637-4</a>"],
      ["DDGemb", "ESM2 embeddings + Transformer encoder + regr", "Embedding difference matrices for single/multi mutations", "S2450 (from S2648)", "PCC 0.71 (CV); 0.68 (S669)", "Savojardo et al. (2025) <a href=\"https://doi.org/10.1093/bioinformatics/btaf019\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btaf019</a>"],
      ["ThermoMPNN", "Frozen ProteinMPNN embeddings + attention + MLP", "Transfer learning from larger dataset; efficient scanning", "Megascale (391,090 filtered single substitutions)", "PCC 0.75 (Megascale test)", "Dieckhaus et al. (2024) <a href=\"https://doi.org/10.1073/pnas.2314853121\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1073/pnas.2314853121</a>"],
      ["Stability Oracle", "Graph Transformer + masked microenvironment", "AlphaFold-compatible; permutation data augmentation", "C2878 + cDNA117K", "Spearman ρ 0.53 (S669)", "Diaz et al. (2024) <a href=\"https://doi.org/10.1038/s41467-024-49780-2\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-024-49780-2</a>"],
      ["GeoDDG", "Geometric GNN (invariant) + GeoFitness", "Rotationally invariant features; two-stage pretraining", "S2648 + S8754; GeoFitness pretraining", "Spearman ρ at least 30% above prior state of the art", "Xu et al. (2024) <a href=\"https://doi.org/10.1038/s43588-024-00716-2\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s43588-024-00716-2</a>"],
      ["Pythia", "Self-supervised GNN (zero-shot)", "Masked-residue pretraining removes need for labels", "PDB structures", "PCC ~0.60; Spearman ρ ~0.62 (S2648 zero-shot)", "Sun et al. (2025) <a href=\"https://doi.org/10.1016/j.xinn.2024.100750\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1016/j.xinn.2024.100750</a>"],
      ["PROSTATA", "PLM + deep neural network head", "Transformer representations for ΔΔG prediction", "Own homology-filtered set; Q3421/Q3488 for Ssym only", "Pearson r 0.49 (S669); 0.69 (CV)", "Umerenkov et al. (2023) <a href=\"https://doi.org/10.1093/bioinformatics/btad671\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btad671</a>"],
      ["SPIRED-Stab", "End-to-end SPIRED structure + GNNs", "Joint ΔΔG and ΔTm prediction from single sequence", "Dual Task Dataset", "ρ 0.58, PCC 0.55 (S669, per-protein means)", "Chen et al. (2024) <a href=\"https://doi.org/10.1038/s41467-024-51776-x\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-024-51776-x</a>"],
      ["xTrimoPGLM", "100B-parameter Transformer", "One of the largest protein language models, with billion-scale pretraining", "About 940M unique sequences", "No ΔΔG benchmark; TAPE stability reported", "Chen et al. (2025) <a href=\"https://doi.org/10.1038/s41592-025-02636-z\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41592-025-02636-z</a>"],
      ["UniMutStab", "Shared-weight graph convolutional net", "Handles diverse mutation types including indels", "Mega-scale cDNA proteolysis dataset", "PCC 0.41 (S462 direct); 0.58 (M28, multi-point)", "Li et al. (2025) <a href=\"https://doi.org/10.1093/bib/bbaf190\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bib/bbaf190</a>"],
      ["GraphESMStable", "PLM + GNN with Epistasis Decoder", "Explicitly models non-additive effects in multi mutations", "Megascale (training); S2648 and other sets (testing)", "Median Spearman ρ 0.84 (Megascale test); 0.79 (S2648)", "Zhang et al. (2026) <a href=\"https://doi.org/10.64898/2026.01.08.698524\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.64898/2026.01.08.698524</a>"],
      ["Fine-Tuned ESM3", "ESM3 with Low-Rank Adaptation (LoRA)", "Tunable parameter controlling stability vs fitness", "Megascale protease-susceptibility (cDNA display proteolysis) dataset", "Δρavg ≥ +0.068 (double mutants, Megascale test); ρavg 0.573 (Human Domainome 1)", "Reeves & Kalyaanamoorthy (2026) <a href=\"https://www.biorxiv.org/content/10.64898/2026.06.04.730231v1\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.64898/2026.06.04.730231</a>"],
      ["SaProtΔG", "Structure-aware PLM with Foldseek tokens", "Integrates 3D structural tokens into vocabulary", "MGnify cDNA-display stability dataset (~2M sequences)", "Spearman ρ 0.87 (MGnify test set)", "Cho et al. (2025), ICLR 2025 Workshop (GEM); base model: Su et al. (2024) <a href=\"https://doi.org/10.1101/2023.10.01.560349\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1101/2023.10.01.560349</a>"]
    ]
  },
  tab5: {
    title: "Table 5: Benchmark Comparison of Prediction Methods",
    headers: ["Method", "Input", "Model Type", "Reported correlation (benchmark)", "Strength", "Limitation", "Reference & DOI"],
    rows: [
      ["SDM / SDM2", "Structure", "Knowledge-based statistical potentials", "0.49 (SDM), 0.61 (SDM2); S350", "Knowledge-based; correlates well with hypothetical reverse mutations", "Requires a 3D structure; modest correlation on the large S2648 benchmark (0.48)", "Pandurangan et al. (2017) <a href=\"https://doi.org/10.1093/nar/gkx439\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/nar/gkx439</a>"],
      ["mCSM", "Structure + sequence", "Graph-based signatures", "0.69 (5-fold CV, S2648); 0.73 (S350)", "High-throughput; combines structural and sequence context", "Requires 3D structure; trained on heterogeneous data", "Pires et al. (2014) <a href=\"https://doi.org/10.1093/bioinformatics/btt691\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1093/bioinformatics/btt691</a>"],
      ["DeepDDG", "Structure", "Neural network", "0.48–0.56", "Structure-based neural network trained on more than 5,700 curated mutations", "Requires 3D structure; homology-redundant training", "Cao et al. (2019) <a href=\"https://doi.org/10.1021/acs.jcim.8b00697\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1021/acs.jcim.8b00697</a>"],
      ["ThermoMPNN", "Structure", "GNN (message passing)", "PCC 0.75 (pooled); median per-protein ρ 0.77; Megascale test", "Scores all single mutations in 1 forward pass; generalises well", "Requires an experimental or high-confidence backbone", "Dieckhaus et al. (2024) <a href=\"https://doi.org/10.1073/pnas.2314853121\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1073/pnas.2314853121</a>"],
      ["SPURS", "Sequence + Structure", "Hybrid (ESM2 + ProteinMPNN)", "Median ρ 0.83 (Megascale test)", "Proteome-scale scanning; epistatic awareness", "Architecturally complex; higher compute footprint", "Li & Luo (2026) <a href=\"https://doi.org/10.1038/s41467-025-67609-4\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-025-67609-4</a>"],
      ["Stability Oracle", "Structure", "Graph transformer (masked microenv)", "ρ 0.53 (S669)", "AlphaFold-compatible; thermodynamic permutation augmentation", "Structure-dependent; performance tied to fold quality", "Diaz et al. (2024) <a href=\"https://doi.org/10.1038/s41467-024-49780-2\" target=\"_blank\" rel=\"noopener\" class=\"table-doi-link\">10.1038/s41467-024-49780-2</a>"]
    ]
  }
};

// ============================================================================
// 4. RENDERING FUNCTIONS
// ============================================================================

function getBadgeClass(cat) {
  switch (cat) {
    case 'empirical': return 'badge-empirical';
    case 'ml': return 'badge-structure';
    case 'cnn': return 'badge-structure';
    case 'gnn': return 'badge-gnn';
    case 'plm': return 'badge-plm';
    case 'hybrid': return 'badge-hybrid';
    default: return 'badge-structure';
  }
}

function renderTools(list) {
  const container = document.getElementById("tools-grid");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <h3 style="color: var(--navy-deep); margin-bottom: 0.5rem;">No computational tools found</h3>
        <p style="color: var(--text-subtle);">Try broadening your search query or selecting another paradigm filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(tool => `
    <article class="tool-card" id="card-${tool.id}">
      <div>
        <div class="tool-card-header">
          <div class="tool-name-wrap">
            <h3 class="tool-name">${tool.name}</h3>
            <span class="tool-year">(${tool.year})</span>
          </div>
          <span class="badge ${getBadgeClass(tool.category)}">${tool.category_label}</span>
        </div>
        ${tool.full_form && tool.full_form !== '---' && tool.full_form !== tool.name ? `<div class="tool-full-form">${tool.full_form}</div>` : ''}
        <p class="tool-desc">${tool.architecture}</p>
        
        <div class="tool-meta-list">
          <div class="tool-meta-row">
            <span class="tool-meta-label">Input Type:</span>
            <span class="tool-meta-value">${tool.paradigm}</span>
          </div>
          <div class="tool-meta-row">
            <span class="tool-meta-label">Benchmark PCC:</span>
            <span class="tool-meta-value">${tool.metrics}</span>
          </div>
          <div class="tool-meta-row">
            <span class="tool-meta-label">Training Data:</span>
            <span class="tool-meta-value" style="font-size:0.775rem;">${tool.datasets}</span>
          </div>
        </div>
      </div>

      <div class="tool-card-footer">
        <span class="tool-citation" title="${tool.authors} (${tool.year})">${tool.authors} (${tool.year})</span>
        <div class="tool-actions">
          <a href="${tool.doi_url}" target="_blank" rel="noopener" class="btn-icon-xs" title="Open Official Paper DOI">
            <span>DOI</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button class="btn-icon-xs" onclick="openBibModal('${tool.id}')" title="View & Copy BibTeX Reference">
            <span>Cite</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderDatasets() {
  const container = document.getElementById("datasets-grid");
  if (!container) return;

  container.innerHTML = datasetsData.map(d => `
    <article class="dataset-card">
      <div>
        <div class="dataset-header">
          <h3 class="dataset-title">${d.name}</h3>
          <span class="dataset-size">${d.size}</span>
        </div>
        <p class="dataset-desc">${d.desc}</p>
        
        <div class="tool-meta-list" style="margin-bottom: 1rem;">
          <div class="tool-meta-row">
            <span class="tool-meta-label">Proteins / Scope:</span>
            <span class="tool-meta-value">${d.proteins}</span>
          </div>
          <div class="tool-meta-row">
            <span class="tool-meta-label">Measured Metric:</span>
            <span class="tool-meta-value">${d.type}</span>
          </div>
        </div>

        <div class="dataset-warning">
          <strong>⚠️ Pitfall Advisory:</strong> ${d.caution}
        </div>
      </div>

      <div class="dataset-footer">
        <span class="tool-citation">${d.ref_authors} (${d.ref_year})</span>
        <div class="tool-actions">
          <a href="${d.doi_url}" target="_blank" rel="noopener" class="btn-icon-xs">
            <span>Publication</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button class="btn-icon-xs" onclick="openDatasetBibModal('${d.id}')">
            <span>Cite</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

let activeTableKey = "tab1";
let sortDirection = {};

function switchTable(key) {
  activeTableKey = key;
  document.querySelectorAll(".table-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === key);
  });
  renderCurrentTable();
}

function renderCurrentTable(filterText = "") {
  const container = document.getElementById("table-container");
  const captionEl = document.getElementById("table-caption");
  if (!container) return;

  const tableObj = tablesData[activeTableKey];
  if (captionEl) captionEl.textContent = tableObj.title;

  let filteredRows = tableObj.rows;
  if (filterText.trim()) {
    const q = filterText.toLowerCase();
    filteredRows = filteredRows.filter(row => row.some(cell => cell.toLowerCase().includes(q)));
  }

  const thHtml = tableObj.headers.map((h, idx) => `
    <th onclick="sortTable(${idx})">${h} <span id="sort-icon-${idx}" style="font-size:0.75rem; color:var(--text-subtle);">⇅</span></th>
  `).join("");

  const tbHtml = filteredRows.map(row => `
    <tr>
      ${row.map(cell => `<td>${cell}</td>`).join("")}
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>${thHtml}</tr>
      </thead>
      <tbody>
        ${tbHtml.length > 0 ? tbHtml : '<tr><td colspan="100%" style="text-align:center; padding:2rem;">No matching rows found in table.</td></tr>'}
      </tbody>
    </table>
  `;
}

function sortTable(colIndex) {
  const tableObj = tablesData[activeTableKey];
  const isAsc = !sortDirection[colIndex];
  sortDirection = {}; // Reset others
  sortDirection[colIndex] = isAsc;

  tableObj.rows.sort((a, b) => {
    const valA = a[colIndex].replace(/<[^>]*>/g, '').trim().toLowerCase();
    const valB = b[colIndex].replace(/<[^>]*>/g, '').trim().toLowerCase();
    return isAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  renderCurrentTable();
  const icon = document.getElementById(`sort-icon-${colIndex}`);
  if (icon) icon.textContent = isAsc ? "▲" : "▼";
}

function exportCurrentTableCSV() {
  const tableObj = tablesData[activeTableKey];
  let csv = [tableObj.headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",")];

  tableObj.rows.forEach(r => {
    csv.push(r.map(c => `"${c.replace(/<[^>]*>/g, '').replace(/"/g, '""')}"`).join(","));
  });

  const blob = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${activeTableKey}_export.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("Table exported to CSV!");
}

// ============================================================================
// 5. MODAL & CLIPBOARD UTILITIES
// ============================================================================

function openBibModal(toolId) {
  const tool = toolsData.find(t => t.id === toolId);
  if (!tool) return;
  showModal(`${tool.name} (${tool.year}) - BibTeX Citation`, tool.bibtex);
}

function openDatasetBibModal(datasetId) {
  const dataset = datasetsData.find(d => d.id === datasetId);
  if (!dataset) return;
  showModal(`${dataset.name} - BibTeX Citation`, dataset.bibtex);
}

function showModal(title, code) {
  const overlay = document.getElementById("bibtex-modal");
  const titleEl = document.getElementById("modal-title");
  const codeEl = document.getElementById("modal-code");
  if (!overlay || !titleEl || !codeEl) return;

  titleEl.textContent = title;
  codeEl.textContent = code;
  overlay.classList.add("active");
}

function closeModal() {
  const overlay = document.getElementById("bibtex-modal");
  if (overlay) overlay.classList.remove("active");
}

function copyModalBibTeX() {
  const codeEl = document.getElementById("modal-code");
  if (codeEl) {
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      showToast("BibTeX copied to clipboard!");
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// ============================================================================
// 6. INITIALIZATION & EVENT LISTENERS
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Enforce Bright Theme
  document.documentElement.setAttribute("data-theme", "light");

  // Render Initial Components
  renderTools(toolsData);
  renderDatasets();
  renderCurrentTable();

  // Category Filtering
  let activeCategory = "all";
  const chips = document.querySelectorAll(".filter-chip");
  const searchInput = document.getElementById("tool-search-input");

  function applyFilters() {
    const q = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const filtered = toolsData.filter(t => {
      const matchCat = activeCategory === "all" || t.category === activeCategory;
      const matchQuery = !q || 
        t.name.toLowerCase().includes(q) ||
        t.architecture.toLowerCase().includes(q) ||
        t.paradigm.toLowerCase().includes(q) ||
        t.authors.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
    renderTools(filtered);
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // Table Search Filter
  const tableSearchInput = document.getElementById("table-search-input");
  if (tableSearchInput) {
    tableSearchInput.addEventListener("input", (e) => {
      renderCurrentTable(e.target.value);
    });
  }

  // Close modal when clicking outside
  const modalOverlay = document.getElementById("bibtex-modal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
});
