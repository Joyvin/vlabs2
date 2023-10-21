import { useState } from "react";
import Strlen from "./Strlen";
import Strcpy from "./Strcpy";
import Strcmp from "./Strcmp";
import { Listbox } from "@headlessui/react";

export default function Simul() {
	const [type, setType] = useState("0");

	return (
		<div className="">
			<div className="my-4 flex items-center">
				String -
				<select
					id="ops"
					onChange={(e) => {
						setType(e.target.value);
					}}
					className="bg-white ml-2 shadow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option selected value="0">
						Length
					</option>
					<option value="1">Copy</option>
					<option value="2">Compare</option>
				</select>
			</div>
			{type == 0 ? (
				<Strlen />
			) : type == 1 ? (
				<Strcpy />
			) : type == 2 ? (
				<Strcmp />
			) : (
				""
			)}
		</div>
	);
}
