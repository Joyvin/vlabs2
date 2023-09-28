import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is a linked list in data structures?",
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
					label: "A data structure that consists of nodes, each containing data and a reference to the next node.",
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
			text: "What is the advantage of a singly linked list over an array?",
			options: [
				{
					id: "q2_optionA",
					label: "Singly linked lists allow constant-time access to any element.",
				},
				{
					id: "q2_optionB",
					label: "Singly linked lists have a fixed size.",
				},
				{
					id: "q2_optionC",
					label: "Singly linked lists can easily grow or shrink in size as needed.",
					correct: true,
				},
				{
					id: "q2_optionD",
					label: "Singly linked lists are always sorted.",
				},
			],
		},
		{
			id: "q3",
			text: "What is the main drawback of a singly linked list compared to an array?",
			options: [
				{
					id: "q3_optionA",
					label: "Singly linked lists have slower access times for elements.",
				},
				{
					id: "q3_optionB",
					label: "Singly linked lists use more memory than arrays.",
				},
				{
					id: "q3_optionC",
					label: "Singly linked lists cannot store data of different types.",
				},
				{
					id: "q3_optionD",
					label: "Singly linked lists do not support random access to elements.",
					correct: true,
				},
			],
		},
		{
			id: "q4",
			text: "In a singly linked list, what is the last node called?",
			options: [
				{ id: "q4_optionA", label: "Front node" },
				{ id: "q4_optionB", label: "Head node" },
				{ id: "q4_optionC", label: "Tail node", correct: true },
				{ id: "q4_optionD", label: "Middle node" },
			],
		},
		{
			id: "q5",
			text: "What is a doubly linked list?",
			options: [
				{
					id: "q5_optionA",
					label: "A linked list with nodes that have two data fields.",
				},
				{
					id: "q5_optionB",
					label: "A linked list where each node points to both the next and previous nodes.",
					correct: true,
				},
				{
					id: "q5_optionC",
					label: "A linked list with two separate linked lists.",
				},
				{
					id: "q5_optionD",
					label: "A linked list that can only be traversed in one direction.",
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
