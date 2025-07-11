import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './team-card.style';
import { ITeam } from '../../interfaces/teams';

/** Карточка команды, содержит имя и картинку */
const TeamCard: React.FC<ITeam & { onPress: (id: number) => void; }> = ({ id, name, crest, onPress }) => {
    return (
        <TouchableOpacity onPress={() => {
            onPress(id)
        }} style={styles.container}>
            <Image
                source={{ uri: crest ? crest : '' }}
                style={[styles.image, !crest && styles.defaultImage]}
                resizeMode='contain'
            />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
};

export default TeamCard;