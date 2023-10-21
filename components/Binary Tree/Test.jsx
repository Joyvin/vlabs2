import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is a binary tree in data structures?",
			options: [
				{
					id: "q1_optionA",
					label: "A data structure that stores elements in a random order.",
				},
				{
					id: "q1_optionB",
					label: "A data structure that stores elements in a sequential order.",
				},
				{
					id: "q1_optionC",
					label: "A hierarchical data structure consisting of nodes, each containing data and references to left and right child nodes.",
					correct: true,
				},
				{
					id: "q1_optionD",
					label: "A data structure that stores elements in a balanced tree.",
				},
			],
		},
		{
			id: "q2",
			text: "What is the advantage of a binary tree over an array for searching?",
			options: [
				{
					id: "q2_optionA",
					label: "Binary trees have faster search times than arrays.",
				},
				{
					id: "q2_optionB",
					label: "Binary trees have a fixed size.",
				},
				{
					id: "q2_optionC",
					label: "Binary trees allow for constant-time access to any element.",
				},
				{
					id: "q2_optionD",
					label: "Binary trees provide efficient hierarchical searching, which is not possible with arrays.",
					correct: true,
				},
			],
		},
		{
			id: "q3",
			text: "What is a common application of binary search trees (BSTs)?",
			options: [
				{
					id: "q3_optionA",
					label: "Storing elements in a random order.",
				},
				{
					id: "q3_optionB",
					label: "Creating data structures that allow elements to be sorted quickly.",
					correct: true,
				},
				{
					id: "q3_optionC",
					label: "Using a fixed-size data structure.",
				},
				{
					id: "q3_optionD",
					label: "Storing data in a balanced tree structure.",
				},
			],
		},
		{
			id: "q4",
			text: "In a binary tree, what is the term for a node with no children?",
			options: [
				{ id: "q4_optionA", label: "Leaf node", correct: true },
				{ id: "q4_optionB", label: "Root node" },
				{ id: "q4_optionC", label: "Parent node" },
				{ id: "q4_optionD", label: "Internal node" },
			],
		},
		{
			id: "q5",
			text: "What is the key property of a binary search tree (BST) that makes it suitable for efficient searching?",
			options: [
				{
					id: "q5_optionA",
					label: "The ability to have an unlimited number of child nodes for each parent node.",
				},
				{
					id: "q5_optionB",
					label: "The ability to store data of different types in the tree.",
				},
				{
					id: "q5_optionC",
					label: "The requirement that all nodes in the left subtree have data less than the parent node, and all nodes in the right subtree have data greater than the parent node.",
					correct: true,
				},
				{
					id: "q5_optionD",
					label: "The ability to have bidirectional references between nodes.",
				},
			],
		},
	];

	return (
		<>
			<TestLayout title={title} questions={questions} />
		</>
	);
}

export default Test;
