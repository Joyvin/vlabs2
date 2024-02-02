import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is Selection Sort?",
			options: [
				{
					id: "q1_optionA",
					label: "A method for selecting elements randomly from a list.",
				},
				{
					id: "q1_optionB",
					label: "A simple sorting algorithm that divides the input list into a sorted and an unsorted region, selecting the smallest (or largest) element from the unsorted region and swapping it with the first element of the unsorted region.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A technique for selecting elements based on their index.",
				},
				{
					id: "q1_optionD",
					label: "A way to sort elements in reverse order.",
				},
			],
		},
		{
			id: "q2",
			text: "What is the primary characteristic of Selection Sort's time complexity?",
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
			text: "Why does Selection Sort perform better in terms of swaps compared to Bubble Sort?",
			options: [
				{
					id: "q3_optionA",
					label: "It performs fewer comparisons.",
				},
				{
					id: "q3_optionB",
					label: "It always swaps adjacent elements.",
				},
				{
					id: "q3_optionC",
					label: "It selects the minimum (or maximum) element and swaps it with the first element of the unsorted region, reducing the number of swaps.",
					correct: true,
				},
				{
					id: "q3_optionD",
					label: "It uses a different swapping strategy than Bubble Sort.",
				},
			],
		},
		{
			id: "q4",
			text: "What is the main use case of Selection Sort?",
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
			text: "What happens during each pass in the Selection Sort algorithm?",
			options: [
				{
					id: "q5_optionA",
					label: "Elements are randomly shuffled.",
				},
				{
					id: "q5_optionB",
					label: "The minimum (or maximum) element is selected from the unsorted region and swapped with the first element of the unsorted region.",
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
