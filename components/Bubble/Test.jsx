import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is Bubble Sort?",
			options: [
				{
					id: "q1_optionA",
					label: "A method for blowing bubbles in water.",
				},
				{
					id: "q1_optionB",
					label: "A simple sorting algorithm that repeatedly compares and swaps adjacent elements if they are in the wrong order.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A technique for finding the largest number in an array.",
				},
				{
					id: "q1_optionD",
					label: "A way to sort elements in reverse order.",
				},
			],
		},
		{
			id: "q2",
			text: "What is the primary characteristic of Bubble Sort's time complexity?",
			options: [
				{
					id: "q2_optionA",
					label: "Constant time complexity O(1).",
				},
				{
					id: "q2_optionB",
					label: "Linear time complexity O(n).",
				},
				{
					id: "q2_optionC",
					label: "Exponential time complexity O(2^n).",
				},
				{
					id: "q2_optionD",
					label: "Quadratic time complexity O(n^2).",
					correct: true,
				},
			],
		},
		{
			id: "q3",
			text: "Why is Bubble Sort generally considered inefficient for large lists?",
			options: [
				{
					id: "q3_optionA",
					label: "It has a very low space complexity.",
				},
				{
					id: "q3_optionB",
					label: "It requires a lot of memory.",
				},
				{
					id: "q3_optionC",
					label: "It has a time complexity that grows quadratically with the size of the list, making it slow for large lists.",
					correct: true,
				},
				{
					id: "q3_optionD",
					label: "It is not suitable for sorting at all.",
				},
			],
		},
		{
			id: "q4",
			text: "What is the main use case of Bubble Sort?",
			options: [
				{
					id: "q4_optionA",
					label: "Sorting large datasets efficiently.",
				},
				{
					id: "q4_optionB",
					label: "Debugging and verifying other sorting algorithms.",
					correct: true,
				},
				{
					id: "q4_optionC",
					label: "Sorting lists in reverse order.",
				},
				{
					id: "q4_optionD",
					label: "None of the above.",
				},
			],
		},
		{
			id: "q5",
			text: "What happens during each pass in the Bubble Sort algorithm?",
			options: [
				{
					id: "q5_optionA",
					label: "Elements are randomly shuffled.",
				},
				{
					id: "q5_optionB",
					label: "Elements are compared, and adjacent elements are swapped if they are in the wrong order.",
					correct: true,
				},
				{
					id: "q5_optionC",
					label: "Elements are grouped into pairs and compared.",
				},
				{
					id: "q5_optionD",
					label: "Elements are sorted into separate subarrays.",
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
