import React, { useState } from "react";
import MatMultiply from "./MatMultiply";
import MatTranspose from "./MatTranspose";

export default function Simul() {
	const [type, setType] = useState("0");
	return (
		<>
			<h1 className="my-4">Matrix</h1>
			<div className="">
				<div className="my-4 flex items-center">
					Matrix -
					<select
						id="ops"
						onChange={(e) => {
							setType(e.target.value);
						}}
						class="bg-white ml-2 shadow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option value="0" selected>
							Multiplication
						</option>
						<option value="1">Transpose</option>
					</select>
				</div>
				{type == "0" ? (
					<MatMultiply />
				) : type == "1" ? (
					<MatTranspose />
				) : (
					""
				)}
			</div>
		</>
	);
}
