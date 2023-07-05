import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";


const AboutMeElement = ({ aboutMe }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>APIE MANE</Text>
            <Text style={styles.content}>{aboutMe}</Text>
        </View>
    )
}

export default AboutMeElement