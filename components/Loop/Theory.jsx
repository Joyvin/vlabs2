import React from "react";

export default function Theory() {
	return (
		<>
			<h2>
				<strong>Loops in C:</strong>
			</h2>
			<p>
				Loops are fundamental control structures in the C programming
				language, allowing you to execute a block of code repeatedly
				based on a specified condition. C provides several types of
				loops, each with its own use cases and characteristics.
			</p>
			<br />
			<h2>
				<strong>Types of Loops:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">1. While Loop:</span> The while loop
					is used when you want to execute a block of code as long as
					a certain condition is true. It checks the condition before
					each iteration.
				</li>
				<li>
					<span className="uline">2. For Loop:</span> The for loop is
					a versatile loop that allows you to specify an
					initialization, a condition, and an increment or decrement.
					It&apos;s commonly used for iterating over sequences like
					arrays.
				</li>
				<li>
					<span className="uline">3. Do-While Loop:</span> The
					do-while loop is similar to the while loop but guarantees
					that the block of code is executed at least once, as it
					checks the condition after the first iteration.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Loop Control Statements:</strong>
			</h2>
			<p>
				In addition to the basic loop types, C provides control
				statements that allow you to modify the flow of loops:
			</p>
			<ul>
				<li>
					<span className="uline">1. Break Statement:</span> The break
					statement is used to exit a loop prematurely, based on a
					certain condition, without completing all iterations.
				</li>
				<li>
					<span className="uline">2. Continue Statement:</span> The
					continue statement is used to skip the current iteration of
					a loop and proceed to the next iteration, based on a certain
					condition.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Common Loop Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">1. Iterating Over Arrays:</span> For
					loops are frequently used to iterate over the elements of an
					array, making it easy to perform operations on each element.
				</li>
				<li>
					<span className="uline">2. Input Validation:</span> Loops
					can be used to repeatedly prompt the user for input until
					valid data is provided.
				</li>
				<li>
					<span className="uline">3. Menu-Driven Programs:</span>{" "}
					Loops are useful for creating menu-driven programs where the
					user can select different options and perform actions based
					on their choices.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Loop Best Practices:</strong>
			</h2>
			<p>
				When using loops in C, it&apos;s essential to ensure that the
				loop condition is correctly defined to avoid infinite loops.
				Also, consider loop efficiency and choose the appropriate loop
				type for the task at hand.
			</p>
		</>
	);
}
