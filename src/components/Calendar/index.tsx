import React from 'react';
import { useTheme } from 'styled-components';

import { Feather } from '@expo/vector-icons';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';

import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-BR'] = ptBR;

LocaleConfig.defaultLocale = 'pt-BR';

export function Calendar() {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomColor: theme.colors.text_detail,
        borderBottomWidth: 0.5,
        marginBottom: 10,
        paddingBottom: 10,
      }}
      theme={{
        arrowStyle: {
          marginHorizontal: -15,
        },
        monthTextColor: theme.colors.title,
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
      }}
      minDate={`${new Date()}`}
    />
  );
}
