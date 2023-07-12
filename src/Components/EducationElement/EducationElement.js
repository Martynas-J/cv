import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const EducationElement = ({ education }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title2}>IŠSILAVINIMAS</Text>
            <View style={styles.double}>
                {education &&
                    education.map((item, index) => (
                        <View key={index} style={styles.half}>
                            <View style={styles.content}>
                                <Text style={styles.subtitle}>{item.title}</Text>
                                <Text>
                                    {item.place}, {item.institution} {item.year}
                                </Text>
                                <Text>{item.describe}</Text>
                            </View>
                        </View> 
                    ))}
            </View>
        </View>
    )
}

export default EducationElement