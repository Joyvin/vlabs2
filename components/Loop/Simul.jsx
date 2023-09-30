import React, { useState } from "react";

export default function Simul() {
	const [size, setSize] = useState();

	const makePattern = () => {
		const pattern = [];
		const max = (size - 1) ** 2 + 1;
		for (let i = 0; i < size; i++) {
			const row = [];
			for (let j = 0; j < size - i - 1; j++) {
				row.push("0"); // Add non-breaking space for alignment
			}
			row.push("//");
			for (let j = 0; j <= i; j++) {
				row.push(String.fromCharCode(65 + j));
			}
			for (let j = i - 1; j >= 0; j--) {
				row.push(String.fromCharCode(65 + j));
			}
			pattern.push(row.join(" "));
		}
		return pattern;
	};

	return (
		<>
			<h1 className="my-4">Pattern</h1>
			<div className="my-4">
				<div className="">
					<input
						value={size}
						maxLength={1}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								e.target.blur();
							}
						}}
						onChange={(e) => {
							setSize(e.target.value);
						}}
						type="text"
						className="p-0 me-3 shadow-sm text-center border border-primary rounded-lg"
						style={{
							height: `50px`,
							width: `50px`,
							outline: `none`,
						}}
						name=""
					/>
					<div className="">Size</div>
				</div>
			</div>
			{size &&
				makePattern().map((row, rowIndex) => (
					<div key={rowIndex} className="d-flex">
						{row.split("//").map((ele, index) => (
							<div
								style={{ opacity: index == 0 ? "0" : "1" }}
								key={index}
							>
								{ele}
							</div>
						))}
					</div>
				))}
		</>
	);
}
