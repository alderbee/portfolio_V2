import portfolioImg from "../assets/projects/portfolio.png";
import echochatImg from "../assets/projects/echochat.png";
import taskhubImg from "../assets/projects/taskhub.png";
import safestoreImg from "../assets/projects/safestore.png";

export const projects = [
  {
    name: "Portfolio(React)",
    description:
      "Constructed with React, Tailwind CSS, and a mobile-first approach. Configured Cloudflare and deployed with Git Actions to Netlify.",
    tech: ["react", "tailwind", "material", "netlify"],
    link: "https://amitsv.com/",
    image: portfolioImg,
  },
  {
    name: "EchoChat",
    description:
      "EchoChat is a lightweight social room chat system. Users can enter a username, create a room, and start chatting in real time implmented using websocket. It's built using React, ASP.NET Core 8, and SignalR, and is perfect for learning or building on top of real-time technologies.",
    tech: ["dotnet", "react"],
    link: "https://github.com/alderbee/EchoChat",
    image: echochatImg,
  },
  {
    name: "TaskHub",
    description:
      "Task Hub is a full-stack web application designed to help users efficiently manage personal tasks: follows the CQRS pattern with MediatR and Clean Architecture principles for better separation of concerns and maintainability.",
    tech: ["jwt", "oauth"],
    link: "https://github.com/alderbee/task-hub",
    image: taskhubImg,
  },
  {
    name: "SafeStore",
    description:
      "Secure file upload API using AWS EC2, S3 for storage, SMTP for validation, and IAM access control.",
    tech: ["aws", "python"],
    image: safestoreImg,
  },
];
