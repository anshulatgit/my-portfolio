export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  streams: string[];
  popularJobs: string[];
  topColleges: string[];
  exams: string[];
  salaryRange: string;
  demandLevel: "high" | "medium" | "growing";
}

export const careerPathsAfter12th: CareerPath[] = [
  {
    id: "engineering",
    title: "Engineering & Technology",
    description: "Build the future with code, circuits, and innovation. Engineering offers the widest range of specializations.",
    icon: "⚙️",
    color: "blue",
    streams: ["PCM (Physics, Chemistry, Maths)"],
    popularJobs: ["Software Engineer", "Data Scientist", "AI Engineer", "Mechanical Engineer"],
    topColleges: ["IITs", "NITs", "BITS Pilani", "VIT", "SRM"],
    exams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE"],
    salaryRange: "₹3L – ₹40L+ per year",
    demandLevel: "high",
  },
  {
    id: "medical",
    title: "Medical & Healthcare",
    description: "A noble path to heal and help humanity. High demand, high responsibility, deeply rewarding.",
    icon: "🩺",
    color: "green",
    streams: ["PCB (Physics, Chemistry, Biology)"],
    popularJobs: ["MBBS Doctor", "Surgeon", "Dentist", "Pharmacist", "Medical Researcher"],
    topColleges: ["AIIMS", "CMC Vellore", "AFMC Pune", "JIPMER"],
    exams: ["NEET UG", "AIIMS", "JIPMER"],
    salaryRange: "₹5L – ₹30L+ per year",
    demandLevel: "high",
  },
  {
    id: "commerce",
    title: "Commerce & Business",
    description: "Drive economies, build companies, and master the language of finance and management.",
    icon: "💼",
    color: "amber",
    streams: ["Commerce (Maths or without Maths)"],
    popularJobs: ["CA", "MBA", "Financial Analyst", "Marketing Manager"],
    topColleges: ["SRCC Delhi", "St. Xavier's", "Christ University", "Symbiosis"],
    exams: ["CA Foundation", "DU Entrance", "IPU CET", "CUET"],
    salaryRange: "₹3L – ₹25L+ per year",
    demandLevel: "high",
  },
  {
    id: "design-arts",
    title: "Design & Creative Arts",
    description: "Where creativity meets technology. Design careers are booming in the digital age.",
    icon: "🎨",
    color: "purple",
    streams: ["Any stream with creative aptitude"],
    popularJobs: ["UI/UX Designer", "Product Designer", "Graphic Designer", "Architect"],
    topColleges: ["NID Ahmedabad", "IIT (Design)", "NIFT", "Srishti Institute"],
    exams: ["UCEED", "NID Entrance", "NIFT Entrance", "CEED"],
    salaryRange: "₹2.5L – ₹20L+ per year",
    demandLevel: "growing",
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    description: "Uphold justice, shape policy, and represent citizens. Law is a respected and impactful career.",
    icon: "⚖️",
    color: "red",
    streams: ["Any stream"],
    popularJobs: ["Lawyer", "Judge", "Corporate Counsel", "Public Prosecutor"],
    topColleges: ["NLSIU Bangalore", "NALSAR", "NLU Delhi", "Symbiosis Law"],
    exams: ["CLAT", "AILET", "LSAT India"],
    salaryRange: "₹3L – ₹30L+ per year",
    demandLevel: "medium",
  },
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    description: "The hottest career of the decade. Build intelligent systems that transform industries.",
    icon: "🤖",
    color: "cyan",
    streams: ["PCM or Commerce with Maths"],
    popularJobs: ["AI Engineer", "Data Scientist", "ML Engineer", "NLP Researcher"],
    topColleges: ["IITs", "IIITs", "BITS", "VIT", "Manipal"],
    exams: ["JEE", "CUET", "Private university entrances"],
    salaryRange: "₹6L – ₹60L+ per year",
    demandLevel: "high",
  },
];

export const roadmapAfter10th = [
  {
    id: "science",
    title: "Science Stream",
    subtitle: "For future engineers, doctors, and researchers",
    icon: "🔬",
    subjects: ["Physics", "Chemistry", "Maths / Biology"],
    paths: ["Engineering (JEE)", "Medical (NEET)", "Research", "Data Science", "Defence"],
    bestFor: "Students strong in logical thinking and problem-solving",
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    subtitle: "For future entrepreneurs and finance professionals",
    icon: "📊",
    subjects: ["Accounts", "Economics", "Business Studies", "Maths (optional)"],
    paths: ["CA/CMA", "MBA", "Banking", "Law", "Marketing"],
    bestFor: "Students interested in business, money, and markets",
  },
  {
    id: "arts",
    title: "Arts & Humanities",
    subtitle: "For future thinkers, creators, and leaders",
    icon: "🎭",
    subjects: ["History", "Political Science", "Sociology", "Psychology"],
    paths: ["UPSC/Civil Services", "Journalism", "Law", "Education", "Design"],
    bestFor: "Students passionate about society, culture, and creative expression",
  },
  {
    id: "vocational",
    title: "Vocational / Skill Courses",
    subtitle: "Direct skill-to-job pathways",
    icon: "🛠️",
    subjects: ["ITI Trades", "Polytechnic Diploma", "Animation", "Healthcare"],
    paths: ["Skilled Technician", "Entrepreneur", "Startup Founder", "Freelancer"],
    bestFor: "Students who want practical skills and faster entry into the job market",
  },
];
