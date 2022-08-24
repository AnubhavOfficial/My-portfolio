import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// IMPORTING REACT icons
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

// IMPORTING REACT SCROLL
import { Link } from "react-scroll";

const useStyles = makeStyles({
  list: {
    width: 320,
  },
  fullList: {
    width: "auto",
  },
});

function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // SCROLLING VARIABLES
  const ScrollDuration = 1200;
  const ScrollDelay = 500;

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ImCross className="crossISidebar" style={{ fontSize: "calc(2vw + 2vh)" }} />
        <Link
          activeClass="activeNav"
          to="About"
          smooth={true}
          duration={ScrollDuration}
          delay={ScrollDelay}
          spy={true}
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItem button>
            <ListItemText >About</ListItemText>
          </ListItem>
        </Link>
        <Link
          activeClass="activeNav"
          to="Experience"
          smooth={true}
          duration={ScrollDuration}
          offset={5}
          delay={ScrollDelay}
          spy={true}
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItem button>
            <ListItemText>Experience</ListItemText>
          </ListItem>
        </Link>
        <Link
          activeClass="activeNav"
          to="Projects"
          smooth={true}
          delay={ScrollDelay}
          duration={ScrollDuration}
          spy={true}
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItem button>
            <ListItemText>My Projects</ListItemText>
          </ListItem>
        </Link>
        <Link
          activeClass="activeNav"
          // to="Contact"
          to="bottomFooter"
          smooth={true}
          delay={ScrollDelay}
          duration={ScrollDuration}
          spy={true}
          onClick={toggleDrawer(anchor, false)}
        >
          <ListItem button>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <GiHamburgerMenu
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "white", fontSize: "calc(1.6vh + 1.6vw)", cursor: "pointer" }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Sidebar;
