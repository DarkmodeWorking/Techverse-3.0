// app/sold-out/page.js

"use client";
import Link from "next/link";

export default function SoldOut() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 md:p-8">
			<h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-8 text-center">
				Sorry, We&apos;re Sold Out!
			</h2>
			<p className="text-lg md:text-2xl mb-4 md:mb-6 text-center">
				Our Techverse merchandise is all sold out due to high demand!
				Thank you for your amazing support.
			</p>
			<p className="text-base md:text-lg mb-6 md:mb-10 text-center">
				Keep an eye out for future drops or contact us to get more info.
			</p>
			<Link
				href="/"
				className="text-center py-2 px-4 bg-purple-700 hover:bg-purple-900 text-white font-semibold rounded transition duration-200"
			>
				Back to Home
			</Link>
		</div>
	);
}
