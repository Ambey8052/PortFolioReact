import React from "react";
import Kahani from "../Assets/Kahani.png";
import wealthWarden from "../Assets/wealth-warden.jpeg";
import { Link } from "react-router-dom";
import shopora from "../Assets/shopora.jpeg";

const projects = [
	{
		title: "Heir Photographers",
		date: "March 2025",
		description:
			`Kahani is a photography service platform that connects users with professional photographers for events, portraits, and custom shoots.
       Built with the MERN stack, it includes features like photographer profiles, booking system, user authentication, and reviews.
       Designed for a smooth user experience with responsive UI and secure backend to streamline the hiring process.`,
		tags: ["Business", "Web"],
		image: Kahani,
		link: "https://kahani-ffol.vercel.app/",
	},
	{
		title: "Wealth Management App",
		date: "July 2025",
		description: `Wealth Warden is a modern fintech platform designed to help users track, manage, and optimize their personal finances.
                  It offers tools for expense tracking, budgeting, investment insights, and smart financial planning.
                  Built with a focus on user-friendly design and data-driven recommendations to promote financial well-being.`,
		tags: ["Management", "Tech"],
		image: wealthWarden,
		link: "https://wealth-warden-pied.vercel.app/",
	},
	{
		title: "Shopora - E-commerce Platform",
		date: "August 2025",
		description:
			`Shopora is a fully responsive e-commerce web application built with React, Vite, and Tailwind CSS, designed to deliver a smooth and engaging shopping experience.
Key features include:
Dynamic Product Catalog with categories like Clothing, Electronics, and Mobiles
Search & Filter functionality for quick product discovery
Cart Management with add, remove, and quantity update
User Authentication (Login/Register)
Responsive Design & Smooth Animations for mobile and desktop users
Tech Stack: React, Vite, Tailwind CSS, JavaScript`,
		tags: ["E-commerce", "Business"],
		image: shopora,
		link: "https://shopora-ten.vercel.app/",
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="min-h-screen bg-black text-white px-6 py-14"
		>
			<h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
				My Projects
			</h1>

			<div className="space-y-20 max-w-6xl mx-auto">
				{projects.map((project, index) => (
					<div
						key={index}
						className="flex flex-col lg:flex-row gap-10 items-center"
					>
						<div className="flex-1 rounded-xl overflow-hidden shadow-xl">
							<img
								src={project.image}
								alt={project.title}
								className="w-full object-cover aspect-video"
							/>
						</div>

						<div className="flex-1">
							<div className="flex gap-2 mb-3 flex-wrap">
								{project.tags.map((tag, i) => (
									<span
										key={i}
										className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full"
									>
										{tag}
									</span>
								))}
							</div>
							<h2 className="text-2xl font-semibold mb-1">
								{project.title}
							</h2>
							<p className="text-sm text-gray-400 mb-4">
								// {project.date}
							</p>
							<p className="text-gray-200 mb-6">
								{project.description}
							</p>
							{project.link && project.link !== "#" ? (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 transition"
								>
									Go Live
								</a>
							) : (
								<button
									className="inline-block px-6 py-2 rounded-full bg-gray-500 cursor-not-allowed"
									disabled
								>
									Go Live
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
