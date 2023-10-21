import React from "react";
import Hero from "./Hero";
import Hands from "./Hands";
import Subjects from "./Subjects";
import Footy from "./Footy";
import Heady from "./Heady";

export default function Home() {
	return (
		<>
			<Heady />
			<Hero />
			<Hands />
			<Subjects />
			<Footy />
		</>
	);
}
