import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Selection/Test";
import Theory from "@/components/Selection/Theory";
import Simul from "@/components/Selection/Simul";

export default function Selection() {
	const title = "Selection Sort";

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
