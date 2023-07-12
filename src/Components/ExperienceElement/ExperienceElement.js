import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const ExperienceElement = ({ experience }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title2}>DARBO PATIRTIS</Text>
            <View style={styles.double}>
                {experience &&
                    experience.map((item, index) => (
                        <View key={index} style={styles.half}>
                            <View style={styles.content}>
                                <Text >{item}</Text>
                            </View>
                        </View>
                    ))}
            </View>
        </View>
    )
}

export default ExperienceElement