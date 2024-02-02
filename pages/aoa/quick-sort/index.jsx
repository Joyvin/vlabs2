import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Quick/Test";
import Theory from "@/components/Quick/Theory";
import Simul from "@/components/Quick/Simul";

export default function Quick() {
	const title = "Quick Sort";

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
