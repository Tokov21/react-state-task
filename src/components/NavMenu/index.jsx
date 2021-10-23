import PropTypes from "prop-types";

import NavItem from "./NavItem";

import styles from "./NavMenu.module.sass";

export default function NavMenu(props) {
  const { links } = props;

  const makeJSX = links.map((el, i) => (
    <NavItem text={el.text} link={el.link} key={i} />
  ));

  return (
    <nav>
      <ul className={styles.navList}>{makeJSX}</ul>
    </nav>
  );
}

NavMenu.propTypes = {
  links: PropTypes.array.isRequired,
};
