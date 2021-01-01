import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}])
    setIsAddMode(false)
  }
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }
  const cancelGoalAdditionHandelr = () => {
    setIsAddMode(false)
  }
  return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput visible={isAddMode} press={addGoalHandler} onCancel={cancelGoalAdditionHandelr}/>
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => 
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
          }/>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: { 
    padding: 50
  }
});
