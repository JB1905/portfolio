import Delay from 'react-delay';

import './technology.scss';

interface Props {
  readonly image: string;
  readonly name: string;
  readonly index: number;
}

export const Technology = ({ image, name, index }: Props) => (
  <Delay wait={(index + 1) * 110 + 400}>
    <div className="technology__item">
      <div>
        <img src={image} alt={name} className="technology__image" />
      </div>

      <div className="technology__content">
        <p
          className="technology__name"
          dangerouslySetInnerHTML={{ __html: name.replace(/,/g, '<br />') }}
        />
      </div>
    </div>
  </Delay>
);
