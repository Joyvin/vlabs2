import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Recursion/Test";
import Theory from "@/components/Recursion/Theory";
import Simul from "@/components/Recursion/Simul";

export default function Ascii() {
	const title = "Recursion";

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
