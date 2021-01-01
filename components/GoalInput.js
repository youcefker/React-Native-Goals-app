import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal} from 'react-native'

const goalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const onAddGoalHandler = () => {
        props.press(enteredGoal)
        setEnteredGoal('')
    }
    const onCancelGoalAdditionHandler = () => {
        props.onCancel()
        setEnteredGoal('')
    }
    return(
        <Modal visible={props.visible} animationType="slide"> 
            <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Course Goal" 
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel" color="red" onPress={onCancelGoalAdditionHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="add" onPress={onAddGoalHandler}/>
                </View>
                </View>
        </View>
        </Modal>
    )
}

const styles= StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    buttonContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default goalInput