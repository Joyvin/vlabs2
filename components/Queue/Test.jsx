import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is a queue data structure?",
			options: [
				{
					id: "q1_optionA",
					label: "A data structure that follows the LIFO principle.",
				},
				{
					id: "q1_optionB",
					label: "A data structure that follows the FIFO principle.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A data structure for sorting elements.",
				},
				{
					id: "q1_optionD",
					label: "A data structure for reversing elements.",
				},
			],
		},
		{
			id: "q2",
			text: "Which operation is used to add an element to the rear of a queue?",
			options: [
				{ id: "q2_optionA", label: "Push" },
				{ id: "q2_optionB", label: "Pop" },
				{ id: "q2_optionC", label: "Enqueue", correct: true },
				{ id: "q2_optionD", label: "Dequeue" },
			],
		},
		{
			id: "q3",
			text: "What does FIFO stand for in the context of queues?",
			options: [
				{
					id: "q3_optionA",
					label: "First-In, First-Out",
					correct: true,
				},
				{ id: "q3_optionB", label: "Last-In, Last-Out" },
				{ id: "q3_optionC", label: "Fast Input, Fast Output" },
				{ id: "q3_optionD", label: "First-Out, First-In" },
			],
		},
		{
			id: "q4",
			text: "Which operation removes and returns the front element of a queue?",
			options: [
				{ id: "q4_optionA", label: "Peek" },
				{ id: "q4_optionB", label: "Enqueue" },
				{ id: "q4_optionC", label: "Dequeue", correct: true },
				{ id: "q4_optionD", label: "Push" },
			],
		},
		{
			id: "q5",
			text: "What is the primary use of a queue in computer science?",
			options: [
				{
					id: "q5_optionA",
					label: "To manage tasks in a sequential order.",
					correct: true,
				},
				{ id: "q5_optionB", label: "To store data in sorted order." },
				{ id: "q5_optionC", label: "To implement search algorithms." },
				{
					id: "q5_optionD",
					label: "To reverse the order of elements.",
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
