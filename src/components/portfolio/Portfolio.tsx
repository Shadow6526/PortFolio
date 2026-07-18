import { useEffect, useState } from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink,
  Award,
  GraduationCap,
  BadgeCheck,
  Trophy,
  Rocket,
  Sparkles,
  Code2,
  Menu,
  X,
  ArrowRight,
  ArrowDown,
  Send,
  Terminal,
} from "lucide-react";
import resume from "./curr.pdf";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import profileImg from "@/assets/profile.jpg";
import brandIcon from "@/assets/icon.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

/* -------------------------------------------------------------------------- */
/*                                    Data                                    */
/* -------------------------------------------------------------------------- */

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "qualifications", label: "Qualifications" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  // { id: "contact", label: "Contact" },
];

const SKILLS=[
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "Dart",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "Flutter",
      "React.js",
      "HTML5",
      "CSS3",
      "Vite",
    ],
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
    skills: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "DeepSeek",
      "Grok",
      "Perplexity",
    ],
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
];
const BADGES = [
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
];

const QUALIFICATIONS = [
  { year: "2026", title: "ICPC Regionalist", place: "2nd year", type: "edu" as const },
   { year: "2024", title: "Class 12th Boards", place: "Percentage:77%", type: "edu" as const },
   { year: "2024", title: "Jee Advanced", place: "CRL:21052", type: "cert" as const },
   { year: "2024", title: "Jee Mains", place: "CRL:36722", type: "edu" as const },
  { year: "2022", title: "Class 10th Boards", place: "Percentage:77%", type: "edu" as const },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    date: "2026",
    title: "ICPC Asia Regionalist",
    desc: "Secured Rank 195 in the ICPC Asia Mysuru Onsite Regional Contest.",
  },
  {
    icon: Award,
    date: "2025",
    title: "IICPC Preliminary Rank 1249",
    desc: "Ranked 1249 among 12,408 participants from IITs, NITs, Indian Institute of Information Technology , and other institutions nationwide.",
  },
  {
    icon: Rocket,
    date: "2025",
    title: "CodeStorm Rank 7",
    desc: "Secured Rank 7 among 200 participants in CodeStorm organized by Indian Institute of Information Technology Bhagalpur.",
  },
  {
    icon: Trophy,
    date: "2025",
    title: "1st Place - Solo Coding Contest in Spring Fiesta 2025",
    desc: "Won an individual coding competition organized at Indian Institute of Information Technology Surat.",
  },
  {
    icon: Award,
    date: "2025",
    title: "2nd Place - Team Coding Contest at Spring Fiesta 2025",
    desc: "Finished 2nd in a team programming competition organized at Indian Institute of Information Technology Surat.",
  },
  {
    icon: Trophy,
    date: "2025",
    title: "1st Place - Solo Coding Contest Stranger Code 4.0",
    desc: "Secured another 1st-place finish in an individual coding competition at Indian Institute of Information Technology Surat.",
  },
  {
    icon: Award,
    date: "2025",
    title: "2nd Place - Team Coding Contest Dijkstra and Khakhra",
    desc: "Secured another 2nd-place finish in a team programming competition at Indian Institute of Information Technology Surat.",
  },
  {
    icon: Trophy,
    date: "2026",
    title: "1st Place - Solo Coding Contest Terminal Exit",
    desc: "Won an individual coding competition organized at Indian Institute of Information Technology Surat.",
  },
  {
    icon: Award,
    date: "2026",
    title: "2nd Place - Team Coding Contest Code of Thrones",
    desc: "Finished 2nd in a team programming competition at Indian Institute of Information Technology Surat.",
  },

   {
  icon: Code2,
  date: "2026",
  title: "Codeforces Specialist",
  desc: "Achieved a maximum rating of 1502, earning the Specialist title through consistent performance in rated contests.",
},
{
  icon: Code2,
  date: "2026",
  title: "LeetCode Knight",
  desc: "Achieved a maximum rating of 1878 and earned the Knight badge through regular participation in coding contests.",
},
{
  icon: Code2,
  date: "2026",
  title: "CodeChef 3★",
  desc: "Achieved a maximum rating of 1722, earning the 3-Star rating in competitive programming contests.",
},
  {
    icon: Rocket,
    date: "2026",
    title: "Cross-Platform App Developer",
    desc: "Built a productivity application for Android, Windows, and Linux using Flutter, Firebase, and Google APIs.",
  },
  {
    icon: Sparkles,
    date: "2026",
    title: "Full Stack Developer",
    desc: "Developed a Codeforces Statistics Dashboard using React.js, Express.js, and interactive data visualizations.",
  },
  {
    icon: Sparkles,
    date: "2025",
    title: "LeetCode Global Rank 1297",
    desc: "Achieved Global Rank 1297 among 26,806 participants in LeetCode Biweekly Contest 170.",
  },
  {
    icon: Code2,
    date: "2025",
    title: "Problem Setter",
    desc: "Designed, reviewed, and tested algorithmic problems for weekly contests at LCS Coding Club, Indian Institute of Information Technology Surat.",
  },
  {
    icon: BadgeCheck,
    date: "2025",
    title: "Mentored 300+ Students",
    desc: "Conducted workshops on Competitive Programming fundamentals and Git/GitHub.",
  },
  

];
const PROJECTS = [
  {
    img: p1,
    name: "Student Productivity & Planner",
    desc: "A cross-platform productivity application for Android, Windows, and Linux featuring task management, assignment tracking, attendance monitoring, GPA/CGPA calculator, habit tracking, calendar integration, offline support, and Google Drive synchronization.",
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Firebase",
      "Firestore",
      "Google Drive API",
    ],
    demo: "#",
    linux: "#",
    windows: "#",
    android: "#",
    mac: "#",
  },
  {
    img: p2,
    name: "Codeforces Statistics Dashboard",
    desc: "A full-stack analytics dashboard that visualizes Codeforces ratings, contest history, submission heatmaps, and performance trends using the official Codeforces API.",
    tech: [
      "React.js",
      "Express.js",
      "Node.js",
      "Recharts",
      "Vercel",
      "Codeforces API",
    ],
    demo: "https://cf-statistics.vercel.app",
    linux: "#",
    windows: "#",
    android: "#",
    mac: "#",
  },
  {
    img: p3,
    name: "Federated Learning vs Peer-to-Peer Analysis",
    desc: "A research-oriented project comparing Federated Learning and Peer-to-Peer Machine Learning architectures with distributed aggregation techniques and robustness against poisoning, Sybil, and noise attacks.",
    tech: [
      "Python",
      "Machine Learning",
      "Federated Learning",
      "P2P Networks",
    ],
    demo: "#",
    linux: "#",
    windows: "#",
    android: "#",
    mac: "#",
  },
];

/* -------------------------------------------------------------------------- */
/*                                Main component                              */
/* -------------------------------------------------------------------------- */

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* ambient background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(1 0 0 / 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const LinuxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const WindowsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM11.25 1.899L24 0v11.55H11.25V1.899zM24 12.45V24l-12.75-1.9v-9.65H24z" />
  </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.96-1.4z" />
  </svg>
);

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6 18c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zm3.5 2.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v9.5zm5 0c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v9.5zm5.5-2.25c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zM12 5C8.69 5 6 7.69 6 11h12c0-3.31-2.69-6-6-6zm3-3c-.28 0-.5.22-.5.5v1.2c-.77-.32-1.61-.5-2.5-.5s-1.73.18-2.5.5V2.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.6C7.26 5.05 6 6.87 6 9h12c0-2.13-1.26-3.95-3-4.9V2.5c0-.28-.22-.5-.5-.5z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                               Tilt Helpers                                 */
/* -------------------------------------------------------------------------- */

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const w = rect.width;
  const h = rect.height;
  
  // Relative position (-0.5 to 0.5)
  const px = (x / w) - 0.5;
  const py = (y / h) - 0.5;
  
  // Max tilt angles: 22 degrees (more pronounced 3D effect)
  const rotateY = px * 22;
  const rotateX = -py * 22;
  
  // Disable transition during movement so tracking is 100% instant and lag-free
  el.style.transition = "none";
  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.025)`;
  
  const shine = el.querySelector(".shine-overlay") as HTMLDivElement;
  if (shine) {
    shine.style.transition = "none";
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`;
    shine.style.opacity = "1";
  }
};

const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  // Smooth snap back transition
  el.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease";
  el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
  
  const shine = el.querySelector(".shine-overlay") as HTMLDivElement;
  if (shine) {
    shine.style.transition = "opacity 0.5s ease-out";
    shine.style.opacity = "0";
  }
};

/* -------------------------------------------------------------------------- */
/*                                   Navbar                                   */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`flex md:grid md:grid-cols-3 max-w-[1300px] w-full items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "glass rounded-2xl py-2 mx-4 md:mx-auto" : "mx-auto"
        }`}
      >
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 font-display text-xl font-bold justify-self-start"
        >
          <span className="grid h-10 w-10 shrink-0 overflow-hidden place-items-center rounded-xl border border-white/10 shadow-glow">
            <img
              src={brandIcon}
              alt="Maitreya Chauhan logo"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden sm:inline gradient-text">Maitreya Chuahan</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex md:justify-self-center">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => go(n.id)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end justify-self-end">
          <Button
            onClick={() => go("contact")}
            className="hidden md:inline-flex gradient-primary text-primary-foreground shadow-glow hover:opacity-90 text-base h-10 px-5"
          >
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="glass rounded-lg p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-2 md:hidden">
          <div className="glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/5"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-10 sm:pt-40 sm:pb-14">
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-in">
          <div className="eyebrow-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            From Algorithms to Applications
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Hi, I'm <span className="hero-name">Maitreya Chauhan</span>
          </h1>

          <p className="mt-4 font-display text-xl font-semibold sm:text-2xl">
            <span className="text-accent-subtitle">Competitive Programmer, Linux Guy &amp; Full Stack Developer</span>
          </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed">
  From algorithms to applications, I enjoy building software that is fast,
  reliable, and intuitive. As a Computer Science student at Indian Institute of Information Technology Surat, I
  specialize in Competitive Programming, Flutter, React, Node.js, and
  Firebase while constantly exploring better ways to solve real-world
  problems.
</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* View Resume */}
            <Button
              size="lg"
              asChild
              className="gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>

            {/* Download Resume */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="glass border-white/10 hover:bg-white/10"
            >
              <a href={resume} download="Maitreya_Chauhan_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>

            {/* View Work */}
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass border-white/10 hover:bg-white/10"
            >
              View Work <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            {/* Coding Profiles Dropdown */}
            <div className="group relative">
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-300"
              >
                <Code2 className="mr-2 h-4 w-4" />
                Coding Profiles
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </Button>

              {/* Dropdown Menu */}
              <div className="pointer-events-none absolute left-0 top-full z-50 mt-2 min-w-[220px] translate-y-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="glass rounded-2xl border border-white/10 p-2 shadow-[0_20px_60px_-10px_oklch(0_0_0_/_0.6),0_0_30px_oklch(0.65_0.25_280_/_0.15)]">
                  {[
                    {
                      name: "Codeforces",
                      handle: "Shadow6526",
                      url: "https://codeforces.com/profile/Shadow6526",
                      rating: "Specialist · 1502",
                      color: "oklch(0.65 0.25 25)",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "LeetCode",
                      handle: "maitreya_c",
                      url: "https://leetcode.com/u/maitreya_c/",
                      rating: "Knight · 1878",
                      color: "oklch(0.75 0.18 60)",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "CodeChef",
                      handle: "maitreya_c",
                      url: "https://www.codechef.com/users/maitreya_c",
                      rating: "3★ · 1722",
                      color: "oklch(0.7 0.15 40)",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d="M11.257.004C5.23.264.171 5.25.008 11.306c-.173 6.341 4.868 11.6 11.15 11.69 6.37.09 11.636-5.047 11.636-11.43C22.794 5.126 17.558-.256 11.257.004zM8.49 15.857c-2.233-.1-3.93-1.986-3.811-4.229.116-2.213 2.03-3.907 4.22-3.798 2.17.108 3.835 1.967 3.748 4.147-.086 2.16-1.944 3.98-4.157 3.88zm6.89.28c-2.233-.1-3.93-1.986-3.811-4.229.116-2.213 2.03-3.907 4.22-3.798 2.17.108 3.835 1.967 3.748 4.147-.086 2.16-1.944 3.98-4.157 3.88z"/>
                        </svg>
                      ),
                    },
                    {
                      name: "AtCoder",
                      handle: "maitreya_c",
                      url: "https://atcoder.jp/users/maitreya_c",
                      rating: "Rated",
                      color: "oklch(0.7 0.2 200)",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5l7.5 13H4.5L12 4.5z"/>
                        </svg>
                      ),
                    },
                  ].map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/5"
                    >
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-glow"
                        style={{
                          background: `${profile.color}22`,
                          color: profile.color,
                          border: `1px solid ${profile.color}44`,
                          boxShadow: `0 0 0 0 ${profile.color}`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${profile.color}66`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${profile.color}`;
                        }}
                      >
                        {profile.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors duration-200">
                          {profile.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {profile.rating}
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a href="https://github.com/Shadow6526" aria-label="GitHub" className="text-muted-foreground transition hover:text-foreground hover:scale-110 inline-block" target="_blank">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/maitreya-chauhan/" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-foreground hover:scale-110 inline-block" target="_blank">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/maitreya_chauhan/" aria-label="Instagram" className="text-muted-foreground transition hover:text-foreground hover:scale-110 inline-block" target="_blank">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Profile */}
        <div className="relative md:ml-auto md:mr-0 mx-auto w-full max-w-[400px] animate-scale-in">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-full blur-3xl opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div
            className="glass-card-3d rounded-[2rem] p-2 shadow-glow cursor-pointer relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" />
            <div className="relative overflow-hidden rounded-[1.8rem] [transform-style:preserve-3d]">
              <img
                src={profileImg}
                alt="Maitreya Chuahan portrait"
                width={1024}
                height={1024}
                className="h-auto w-full rounded-[1.5rem] object-cover [transform:translateZ(20px)]"
              />
            </div>
            <div className="glass absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow animate-fade-in [transform:translateZ(45px)] [transform-style:preserve-3d]">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold">20 Years</div>
                <div className="text-xs text-muted-foreground">Scaning the Web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   About                                    */
/* -------------------------------------------------------------------------- */

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="eyebrow-pill mb-4 inline-flex rounded-full px-3 py-1">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">
        <span className="gradient-text animate-text-shine">{title}</span>
      </h2>
      {subtitle && <p className="mt-3">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title="From Algorithms to Applications"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* About */}
          <div className="contact-glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold">
              Who I Am
            </h3>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              I'm <span className="font-semibold text-foreground">Maitreya Chauhan</span>,
              a B.Tech Computer Science student at Indian Institute of Information Technology Surat with a strong
              passion for Competitive Programming and Full Stack Development.
              I enjoy solving challenging algorithmic problems and transforming
              ideas into practical software solutions.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              My primary development stack includes Flutter, React, Node.js,
              Express.js, and Firebase. I love building scalable applications,
              exploring modern technologies, and creating intuitive user
              experiences across web and mobile platforms.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Beyond development, I'm an ICPC Asia Regionalist, an active
              Competitive Programmer, and a Problem Setter at the LCS Coding
              Club, where I contribute to coding contests and mentor aspiring
              programmers.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {BADGES.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="glass border-white/10 text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="contact-glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold">
              Technical Skills
            </h3>

            <div className="mt-6 space-y-6">
              {SKILLS.map((category) => (
                <div key={category.title}>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                    {category.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="glass border-white/10 px-3 py-1 text-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Qualifications                               */
/* -------------------------------------------------------------------------- */

function Qualifications() {
  return (
    <section id="qualifications" className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <SectionHeader
          eyebrow="Qualifications"
          title="Qualifications & Certifications"
          subtitle="A timeline of the milestones that shaped my craft."
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, oklch(0.65 0.25 280 / 0.5) 30%, oklch(0.85 0.18 160 / 0.5) 70%, transparent)" }}
          />

          <ul className="space-y-8">
            {QUALIFICATIONS.map((q, i) => {
              const Icon = q.type === "edu" ? GraduationCap : BadgeCheck;
              const left = i % 2 === 0;
              return (
                <li
                  key={q.title}
                  className={`relative grid grid-cols-[2rem_1fr] items-start gap-4 md:grid-cols-2 md:gap-8 group ${
                    left ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Node */}
                  <div className="relative flex justify-start md:justify-center">
                    <span className="glass grid h-9 w-9 place-items-center rounded-full text-primary border border-white/10 shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2 transition-all duration-500 group-hover:scale-120 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.8)]">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                  </div>
                  <div className={`contact-glass-card rounded-2xl p-6 transition-all duration-300 md:${left ? "mr-8 text-right" : "ml-8"}`}>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-3 shadow-[0_0_10px_oklch(0.65_0.25_280_/_0.1)]">
                      {q.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{q.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground font-medium">{q.place}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Achievements                                */
/* -------------------------------------------------------------------------- */

function Achievements() {
  return (
    <section id="achievements" className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones I'm proud of"
          subtitle="Recognition and moments that pushed me forward."
        />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ACHIEVEMENTS.map(({ icon: Icon, ...a }) => (
            <div
              key={a.title}
              className="glass-card-3d group relative rounded-2xl p-6 cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" />
              <div
                aria-hidden
                className="absolute right-0 top-0 h-20 w-20 rounded-full opacity-30 blur-xl transition-opacity group-hover:opacity-60"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative [transform-style:preserve-3d]">
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow [transform:translateZ(40px)]">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="[transform:translateZ(25px)]">
                  <div className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
                    {a.date}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

function Projects() {
  return (
    <section id="projects" className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A few products and experiments I've shipped recently."
        />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="glass-card-3d group flex flex-col rounded-2xl cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 [transform-style:preserve-3d]">
                <div className="flex-1 [transform:translateZ(30px)] flex flex-col">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5 [transform:translateZ(20px)]">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-2 w-full [transform:translateZ(40px)]">
                  {p.demo && p.demo !== "" && p.demo !== "#" && (
                    <Button asChild size="sm" className="gradient-primary text-primary-foreground hover:opacity-90 w-full justify-center">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live
                      </a>
                    </Button>
                  )}

                  {(p.linux || p.windows) && (
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {p.linux && p.linux !== "" && (
                        <Button asChild size="sm" variant="outline" className={`glass border-white/10 hover:bg-white/10 w-full justify-center ${(!p.windows || p.windows === "") ? "col-span-2" : ""}`}>
                          <a href={p.linux} target="_blank" rel="noreferrer">
                            <LinuxIcon className="mr-1.5 h-3.5 w-3.5" /> Download
                          </a>
                        </Button>
                      )}
                      {p.windows && p.windows !== "" && (
                        <Button asChild size="sm" variant="outline" className={`glass border-white/10 hover:bg-white/10 w-full justify-center ${(!p.linux || p.linux === "") ? "col-span-2" : ""}`}>
                          <a href={p.windows} target="_blank" rel="noreferrer">
                            <WindowsIcon className="mr-1.5 h-3.5 w-3.5" /> Download
                          </a>
                        </Button>
                      )}
                    </div>
                  )}

                  {(p.android || p.mac) && (
                    <div className="grid grid-cols-2 gap-2 w-full">
                      {p.android && p.android !== "" && (
                        <Button asChild size="sm" variant="outline" className={`glass border-white/10 hover:bg-white/10 w-full justify-center ${(!p.mac || p.mac === "") ? "col-span-2" : ""}`}>
                          <a href={p.android} target="_blank" rel="noreferrer">
                            <AndroidIcon className="mr-1.5 h-3.5 w-3.5" /> Download
                          </a>
                        </Button>
                      )}
                      {p.mac && p.mac !== "" && (
                        <Button asChild size="sm" variant="outline" className={`glass border-white/10 hover:bg-white/10 w-full justify-center ${(!p.android || p.android === "") ? "col-span-2" : ""}`}>
                          <a href={p.mac} target="_blank" rel="noreferrer">
                            <AppleIcon className="mr-1.5 h-3.5 w-3.5" /> Download
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Contact                                  */
/* -------------------------------------------------------------------------- */

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    // Web3Forms access key
    const accessKey = "162dfa66-b0f2-409c-be26-8869d6a4f44e";

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project/hackathon in mind or just want to say hi? Drop me a message."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="contact-glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-muted-foreground">
              I usually reply within 24 hours.
            </p>
            <ul className="mt-6 space-y-5">
              <ContactRow icon={Mail} label="Email" value="maitreya.chuahan6526@gmail.com" href="mailto:maitreya.chuahan6526@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+917878783669" href="tel:+917878783669" />
              <ContactRow icon={MapPin} label="Location" value="India, Gujarat" />
            </ul>
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Follow</div>
              <div className="mt-3 flex gap-3">
                {[
                  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/maitreya-chauhan/" },
                  { Icon: Github, label: "GitHub", href: "https://github.com/Shadow6526" },
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/maitreya_chauhan/" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass grid h-11 w-11 place-items-center rounded-xl border border-white/10 transition-all duration-500 hover:scale-115 hover:rotate-[360deg] hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.6)]"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={onSubmit} className="contact-glass-card rounded-3xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <Input
                  required
                  name="name"
                  placeholder="Your Name"
                  className="glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium">
                Subject
              </label>
              <Input
                required
                name="subject"
                placeholder="Internship Opportunity / Project Collaboration"
                className="glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <Textarea
                required
                name="message"
                rows={6}
                placeholder="Hi Maitreya, I came across your portfolio and would like to discuss an opportunity..."
                className="glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="mt-6 w-full gradient-primary text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group/row">
      <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary border border-white/10 transition-all duration-500 group-hover/row:scale-110 group-hover/row:rotate-[360deg] group-hover/row:bg-primary group-hover/row:text-primary-foreground group-hover/row:border-primary group-hover/row:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.6)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate font-medium text-foreground group-hover/row:text-primary transition-colors duration-300">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block transition hover:opacity-90">{content}</a> : content}</li>;
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="mt-10 border-t border-white/5 py-12">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-4 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary text-primary-foreground">AM</span>
            <span className="font-display text-lg font-bold gradient-text">Maitreya Chuahan</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
ICPC Asia Regionalist, Competitive Programmer & Full Stack Developer passionate about building high-performance software and solving real-world problems.
          </p>
          <div className="mt-4 flex gap-3">
            {[Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="glass grid h-9 w-9 place-items-center rounded-lg transition hover:text-primary hover:scale-110">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => go(n.id)} className="transition hover:text-foreground">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> maitreya.chuahan6526@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +917878783669</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> India, Gujarat</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1300px] border-t border-white/5 px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Maitreya Chuahan. All rights reserved. Crafted with care.
      </div>
    </footer>
  );
}
