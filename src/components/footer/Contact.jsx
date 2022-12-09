import React from "react";
import logo from "../../images/logo.svg";

const Contact = () => {
  return (
    <div className="max-w-small">
      <h3 className="mb-6"><a href="/"><img src={logo} alt="Funiro logo" /></a></h3>
      <ul className="flex flex-col gap-1.5 text-lightGray font-normal text-base">
        <li>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</li>
        <li>Sawojajar Malang, Indonesia</li>
        <li><a className="hover:text-primary" href="tel:+6289 456 3455">+6289 456 3455</a></li>
        <li><a className="hover:text-primary" href="/">www.funiro.com</a></li>
      </ul>
    </div>
  );
}

export default Contact;