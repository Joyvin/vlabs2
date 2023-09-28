import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/Matrix/Test";
import Theory from "@/components/Matrix/Theory";
import Simul from "@/components/Matrix/Simul";

export default function Matrix() {
	const title = "N-Dimension Array";

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
