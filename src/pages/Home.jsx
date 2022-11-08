import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// styles
import './Home.scss'

// components
import Footer from '../components/Footer'

function Home() {
  const [themeSecondary, setThemeSecondary] = useState(null)

  useEffect(() => {
    setThemeSecondary(false)
  }, [themeSecondary])

  return (
    <div>
      <motion.header
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero"
      >
        <div className="hero__img"></div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 1.5,
          }}
          className="hero__title"
        >
          Modern <br /> Art Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="hero__desc"
        >
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </motion.p>
        <Link to="/location" className="hero__cta">
          Our Location
        </Link>
      </motion.header>
      <main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="main"
      >
        <motion.article className="main__container-grid1">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src="/assets/mobile/image-grid-1.jpg"
            alt="art-gallery"
            className="main__img-grid1 img"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="main__title-grid1"
          >
            Your day at the Gallery
          </motion.h2>
          <p className="main__desc-grid1">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </motion.article>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="main__container-grid2"
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src="/assets/mobile/image-grid-2.jpg"
            alt="art gallery with bench for viewing"
            className="main__img-grid2 img"
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src="/assets/mobile/image-grid-3.jpg"
            alt="vistors browsing art collections"
            className="main__img-grid3 img"
          />
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="main__content-wrapper"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="main__title-grid2"
            >
              Come & be inspired
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="main__desc-grid2"
            >
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </motion.p>
          </motion.article>
        </motion.section>
      </main>
      <Footer theme={themeSecondary} />
    </div>
  )
}

export default Home
