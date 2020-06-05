import React from 'react';
import Normalize from 'react-normalize';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faBars,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '../menu';
import Transition from '../transition';
import Background from '../background';
import SEO from '../seo';

import { MenuProvider } from '../../contexts/MenuContext';

import '../../i18n';

import './global.scss';
import './animations.scss';
import './layout.scss';

library.add(faPhone, faEnvelope, faBars, faEye);

interface Props {
  readonly location: Location;
}

const Layout: React.FC<Props> = ({ children, location }) => (
  <MenuProvider>
    <SEO />

    <Normalize />

    <Menu />

    <Transition location={location}>{children}</Transition>

    <Background />
  </MenuProvider>
);

export default Layout;
