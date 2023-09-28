import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Bubble/Test";
import Theory from "@/components/Bubble/Theory";
import Simul from "@/components/Bubble/Simul";

export default function Ascii() {
	const title = "Bubble Sort";

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
