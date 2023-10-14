import React from "react";

export default function Loader() {
	return (
		<>
			<div className="h-screen w-full flex absolute justify-center items-center">
				<img
					src="/img/loader.gif"
					className="h-[25%]"
					alt="loading..."
				/>
			</div>
		</>
	);
}
