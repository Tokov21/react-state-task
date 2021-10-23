export default function NavItem(props) {
  const { text, link } = props;

  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">{text}</a>
    </li>
  );
}
