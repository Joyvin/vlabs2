import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Module({ theory, simulation, lab, test, title }) {
	let [categories] = useState({
		Theory: theory,
		Notes: "",
		Simulation: simulation,
		Lab: lab,
		Test: test,
	});

	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<div className="w-[90%] md:w-[80%] mx-auto">
				<div className="flex items-center">
					<h1 className="title py-6 text-[52px] text-sky-700">
						{title}
					</h1>
					<img
						src="/img/titleBuddy.png"
						alt=""
						className="h-20 ml-5 hidden md:block"
					/>
				</div>
				<div className="px-2 sm:px-0">
					<Tab.Group>
						<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
							{Object.keys(categories).map((category, index) => (
								<Tab
									key={index}
									onClick={() => {
										setActiveTab(index);
									}}
									className={({ selected }) =>
										classNames(
											"w-full rounded-lg py-2.5 px-2 text-sm font-medium leading-5 text-blue-700",
											"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
											selected
												? "bg-white shadow"
												: "hover:bg-white/[0.12]"
										)
									}
								>
									<strong>{category}</strong>
								</Tab>
							))}
						</Tab.List>
					</Tab.Group>
					<div className="relative">
						{Object.keys(categories).map((key, idx) => {
							let posts = categories[key];

							const emptyTab = (prop) => {
								return (
									<div className="h-[60vh] w-full flex justify-center items-center text-[36px] text-gray-500">
										No {prop} added yet
									</div>
								);
							};

							return (
								<div
									key={idx}
									className={`${
										idx !==
										Object.values(categories).length - 1
											? "bg-white p-3"
											: ""
									} ${
										activeTab != idx ? "hidden" : ""
									} absolute top-7 w-full rounded-xl ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2`}
									style={{
										opacity: activeTab !== idx ? "0" : "",
										zIndex: activeTab === idx ? "5" : "1",
									}}
								>
									{posts ? posts : emptyTab(key)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
