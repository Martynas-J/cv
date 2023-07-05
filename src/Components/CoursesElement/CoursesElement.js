import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const CoursesElement = ({ courses }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title2}>KURSAI</Text>
            <View style={styles.double}>
                {courses &&
                    courses.map((course, index) => (
                        <View key={index} style={styles.half}>
                            <View style={styles.content}>
                                <Text style={styles.subtitle}>{course.name}</Text>
                                <Text>{' '}
                                    <Text style={styles.boldText2}>{course.institution} </Text>
                                    :{course.startDate} - {course.endDate}
                                </Text>
                            </View>
                        </View>
                    ))}
            </View>
        </View>
    )
}

export default CoursesElement