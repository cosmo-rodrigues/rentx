import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  height: 113px;
  padding: 32px 24px;
  width: 100%;
`;

export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
