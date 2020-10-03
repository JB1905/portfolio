import { Link } from 'gatsby';

interface Props {
  readonly link: string;
  toggle: () => void;
  readonly title: string;
}

const Mobile = ({ link, toggle, title }: Props) => (
  <li>
    <Link to={link} activeClassName="active" onClick={toggle}>
      {title}
    </Link>
  </li>
);

export default Mobile;
