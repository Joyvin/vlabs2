import React, { useState, useCallback, useEffect } from "react";
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

const initNodes = [
	{
		id: "1",
		position: { x: 79, y: 92 },
		data: {
			label: "NULL",
			type: "target",
			name: "start",
			address: "1102",
			input: 0,
			gates: 2,
			selected: 0,
		},
		type: "variableNode",
	},
];

export default function LL() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [message, setMessage] = useState();
	const [rear, setRear] = useState(-1);
	const [front, setFront] = useState(-1);
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

	const append = async () => {
		let idx, tx, t, a, newNode;
		setDis(true);
		setMessage(
			"Lets start by creating a node with an element and a next address"
		);
		await delay(1800);
		let e = initNodes[initNodes.length - 1];
		idx = parseInt(e.id);
		let px = (idx + 1).toString();
		tx = e.position.x + 100;
		const nodes = [
			{
				id: (++idx).toString(),
				position: { x: tx, y: 92 },
				data: {
					label: "10",
					name: "ele",
					addNull: 0,
					input: 1,
					selected: 0,
				},

				style: {
					width: 170,
					height: 95,
					backgroundColor: "#c9cee1",
					border: "solid 1px gray",
				},
				type: "group",
			},
			{
				id: (++idx).toString(),
				position: { x: 10, y: 10 },
				data: {
					label: elen,
					name: "ele",
					addNull: 0,
					input: 1,
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
		await delay(1800);
		setDis(false);
	};

	const deleteNode = async () => {
		let a, t;

		setDis(true);
		setMessage("To dequeue first we check if the queue is empty or not");
		await delay(1800);
		selectVar("3", 1);
		await delay(1800);
		setMessage("If rear = -1 it means queue is empty");
		await delay(1800);
		if (rear == -1) {
			setMessage("The Queue is empty can't dequeue anything");
			await delay(1800);
			setMessage("");
			return;
		} else {
			setMessage("Since the queue is not empty we can dequeue");
			await delay(1800);
			selectVar("3", 0);
			await delay(1800);
			setMessage("We dequeue the element at front position");
			await delay(1800);
			updateNodeIndex("1", front);
			await delay(1800);
			a = arr;
			t = a[front];
			a[front] = "";
			setArr(a);
			updateNodeArrayValue("1", "label", a);
			await delay(1800);
			updateNodeIndex("1", null);
			await delay(1800);
			if (rear === front) {
				setMessage(
					"Since the queue is completely empty we set front and rear to -1"
				);
				await delay(1800);
				updateNodeValue("2", -1);
				await delay(1000);
				updateNodeValue("3", -1);
				await delay(1800);
				setFront(-1);
				setRear(-1);
			} else {
				setMessage("Now we increment front by 1");
				await delay(1800);
				t = front + 1;
				setFront(t);
				updateNodeValue("2", t);
				await delay(1800);
			}
			setMessage("");
			await delay(1800);
		}
		setDis(false);
	};

	const reset = async () => {
		setDis(true);
		updateNodeValue("2", -1);
		await delay(1800);
		updateNodeValue("3", -1);
		await delay(1800);
		updateNodeArrayValue("1", "label", []);
		await delay(1800);
		setArr([]);
		setFront(-1);
		setRear(-1);
		await delay(1800);
		setDis(true);
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
							setEle(e.target.value);
						}}
						placeholder="Enter String Value..."
						type="text"
						className="px-3 py-2 p-0 mr-3 shadow border border-blue-700 rounded-lg"
						style={{ outline: `none` }}
						name=""
					/>
				</div>
				<button
					disabled={dis}
					onClick={append}
					type="button"
					class="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Append
				</button>
				<button
					disabled={dis}
					onClick={deleteNode}
					type="button"
					class="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Delete
				</button>
				<button
					disabled={dis}
					onClick={reset}
					type="button"
					class="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Reset
				</button>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-primary rounded-3 shadow-sm my-3"
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
