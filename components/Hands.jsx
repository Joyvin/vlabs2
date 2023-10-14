import React from "react";

export default function Hands() {
	return (
		<>
			<div className="flex lg:mx-16">
				<div className="lg:flex mb-16 justify-between">
					<div className="lg:w-1/2 lg:ml-16">
						<div className="title text-5xl lg:text-7xl mb-8 mx-5 lg:mx-0">
							<div className="">
								Hands-On <br className="xl:block hidden" />{" "}
								Education at <br className="xl:block hidden" />{" "}
								CRCE
							</div>
						</div>
						<div className="mx-5 lg:mx-0 lg:text-xl xl:text-2xl">
							<strong>
								At CRCE, we firmly believe in the power of
								hands-on learning. We understand that true
								knowledge is gained not just through theory but
								by actively applying concepts in real-world
								scenarios. Our educational philosophy revolves
								around providing students with practical
								experiences that prepare them for the challenges
								of the future. Through a combination of
								innovative teaching methods and real-world
								projects, we foster a learning environment where
								theory meets application, enabling our students
								to thrive in a dynamic world.
							</strong>
						</div>
					</div>
					<div className="flex lg:w-1/2 justify-center items-center px-10 pt-5 lg:px-0 lg:pt-0">
						<img className="" src="/img/home/type2.gif" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
