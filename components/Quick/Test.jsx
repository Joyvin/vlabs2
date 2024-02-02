import React from "react";
import TestLayout from "../TestLayout";

function QuickSortTest({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is Quick Sort?",
			options: [
				{
					id: "q1_optionA",
					label: "A method for quickly selecting elements from a list.",
				},
				{
					id: "q1_optionB",
					label: "A sorting algorithm that uses a divide-and-conquer strategy by selecting a 'pivot' element and partitioning the other elements into two subarrays.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A technique for quick indexing of array elements.",
				},
				{
					id: "q1_optionD",
					label: "A way to sort elements in reverse order.",
				},
			],
		},
		{
			id: "q2",
			text: "What is the primary characteristic of Quick Sort's time complexity?",
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
					label: "Average time complexity O(n log n), but worst-case time complexity O(n^2).",
					correct: true,
				},
			],
		},
		{
			id: "q3",
			text: "Why is Quick Sort generally more efficient than Bubble Sort and Selection Sort?",
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
					label: "It utilizes a divide-and-conquer strategy and has an average time complexity of O(n log n).",
					correct: true,
				},
				{
					id: "q3_optionD",
					label: "It uses a different swapping strategy than Bubble Sort and Selection Sort.",
				},
			],
		},
		{
			id: "q4",
			text: "What is the main idea behind the partitioning step in Quick Sort?",
			options: [
				{
					id: "q4_optionA",
					label: "To select a pivot element randomly.",
				},
				{
					id: "q4_optionB",
					label: "To compare all elements with each other.",
				},
				{
					id: "q4_optionC",
					label: "To choose a pivot and rearrange the elements in such a way that elements smaller than the pivot are on the left, and elements greater than the pivot are on the right.",
					correct: true,
				},
				{
					id: "q4_optionD",
					label: "To swap the first and last elements of the array.",
				},
			],
		},
		{
			id: "q5",
			text: "What is the key advantage of Quick Sort over Bubble Sort and Selection Sort?",
			options: [
				{
					id: "q5_optionA",
					label: "It always performs in linear time.",
				},
				{
					id: "q5_optionB",
					label: "It requires fewer passes through the entire array.",
				},
				{
					id: "q5_optionC",
					label: "It has a faster average-case time complexity of O(n log n).",
					correct: true,
				},
				{
					id: "q5_optionD",
					label: "It is easier to implement.",
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

export default QuickSortTest;
