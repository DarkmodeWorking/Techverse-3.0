"use client"
import React, { Suspense } from "react";
import { Model } from "./Tshirt";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";

function Index() {
	const buyLink =
		"https://docs.google.com/forms/d/e/1FAIpQLSdrFaBfxtSA1b4Vj4lffP1Vu6-tQpIVcUpFHxSOOVbM4Bn59g/viewform?usp=sf_link";
	return (
		<div className="flex flex-col items-center text-white">
			<div>
				<h1 className="text-4xl md:text-6xl font-extrabold">
					GET OUR MERCH
				</h1>
			</div>
			<div className="flex md:flex-row flex-col md:items-start items-center md:p-10 p-5">
				<div className="textContainer flex flex-col justify-center md:w-[60vw] w-[100vw]">
					<p className="md:text-3xl text-xl md:mb-24 mb-10 md:mt-10 mt-5">
						Stand out from the crowd and show your support for the
						Techverse community with our exclusive merchandise.
						Do not miss out on this unique opportunity to own an
						official Techverse T-shirt that is not only fashionable
						but also a great way to connect with like-minded
						individuals who share your passion for this iconic
						brand. <br />
						<br />
						So, upgrade your wardrobe today and join the Techverse
						community with our official merchandise T-shirt!
					</p>
					<div className="flex justify-center items-center">
						<Link href={buyLink}>
							<div className="buynow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
								Buy Now
							</div>
						</Link>
					</div>
				</div>
				{/* Card container around 3D model on the right side */}
				<div className="w-[300px] h-[300px] md:ml-10 bg-gray-900 p-3 rounded-lg shadow-lg flex-shrink-0">
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
