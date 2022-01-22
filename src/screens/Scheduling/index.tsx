import React from 'react';

import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Title,
  Header,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Containt,
  Footer,
} from './styles';

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          barStyle='light-content'
          backgroundColor='transparent'
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>21/01/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>27/01/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Containt>
        <Calendar />
      </Containt>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
}
