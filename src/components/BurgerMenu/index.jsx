import React from "react";

import "./BurgerMenu.css";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
      isOpen: true,
    };

    this.menu = "menu-hidden";

    this.switchState = () => {
      this.setState((prevState) => {
        return { isShown: !prevState.isShown, isOpen: !prevState.isOpen };
      });

      this.menu = this.state.isShown ? "menu-hidden" : "menu-shown";
    };
  }

  render() {
    return (
      <div>
        <div onClick={this.switchState}>On/Off</div>
        <div className={this.menu}>Text</div>
      </div>
    );
  }
}

export default BurgerMenu;
