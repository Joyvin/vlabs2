import React from "react";

export default function Theory() {
	return (
		<>
			<h2>
				<strong>Recursion:</strong>
			</h2>
			<p>
				Recursion is a powerful programming technique where a function
				calls itself to solve a problem. It is commonly used in
				situations where a problem can be broken down into smaller,
				similar subproblems. Let&apos;s explore the key concepts and
				properties of recursion:
			</p>
			<br />
			<h2>
				<strong>Definition:</strong>
			</h2>
			<p>
				Recursion involves a function solving a problem by breaking it
				down into smaller, similar subproblems and calling itself with
				those subproblems. This process continues until a base case is
				reached, at which point the recursion stops.
			</p>
			<br />
			<h2>
				<strong>Base Case:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Definition:</span> The base case is
					a condition that determines when the recursion should stop
					and return a result. It acts as a termination point for the
					recursive calls.
				</li>
				<li>
					<span className="uline">Importance:</span> The base case is
					crucial because it prevents infinite recursion and provides
					a way to terminate the recursion when a specific condition
					is met.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Recursion Process:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">How It Works:</span> In a recursive
					function, the problem is divided into smaller subproblems,
					and the function calls itself with those subproblems. This
					continues until the base case is reached.
				</li>
				<li>
					<span className="uline">Stack:</span> Recursive calls are
					typically managed using a stack, which keeps track of the
					function calls and their respective local variables.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Common Scenarios:</span> Recursion
					is commonly used when a problem can be naturally divided
					into smaller, similar subproblems that can be solved
					independently.
				</li>
				<li>
					<span className="uline">Efficiency:</span> While recursion
					offers an elegant solution to some problems, it may not
					always be the most efficient approach, especially for
					problems with large input sizes.
				</li>
				<li>
					<span className="uline">Mathematical Problems:</span>{" "}
					Recursion is often employed for solving mathematical
					equations, tree-based data structures, and problems in which
					a divide-and-conquer strategy is applicable.
				</li>
			</ul>
		</>
	);
}
