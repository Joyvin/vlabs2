import React from "react";

export default function Theory() {
	return (
		<>
			<p>
				A binary tree is a hierarchical data structure used to organize
				and store a collection of elements. Unlike arrays or linked
				lists, binary trees provide a more structured way to store data.
				Binary trees consist of nodes, and each node contains three
				components: data, a reference (or link) to the left child node,
				and a reference (or link) to the right child node. The binary
				tree structure allows for efficient search and retrieval of
				data.
			</p>
			<br />
			<h2>
				<strong>Components of a Binary Tree:</strong>
			</h2>
			<ol>
				<li>
					<span className="uline">Elements (Data):</span> These are
					the individual data items stored in the binary tree.
				</li>
				<li>
					<span className="uline">Nodes:</span> Nodes are the building
					blocks of a binary tree. Each node contains the data element
					and references to its left and right child nodes.
				</li>
			</ol>
			<br />
			<h2>
				<strong>Basic Operations on Binary Trees:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Insertion:</span> This operation
					adds a new node with data to the binary tree. The data is
					inserted in such a way that it maintains the hierarchical
					order of the tree.
				</li>
				<li>
					<span className="uline">Deletion:</span> This operation
					removes a node from the binary tree. The tree structure is
					adjusted to maintain its binary tree properties.
				</li>
				<li>
					<span className="uline">Traversal:</span> This operation
					involves traversing or iterating through the binary tree to
					access, display, or manipulate the data in each node. Common
					traversal methods include in-order, pre-order, and
					post-order traversal.
				</li>
				<li>
					<span className="uline">Search:</span> This operation looks
					for a specific data element within the binary tree and
					returns the node containing that data if found.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Types of Binary Trees:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Binary Search Tree (BST):</span> In
					a binary search tree, the elements are organized in such a
					way that for each node, all elements in its left subtree are
					less than the node&apos;s data, and all elements in its
					right subtree are greater than the node&apos;s data. This
					property allows for efficient searching.
				</li>
				<li>
					<span className="uline">Binary Heap:</span> A binary heap is
					a binary tree that satisfies the heap property. In a
					min-heap, each parent node has a value less than or equal to
					the values of its children. In a max-heap, each parent node
					has a value greater than or equal to the values of its
					children. Binary heaps are used for priority queues.
				</li>
				<li>
					<span className="uline">Binary Expression Tree:</span>{" "}
					Binary expression trees are used to represent mathematical
					expressions. Each node in the tree represents an operator,
					and the leaves represent operands.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Common Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Efficient Searching:</span> Binary
					search trees are commonly used for searching and retrieval
					of data because of their hierarchical structure and the
					ability to quickly eliminate large portions of the data.
				</li>
				<li>
					<span className="uline">Priority Queues:</span> Binary
					heaps, particularly min-heaps and max-heaps, are used for
					efficient priority queue implementations in algorithms and
					data structures.
				</li>
				<li>
					<span className="uline">
						Mathematical Expression Evaluation:
					</span>{" "}
					Binary expression trees are used to evaluate complex
					mathematical expressions.
				</li>
				<li>
					<span className="uline">
						File System Directory Structure:
					</span>{" "}
					Binary trees can be used to represent hierarchical file
					system directory structures where each node represents a
					directory or file, and the left and right child nodes
					represent subdirectories or files.
				</li>
				<li>
					<span className="uline">Decision Trees:</span> Binary trees
					are used in decision tree algorithms for tasks such as
					classification and regression analysis.
				</li>
			</ul>
		</>
	);
}
