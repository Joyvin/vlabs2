import React, { useState } from "react";

export default function Simul() {
	const [ch, setCh] = useState();

	return (
		<>
			<h1 className="my-4">Ascii</h1>
			<div className="my-4 flex items-center">
				<div className="">
					<input
						value={ch}
						maxLength={1}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								e.target.blur();
							}
						}}
						onChange={(e) => {
							setCh(e.target.value);
						}}
						type="text"
						className="p-0 mr-3 shadow text-center border border-blue-700 rounded-xl"
						style={{
							height: `50px`,
							width: `50px`,
							outline: `none`,
						}}
						name=""
					/>
					<div className="">Char</div>
				</div>
				<div className="mr-3 mb-3">=</div>
				<div className="">
					<input
						disabled={true}
						value={ch && ch !== "" ? ch.charCodeAt(0) : ""}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								e.target.blur();
							}
						}}
						onChange={(e) => {
							setCh(e.target.value);
						}}
						type="text"
						className="p-0 mr-3 shadow text-center border border-blue-700 rounded-xl"
						style={{
							height: `50px`,
							width: `50px`,
							outline: `none`,
						}}
						name=""
					/>
					<div className="">Ascii Code</div>
				</div>
			</div>
		</>
	);
}
