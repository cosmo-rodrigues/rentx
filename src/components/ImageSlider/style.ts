import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface ImageIndexeProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  align-self: flex-end;
  flex-direction: row;
  padding-right: 24px;
`;

export const ImageIndexe = styled.View<ImageIndexeProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.title : theme.colors.shape};
  border-radius: 3px;
  height: 6px;
  margin-left: 8px;
  width: 6px;
`;

export const CarImageWrapper = styled.View`
  align-items: center;
  height: 132px;
  justify-content: center;
  width: ${Dimensions.get('window').width}px;
`;

export const CarImage = styled.Image`
  height: 132px;
  width: 280px;
`;
