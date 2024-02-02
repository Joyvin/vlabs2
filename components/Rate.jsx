import React, { useState } from "react";
import { Rating } from "@material-tailwind/react";

export default function Rate() {
	const [modalOn, setModalOn] = useState(false);

	return (
		<>
			<div
				className={`fixed bg-slate-800 bg-opacity-50 ${
					modalOn ? "block" : "hidden"
				} flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full`}
			>
				<div className="relative w-full max-w-2xl max-h-full">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								Terms of Service
							</h3>
							<button
								onClick={() => {
									setModalOn(false);
								}}
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-hide="defaultModal"
							>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						<div className="p-6 space-y-6">
							<Rating value={4} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
