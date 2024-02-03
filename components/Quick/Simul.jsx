import { useState, useLayoutEffect, useEffect } from "react";
import Message from "@/components/Message";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Simul() {
	const [data, setData] = useState(["", "", "", "", "", "", "", ""]);
	const [isSorting, setIsSorting] = useState(false);
	const [gUp, setGUp] = useState();
	const [gDown, setGDown] = useState();
	const [gPivot, setGPivot] = useState();
	const [swapPointer, setSwapPointer] = useState(false);
	const [pivots, setPivots] = useState([]);
	const [message, setMessage] = useState();
	const [eleSwap, setEleSwap] = useState();
	const [subArr, setSubArr] = useState([0, 7]);
	const [firstIndex, setFirstIndex] = useState();

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const partition = async (arr, low, high) => {
		const pivot = arr[low];
		let down = low + 1;
		let up = high;

		setGPivot(low);
		setGUp(up);
		setGDown(down);
		await delay(1200);

		while (up > down) {
			while (pivot > arr[down]) {
				down++;
				setGDown(down);
				await delay(1200);
			}

			while (pivot < arr[up]) {
				up--;
				setGUp(up);
				await delay(1200);
			}

			if (up >= down) {
				setSwapPointer(true);
				await delay(800);
				[arr[up], arr[down]] = [arr[down], arr[up]];
				setData([...arr]);
				setSwapPointer(false);
			}
		}

		setEleSwap(up);
		await delay(800);
		[arr[up], arr[low]] = [arr[low], arr[up]];
		setData([...arr]);
		setEleSwap();

		return [up, arr];
	};

	useEffect(() => {
		console.log(pivots);
	}, [pivots]);

	const quickSort = async () => {
		let arr = [...data];
		const n = arr.length;
		let stack = [0, n - 1];
		setIsSorting(true);
		setMessage(
			"Quick sort is carried out by bringing a pivot element to its final position by the end of a pass"
		);
		await delay(1800);

		while (stack.length > 0) {
			const high = stack.pop();
			const low = stack.pop();

			if (high == low) {
				// let tData = pivots;
				// tData.push(low);
				// setPivots([...tData]);
				continue;
			}

			setSubArr([low, high]);
			await delay(800);

			if (high - low == 1) {
				if (arr[low] > arr[high]) {
					setGUp();
					setGDown();
					setGPivot(low);
					setEleSwap(high);
					await delay(1200);
					[arr[low], arr[high]] = [arr[high], arr[low]];
					setData([...arr]);
					setEleSwap();
				}
				// let tData = pivots;
				// tData.push(low);
				// tData.push(high);
				// setPivots([...tData]);
				continue;
			}

			const pData = await partition(arr, low, high);
			const pivotIndex = pData[0];
			arr = pData[1];

			let tData = pivots;
			tData.push(pivotIndex);
			console.log(tData);
			setPivots([...tData]);

			if (pivotIndex + 1 < high) {
				stack.push(pivotIndex + 1);
				stack.push(high);
			}

			if (pivotIndex - 1 > low) {
				stack.push(low);
				stack.push(pivotIndex - 1);
			}
		}

		console.log(arr);

		setIsSorting(false);
		setSubArr([]);
		setPivots([]);
		setGUp();
		setGDown();
		setGPivot();
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
				{ length: data.length },
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
										onClick={quickSort}
										disabled={isSorting}
									>
										{isSorting ? "Sorting..." : "Sort"}
									</button>
								</div>
							</div>
							{message && <Message value={message} />}

							<div className="relative">
								{isSorting && subArr && (
									<div
										style={{
											left: `${subArr[0] * 61}px`,
											width: `calc(${
												(subArr[1] - subArr[0] + 1) * 61
											}px - 12px)`,
										}}
										className="border-t-2 relative ease-in transition-width duration-500 border-blue-700 mt-4 mb-2"
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
												const move = eleSwap
													? (eleSwap - gPivot) * 61
													: swapPointer
													? (gUp - gDown) * 61
													: null;

												const styles = {};

												if (
													eleSwap &&
													index === gPivot
												) {
													styles.transform = `translateX(${move}px)`;
													styles.transition =
														"transform 0.3s ease-in";
												} else if (
													eleSwap &&
													index === eleSwap
												) {
													styles.transform = `translateX(-${move}px)`;
													styles.transition =
														"transform 0.3s ease-in";
												} else if (
													swapPointer &&
													index === gDown
												) {
													styles.transform = `translateX(${move}px)`;
													styles.transition =
														"transform 0.3s ease-in";
												} else if (
													swapPointer &&
													index === gUp
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
															className={`col-1 min-w-[50px] min-h-[50px] ${
																pivots.includes(
																	index
																)
																	? "bg-indigo-400"
																	: ""
															} flex p-2 items-center justify-center shadow rounded-lg border border-blue-700 
													${index === gPivot || index === eleSwap ? "bg-blue-700 text-white" : ""}`}
														>
															{value}
														</div>
														{index === gDown &&
															!(
																eleSwap ||
																swapPointer
															) && (
																<div className="flex flex-col items-center text-blue-700">
																	<ChevronUp />
																	Down
																</div>
															)}
														{index === gUp &&
															!(
																eleSwap ||
																swapPointer
															) && (
																<div className="flex flex-col items-center text-blue-700">
																	<ChevronUp />
																	Up
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
