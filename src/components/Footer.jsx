import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      <li className="roboto">
        <NextLink href="#" title={"Home"} />
      </li>
      <li className="roboto">
        <NextLink href="/about-us" title={"About Us"} />
      </li>
      <li className="roboto">
        <NextLink href="/projects" title={"Projects"} />
      </li>
      <li className="roboto">
        <NextLink href="#contact" title={"Contact Us"} />
      </li>
    </ul>
  </div>
);

const ORIGINAL_MAP_EMBED_LINK =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.3634335658116!2d73.0428455!3d21.610757300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023fbfc13cb0f%3A0x4ed6f0e10636e519!2sKhush%20Construction!5e0!3m2!1sen!2sin!4v1763538795500!5m2!1sen!2sin';
const MAP_EMBED_LINK =
  'https://www.google.com/maps/place/Khush+Construction/@21.6107573,73.0428455,17z/data=!3m1!4b1!4m6!3m5!1s0x3be023fbfc13cb0f:0x4ed6f0e10636e519!8m2!3d21.6107573!4d73.0428455!16s%2Fg%2F11vzgmbv6w?hl=en&entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D';
const Footer = () => {
  const year = "2012"

  return (
    <footer className="border-top footer-bg overflow-hidden" id="contact">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xxl-start w-100">
                <Image
                  src="/img/khush-logo-footer.jpg"
                  alt="Logo"
                  width={200}
                  height={80}
                  unoptimized={true} // Prevents Next.js image optimization
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 roboto">
                Khush Construction is a real estate builder and construction company located in the Ankleshwar GIDC area
                in Gujarat, India
              </p>
            </div>

            {/* Social Media Links */}
            {/* <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div> */}
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Quick Links" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Contact Us</h4>

              {/* Address */}
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-main" />
                <address className="ms-2 m-0 mt-1 roboto">
                  3, Plot, Yogi, 11, Yogi Estate Rd, Ankleshwar GIDC, Ankleshwar, Gujarat 393002
                </address>
              </div>

              {/* Email */}
              {/* <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href="mailto:buildify@gmail.com" className="link-body ms-2 roboto">
                  buildify@gmail.com
                </a>
              </div> */}

              {/* Phone Numbers */}
              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-main" />
                <p className="mt-1 ms-2 fs-18 d-flex flex-column roboto">
                  {/* add name here */}
                  <span className="fs-16 fw-bold">Mitesh R Shah</span> {/* Name */}
                  <a href="tel:+911234567890">+91 98241 44034</a>
                  {/* <a href="tel:+919876543210">+91 98765 43210</a> */}
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Google Map</h4>
              <iframe
                src={ORIGINAL_MAP_EMBED_LINK}
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">© {year} Khush Enterprise. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
