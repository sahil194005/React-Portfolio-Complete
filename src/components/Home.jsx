import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
	return (
		<div
			name="home"
			className="bg-[#0A192F] w-full h-screen">
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center  ">
				<p className="text-pink-600">Hi, my name is </p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
					Sahil Kumar
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
					I'm a Full Stack Developer.
				</h2>
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					I'm a full-stack developer specializing in
					building (and occasionally designing) exceptional
					degital experiences. Currently, I'm focused on
					building responsive full-stack web applications.
				</p>
				<div>
					<button className=" group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600  ">
						View Work
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
