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

export default function Strcpy() {
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

	const updateNodeArrayValue = async (itemId, key, newValue) => {
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? { ...item, data: { ...item.data, [key]: newValue } }
					: item
			)
		);
	};

	const startCompute = async () => {
		setNodes([]);
		setEdges([]);
		let newNode;
		setMessage(
			"Since strings are arrays we cannot directly assign them to another variable"
		);
		await delay(1800);
		setMessage(
			"So we have to pick individual characters one by one and then transfer them"
		);
		await delay(1800);
		setMessage("Lets start by making a variable str1 and str 2");
		await delay(1800);
		newNode = {
			id: "1",
			position: { x: 79, y: 92 },
			data: {
				label: string,
				type: "target",
				addNull: 1,
				name: "str1",
				address: "1002",
				input: 0,
				selected: 0,
			},
			type: "arrayNode",
		};
		addNode(newNode);
		newNode = {
			id: "2",
			position: { x: 180, y: 215 },
			data: {
				label: "",
				length: 15,
				type: "target",
				name: "str2",
				addNull: 0,
				address: "2002",
				input: 0,
				selected: 0,
			},
			type: "arrayNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage(
			"We&apos;ll create a variable pos to track the position of the characters in the string and set it to zero"
		);
		await delay(1800);
		newNode = {
			id: "3",
			position: { x: 79, y: 270 },
			data: {
				label: 0,
				type: "target",
				name: "pos",
				address: "2086",
				input: 0,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage(
			"We set it to zero because in programming counter starts with zero and the first element is considered the zeroth element"
		);
		await delay(2500);
		setMessage("Now lets start traversing the string from left to right");
		await delay(1800);
		setMessage(
			"The pos is zero so we take the zeroth element of str1 and put it as the zeroth element of str2"
		);
		await delay(1800);
		updateNodeIndex("1", 0);
		await delay(700);
		updateNodeIndex("2", 0);
		await delay(1000);
		updateNodeArrayValue("2", "label", string[0]);
		await delay(1800);
		setMessage("Now we increment pos and proceed");
		await delay(1800);
		updateNodeValue("3", 1);
		await delay(1800);
		updateNodeIndex("1", 1);
		await delay(700);
		updateNodeIndex("2", 1);
		await delay(1000);
		updateNodeArrayValue("2", "label", string.slice(0, 2));
		await delay(1800);
		setMessage("We keep on repeating this till we reach \\0");
		await delay(1800);
		for (let i = 2; i <= string.length - 1; i++) {
			updateNodeValue("3", i);
			await delay(700);
			updateNodeIndex("1", i);
			await delay(700);
			updateNodeIndex("2", i);
			await delay(1000);
			updateNodeArrayValue("2", "label", string.slice(0, i + 1));
			await delay(700);
		}
		updateNodeIndex("1", null);
		updateNodeIndex("2", null);
		await delay(700);
		setMessage(
			"Finally we add \\0 to tell the compiler the string ends here"
		);
		await delay(1800);
		updateNodeArrayValue("2", "addNull", 1);
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
						className="px-3 p-0 mr-3 shadow border border-primary rounded-xl"
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
				className="border border-primary rounded-3 shadow my-3"
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
