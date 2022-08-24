import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollBar() {
	const scrolbar = useRef();
	const progressbar = useRef();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let brt = gsap.timeline({
			scrollTrigger: {
				trigger: scrolbar.current,
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
		});
		brt.to(progressbar.current, {
			css: {
				height: "100%",
			},
		});
	});
	return (
		<div className="progress-container">
			<div
				ref={progressbar}
				className="progress-bar"
				id="myBar"
				style={{ height: "0%" }}
			></div>
		</div>
	);
}
