import { ISlideElement } from './slide-element';

export interface ISlide {
  delay: number;
  token: string;
  elements: ISlideElement[];
}
