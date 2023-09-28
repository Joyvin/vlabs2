import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is an N-dimensional array?",
			options: [
				{
					id: "q1_optionA",
					label: "A one-dimensional array with multiple elements.",
					correct: false,
				},
				{
					id: "q1_optionB",
					label: "A data structure used in computer science and mathematics to store multi-dimensional data.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "An array that can only store numerical data.",
					correct: false,
				},
				{
					id: "q1_optionD",
					label: "A collection of random data values.",
					correct: false,
				},
			],
		},
		{
			id: "q2",
			text: "What are dimensions in an N-dimensional array?",
			options: [
				{
					id: "q2_optionA",
					label: "Functions that operate on arrays.",
					correct: false,
				},
				{
					id: "q2_optionB",
					label: "A way to specify the length of an array.",
					correct: false,
				},
				{
					id: "q2_optionC",
					label: "Axes or directions that define different aspects of the data's structure.",
					correct: true,
				},
				{
					id: "q2_optionD",
					label: "A type of array with a single dimension.",
					correct: false,
				},
			],
		},
		{
			id: "q3",
			text: "What is indexing in the context of N-dimensional arrays?",
			options: [
				{
					id: "q3_optionA",
					label: "A way to determine the size of an array.",
					correct: false,
				},
				{
					id: "q3_optionB",
					label: "The process of sorting elements in an array.",
					correct: false,
				},
				{
					id: "q3_optionC",
					label: "Accessing elements by specifying their coordinates within the array.",
					correct: true,
				},
				{
					id: "q3_optionD",
					label: "A method to add elements to an array.",
					correct: false,
				},
			],
		},
		{
			id: "q4",
			text: "What is the purpose of slicing in N-dimensional arrays?",
			options: [
				{
					id: "q4_optionA",
					label: "To remove elements from an array.",
					correct: false,
				},
				{
					id: "q4_optionB",
					label: "To shuffle the elements of an array.",
					correct: false,
				},
				{
					id: "q4_optionC",
					label: "To extract a subarray by specifying a range of indices for each dimension.",
					correct: true,
				},
				{
					id: "q4_optionD",
					label: "To resize the array to a different number of dimensions.",
					correct: false,
				},
			],
		},
		{
			id: "q5",
			text: "In what domains or fields are N-dimensional arrays commonly used?",
			options: [
				{
					id: "q5_optionA",
					label: "None; N-dimensional arrays are rarely used in computer science.",
					correct: false,
				},
				{
					id: "q5_optionB",
					label: "Game development and 3D graphics.",
					correct: true,
				},
				{
					id: "q5_optionC",
					label: "Movie production and special effects.",
					correct: false,
				},
				{
					id: "q5_optionD",
					label: "Social media and online marketing.",
					correct: false,
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
