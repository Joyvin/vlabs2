import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Queue/Lab";
import Test from "@/components/Queue/Test";
import Theory from "@/components/Queue/Theory";
import Simul from "@/components/Queue/Simul";

export default function Queue() {
	const title = "Queues";

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
