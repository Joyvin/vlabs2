import React, { memo, useEffect } from "react";
import { Handle, Position } from "reactflow";

const Variable = memo(({ data, isConnectable, setting }) => {
	return (
		<>
			<div className="text-dark">
				{data.input ? (
					data.gates && data.gates !== 1 ? (
						<div className="">
							<Handle
								type="target"
								position={Position.Left}
								style={{ background: "#555" }}
								onConnect={(params) =>
									console.log("handle onConnect", params)
								}
								isConnectable={isConnectable}
							/>
							<Handle
								type="source"
								position={Position.Right}
								style={{ background: "#555" }}
								onConnect={(params) =>
									console.log("handle onConnect", params)
								}
								isConnectable={isConnectable}
							/>
						</div>
					) : (
						<Handle
							type={data.type}
							position={
								(data.pos && data.pos === "l") || !data.pos
									? Position.Left
									: Position.Right
							}
							style={{ background: "#555" }}
							onConnect={(params) =>
								console.log("handle onConnect", params)
							}
							isConnectable={isConnectable}
						/>
					)
				) : (
					""
				)}

				<div className="text-gray-300" style={{ fontSize: "x-small" }}>
					<sub>{data.address}</sub>
				</div>
				<div
					className={`flex p-2 items-center justify-center shadow- rounded-lg border border-blue-700 ${
						data.selected ? "bg-blue-700 text-white" : "bg-white"
					}`}
					style={{ minWidth: "50px", minHeight: "50px" }}
				>
					{data.label}
				</div>
				<div className="">{data.name}</div>
			</div>
		</>
	);
});

export default Variable;
