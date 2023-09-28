import React from "react";

export default function Theory() {
	return (
		<>
			<h2>
				<strong>ASCII Code:</strong>
			</h2>
			<p>
				ASCII, which stands for American Standard Code for Information
				Interchange, is a character encoding standard widely used in
				computing and telecommunications. It plays a fundamental role in
				representing text and control characters as numerical values.
				Let&apos;s delve into the key concepts and properties of ASCII
				code:
			</p>
			<br />
			<h2>
				<strong>Character Set:</strong>
			</h2>
			<p>
				The ASCII character set comprises 128 characters, each assigned
				a unique numerical value ranging from 0 to 127. This includes
				the English alphabet in both uppercase and lowercase, numerals,
				punctuation marks, and various control codes.
			</p>
			<br />
			<h2>
				<strong>Basic Operations with ASCII:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Encoding:</span> Encoding is the
					process of converting text characters into their
					corresponding ASCII codes. Each character is mapped to its
					ASCII value, allowing computers to store and transmit text
					efficiently.
				</li>
				<li>
					<span className="uline">Decoding:</span> Decoding is the
					reverse process, converting ASCII codes back into readable
					text characters. This is essential for human interpretation
					of data encoded in ASCII.
				</li>
				<li>
					<span className="uline">Extended ASCII:</span> In addition
					to the standard 7-bit ASCII, there is an extended ASCII set
					that includes 8-bit codes, allowing for the representation
					of additional characters and symbols.
				</li>
			</ul>
			<br />
			<h2>
				<strong>Common Use Cases:</strong>
			</h2>
			<ul>
				<li>
					<span className="uline">Text Representation:</span> ASCII
					code is fundamental for representing text in computer
					systems, enabling the storage and exchange of textual
					information.
				</li>
				<li>
					<span className="uline">Communication Protocols:</span> Many
					communication protocols, including email, use ASCII to
					encode and transmit text data.
				</li>
				<li>
					<span className="uline">Programming:</span> ASCII is widely
					used in programming languages for tasks such as character
					manipulation, string handling, and file input/output.
				</li>
				<li>
					<span className="uline">File Formats:</span> Several file
					formats, including plain text files, use ASCII encoding to
					store textual data.
				</li>
			</ul>
		</>
	);
}
