import * as PropTypes from "prop-types";
import FormEnquiry from "./FormEnquiry";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Smartphone, Clock, Facebook, Twitter, Linkedin, Youtube, Printer } from 'react-feather';
import yelpReviews from "../images/yelpReviews.png";

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};
export default function Footer() {
  return (
      <footer>
          <h2>
            Request a Free Consultation
          </h2>
          <h3>Please fill out the form below to receive a free consultation or call us at (512) 246-9191.</h3>
          <div>
          <section>
            <h2>Office Location</h2>
                  <a
                      className="Contact--Details--Item"
                      href={`https://www.google.com.au/maps/search/${encodeURI(
                          '8701 Shoal Creek Boulevard, Suite 401, Austin, TX 78757'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    <MapPin /> 8701 Shoal Creek Boulevard, Suite 401, Austin, TX 78757
                  </a>


                  <span>
                    <a href='tel:5122469191'>
                        <Smartphone /> (512) 246-9191
                    </a>
                    <a href='tel:5122753786'>
                    / (512) 275-3786
                    </a>
                </span>

                  <a href='tel:5122753786'>
                    <Printer /> (512) 275-3786
                  </a>

                  <Link href={`/contact-us/`}>
                    <a><Clock /> 9 a.m. to 5 p.m. Monday - Friday</a>
                  </Link>
                  <span>After Office Hours Appointments Available Upon Request</span>
                  <br /> <br />
          </section>
          <section>
                  <h2>Follow Us</h2>
                  <a href="https://www.facebook.com/Austin-Accident-Attorney-203836909648652/" target="_blank"
                     rel="noopener noreferrer">
                    <Facebook />
                  </a>
                  <a href="https://twitter.com/AustinAttorney" target="_blank"
                     rel="noopener noreferrer">
                    <Twitter />
                  </a>
                  <a href="https://www.linkedin.com/in/andrewtraub" target="_blank"
                     rel="noopener noreferrer">
                    <Linkedin />
                  </a>
                  <a href="https://www.youtube.com/c/AndrewTraub/" target="_blank"
                     rel="noopener noreferrer">
                    <Youtube />
                  </a>
          </section>
          <section>
                  <h2>Leave A Review</h2>
                  <a href="https://www.yelp.com/biz/the-traub-law-office-austin-2"
                     target="_blank"
                     rel="noopener noreferrer">
                    {/*<Image
                        src={yelpReviews}
                        width={200}
                        height={75}
                        alt="yelp review"
                        placeholder="blurred"
                        layout="fixed"
                    />*/}
                  </a>
          </section>
          </div>
          <FormEnquiry />
          <div className="copyright taCenter">
            <span>
                © Copyright {new Date().getFullYear()} All rights reserved. &nbsp;
            </span>
            <span>
              <Link href="/sitemap"><a>Sitemap</a></Link>  <Link href="/privacy-policy/"><a>Privacy Policy</a></Link>  <Link href="/terms-of-use/"><a>Terms of Use</a></Link>  <Link href="/submit-articles/"><a>Submit Articles</a></Link> <Link href="/referrals/"><a>Lawyer Referrals</a></Link>
        </span>
          </div>
          <div className="disclaimer taCenter">
      <span>While most of our clients hail from Austin, Round Rock, Cedar Park, Georgetown, and Pflugerville in Travis and Williamson Counties, we have also worked with clients in Dallas, Houston, and San Antonio. Other clients have come from Lakeway, Jollyville, Anderson Mill, Kyle, and Leander. If your accident was in Texas, we can help you.
      The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</span></div>
      </footer>
  )
}
