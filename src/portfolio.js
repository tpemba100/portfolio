const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://tpemba100.github.io/portfolio",
  title: "Tsering Pemba",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Tsering Pemba",
  role: "Front End Engineer",
  description:
    "As an aspiring developer, I am passionate about creating user-centered applications that are designed to deliver a seamless and intuitive experience for the end-users.",
  social: {
    linkedin: "https://linkedin.com/in/tpemba",
    github: "https://github.com/tpemba100",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Student Group",
    description:
      "This is an application that can help students manage members in their group. The students can be added directly from a form container and displayed right below it. All the data is stored in MySQL Database or PHP MyAdmin.",
    stack: [
      "CSS",
      "JavaeScript",
      "React",
      "Spring Boot",
      "Material UI",
      "Node",
      "MySQL Database",
    ],
    sourceCode: "https://github.com/tpemba100/Student-Group",
    livePreview: "https://github.com/tpemba100/Student-Gropup",
  },
  {
    name: "Computer Ticketing Sysytem",
    description:
      "This is an full stack application where the user can raise a ticket for any issues with their computer. The users can provide information in the reactive forms to raise a ticket. Only authticated users can login and raise a ticket.",
    stack: ["Redux", "TypeScript", "React", "CSS", "MongoDB"],
    sourceCode: "https://github.com/tpemba100/ComputerTicketSystem",
    livePreview: "https://github.com/tpemba100/ComputerTicketSystem",
  },
  {
    name: "Netflix Clone",
    description:
      "A Front End Client View of NETFLIX app with very similar interface and experience. The Front end was developed using React, SCSS and Material UI for similar User Experience as original Netflix.",
    stack: ["React", "SCSS", "React Hooks"],
    sourceCode: "https://github.com/tpemba100/Netflix-clone",
    livePreview: "https://github.com/tpemba100/Netflix-clone",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "MongoDB",
  "Node",
  "Git",
  "CI/CD",
  "Jest",
  "Java",
  "UI/UX",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "tpemba.96@gmail.com",
};

export { header, about, projects, skills, contact };
