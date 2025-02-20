import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-amaranth text-2xl mb-4">Portfolio</h3>
            <p className="font-sofia text-gray-400">
              Building the future, one pixel at a time.
            </p>
          </div>
          <div>
            <h4 className="font-amaranth text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="font-sofia text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="font-sofia text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="font-sofia text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="font-sofia text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-amaranth text-xl mb-4">Contact</h4>
            <p className="font-sofia text-gray-400 mb-2">Gmail: danangrizalprakoso@gmail.com</p>
            <p className="font-sofia text-gray-400">Location: Semarang, Jawa Tengah</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-sofia text-gray-400">
            © {new Date().getFullYear()} Danang Rizal Prakoso. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}