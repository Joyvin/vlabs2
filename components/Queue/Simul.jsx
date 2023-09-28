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
			label: "",
			length: 10,
			type: "target",
			name: "queue",
			addNull: 0,
			address: "1002",
			input: 0,
			selected: 0,
		},
		type: "arrayNode",
	},
	{
		id: "2",
		position: { x: 79, y: 215 },
		data: {
			label: -1,
			type: "target",
			name: "front",
			address: "1102",
			input: 0,
			selected: 0,
		},
		type: "variableNode",
	},
	{
		id: "3",
		position: { x: 200, y: 215 },
		data: {
			label: -1,
			type: "target",
			name: "rear",
			address: "2102",
			input: 0,
			selected: 0,
		},
		type: "variableNode",
	},
	{
		id: "4",
		position: { x: 200, y: 335 },
		data: {
			label: 10,
			type: "target",
			name: "size",
			address: "3102",
			input: 0,
			selected: 0,
		},
		type: "variableNode",
	},
];

export default function Queue() {
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

	const enqueue = async () => {
		let t, a;
		setDis(true);
		setMessage(
			"Lets check if there is space in queue to enqueue the element"
		);
		await delay(1800);
		selectVar("3", 1);
		await delay(1800);
		setMessage("If rear = size - 1 it means queue is full");
		await delay(1800);
		if (rear == 9) {
			setMessage("The Queue is full");
			await delay(1800);
			setMessage("");
			return;
		} else {
			setMessage(
				"Since there is space in the queue we can enqueue the element"
			);
			await delay(1800);
			selectVar("3", 0);
			await delay(1000);
			setMessage("Now we increment rear by 1");
			t = rear + 1;
			setRear(t);
			await delay(1800);
			updateNodeValue("3", t);
			await delay(1800);
			setMessage("Now we insert the element at the rear position");
			await delay(1800);
			updateNodeIndex("1", t);
			await delay(1800);
			a = arr;
			a.push(ele);
			setArr(a);
			updateNodeArrayValue("1", "label", a);
			await delay(1800);
			updateNodeIndex("1", null);
			await delay(1800);
			if (front === -1) {
				setMessage("Since the queue got initiated we set front to 0");
				await delay(1800);
				updateNodeValue("2", 0);
				await delay(1800);
				setFront(0);
			}
			setMessage("");
			await delay(1800);
		}
		setDis(false);
	};

	const dequeue = async () => {
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

	const clear = async () => {
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
					onClick={enqueue}
					type="button"
					class="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Enqueue
				</button>
				<button
					disabled={dis}
					onClick={dequeue}
					type="button"
					class="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Dequeue
				</button>
				<button
					disabled={dis}
					onClick={clear}
					type="button"
					class="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Clear Queue
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
