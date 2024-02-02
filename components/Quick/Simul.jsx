import { useState, useLayoutEffect, useEffect } from "react";
import Message from "@/components/Message";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Simul() {
	const [data, setData] = useState(["", "", "", "", "", "", "", ""]);
	const [currentIndex, setCurrentIndex] = useState();
	const [isSorting, setIsSorting] = useState(false);
	const [victim, setVictim] = useState();
	const [firstIndex, setFirstIndex] = useState();
	const [message, setMessage] = useState();
	const [eleSwap, setEleSwap] = useState();
	const [type, setType] = useState("0");

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		console.log(firstIndex);
	}, [firstIndex]);

	const selectionSort = async () => {
		const arr = [...data];
		const n = arr.length;
		let victimLocal = 0;

		setIsSorting(true);
		setFirstIndex(0);
		setMessage(
			"Selection sort is carried out by bring our victim element to the front of the array"
		);
		await delay(1800);
		setMessage(
			"Victim is the smallest element for ascending and biggest element for descending sort"
		);
		await delay(1800);
		for (let i = 0; i < n - 1; i++) {
			setMessage(
				`Lets consider first element of the subarray to be the victim`
			);
			setVictim(i);
			victimLocal = i;
			await delay(800);
			setMessage(`Now we iterate to find the smallest value`);
			await delay(1800);
			for (let j = i; j < n; j++) {
				setCurrentIndex(j);
				await delay(500);
				if (!parseInt(type) && arr[j] < arr[victimLocal]) {
					setVictim(j);
					victimLocal = j;
					await delay(200);
				}

				if (parseInt(type) && arr[j] > arr[victimLocal]) {
					setVictim(j);
					victimLocal = j;
					await delay(200);
				}
			}
			setCurrentIndex();
			setMessage(`Lets swap both the elements`);
			await delay(800);
			setEleSwap(victimLocal - i);
			await delay(1800);
			[arr[i], arr[victimLocal]] = [arr[victimLocal], arr[i]];
			setCurrentIndex();
			setVictim();
			setData([...arr]);
			setEleSwap();
			setFirstIndex(i + 1);
		}

		setCurrentIndex();
		setIsSorting(false);
		setFirstIndex();
		setCurrentIndex();
		setMessage();
	};

	const isSorted = (arr) => {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				return false;
			}
		}
		return true;
	};

	const getArray = () => {
		while (true) {
			const randomArray = Array.from(
				{ length: 5 },
				() => Math.floor(Math.random() * 100) + 1 // Generating random numbers between 1 and 100
			);
			if (!isSorted(randomArray)) {
				setData(randomArray);
				break;
			}
		}
	};

	const moveBox = (index, e) => {
		let key = e.key;
		if (key === "Enter") {
			const foundElement = data.findIndex((element) => element === "");
			console.log(index + 1 === data.length);
			if (foundElement !== -1 && index + 1 !== data.length) {
				document.getElementById(`${index + 1}`).focus();
			} else if (foundElement !== -1 && index + 1 === data.length) {
				console.log(foundElement);
				document.getElementById(`${foundElement}`).focus();
			} else {
				e.target.blur();
			}
		}
	};

	const editValue = (index, e) => {
		let val = e.target.value;
		let d = data;
		d[index] = parseInt(val);
		setData(d);
	};

	return (
		<>
			<div>
				<div className="">
					<div className="flex justify-between">
						<div className="">
							<div className="flex">
								<div className="">
									<button
										className="btn text-white bg-blue-700 shadow rounded-lg mr-3 p-2 px-5"
										onClick={getArray}
										disabled={isSorting}
									>
										Generate Array
									</button>
								</div>
								<div className="">
									<button
										className="btn text-white bg-blue-700 shadow rounded-lg p-2"
										onClick={selectionSort}
										disabled={isSorting}
									>
										{isSorting ? "Sorting..." : "Sort"}
									</button>
								</div>
								<div className="ml-2 flex justify-center items-center">
									-
								</div>
								<select
									id="ops"
									onChange={(e) => {
										setType(e.target.value);
									}}
									className="bg-white ml-2 shadow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option selected value="0">
										Asc
									</option>
									<option value="1">Desc</option>
								</select>
							</div>
							{message && <Message value={message} />}

							<div>
								{isSorting && firstIndex > 0 && (
									<div
										style={{
											width: `calc(${
												firstIndex * 61
											}px - 12px)`,
										}}
										className="border-t-2 ease-in transition-width duration-500 border-blue-700 mt-4 mb-2"
									></div>
								)}
								<div
									className={`flex ${
										firstIndex && firstIndex > 0
											? "mb-4"
											: "my-4"
									}`}
								>
									{!isSorting
										? data.map((value, index) =>
												value !== "" ? (
													<input
														key={index}
														id={index}
														value={value.toString()}
														onKeyDown={(e) => {
															moveBox(index, e);
														}}
														onChange={(e) => {
															editValue(index, e);
														}}
														type="number"
														className="p-0 mr-3 shadow w-[50px] h-[50px] outline-0 text-center border border-blue-700 rounded-lg"
														name=""
													/>
												) : (
													<input
														key={index}
														id={index}
														onKeyDown={(e) => {
															moveBox(index, e);
														}}
														onChange={(e) => {
															editValue(index, e);
														}}
														type="number"
														className="mr-3 shadow w-[50px] h-[50px] outline-0 text-center p-0 border border-blue-700 rounded-lg"
														name=""
													/>
												)
										  )
										: data.map((value, index) => {
												const move =
													eleSwap && eleSwap * 61;
												const styles = {};

												if (
													move &&
													index === firstIndex
												) {
													styles.transform = `translateX(${move}px)`;
													styles.transition =
														"transform 0.3s ease-in";
												} else if (
													move &&
													index === victim
												) {
													styles.transform = `translateX(-${move}px)`;
													styles.transition =
														"transform 0.3s ease-in";
												}

												return (
													<div
														id={`box${index}`}
														key={index}
														className="flex relative flex-col items-center mr-3"
														style={styles}
													>
														<div
															className={`col-1 min-w-[50px] min-h-[50px] flex p-2 items-center justify-center shadow rounded-lg border border-blue-700 
													${index === victim || index === firstIndex ? "bg-blue-700 text-white" : ""}`}
														>
															{value}
														</div>
														{index ===
															currentIndex && (
															<div className="flex flex-col items-center text-blue-700">
																<ChevronUp />
																Victim
															</div>
														)}
													</div>
												);
										  })}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// ${
// 														eleSwap &&
// 														index === firstIndex
// 															? `translate-x-[${
// 																	eleSwap * 61
// 															  }px] duration-[0.3s] ease-in`
// 															: eleSwap &&
// 															  index === victim
// 															? `translate-x-[${
// 																	-eleSwap *
// 																	61
// 															  }px] duration-[0.3s] ease-in`
// 															: ""
// 													}
