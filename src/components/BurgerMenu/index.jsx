import React from "react";

import NavMenu from "../NavMenu";

import "./BurgerMenu.sass";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      links: [
        { text: "Basics", link: "https://google.com" },
        { text: "Documentation", link: "https://google.com" },
        { text: "Partners", link: "https://google.com" },
        { text: "Feedback", link: "https://google.com" },
      ],
    };

    this.switchState = () => {
      this.setState((prevState) => ({
        isShown: !prevState.isShown,
      }));
    };
  }

  render() {
    this.menu = this.state.isShown ? "menu-shown" : "menu-hidden";

    return (
      <div>
        <div onClick={this.switchState}>On/Off</div>
        <div className={this.menu}>
          <NavMenu links={this.state.links} />
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
