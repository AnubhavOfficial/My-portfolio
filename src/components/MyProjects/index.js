import React from "react";

import { states } from "../../Context/Context";
import SingleProject from "./SingleProject";

const MyProjects = () => {
	return (
		<>
			<div id="Projects" className="myProjectsContainer">
				<div className="container">
					<div className="section-title">
						<h2 style={{ fontSize: "6rem" }}>
							<b>My Projects</b>
						</h2>
					</div>
					<div className="row sibling-fade">
						{states.projects.map((prev) => {
							const { title, img, description, url } = prev;
							return (
								<SingleProject
									key={title}
									Title={title}
									Image={img}
									Description={description}
									Url={url}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProjects;
