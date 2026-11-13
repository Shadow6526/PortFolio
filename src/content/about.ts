/**
 * About section content — section header, the "Who I Am" paragraphs, badges,
 * and technical skill groups.
 *
 * Consumed by `sections/about/component.tsx`.
 * Add/remove a skill group by editing the `skills` array only.
 */

// ================= TYPES ===============

/** A run of text inside a paragraph; `emphasis` renders it bold/white. */
export type AboutTextSegment = {
  text: string;
  emphasis?: boolean;
};

/** A paragraph made of styled text segments. */
export type AboutParagraph = readonly AboutTextSegment[];

/** One skill category and its pills. */
export type SkillCategory = {
  title: string;
  skills: readonly string[];
};

/** The shape of the about content object. */
export type AboutContent = {
  id: string;
  eyebrow: string;
  title: string;
  cardTitle: string;
  paragraphs: readonly AboutParagraph[];
  badges: readonly string[];
  skillsTitle: string;
  skills: readonly SkillCategory[];
};

// ================= CONTENT ===============

export const ABOUT: AboutContent = {
  id: "about",
  eyebrow: "About Me",
  title: "From Algorithms to Applications",
  cardTitle: "Who I Am",

  paragraphs: [
    [
      { text: "I'm " },
      { text: "Maitreya Chauhan", emphasis: true },
      {
        text: ", a B.Tech Computer Science student at Indian Institute of Information Technology Surat with a strong passion for Competitive Programming and Full Stack Development. I enjoy solving challenging algorithmic problems and transforming ideas into practical software solutions.",
      },
    ],
    [
      {
        text: "My primary development stack includes Flutter, React, Node.js, Express.js, and Firebase. I love building scalable applications, exploring modern technologies, and creating intuitive user experiences across web and mobile platforms.",
      },
    ],
    [
      {
        text: "Beyond development, I'm an ICPC Asia Regionalist, an active Competitive Programmer, and a Problem Setter at the LCS Coding Club, where I contribute to coding contests and mentor aspiring programmers.",
      },
    ],
  ],

  badges: [
    "ICPC Asia Regionalist",
    "Competitive Programmer",
    "Problem Setter",
    "Flutter Developer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Firebase",
    "C++",
    "Open Source Enthusiast",
  ],

  skillsTitle: "Technical Skills",

  skills: [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL", "Dart"],
    },
    {
      title: "Frontend",
      skills: ["Flutter", "React.js", "HTML5", "CSS3", "Vite"],
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "Firebase",
        "Firestore",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Android Studio",
        "Google Colab",
        "MATLAB",
      ],
    },
    {
      title: "AI Tools",
      skills: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Grok", "Perplexity"],
    },
    {
      title: "Core CS",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
  ],
};
