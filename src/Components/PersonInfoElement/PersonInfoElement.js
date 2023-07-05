import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const PersonInfoElement = ({ personInfo }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>ASMENINĖ INFORMACIJA</Text>
            {personInfo &&
                personInfo.map((item, index) => (
                    <Text key={index} style={styles.content}>
                        <Text style={styles.boldText2}>{item.title}</Text>
                        :{item.value}
                    </Text>
                ))}
        </View>
    )
}

export default PersonInfoElement