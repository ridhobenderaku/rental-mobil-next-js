"use client";
import { useEffect, useRef, useState } from "react";
import { BiRefresh } from "react-icons/bi";

import { HeaderMenu } from "@/models/header";
import styles from "@/styles/contact.module.scss";
import { GenerateCaptcha, ValidCaptcha } from "@/utils/Captcha";
import CheckInView from "@/utils/CheckInView";

function Contact() {
  const captchaRef = useRef<HTMLHeadingElement | null>(null);
  const inputCaptchaRef = useRef<HTMLInputElement | null>(null);
  const [isCaptchaValid, setisCaptchaValid] = useState(false);

  const handleGenerateCaptcha = () => {
    setisCaptchaValid(false);
    GenerateCaptcha(captchaRef.current!);
  };

  const handleValidateCaptcha = () => {
    let valid = false;
    if (captchaRef.current && inputCaptchaRef.current)
      valid = ValidCaptcha(captchaRef.current!, inputCaptchaRef.current!);

    setisCaptchaValid(valid);
  };

  const handleSubmitForm = () => {};

  useEffect(() => {
    if (captchaRef.current) handleGenerateCaptcha();
  }, [captchaRef]);

  return (
    <section id="contact" className={styles["container"]}>
      <CheckInView menuName={HeaderMenu.Contact} />
      <div className={styles["contact-container"]}>
        <div className={styles["left-container"]}>
          <h1 className={styles["content-title"]}>
            Let’s <span>Work Together</span>
          </h1>
          <p className={styles["content-description"]}>
            Hubungi kami dan dapatkan pelayanan terbaik dari kami, sekarang
            juga!
          </p>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6281915427371"
          >
            Contact Us
          </a>
        </div>
        {/* <div className={styles["right-container"]}>
          <form className={styles["form-container"]}>
            <div className={styles["form-content-column"]}>
              <label className={styles["input"]}>
                Name
                <input type="text" />
              </label>
              <label className={styles["input"]}>
                Company Name
                <input type="text" />
              </label>
            </div>
            <div className={styles["form-content-column"]}>
              <label className={styles["input"]}>
                Phone
                <input type="text" />
              </label>
              <label className={styles["input"]}>
                Email
                <input type="text" />
              </label>
            </div>
            <label className={styles["input-full"]}>
              Industry
              <input type="text" />
            </label>
            <label className={styles["input-full"]}>
              Subject
              <input type="text" />
            </label>
            <label className={styles["input-message"]}>
              Message
              <textarea id="message" name="message" rows={4} />
            </label>
            <label className={styles["input-captcha"]}>
              Solve Captcha
              <div>
                <h1 ref={captchaRef} />
                <BiRefresh onClick={handleGenerateCaptcha} />
              </div>
              <input
                onChange={handleValidateCaptcha}
                ref={inputCaptchaRef}
                type="text"
              />
              {!isCaptchaValid && <p>please solve the captcha</p>}
            </label>
            <button
              className={`${styles[`btn-submit`]} `}
              type="submit"
              disabled={!isCaptchaValid}
            >
              <p>Submit message</p>
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
