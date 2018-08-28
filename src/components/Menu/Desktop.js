import React from 'react';

import { DesktopMenuItem } from '../DesktopMenuItem';

export const DesktopMenu = props => (
  <ul className={props.className}>
    <DesktopMenuItem link="/" title="Start" />
    <DesktopMenuItem link="/about" title="O mnie" />
    <DesktopMenuItem link="/technologies" title="Technologie" />
    <DesktopMenuItem link="/projects" title="Projekty" />
    <DesktopMenuItem link="/contact" title="Kontakt" />
  </ul>
);
