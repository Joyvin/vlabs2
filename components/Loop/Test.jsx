import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What are loops in C?",
			options: [
				{
					id: "q1_optionA",
					label: "A type of data structure.",
				},
				{
					id: "q1_optionB",
					label: "Control structures for repeating a block of code based on a condition.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A way to perform mathematical calculations.",
				},
				{
					id: "q1_optionD",
					label: "A type of variable in C.",
				},
			],
		},
		{
			id: "q2",
			text: "Which type of loop in C checks the condition before each iteration?",
			options: [
				{
					id: "q2_optionA",
					label: "For Loop.",
				},
				{
					id: "q2_optionB",
					label: "Do-While Loop.",
				},
				{
					id: "q2_optionC",
					label: "While Loop.",
					correct: true,
				},
				{
					id: "q2_optionD",
					label: "None of the above.",
				},
			],
		},
		{
			id: "q3",
			text: "What is the purpose of the 'break' statement in loops?",
			options: [
				{
					id: "q3_optionA",
					label: "To skip the current iteration and continue to the next one.",
				},
				{
					id: "q3_optionB",
					label: "To exit the loop prematurely based on a certain condition.",
					correct: true,
				},
				{
					id: "q3_optionC",
					label: "To increment a loop counter.",
				},
				{
					id: "q3_optionD",
					label: "To repeat the loop indefinitely.",
				},
			],
		},
		{
			id: "q4",
			text: "Which type of loop in C guarantees that the loop body will be executed at least once?",
			options: [
				{
					id: "q4_optionA",
					label: "While Loop.",
				},
				{
					id: "q4_optionB",
					label: "For Loop.",
				},
				{
					id: "q4_optionC",
					label: "Do-While Loop.",
					correct: true,
				},
				{
					id: "q4_optionD",
					label: "None of the above.",
				},
			],
		},
		{
			id: "q5",
			text: "What is a common use case for a 'for' loop in C?",
			options: [
				{
					id: "q5_optionA",
					label: "Executing a block of code repeatedly until a condition is false.",
				},
				{
					id: "q5_optionB",
					label: "Iterating over elements in an array or sequence.",
					correct: true,
				},
				{
					id: "q5_optionC",
					label: "Performing a specific task exactly once.",
				},
				{
					id: "q5_optionD",
					label: "Exiting the program.",
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
