import React from 'react'

// styles
import './Footer.scss'

function Footer() {
  return (
    <React.Fragment>
      <footer className="footer">
        <img
          src="/assets/logo-light.svg"
          alt="Modern Art Gallery"
          className="footer__logo"
        />
        <p className="footer__desc">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul className="footer__media-container">
          <li className="footer__media-icon">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="/assets/icon-facebook.svg" alt="facebook" />
            </a>
          </li>
          <li className="footer__media-icon">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/icon-instagram.svg" alt="instagram" />
            </a>
          </li>
          <li className="footer__media-icon">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src="/assets/icon-twitter.svg" alt="twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
  )
}

export default Footer
