interface Publication {
  title: string;
  journal: string;
  year: number;
  url: string;
}

interface Research {
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  field: string;
  email: string;
  title: string;
  education: string[];
  biography: string;
  research: Research[];
  publications: Publication[];
  teaching: string[];
  awards: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "jean-martin",
    name: "Dr. Jean Martin",
    field: "Biologie Moléculaire",
    email: "j.martin@example.com",
    title: "Professeur associé",
    education: [
      "Doctorat en Biologie Moléculaire, Université de Paris",
      "Master en Biochimie, Université de Lyon",
      "Licence en Sciences de la Vie, Université de Marseille"
    ],
    biography: "Dr. Jean Martin est un chercheur passionné qui se spécialise dans l'étude des mécanismes moléculaires du cancer. Avec plus de 15 ans d'expérience, il dirige plusieurs projets de recherche innovants.",
    research: [
      {
        title: "Régulation génétique dans les cellules cancéreuses",
        description: "Étude des mécanismes de régulation génétique impliqués dans la progression tumorale."
      },
      {
        title: "Thérapies ciblées moléculaires",
        description: "Développement de nouvelles approches thérapeutiques basées sur les marqueurs moléculaires."
      }
    ],
    publications: [
      {
        title: "Novel molecular mechanisms in cancer progression",
        journal: "Nature Cell Biology",
        year: 2023,
        url: "#"
      },
      {
        title: "Targeted therapy approaches in molecular oncology",
        journal: "Cancer Research",
        year: 2022,
        url: "#"
      }
    ],
    teaching: [
      "Biologie moléculaire avancée",
      "Techniques d'analyse génétique",
      "Séminaire de recherche en cancérologie"
    ],
    awards: [
      "Prix d'excellence en recherche, 2023",
      "Bourse de recherche nationale, 2021"
    ]
  },
  {
    id: "marie-dubois",
    name: "Dr. Marie Dubois",
    field: "Microbiologie",
    email: "m.dubois@example.com",
    title: "Professeure titulaire",
    education: [
      "Doctorat en Microbiologie, Université de Genève",
      "Master en Biologie des Microorganismes, Université de Lausanne",
      "Licence en Biologie, Université de Neuchâtel"
    ],
    biography: "Dr. Marie Dubois est une experte reconnue en microbiologie environnementale. Ses travaux sur les communautés microbiennes ont contribué à une meilleure compréhension des écosystèmes.",
    research: [
      {
        title: "Écologie microbienne des sols",
        description: "Étude de la diversité et des interactions microbiennes dans les sols agricoles."
      },
      {
        title: "Résistance aux antibiotiques",
        description: "Analyse des mécanismes de résistance aux antibiotiques dans les populations bactériennes."
      }
    ],
    publications: [
      {
        title: "Microbial communities in agricultural soils",
        journal: "Soil Biology and Biochemistry",
        year: 2023,
        url: "#"
      },
      {
        title: "Antibiotic resistance patterns in soil bacteria",
        journal: "Environmental Microbiology",
        year: 2022,
        url: "#"
      }
    ],
    teaching: [
      "Microbiologie générale",
      "Écologie microbienne",
      "Méthodes d'analyse en microbiologie"
    ],
    awards: [
      "Prix d'innovation en microbiologie, 2022",
      "Médaille d'excellence académique, 2020"
    ]
  },
  {
    id: "pierre-bernard",
    name: "Prof. Pierre Bernard",
    field: "Biochimie",
    email: "p.bernard@example.com",
    title: "Directeur du département",
    education: [
      "Doctorat en Biochimie, Université d'Oxford",
      "Master en Chimie Biologique, Imperial College London",
      "Licence en Chimie, École Normale Supérieure"
    ],
    biography: "Prof. Pierre Bernard est un leader dans le domaine de la biochimie structurale. Ses recherches sur les protéines membranaires ont ouvert de nouvelles perspectives thérapeutiques.",
    research: [
      {
        title: "Structure des protéines membranaires",
        description: "Analyse structurale et fonctionnelle des protéines de transport membranaire."
      },
      {
        title: "Développement de biomarqueurs",
        description: "Identification et validation de nouveaux biomarqueurs pour le diagnostic médical."
      }
    ],
    publications: [
      {
        title: "Structural insights into membrane protein function",
        journal: "Nature Structural Biology",
        year: 2023,
        url: "#"
      },
      {
        title: "Novel biomarkers in disease diagnosis",
        journal: "Biochemical Journal",
        year: 2022,
        url: "#"
      }
    ],
    teaching: [
      "Biochimie structurale",
      "Enzymologie",
      "Techniques avancées en biochimie"
    ],
    awards: [
      "Prix international de biochimie, 2023",
      "Membre de l'Académie des Sciences, 2021"
    ]
  },
  {
    id: "sophie-lefevre",
    name: "Dr. Sophie Lefèvre",
    field: "Écologie",
    email: "s.lefevre@example.com",
    title: "Maître de conférences",
    education: [
      "Doctorat en Écologie, Université de Montpellier",
      "Master en Biodiversité, Université de Bordeaux",
      "Licence en Sciences de l'Environnement, Université de Toulouse"
    ],
    biography: "Dr. Sophie Lefèvre est spécialisée dans l'étude des écosystèmes marins et leur réponse au changement climatique. Son travail contribue à la conservation des espèces marines.",
    research: [
      {
        title: "Écosystèmes coralliens",
        description: "Étude de la résilience des récifs coralliens face au réchauffement climatique."
      },
      {
        title: "Biodiversité marine",
        description: "Évaluation et conservation de la biodiversité dans les zones côtières."
      }
    ],
    publications: [
      {
        title: "Climate change impacts on coral reef ecosystems",
        journal: "Marine Biology",
        year: 2023,
        url: "#"
      },
      {
        title: "Coastal biodiversity conservation strategies",
        journal: "Conservation Biology",
        year: 2022,
        url: "#"
      }
    ],
    teaching: [
      "Écologie marine",
      "Biologie de la conservation",
      "Méthodes d'étude des écosystèmes"
    ],
    awards: [
      "Prix jeune chercheur en écologie, 2023",
      "Bourse de recherche marine, 2021"
    ]
  },
  {
    id: "alain-morel",
    name: "Dr. Alain Morel",
    field: "Neurosciences",
    email: "a.morel@example.com",
    title: "Directeur de recherche",
    education: [
      "Doctorat en Neurosciences, Harvard University",
      "Master en Neurobiologie, Stanford University",
      "Licence en Biologie, École Polytechnique"
    ],
    biography: "Dr. Alain Morel est un expert en neurosciences cognitives, spécialisé dans l'étude des mécanismes de la mémoire et de l'apprentissage. Ses recherches innovantes ont contribué à la compréhension des troubles neurologiques.",
    research: [
      {
        title: "Plasticité synaptique",
        description: "Étude des mécanismes moléculaires de la plasticité synaptique dans l'apprentissage."
      },
      {
        title: "Maladies neurodégénératives",
        description: "Recherche sur les mécanismes pathologiques dans la maladie d'Alzheimer."
      }
    ],
    publications: [
      {
        title: "Synaptic plasticity in learning and memory",
        journal: "Neuron",
        year: 2023,
        url: "#"
      },
      {
        title: "Molecular mechanisms in Alzheimer's disease",
        journal: "Nature Neuroscience",
        year: 2022,
        url: "#"
      }
    ],
    teaching: [
      "Neurosciences cognitives",
      "Neurobiologie cellulaire",
      "Techniques d'imagerie cérébrale"
    ],
    awards: [
      "Prix d'excellence en neurosciences, 2023",
      "Bourse de recherche internationale, 2021"
    ]
  }
];