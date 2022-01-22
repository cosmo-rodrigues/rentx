import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  height: 325px;
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px 0;
  width: 100%;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-color: ${theme.colors.text};
      border-bottom-width: 1px;
      padding-bottom: 5px;
    `}
`;

export const Containt = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollsIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
