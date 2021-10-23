import React from "react";

import "./BurgerMenu.css";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false,
    };

    this.menu = "menu-hidden";

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
        <div className={this.menu}>Text</div>
      </div>
    );
  }
}

export default BurgerMenu;
