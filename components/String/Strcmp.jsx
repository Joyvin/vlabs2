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

export default function Strcmp() {
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [message, setMessage] = useState();
	const [string1, setString1] = useState();
	const [string2, setString2] = useState();

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
		let newNode;
		setMessage("Lets's start with creating the str1 and str2");
		await delay(1800);
		newNode = {
			id: "1",
			position: { x: 79, y: 92 },
			data: {
				label: string1,
				type: "target",
				name: "str1",
				addNull: 1,
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
				label: string2,
				type: "target",
				name: "str2",
				addNull: 1,
				address: "1086",
				input: 0,
				selected: 0,
			},
			type: "arrayNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage(
			"We traverse the strings from left to right simultaneously to compare"
		);
		await delay(1800);
		setMessage(
			"We'll create a variable pos to track the position of the characters in the string and set it to zero"
		);
		await delay(2500);
		newNode = {
			id: "3",
			position: { x: 79, y: 270 },
			data: {
				label: 0,
				type: "target",
				name: "pos",
				address: "1102",
				input: 0,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage("Lets also create a variable to store the answer");
		await delay(1800);
		newNode = {
			id: "4",
			position: { x: 180, y: 315 },
			data: {
				label: "",
				type: "target",
				name: "Is Equal",
				address: "1108",
				input: 0,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		setMessage(
			"First we check wheter first characters of both strings are same or not"
		);
		await delay(1800);
		updateNodeIndex("1", 0);
		updateNodeIndex("2", 0);
		await delay(1800);
		if (string1[0] == string2[0]) {
			setMessage("Both characters are same so we move ahead");
			await delay(1800);
		} else {
			setMessage(
				`Since ${string1[0]} and ${string2[0]} are npt same both strings are not equal`
			);
			await delay(1800);
			setMessage(`Thus the answer is false and we stop the code`);
			await delay(1800);
			updateNodeValue("4", "False");
			return;
		}
		let smallS =
			string1.length >= string2.length ? string2.length : string1.length;
		console.log(smallS);
		for (let i = 1; i < smallS; i++) {
			updateNodeValue("3", i);
			await delay(1800);
			updateNodeIndex("1", i);
			updateNodeIndex("2", i);
			await delay(1800);
			if (string1[i] == string2[i]) {
				setMessage("Both characters are same so we move ahead");
				await delay(1800);
			} else {
				setMessage(
					`Since ${string1[i]} and ${string2[i]} are not same both strings are not equal`
				);
				await delay(1800);
				setMessage(`Thus the answer is false and we stop the code`);
				await delay(1800);
				updateNodeValue("4", "False");
				updateNodeIndex("1", null);
				updateNodeIndex("2", null);
				return;
			}
		}
		if (string1.length == string2.length) {
			setMessage(
				`Since every characters matched each other strings are equal`
			);
			await delay(2000);
			updateNodeValue("4", "True");
			updateNodeIndex("1", null);
			updateNodeIndex("2", null);
			return;
		} else {
			setMessage(
				`Since length of the strings are not same both string are not equal`
			);
			await delay(2000);
			updateNodeValue("4", "False");
			updateNodeIndex("1", null);
			updateNodeIndex("2", null);
			return;
		}
	};

	return (
		<>
			<div className="flex items-center">
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
								setString1(e.target.value);
							}}
							placeholder="Enter String Value..."
							type="text"
							className="px-3 p-0 mr-3 shadow-sm border border-blue-700 rounded-xl"
							style={{ height: `50px`, outline: `none` }}
							name=""
						/>
						<div className="">Str1</div>
					</div>
					<div className="mb-3 mr-3"> == </div>
					<div className="">
						<input
							id="aBox"
							onKeyDown={(e) => {
								if (e.key == "Enter") {
									e.target.blur();
								}
							}}
							onChange={(e) => {
								setString2(e.target.value);
							}}
							placeholder="Enter String Value..."
							type="text"
							className="px-3 p-0 mr-3 shadow border border-blue-700 rounded-xl"
							style={{ height: `50px`, outline: `none` }}
							name=""
						/>
						<div className="">Str2</div>
					</div>
				</div>
				<button
					disabled={string1 == undefined || string2 == undefined}
					onClick={startCompute}
					type="button"
					className="flex items-center mb-5 mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Calculate
				</button>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-blue-700 rounded-xl shadow my-3"
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
