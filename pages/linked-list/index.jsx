import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Linked List/Lab";
import Test from "@/components/Linked List/Test";
import Theory from "@/components/Linked List/Theory";
import Simul from "@/components/Linked List/Simul";

export default function LinkedList() {
	const title = "Linked Lists";

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
