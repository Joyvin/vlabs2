import React from "react";

export default function Theory() {
	return (
		<>
			<h2>
				<strong>Bubble Sort:</strong>
			</h2>
			<p>
				Bubble Sort is a simple sorting algorithm that repeatedly steps
				through the list to be sorted, compares adjacent elements, and
				swaps them if they are in the wrong order. The algorithm gets
				its name from the way smaller elements &quot;bubble&quot; to the
				top of the list, while larger elements &quot;sink&quot; to the
				bottom. Let&apos;s explore the key concepts and properties of
				Bubble Sort:
			</p>
			<br />
			<h2>
				<strong>Algorithm Overview:</strong>
			</h2>
			<p>
				The basic idea behind Bubble Sort is to iterate through the list
				multiple times, comparing adjacent elements, and swapping them
				if they are out of order. This process continues until no more
				swaps are needed, indicating that the list is fully sorted.
			</p>
			<br />
			<h2>
				<strong>Basic Steps:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Comparison:</span> Bubble Sort
					starts by comparing the first two elements in the list.
				</li>
				<li>
					<span className="uline">Swapping:</span> If the first
					element is greater than the second, they are swapped.
				</li>
				<li>
					<span className="uline">Iterative Passes:</span> The
					algorithm continues to compare and swap adjacent elements in
					subsequent passes until the list is sorted.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Time Complexity:</strong>
			</h2>
			<p>
				Bubble Sort has a time complexity of O(n^2), making it
				inefficient for large lists. It is primarily used for
				educational purposes and is rarely used in practical
				applications.
			</p>
			<br />
			<h2>
				<strong>Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Education:</span> Bubble Sort is
					often taught as a simple sorting algorithm to help beginners
					understand sorting concepts.
				</li>
				<li>
					<span className="uline">Small Lists:</span> In cases where
					the list size is small and simplicity is prioritized over
					efficiency, Bubble Sort can be used.
				</li>
				<li>
					<span className="uline">Debugging:</span> It can be useful
					for debugging and verifying the correctness of other sorting
					algorithms.
				</li>
			</ul>
		</>
	);
}
