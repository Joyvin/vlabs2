import React from "react";

export default function Theory() {
	return (
		<>
			<p>
				A linked list is a linear data structure used to organize and
				store a collection of elements. Unlike arrays, linked lists do
				not have a fixed size and can dynamically grow or shrink as
				elements are added or removed. Linked lists consist of nodes,
				and each node contains two components: data and a reference (or
				link) to the next node in the sequence.
			</p>
			<br />
			<h2>
				<strong>Components of a Linked List:</strong>
			</h2>
			<ol>
				<li>
					<span className="uline">Elements (Data):</span> These are
					the individual data items stored in the linked list.
				</li>
				<li>
					<span className="uline">Nodes:</span> Nodes are the building
					blocks of a linked list. Each node contains the data element
					and a reference to the next node in the sequence.
				</li>
			</ol>
			<br />
			<h2>
				<strong>Basic Operations on Linked Lists:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Insertion:</span> This operation
					adds a new node with data to the linked list. It can be
					inserted at the beginning (head), end (tail), or at a
					specific position within the list.
				</li>
				<li>
					<span className="uline">Deletion:</span> This operation
					removes a node from the linked list. It can involve removing
					the first node (head), last node (tail), or a node at a
					specific position.
				</li>
				<li>
					<span className="uline">Traversal:</span> This operation
					involves traversing or iterating through the linked list to
					access, display, or manipulate the data in each node.
				</li>
				<li>
					<span className="uline">Search:</span> This operation looks
					for a specific data element within the linked list and
					returns the node containing that data if found.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Types of Linked Lists:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Singly Linked List:</span> In a
					singly linked list, each node points to the next node in the
					sequence, forming a unidirectional chain.
				</li>
				<li>
					<span className="uline">Doubly Linked List:</span> In a
					doubly linked list, each node has references to both the
					next node and the previous node in the sequence, allowing
					bidirectional traversal.
				</li>
				<li>
					<span className="uline">Circular Linked List:</span> In a
					circular linked list, the last node points back to the first
					node, creating a closed loop.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Common Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Dynamic Data Structures:</span>{" "}
					Linked lists are suitable for creating dynamic data
					structures where the size of the list can change during
					program execution.
				</li>
				<li>
					<span className="uline">Memory Management:</span> Operating
					systems and programming languages often use linked lists for
					memory management tasks like tracking free memory blocks.
				</li>
				<li>
					<span className="uline">
						Implementing Other Data Structures:
					</span>{" "}
					Linked lists are foundational in implementing other data
					structures such as stacks, queues, and hash tables.
				</li>
				<li>
					<span className="uline">Undo/Redo Functionality:</span> Some
					software applications use linked lists to implement undo and
					redo functionality, allowing users to revert or redo
					actions.
				</li>
				<li>
					<span className="uline">
						Music and Playlist Management:
					</span>{" "}
					Music playlist applications can use linked lists to manage
					playlists, allowing users to add, remove, and reorder songs.
				</li>
			</ul>
		</>
	);
}
