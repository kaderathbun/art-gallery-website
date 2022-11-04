import React from 'react'

// styles
import './Home.scss'

function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero__img"></div>
        <h1 className="hero__title">Modern Art Gallery</h1>
        <p className="hero__desc">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <button className="hero__cta">Our Location</button>
      </header>
      <main className="main">
        <article className="main__container-grid1">
          <img
            src="/assets/mobile/image-grid-1.jpg"
            alt="art-gallery"
            className="main__img-grid1 img"
          />
          <h2 className="main__title-grid1">
            Your day <br /> at the Gallery
          </h2>
          <p className="main__desc-grid1">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </article>
        <section className="main__container-grid2">
          <img
            src="/assets/mobile/image-grid-2.jpg"
            alt="art gallery with bench for viewing"
            className="main__img-grid2 img"
          />
          <img
            src="/assets/mobile/image-grid-3.jpg"
            alt="vistors browsing art collections"
            className="main__img-grid2 img"
          />
          <article className="main__content-wrapper">
            <h2 className="main__title-grid2">Come & be inspired</h2>
            <p className="main__desc-grid2">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </article>
        </section>
      </main>
      <footer className="footer">
        <img src="/assets/logo-light.svg" alt="Modern Art Gallery" className="footer__logo" />
        <p className="footer__desc">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul className='footer__media-container'>
          <li className='footer__media-icon'>
            <a href="#">
              <img src="/assets/icon-facebook.svg" alt="facebook" />
            </a>
          </li>
          <li className='footer__media-icon'>
            <a href="#">
              <img src="/assets/icon-instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className='footer__media-icon'>
            <a href="#">
              <img src="/assets/icon-twitter.svg" alt="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Home
