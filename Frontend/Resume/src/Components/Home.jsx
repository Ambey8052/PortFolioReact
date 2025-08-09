import React, { useEffect, useRef, useState } from 'react';
import Karan from '../assets/Karan.jpg';
import WhitePaper from '../assets/WhitePaper.jpeg';
import { Link } from 'react-scroll';

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const offsetTop = navRef.current.offsetTop;
        setIsSticky(window.scrollY > offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home">
      <div className="bg-black min-h-screen w-full flex items-center justify-center px-4 py-4">
        <div
  className="min-h-screen w-full pt-5 px-10 md:px-40 pb-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
  style={{
    backgroundImage: `url(${WhitePaper})`,
    backgroundSize: 'cover'
  }}
>

          {/* Sticky Navbar */}
         <nav
  ref={navRef}
  className={`transition-all duration-700 ease-in-out ${
    isSticky
      ? 'fixed top-0 left-0 w-full backdrop-blur-md shadow-lg z-50 px-4 py-4 rounded-xl'
      : 'relative'
  } flex flex-col md:flex-row items-center justify-between gap-4 `}
>
  <div className="text-2xl font-bold bg-black text-white px-6 py-1 rounded-full">
    PORTFOLIO
  </div>

  <ul className="flex gap-4 bg-black px-6 py-2.5 rounded-full text-sm font-medium">
    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
      <li key={item}>
        <Link
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer text-white hover:text-pink-400 transition-colors"
        >
          {item}
        </Link>
      </li>
    ))}
  </ul>
</nav>


          {/* Push content down if navbar is sticky */}
          {isSticky && <div className="h-[96px] md:h-[88px]"></div>}

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-10">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">Karan Kumar</h2>
              <h3 className="text-gray-600 text-lg sm:text-xl font-medium mb-4">
                SOFTWARE ENGINEER | MERN DEVELOPER
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
                Hi, I'm Karan Kumar, a passionate MERN Stack Developer and tech enthusiast from Ghaziabad, India. Currently pursuing my B.Tech at AKGEC Ghaziabad, I'm in my 2nd year with a growing interest in building full-stack web applications that solve real-world problems.

                I love working with technologies like React.js, Node.js, Express.js, and MongoDB, and I enjoy learning new tools and frameworks that enhance performance and user experience. I'm also actively solving DSA problems to strengthen my core logic and problem-solving skills.

                Apart from coding, I enjoy exploring UI/UX design, contributing to open-source, and working on projects like Kahani (a photographer hiring platform) and Wealth Warden (a personal finance tracker).
              </p>
              <div className="flex justify-center lg:justify-start gap-5">
                <a href='https://www.linkedin.com/in/karan-kumar-17736632a/' className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform">
                  LinkedIn
                </a>
                <a href='https://github.com/Ambey8052' className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform">
                  Github
                </a>
                <a href='https://leetcode.com/u/8jsxNU1VjO/' className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform">
                  Leetcode
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <img
                src={Karan}
                alt="Karan"
                className="rounded-xl max-h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Resume Download Button */}
          <a
            href="/your_cv.pdf"
            download
            className=" absolute bottom-4 left-4 border bg-purple-400 border-green-600 text-black px-4 py-1.5 rounded-full hover:bg-purple-600 hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
