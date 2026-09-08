import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-contact">
        <h2>GET IN TOUCH</h2>
        <a href="mailto:ahmed.ali@example.com">✉ ahmed.ali@example.com</a>
        <a href="tel:+201012345678">▣ +20 101 234 5678</a>
      </div>

      <a className="contact-button" href="mailto:ahmed.ali@example.com">
        CONTACT ME
      </a>

      <div className="footer-social">
        <div className="social-links">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            f
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            ♥
          </a>
        </div>
        <p>Copyright © 2026 Ahmed Ali</p>
      </div>
    </footer>
  );
};
