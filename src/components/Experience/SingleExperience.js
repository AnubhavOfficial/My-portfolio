import React from "react";

import { CircleProgress } from "react-gradient-progress";
// import VisibilitySensor from "react-visibility-sensor";

// COUNT UP PACKAGE
import Tilt from 'react-parallax-tilt';

import Flip from "react-reveal/Flip";

const SingleExperience = ({
	Title,
	Img,
	Percentage,
	GradientC_1,
	GradientC_2,
	TextColor,
}) => {
	return (
		<div class="col-lg-3 col-md-4 col-sm-6">
			<Flip left>
				<Tilt className="Tilt" options={{ max: 25, scale: 1.03 }}>
					<div
						style={{
							background: `linear-gradient(to right, ${GradientC_1}, ${GradientC_2})`,
						}}
						className="singleExperience text-center"
				>
					
						<div className="innerSingleExp">
							<h1>
								{Title}&nbsp;
							</h1>
							<CircleProgress
								percentage={Percentage}
								strokeWidth={12}
								secondaryColor="#000"
								primaryColor={[GradientC_1, GradientC_2]}
								width={175}
								fontColor={TextColor}
								fontSize="2.7rem"
								fill="#1c1c1c"
							/>
						</div>
					</div>
				</Tilt>
			</Flip>
		</div>
	);
};

export default SingleExperience;
