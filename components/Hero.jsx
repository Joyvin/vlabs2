import React from "react";

export default function Hero() {
	return (
		<>
			<div
				style={{ zIndex: "-1" }}
				className="w-full opacity-30 bg-[url('/img/home/bits.avif')] bg-repeat-x bg-top md:bg-center bg-cover md:bg-contain h-screen flex items-center justify-center absolute top-0"
			></div>
			<div className="w-full h-screen flex flex-col items-center justify-center relative top-0">
				<div className="mb-[20rem] flex-col">
					<img
						className="mx-auto w-[60%] top-[60px] relative"
						src="/img/home/tag-final.gif"
						alt=""
					/>
					<div className="text-center title text-5xl md:text-7xl">
						Welcome To <br /> Virtual{" "}
						<span className="text-[#af9fe5]">Labs</span> CRCE !
					</div>
				</div>
			</div>
		</>
	);
}
