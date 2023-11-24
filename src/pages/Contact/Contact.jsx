import React from 'react'
import { ContactContainer } from './ContactStyled';

import fotoContacto from '/src/assets/VM1RR0aKaPa38kv6ffcs1687062516.webp';

export const Contact = () => {
  return (
    <ContactContainer>
      <div className="info">
        <h2>Contac us</h2>
        <p>Fill out the form and we'll get back to you within 24 hours.</p>
        <span></span>
        <div>
          <div>
            <i></i>
            <span>uistorofficial@gmail.com</span>
          </div>
          <div>
            <i></i>
            <span>+8801778561222</span>
          </div>
        </div>

        <figure>
          <img src={fotoContacto} alt="" />
        </figure>

        <section className="secRedes">
          <div>face</div>
          <div>inst</div>
          <div>tw</div>
          <div>in</div>
        </section>
      </div>

      <div className="form">
        <div className="formCon rounded-[10px]">
          <p className="text-lg font-medium">What are you looking for?</p>
          <form className="space-y-5 mt-[30px]" action="">
            <div>
              <p className="text-sm font-medium">Full Name</p>
              <input
                className="w-full focus:outline-none border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px]"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <input
                className="w-full focus:outline-none border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px]"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Message</p>
              <textarea
                className="w-full focus:outline-none border border-[#4D4D4D33]/20 rounded-lg bg-transparent mt-[10px] resize-none"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#026CFA] py-4 text-sm font-semibold text-white w-full rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
}
