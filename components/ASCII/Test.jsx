import React, { useState } from "react";
import TestLayout from "../TestLayout";

function Test({ title }) {
	const questions = [
		{
			id: "q1",
			text: "What does ASCII stand for?",
			options: [
				{
					id: "q1_optionA",
					label: "American Standard Code for Information Exchange.",
				},
				{
					id: "q1_optionB",
					label: "Alphanumeric Standard Code for International Information.",
				},
				{
					id: "q1_optionC",
					label: "American Standard Code for Information Interchange.",
					correct: true,
				},
				{
					id: "q1_optionD",
					label: "All Standard Characters for Information Integration.",
				},
			],
		},
		{
			id: "q2",
			text: "How many characters are defined in the standard ASCII character set?",
			options: [
				{
					id: "q2_optionA",
					label: "64",
				},
				{
					id: "q2_optionB",
					label: "128",
					correct: true,
				},
				{
					id: "q2_optionC",
					label: "256",
				},
				{
					id: "q2_optionD",
					label: "512",
				},
			],
		},
		{
			id: "q3",
			text: "What is the range of numerical values assigned to ASCII characters?",
			options: [
				{
					id: "q3_optionA",
					label: "0 to 63",
				},
				{
					id: "q3_optionB",
					label: "64 to 127",
				},
				{
					id: "q3_optionC",
					label: "0 to 255",
				},
				{
					id: "q3_optionD",
					label: "0 to 127",
					correct: true,
				},
			],
		},
		{
			id: "q4",
			text: "Which of the following is true about the ASCII code for the letter 'A'?",
			options: [
				{
					id: "q4_optionA",
					label: "It is 65.",
					correct: true,
				},
				{
					id: "q4_optionB",
					label: "It is 64.",
				},
				{
					id: "q4_optionC",
					label: "It is 66.",
				},
				{
					id: "q4_optionD",
					label: "It is 67.",
				},
			],
		},
		{
			id: "q5",
			text: "What is the purpose of ASCII code in computing?",
			options: [
				{
					id: "q5_optionA",
					label: "To represent images and graphics.",
				},
				{
					id: "q5_optionB",
					label: "To encode audio data.",
				},
				{
					id: "q5_optionC",
					label: "To encode and represent text characters.",
					correct: true,
				},
				{
					id: "q5_optionD",
					label: "To encrypt and secure data.",
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
