import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Stack/Test";
import Theory from "@/components/Stack/Theory";
import Simul from "@/components/Stack/Simul";

export default function Stack() {
	const title = "Stacks";

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
