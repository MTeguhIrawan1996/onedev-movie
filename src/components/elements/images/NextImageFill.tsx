'use client';

import { Paper, PaperProps } from '@mantine/core';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import classes from './Image.module.css';

export interface INextImageFillProps extends ImageProps {
  figureProps?: PaperProps;
  withOverlay?: boolean;
}

export default function NextImageFill({
  src,
  alt,
  figureProps,
  quality = 80,
  placeholder = 'empty',
  loading = 'eager',
  withOverlay = false,
  ...rest
}: INextImageFillProps) {
  const {
    pos = 'relative',
    h = 550,
    w = '100%',
    ...figureRest
  } = figureProps || {};

  return (
    <Paper
      pos={pos}
      h={h}
      w={w}
      style={{
        overflow: 'hidden',
      }}
      component='figure'
      className={classes.card}
      {...figureRest}
    >
      <Image
        className={classes.image}
        src={src}
        quality={quality}
        alt={alt}
        fill
        style={{
          objectFit: 'fill',
          backgroundPosition: 'center',
        }}
        placeholder={placeholder}
        loading={loading}
        sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
        {...rest}
      />
      {withOverlay && <div className={classes.overlay} />}
    </Paper>
  );
}
