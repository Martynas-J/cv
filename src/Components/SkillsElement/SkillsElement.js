import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const SkillsElement = ({ skills }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title2}>ĮGUDŽIAI</Text>
            <View style={styles.double}>
                {skills &&
                    skills.map((skill, index) => (
                        <View key={index} style={styles.half}>
                            <View style={styles.content}>
                                <Text style={styles.subtitle}>{skill.title}</Text>
                                <View style={styles.extendedBar} >
                                    <View style={[styles.bar, { width: skill.lvl * 10 }]} />
                                </View>
                            </View>
                        </View>
                    ))}
            </View>
        </View>
    )
}

export default SkillsElement