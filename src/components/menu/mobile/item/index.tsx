import { Link } from 'gatsby';

interface Props {
  readonly title: string;
  readonly link: string;
  toggle: () => void;
}

const Mobile = ({ title, link, toggle }: Props) => (
  <li>
    <Link to={link} activeClassName="active" onClick={toggle}>
      {title}
    </Link>
  </li>
);

export default Mobile;
