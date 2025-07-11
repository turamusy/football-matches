import React from 'react';
import { Text, View } from 'react-native';
import { TEXTS } from '../../constants/texts';
import { styles } from './match-card.style';
import { IMatch } from '../../interfaces/match';

/** Компонент карточки для будующего матча, содержит сведения о опоненте, дате и название соревнования */
const MatchCard: React.FC<{ match: IMatch; teamId: number }> = ({ match, teamId }) => {
  const isHome = match.homeTeam.id === teamId;
  const opponent = isHome ? match.awayTeam.name : match.homeTeam.name;
  return (
    <View style={styles.card}>
      <Text style={styles.matchText}>{TEXTS.opponent} {opponent}</Text>
      <Text style={styles.matchText}>{TEXTS.matchDate} {new Date(match.utcDate).toLocaleDateString()}</Text>
      <Text style={styles.matchText}>{TEXTS.competition} {match.competition.name}</Text>
    </View>)
};

export default MatchCard;
