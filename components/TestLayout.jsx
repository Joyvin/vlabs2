import React, { useState } from "react";
import { Check, X } from "lucide-react";

function TestLayout({ title, questions }) {
	const [answers, setAnswers] = useState({});
	const [submit, setSubmit] = useState(false);
	const [cAns, setCAns] = useState({});
	const [score, setScore] = useState(0);

	const handleOptionChange = (questionId, option) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: option.id,
		}));

		setCAns((prevAnswers) => ({
			...prevAnswers,
			[questionId]: option.correct ? true : false,
		}));
		console.log(answers, cAns);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		const s = Object.values(cAns).filter((v) => {
			return v === true;
		}).length;
		setScore(s);
	};

	return (
		<div className="mx-auto p-4">
			<div className="flex justify-between mb-3">
				<div className="">
					<h2 className="text-2xl font-semibold mb-4">
						{title} - Multiple Choice Questions
					</h2>
				</div>
				<div className="">
					<button
						disabled
						className="bg-emerald-500 p-2 px-3 rounded-xl text-white"
					>
						Points: {score}/{questions.length}
					</button>
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				{questions.map((question) => (
					<div
						key={question.id}
						className={`shadow p-5 rounded-xl bg-white mb-4 ${
							submit
								? cAns[question.id]
									? "border-2 border-emerald-500"
									: "border-2 border-red-600"
								: ""
						}`}
					>
						<p className="font-medium mb-2">{question.text}</p>
						{question.options.map((option) => {
							return (
								<label
									key={option.id}
									className="flex items-center"
								>
									<input
										disabled={submit}
										type="radio"
										name={question.id}
										value={option.id}
										checked={
											answers[question.id] === option.id
										}
										onChange={() =>
											handleOptionChange(
												question.id,
												option
											)
										}
										className="mr-2 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
									/>
									{option.label}{" "}
									{submit ? (
										(option.correct ? true : false) ? (
											<Check
												size={20}
												className="ml-2 text-emerald-500"
											/>
										) : answers[question.id] ===
										  option.id ? (
											<X
												size={20}
												className="ml-2 text-red-600"
											/>
										) : (
											""
										)
									) : (
										""
									)}
								</label>
							);
						})}
					</div>
				))}
				<div className="mt-4">
					<button
						disabled={submit}
						type="submit"
						className="bg-blue-700 disabled:opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default TestLayout;
