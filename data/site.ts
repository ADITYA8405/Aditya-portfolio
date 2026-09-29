// All editable content lives here. Update this file, not the components.
export const profile = {
  name: "Aditya Jain",
  tagline: "LEARNING, ASSESSING AND IMPROVING",
  support: "Building mobile applications, exploring data, and figuring things out along the way.",
  location: "Pune / Jaipur, India",
  email: "aditya7405jain@gmail.com",
  github: "https://github.com/ADITYA8405",
  linkedin: "https://www.linkedin.com/in/aditya-bilala-jain-0b8244286/",
  resumeUrl: "", // Add "/resume.pdf" after placing the file in /public
};

export const about = [
  "I'm a computer science student who likes building apps and digging into data. Honestly, part of the reason I do both is that I haven't decided which path is mine yet, so I'm exploring each one and enjoying the process.",
  "Away from the laptop, you'll usually find me hosting, debating, or performing somewhere.",
];

export const education = {
  school: "Bharti Vidyapeeth College of Engineering, Pune",
  degree: "B.Tech, Computer Science & Business Systems (CSBS)",
  years: "2023 – 2027",
  cgpa: "8.67",
};

export const skills: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Kotlin", "Dart", "Python", "SQL", "JavaScript"] },
  { title: "Mobile Development", items: ["Flutter", "Jetpack Compose", "Android"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", items: ["Firebase", "MongoDB", "PostgreSQL"] },
  { title: "Data & Analytics", items: ["Power BI", "Tableau", "Pandas", "NumPy", "Jupyter"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];

export type Project = {
  name: string;
  description: string;
  highlights?: string[];
  featured?: string; // a distinctive feature to call out
  workflow?: string[];
  tech: string[];
  github: string;
  liveUrl?: string; // leave empty to hide "View Project"
};

export const projects: { development: Project[]; data: Project[] } = {
  development: [
    {
      name: "Newzify",
      description: "A modern, feature-rich news application built with Flutter, designed to deliver bite-sized news with a social twist.",
      featured: "Share Your Take: a dedicated screen for writing your own take on a story and sharing it.",
      highlights: ["Firebase login and signup", "Category browsing and filtering", "Social sharing", "Designed for iOS and Android"],
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/ADITYA8405/NEWZ-ify",
    },
    {
      name: "Social Media App",
      description: "A full-featured social media application built with Flutter, combining real-time interactions, social profiles, media sharing, and user discovery.",
      highlights: [
        "Email/password auth with persistent sessions",
        "Posts with text and high-resolution images",
        "Real-time likes and a comments system",
        "Follow/unfollow with followers and following stats",
        "Profile photo upload via Supabase bucket storage",
        "Real-time user search by name or email",
        "Optimistic UI updates, light and dark mode",
      ],
      tech: ["Flutter", "Dart", "Firebase", "Supabase"],
      github: "https://github.com/ADITYA8405/social-media-app",
    },
    {
      name: "Movie Ratings",
      description: "A native Android movie review application built with Kotlin and Jetpack Compose.",
      tech: ["Kotlin", "Jetpack Compose", "Android"],
      github: "https://github.com/ADITYA8405/Moviesreviewapp",
    },
  ],
  data: [
    {
      name: "Job Market Analytics",
      description: "An end-to-end data analytics project focused on understanding the Indian data-analyst job market, using real job-posting data collected through the Adzuna API.",
      workflow: ["Data Collection", "Python Processing", "Data Cleaning", "Skill Extraction", "PostgreSQL", "Visualization"],
      highlights: ["Job titles and categories", "Skills demanded by employers", "Skill combinations", "Locations and employment information"],
      tech: ["Python", "Adzuna API", "PostgreSQL", "Power BI", "Tableau", "Pandas"],
      github: "https://github.com/ADITYA8405/Job-market-analytics",
    },
    {
      name: "Analysis of Customer Purchasing Behaviour",
      description: "An end-to-end Customer Behaviour Analysis project built to understand how customers purchase products and interact with different aspects of the shopping experience.",
      highlights: ["Purchasing behaviour", "Discounts and payment methods", "Product categories", "Seasonal behaviour and subscription status"],
      tech: ["Python", "Data Analytics", "Pandas", "Visualization"],
      github: "https://github.com/ADITYA8405/Analysis-of-Customer-Purchasing-Behaviour-",
    },
  ],
};

export const beyond = {
  achievements: [
    "Winner, Debate Competition, MIT",
    "Finalist, IIT Bombay Storytelling Competition @ Mood Indigo",
    "Hosted a college tech event / hackathon",
  ],
  activities: ["Member, DebSoc Society", "Member, Literary Council"],
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "beyond", label: "Beyond Code" },
  { id: "contact", label: "Contact" },
];
// To add Experience later: create components/Experience.tsx, add data here,
// add { id: "experience", label: "Experience" } to nav, and render it in app/page.tsx.
