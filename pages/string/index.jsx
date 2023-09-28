import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/String/Test";
import Theory from "@/components/String/Theory";
import Simul from "@/components/String/Simul";

export default function StringFunc() {
	const title = "String Functions";

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
