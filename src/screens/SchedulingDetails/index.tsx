import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './style';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleSchedulingComplete() {
    navigation.navigate('SchedulingComplete');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='380Km/h' icon={speedSvg} />
          <Accessory name='3.2s' icon={accelerationSvg} />
          <Accessory name='800 HP' icon={forceSvg} />
          <Accessory name='Gasolina' icon={gasolineSvg} />
          <Accessory name='Auto' icon={exchangeSvg} />
          <Accessory name='2 pessoas' icon={peopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>22/01/2022</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>30/01/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>

          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleSchedulingComplete}
        />
      </Footer>
    </Container>
  );
}
