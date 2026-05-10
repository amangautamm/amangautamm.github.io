import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/devsaman/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — devsaman
              </a>
            </p>
            <p>
              <a
                href="https://t.me/lege9d"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Telegram — @lege9d
              </a>
            </p>
            <p>
              <a
                href="mailto:aman@amanblaze.in"
                data-cursor="disable"
              >
                Email — aman@amanblaze.in
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Master of Arts (M.A.), Guru Jambheshwar University, Moradabad —
              2025–Present
            </p>
            <p>
              Bachelor of Arts (B.A.), Mahatma Jyotiba Phule Rohilkhand
              University, Bareilly — 2022–2025
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/amangautamm"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/devsaman/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Realaman78"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              X (Twitter) <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/a.g4y"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aman Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 | Uttar Pradesh, India
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
