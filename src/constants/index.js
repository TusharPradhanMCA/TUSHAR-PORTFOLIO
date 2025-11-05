import {
  aitestcases,
  rahul,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  orufy,
  jecrc,
  subodh,
  wager,
  URLShortner,
  tripguide,
  threejs,
  Playwright,
  kugelblitz,
} from "../assets";

export const navLinks = [
   {
    id: "CV",
    title: "CV",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
  {
    title: "Automation Engineer",
    icon: web,
  },
  {
    title: "Playwright Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Manual Tester",
    icon: creator,
  },
];

const technologies = [
  {
    title: "Playwright",
    icon: Playwright,
  },
   {
    name: "figma",
    icon: figma,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
 
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
    {
    title: "Software Test Engineer",
    company_name: "Kugelblitz Private Limited",
    icon: kugelblitz,
    iconBg: "#ffffff",
    date: "Aug 2025 - Present",
    points: [
      "Leading automation for the Loan Origination System (LOS) using Playwright",
      "Developed reusable automation scripts for LOS workflows including KYC, document validation, and approvals.",
      "Improved test reliability and reduced manual testing effort by 70%.",
      "Collaborated with cross-functional teams in Agile sprints to enhance release quality.",
    ],
  },
  {
    title: "Software Test Engineer",
    company_name: "Orufy Technologies Private Limited",
    icon: orufy,
    iconBg: "#ffffff",
    date: "February 2025 - Augest 2025",
    points: [
      "Developed and maintained 200+ automated and manual test cases for Orufy Connect across staging andproduction.",
      "Architected a custom Playwright framework in JavaScript for end-to-end automation.",
      "Automated OTP-based registration by integrating with Gmail API, improving test setup speed by 60%.",
      "Led execution of functional, API, and UI tests in Agile sprints, reducing defect leakage by 80%.",
    ],
  },
  {
    title: "Master of Computer Applications(MCA)",
    company_name: "ARTIFICIAL INTELLIGENCE",
    icon: jecrc,
    iconBg: "#E6DEDD",
    date: "JULY 2023 - JULY 2025",
    points: [
      " JECRC University, Jaipur, India: Master of Computer Applications (MCA)",
      "CGPA: 7.98 / 10",
      "Relevant Coursework: DSA, System Design, Web Development, Software Testing, ADBMS",
    ],
  },
  {
    title: "Bachelor of Computer Applications(BCA)",
    company_name: "COMPUTER APPLICATION",
    icon: subodh,
    iconBg: "#383E56",
    date: "JULY 2020 - JULY 2023",
    points: [
      "Subodh P.G. College, Jaipur, India: Bachelor of Computer Applications (BCA)",
      "Percentage: 79%",
      "Relevant Coursework: Web Development, Operating Systems, DBMS.",
    ],
  },
  
];

const testimonials = [
   {
    testimonial:
      "Tushar developed our LOS New UI automation and built robust API automation with great precision.",
    name: "Rahul Choudhary",
    designation: "Manager",
    company: "Kugelblitz Pvt",
    image: rahul,
  },
  {
    testimonial:
      "Tushar’s Playwright automation halved our testing time and boosted release speed.",
    name: "Vikash Sharma",
    designation: "CEO",
    company: "Orufy Technologies",
    image: "https://assets.orufy.com/image_901_1_5ad0c1dfd0.webp",
  },
  {
    testimonial:
      "Tushar’s automation made our QA process faster, smarter, and far more reliable.",
    name: "Prerna Saxena",
    designation: "PM",
    company: "Orufy Technologies",
    image: "https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg",
  },
 
];


const projects = [
   {
    name: "AI TestCases",
    description:
      "AI-powered tool that converts PRD files or text into structured LOS test cases, automating creation and export in JSON, CSV, or XLSX formats.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "gemini api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: aitestcases,
    source_code_link: "https://github.com/TusharPradhanMCA/los-test-agent",
  },
  {
    name: "Wagerx",
    description:
      "An advanced, interactive crypto betting platform featuring real-time odds, secure wallet integration, and seamless gameplay for a dynamic user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wager,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
