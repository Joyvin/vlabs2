import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Linked List/Lab";
import Test from "@/components/Binary Tree/Test";
import Theory from "@/components/Binary Tree/Theory";
import Simul from "@/components/Binary Tree/Simul";

export default function BinaryTree() {
	const title = "Binary Tree";

	return (
		<>
			<Module
				lab={<Lab />}
				simulation={<Simul />}
				theory={<Theory />}
				test={<Test title={title} />}
				title={title}
			/>
		</>
	);
}
