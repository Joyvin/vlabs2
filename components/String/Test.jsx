import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is a stack data structure?",
			options: [
				{
					id: "q1_optionA",
					label: "A data structure that follows the LIFO principle.",
					correct: true,
				},
				{
					id: "q1_optionB",
					label: "A data structure that follows the FIFO principle.",
				},
				{
					id: "q1_optionC",
					label: "A data structure for sorting elements.",
				},
			],
		},
		{
			id: "q2",
			text: "Which operation is not typically performed on a stack?",
			options: [
				{ id: "q2_optionA", label: "Push" },
				{ id: "q2_optionB", label: "Pop" },
				{ id: "q2_optionC", label: "Delete", correct: true },
			],
		},
		{
			id: "q3",
			text: "What is the purpose of a stack in computer science?",
			options: [
				{
					id: "q3_optionA",
					label: "To store elements in sorted order.",
				},
				{
					id: "q3_optionB",
					label: "To keep track of function calls and local variables.",
					correct: true,
				},
				{ id: "q3_optionC", label: "To implement search algorithms." },
			],
		},
		{
			id: "q4",
			text: "Which operation retrieves the top element from a stack without removing it?",
			options: [
				{ id: "q4_optionA", label: "Pop" },
				{ id: "q4_optionB", label: "Peek", correct: true },
				{ id: "q4_optionC", label: "Push" },
			],
		},
		{
			id: "q5",
			text: "In a stack, which element is at the bottom?",
			options: [
				{ id: "q5_optionA", label: "First element pushed" },
				{ id: "q5_optionB", label: "Last element pushed" },
				{
					id: "q5_optionC",
					label: "Middle element pushed",
					correct: true,
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
