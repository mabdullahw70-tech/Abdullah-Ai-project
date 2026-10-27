// Edit this file to update your portfolio content.
export const profile = {
  name: "M. Abdullah Waheed",
  firstName: "Abdullah",
  role: "Web & AI Developer",
  intro:
    "I'm a Software Engineering student in Sargodha. I build responsive web applications with React and Django, and I'm moving into AI development.",
  about:
    "I enjoy turning ideas into working, user-friendly applications. I have built a full e-commerce app, completed a web development internship, and I'm now training my own AI models.",
  email: "mabdullahw.70@gmail.com",
  phone: "0336-6664870",
  location: "Sargodha, Pakistan",
  linkedin: "https://www.linkedin.com/in/abdullah-waheed-8a8b1627a",
  github: "https://github.com/mabdullahw70-tech",
  cv: "/Abdullah_CV.pdf", // put a CV copy in /public with this name
};

export const stats = [
  { value: "3.34", label: "CGPA (of 4.0)" },
  { value: "6th", label: "Semester, BSSE" },
  { value: "3 mo", label: "Web internship" },
];

export const services = [
  { title: "Web Development", text: "Responsive websites and web apps using React, Tailwind CSS, Bootstrap and Django.", icon: "</>" },
  { title: "AI Development", text: "Learning and building AI-powered features and models for real applications.", icon: "AI" },
  { title: "Graphic Design", text: "Logos, layouts and visuals made in Adobe Illustrator.", icon: "Ai" },
];

export const skills = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Django", "PostgreSQL", "REST APIs", "Adobe Illustrator", "AI Development"];

export const education = [
  { title: "BS Software Engineering", place: "University of Sargodha", year: "Expected 2027", detail: "CGPA 3.34 / 4.0" },
  { title: "Intermediate (ICS, Physics)", place: "Reader Group of Colleges, Sargodha", year: "2023", detail: "891 / 1100" },
  { title: "Matric (Computer)", place: "Govt. Comprehensive Boys High School, Sargodha", year: "2021", detail: "1096 / 1100" },
];

export const experience = [
  { title: "Web Development Intern", place: "MawkTech, Sargodha", year: "3 months", detail: "Worked on web application development." },
];

export const steps = [
  { title: "Understand", text: "I start by clarifying what the app must do and who will use it." },
  { title: "Design & Plan", text: "I sketch the layout, choose the stack and break the work into tasks." },
  { title: "Build & Test", text: "I build responsive, clean code and test it on real screens." },
];

export const projects = [
  {
    title: "Fruitkha",
    type: "E-commerce web app",
    status: "Completed",
    text: "Responsive agricultural e-commerce app with product browsing, shopping cart, checkout, authentication and REST API integration.",
    tags: ["React.js", "Tailwind CSS", "Django", "PostgreSQL"],
    link: "https://github.com/mabdullahw70-tech",
  },
  {
    title: "Automotive AI Platform",
    type: "Final year project",
    status: "In progress",
    text: "A web and AI project for the automotive field, built with a group of two. It uses our own trained model, with no external API calls.",
    tags: ["Web", "AI", "Machine Learning"],
    link: "https://github.com/mabdullahw70-tech",
  },
  {
    title: "School Management System",
    type: "Web application",
    status: "Planned",
    text: "Class records and monthly fee management, with printable PDF reports.",
    tags: ["Web", "PDF Reports"],
    link: "https://github.com/mabdullahw70-tech",
  },
];
