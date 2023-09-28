import React from "react";
import Module from "@/components/Module";
import Lab from "@/components/Stack/Lab";
import Test from "@/components/ASCII/Test";
import Theory from "@/components/ASCII/Theory";
import Simul from "@/components/ASCII/Simul";

export default function Ascii() {
	const title = "ASCII";

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
