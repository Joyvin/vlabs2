import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	MarkerType,
} from "reactflow";

import variable from "@/utils/variable";
import Message from "@/components/Message";
import "reactflow/dist/style.css";

const nodeTypes = {
	variableNode: variable,
};

export default function SwapR() {
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [message, setMessage] = useState();
	const [a, setA] = useState();
	const [b, setB] = useState();

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

	const startSwap = async () => {
		setNodes([]);
		setEdges([]);
		let newNode, newEdge;
		setMessage(
			"Lets's start with creating the first variable a with value " + a
		);
		await delay(1800);
		newNode = {
			id: "1",
			position: { x: 79, y: 92 },
			data: {
				label: a,
				type: "target",
				name: "a",
				address: "1002",
				input: 1,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage("Lets's create the second variable b with value " + b);
		await delay(1800);
		newNode = {
			id: "2",
			position: { x: 154, y: 92 },
			data: {
				label: b,
				type: "target",
				name: "b",
				address: "1006",
				input: 1,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage(
			"Now we pass the address of these variables in the swap function"
		);
		await delay(1800);
		setMessage("The function creates a pointer variable x");
		await delay(1800);
		newNode = {
			id: "3",
			position: { x: 154, y: 220 },
			data: {
				label: "",
				type: "source",
				name: "x",
				address: "2002",
				input: 1,
				selected: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage("And stores the address of a in it");
		await delay(1800);
		await updateNodeValue("3", 1002);
		newEdge = {
			id: "e3-1",
			source: "3",
			target: "1",
			animated: true,
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 20,
				height: 20,
				color: "#0d6efd",
			},

			style: {
				stroke: "#0d6efd",
			},
		};
		addEdge(newEdge);
		await delay(1800);
		setMessage("Then the function creates a pointer variable y");
		await delay(1800);
		newNode = {
			id: "4",
			position: { x: 229, y: 220 },
			data: {
				label: "",
				type: "source",
				name: "y",
				address: "2006",
				input: 1,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage("And stores the address of b in it");
		await delay(1800);
		await updateNodeValue("4", 1006);
		newEdge = {
			id: "e4-2",
			source: "4",
			target: "2",
			animated: true,
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 20,
				height: 20,
				color: "#0d6efd",
			},

			style: {
				stroke: "#0d6efd",
			},
		};
		addEdge(newEdge);
		await delay(1800);
		setMessage("Now we create a temporary variable to help in swaping");
		newNode = {
			id: "5",
			position: { x: 192, y: 315 },
			data: {
				label: "",
				type: "target",
				name: "temp",
				address: "2010",
				input: 0,
			},
			type: "variableNode",
		};
		addNode(newNode);
		await delay(1800);
		setMessage("We transfer the value of variable pointed by x in temp");
		await delay(1800);
		await updateNodeValue("5", a);
		await delay(1800);
		setMessage(
			"Then we transfer the value of variable pointed by y (b) in the variable pointed by x (a)"
		);
		await delay(1800);
		await updateNodeValue("1", b);
		await delay(1800);
		setMessage(
			"Finally we pass the value of temp in varibled pointed by y (b)"
		);
		await delay(1800);
		await updateNodeValue("2", a);
		await delay(1800);
		setMessage(
			"What we get to see is even though we passed the variables a & b in the function"
		);
		await delay(2200);
		setMessage("Their original values didnt swap");
		await delay(2200);
		setMessage(
			"Thus calling function by reference helps us change the original values rather than reference"
		);
	};

	const moveBox = (e) => {
		if (e.key === "Enter") {
			if (a === undefined) {
				document.getElementById("aBox").focus();
			} else if (b === undefined) {
				document.getElementById("bBox").focus();
			} else {
				e.target.blur();
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
							moveBox(e);
						}}
						onChange={(e) => {
							setA(e.target.value);
						}}
						type="number"
						className="p-0 mr-3 shadow text-center border border-blue-700 rounded-lg"
						style={{
							height: `50px`,
							width: `50px`,
							outline: `none`,
						}}
						name=""
					/>
					<div className="">a</div>
				</div>
				<div className="">
					<input
						id="bBox"
						onKeyDown={(e) => {
							moveBox(e);
						}}
						onChange={(e) => {
							setB(e.target.value);
						}}
						type="number"
						className="p-0 mr-3 shadow text-center border border-blue-700 rounded-lg"
						style={{
							height: `50px`,
							width: `50px`,
							outline: `none`,
						}}
						name=""
					/>
					<div className="">b</div>
				</div>
				<button
					disabled={a === undefined || b === undefined}
					className="flex items-center mb-5 mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={startSwap}
				>
					Swap
				</button>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-blue-700 rounded-3 shadow my-3"
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
