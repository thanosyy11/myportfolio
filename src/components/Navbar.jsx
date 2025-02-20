import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="font-sofia text-gray-600 hover:text-indigo-600 transition-colors"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.a>
  )
}

function MobileNavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="block font-sofia text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-base"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.a>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.h1 
            className="font-amaranth text-2xl text-indigo-600"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6 text-indigo-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#skills">Skills</MobileNavLink>
              <MobileNavLink href="#projects">Projects</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}