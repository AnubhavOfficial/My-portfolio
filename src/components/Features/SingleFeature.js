import React from "react";

import Slide from "react-reveal/Slide";

const SingleFeature = ({ Title, Icon, Desc, Active }) => {
	return (
		<Slide duration={1500} bottom cascade>
			<div className="col-lg-4 col-md-6">
				<div className={`single-features`}>
					<div className="icon">
						<Icon />
					</div>
					<h3>{Title}</h3>
					<p>{Desc}</p>
				</div>
			</div>
		</Slide>
	);
};

export default SingleFeature;
