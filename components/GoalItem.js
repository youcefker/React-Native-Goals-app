import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const goalItem =  (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})

export default goalItem;