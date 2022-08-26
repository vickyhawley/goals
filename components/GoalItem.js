import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goals}>
        <Text style={styles.goaltext}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goals: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goaltext: {
    color: 'white',
    backgroundColor: '#5e0acc',
  },
});

export default GoalItem;
