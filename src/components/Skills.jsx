import { 
  faReact, 
  faNodeJs, 
  faPhp, 
  faGit,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faCode,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    icon: faReact,
    technologies: ["React", "Tailwind CSS", "Flowbite", "Framer Motion"],
    color: "text-blue-500",
    bgColor: "bg-blue-500",
    percentage: 80,
  },
  {
    category: "Backend",
    icon: faCode,
    technologies: ["Node.js", "PHP"],
    color: "text-green-500",
    bgColor: "bg-green-500",
    percentage: 75,
  },
  {
    category: "Database",
    icon: faDatabase,
    technologies: ["MySQL", "PostgreSQL"],
    color: "text-purple-500",
    bgColor: "bg-purple-500",
    percentage: 70,
  },
  {
    category: "DeepLearning", 
    icon: faCode, 
    technologies: ["Python", "Numpy", "Scikit", "openCV"], 
    color: "text-gray-700",
    bgColor: "bg-gray-700",
    percentage: 65,
  },
];

const techIcons = {
  "React": faReact,
  "Node.js": faNodeJs,
  "PHP": faPhp,
  "Git": faGit,
  "Tailwind CSS": faCss3Alt,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: percentage => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    })
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-amaranth text-4xl text-gray-900 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`${skill.color} text-3xl`}
                >
                  <FontAwesomeIcon icon={skill.icon} />
                </motion.div>
                <h3 className="font-amaranth text-xl font-semibold">{skill.category}</h3>
              </div>
              
              <div className="mb-6 flex flex-wrap gap-3">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {techIcons[tech] && (
                      <FontAwesomeIcon 
                        icon={techIcons[tech]} 
                        className={skill.color}
                      />
                    )}
                    <span className="font-sofia text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${skill.bgColor}`}
                    custom={skill.percentage}
                    variants={progressVariants}
                  />
                </div>
                <motion.p 
                  className={`text-right text-sm font-medium mt-2 ${skill.color}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  {skill.percentage}%
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}