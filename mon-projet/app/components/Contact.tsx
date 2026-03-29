import React from 'react'

export default function Contact() {
  return (
    <section className="w-screen text-center px-6 py-24 bg-gradient-to-b from-black via-red-950/15 to-slate-950" id="contact">
    <h3 className="text-lg font-bold text-red-200">Get In Touch</h3>
    <h2 className="text-4xl font-bold bg-gradient-to-r from-red-200 via-red-400 to-rose-200 bg-clip-text text-transparent">Contact Me</h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-20 mt-24">
          <div className="lg:px-24">
              <h3 className="font-bold text-xl mb-10">Talk To Me</h3>

              <div className="flex items-center justify-center flex-col gap-6">
                  <div className="w-full rounded-2xl bg-gradient-to-br from-red-800/20 via-slate-900/70 to-rose-800/15 border border-red-300/20 p-8 shadow-[0_25px_60px_-25px_rgba(239,68,68,0.9)]">
                      <i className="fas fa-envelope text-2xl"></i>

                      <h3 className="font-bold text-xl">Email</h3>

                      <span className="contact_card-data">issamoubenazha@gmail.com</span>

                      <a href="mailto:issamoubenazha@gmail.com" className="flex items-center justify-center gap-3 text-red-200 mt-4">
                          Write Me <i className="fas fa-arrow-alt-circle-right"></i>
                      </a>
                  </div>

                  <div className="w-full rounded-2xl bg-gradient-to-br from-red-800/20 via-slate-900/70 to-red-800/10 border border-red-300/20 p-8 shadow-[0_25px_60px_-25px_rgba(239,68,68,0.9)]">
                      <i className="fa-brands fa-whatsapp text-2xl"></i>

                      <h3 className="font-bold text-xl">WhatsApp</h3>

                      <span className="contact_card-data">+212 656822152</span>

                      <a href="https://wa.me/qr/I6Q5NTXFMJYRO1" target="_blank" className="flex items-center justify-center gap-3 text-red-200 mt-4">
                          Write Me <i className="fas fa-arrow-alt-circle-right"></i>
                      </a>
                  </div>

                  <div className="w-full rounded-2xl bg-gradient-to-br from-rose-800/20 via-slate-900/70 to-red-800/10 border border-red-300/20 p-8 shadow-[0_25px_60px_-25px_rgba(248,113,113,0.9)]">
                      <i className="fa-brands fa-linkedin text-2xl"></i>

                      <h3 className="font-bold text-xl">Linkedin</h3>

                      <span className="contact_card-data">Issam Oubenazha</span>

                      <a href="https://www.linkedin.com/in/issam-oubenazha" target="_blank" className="flex items-center justify-center gap-3 text-red-200 mt-4">
                          Write Me <i className="fas fa-arrow-alt-circle-right"></i>
                      </a>
                  </div>
              </div>
          </div>

          <div className="lg:px-24">
              <h3 className="font-bold text-xl mb-10">Write Me Your Project</h3>
              
              <form className="contact_form pb-40 rounded-2xl p-6 bg-gradient-to-br from-red-950/25 via-slate-950/55 to-rose-950/15 border border-red-300/20 shadow-[0_28px_70px_-28px_rgba(239,68,68,0.8)]">
                  <div className="contact_form-div">
                      <label htmlFor="" className="contact_form-tag text-xl text-red-200 bg-black">Name</label>
                      <input type="text" placeholder="Insert Your Name" className="contact_form-input border border-red-300/60 bg-black/20 backdrop-blur-sm" />
                  </div>

                  <div className="contact_form-div">
                      <label htmlFor="" className="contact_form-tag text-xl text-red-200 bg-black">Mail</label>
                      <input type="email" placeholder="Insert Your Email" className="contact_form-input border border-red-300/60 bg-black/20 backdrop-blur-sm" />
                  </div>

                  <div className="contact_form-div contact_form-area">
                      <label htmlFor="" className="contact_form-tag text-xl text-red-200 bg-black">Project</label>
                      <textarea 
                          className="contact_form-input border border-red-300/60 bg-black/20 backdrop-blur-sm"
                          placeholder="Write Your Project"
                          cols={30}
                          rows={10}
                      >
                      </textarea>
                  </div>

                  <button className="rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 font-bold px-6 py-3 hover:from-red-500 hover:via-red-400 hover:to-rose-500 shadow-[0_18px_45px_-20px_rgba(239,68,68,0.9)] transition-all duration-300">Send Message</button>
              </form>
          </div>
      </div>

  </section>
  )
}
