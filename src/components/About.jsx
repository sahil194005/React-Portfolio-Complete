import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="bg-[#0a192f] w-full h-screen text-gray-300 font-bold">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className=" pb-8 pl-4 sm:text-right  ">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className=" px-4 max-w-[1000px] w-full grid gap-8 sm:grid-cols-2">
					<div className=" text-4xl font-bold  sm:text-right">
						<p>
							Hi. I'm Sahil, nice to meet you. Please take a
							look around.
						</p>
					</div>
					<div>
						<p>
							I am passionate about building excellent
							software that enhances the lives of those
							around me. I have hands-on experience with
							various tech stacks, and I am adept at
							learning new technologies on the fly. Imagine
							having a software expert available at your
							fingertips.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
