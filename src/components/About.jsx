import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import foto from '../assets/foto.png'

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/doc/CV.WEB DEV+IT+AI.pdf');
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV.WEB DEV+IT+AI.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.5
      }
    }
  };

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
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="font-amaranth text-4xl text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto md:mx-0 relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 animate-pulse"></div>
              <img 
                src={foto} 
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-indigo-600 p-1"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="font-amaranth text-2xl text-gray-900">
              {[..."Web Developer"].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: "easeIn"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h3>
            <p className="font-sofia text-gray-600 leading-relaxed">
              {[..."My name is Danang Rizal Prakoso. I have long been passionate about IT and technology, learning self-taught from various sources such as YouTube, books, and others."].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.05 + 0.5, 
                    ease: "easeIn"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
            <p className="font-sofia text-gray-600 leading-relaxed">
              {[..."I am a web developer with expertise in modern technologies, creating functional and aesthetically pleasing websites through clean code and intuitive design."].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.05 + 2.5, 
                    ease: "easeIn"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
            <p className="font-sofia text-gray-600 leading-relaxed">
              {[..."My journey began with a curiosity about how the internet works and has evolved into a passion for building impactful digital experiences."].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: index * 0.05 + 4.5, 
                    ease: "easeIn"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
            <motion.div
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-indigo-600 text-white font-sofia px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-indigo-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <FontAwesomeIcon 
                  icon={isDownloading ? faSpinner : faDownload} 
                  className={isDownloading ? "animate-spin" : ""}
                />
                {isDownloading ? "Downloading..." : "Download CV"}
              </button>

              {/* Download Notification */}
              <AnimatePresence>
                {showNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                    role="alert"
                  >
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div className="ps-4 text-sm font-normal">
                      CV downloaded successfully!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}