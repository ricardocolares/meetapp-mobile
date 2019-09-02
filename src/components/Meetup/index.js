import React, { useMemo } from 'react';

import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  Date,
  Location,
  Organizer,
  MeetupImage,
} from './styles';

export default function Meetup({ data }) {
  // const dateParsed = useMemo(() => {
  //   return formatRelative(parseISO(data.date), new Date(), {
  //     locale: pt,
  //     addSuffix: true,
  //   });
  // }, [data.date]);

  return (
    <Container>
      <MeetupImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        }}
      />
      <Title>{data.title}</Title>
      <Date>{data.date}</Date>
      <Location>{data.Location}</Location>
      <Organizer>Organizador: {data.User.name}</Organizer>
    </Container>
  );
}
