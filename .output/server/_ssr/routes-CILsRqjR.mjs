import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as CodeXml, a as Rocket, b as ArrowRight, c as MapPin, d as Instagram, f as GraduationCap, g as Download, h as ExternalLink, i as Send, l as Mail, m as Eye, n as Trophy, o as Phone, p as Github, r as Sparkles, s as Menu, t as X, u as Linkedin, v as BadgeCheck, x as ArrowDown, y as Award } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CILsRqjR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var curr_default = "/assets/curr-DqkvpOK7.pdf";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var profile_default = "/assets/profile-Cb24q9zQ.jpg";
var icon_default = "/assets/icon-zoWfl5zY.jpg";
var project_1_default = "/assets/project-1-BLIQc9kN.jpg";
var project_2_default = "/assets/project-1-BLIQc9kN.jpg";
var project_3_default = "/assets/project-1-BLIQc9kN.jpg";
var NAV = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "qualifications",
		label: "Qualifications"
	},
	{
		id: "achievements",
		label: "Achievements"
	},
	{
		id: "projects",
		label: "Projects"
	}
];
var SKILLS = [
	{
		title: "Languages",
		skills: [
			"C",
			"C++",
			"Python",
			"Java",
			"JavaScript",
			"SQL",
			"Dart"
		]
	},
	{
		title: "Frontend",
		skills: [
			"Flutter",
			"React.js",
			"HTML5",
			"CSS3",
			"Vite"
		]
	},
	{
		title: "Backend & Database",
		skills: [
			"Node.js",
			"Express.js",
			"Firebase",
			"Firestore",
			"MySQL",
			"REST APIs"
		]
	},
	{
		title: "Developer Tools",
		skills: [
			"Git",
			"GitHub",
			"Vercel",
			"Android Studio",
			"Google Colab",
			"MATLAB"
		]
	},
	{
		title: "AI Tools",
		skills: [
			"ChatGPT",
			"Claude",
			"Gemini",
			"DeepSeek",
			"Grok",
			"Perplexity"
		]
	},
	{
		title: "Core CS",
		skills: [
			"Data Structures & Algorithms",
			"OOP",
			"DBMS",
			"Operating Systems",
			"Computer Networks"
		]
	}
];
var BADGES = [
	"ICPC Asia Regionalist",
	"Competitive Programmer",
	"Problem Setter",
	"Flutter Developer",
	"Full Stack Developer",
	"React",
	"Node.js",
	"Firebase",
	"C++",
	"Open Source Enthusiast"
];
var QUALIFICATIONS = [
	{
		year: "2026",
		title: "ICPC Regionalist",
		place: "2nd year",
		type: "edu"
	},
	{
		year: "2024",
		title: "Class 12th Boards",
		place: "Percentage:77%",
		type: "edu"
	},
	{
		year: "2024",
		title: "Jee Advanced",
		place: "CRL:21052",
		type: "cert"
	},
	{
		year: "2024",
		title: "Jee Mains",
		place: "CRL:36722",
		type: "edu"
	},
	{
		year: "2022",
		title: "Class 10th Boards",
		place: "Percentage:77%",
		type: "edu"
	}
];
var ACHIEVEMENTS = [
	{
		icon: Trophy,
		date: "2026",
		title: "ICPC Asia Regionalist",
		desc: "Secured Rank 195 in the ICPC Asia Mysuru Onsite Regional Contest."
	},
	{
		icon: Award,
		date: "2025",
		title: "IICPC Preliminary Rank 1249",
		desc: "Ranked 1249 among 12,408 participants from IITs, NITs, IIITs, and other institutions nationwide."
	},
	{
		icon: Rocket,
		date: "2025",
		title: "CodeStorm Rank 7",
		desc: "Secured Rank 7 among 200 participants in CodeStorm organized by IIIT Bhagalpur."
	},
	{
		icon: Trophy,
		date: "2025",
		title: "1st Place - Solo Coding Contest in Spring Fiesta 2025",
		desc: "Won an individual coding competition organized at IIIT Surat."
	},
	{
		icon: Award,
		date: "2025",
		title: "2nd Place - Team Coding Contest at Spring Fiesta 2025",
		desc: "Finished 2nd in a team programming competition organized at IIIT Surat."
	},
	{
		icon: Trophy,
		date: "2025",
		title: "1st Place - Solo Coding Contest Stranger Code 4.0",
		desc: "Secured another 1st-place finish in an individual coding competition at IIIT Surat."
	},
	{
		icon: Award,
		date: "2025",
		title: "2nd Place - Team Coding Contest Dijkstra and Khakhra",
		desc: "Secured another 2nd-place finish in a team programming competition at IIIT Surat."
	},
	{
		icon: Trophy,
		date: "2026",
		title: "1st Place - Solo Coding Contest Terminal Exit",
		desc: "Won an individual coding competition organized at IIIT Surat."
	},
	{
		icon: Award,
		date: "2026",
		title: "2nd Place - Team Coding Contest Code of Thrones",
		desc: "Finished 2nd in a team programming competition at IIIT Surat."
	},
	{
		icon: CodeXml,
		date: "2026",
		title: "Codeforces Specialist",
		desc: "Achieved a maximum rating of 1502, earning the Specialist title through consistent performance in rated contests."
	},
	{
		icon: CodeXml,
		date: "2026",
		title: "LeetCode Knight",
		desc: "Achieved a maximum rating of 1878 and earned the Knight badge through regular participation in coding contests."
	},
	{
		icon: CodeXml,
		date: "2026",
		title: "CodeChef 3★",
		desc: "Achieved a maximum rating of 1722, earning the 3-Star rating in competitive programming contests."
	},
	{
		icon: Rocket,
		date: "2026",
		title: "Cross-Platform App Developer",
		desc: "Built a productivity application for Android, Windows, and Linux using Flutter, Firebase, and Google APIs."
	},
	{
		icon: Sparkles,
		date: "2026",
		title: "Full Stack Developer",
		desc: "Developed a Codeforces Statistics Dashboard using React.js, Express.js, and interactive data visualizations."
	},
	{
		icon: Sparkles,
		date: "2025",
		title: "LeetCode Global Rank 1297",
		desc: "Achieved Global Rank 1297 among 26,806 participants in LeetCode Biweekly Contest 170."
	},
	{
		icon: CodeXml,
		date: "2025",
		title: "Problem Setter",
		desc: "Designed, reviewed, and tested algorithmic problems for weekly contests at LCS Coding Club, IIIT Surat."
	},
	{
		icon: BadgeCheck,
		date: "2025",
		title: "Mentored 300+ Students",
		desc: "Conducted workshops on Competitive Programming fundamentals and Git/GitHub."
	}
];
var PROJECTS = [
	{
		img: project_1_default,
		name: "Student Productivity & Planner",
		desc: "A cross-platform productivity application for Android, Windows, and Linux featuring task management, assignment tracking, attendance monitoring, GPA/CGPA calculator, habit tracking, calendar integration, offline support, and Google Drive synchronization.",
		tech: [
			"Flutter",
			"Dart",
			"Node.js",
			"Firebase",
			"Firestore",
			"Google Drive API"
		],
		demo: "#",
		linux: "#",
		windows: "#",
		android: "#",
		mac: "#"
	},
	{
		img: project_2_default,
		name: "Codeforces Statistics Dashboard",
		desc: "A full-stack analytics dashboard that visualizes Codeforces ratings, contest history, submission heatmaps, and performance trends using the official Codeforces API.",
		tech: [
			"React.js",
			"Express.js",
			"Node.js",
			"Recharts",
			"Vercel",
			"Codeforces API"
		],
		demo: "https://cf-statistics.vercel.app",
		linux: "#",
		windows: "#",
		android: "#",
		mac: "#"
	},
	{
		img: project_3_default,
		name: "Federated Learning vs Peer-to-Peer Analysis",
		desc: "A research-oriented project comparing Federated Learning and Peer-to-Peer Machine Learning architectures with distributed aggregation techniques and robustness against poisoning, Sybil, and noise attacks.",
		tech: [
			"Python",
			"Machine Learning",
			"Federated Learning",
			"P2P Networks"
		],
		demo: "#",
		linux: "#",
		windows: "#",
		android: "#",
		mac: "#"
	}
];
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 -z-10",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 -z-10 opacity-[0.15]",
				style: {
					backgroundImage: "radial-gradient(circle at 1px 1px, oklch(1 0 0 / 0.4) 1px, transparent 0)",
					backgroundSize: "32px 32px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qualifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var LinuxIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "4 17 10 11 4 5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: "12",
		y1: "19",
		x2: "20",
		y2: "19"
	})]
});
var WindowsIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.101zM11.25 1.899L24 0v11.55H11.25V1.899zM24 12.45V24l-12.75-1.9v-9.65H24z" })
});
var AppleIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.62.71-1.16 1.85-1.01 2.96 1.12.09 2.27-.58 2.96-1.4z" })
});
var AndroidIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zm3.5 2.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v9.5zm5 0c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-9.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v9.5zm5.5-2.25c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zM12 5C8.69 5 6 7.69 6 11h12c0-3.31-2.69-6-6-6zm3-3c-.28 0-.5.22-.5.5v1.2c-.77-.32-1.61-.5-2.5-.5s-1.73.18-2.5.5V2.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.6C7.26 5.05 6 6.87 6 9h12c0-2.13-1.26-3.95-3-4.9V2.5c0-.28-.22-.5-.5-.5z" })
});
var handleMouseMove = (e) => {
	const el = e.currentTarget;
	const rect = el.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	const w = rect.width;
	const h = rect.height;
	const px = x / w - .5;
	const py = y / h - .5;
	const rotateY = px * 22;
	const rotateX = -py * 22;
	el.style.transition = "none";
	el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.025)`;
	const shine = el.querySelector(".shine-overlay");
	if (shine) {
		shine.style.transition = "none";
		shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`;
		shine.style.opacity = "1";
	}
};
var handleMouseLeave = (e) => {
	const el = e.currentTarget;
	el.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease";
	el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
	const shine = el.querySelector(".shine-overlay");
	if (shine) {
		shine.style.transition = "opacity 0.5s ease-out";
		shine.style.opacity = "0";
	}
};
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const go = (id) => {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `flex md:grid md:grid-cols-3 max-w-[1300px] w-full items-center justify-between px-4 sm:px-6 transition-all duration-300 ${scrolled ? "glass rounded-2xl py-2 mx-4 md:mx-auto" : "mx-auto"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => go("home"),
					className: "flex items-center gap-2 font-display text-xl font-bold justify-self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 overflow-hidden place-items-center rounded-xl border border-white/10 shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: icon_default,
							alt: "Maitreya Chauhan logo",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline gradient-text",
						children: "Maitreya Chuahan"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex md:justify-self-center",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(n.id),
						className: "rounded-lg px-3 py-2 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground",
						children: n.label
					}) }, n.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end justify-self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => go("contact"),
						className: "hidden md:inline-flex gradient-primary text-primary-foreground shadow-glow hover:opacity-90 text-base h-10 px-5",
						children: ["Let's Talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "glass rounded-lg p-2 md:hidden",
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-4 mt-2 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass rounded-2xl p-4 animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(n.id),
						className: "w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/5",
						children: n.label
					}) }, n.id))
				})
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "relative pt-32 pb-10 sm:pt-40 sm:pb-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1150px] grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
						}), "From Algorithms to Applications"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl",
						children: ["Hi, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Maitreya Chauhan"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl font-semibold text-muted-foreground sm:text-2xl",
						children: "Competitive Programer, Linux Guy & Full Stack Devloper"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "From algorithms to applications, I enjoy building software that is fast, reliable, and intuitive. As a Computer Science student at IIIT Surat, I specialize in Competitive Programming, Flutter, React, Node.js, and Firebase while constantly exploring better ways to solve real-world problems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								asChild: true,
								className: "gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: curr_default,
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), "View Resume"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								className: "glass border-white/10 hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: curr_default,
									download: "Maitreya_Chauhan_Resume.pdf",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download Resume"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								variant: "outline",
								onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
								className: "glass border-white/10 hover:bg-white/10",
								children: ["View Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "ml-2 h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									variant: "outline",
									className: "glass border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "mr-2 h-4 w-4" }),
										"Coding Profiles",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute left-0 top-full z-50 mt-2 min-w-[220px] translate-y-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "glass rounded-2xl border border-white/10 p-2 shadow-[0_20px_60px_-10px_oklch(0_0_0_/_0.6),0_0_30px_oklch(0.65_0.25_280_/_0.15)]",
										children: [
											{
												name: "Codeforces",
												handle: "Shadow6526",
												url: "https://codeforces.com/profile/Shadow6526",
												rating: "Specialist · 1502",
												color: "oklch(0.65 0.25 25)",
												icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													fill: "currentColor",
													className: "h-4 w-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" })
												})
											},
											{
												name: "LeetCode",
												handle: "maitreya_c",
												url: "https://leetcode.com/u/maitreya_c/",
												rating: "Knight · 1878",
												color: "oklch(0.75 0.18 60)",
												icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													fill: "currentColor",
													className: "h-4 w-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" })
												})
											},
											{
												name: "CodeChef",
												handle: "maitreya_c",
												url: "https://www.codechef.com/users/maitreya_c",
												rating: "3★ · 1722",
												color: "oklch(0.7 0.15 40)",
												icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													fill: "currentColor",
													className: "h-4 w-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.257.004C5.23.264.171 5.25.008 11.306c-.173 6.341 4.868 11.6 11.15 11.69 6.37.09 11.636-5.047 11.636-11.43C22.794 5.126 17.558-.256 11.257.004zM8.49 15.857c-2.233-.1-3.93-1.986-3.811-4.229.116-2.213 2.03-3.907 4.22-3.798 2.17.108 3.835 1.967 3.748 4.147-.086 2.16-1.944 3.98-4.157 3.88zm6.89.28c-2.233-.1-3.93-1.986-3.811-4.229.116-2.213 2.03-3.907 4.22-3.798 2.17.108 3.835 1.967 3.748 4.147-.086 2.16-1.944 3.98-4.157 3.88z" })
												})
											},
											{
												name: "AtCoder",
												handle: "maitreya_c",
												url: "https://atcoder.jp/users/maitreya_c",
												rating: "Rated",
												color: "oklch(0.7 0.2 200)",
												icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													viewBox: "0 0 24 24",
													fill: "currentColor",
													className: "h-4 w-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5l7.5 13H4.5L12 4.5z" })
												})
											}
										].map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: profile.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white/5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-glow",
													style: {
														background: `${profile.color}22`,
														color: profile.color,
														border: `1px solid ${profile.color}44`,
														boxShadow: `0 0 0 0 ${profile.color}`
													},
													onMouseEnter: (e) => {
														e.currentTarget.style.boxShadow = `0 0 12px ${profile.color}66`;
													},
													onMouseLeave: (e) => {
														e.currentTarget.style.boxShadow = `0 0 0 0 ${profile.color}`;
													},
													children: profile.icon
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors duration-200",
														children: profile.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground",
														children: profile.rating
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0" })
											]
										}, profile.name))
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/Shadow6526",
								"aria-label": "GitHub",
								className: "text-muted-foreground transition hover:text-foreground hover:scale-110 inline-block",
								target: "_blank",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/in/maitreya-chauhan/",
								"aria-label": "LinkedIn",
								className: "text-muted-foreground transition hover:text-foreground hover:scale-110 inline-block",
								target: "_blank",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/maitreya_chauhan/",
								"aria-label": "Instagram",
								className: "text-muted-foreground transition hover:text-foreground hover:scale-110 inline-block",
								target: "_blank",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative md:ml-auto md:mr-0 mx-auto w-full max-w-[400px] animate-scale-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -inset-6 -z-10 rounded-full blur-3xl opacity-60",
					style: { background: "var(--gradient-primary)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card-3d rounded-[2rem] p-2 shadow-glow cursor-pointer relative",
					onMouseMove: handleMouseMove,
					onMouseLeave: handleMouseLeave,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-[1.8rem] [transform-style:preserve-3d]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile_default,
								alt: "Maitreya Chuahan portrait",
								width: 1024,
								height: 1024,
								className: "h-auto w-full rounded-[1.5rem] object-cover [transform:translateZ(20px)]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow animate-fade-in [transform:translateZ(45px)] [transform-style:preserve-3d]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: "20 Years"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "Scaning the Web"
							})] })]
						})
					]
				})]
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto mb-14 max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass mb-4 inline-flex rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl font-bold sm:text-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-text",
					children: title
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1300px] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "About Me",
				title: "From Algorithms to Applications"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-glass-card rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: "Who I Am"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: [
								"I'm ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: "Maitreya Chauhan"
								}),
								", a B.Tech Computer Science student at IIIT Surat with a strong passion for Competitive Programming and Full Stack Development. I enjoy solving challenging algorithmic problems and transforming ideas into practical software solutions."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "My primary development stack includes Flutter, React, Node.js, Express.js, and Firebase. I love building scalable applications, exploring modern technologies, and creating intuitive user experiences across web and mobile platforms."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted-foreground",
							children: "Beyond development, I'm an ICPC Asia Regionalist, an active Competitive Programmer, and a Problem Setter at the LCS Coding Club, where I contribute to coding contests and mentor aspiring programmers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: BADGES.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "glass border-white/10 text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10",
								children: badge
							}, badge))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-glass-card rounded-3xl p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold",
						children: "Technical Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-6",
						children: SKILLS.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-3 text-sm font-semibold uppercase tracking-wider text-primary",
							children: category.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: category.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "glass border-white/10 px-3 py-1 text-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:bg-primary/10",
								children: skill
							}, skill))
						})] }, category.title))
					})]
				})]
			})]
		})
	});
}
function Qualifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "qualifications",
		className: "py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1300px] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Qualifications",
				title: "Qualifications & Certifications",
				subtitle: "A timeline of the milestones that shaped my craft."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute left-4 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2",
					style: { background: "linear-gradient(to bottom, transparent, oklch(0.65 0.25 280 / 0.5) 30%, oklch(0.85 0.18 160 / 0.5) 70%, transparent)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-8",
					children: QUALIFICATIONS.map((q, i) => {
						const Icon = q.type === "edu" ? GraduationCap : BadgeCheck;
						const left = i % 2 === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `relative grid grid-cols-[2rem_1fr] items-start gap-4 md:grid-cols-2 md:gap-8 group ${left ? "" : "md:[&>*:first-child]:order-2"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex justify-start md:justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass grid h-9 w-9 place-items-center rounded-full text-primary border border-white/10 shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2 transition-all duration-500 group-hover:scale-120 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.8)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `contact-glass-card rounded-2xl p-6 transition-all duration-300 md:${left ? "mr-8 text-right" : "ml-8"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 mb-3 shadow-[0_0_10px_oklch(0.65_0.25_280_/_0.1)]",
										children: q.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300",
										children: q.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm text-muted-foreground font-medium",
										children: q.place
									})
								]
							})]
						}, q.title);
					})
				})]
			})]
		})
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "achievements",
		className: "py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1300px] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Achievements",
				title: "Milestones I'm proud of",
				subtitle: "Recognition and moments that pushed me forward."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: ACHIEVEMENTS.map(({ icon: Icon, ...a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card-3d group relative rounded-2xl p-6 cursor-pointer",
					onMouseMove: handleMouseMove,
					onMouseLeave: handleMouseLeave,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute right-0 top-0 h-20 w-20 rounded-full opacity-30 blur-xl transition-opacity group-hover:opacity-60",
							style: { background: "var(--gradient-primary)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative [transform-style:preserve-3d]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow [transform:translateZ(40px)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "[transform:translateZ(25px)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 text-xs font-medium uppercase tracking-wider text-primary",
										children: a.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-lg font-semibold",
										children: a.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: a.desc
									})
								]
							})]
						})
					]
				}, a.title))
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1300px] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Projects",
				title: "Selected work",
				subtitle: "A few products and experiments I've shipped recently."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
				children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "glass-card-3d group flex flex-col rounded-2xl cursor-pointer",
					onMouseMove: handleMouseMove,
					onMouseLeave: handleMouseLeave,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "shine-overlay pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden rounded-t-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.name,
								loading: "lazy",
								width: 1024,
								height: 1024,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6 [transform-style:preserve-3d]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 [transform:translateZ(30px)] flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-semibold",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: p.desc
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5 [transform:translateZ(20px)]",
									children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-col gap-2 w-full [transform:translateZ(40px)]",
									children: [
										p.demo && p.demo !== "" && p.demo !== "#" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "sm",
											className: "gradient-primary text-primary-foreground hover:opacity-90 w-full justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: p.demo,
												target: "_blank",
												rel: "noreferrer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mr-1.5 h-3.5 w-3.5" }), " Live"]
											})
										}),
										(p.linux || p.windows) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2 w-full",
											children: [p.linux && p.linux !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												className: `glass border-white/10 hover:bg-white/10 w-full justify-center ${!p.windows || p.windows === "" ? "col-span-2" : ""}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: p.linux,
													target: "_blank",
													rel: "noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinuxIcon, { className: "mr-1.5 h-3.5 w-3.5" }), " Download"]
												})
											}), p.windows && p.windows !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												className: `glass border-white/10 hover:bg-white/10 w-full justify-center ${!p.linux || p.linux === "" ? "col-span-2" : ""}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: p.windows,
													target: "_blank",
													rel: "noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowsIcon, { className: "mr-1.5 h-3.5 w-3.5" }), " Download"]
												})
											})]
										}),
										(p.android || p.mac) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2 w-full",
											children: [p.android && p.android !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												className: `glass border-white/10 hover:bg-white/10 w-full justify-center ${!p.mac || p.mac === "" ? "col-span-2" : ""}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: p.android,
													target: "_blank",
													rel: "noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AndroidIcon, { className: "mr-1.5 h-3.5 w-3.5" }), " Download"]
												})
											}), p.mac && p.mac !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												size: "sm",
												variant: "outline",
												className: `glass border-white/10 hover:bg-white/10 w-full justify-center ${!p.android || p.android === "" ? "col-span-2" : ""}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: p.mac,
													target: "_blank",
													rel: "noreferrer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppleIcon, { className: "mr-1.5 h-3.5 w-3.5" }), " Download"]
												})
											})]
										})
									]
								})
							]
						})
					]
				}, p.name))
			})]
		})
	});
}
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		const accessKey = "162dfa66-b0f2-409c-be26-8869d6a4f44e";
		const formData = new FormData(e.currentTarget);
		formData.append("access_key", accessKey);
		try {
			const data = await (await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			})).json();
			if (data.success) {
				toast.success("Message sent successfully! I'll get back to you soon.");
				e.target.reset();
			} else toast.error(data.message || "Failed to send message. Please try again.");
		} catch (error) {
			console.error("Form submission error:", error);
			toast.error("Failed to send message. Please check your connection.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1300px] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Contact",
				title: "Let's build something great",
				subtitle: "Have a project/hackathon in mind or just want to say hi? Drop me a message."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-glass-card rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "I usually reply within 24 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: Mail,
									label: "Email",
									value: "maitreya.chuahan6526@gmail.com",
									href: "mailto:maitreya.chuahan6526@gmail.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: Phone,
									label: "Phone",
									value: "+917878783669",
									href: "tel:+917878783669"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
									icon: MapPin,
									label: "Location",
									value: "India, Gujarat"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Follow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex gap-3",
								children: [
									{
										Icon: Linkedin,
										label: "LinkedIn",
										href: "https://www.linkedin.com/in/maitreya-chauhan/"
									},
									{
										Icon: Github,
										label: "GitHub",
										href: "https://github.com/Shadow6526"
									},
									{
										Icon: Instagram,
										label: "Instagram",
										href: "https://www.instagram.com/maitreya_chauhan/"
									}
								].map(({ Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": label,
									className: "glass grid h-11 w-11 place-items-center rounded-xl border border-white/10 transition-all duration-500 hover:scale-115 hover:rotate-[360deg] hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.6)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4.5 w-4.5" })
								}, label))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "contact-glass-card rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-sm font-medium",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								name: "name",
								placeholder: "Your Name",
								className: "glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-sm font-medium",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								type: "email",
								name: "email",
								placeholder: "your.email@example.com",
								className: "glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-sm font-medium",
								children: "Subject"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								required: true,
								name: "subject",
								placeholder: "Internship Opportunity / Project Collaboration",
								className: "glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-sm font-medium",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								required: true,
								name: "message",
								rows: 6,
								placeholder: "Hi Maitreya, I came across your portfolio and would like to discuss an opportunity...",
								className: "glass border-white/10 focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.2)] transition-all duration-300 resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: sending,
							size: "lg",
							className: "mt-6 w-full gradient-primary text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn",
							children: sending ? "Sending..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "ml-2 h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1.5 group-hover/btn:-translate-y-1.5" })] })
						})
					]
				})]
			})]
		})
	});
}
function ContactRow({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 group/row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "glass grid h-11 w-11 shrink-0 place-items-center rounded-xl text-primary border border-white/10 transition-all duration-500 group-hover/row:scale-110 group-hover/row:rotate-[360deg] group-hover/row:bg-primary group-hover/row:text-primary-foreground group-hover/row:border-primary group-hover/row:shadow-[0_0_15px_oklch(0.65_0.25_280_/_0.6)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate font-medium text-foreground group-hover/row:text-primary transition-colors duration-300",
				children: value
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "block transition hover:opacity-90",
		children: content
	}) : content });
}
function Footer() {
	const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-10 border-t border-white/5 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1300px] gap-10 px-4 sm:grid-cols-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-xl gradient-primary text-primary-foreground",
							children: "AM"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold gradient-text",
							children: "Maitreya Chuahan"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm text-muted-foreground",
						children: "ICPC Asia Regionalist, Competitive Programmer & Full Stack Developer passionate about building high-performance software and solving real-world problems."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-3",
						children: [
							Linkedin,
							Github,
							Instagram
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "glass grid h-9 w-9 place-items-center rounded-lg transition hover:text-primary hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(n.id),
						className: "transition hover:text-foreground",
						children: n.label
					}) }, n.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-semibold",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " maitreya.chuahan6526@gmail.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +917878783669"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " India, Gujarat"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-[1300px] border-t border-white/5 px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Maitreya Chuahan. All rights reserved. Crafted with care."
			]
		})]
	});
}
var SplitComponent = Portfolio;
//#endregion
export { SplitComponent as component };
