import { SlideTypesEnum } from '../enums/slide-types.enum';
import { ISlideLayout } from './slide-layout';
import { ISlideHtmlOptions } from './slide-html-options';
import { ISlideMediaOptions } from './slide-media-options';
import { ISlideStyleOptions } from './slide-style-options';

export interface ISlideElement {
  token: string;
  type: SlideTypesEnum;
  layout: ISlideLayout;
  html?: ISlideHtmlOptions;
  media?: ISlideMediaOptions;
  style?: ISlideStyleOptions;
}
