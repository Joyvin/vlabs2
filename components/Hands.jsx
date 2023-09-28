import React from "react";

export default function Hands() {
	return (
		<>
			<div className="flex mx-16">
				<div className="flex mb-16">
					<div className="w-1/2 ml-16">
						<div
							className="title text-[78px] mb-8"
							style={{ lineHeight: "4rem" }}
						>
							<strong>
								<div className="">Hands-On </div>
								<div className="">Education at</div>
								<div className="">CRCE</div>
							</strong>
						</div>
						<div className="text-[1.5rem]">
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
					<div className="w-1/2 flex justify-center">
						<img className="" src="/img/home/type2.gif" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}
