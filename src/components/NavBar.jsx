import Logo from "../assets/logo1.png";
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = (props) => {
	const [nav, setNav] = useState(false);
	const navClickHandler = (e) => {
		setNav((prevState) => !prevState);
	};
	return (
		<React.Fragment>
			<div className="fixed w-full bg-[#0A192F]  h-[80px] flex justify-between items-center px-4 text-gray-300">
				<img
					src={Logo}
					alt="name-logo"
					style={{ width: "50px" }}></img>

				<ul className="hidden md:flex">
					<li>
						<Link to="home" smooth={true} duration={500}>
							home
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link to="work" smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>

				<div
					className=" z-10 md:hidden hover:duration-500"
					onClick={navClickHandler}>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>

				<ul
					className={
						!nav
							? "hidden"
							: "  absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
					}>
					<li
						
						className="py-6 text-4xl">
						<Link onClick={navClickHandler} to="home" smooth={true} duration={500}>
							home
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={navClickHandler} to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={navClickHandler} to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={navClickHandler} to="work" smooth={true} duration={500}>
							Work
						</Link>
					</li>
					<li className="py-6 text-4xl">
						<Link onClick={navClickHandler} to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
				<div className=" hidden lg:flex flex-col fixed left-0 top-[35%] ">
					<ul>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
							<a
								className=" flex w-full text-gray-300 justify-between items-center font-bold"
								href="https://www.linkedin.com/in/sahil-kumar-324b3b217/">
								Linkedin
								<FaLinkedin size={30} />
							</a>
						</li>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500 rounded-md">
							<a
								className=" flex w-full text-gray-300 justify-between items-center font-bold"
								href="https://www.linkedin.com/in/sahil-kumar-324b3b217/">
								LeetCode
								<SiLeetcode size={30} />
							</a>
						</li>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md">
							<a
								className=" flex w-full text-gray-300 justify-between items-center font-bold"
								href="https://www.linkedin.com/in/sahil-kumar-324b3b217/">
								GitHub
								<FaGithub size={30} />
							</a>
						</li>

						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 rounded-md">
							<a
								className=" flex w-full text-gray-300 justify-between items-center font-bold"
								href="https://www.linkedin.com/in/sahil-kumar-324b3b217/">
								Email
								<HiOutlineMail size={30} />
							</a>
						</li>
						<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-md">
							<a
								className=" flex w-full text-gray-300 justify-between items-center font-bold"
								href="https://www.linkedin.com/in/sahil-kumar-324b3b217/">
								Resume
								<BsFillPersonLinesFill size={30} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
