import React, { useState } from "react";

export default function MatMultiply() {
	const [m1, setM1] = useState();
	const [n1, setN1] = useState();
	const [n2, setN2] = useState();
	const [mat1, setMat1] = useState();
	const [mat2, setMat2] = useState();
	const [mat3, setMat3] = useState();

	const makeArrays = () => {
		const mt1 = Array.from({ length: m1 }, () =>
			Array.from({ length: n1 }, () => "")
		);
		const mt2 = Array.from({ length: n1 }, () =>
			Array.from({ length: n2 }, () => "")
		);
		const mt3 = Array.from({ length: m1 }, () =>
			Array.from({ length: n2 }, () => "")
		);

		setMat1(mt1);
		setMat2(mt2);
		setMat3(mt3);
	};

	const checkEmptyElement = () => {
		const hasEmptyElement =
			mat1?.some((row) => row.some((cell) => cell === "")) ||
			mat2?.some((row) => row.some((cell) => cell === ""));
		return hasEmptyElement;
	};

	const changeMat = (event, mat, rowIndex, columnIndex) => {
		if (mat === "m1") {
			const updatedMatrix = [...mat1];
			updatedMatrix[rowIndex][columnIndex] = event.target.value;
			setMat1(updatedMatrix);
		} else if (mat === "m2") {
			const updatedMatrix = [...mat2];
			updatedMatrix[rowIndex][columnIndex] = event.target.value;
			setMat2(updatedMatrix);
		}
	};

	const multiplyMat = () => {
		let temp = Array.from({ length: m1 }, () =>
			Array.from({ length: n2 }, () => 0)
		);

		for (let i = 0; i < mat1.length; i++) {
			for (let j = 0; j < mat2[0].length; j++) {
				for (let k = 0; k < mat2.length; k++) {
					temp[i][j] += mat1[i][k] * mat2[k][j];
				}
			}
		}
		setMat3(temp);
	};

	return (
		<>
			<div className="flex mb-2 items-center">
				<div className="">
					<div className="flex mb-3">
						<div className="">
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
								className="p-0 mr-3 shadow-sm text-center border border-blue-700 rounded-lg"
								style={{
									height: `50px`,
									width: `50px`,
									outline: `none`,
								}}
								name=""
							/>
							<div className="">m1</div>
						</div>
						<div className="">
							<input
								value={n1}
								onKeyDown={(e) => {
									makeArrays();
									if (e.key == "Enter") {
										e.target.blur();
									}
								}}
								onChange={(e) => {
									setN1(e.target.value);
								}}
								type="number"
								className="p-0 mr-3 shadow-sm text-center border border-blue-700 rounded-lg"
								style={{
									height: `50px`,
									width: `50px`,
									outline: `none`,
								}}
								name=""
							/>
							<div className="">n1</div>
						</div>
						<div className="">
							<input
								disabled={true}
								value={n1}
								type="number"
								className="p-0 mr-3 shadow-sm text-center border border-blue-700 rounded-lg"
								style={{
									height: `50px`,
									width: `50px`,
									outline: `none`,
								}}
								name=""
							/>
							<div className="">m2</div>
						</div>
						<div className="">
							<input
								value={n2}
								onKeyDown={(e) => {
									makeArrays();
									if (e.key == "Enter") {
										e.target.blur();
									}
								}}
								onChange={(e) => {
									setN2(e.target.value);
								}}
								type="number"
								className="p-0 mr-3 shadow-sm text-center border border-blue-700 rounded-lg"
								style={{
									height: `50px`,
									width: `50px`,
									outline: `none`,
								}}
								name=""
							/>
							<div className="">n2</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center">
				<div
					style={{ position: "relative" }}
					className="h-100 items-center border-y-0 border-2 border-s-blue-700 border-e-blue-700 flex flex-col px-5 p-3"
				>
					{mat1?.map((row, rindex) => {
						return (
							<div key={rindex} className="flex mb-2">
								{row.map((col, cindex) => {
									return (
										<input
											key={cindex}
											onChange={(e) => {
												changeMat(
													e,
													"m1",
													rindex,
													cindex
												);
											}}
											onKeyDown={(e) => {
												if (e.key == "Enter") {
													e.target.blur();
												}
											}}
											type="number"
											className={`p-0 ${
												cindex !== n1 - 1 ? "mr-3" : ""
											} text-center border-b border-blue-700`}
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
					x
				</div>
				<div
					style={{ position: "relative" }}
					className="h-100 items-center border-y-0 border-2 border-e-blue-700 border-s-blue-700 flex flex-col px-5 p-3"
				>
					{mat2?.map((row, rindex) => {
						return (
							<div key={rindex} className="flex mb-2">
								{row.map((col, cindex) => {
									return (
										<input
											key={cindex}
											onChange={(e) => {
												changeMat(
													e,
													"m2",
													rindex,
													cindex
												);
											}}
											onKeyDown={(e) => {
												if (e.key == "Enter") {
													e.target.blur();
												}
											}}
											type="number"
											className={`p-0 ${
												cindex !== n2 - 1 ? "mr-3" : ""
											} text-center border-b border-blue-700`}
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
						onClick={multiplyMat}
						className="bg-blue-700 h-10 items-center text-white p-3 rounded-full inline-flex"
					>
						=
					</button>
				</div>
				<div
					style={{ position: "relative" }}
					className="h-100 items-center border-y-0 border-2 border-e-blue-700 border-s-blue-700 flex flex-col px-5 p-3"
				>
					{mat3?.map((row, rindex) => {
						return (
							<div key={rindex} className="flex mb-2">
								{row.map((col, cindex) => {
									return (
										<div
											key={cindex}
											className={`p-0 ${
												cindex !== n2 - 1 ? "mr-3" : ""
											} text-center border-b border-blue-700`}
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
