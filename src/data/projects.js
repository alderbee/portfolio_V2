import {
  FaGithub,
  FaAngular,
  FaReact,
  FaAws,
  FaJava,
  FaPython,
  FaLock,
  FaKey,
} from "react-icons/fa";
import {
  SiDotnet,
  SiElasticsearch,
  SiMaterialdesign,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";

export const techIcons = {
  angular: { icon: <FaAngular className="text-red-600" />, label: "Angular" },
  react: { icon: <FaReact className="text-blue-500" />, label: "React" },
  aws: { icon: <FaAws className="text-yellow-500" />, label: "AWS" },
  dotnet: {
    icon: <SiDotnet className="text-purple-700" />,
    label: ".NET Core",
  },
  elastic: {
    icon: <SiElasticsearch className="text-orange-500" />,
    label: "Elasticsearch",
  },
  material: {
    icon: <SiMaterialdesign className="text-pink-500" />,
    label: "Material Design",
  },
  netlify: { icon: <SiNetlify className="text-green-500" />, label: "Netlify" },
  jwt: { icon: <FaLock className="text-yellow-700" />, label: "JWT" },
  oauth: { icon: <FaKey className="text-blue-700" />, label: "OAuth 2.0" },
  java: { icon: <FaJava className="text-red-700" />, label: "Java" },
  python: { icon: <FaPython className="text-green-700" />, label: "Python" },
  tailwind: {
    icon: <SiTailwindcss className="text-teal-400" />,
    label: "Tailwind CSS",
  },
};

export const projects = [
  {
    name: "Portfolio",
    description:
      "Constructed with React, Tailwind CSS, and a mobile-first approach. Configured Cloudflare and deployed with Git Actions to Netlify.",
    tech: ["react", "tailwind", "material", "netlify"],
  },
  {
    name: "Blogify",
    description:
      "Built a .NET Core Web API with Elasticsearch to index/search blog posts. Used React for the frontend.",
    tech: ["dotnet", "elastic", "react"],
  },
  {
    name: "SafeStore",
    description:
      "Secure file upload API using AWS EC2, S3 for storage, SMTP for validation, and IAM access control.",
    tech: ["aws", "python"],
  },
  {
    name: "SecureCom",
    description:
      "Implemented JWT and OAuth 2.0 for app security. Integrated Google reCAPTCHA for bot protection.",
    tech: ["jwt", "oauth", "java"],
  },
];
