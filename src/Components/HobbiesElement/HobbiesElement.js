import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const HobbiesElement = ({ hobbies }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>POMĖGIAI</Text>
            {hobbies && (
                <Text style={styles.content}>{hobbies}</Text>
            )}
        </View>
    )
}

export default HobbiesElement