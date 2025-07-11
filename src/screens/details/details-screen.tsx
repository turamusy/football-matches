import React from 'react';
import { Text, FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../../hooks/hooks';
import { useGetTeamDetailsQuery, useGetTeamMatchesQuery } from '../../services/football';
import { styles } from './details-screen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemSeparator from '../../components/list-separator/list-separator';
import { TEXTS } from '../../constants/texts';
import PlayerCard from '../../components/player-card/player-card';
import MatchCard from '../../components/match-card/match-card';
import { useNavigation } from '@react-navigation/native';

export default function DetailsScreen() {
  const navigation = useNavigation();
  const teamId = useAppSelector((state) => state.team.selectedTeamId) || 0;

  const { data: squadData, isLoading: isLoadingPlayers } = useGetTeamDetailsQuery(teamId);
  const { data: matchesData, isLoading: isLoadingMatches } = useGetTeamMatchesQuery(teamId);

  const players = squadData?.squad || [];
  const matches = matchesData?.matches || [];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>{TEXTS.x}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.title}>{TEXTS.teamSquad}</Text>
        {isLoadingPlayers ? (
          <Text style={styles.loading}>{TEXTS.loadingPlayers}</Text>
        ) : (
          <FlatList
            data={players}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => (<PlayerCard name={item.name} dateOfBirth={item.dateOfBirth} position={item.position} />)}
            scrollEnabled={false}
          />
        )}
        <Text style={styles.title}>{TEXTS.upcomingMatches}</Text>
        {isLoadingMatches ? (
          <Text style={styles.loading}>{TEXTS.loadingMatches}</Text>
        ) : (
          <FlatList
            data={matches}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (<MatchCard match={item} teamId={teamId} />)}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}