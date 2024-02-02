import { useState, useLayoutEffect } from "react";
import Message from "@/components/Message";

export default function Simul() {
	const [data, setData] = useState(["", "", "", "", ""]);
	const [currentIndex, setCurrentIndex] = useState();
	const [lastIndex, setLastIndex] = useState();
	const [isSorting, setIsSorting] = useState(false);
	const [eleSwap, setEleSwap] = useState();
	const [message, setMessage] = useState();
	const [isVisible, setIsVisible] = useState(false);

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const bubbleSort = async () => {
		const arr = [...data];
		const n = arr.length;
		setCurrentIndex(0);

		setIsSorting(true);

		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				setCurrentIndex(j);
				setMessage(`Comparing ${arr[j]} and ${arr[j + 1]}`);
				await delay(1800);
				if (arr[j] > arr[j + 1]) {
					setMessage(
						`Since ${arr[j]} is greater than ${
							arr[j + 1]
						} we swap them`
					);
					await delay(200);
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
					setEleSwap(j);
					await delay(1800);
					setData([...arr]);
					setEleSwap();
				}
			}
			setLastIndex(n - i - 1);
		}
		setLastIndex(0);
		setCurrentIndex();
		setIsSorting(false);
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
							<div className="">
								<button
									className="btn text-white bg-blue-700 shadow rounded-lg mr-3 p-2"
									onClick={getArray}
									disabled={isSorting}
								>
									Generate Array
								</button>
								<button
									className="btn text-white bg-blue-700 shadow rounded-lg p-2 px5"
									onClick={bubbleSort}
									disabled={isSorting}
								>
									{isSorting ? "Sorting..." : "Sort"}
								</button>
							</div>
							{message && <Message value={message} />}
							<div className="flex my-4">
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
									: data.map((value, index) => (
											<div
												key={index}
												className={`mr-3 col-1 min-w-[50px] min-h-[50px] flex p-2 items-center justify-center shadow rounded-lg border border-blue-700 ${
													index === eleSwap
														? "translate-x-[61px] ease-in duration-[0.3s]"
														: index === eleSwap + 1
														? "translate-x-[-61px] ease-in duration-[0.3s]"
														: 2
												} ${
													index === lastIndex &&
													index !== 0
														? "ms-3"
														: ""
												}  ${
													index === currentIndex ||
													index === currentIndex + 1
														? "bg-blue-700 text-white"
														: ""
												}`}
											>
												{value}
											</div>
									  ))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
