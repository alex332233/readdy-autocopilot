import imageUrlBuilder from '@sanity/image-url';
import {hasSanityConfig, sanityEnv} from './env';
import type {SanityImage} from './types';

const builder = hasSanityConfig
  ? imageUrlBuilder({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
    })
  : null;

type SanityImageSource = Partial<SanityImage> & {
  asset?: SanityImage['asset'];
};

type SanityImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
};

export const getSanityImageUrl = (
  image: SanityImageSource | undefined,
  options: SanityImageOptions = {},
) => {
  if (!image) return '';
  if (!builder || !image.asset) return image.url || '';

  let url = builder.image(image as SanityImage);

  if (options.width) url = url.width(options.width);
  if (options.height) url = url.height(options.height);
  if (options.fit) url = url.fit(options.fit);
  if (options.quality) url = url.quality(options.quality);

  return url.auto('format').url();
};
