import React from "react";

export default function Theory() {
	return (
		<>
			<p>
				A queue is a linear data structure that follows the First-In,
				First-Out (FIFO) principle. This means that the first element
				added to the queue is the first one to be removed. Queues are
				often used to manage tasks or items in a sequential order.
			</p>
			<br />
			<h2>
				<strong>Components of a Queue:</strong>
			</h2>
			<ol>
				<li>
					<span className="uline">Elements:</span> These are the
					individual data items stored in the queue.
				</li>
				<li>
					<span className="uline">Front:</span> This is the reference
					to the front element of the queue, which is the element that
					has been in the queue the longest and is next to be removed.
				</li>
				<li>
					<span className="uline">Rear (or Back):</span> This is the
					reference to the rear element of the queue, which is the
					element that has been in the queue the shortest time and is
					last to be removed.
				</li>
			</ol>
			<br />
			<h2>
				<strong>Basic Operations on Queues:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Enqueue:</span> This operation adds
					an element to the rear of the queue.
				</li>
				<li>
					<span className="uline">Dequeue:</span> This operation
					removes and returns the front element of the queue.
				</li>
				<li>
					<span className="uline">Front (Peek):</span> This operation
					returns the front element without removing it.
				</li>
				<li>
					<span className="uline">isEmpty:</span> This operation
					checks whether the queue is empty.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Common Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Breadth-First Search (BFS):</span>{" "}
					Queues are used in graph traversal algorithms like BFS to
					explore nodes in a level-wise manner.
				</li>
				<li>
					<span className="uline">Task Scheduling:</span> Queues are
					used to manage tasks in a sequential order, such as in job
					scheduling or managing print jobs in a printer queue.
				</li>
				<li>
					<span className="uline">Data Buffering:</span> Queues can be
					used to buffer data between two processes or threads,
					ensuring smooth communication.
				</li>
				<li>
					<span className="uline">Print Spooling:</span> When multiple
					documents are sent to a printer, they are placed in a queue
					(print queue) and printed one after another in the order
					they were received.
				</li>
				<li>
					<span className="uline">Call Center Systems:</span> Queues
					are used to manage customer support requests, with calls
					being answered in the order they were received.
				</li>
				<li>
					<span className="uline">Message Queues:</span> In
					distributed systems, message queues are used for
					communication between different components or services,
					ensuring reliable message delivery.
				</li>
			</ul>
		</>
	);
}
