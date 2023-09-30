// pages/api/getSubdirectories.js

import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
	const subpagesDirectory = req.body.dir;
	const directoryPath = path.join(process.cwd(), subpagesDirectory);

	const toTitleCase = (name) => {
		name = name.replaceAll("-", " ");
		return name
			.toLowerCase()
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	try {
		const items = await fs.readdir(directoryPath, { withFileTypes: true });

		// Filter out directories only
		const subdirs = items
			.filter((item) => item.isDirectory())
			.map((item) => toTitleCase(item.name));

		res.status(200).json({ subdirs });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred" });
	}
}
