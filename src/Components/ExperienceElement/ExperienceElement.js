import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const ExperienceElement = ({ experience }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title2}>DARBO PATIRTIS</Text>
            <Text style={styles.content}>{experience}</Text>
        </View>
    )
}

export default ExperienceElement