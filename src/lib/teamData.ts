export interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
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
  email?: string;
}

export const leaders: Leader[] = [
  {
    name: "Aditya Ghosh",
    role: "CEO & Founder",
    badge: "Founder",
    image: "/images/team/Aditya Ghosh.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-ghosh-9147b638a/",
    instagram: "https://www.instagram.com/aditya_ghosh_2006/",
  },
  {
    name: "Anirban Chowdhury",
    role: "Co-Founder & Chief Operating Officer",
    badge: "Co-Founder",
    image: "/images/team/Anirban Chowdhury.jpg",
    linkedin: "https://www.linkedin.com/in/anirban-chowdhury-968950354",
    instagram: "https://www.instagram.com/biriyani.with.aloo",
  },
  {
    name: "Rishav Mani",
    role: "Co-Founder & Chief Technical Officer",
    badge: "Co-Founder",
    image: "/images/team/Rishav Mani.jpg",
    linkedin: "https://www.linkedin.com/in/rishav-mani-76a364316/",
    instagram: "https://www.instagram.com/rishav.py/",
    email: "rishurishav2455@gmail.com",
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
  {
    name: "Ahsan Dogar",
    role: "Front end web developer",
    image: "/images/team/Ahsan Dogar.jpg",
    email: "dogarahsan160@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahsan-dogar?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    portfolio: "https://github.com/Ahsan-Dogar",
  },
];

export const techTeam: TeamMember[] = [
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

export const marketingTeam: TeamMember[] = [
  {
    name: "Swapnaneel Dutta",
    role: "Marketing Director",
    image: "/images/team/Swapnaneel Dutta.jpg",
    email: "s.dutta2k5@gmail.com",
    linkedin: "https://www.linkedin.com/in/swapnaneel-dutta/",
    portfolio: "https://sd2k5portfolio.vercel.app/",
  },
  {
    name: "Aditi Bhaskar",
    role: "Creative Director",
    image: "/images/team/Aditi Bhaskar.jpg",
    email: "bhaskarmisti6@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditi-bhaskar-59289237a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Rik Haldar",
    role: "Marketing Expert",
    image: "/images/team/Rik Haldar.jpg",
    email: "anannabhuiya36@gmail.com",
    linkedin: "https://www.linkedin.com/in/rik-haldar-b99b24242?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    instagram: "https://www.instagram.com/nebulanectar_rik/",
  },
];
