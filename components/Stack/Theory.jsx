import React from "react";

export default function Theory() {
	return (
		<>
			<p>
				A stack is a fundamental data structure in computer science with
				a specific set of rules and behaviors. It follows the Last-In,
				First-Out (LIFO) principle, which means that the last item added
				to the stack is the first one to be removed. Here&apos;s a
				theoretical overview of stacks:
			</p>
			<br />
			<h2>
				<strong>Components of a Stack:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Elements:</span> These are the
					individual data items stored in the stack.
				</li>
				<li>
					<span className="uline">Top:</span> This is the reference to
					the top element of the stack. It&apos;s the only element
					accessible for insertion or deletion.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Basic Operations on Stacks:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Push:</span> This operation adds an
					element to the top of the stack.
				</li>
				<li>
					<span className="uline">Pop:</span> This operation removes
					and returns the top element of the stack.
				</li>
				<li>
					<span className="uline">Peek:</span> This operation returns
					the top element without removing it.
				</li>
				<li>
					<span className="uline">isEmpty:</span> This operation
					checks whether the stack is empty.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Common Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Function Call Stack:</span> In many
					programming languages, the function call stack is
					implemented using a stack data structure. It keeps track of
					function calls and their local variables.
				</li>
				<li>
					<span className="uline">Expression Evaluation:</span> Stacks
					can be used to evaluate expressions, including arithmetic
					expressions and parsing mathematical expressions.
				</li>
				<li>
					<span className="uline">Backtracking:</span> Stacks are used
					in algorithms involving backtracking, such as depth-first
					search (DFS) in graph traversal.
				</li>
			</ul>
		</>
	);
}
