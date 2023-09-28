import React, { useLayoutEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import axios from "axios";
import "qs";
import Editor from "@monaco-editor/react";
import QueryString from "qs";

const Lab = () => {
	const [value, setValue] = useState("");
	const [output, setOutput] = useState("");

	return (
		<div className="flex overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
			<iframe
				src="https://www.jdoodle.com/embed/v0/6BJ3?rw=1"
				width="100%"
				frameborder="0"
				className="h-[80vh]"
			></iframe>
		</div>
	);
};
export default Lab;
