import React from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export default function index() {
	const registerWithGoogle = async () => {
		const authData = await pb
			.collection("users")
			.authWithOAuth2({ provider: "google" });
	};

	return (
		<>
			<div className=""></div>
		</>
	);
}
