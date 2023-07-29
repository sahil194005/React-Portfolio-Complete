import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";

const Skills = () => {
	return (
		<div name="skills" className="bg-[#0A192F] h-screen w-full">
			<div className="max-w-[1000px] mx-auto text-gray-300 p-4 h-full w-full flex flex-col justify-center items-center ">
				<div>
					<p className="text-4xl  inline border-b-4 border-pink-600 font-bold">
						Skills
					</p>
					<p className="py-3 text-3xl">
						These are the technologies I've worked with...
					</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={HTML}
							alt="HTML icon"
						/>
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={CSS}
							alt="CSS icon"
						/>
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Javascript}
							alt="HTML icon"
						/>
						<p className="my-4">JAVASCRIPT</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={ReactImg}
							alt="HTML icon"
						/>
						<p className="my-4">REACT</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Node}
							alt="HTML icon"
						/>
						<p className="my-4">NODE</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Mongo}
							alt="HTML icon"
						/>
						<p className="my-4">MONGODB</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Tailwind}
							alt="HTML icon"
						/>
						<p className="my-4">TAILWIND</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={AWS}
							alt="HTML icon"
						/>
						<p className="my-4">AWS</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Skills;
