import { mobile, backend, creator, web, shopify, reactjs, javascript, flutter, java, python, C } from "../assets";

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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "flutter Developer",
        icon: mobile,
    },

    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [];

const experiences = [
    {
        title: "Exp1Title",
        icon: reactjs,
        iconBg: "#383E56",
        date: " 2025 ",
    },
    {
        title: "Exp2Title",
        icon: javascript,
        iconBg: "#E6DEDD",
        date: "2025 ",
    },

    {
        title: "Exp3Title",
        icon: flutter,
        iconBg: "#E6DEDD",
        date: "2025 ",

    },

    {
        title: "Exp6Title",
        icon: java,
        iconBg: "#E6DEDD",
        date: "2024",

    },

    {
        title: "Exp4Title",
        icon: python,
        iconBg: "#E6DEDD",
        date: "2024",
    },
    {
        title: "Exp5Title",
        icon: C, // Using python as placeholder since C++ asset is missing
        iconBg: "#E6DEDD",
        date: "2023",
    },

];

const projects = [

    {
        name: "FlutterAppTitle",
        description: "FlutterApp",
        tags: [
            { name: "flutter", color: "blue-text-gradient" },
            { name: "dart", color: "green-text-gradient" },
            { name: "firebase", color: "pink-text-gradient" },
        ],
        image: flutter,
        source_code_link: "https://github.com/Islam2004naim/Chatting-Application",
    },
    {
        name: "JavaSystemTitle",
        description: "JavaSystem",
        tags: [
            { name: "java", color: "blue-text-gradient" },
            { name: "springboot", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: java,
        source_code_link: "https://github.com/Islam2004naim/Hospital-Management-System",
    },
];

export { services, technologies, experiences, projects };
