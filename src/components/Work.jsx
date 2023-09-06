import React from "react";
import Working from "../assets/projects/workImg.jpeg";
import realEstate from "../assets/projects/realestate.jpg";
import DalleClone from '../assets/DalleClone.png'
import Ecommerce from '../assets/Ecommerce.png'
import ExpenseTracker from '../assets/ExpenseTracker.png'
const Work = () => {
	return (
		<div
			name="work"
			className="bg-[#0a192f] w-full text-gray-300 md:h-screen">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8 ">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Work
					</p>
					<p className="py-6">
						Check out some of my recent work
					</p>
				</div>

				<div
					// container

					className="grid gap-4 sm:grid-cols-2 ">
					{/* grid item */}
					<div
						style={{ backgroundImage: `url(${ExpenseTracker})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mb-4">
						{/* hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Expense Tracker
							</span>
							<div className=" pt-8 text-center">
								<a href="https://64f78cf628f3e025147a8759--expensetrackerimzee.netlify.app/">
									<button className="text-center border rounded-lg px-4 py-2 m-2  text-white font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/sahil194005/expense-tracker-charts">
									<button className="text-center border rounded-lg px-4 py-2 m-2 text-white font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${Ecommerce})` }}
						className=" mb-4 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Ecommerce Website
							</span>
							<div className=" pt-8 text-center">
								<a href="https://ecommerce-react-complete.vercel.app/">
									<button className="text-center border rounded-lg px-4 py-2 m-2  text-white font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/sahil194005/ecommerce-React-complete">
									<button className="text-center border rounded-lg px-4 py-2 m-2 text-white font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${DalleClone})` }}
						className=" mb-4 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/* hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Dall-E Clone
							</span>
							<div className=" pt-8 text-center">
								<a href="https://gentle-travesseiro-248cb4.netlify.app/">
									<button className="text-center border rounded-lg px-4 py-2 m-2  text-white font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/sahil194005/DALL-E-clone">
									<button className="text-center border rounded-lg px-4 py-2 m-2 text-white font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
