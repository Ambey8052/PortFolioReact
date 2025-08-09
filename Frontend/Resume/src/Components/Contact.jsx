import React from "react";
import github_PNG76 from '../Assets/github_PNG76.png';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 pt-20 pb-10 gap-10">

        {/* Left - Cat and Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <img
              src={github_PNG76} 
              alt="Cat"
              className="w-80 mx-auto lg:ml-0 lg:mr-auto rounded-2xl"
            />
            <p className="mt-6 text-xl text-purple-200 font-handwriting">
              My friend is waiting for your letters
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="flex-1 bg-black/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-6">Get in touch Today</h2>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Leave us a message"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Send message
              </button>
            </form>

            {/* Cat face peek */}
            <img
              src={github_PNG76}
              alt="Peek Cat"
              className="w-20 absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/40 py-6 px-6 sm:px-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300 mt-10">
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold text-lg">KARAN KUMAR</span>
          <nav className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-white">About me</a>
            <a href="#skills" className="hover:text-white">My skills</a>
            <a href="#projects" className="hover:text-white">My site projects</a>
            <a href="#contact" className="hover:text-white">Contact me</a>
          </nav>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center gap-4">
          <a
            href="/your_cv.pdf"
            download
            className="border border-purple-400 text-purple-300 px-4 py-1.5 rounded-full hover:bg-purple-600 hover:text-white"
          >
            Download CV
          </a>
          <span className="hidden sm:inline">Karan_Kumar@email.com</span>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
