import SwapV from "./SwapV";
import { useState } from "react";
import SwapR from "./SwapR";

export default function Simul() {
	const [type, setType] = useState("0");

	return (
		<div className="">
			<div className="my-4 flex items-center">
				Swap -
				<select
					id="ops"
					onChange={(e) => {
						setType(e.target.value);
					}}
					class="bg-white ml-2 shadow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option value="0">Call By Value</option>
					<option value="1">Call By Reference</option>
				</select>
			</div>
			{type == "0" ? <SwapV /> : type == "1" ? <SwapR /> : ""}
		</div>
	);
}
