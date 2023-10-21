import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import Link from "next/link";

export default function C() {
	const title = "C Programming";
	const [subpages, setSubpages] = useState([
		"Ascii",
		"Bubble Sort",
		"Loops",
		"Matrix",
		"String",
		"Function Calling",
		"Recursion",
	]);
	const [pages, setPages] = useState([
		"Ascii",
		"Bubble Sort",
		"Loops",
		"Matrix",
		"String",
		"Function Calling",
		"Recursion",
	]);
	const [rImages, setRImages] = useState([]);

	useEffect(() => {
		getNum();
		axios
			.post("/api/subpages", { dir: "./pages/c" })
			.then((e) => {
				setSubpages(e.data.subdirs);
				setPages(e.data.subdirs);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleSearch = (e) => {
		if (e.target.value === "") {
			setPages([...subpages]);
		} else {
			const sPages = subpages.filter((p) => {
				return p.toLowerCase().includes(e.target.value.toLowerCase());
			});
			setPages(sPages);
		}
	};

	const getNum = () => {
		const arr = [];

		while (arr.length != 10) {
			let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
			if (!arr.includes(num)) {
				arr.push(num);
			}
		}

		setRImages([...arr]);
	};

	return (
		<>
			<div className="w-[80%] mx-auto mt-16">
				<div className="flex items-center justify-center">
					<img
						src="/img/titleBuddy.png"
						alt=""
						className="hidden md:block h-20"
						style={{ transform: "scaleX(-1)" }}
					/>
					<h1 className="title mx-7 py-6 text-5xl lg:text-6xl xl:text-7xl text-sky-700">
						{title}
					</h1>
					<img
						src="/img/titleBuddy.png"
						alt=""
						className="h-20 hidden md:block"
					/>
				</div>
				<div className="flex mt-10 justify-center">
					<div className="rounded-3xl focus-within:ring-2 focus-within:ring-blue-500 bg-white items-center flex shadow w-full lg:w-[50%]">
						<Search className="text-gray-700 ml-4" />
						<input
							type="text"
							className="w-full py-3 px-4 focus:outline-none rounded-3xl"
							placeholder="Search..."
							onChange={handleSearch}
						/>
					</div>
				</div>
				<div className="flex my-16 justify-center">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
						{pages &&
							pages.map((val, idx) => {
								return (
									<div className="aspect-square" key={idx}>
										<Link
											href={`/c/${val
												.replaceAll(" ", "-")
												.toLowerCase()}`}
											className="block shadow flex-col relative flex justify-end max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
										>
											<div className="rounded-3xl bg-white">
												<img
													src={`/img/modules/${
														rImages[idx % 10]
													}.png`}
													alt=""
													className="p-5"
												/>
												<div className="text-center border-t py-3 border-blue-700">
													<strong className="text-[1.7rem]">
														{val}
													</strong>
												</div>
											</div>
										</Link>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}
