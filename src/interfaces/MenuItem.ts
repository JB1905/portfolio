import { read } from 'fs/promises';

export interface MenuItem {
  readonly title: string;
  readonly link: string;
}
