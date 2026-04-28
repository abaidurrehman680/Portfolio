export const site = {
  name: "Muhammad Abaid Ur Rehman",
  title: "Flutter Developer | Cross-Platform Mobile Engineer",
  roles: [
    "Flutter Developer",
    "Mobile App Engineer",
    "Electron Desktop Developer",
    "MERN Stack Developer",
    "AI-Integrated App Builder",
    "iOS & Android Developer",
  ],
  location: "Lahore, Pakistan",
  email: "abaidurrehman680@gmail.com",
  tagline:
    "Building high-performance mobile, web & desktop ecosystems that scale.",
  summary: `High-achieving Software Engineer with 2+ years of experience and a 3.89 CGPA. Expert in architecting high-performance cross-platform ecosystems across mobile (Flutter, React Native), desktop (Electron + React), and web (MERN Stack). Currently driving production development at Massive Dynamics. Proven track record of shipping large-scale apps (60+ screens) with advanced AI integrations, real-time backends, and seamless UI/UX across iOS, Android, Mac, and Windows.`,
  social: {
    github: "https://github.com/abaidurrehman",
    linkedin: "https://linkedin.com/in/abaidurrehman",
    email: "mailto:abaidurrehman680@gmail.com",
  },
  cvPath: "/cv.pdf",
} as const;

export const platforms = [
  { id: "android", label: "Android" },
  { id: "ios", label: "iOS" },
  { id: "macos", label: "macOS" },
  { id: "windows", label: "Windows" },
  { id: "web", label: "Web" },
  { id: "cross", label: "Cross-Platform" },
] as const;

export const skillGroups = [
  {
    category: "Mobile Development",
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "Android SDK",
      "Kotlin",
      "Java",
      "iOS Development",
      "SwiftUI basics",
      "Responsive Mobile UI",
    ],
  },
  {
    category: "Desktop Development",
    skills: [
      "Electron.js",
      "React + Vite (Desktop)",
      "Windows .exe builds",
      "Mac .dmg builds",
      "System Tray Apps",
      "desktopCapturer",
      "Idle Detection",
      "Offline Sync (IndexedDB + localForage)",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "REST APIs",
      "GraphQL",
      "Vite",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      "Firebase (Auth / Firestore / Storage / Security Rules / Cloud Functions)",
      "Supabase (real-time subscriptions)",
      "MongoDB",
      "RESTful APIs",
      "JSON",
      "Third-Party API Integration",
    ],
  },
  {
    category: "AI & Integrations",
    skills: [
      "AI API Integration",
      "Intelligent Recommendation Systems",
      "Automated Matching Algorithms",
      "OpenAI API",
      "LLM Integration",
    ],
  },
  {
    category: "State Management",
    skills: [
      "Provider",
      "Riverpod",
      "Bloc",
      "Redux",
      "Context API",
      "Zustand",
      "Clean Architecture",
    ],
  },
  {
    category: "UI & Design",
    skills: [
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
      "Material Design",
      "Glassmorphism",
      "Responsive Design",
      "UI/UX Principles",
      "Custom Widget Architecture",
    ],
  },
  {
    category: "Real-Time & Chat",
    skills: [
      "Real-Time Messaging Systems",
      "File Sharing",
      "Push Notifications",
      "WebSocket",
      "Firebase Realtime DB",
    ],
  },
  {
    category: "PDF & Documents",
    skills: [
      "jsPDF",
      "html2canvas",
      "Salary Slip Generation",
      "Attendance Reports",
      "Automated PDF Systems",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Android Studio",
      "Cursor AI",
      "Agile/Scrum",
      "Code Reviews",
      "CI/CD Awareness",
      "Technical Documentation",
      "Clean Code",
    ],
  },
  {
    category: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Graph Theory",
      "OOP",
      "Software Engineering Principles",
      "Approximation Algorithms",
      "Database Design",
    ],
  },
] as const;

export const experience = [
  {
    company: "Massive Dynamics",
    role: "App Developer (Flutter / React Native / Mobile)",
    duration: "Feb 2026 – Present",
    highlights: [
      'Lead developer of "My Tutoring Team" — live production app on Google Play Store with thousands of active users',
      "Built complete tutoring platform: mobile app + web app with real-time chat, file sharing, and multi-role communication system",
      "Platform connects Clients, Tutors, Finance team, Support staff, Perceptors, and Admins in one unified system",
      "Developed scalable mobile and web features using Flutter and React Native",
      "Integrated RESTful APIs and Firebase for real-time data, secure auth, and cross-platform sync",
      "Led code reviews, architectural decisions, and Agile sprint planning with UI/UX and backend teams",
      "Debugged and optimized performance for production reliability",
    ],
  },
] as const;

export const projects = [
  {
    name: "My Tutoring Team",
    subtitle: "Tutoring Management Platform",
    type: "Mobile App + Web App (Live on Google Play Store)",
    tech: [
      "Flutter",
      "React.js",
      "Firebase",
      "Real-Time Chat",
      "File Sharing",
      "Multi-Role System",
    ],
    description:
      "Complete tutoring ecosystem with mobile and web. Multi-role dashboards, real-time chat with file sharing, secure RBAC, and Firebase Authentication — live on Google Play.",
    liveBadge: true,
    github: "https://github.com/abaidurrehman",
    demo: "https://play.google.com/store/apps",
  },
  {
    name: "Work Status Management System",
    subtitle: "HR & monitoring suite",
    type: "Cross-Platform Desktop App (Windows + Mac)",
    tech: [
      "Electron",
      "React",
      "Vite",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
      "jsPDF",
      "IndexedDB",
    ],
    description:
      "Desktop HR app with timed screenshots, idle detection, salary PDFs, 3-role access, offline sync, location on login, and leave approvals with audit logs.",
    liveBadge: false,
    github: "https://github.com/abaidurrehman",
    demo: "https://github.com/abaidurrehman",
  },
  {
    name: "InfluencePay",
    subtitle: "Influencer marketing ecosystem",
    type: "Mobile App (60+ Screens)",
    tech: ["Flutter", "Firebase", "AI APIs", "Cloud Firestore"],
    description:
      "Large-scale influencer recruitment and brand management with AI matching, real-time Firestore, and a reusable custom widget system.",
    liveBadge: false,
    github: "https://github.com/abaidurrehman",
    demo: "https://github.com/abaidurrehman",
  },
  {
    name: "Real-Time E-Commerce Mobile App",
    subtitle: "Production storefront",
    type: "Production Mobile App",
    tech: ["Flutter", "Supabase", "Payment Gateway"],
    description:
      "Production store with live cart sync, Supabase real-time inventory, and secure localized payments.",
    liveBadge: false,
    github: "https://github.com/abaidurrehman",
    demo: "https://github.com/abaidurrehman",
  },
  {
    name: "Advanced Service Management Dashboard",
    subtitle: "Operations dashboard",
    type: "Mobile Dashboard",
    tech: ["Flutter", "Firebase", "REST APIs"],
    description:
      "High-speed dashboard for resource planning with hardened Firebase rules and optimized JSON pipelines.",
    liveBadge: false,
    github: "https://github.com/abaidurrehman",
    demo: "https://github.com/abaidurrehman",
  },
  {
    name: "MERN Stack E-Commerce Platform",
    subtitle: "Full-stack commerce",
    type: "Full-Stack Web App",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "End-to-end commerce with secure auth, product management, Express API, and MongoDB persistence.",
    liveBadge: false,
    github: "https://github.com/abaidurrehman",
    demo: "https://github.com/abaidurrehman",
  },
] as const;

export const certifications = [
  { name: "Introduction to Front-End Development", issuer: "Meta" },
  { name: "IT Essentials", issuer: "Cisco" },
  { name: "Databases and SQL for Data Science", issuer: "IBM" },
  { name: "Graph Theory", issuer: "Coursera" },
  { name: "Approximation Algorithms", issuer: "Riphah International University" },
] as const;

export const education = {
  degree: "Bachelor of Computer Science (BSCS)",
  university: "Riphah International University, Lahore",
  graduated: "2026",
  cgpa: "3.89 / 4.00",
} as const;
