import React from 'react'
import WhitePaper from '../Assets/WhitePaper.jpeg'
import Karan from '../Assets/Karan.jpg'

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center px-4 py-8">
      <div className="min-h-screen w-full p-10 md:p-40 rounded-[2rem] shadow-2xl relative overflow-hidden"
      style={{ backgroundImage: `url(${WhitePaper})`, backgroundSize: 'cover' }}>
        <section id="about" className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <div className="bg-amber-300 p-5 rounded-full shadow-lg">
              <img
                src={Karan}
                alt="Anton with Cat"
                className="max-w-[300px] md:max-w-[350px] rounded-3xl shadow-xl"
              />
            </div>
          </div>

          <div className="flex-1 text-Black">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <ul className="relative border-1-0 border-gradient-to-b from-blue-500 via-pink-500 to-red-500 pl-10 space-y-10">
              <li>
                <span className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2.5 top-1"></span>
                <h3 className="font-semibold">💻 Software Development Enthusiast </h3>
                <p className="text-sm text-#2C2D2D">
                 Passionate about building scalable web applications, exploring modern technologies, and continuously learning to solve real-world problems.
                </p>
                <span className="text-xs text-#2C2D2D">2020-now</span>
              </li>
              <li>
                <span className="absolute w-3 h-3 bg-pink-500 rounded-full -left-2.5 "></span>
                <h3 className="font-semibold">MERN Stack Developer</h3>
                <p className="text-sm text-#2C2D2D"> with hands-on experience in building responsive web applications using MongoDB, Express.js, React.js, and Node.js.
Proficient in REST APIs, frontend component design, and backend integration.
Passionate about clean code, performance optimization, and solving real-world problems through tech.</p>
                <span className="text-xs text-#2C2D2D">2020</span>
              </li>
              <li>
                <span className="absolute w-3 h-3 bg-red-500 rounded-full -left-2.5 "></span>
                <h3 className="font-semibold">Bachelor Of Technology</h3>
                <p className="text-sm text-#2C2D2D"> Information Technology at AKGEC</p>
                <span className="text-xs text-#2C2D2D">2023–2027</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage