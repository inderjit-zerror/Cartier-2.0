"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
    const [open, setOpen] = useState({
    care: false,
    company: false,
    legal: false,
  });

  


  return (
    <footer className="FooterMainCont w-full bg-white  pt-[100px] pb-16 z-[200]">
      {/* Newsletter */}
      <div className="w-full flex flex-col items-center max-w-[900px] m-auto">
        <h3 className="text-lg tracking-wide mb-4">
          SUBSCRIBE TO OUR NEWSLETTER
        </h3>

        <div className="flex w-[90%] md:w-1/2 border-b border-black pb-1 mt-[20px]">
          <input
            type="text"
            placeholder="Email"
            className="flex-1 outline-none"
          />
          <button className="bg-black text-white px-5 py-2">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links Container */}
      <div className="w-full mt-[80px]  px-5 md:px-20 max-w-[1300px] m-auto border-t border-[#20202044]">

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between w-full mt-[50px]">

          {/* CUSTOMER CARE */}
          <div className="flex flex-col gap-3 text-[14px]">
            <h4 className="font-semibold ">CUSTOMER CARE</h4>
            <a>CONTACT US</a>
            <a>CALL NOW: 800 227 8437</a>
            <a>FAQ</a>
            <a>TRACK YOUR ORDER</a>
            <a>BOOK AN APPOINTMENT</a>
            <a>ACCESSIBILITY</a>
            <a>SITEMAP</a>
          </div>

          {/* OUR COMPANY */}
          <div className="flex flex-col gap-3 text-[14px]">
            <h4 className="font-semibold">OUR COMPANY</h4>
            <a>FIND A BOUTIQUE ↗</a>
            <a>CAREERS ↗</a>
            <a>CARTIER CORPORATE RESPONSIBILITY</a>
            <a>CREDITS</a>
          </div>

          {/* LEGAL AREA */}
          <div className="flex flex-col gap-3 text-[14px]">
            <h4 className="font-semibold">LEGAL AREA</h4>
            <a>TERMS OF USE</a>
            <a>PRIVACY POLICY</a>
            <a>CONDITIONS OF SALE</a>
            <a>ACCESSIBILITY STATEMENT</a>
            <a>CALIFORNIA PRIVACY RIGHTS</a>
            <a>HUMAN RIGHTS STATEMENT ↗</a>
            <a>DO NOT SELL MY INFORMATION</a>
          </div>

          {/* FOLLOW US */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">FOLLOW US</h4>
            <div className="flex gap-5 text-xl">
              <FaInstagram />
              <FaFacebookF />
              <RxCross2 />
              <FaYoutube />
              <FaPinterestP />
            </div>
          </div>
        </div>

        {/* MOBILE Accordion */}
        <div className="md:hidden flex flex-col gap-6 mt-[40px]">

          {/* Block Template */}
          {[
            { key: "care", title: "CUSTOMER CARE", items: ["CONTACT US", "CALL NOW: 800 227 8437", "FAQ", "TRACK YOUR ORDER", "BOOK AN APPOINTMENT", "ACCESSIBILITY", "SITEMAP"] },
            { key: "company", title: "OUR COMPANY", items: ["FIND A BOUTIQUE ↗", "CAREERS ↗", "CARTIER CORPORATE RESPONSIBILITY", "CREDITS"] },
            { key: "legal", title: "LEGAL AREA", items: ["TERMS OF USE", "PRIVACY POLICY", "CONDITIONS OF SALE", "ACCESSIBILITY STATEMENT", "CALIFORNIA PRIVACY RIGHTS", "HUMAN RIGHTS STATEMENT ↗", "DO NOT SELL MY INFORMATION"] },
          ].map((section) => (
            <div key={section.key}>
              <button
                onClick={() =>
                  setOpen({ ...open, [section.key]: !open[section.key] })
                }
                className="w-full flex justify-between items-center text-left font-semibold"
              >
                {section.title}
                <span>{open[section.key] ? "▲" : "▼"}</span>
              </button>

              {open[section.key] && (
                <div className="flex flex-col gap-3 mt-3 pl-2">
                  {section.items.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Follow Us */}
          <div className="flex flex-col items-center pt-4">
            <h4 className="font-semibold mb-3">FOLLOW US</h4>
            <div className="flex gap-6 text-2xl">
              <FaInstagram />
              <FaFacebookF />
              <RxCross2 />
              <FaYoutube />
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logos -- replace with your images */}
      <div className="flex max-md:flex-col items-center mt-14 gap-6 opacity-80 w-full justify-center items-center">
        <div className="text-xs tracking-widest">Cartier WOMEN'S INITIATIVE</div>
        <div className="text-xs tracking-widest">PHILANTHROPY Cartier</div>
      </div>
    </footer>
  );
}

export default Footer
