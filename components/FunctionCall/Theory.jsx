import React from "react";

export default function Theory() {
	return (
		<>
			<h2 className="text-[1.3rem]">
				<strong>Call by Value:</strong>
			</h2>
			<p>
				Call by Value is a parameter passing mechanism in programming
				where a copy of the actual data is passed to a function or
				method. In this approach, any modifications made to the
				parameter within the function do not affect the original data
				outside the function.
			</p>
			<br />
			<h2>
				<strong>Key Characteristics:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Copy of Data:</span> When a function
					is called with parameters passed by value, a duplicate of
					the data is created inside the function&apos;s scope.
				</li>
				<li>
					<span className="uline">No Impact on Original:</span> Any
					changes made to the parameter within the function are
					limited to the local copy and do not alter the original
					data.
				</li>
				<li>
					<span className="uline">Isolation:</span> Call by Value
					ensures data isolation, making it suitable for situations
					where you want to preserve the integrity of the original
					data.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Immutable Data:</span> Call by Value
					is often used with immutable data types or objects where you
					don&apos;t want the original data to be modified.
				</li>
				<li>
					<span className="uline">Predictable Behavior:</span> It
					provides predictable behavior, making it useful for
					functions that should not have side effects on the calling
					code.
				</li>
				<li>
					<span className="uline">Simplicity:</span> In scenarios
					where simplicity and data preservation are important, Call
					by Value is a suitable choice.
				</li>
			</ul>
			<br />
			<h2 className="text-[1.3rem]">
				{" "}
				<strong>Call by Reference:</strong>
			</h2>
			<p>
				Call by Reference is another parameter passing mechanism where a
				reference or memory address of the actual data is passed to a
				function. In this approach, any changes made to the parameter
				within the function directly affect the original data outside
				the function.
			</p>
			<br />
			<h2>
				<strong>Key Characteristics:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Reference to Data:</span> Call by
					Reference passes a reference or pointer to the original
					data, allowing direct manipulation.
				</li>
				<li>
					<span className="uline">Changes Affect Original:</span>{" "}
					Modifications made to the parameter within the function
					impact the original data, making it suitable for scenarios
					where you want to alter the original data.
				</li>
				<li>
					<span className="uline">Efficiency:</span> Call by Reference
					can be more efficient since it avoids copying data,
					especially for large objects.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">In-Place Modifications:</span> Call
					by Reference is commonly used when you need to perform
					in-place modifications on data structures.
				</li>
				<li>
					<span className="uline">Efficiency Matters:</span> It&apos;s
					beneficial in situations where efficiency and avoiding data
					duplication are critical.
				</li>
				<li>
					<span className="uline">Shared State:</span> In scenarios
					where multiple functions or components need to work with and
					modify the same data, Call by Reference is a practical
					choice.
				</li>
			</ul>
		</>
	);
}
