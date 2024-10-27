"use client";
import React, { Suspense } from "react";
import { Model } from "./Tshirt";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";

function Index() {
	const buyLink =
		"https://docs.google.com/forms/d/e/1FAIpQLSdrFaBfxtSA1b4Vj4lffP1Vu6-tQpIVcUpFHxSOOVbM4Bn59g/viewform?usp=sf_link";

	return (
		<div className="flex flex-col items-center text-white  bg-black">
			{/* Title */}
			<div className="mt-10">
				<h2  className="text-center  max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-serif text-neutral-200">
					GET OUR MERCH
				</h2>
			</div>

			{/* Content Wrapper */}
			<div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:p-10 p-5 w-full">
				{/* Text Container */}
				<div className="flex flex-col justify-center text-center md:text-left md:w-[60vw] w-full md:mt-0 mt-5">
				<br />
				<p className="md:text-2xl text-xl md:mb-15 mb-7">Stand out in style and show your love for the <strong>Techverse</strong> community—your ultimate tech fest destination—with our exclusive gear! Don&apos;t miss out on the chance to snag an official <strong>Techverse T-shirt</strong> that&apos;s as trendy as it is comfy. It&apos;s the perfect way to vibe with fellow tech enthusiasts who share your passion for all things <strong>Tech</strong>!</p>
				<br />
				<p className="md:text-2xl text-xl md:mb-15 mb-7">So, level up your wardrobe today and rock that <strong>Techverse</strong> spirit with our awesome merchandise T-shirt!</p>

					{/* Buy Now Button */}
					<div className="flex justify-center md:justify-start">
						<Link href={buyLink}>
							<div className="buynow text-center py-2 px-4 bg-purple-500 hover:bg-blue-700 text-white font-semibold rounded transition duration-170">
								Buy Now
							</div>
						</Link>
					</div>
				</div>

				{/* 3D Model Container */}
				<div className="w-[300px] h-[300px] md:ml-10 bg-gray-900 p-3 rounded-lg shadow-lg flex-shrink-0 mt-5 md:mt-0">
					<Canvas camera={{ position: [0, 1, 2], fov: 60 }}>
						<OrbitControls
							enablePan={false}
							enableZoom={false}
							minPolarAngle={Math.PI / 2.2}
							maxPolarAngle={Math.PI / 2.2}
						/>
						<directionalLight position={[0, 5, 0]} intensity={5} />
						<directionalLight position={[-5, 0, 0]} intensity={2} />
						<directionalLight position={[5, 0, 0]} intensity={2} />
						<ambientLight intensity={5} />
						<group position={[0, -3.9, 0]} scale={3}>
							<Suspense fallback={null}>
								<Model />
							</Suspense>
						</group>
					</Canvas>
				</div>
			</div>
		</div>
	);
}

export default Index;
