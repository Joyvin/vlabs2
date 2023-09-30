import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Loop/Test";
import Theory from "@/components/Loop/Theory";
import Simul from "@/components/Loop/Simul";

export default function Loops() {
	const title = "Loops";

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
