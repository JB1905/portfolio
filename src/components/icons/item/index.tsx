import Delay from 'react-delay';

import { IconsQuery } from '../../../__generated__/gatsby-types';

import './icon.scss';

// TODO replace types with generated types
interface Props {
  readonly item: IconsQuery['graphCmsData']['icons'][number];
  readonly index: number;
}

const Item = ({ item: { url, image, title }, index }: Props) => (
  <Delay wait={(index + 1) * 120 + 600}>
    <a href={url} target="_blank" rel="noopener noreferrer" className="icon">
      <img src={image.url} alt={title} className="icon__image" />
    </a>
  </Delay>
);

export default Item;
