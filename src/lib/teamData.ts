export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  portfolio?: string;
}

export interface Leader {
  name: string;
  role: string;
  badge: string;
  image: string;
  linkedin: string;
  instagram: string;
}

export const leaders: Leader[] = [
  {
    name: "Aditya Ghosh",
    role: "CEO \u0026 Founder",
    badge: "Founder",
    image: "/images/team/Aditya Ghosh.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-ghosh-9147b638a/",
    instagram: "https://www.instagram.com/aditya_ghosh_2006/",
  },
  {
    name: "Anirban Chowdhury",
    role: "Co-Founder \u0026 Chief Operating Officer",
    badge: "Co-Founder",
    image: "/images/team/Anirban Chowdhury.jpg",
    linkedin: "https://www.linkedin.com/in/anirban-chowdhury-968950354",
    instagram: "https://www.instagram.com/biriyani.with.aloo",
  },
];

export const designTeam: TeamMember[] = [
  {
    name: "Soham Mondal",
    role: "Chief Frontend Engineer",
    image: "/images/team/Soham Mondal.jpg",
    linkedin: "https://www.linkedin.com/in/sohammondal02/",
    instagram: "https://www.instagram.com/executed_user_/",
  },
  {
    name: "Mahak Parihar",
    role: "VP Design",
    image: "/images/team/Mahak Parihar.jpg",
    linkedin: "https://www.linkedin.com/in/mahak-parihar/",
  },
  {
    name: "Soham Roy",
    role: "Lead UI/UX Designer",
    image: "/images/team/Soham Roy.jpg",
    portfolio: "https://litnitwitzsportfolio.framer.website",
  },
  {
    name: "Abhinav Chavan",
    role: "Frontend Designer",
    image: "/images/team/Abhinav Chavan.jpg",
    linkedin: "https://www.linkedin.com/in/abhinav-chavan-2502093bb/",
    instagram: "https://www.instagram.com/abhinavv_13_/",
  },
];

export const techTeam: TeamMember[] = [
  {
    name: "Aditya Ghosh",
    role: "CEO \u0026 Founder",
    image: "/images/team/Aditya Ghosh.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-ghosh-9147b638a/",
  },
  {
    name: "Anirban Chowdhury",
    role: "Co-Founder \u0026 COO",
    image: "/images/team/Anirban Chowdhury.jpg",
    linkedin: "https://www.linkedin.com/in/anirban-chowdhury-968950354",
  },
  {
    name: "Pranav Upadhyaya",
    role: "Chief AI Officer",
    image: "/images/team/Pranav Upadhyaya.jpg",
  },
  {
    name: "Vaibhav Kumar",
    role: "Chief Data Officer",
    image: "/images/team/Vaibhav Kumar.jpg",
  },
  {
    name: "Priyanshi",
    role: "VP Engineering",
    image: "/images/team/Priyanshi.jpg",
  },
  {
    name: "Sk Altab Hossen",
    role: "AI Engineer",
    image: "/images/team/Sk Altab Hossen.jpg",
    instagram: "https://www.instagram.com/skaltab.hossen03/",
  },
  {
    name: "Bandi Damini",
    role: "AI Engineer",
    image: "",
  },
];
