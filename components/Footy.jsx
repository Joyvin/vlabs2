import React from "react";

export default function Footy() {
	return (
		<>
			<footer className="bg-white shadow dark:bg-gray-800 w-full">
				<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
					<span className="text-sm text-slate-800 sm:text-center dark:text-gray-400">
						© 2023{" "}
						<a
							href="https://flowbite.com/"
							className="hover:underline"
						>
							Virtual Labs CRCE
						</a>
						. Developed and Deployed by{" "}
						<a
							className="uline"
							href="https://www.linkedin.com/in/joyvinmendonca/"
						>
							Joyvin Mendonca
						</a>
						.
					</span>
					{/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul> */}
				</div>
			</footer>
		</>
	);
}
