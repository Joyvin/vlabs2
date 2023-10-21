import React, { useState, useCallback } from "react";
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	MarkerType,
} from "reactflow";
import array from "@/utils/array";
import variable from "@/utils/variable";
import "reactflow/dist/style.css";
import Message from "../Message";

const nodeTypes = {
	variableNode: variable,
	arrayNode: array,
};

/*
	Strings
	Matrix
	Recursion
	ASCII
	Function Calling
	Bubble Sort
*/

export default function Strlen() {
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [message, setMessage] = useState();
	const [string, setString] = useState();

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const addNode = (newNode) => {
		setNodes((prevNodes) => [...prevNodes, newNode]);
	};

	const addEdge = (newEdge) => {
		setEdges((prevEdges) => [...prevEdges, newEdge]);
	};

	const updateNodeIndex = async (itemId, newValue) => {
		await delay(1000);
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? {
							...item,
							data: { ...item.data, ["currIndex"]: newValue },
					  }
					: item
			)
		);
	};

	const updateNodeValue = async (itemId, newValue) => {
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? { ...item, data: { ...item.data, ["selected"]: 1 } }
					: item
			)
		);
		await delay(1000);
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? { ...item, data: { ...item.data, ["label"]: newValue } }
					: item
			)
		);
		await delay(1000);
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? { ...item, data: { ...item.data, ["selected"]: 0 } }
					: item
			)
		);
	};

	const startCompute = async () => {
		setNodes([]);
		setEdges([]);
		let newNode, newEdge;
		setMessage(
			"Lets's start with creating the first variable str with value " +
				string
		);
		await delay(1800);
		setMessage(
			"Note that a string is basically an array of single characters ending with \\0"
		);
		await delay(1800);
		newNode = {
			id: "1",
			position: { x: 79, y: 92 },
			data: {
				label: string,
				type: "target",
				name: "str",
				addNull: 1,
				address: "1002",
				input: 0,
				selected: 0,
			},
			type: "arrayNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage(
			"\\0 is called a null character which helps the compiler understand that the string ends here"
		);
		await delay(1800);
		setMessage(
			"Now to calculate the length of string we will need a counter variable set to 0"
		);
		await delay(1800);
		newNode = {
			id: "2",
			position: { x: 79, y: 215 },
			data: {
				label: 0,
				type: "target",
				name: "length",
				address: "1102",
				input: 0,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage(
			"We will now traverse the string from left to right counting every characters till we reach \\0"
		);
		await delay(1800);
		for (let i = 0; i < string.length; i++) {
			updateNodeIndex("1", i);
			await delay(1500);
			updateNodeValue("2", i + 1);
			await delay(1500);
			if (i === string.length - 1) {
				updateNodeIndex("1", string.length);
				await delay(1800);
				setMessage("Since we reached \\0 we stop the counter");
				await delay(1800);
				updateNodeIndex("1", null);
				await delay(500);
				setMessage(
					"Finally we get length of the string as " + string.length
				);
			}
		}
	};

	return (
		<>
			<div className="flex items-center">
				<div className="">
					<input
						id="aBox"
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								e.target.blur();
							}
						}}
						onChange={(e) => {
							setString(e.target.value);
						}}
						placeholder="Enter String Value..."
						type="text"
						className="px-3 p-0 me-3 shadow-sm border border-blue-700 rounded-lg"
						style={{ height: `50px`, outline: `none` }}
						name=""
					/>
					<div className="">Str</div>
				</div>
				<button
					disabled={string == undefined}
					onClick={startCompute}
					type="button"
					className="flex items-center mb-5 mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Calculate
				</button>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-blue-700 rounded-3 shadow-sm my-3"
				style={{ width: "80vw", height: "70vh" }}
			>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
				>
					<Background variant="dots" gap={24} size={1.5} />
				</ReactFlow>
			</div>
			<br />
			<br />
		</>
	);
}
