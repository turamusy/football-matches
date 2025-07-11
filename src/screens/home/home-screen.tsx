import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/root-stack-param';
import { useGetTeamsQuery } from '../../services/football';
import { setSelectedTeam } from '../../store/slices/team-slice';
import { useAppDispatch } from '../../hooks/hooks';
import TeamCard from '../../components/team-card/team-card';
import ItemSeparator from '../../components/list-separator/list-separator';
import { styles } from './home-screen.styles';
import { NAVIGATION } from '../../types/navigation-routes';
import { ITEM_HEIGHT, TEAMS_LIMIT } from './home-screen.constants';
import { TEXTS } from '../../constants/texts';
import { theme } from '../../styles/color-varibles';
import { handleQuerryErrorType } from '../../utils/handle-querry-error-type';
import { IFootballClubDetails } from '../../interfaces/teams';

/** */
export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const [offset, setOffset] = useState(0);
  const [teams, setTeams] = useState<IFootballClubDetails[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: teamsData,
    isFetching,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetTeamsQuery({ limit: TEAMS_LIMIT, offset }, { skip: !hasMore });

  useEffect(() => {
    if (teamsData?.teams?.length) {
      setTeams((prev) => {
        const newItems = teamsData.teams.filter(
          (team) => !prev.find((t) => t.id === team.id)
        );
        return [...prev, ...newItems];
      });
      if (teamsData.teams.length < TEAMS_LIMIT) {
        setHasMore(false);
      }
    } else if (!isFetching) {
      setHasMore(false);
    }
  }, [isFetching, teamsData]);

  const handlePress = (teamId: number) => {
    dispatch(setSelectedTeam(teamId));
    navigation.navigate(NAVIGATION.DETAILS);
  };

  const handleLoadMore = () => {
    if (!isFetching && hasMore) {
      setOffset((prev) => prev + TEAMS_LIMIT);
    }
  };

  if (isLoading && teams.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>{TEXTS.loadingTeams}</Text>
      </View>
    );
  }

  if (isError) {
    const errorMessage = handleQuerryErrorType(error)
      ? `${TEXTS.errorCode} ${error.status}`
      : TEXTS.checkConnection;


    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorTitle}>{TEXTS.errorTitle}</Text>
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
        <TouchableOpacity style={styles.retryButton} onPress={refetch}>
          <Text style={styles.retryText}>{TEXTS.repeat}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teams}
        style={styles.listContainer}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        getItemLayout={(_data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        renderItem={({ item }) => (
          <TeamCard id={item.id} name={item.name} crest={item.crest} onPress={handlePress} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetching ? (
            <ActivityIndicator color={theme.lightGreen} size="large" style={styles.activityIndicator} />
          ) : null
        }
      />
    </SafeAreaView>
  );
};