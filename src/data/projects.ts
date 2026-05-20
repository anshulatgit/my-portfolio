export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  category: "web" | "ai" | "research" | "mobile" | "tool";
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export const projects: Project[] = [
  {
    id: "ai-career-advisor",
    title: "AI Career Advisor",
    description: "An AI-powered platform that helps students discover the right career path based on their interests, skills, and goals.",
    longDescription: "Built using Next.js and OpenAI API, this platform provides personalized career roadmaps, exam guidance, and skill development paths for students after 10th and 12th grade.",
    tech: ["Next.js", "OpenAI API", "PostgreSQL", "Tailwind CSS", "Prisma"],
    github: "https://github.com/yourhandle/ai-career-advisor",
    live: "https://aicareer.demo",
    featured: true,
    category: "ai",
    status: "completed",
    year: 2024,
  },
  {
    id: "optical-fiber-analysis",
    title: "Optical Fiber Signal Analysis",
    description: "Research project analyzing signal degradation patterns in optical fiber networks using deep learning.",
    tech: ["Python", "PyTorch", "NumPy", "Matplotlib", "Jupyter"],
    github: "https://github.com/yourhandle/optical-analysis",
    featured: true,
    category: "research",
    status: "completed",
    year: 2024,
  },
  {
    id: "student-community",
    title: "Student Community Platform",
    description: "A full-stack community platform for students to share resources, ask questions, and collaborate.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/yourhandle/student-community",
    live: "https://studenthub.demo",
    featured: true,
    category: "web",
    status: "in-progress",
    year: 2024,
  },
];