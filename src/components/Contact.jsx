import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faSpinner, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [activePopover, setActivePopover] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/thanosyy11',
      hoverColor: 'hover:text-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/danang-prakoso-14a8a1327/',
      hoverColor: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: faWhatsapp,
      url: 'https://wa.me/628156798412',
      hoverColor: 'hover:text-green-600'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/danangrizalprakoso',
      hoverColor: 'hover:text-pink-600'
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState('success');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_z75ida9', // Replace with your EmailJS service ID
        'template_0hziw5a', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'danangrizalprakoso@gmail.com',
        },
        'w77DSeL_KH_FaFCb7' // Replace with your EmailJS public key
      );

      setNotificationType('success');
      setShowNotification(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      
    } catch (error) {
      setNotificationType('error');
      setShowNotification(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-amaranth text-4xl text-gray-900 mb-4"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-amaranth text-2xl text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-indigo-600" />
                <span className="font-sofia text-gray-600">danangrizalprakoso@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPhone} className="text-xl text-indigo-600" />
                <span className="font-sofia text-gray-600">+62 8156 7985 412</span>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-xl text-indigo-600" />
                <span className="font-sofia text-gray-600">Semarang, Jawa Tengah</span>
              </div>
            </div>

            {/* Social Media Links with Popovers */}
            <div className="pt-6">
              <h4 className="font-amaranth text-xl text-gray-900 mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <div key={index} className="relative">
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-600 transition-colors duration-300 ${social.hoverColor}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onMouseEnter={() => setActivePopover(index)}
                      onMouseLeave={() => setActivePopover(null)}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                      {activePopover === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap"
                        >
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                          <span className="font-sofia text-sm text-gray-700">{social.name}</span>
                        </motion.div>
                      )}
                    </motion.a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name..."
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sofia`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email..."
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sofia`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message:..."
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600 font-sofia`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-600 text-white font-sofia px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Notification Toast */}
            <AnimatePresence>
              {showNotification && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="fixed bottom-4 right-4 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                  role="alert"
                >
                  {notificationType === 'success' ? (
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                  )}
                  <div className="ps-4 text-sm font-normal">
                    {notificationType === 'success' 
                      ? 'Message sent successfully!'
                      : 'Failed to send message. Please try again.'}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}