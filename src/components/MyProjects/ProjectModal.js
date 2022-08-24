import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";

// IMPORTING REACT ICONS
import { ImCross } from "react-icons/im";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
	OpenBtn,
	SetOpenBtn,
	PopUpImage,
	PopUpTitle,
	PopUpDesc,
	Url,
}) {
	const handleClose = () => {
		SetOpenBtn(false);
	};

	return (
		<div>
			<Dialog
				open={OpenBtn}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 order-md-0 order-1 p-0 m-0 PopUp_ImageContainer">
								<img className="PopUp_Image" src={PopUpImage} alt="" />
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 order-md-1">
								<ImCross className="PopUp_CloseIcon" onClick={handleClose} />
								<div className="PopUp_RSInnerContainer">
									<h1 className="text-white"> {PopUpTitle} </h1>
									<p className="h3"> {PopUpDesc} </p>
									<div id="button-6">
										<div id="spin"></div>
										<a target="blank" href={Url}>
											Visit Site
										</a>
									</div>
								</div>
							</div>
						</div>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	);
}
