import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './player-card.style';
import { TEXTS } from '../../constants/texts';
import { IPlayer } from '../../interfaces/teams';

/** Карточка игрока, содержит информацию о позиции, дне рождения и имени */
const PlayerCard: React.FC<Pick<IPlayer, 'name' | 'dateOfBirth' | 'position'>> = ({ name, position, dateOfBirth }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.playerName}>{name}</Text>
      <Text style={styles.info}>{TEXTS.position} {position}</Text>
      <Text style={styles.info}>
        {TEXTS.birthDate} {new Date(dateOfBirth).toLocaleDateString()}
      </Text>
    </View>
  );
};

export default PlayerCard;
