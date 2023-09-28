import { Html, Head, Main, NextScript } from "next/document";
import Heady from "@/components/Heady";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-gray-100">
				<Heady />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
