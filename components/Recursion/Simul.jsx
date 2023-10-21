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
import "reactflow/dist/style.css";
import Message from "@/components/Message";

const nodeTypes = {
	variableNode: variable,
};

export default function Factorial() {
	const [message, setMessage] = useState();
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [n, setN] = useState();

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

	const selectNode = (itemId, bool) => {
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? { ...item, data: { ...item.data, ["selected"]: bool } }
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

	const removeNode = (nodeId) => {
		setNodes((prevElements) =>
			prevElements.filter((element) => element.id !== nodeId)
		);
	};

	const startFact = async () => {
		setNodes([]);
		let newNode,
			nodeStack = [],
			next = n;
		let posX = 10;
		let posY = 10;
		let nodeId = 1;
		setMessage(`Lets's start computing the value of ${n} by recursion`);
		await delay(1800);
		for (let i = 0; i < n; i++) {
			i == 0
				? setMessage(`Passing ${next} to the factorial function`)
				: setMessage(`Now we get factorial of ${next}`);
			await delay(1800);
			next != 1 &&
				setMessage(`Which gives ${next} * factorial(${next - 1})`);
			await delay(1800);
			newNode =
				next - 1 != 0
					? {
							id: nodeId.toString(),
							position: { x: posX, y: posY },
							data: { label: next, type: "target", selected: 0 },
							type: "variableNode",
					  }
					: {
							id: nodeId.toString(),
							position: { x: posX, y: posY },
							data: { label: next, type: "target", selected: 0 },
							type: "variableNode",
					  };
			addNode(newNode);
			posX += 75;
			await delay(1800);
			if (next - 1 != 0) {
				newNode = {
					id: (++nodeId).toString(),
					position: { x: posX, y: posY },
					data: {
						label: `factorial(${--next})`,
						type: "target",
						selected: 0,
						boxType: 1,
						fact: 1,
					},
					type: "variableNode",
				};
				nodeId++;
				addNode(newNode);
				posY += 75;
			}
		}
		let j = 1;
		for (let i = n * 2 - 1; i > 1; i--) {
			selectNode(i.toString(), 1);
			selectNode((i - 1).toString(), 1);
			{
				i == n * 2 - 1
					? setMessage("We know factorial of 1 is 1 itself")
					: i % 2 == 0
					? setMessage(`${j} * ${fact(j - 1)} = ${fact(j)}`)
					: setMessage(
							`Thus we get the factorial of ${j}: ${fact(j)}`
					  );
			}
			await updateNodeValue((i - 1).toString(), fact(j));
			removeNode(i.toString());
			selectNode((i - 1).toString(), 0);
			if (i % 2 == 1) {
				j++;
			}
		}
		setMessage(
			`Finally we get the desired answer factorial of ${n} is ${fact(n)}`
		);
	};

	const fact = (n) => {
		let ans = 1;
		for (let i = 1; i <= n; i++) {
			ans *= i;
		}
		return ans;
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
							setN(e.target.value);
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
					<div className="">n</div>
				</div>
				<button
					disabled={n === undefined}
					className="flex items-center mb-5 mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={startFact}
				>
					Run
				</button>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-blue-700 rounded-3xl shadow my-3"
				style={{ height: "70vh" }}
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
