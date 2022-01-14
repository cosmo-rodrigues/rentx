import React from 'react';
import {
  Container,
  ImageIndexes,
  ImageIndexe,
  CarImageWrapper,
  CarImage,
} from './style';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndexe active={true} />
        <ImageIndexe active={false} />
        <ImageIndexe active={false} />
        <ImageIndexe active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode='contain' />
      </CarImageWrapper>
    </Container>
  );
}
