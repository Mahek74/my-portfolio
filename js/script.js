
// ==================================================
// 1. SETTINGS
// Add assets/resume.pdf, then change false to true.
// ==================================================

const settings = {
  showResume: false,
};


// ==================================================
// 2. PROJECTS
// MAHEK PATEL - 13 PROJECTS
// Add your real screenshot path and GitHub URL later.
// ==================================================

const projects = [

  // 01. AI RESUME ANALYZER
  {
    title: "AI Resume Analyzer",
    type: "AI + Full Stack Development",
    stack: "React.js, React Router V7, JavaScript, Tailwind CSS, Puter.js, AI APIs",
    description:
      "An AI-powered resume analysis application that evaluates resumes and provides instant feedback to help job seekers improve their resumes, identify strengths, and discover areas for improvement.",
    banner: "Analyze. Improve. Succeed.",
    color: "#173762",
    image: "",
    imageAlt: "AI Resume Analyzer dashboard",
    url: "",
  },

  // 02. AI INTERVIEW PLATFORM
  {
    title: "AI Interview Platform",
    type: "AI + Full Stack Development",
    stack: "Next.js, React.js, Tailwind CSS, JavaScript, Vapi.ai, Firebase, AI APIs",
    description:
      "An AI-powered interview preparation platform featuring real-time voice interaction, intelligent interview questions, and personalized feedback to help candidates improve their interview skills.",
    banner: "Your Next Interview Starts Here.",
    color: "#42275a",
    image: "",
    imageAlt: "AI Interview Platform dashboard",
    url: "",
  },

  // 03. AI LEARNING BUDDY
  {
    title: "AI Learning Buddy",
    type: "Artificial Intelligence",
    stack: "Python, Streamlit, Google Gemini API, Python-dotenv",
    description:
      "An interactive AI-powered learning assistant that helps students understand programming concepts, learn Python, and receive instant explanations through an intelligent conversational interface.",
    banner: "Learn Smarter With AI.",
    color: "#204a48",
    image: "",
    imageAlt: "AI Learning Buddy interface",
    url: "",
  },

  // 04. WASTE MANAGEMENT SYSTEM
  {
    title: "Waste Management System",
    type: "Web Development · Hackathon Project",
    stack: "HTML5, CSS3, JavaScript, Firebase",
    description:
      "A smart waste management solution developed as a hackathon project. Designed to improve waste tracking and management through a user-friendly web application.",
    banner: "Building A Cleaner Future.",
    color: "#286044",
    image: "",
    imageAlt: "Waste Management System",
    url: "",
  },

  // 05. PRICING STRATEGY SYSTEM
  {
    title: "Pricing Strategy System",
    type: "Full Stack Development",
    stack: "React.js, Node.js, Express.js, MongoDB, REST APIs",
    description:
      "A full-stack product pricing management application featuring user authentication, product management, backend APIs, and a dashboard for managing product pricing information.",
    banner: "Smarter Pricing Decisions.",
    color: "#4b3c27",
    image: "",
    imageAlt: "Pricing Strategy dashboard",
    url: "",
  },

  // 06. SHIFRA VIRTUAL ASSISTANT
  {
    title: "Shifra - Virtual AI Assistant",
    type: "AI + Voice Automation",
    stack: "Python, Voice Recognition, Speech Processing, Face Detection, AI APIs",
    description:
      "A personal virtual assistant designed to interact through voice and text. Features include WhatsApp messaging and calling, face detection, YouTube integration, and everyday task assistance.",
    banner: "Your Personal AI Assistant.",
    color: "#343358",
    image: "",
    imageAlt: "Shifra virtual assistant",
    url: "",
  },

  // 07. JARVIS PERSONAL ASSISTANT
  {
    title: "Jarvis - Personal Assistant",
    type: "Python + Automation",
    stack: "Python, Voice Recognition, Speech Processing, Automation",
    description:
      "A personal virtual assistant project focused on voice-based interaction and automating everyday computer tasks through intelligent commands.",
    banner: "The Future Of Assistance.",
    color: "#183d55",
    image: "",
    imageAlt: "Jarvis personal assistant",
    url: "",
  },

  // 08. CGPA CALCULATOR
  {
    title: "CGPA Calculator",
    type: "Web Development",
    stack: "HTML5, CSS3, JavaScript",
    description:
      "A student-friendly academic calculator designed to calculate semester GPA and overall CGPA using academic grades and credit information.",
    banner: "Calculate Your Success.",
    color: "#51402a",
    image: "",
    imageAlt: "CGPA Calculator interface",
    url: "",
  },

  // 09. FILE UPLOAD SYSTEM
  {
    title: "File Upload System",
    type: "Backend + API Development",
    stack: "Node.js, Express.js, MongoDB, Postman",
    description:
      "A backend-powered file management application designed to handle file uploads through API endpoints, with backend integration and API testing.",
    banner: "Upload. Store. Manage.",
    color: "#24445b",
    image: "",
    imageAlt: "File Upload System",
    url: "",
  },

  // 10. LOGIN SYSTEM
  {
    title: "Login & Authentication System",
    type: "Web Development",
    stack: "HTML, CSS, JavaScript, Authentication",
    description:
      "A user authentication project featuring login and registration functionality, designed to provide a simple and user-friendly authentication experience.",
    banner: "Secure Access. Simple Experience.",
    color: "#49324f",
    image: "",
    imageAlt: "Login system interface",
    url: "",
  },

  // 11. PERSONAL PORTFOLIO WEBSITE
  {
    title: "Personal Portfolio Website",
    type: "Frontend Development",
    stack: "HTML5, CSS3, JavaScript, Responsive Web Design",
    description:
      "A modern personal developer portfolio showcasing my technical skills, projects, education, career journey, achievements, and contact information through a responsive and interactive design.",
    banner: "Turning Ideas Into Reality.",
    color: "#173762",
    image: "",
    imageAlt: "Mahek Patel portfolio website",
    url: "",
  },

  // 12. TO-DO LIST APPLICATION
  {
    title: "To-Do List Application",
    type: "Frontend Development",
    stack: "HTML5, CSS3, JavaScript",
    description:
      "A task management application designed to help users organize daily activities, add tasks, manage priorities, and track productivity through a simple interface.",
    banner: "Organize Your Day.",
    color: "#285047",
    image: "",
    imageAlt: "To Do List application",
    url: "",
  },

  // 13. DIGITAL CLOCK
  {
    title: "Digital Clock",
    type: "JavaScript Project",
    stack: "HTML5, CSS3, JavaScript",
    description:
      "A real-time digital clock that dynamically displays the current time with automatic updates and a clean, minimal user interface.",
    banner: "Every Second Matters.",
    color: "#42335b",
    image: "",
    imageAlt: "Digital Clock interface",
    url: "",
  },

];


// ==================================================
// 3. TECH SPHERES
// Your technical skills
// ==================================================

const skills = [
  {
    label: "React.js",
    x: 18,
    y: 12,
    size: 140,
    color: "#168aa0",
    rotation: -18
  },

  {
    label: "Next.js",
    x: 37,
    y: 4,
    size: 135,
    color: "#292533",
    rotation: 12
  },

  {
    label: "MongoDB",
    x: 66,
    y: 0,
    size: 140,
    color: "#4b9744",
    rotation: 18
  },

  {
    label: "JavaScript",
    x: 4,
    y: 38,
    size: 145,
    color: "#9b7900",
    rotation: -20
  },

  {
    label: "Node.js",
    x: 49,
    y: 35,
    size: 165,
    color: "#4e873e",
    rotation: 15
  },

  {
    label: "MySQL",
    x: 25,
    y: 43,
    size: 165,
    color: "#107f8d",
    rotation: -12
  },

  {
    label: "Python",
    x: 72,
    y: 38,
    size: 135,
    color: "#326ca0",
    rotation: 22
  },

  {
    label: "Java",
    x: 41,
    y: 66,
    size: 140,
    color: "#b85b35",
    rotation: -14
  },

  {
    label: "C++",
    x: 64,
    y: 69,
    size: 125,
    color: "#545aba",
    rotation: 15
  },

  {
    label: "HTML & CSS",
    x: 18,
    y: 76,
    size: 110,
    color: "#b34866",
    rotation: -10
  },
];


// ==================================================
// 4. PROJECT CAROUSEL LOGIC
// ==================================================

let currentProject = 0;

const dotsContainer = document.getElementById("project-dots");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const projectImage = document.getElementById("project-image");
const dashboard = document.getElementById("dashboard");
const projectLink = document.getElementById("project-link");
const projectPreview = document.getElementById("project-preview");


// ==================================================
// 5. DISPLAY PROJECT
// ==================================================

function showProject(index) {

  if (projects.length === 0) {
    return;
  }

  currentProject = (index + projects.length) % projects.length;

  const project = projects[currentProject];

  document.getElementById("project-number").textContent =
    String(currentProject + 1).padStart(2, "0");

  document.getElementById("project-title").textContent =
    project.title;

  document.getElementById("project-type").textContent =
    project.type;

  document.getElementById("project-stack").textContent =
    project.stack;

  document.getElementById("project-description").textContent =
    project.description;

  document.getElementById("preview-title").textContent =
    project.banner;


  // Update preview background

  projectPreview.style.background =
    `linear-gradient(145deg, ${project.color}, #111827)`;


  // Default preview

  projectImage.hidden = true;
  dashboard.hidden = false;


  // Display actual screenshot if provided

  if (project.image) {

    projectImage.alt = project.imageAlt || project.title;

    projectImage.onload = () => {
      projectImage.hidden = false;
      dashboard.hidden = true;
    };

    projectImage.onerror = () => {
      projectImage.hidden = true;
      dashboard.hidden = false;
    };

    projectImage.src = project.image;

  } else {

    projectImage.onload = null;
    projectImage.onerror = null;

    projectImage.removeAttribute("src");

  }


  // Display project link only when available

  projectLink.hidden = !project.url;

  projectLink.href = project.url || "#work";


  // Update carousel dots

  Array.from(dotsContainer.children).forEach((dot, dotIndex) => {

    const isActive = dotIndex === currentProject;

    dot.classList.toggle("active", isActive);

    dot.setAttribute("aria-pressed", String(isActive));

  });

}


// ==================================================
// 6. CREATE PROJECT NAVIGATION DOTS
// ==================================================

projects.forEach((project, index) => {

  const dot = document.createElement("button");

  dot.type = "button";

  dot.className = "dot";

  dot.setAttribute(
    "aria-label",
    `Show project ${index + 1}: ${project.title}`
  );

  dot.addEventListener("click", () => {
    showProject(index);
  });

  dotsContainer.append(dot);

});


// ==================================================
// 7. PREVIOUS PROJECT
// ==================================================

previousButton.addEventListener("click", () => {

  showProject(currentProject - 1);

});


// ==================================================
// 8. NEXT PROJECT
// ==================================================

nextButton.addEventListener("click", () => {

  showProject(currentProject + 1);

});


// ==================================================
// 9. KEYBOARD NAVIGATION
// ==================================================

document.querySelector(".carousel-controls").addEventListener(
  "keydown",
  (event) => {

    if (event.key === "ArrowLeft") {

      event.preventDefault();

      showProject(currentProject - 1);

    }

    if (event.key === "ArrowRight") {

      event.preventDefault();

      showProject(currentProject + 1);

    }

  }
);


// ==================================================
// 10. INITIALIZE PROJECT CAROUSEL
// ==================================================

showProject(0);


// ==================================================
// 11. CREATE ANIMATED TECH SPHERES
// ==================================================

const orbStage = document.getElementById("orb-stage");

skills.forEach((skill, index) => {

  const orb = document.createElement("div");

  orb.className = "orb";

  orb.textContent = skill.label;

  orb.setAttribute("role", "listitem");

  orb.style.setProperty("--x", `${skill.x}%`);

  orb.style.setProperty("--y", `${skill.y}%`);

  orb.style.setProperty("--size", `${skill.size}px`);

  orb.style.setProperty("--color", skill.color);

  orb.style.setProperty("--rotation", `${skill.rotation}deg`);

  orb.style.setProperty("--delay", `${index * -0.6}s`);

  orb.style.zIndex = String(index);

  orbStage.append(orb);

});


// ==================================================
// 12. OPTIONAL RESUME
// ==================================================

const resumeLink = document.getElementById("resume-link");

resumeLink.hidden = !settings.showResume;


// ==================================================
// 13. AUTOMATIC COPYRIGHT YEAR
// ==================================================

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();
