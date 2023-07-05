import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const LinksElement = ({ links }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>NUORODOS</Text>
            {links &&
                links.map((link, index) => (
                    <View key={index}>
                        <Text style={styles.boldText}>{link.name}:</Text>
                        <Text style={styles.content}>{link.url}</Text>
                    </View>
                ))}
        </View>
    )
}

export default LinksElement