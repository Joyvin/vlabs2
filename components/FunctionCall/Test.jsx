import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What is Call by Value?",
			options: [
				{
					id: "q1_optionA",
					label: "A method for passing references to data.",
				},
				{
					id: "q1_optionB",
					label: "A parameter passing mechanism where a copy of the actual data is passed to a function.",
					correct: true,
				},
				{
					id: "q1_optionC",
					label: "A technique for altering data directly outside a function.",
				},
				{
					id: "q1_optionD",
					label: "A way to pass data to a function without making a copy.",
				},
			],
		},
		{
			id: "q2",
			text: "What happens to the original data when using Call by Value?",
			options: [
				{
					id: "q2_optionA",
					label: "The original data is directly modified by the function.",
				},
				{
					id: "q2_optionB",
					label: "Any changes made to the parameter within the function affect the original data outside the function.",
				},
				{
					id: "q2_optionC",
					label: "The original data remains unchanged; modifications are limited to the local copy within the function.",
					correct: true,
				},
				{
					id: "q2_optionD",
					label: "The original data is deleted after the function call.",
				},
			],
		},
		{
			id: "q3",
			text: "What is Call by Reference?",
			options: [
				{
					id: "q3_optionA",
					label: "A method for making copies of data inside a function.",
				},
				{
					id: "q3_optionB",
					label: "A parameter passing mechanism where data is isolated from the function.",
				},
				{
					id: "q3_optionC",
					label: "A technique for avoiding references to data.",
				},
				{
					id: "q3_optionD",
					label: "A parameter passing mechanism where a reference or memory address of the actual data is passed to a function.",
					correct: true,
				},
			],
		},
		{
			id: "q4",
			text: "What is the primary benefit of Call by Reference?",
			options: [
				{
					id: "q4_optionA",
					label: "It simplifies code and reduces function call overhead.",
				},
				{
					id: "q4_optionB",
					label: "It provides data isolation and preserves the original data.",
					correct: true,
				},
				{
					id: "q4_optionC",
					label: "It allows for in-place modifications of data.",
				},
				{
					id: "q4_optionD",
					label: "It only works with constant values.",
				},
			],
		},
		{
			id: "q5",
			text: "When is Call by Value commonly used?",
			options: [
				{
					id: "q5_optionA",
					label: "When you want to directly modify the original data.",
				},
				{
					id: "q5_optionB",
					label: "When data isolation and preserving the original data are important.",
				},
				{
					id: "q5_optionC",
					label: "When efficiency and avoiding data duplication are critical.",
				},
				{
					id: "q5_optionD",
					label: "When you need to perform in-place modifications of data structures.",
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
