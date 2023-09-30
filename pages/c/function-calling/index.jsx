import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/FunctionCall/Test";
import Theory from "@/components/FunctionCall/Theory";
import Simul from "@/components/FunctionCall/Simul";

export default function FnCall() {
	const title = "Function Calling";

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
