import React from 'react';

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Header, HeaderContent, TotalCars } from './style';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {
  const carDataOne = {
    brand: 'audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail:
      'https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png',
  };

  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail:
      'https://img2.gratispng.com/20180517/zzw/kisspng-2018-porsche-panamera-2015-porsche-panamera-porsch-5afe197550f488.4299338415266021013316.jpg',
  };

  return (
    <Container>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor='transparent'
      />

      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={108} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  );
}
