import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import ecommerce from "../assets/ecommerce.jpg";
import task from "../assets/task.jpg";
import portofolio from "../assets/portofolio.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Website Perusahaan",
      description: "Menampilkan hasil foto-foto pekerjaan yang telah selesai, dilengkapi fitur CRUD pada gallery website.",
      image: ecommerce,
      tags: ["PHP", "MySQL", "JavaScript", "TailwindCSS", "Flowbite"],
      github: "https://github.com/thanosyy11/perusahaan.git",
    },
    {
      title: "Website Portfolio",
      description: "Branding diri dengan tampilan modern dan interaktif.",
      image: task,
      tags: ["Vite+React", "Framer Motion", "TailwindCSS", "FontAwesome", "React-Typing"],
      github: "#",
    },
    {
      title: "Segmentasi Ukuran Gambar AI",
      description: "Menentukan virus TBC dengan kecerdasan buatan tanpa memotong bakteri atau virus penting dalam gambar.",
      image: portofolio,
      tags: ["Python", "NumPy", "Scikit", "OpenCV"],
      github: "#",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h2 className="font-amaranth text-4xl text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="font-amaranth text-xl text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="font-sofia text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-sofia"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
