import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 className="font-amaranth text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4">
              Welcome to
              <span className="text-indigo-600 block mt-2 typing-effect">My Portfolio</span>
            </h1>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            <p className="font-shadows text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {[..."Creative developer crafting beautiful and functional web experiences"].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeIn"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 md:space-y-0 md:space-x-4"
          >
            <motion.button
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-sofia text-lg overflow-hidden bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 }
              }}
            >
              <span className="relative text-white z-10">Lihat Portfolio</span>
              <motion.div
                className="absolute inset-0 bg-indigo-500"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: { duration: 1, ease: "easeInOut" }
                }}
              />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center px-8 py-3 font-sofia text-lg border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-300"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 }
              }}
            >
              Hubungi Saya
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}