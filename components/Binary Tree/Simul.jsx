import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	MarkerType,
	Position,
} from "reactflow";
import array from "@/utils/array";
import variable from "@/utils/variable";
import "reactflow/dist/style.css";
import Message from "../Message";

const nodeTypes = {
	variableNode: variable,
	arrayNode: array,
};

class Node {
	constructor(data) {
		this.id = null;
		this.data = data;
		this.left = null;
		this.right = null;
		this.x = null;
		this.y = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			newNode.id = 0;
			newNode.x = 100;
			newNode.y = 92;

			this.root = newNode;
		} else {
			let currentNode = this.root;

			while (currentNode !== null) {
				if (value > currentNode.data) {
					if (currentNode.right === null) {
						newNode.x = currentNode.x + 275;
						newNode.y = currentNode.y + 120;
						newNode.id = currentNode.id * 2 + 2;
						currentNode.right = newNode;
						break;
					} else {
						currentNode = currentNode.right;
					}
				} else if (value < currentNode.data) {
					if (currentNode.left === null) {
						newNode.x = currentNode.x - 275;
						newNode.y = currentNode.y + 120;
						newNode.id = currentNode.id * 2 + 1;
						currentNode.left = newNode;
						break;
					} else {
						currentNode = currentNode.left;
					}
				} else {
					// If the value is equal, you can decide whether to ignore, update, or handle it accordingly.
					// In this case, I'm ignoring duplicates.
					console.log("Ignoring duplicate value:", value);
					break;
				}
			}
		}
	}
}

let bt = new BinaryTree();

const initNodes = [];

export default function Tree() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [message, setMessage] = useState();
	const [root, setRoot] = useState(null);
	const [ele, setEle] = useState();
	const [dis, setDis] = useState(false);
	const [arr, setArr] = useState([]);

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

	const selectVar = async (itemId, val) => {
		setNodes((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId
					? { ...item, data: { ...item.data, ["selected"]: val } }
					: item
			)
		);
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

	const append = () => {
		var num = parseInt(ele);

		if (!bt.root) {
			const nodes = [
				{
					id: "0",
					position: { x: 100, y: 92 },
					data: {
						label: "1000",
						name: "node",
						addNull: 0,
						input: 0,
						selected: 0,
					},

					style: {
						width: 255,
						height: 100,
						backgroundColor: "#c9cee1",
						border: "solid 1px gray",
					},
					type: "output",
					targetPosition: "top",
				},
				{
					id: "0d",
					position: { x: 100, y: 25 },
					data: {
						label: ele,
						name: "ele",
						addNull: 0,
						input: 0,
						type: "target",
						selected: 0,
					},
					parentNode: "0",
					extent: "parent",
					type: "variableNode",
				},
				{
					id: "0r",
					position: { x: 190, y: 25 },
					data: {
						label: "NULL",
						name: "right",
						addNull: 0,
						input: 1,
						type: "source",
						selected: 0,
						pos: "r",
					},
					parentNode: "0",
					extent: "parent",
					type: "variableNode",
				},
				{
					id: "0l",
					position: { x: 10, y: 25 },
					data: {
						label: "NULL",
						name: "left",
						addNull: 0,
						input: 1,
						type: "source",
						selected: 0,
						pos: "l",
					},
					parentNode: "0",
					extent: "parent",
					type: "variableNode",
				},
			];
			nodes.forEach((node) => {
				addNode(node);
			});
		} else {
			var prevQ;
			var idx = 0;
			var q = bt.root;
			var side = "";
			while (q != null) {
				prevQ = q;
				if (ele > q.data) {
					idx = idx * 2 + 2;
					q = q.right;
					side = "r";
				} else {
					idx = idx * 2 + 1;
					q = q.left;
					side = "l";
				}
			}

			var direction = side == "r" ? 1 : -1;

			const nodes = [
				{
					id: idx.toString(),
					position: {
						x: prevQ.x + 275 * direction,
						y: prevQ.y + 120,
					},
					data: {
						label: (1000 + idx * 12).toString(),
						name: "node",
						addNull: 0,
						input: 0,
						selected: 0,
					},

					style: {
						width: 255,
						height: 100,
						backgroundColor: "#c9cee1",
						border: "solid 1px gray",
					},
					type: "output",
					targetPosition: "top",
				},
				{
					id: idx.toString() + "d",
					position: { x: 100, y: 25 },
					data: {
						label: ele,
						name: "ele",
						addNull: 0,
						input: 0,
						type: "target",
						selected: 0,
					},
					parentNode: idx.toString(),
					extent: "parent",
					type: "variableNode",
				},
				{
					id: idx.toString() + "r",
					position: { x: 190, y: 25 },
					data: {
						label: "NULL",
						name: "right",
						addNull: 0,
						input: 1,
						type: "source",
						selected: 0,
						pos: "r",
					},
					parentNode: idx.toString(),
					extent: "parent",
					type: "variableNode",
				},
				{
					id: idx.toString() + "l",
					position: { x: 10, y: 25 },
					data: {
						label: "NULL",
						name: "left",
						addNull: 0,
						input: 1,
						type: "source",
						selected: 0,
						pos: "l",
					},
					parentNode: idx.toString(),
					extent: "parent",
					type: "variableNode",
				},
			];
			nodes.forEach((node) => {
				addNode(node);
			});

			updateNodeValue(
				prevQ.id.toString() + side,
				(1000 + idx * 12).toString()
			);

			const newEdge = {
				id: "e" + idx.toString(),
				source: prevQ.id.toString() + side,
				target: idx.toString(),
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
		}

		bt.insert(num);
	};

	const append2 = async () => {
		let idx, tx, t, a, newNode;

		if (front === 0) {
			const nodes = [
				{
					id: (++idx).toString(),
					position: { x: 150, y: 92 },
					data: {
						label: "1000".toString(),
						name: "node",
						addNull: 0,
						input: 0,
						selected: 0,
					},

					style: {
						width: 170,
						height: 95,
						backgroundColor: "#c9cee1",
						border: "solid 1px gray",
					},
					type: "output",
					targetPosition: "left",
				},
				{
					id: (++idx).toString(),
					position: { x: 10, y: 10 },
					data: {
						label: ele,
						name: "ele",
						addNull: 0,
						input: 0,
						type: "target",
						selected: 0,
						pos: "l",
					},
					parentNode: px,
					extent: "parent",
					type: "variableNode",
				},
				{
					id: (++idx).toString(),
					position: { x: 100, y: 10 },
					data: {
						label: "NULL",
						name: "next",
						addNull: 0,
						input: 1,
						type: "source",
						selected: 0,
						pos: "r",
					},
					parentNode: px,
					extent: "parent",
					type: "variableNode",
				},
			];
			nodes.forEach((node) => {
				addNode(node);
			});
		}

		setDis(false);
		setMessage();
	};

	const deleteNode = async () => {
		let a, t;

		setDis(true);
		setMessage(
			"First we traverse each node from start till we reach the node containing next as NULL"
		);
		await delay(2500);
		setMessage("Simultaneously we also keep track of the previous node");
		await delay(1800);
		setMessage("Now we make the next value of last previous node as NULL");
		await delay(1800);
		setEdges((prevArray) => prevArray.slice(0, -1));
		await delay(1000);
		updateNodeValue((rear - 3).toString(), "NULL");
		await delay(1800);
		setMessage("Now we free the last node");
		await delay(1800);
		setNodes((prevArray) => prevArray.slice(0, -3));
		setMessage();
		setDis(false);
	};

	const reset = async () => {
		setDis(true);
		setNodes(initNodes);
		setEdges([]);
		setRear(0);
		await delay(1800);
		setDis(false);
	};

	return (
		<>
			<div className="block md:flex items-center">
				<div className="">
					<input
						id="aBox"
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								e.target.blur();
							}
						}}
						onChange={(e) => {
							setEle(e.target.value);
						}}
						placeholder="Enter String Value..."
						type="text"
						className="px-3 py-2 p-0 mr-3 shadow border border-blue-700 rounded-lg"
						style={{ outline: `none` }}
						name=""
					/>
				</div>
				<div className="flex justify-start my-3">
					<button
						disabled={dis}
						onClick={append}
						type="button"
						className="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Append
					</button>
					<button
						disabled={dis}
						onClick={deleteNode}
						type="button"
						className="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Delete
					</button>
					<button
						disabled={dis}
						onClick={reset}
						type="button"
						className="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Reset
					</button>
				</div>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-primary rounded-3 shadow-sm my-3"
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
