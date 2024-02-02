import React from "react";

export default function Theory() {
	return (
		<>
			<h2>
				<strong>Quick Sort:</strong>
			</h2>
			<p>
				Quick Sort is a highly efficient sorting algorithm that employs
				a divide-and-conquer strategy. The algorithm selects a "pivot"
				element from the array and partitions the other elements into
				two subarrays, recursively sorting them. Let's explore the key
				concepts and properties of Quick Sort:
			</p>
			<br />
			<h2>
				<strong>Algorithm Overview:</strong>
			</h2>
			<p>
				The primary idea behind Quick Sort is to select a pivot element,
				place it in its correct position, and partition the array into
				two subarrays—one with elements smaller than the pivot and the
				other with elements greater than the pivot. The process is then
				applied recursively to the subarrays until the entire array is
				sorted.
			</p>
			<br />
			<h2>
				<strong>Basic Steps:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Pivot Selection:</span> Choose a
					pivot element from the array.
				</li>
				<li>
					<span className="uline">Partitioning:</span> Rearrange the
					array so that elements less than the pivot are on the left,
					and elements greater than the pivot are on the right.
				</li>
				<li>
					<span className="uline">Recursion:</span> Apply the Quick
					Sort algorithm recursively to the left and right subarrays.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Time Complexity:</strong>
			</h2>
			<p>
				Quick Sort has an average-case time complexity of O(n log n),
				making it one of the fastest sorting algorithms. However, its
				worst-case time complexity is O(n^2) when poor pivot selection
				leads to unbalanced partitions.
			</p>
			<br />
			<h2>
				<strong>Advantages:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Efficiency:</span> Quick Sort is
					highly efficient for large datasets due to its average-case
					time complexity.
				</li>
				<li>
					<span className="uline">In-Place Sorting:</span> It often
					requires only a constant amount of additional memory.
				</li>
				<li>
					<span className="uline">Parallelization:</span> The
					divide-and-conquer nature allows for parallelization,
					further improving performance.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Large Datasets:</span> Quick Sort is
					ideal for sorting large datasets efficiently.
				</li>
				<li>
					<span className="uline">General-Purpose Sorting:</span> It
					is commonly used as a general-purpose sorting algorithm in
					various applications.
				</li>
				<li>
					<span className="uline">System Libraries:</span> Quick Sort
					is often used in system libraries and programming languages
					for its speed.
				</li>
			</ul>
		</>
	);
}
