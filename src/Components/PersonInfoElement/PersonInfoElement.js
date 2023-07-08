import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const PersonInfoElement = ({ personInfo }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>ASMENINĖ INFORMACIJA</Text>
            {personInfo.birthday &&
                <Text style={styles.content}>
                    <Text style={styles.boldText2}>Gimimo data: </Text>
                    {personInfo.birthday}
                </Text>}
            {personInfo.nationality &&
                <Text style={styles.content}>
                    <Text style={styles.boldText2}>Tautybė: </Text>
                    {personInfo.nationality}
                </Text>}
            {personInfo.maritalStatus &&
                <Text style={styles.content}>
                    <Text style={styles.boldText2}>Šeimyninė padėtis: </Text>
                    {personInfo.maritalStatus}
                </Text>}
        </View>
    )
}

export default PersonInfoElement