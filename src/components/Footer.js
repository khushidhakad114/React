import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const RestaurantFooter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow"></div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-auto">
        <aside>
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-black-500 h-12 w-12"
          />
          <p>
            Restaurant
            <br />
            Fine dining with a local twist
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Reservations</a>
          <a className="link link-hover">Order Online</a>
          <a className="link link-hover">Gift Cards</a>
        </nav>

        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <p className="link link-hover">123 Restaurant, Flavor Town</p>
          <p className="link link-hover">Phone: (123) 456-7890</p>
          <p className="link link-hover">Email: info@restaurant.com</p>
        </nav>

        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-6 w-6 text-blue-600"
              />
            </a>
            <a
              href="https://twitter.com"
              className="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-6 w-6 text-blue-400"
              />
            </a>
            <a
              href="https://instagram.com"
              className="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 w-6 text-pink-500"
              />
            </a>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default RestaurantFooter;
