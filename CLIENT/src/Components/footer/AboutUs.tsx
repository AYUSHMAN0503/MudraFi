import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  //team members
  {
    id: 1,
    name: "Ayushman Mohanty",
    role: "Team Leader, Full-Stack Developer and DevOps",
    photo: "/images/ayushman-mohanty.jpg",
    instagram: "https://www.instagram.com/sincerely_ayushman/",
    twitter: "https://twitter.com/johndoe",
    github: "https://github.com/AYUSHMAN0503",
    bio: "Ayushman is a dynamic team leader, full-stack developer, and DevOps enthusiast. His visionary insights and leadership skills bring every project to life. He's a passionate football fan, rooting for Barcelona, and enjoys spy thriller movies. In addition to his technical prowess, Ayushman is known for his boundless energy that inspires his team towards excellence. Currently in his Sophomore year, his future goal is to channel this energy and passion into a successful startup.",
  },
  {
    id: 2,
    name: "Aayushya Kumar Chaudhary",
    role: "Full-stack & Research",
    photo: "/images/aayushya-kr.jpg",
    github: "https://github.com/AayushyaKumar",
    instagram: "https://www.instagram.com/aayushya519/",
    twitter: "https://twitter.com/johndoe",
    bio: "Meet Aayushya, a dedicated full stack engineer with a relentless enthusiasm for code and original ideas. When not buried in lines of code, he can be seen playing cricket, with the same tenacity that fuels his technological endeavors.He is also dedicated to empowering others through information sharing and aspires to create a company that combines innovation with the goal of empowering people.",
  },
  {
    id: 3,
    name: "Gaurav Kumar",
    role: "AI&ML Developer",
    about: "He is an excellent team player.",
    photo: "/images/Gaurav-K.jpg",
    github: "https://github.com/ARtoRiAs10",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/johndoe",
    bio: "Gaurav Kumar is a skilled professional in machine learning and artificial intelligence, with a knack for training complex models. His enthusiasm, focus, and organization make him an asset to any team. In addition to his technical skills, Gaurav is an excellent team player who brings a positive energy to every project. His dedication to continuous learning and passion for his work are truly inspiring. He's always ready to take on new challenges and is constantly pushing the boundaries of what's possible in AI.",
  },
  {
    id: 4,
    name: "Piyush Kumar Mishra",
    role: "Frontend Developer",
    photo: "/images/piyush-mishra.jpg",
    github: "https://github.com/PiyushXmishra",
    instagram: "https://www.instagram.com/piy_uxh/",
    twitter: "https://twitter.com/johndoe",
    bio: "Piyush is a sophomore who has experience in developing user-friendly and responsive web applications. He is passionate about creating visually appealing and intuitive user interfaces that provide a seamless user experience. Piyush is a quick learner and is always up-to-date with the latest web development technologies, and he is always looking for new ways to improve his skills and knowledge.In his free time, Piyush enjoys playing cricket and watching movies.",
  },

  {
    id: 5,
    name: "Yash Bansal",
    role: "Blockchain Developer",
    photo: "/images/yash-bansal.jpg",
    github: "https://github.com/YashXBansal",
    instagram: "https://www.instagram.com/__.yashbansal_",
    twitter: "https://twitter.com/johndoe",
    bio: "Introducing Yash Bansal, an adept Web3 explorer, excelling in crafting intricate smart contracts. His approachable nature facilitates harmonious teamwork, complementing his adaptability to dynamic challenges. Yash derives pleasure from aiding colleagues, embodying collaboration in the ever-evolving tech realm. Beyond this, he revels in music, travel, riding, and exploring, reflecting a well-rounded persona.",
  },
  {
    id: 6,
    name: "Avinash Kumar Jha",
    role: "Backend and Database Developer",
    photo: "/images/avinash-jha.jpg",
    github: "https://github.com/Avinash-sord12k",
    instagram: "https://www.instagram.com//",
    twitter: "https://twitter.com/johndoe",
    bio: "A passionate web developer skilled in frontend and backend technologies, with a love for crafting engaging user experiences. Currently a sophomore, he`s combining academic excellence with hands-on coding expertise. Always exploring new web technologies to build innovative and user-friendly digital solutions.",
  },
  {
    id: 7,
    name: "Mishi Jain",
    role: "Python and ML Developer",
    about:
      "Besides coding, she finds solace in writing, watching random youtube videos and surfing wikipedia at 3 am. She is a refined poet & often performs her poetry on various platforms.",
    photo: "/images/mishi-jain.jpg",
    github: "https://github.com/maybemishi?tab=repositories",
    instagram: "https://instagram.com/_ink__slinger__?igshid=NjIwNzIyMDk2Mg==",
    twitter: "https://twitter.com/johndoe",
    bio: "Mishi Jain is a skilled Python & ML dev with passion for innovation. With a strong foundation in Python & a deep understanding of ML algo, Mishi brings a unique blend of technical expertise & creativity to every project. Her commitment to pushing the boundaries of technology, coupled with problem-solving prowess, makes her an invaluable asset. Attention to detail, teamwork and her eagerness to explore and learn about new things are some of her strengths which add value to team.",
  },
  {
    id: 8,
    name: "Nitin Rana",
    role: "Frontend Developer",
    photo: "/images/nitin.jpg",
    github: "https://github.com/NitinRana01125532553",
    instagram: "https://www.instagram.com//",
    twitter: "https://twitter.com/johndoe",
    bio: "Nitin is a committed full stack developer with a notable focus on front-end development, particularly with React. His coding journey is characterized by a profound fascination with crafting visually captivating and user-centric web interfaces. He takes pleasure in converting intricate designs into practical, responsive, and user-friendly applications that captivate user engagement.",
  },
  {
    id: 9,
    name: "Divyanshu",
    role: "WEB3.0 Developer",
    photo: "/images/div.jpg",
    github: "https://github.com/Divyanshu-aka",
    instagram: "https://www.instagram.com/divyanshu_836/",
    twitter: "https://twitter.com/johndoe",
    bio: 'Divyanshu is a prominent web3 developer, shaping the decentralized landscape with his skills. An avid anime fan, he`s particularly captivated by "Death Note", With his keyboard as his tool and blockchain as his canvas, Divyanshu combines innovation and imagination, embodying a modern-day techno-sorcerer.',
  },
  {
    id: 10,
    name: "Nikita",
    role: "WEB3.0 Developer",
    photo: "/images/Nikita.jpg",
    github: "https://github.com/Nikitakarwasra",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/johndoe",
    bio: "Meet Nikita, a blockchain developer drawn to cutting-edge tech, delving into smart contracts and decentralized apps. With a computer science background, she is dedicated to blockchain advancement, while also enjoying music and exploring new cultures through travel. Nikita`s dual commitment to growth, both professionally and personally, shines in her technical skills and adventurous spirit. She embodies a promising blockchain enthusiast on an exciting research and development journey.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Our Team -- Web3 Sailors
      </h1>
      <p className="text-center text-xl text-green-500 mt-2">
        The minds behind this incredible project!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
