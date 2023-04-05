import React, { Fragment } from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <Fragment>
      <footer className={`${classes.footer} bg-primary`}>
        <div className={classes.footer_up}>
          <a
            href="#"
            className={`${classes.footer_header} text-[2rem] font-jost font-bold`}
          >
            HealthConnect
          </a>
          <div className={`${classes.footer_cols}`}>
            <ul>
              <div className={classes.footer_cols_header}>Contact us</div>
              <li>
                <a href="#">+2348125000000</a>
              </li>
              <li>
                <a href="#">healthconnect@gmail.com</a>
              </li>
              <li>
                <a href="#">182 Ijaya BLVD, Ojuta</a>
              </li>
              <li>
                <a href="#">Lagos, Nigeria</a>
              </li>
            </ul>
          </div>

          <div className={classes.footer_cols}>
            <ul>
              <div className={classes.footer_cols_header}>Services</div>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className={classes.footer_cols}>
            <ul>
              <div className={classes.footer_cols_header}>Information</div>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className={classes.footer_cols}>
            <ul>
              <li>
                <a href="#"></a>In
              </li>
              <li>
                <a href="#"></a>Tw
              </li>
              <li>
                <a href="#"></a>Fb
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footer.down}>
          ©HealthConnect 2023, All rights reserved
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
