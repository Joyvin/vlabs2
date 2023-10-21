import { Html, Head, Main, NextScript } from "next/document";
import Heady from "@/components/Heady";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-gray-100">
				{typeof window != "undefined" ? <Heady /> : ""}
				<Main />
				{/* <Footy /> */}
				<NextScript />
			</body>
		</Html>
	);
}
