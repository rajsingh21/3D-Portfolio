import {
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
  acharya,
  ss,
  dvp,
  ag,
  musifun,
  tdsc,
  dalle2,
  cgpt,
  threejs,
} from "../assets";

export const navLinks = [
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
    title: "Fronend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Ui/Ux Design",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stck Web Developer Intern",
    company_name: "Solar Secure Solutions",
    icon: ss,
    iconBg: "#383E56",
    date: "August 2022 - October 2022",
    points: [
      "Developed a web application with a modern, responsive user interface.",
      "Collaborated with other developers to ensure code consistency and ensure adherence to best practices.",
      "Integrated third-party services, such as payment gateways, to provide additional functionality for users.",
      "Developed a full stack web application from scratch, including back-end services, front-end interface, and database using modern technologies such as JavaScript, Node.js, and MongoDB, Bootstrap, Etc.",
    ],
  },

  {
    title: "Bachelor Of Computer Applications",
    company_name: "Acharya Institutes",
    icon: acharya,
    iconBg: "#383E56",
    date: "August 2020 - September 2023",
    points: [
      "Volunteered in tech exibitions.",
      "Took certifications in various web technologies.",
      "Worked on some excellent IOT and Web related projects.",
      "Learned relevent programming languages such as C, C++, Java, Unix and VB.Net also aquired skill in fundamentals of operating systems, theory of computation, data communication & networks and artifitial intelligence.",
    ],
  },

  {
    title: "Higher Secondary School",
    company_name: "Devasthaly Vidyapeeth, Ballia",
    icon: dvp,
    iconBg: "#383E56",
    date: "May 2018 - May 2020",
    points: [
      "Mathematics Stream.",
      "Completed with aggregates of 81%.",
      "Maintaind an excellent academic performance.",
    ],
  },

  {
    title: "Secondary School",
    company_name: "Assembly Of God Church School, Ukhra",
    icon: ag,
    iconBg: "#383E56",
    date: "March 2016 - March 2018",
    points: [
      "Science Stream.",
      "Completed with aggregates of 79%.",
      "Maintaind a good academic performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Will Be Uploaded Soon",
    name: "..",
    designation: "Proffessor",
    company: "AIGS-BCA",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
    "Will Be Uploaded Soon",
    name: "..",
    designation: "Classmate",
    company: "AIGS-BCA",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Will Be Uploaded Soon",
    name: "..",
    designation: "Project Advisor",
    company: "AIGS-BCA",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Musifun Store",
    description:
      "The E-commerce application will include modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, complete integration with Stripe so that you can cover real payments.",
    tags: [
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },

      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: musifun,
    source_code_link: "https://github.com/rajsingh21/ecommece-sanity-stripe",
    visit_site:"https://ecommece-sanity-stripe.vercel.app/",
  },
  {
    name: "3d Shirt Customizer",
    description:
      "Create unique shirt designs with brand-new 3D Shirt Customizer. The special feature of this project is that it has an AI-integrated tool powered by OpenAI Api which generates unique shirt designs and logos with respect to the prompt entered by users",
    tags: [
      {
        name: "threejs",
        color: "white-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },

      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: tdsc,
    source_code_link: "https://github.com/rajsingh21/Threejs-Shirt-Customizer",
    visit_site:"https://threejs-shirt-customizer-nine.vercel.app/",
  },
  {
    name: "AI Image Generation App",
    description:
      "AI system Powered By OpenAI Api that can create realistic images and art from a description in natural language.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },

      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: dalle2,
    source_code_link: "https://github.com/rajsingh21/Dall-E-2.O",
    visit_site:"https://dall-e-2-o.vercel.app/",
  },

  {
    name: "ChatGPT-Lite",
    description:
      "This Is A Light Version Of OpenAI's ChatGPT Specially Designed To Solve Coding Questions.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javacript",
        color: "white-text-gradient",
      },

      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: cgpt,
    source_code_link: "https://github.com/rajsingh21/My-ChatGPT-codex-",
    visit_site:"https://my-chat-gpt-codex.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
