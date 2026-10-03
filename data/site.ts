// All editable content lives here. Update this file, not the components.
export const profile = {
  name: "Aditya Jain",
  tagline: "MOBILE APPS & DATA ANALYTICS",
  support: "Building mobile applications, exploring data, and figuring things out along the way.",
  location: "Pune / Jaipur, India",
  email: "bilalaadityajain@gmail.com",
  github: "https://github.com/ADITYA8405",
  linkedin: "https://www.linkedin.com/in/aditya-bilala-jain-0b8244286/",
  // Drop the two PDFs into /public with exactly these file names.
  resumes: [
    { label: "Resume (Android)", href: "/Aditya_Jain_Resume_Android.pdf" },
    { label: "Resume (Data Analyst)", href: "/Aditya_Jain_Resume_Data_Analyst.pdf" },
  ],
};

export const about = [
  "I'm a final-year computer science student who builds Android and Flutter apps and turns raw data into clear insights. I like shipping things that work and explaining them well.",
  "Away from the laptop, you'll usually find me hosting, debating, or performing somewhere.",
];

export const education = {
  school: "Bharti Vidyapeeth College of Engineering, Pune",
  degree: "B.Tech, Computer Science & Business Systems (CSBS)",
  years: "2023 – 2027 (Expected)",
  cgpa: "8.67",
};

export const skills: { title: string; items: string[] }[] = [
  { title: "Core", items: ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Python", "SQL", "PostgreSQL", "Firebase", "Power BI", "Pandas"] },
  { title: "Also worked with", items: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Supabase", "Tableau", "NumPy", "Jupyter", "REST APIs", "Postman", "Git", "GitHub", "VS Code"] },
];

export type Project = {
  name: string;
  description: string;
  highlights?: string[];
  featured?: string; // a distinctive feature to call out
  workflow?: string[];
  tech: string[];
  github: string;
  liveUrl?: string; // shows a "Demo" button when set; hidden otherwise
  kind?: "phone" | "browser"; // frame style for the screenshots
  shots?: { src: string; alt: string; w: number; h: number }[]; // first = main shot
};

export const projects: { development: Project[]; data: Project[] } = {
  development: [
    {
      name: "Newzify",
      kind: "phone",
      shots: [
        { src: "/projects/newzify-1.webp", alt: "Newzify home screen", w: 480, h: 980 },
        { src: "/projects/newzify-2.webp", alt: "Newzify article page", w: 480, h: 975 },
        { src: "/projects/newzify-3.webp", alt: "Newzify Share Your Take screen", w: 480, h: 1034 },
      ],
      description: "A modern, feature-rich news application built with Flutter, designed to deliver bite-sized news with a social twist.",
      featured: "Share Your Take: a dedicated screen for writing your own take on a story and sharing it.",
      highlights: ["Firebase login and signup", "Category-based browsing powered by REST APIs", "\"Share Your Take\" posts with direct social sharing", "Responsive UI built from reusable components"],
      tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
      github: "https://github.com/ADITYA8405/NEWZ-ify",
    },
    {
      name: "Social Media App",
      kind: "phone",
      shots: [
        { src: "/projects/social-1.webp", alt: "Social Media App home feed", w: 480, h: 1011 },
        { src: "/projects/social-2.webp", alt: "Social Media App post page", w: 480, h: 1006 },
        { src: "/projects/social-3.webp", alt: "Social Media App add post screen", w: 480, h: 1001 },
      ],
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
      name: "Movie Review App",
      kind: "phone",
      shots: [
        { src: "/projects/movies-1.webp", alt: "Movie Review App home screen", w: 480, h: 978 },
        { src: "/projects/movies-2.webp", alt: "Movie Review App search screen", w: 480, h: 1015 },
        { src: "/projects/movies-3.webp", alt: "Movie Review App community discussion", w: 480, h: 1024 },
      ],
      description: "A native Android movie review app built with Kotlin and Jetpack Compose, powered by the TMDB API.",
      highlights: [
        "Trending movies and TV shows, search and detail pages from the TMDB API",
        "Firebase login with Firestore-backed favourites, watchlist and reviews",
        "Debounced search, optimistic UI updates, and real-time discussions with owner-only edit/delete",
      ],
      tech: ["Kotlin", "Jetpack Compose", "TMDB API", "Firebase"],
      github: "https://github.com/ADITYA8405/Moviesreviewapp",
    },
  ],
  data: [
    {
      name: "Job Market Analytics",
      kind: "browser",
      shots: [
        { src: "/projects/jobs-1.webp", alt: "Job Market Analytics Tableau dashboard", w: 1200, h: 900 },
      ],
      description: "An end-to-end analytics project on a 500-posting sample of Data Analyst jobs collected through the Adzuna API.",
      workflow: ["Data Collection", "Python Processing", "Data Cleaning", "Skill Extraction", "PostgreSQL", "Visualization"],
      highlights: [
        "SQL appears in 21.2% of postings; Python + SQL is the most common skill pair (9.6%)",
        "500 jobs, 348 companies, 47 reported locations, 14 tracked skills",
        "Normalized PostgreSQL model (jobs, job_skills) with SQL views feeding a Tableau dashboard",
      ],
      tech: ["Python", "Pandas", "Adzuna API", "PostgreSQL", "SQL", "Tableau"],
      github: "https://github.com/ADITYA8405/Job-market-analytics",
    },
    {
      name: "Analysis of Customer Purchasing Behaviour",
      kind: "browser",
      shots: [
        { src: "/projects/customer-1.webp", alt: "Customer Behaviour Dashboard in Power BI", w: 1692, h: 968 },
      ],
      description: "End-to-end analysis of ~3.9K retail customer purchase records, from Pandas and PostgreSQL to a Power BI dashboard.",
      highlights: [
        "SQL analysis of revenue, subscriber spend and per-product discount rates",
        "DAX measures for revenue, customers, average purchase ($59.8) and review rating (3.75)",
        "Dashboard with revenue by category and customers by subscription status",
      ],
      tech: ["Python", "Pandas", "PostgreSQL", "SQL", "Power BI", "DAX"],
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
