import React from 'react'

// styles
import './Footer.scss'

function Footer({ theme }) {
  return (
    <React.Fragment>
      <footer
        className="footer"
        style={
          theme
            ? { backgroundColor: '#D5966C' }
            : { backgroundColor: '#151515' }
        }
      >
        <img
          src={theme ? 'assets/logo-dark.svg' : 'assets/logo-light.svg'}
          alt="Modern Art Gallery"
          className="footer__logo"
        />
        <p
          className="footer__desc"
          style={theme ? { color: '#151515' } : { color: '#FFF' }}
        >
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul
          className="footer__media-container"
          style={theme ? { filter: 'invert(1)' } : {}}
        >
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
