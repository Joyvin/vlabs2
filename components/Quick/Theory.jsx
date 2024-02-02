import React from "react";

export default function Theory() {
	return (
		<>
			<h2>
				<strong>Selection Sort:</strong>
			</h2>
			<p>
				Selection Sort is a simple sorting algorithm that divides the
				input list into a sorted and an unsorted region. The algorithm
				repeatedly selects the smallest (or largest) element from the
				unsorted region and swaps it with the first element of the
				unsorted region. Let&apos;s explore the key concepts and
				properties of Selection Sort:
			</p>
			<br />
			<h2>
				<strong>Algorithm Overview:</strong>
			</h2>
			<p>
				The basic idea behind Selection Sort is to iteratively find the
				minimum (or maximum) element from the unsorted region and swap
				it with the first element of the unsorted region. This process
				continues until the entire list is sorted.
			</p>
			<br />
			<h2>
				<strong>Basic Steps:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Selection:</span> Find the minimum
					(or maximum) element in the unsorted region.
				</li>
				<li>
					<span className="uline">Swap:</span> Swap the found element
					with the first element of the unsorted region.
				</li>
				<li>
					<span className="uline">Move Boundaries:</span> Move the
					boundaries between the sorted and unsorted regions.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Time Complexity:</strong>
			</h2>
			<p>
				Selection Sort has a time complexity of O(n^2), similar to
				Bubble Sort. While it is also inefficient for large lists, it
				performs better than Bubble Sort in terms of the number of
				swaps.
			</p>
			<br />
			<h2>
				<strong>Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Simplicity:</span> Selection Sort is
					easy to understand and implement, making it suitable for
					educational purposes.
				</li>
				<li>
					<span className="uline">Small Lists:</span> In cases where
					the list size is small and simplicity is prioritized over
					efficiency, Selection Sort can be used.
				</li>
				<li>
					<span className="uline">Minimizing Swaps:</span> If the cost
					of swapping elements is a concern, Selection Sort may be
					preferred over Bubble Sort.
				</li>
			</ul>
		</>
	);
}
