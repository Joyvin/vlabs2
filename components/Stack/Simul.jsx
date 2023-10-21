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
			name: "stack",
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
			name: "tos",
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
			label: 10,
			type: "target",
			name: "size",
			address: "2102",
			input: 0,
			selected: 0,
		},
		type: "variableNode",
	},
];

export default function Simul() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);
	const [message, setMessage] = useState();
	const [dis, setDis] = useState(false);
	const [tos, setTos] = useState(-1);
	const [ele, setEle] = useState();
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

	const push = async () => {
		setDis(true);
		setMessage("Lets check if there is space in stack to push the element");
		await delay(1800);
		selectVar("2", 1);
		selectVar("3", 1);
		await delay(1800);
		if (tos == 9) {
			setMessage("The Stack is full");
			await delay(1800);
			setMessage("");
			return;
		} else {
			setMessage(
				"Since there is space in the stack we can push the element"
			);
			await delay(1800);
			selectVar("2", 0);
			selectVar("3", 0);
			await delay(1000);
			setMessage("Now we increment tos by 1");
			let t = tos + 1;
			setTos(t);
			await delay(1800);
			updateNodeValue("2", t);
			await delay(1800);
			setMessage("Push the element on top of the stack");
			await delay(1800);
			updateNodeIndex("1", t);
			await delay(1800);
			let a = arr;
			a.push(ele);
			setArr(a);
			updateNodeArrayValue("1", "label", a);
			await delay(1800);
			updateNodeIndex("1", null);
			await delay(1800);
			setMessage("");
		}
		setDis(false);
	};

	const pop = async () => {
		setDis(true);
		setMessage("To pop first we check if the stack is empty or not");
		await delay(1800);
		selectVar("2", 1);
		await delay(1800);
		if (tos == -1) {
			setMessage("The Stack is empty can't pop anything");
			await delay(1800);
			setMessage("");
			return;
		} else {
			setMessage("Since the stack is not empty we can pop");
			await delay(1800);
			selectVar("2", 0);
			await delay(1000);
			updateNodeIndex("1", tos);
			await delay(1800);
			let a = arr;
			a.pop();
			setArr(a);
			updateNodeArrayValue("1", "label", a);
			await delay(1800);
			updateNodeIndex("1", null);
			await delay(1800);
			setMessage("Now we decrement tos by 1");
			await delay(1800);
			let t = tos - 1;
			console.log(t);
			setTos(t);
			updateNodeValue("2", t);
			await delay(1800);
			setMessage("");
		}
		setDis(false);
	};

	const clear = async () => {
		setDis(true);
		setArr([]);
		setTos(-1);
		updateNodeArrayValue("1", "label", []);
		await delay(1800);
		updateNodeValue("2", -1);
		await delay(1000);
		setDis(false);
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
					onClick={push}
					type="button"
					className="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Push
				</button>
				<button
					disabled={dis}
					onClick={pop}
					type="button"
					className="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Pop
				</button>
				<button
					disabled={dis}
					onClick={clear}
					type="button"
					className="flex items-center mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Clear Stack
				</button>
			</div>
			{message && <Message value={message} />}
			<div
				className="border border-blue-700 rounded-xl shadow my-3"
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
