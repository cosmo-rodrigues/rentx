import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};
  justify-content: center;
  padding: 19px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;
