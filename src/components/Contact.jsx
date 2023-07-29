import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4 text-gray-300 " >
			<form
				method="POST" action="https://getform.io/f/e1944169-4162-4bfc-b7a9-bd79587b84e2"
				className="flex flex-col max-w-[700px] w-full ">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Contact
					</p>
					<p className="py-4">
						Submit the form below or shoot me an email
						-lyfesahil@gmai.com
					</p>
				</div>
				<input
					className="  bg-[#ccd6f6] p-2 text-gray-900 font-medium"
					type="text"
					placeholder="Name"
					name="name"></input>
				<input
					className="my-4 p-2 bg-[#ccd6f6] text-gray-900 font-medium"
					type="email"
					placeholder="Email"
					name="email"></input>
				<textarea
					className="bg-[#ccd6f6] p-2 text-gray-900 font-medium"
					name="message"
					rows="10"
                    placeholder="message"></textarea>
                <button className=" rounded-lg px-4 py-3 my-8 mx-auto flex items-center text-white border-2 hover:bg-pink-600 hover:border-pink-600">Let's Collaborate</button>
			</form>
		</div>
	);
};

export default Contact;
