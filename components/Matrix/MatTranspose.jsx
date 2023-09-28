import React, { useState } from "react";

export default function MatTranspose() {
	const [m1, setM1] = useState();
	const [mat1, setMat1] = useState();
	const [mat2, setMat2] = useState();

	const makeArrays = () => {
		const mt1 = Array.from({ length: m1 }, () =>
			Array.from({ length: m1 }, () => "")
		);

		const mt2 = Array.from({ length: m1 }, () =>
			Array.from({ length: m1 }, () => "")
		);

		setMat1(mt1);
		setMat2(mt2);
	};

	const checkEmptyElement = () => {
		const hasEmptyElement = mat1?.some((row) =>
			row.some((cell) => cell === "")
		);
		return hasEmptyElement;
	};

	const transformMat = () => {
		const newTranspose = Array.from({ length: m1 }, () =>
			Array.from({ length: m1 }, () => 0)
		);

		for (let i = 0; i < m1; i++) {
			for (let j = 0; j < m1; j++) {
				newTranspose[j][i] = mat1[i][j];
			}
		}

		setMat2(newTranspose);
	};

	const changeMat = (event, rowIndex, columnIndex) => {
		const updatedMatrix = [...mat1];
		updatedMatrix[rowIndex][columnIndex] = event.target.value;
		setMat1(updatedMatrix);
	};

	return (
		<>
			<div className="my-4">
				<input
					value={m1}
					onKeyDown={(e) => {
						makeArrays();
						if (e.key == "Enter") {
							e.target.blur();
						}
					}}
					onChange={(e) => {
						setM1(e.target.value);
					}}
					type="number"
					className="p-0 mr-3 shadow text-center border border-blue-700 rounded-lg"
					style={{ height: `50px`, width: `50px`, outline: `none` }}
					name=""
				/>
				<div className="">Size</div>
			</div>
			<div className="flex items-center">
				<div
					style={{ position: "relative" }}
					className="h-full items-center border-y-0 border-2 border-e-blue-700 border-s-blue-700 flex flex-col p-3"
				>
					{mat1?.map((row, rindex) => {
						return (
							<div key={rindex} className="flex mb-2">
								{row.map((col, cindex) => {
									return (
										<input
											key={cindex}
											onChange={(e) => {
												changeMat(e, rindex, cindex);
											}}
											onKeyDown={(e) => {
												if (e.key == "Enter") {
													e.target.blur();
												}
											}}
											type="number"
											className={`p-0 ${
												cindex !== m1 - 1 ? "mr-3" : ""
											} text-center border-0 border-b border-blue-700`}
											style={{
												height: `30px`,
												width: `30px`,
												outline: `none`,
											}}
											name=""
										/>
									);
								})}
							</div>
						);
					})}
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							left: "0",
							top: "0",
						}}
					></div>
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							right: "0",
							top: "0",
						}}
					></div>
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							left: "0",
							bottom: "0",
						}}
					></div>
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							right: "0",
							bottom: "0",
						}}
					></div>
				</div>
				<div style={{ fontSize: "24px" }} className="mx-5">
					<button
						disabled={checkEmptyElement()}
						onClick={transformMat}
						className="btn text-white bg-blue-700 h-10 flex items-center rounded-full p-3"
					>
						=
					</button>
				</div>
				<div
					style={{ position: "relative" }}
					className="h-full items-center border-y-0 border-2 border-e-blue-700 border-s-blue-700 flex flex-col p-3"
				>
					{mat2?.map((row, rindex) => {
						return (
							<div key={rindex} className="flex mb-2">
								{row.map((col, cindex) => {
									return (
										<div
											key={cindex}
											className={`p-0 ${
												cindex !== m1 - 1 ? "mr-3" : ""
											} text-center border-0 border-b border-blue-700`}
											style={{
												height: `30px`,
												width: `30px`,
												outline: `none`,
											}}
											name=""
										>
											{col}
										</div>
									);
								})}
							</div>
						);
					})}
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							left: "0",
							top: "0",
						}}
					></div>
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							right: "0",
							top: "0",
						}}
					></div>
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							left: "0",
							bottom: "0",
						}}
					></div>
					<div
						className="border border-blue-700"
						style={{
							width: "20px",
							position: "absolute",
							right: "0",
							bottom: "0",
						}}
					></div>
				</div>
			</div>
		</>
	);
}
