import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is Recursion?",
			options: [
				{
					id: "q1_optionA",
					label: "A method for performing repetitive tasks.",
				},
				{
					id: "q1_optionB",
					label: "A programming technique where a function calls itself to solve a problem.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A way to avoid using loops in programming.",
				},
				{
					id: "q1_optionD",
					label: "A technique for calculating large mathematical equations.",
				},
			],
		},
		{
			id: "q2",
			text: "What is the base case in recursion?",
			options: [
				{
					id: "q2_optionA",
					label: "The first step in a recursive function.",
				},
				{
					id: "q2_optionB",
					label: "A condition that determines when the recursion should stop and return a result.",
					correct: true,
				},
				{
					id: "q2_optionC",
					label: "The final step in a recursive function.",
				},
				{
					id: "q2_optionD",
					label: "A way to optimize recursive functions.",
				},
			],
		},
		{
			id: "q3",
			text: "What is the process of recursion?",
			options: [
				{
					id: "q3_optionA",
					label: "It involves using a loop to iterate through a list of elements.",
				},
				{
					id: "q3_optionB",
					label: "It requires creating multiple copies of a function.",
				},
				{
					id: "q3_optionC",
					label: "A function solves a problem by breaking it down into smaller, similar subproblems and calls itself with those subproblems.",
					correct: true,
				},
				{
					id: "q3_optionD",
					label: "It always results in a stack overflow error.",
				},
			],
		},
		{
			id: "q4",
			text: "What is the importance of the base case in recursion?",
			options: [
				{
					id: "q4_optionA",
					label: "The base case is optional and can be omitted in recursive functions.",
				},
				{
					id: "q4_optionB",
					label: "It determines the maximum depth of recursion allowed in a program.",
				},
				{
					id: "q4_optionC",
					label: "The base case provides a way to terminate the recursion and prevent infinite loops.",
					correct: true,
				},
				{
					id: "q4_optionD",
					label: "The base case is used to optimize recursive algorithms.",
				},
			],
		},
		{
			id: "q5",
			text: "In what scenarios is recursion commonly used?",
			options: [
				{
					id: "q5_optionA",
					label: "Recursion is primarily used for solving simple problems.",
				},
				{
					id: "q5_optionB",
					label: "It is used when performance and efficiency are critical.",
				},
				{
					id: "q5_optionC",
					label: "Recursion is employed in situations where a problem can be broken down into smaller, similar subproblems.",
					correct: true,
				},
				{
					id: "q5_optionD",
					label: "It is mainly used for solving mathematical equations.",
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
