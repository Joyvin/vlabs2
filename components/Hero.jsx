import React from "react";

export default function Hero() {
	return (
		<>
			<div
				style={{
					background: "url('/img/home/bits.avif') repeat-x",
					backgroundSize: "contain",
					backgroundPosition: "center",
					opacity: "32%",
					zIndex: -1,
				}}
				className="w-screen h-screen flex items-center justify-center absolute top-0"
			></div>
			<div className="w-full h-[90%] flex flex-col items-center justify-center relative top-0">
				<div className="mb-[20rem] flex-col">
					<img
						className="mx-auto w-[60%] top-[60px] relative"
						src="/img/home/tag-final.gif"
						alt=""
					/>
					<div className="text-center title text-[78px]">
						Welcome To <br /> Virtual{" "}
						<span className="text-[#af9fe5]">Labs</span> CRCE !
					</div>
				</div>
			</div>
		</>
	);
}
