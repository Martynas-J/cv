import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const DriverLicensesElement = ({ driverLicenses }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>VAIRUOTOJO PAŽYMĖJIMAS</Text>
            {driverLicenses && (
                <Text style={styles.content}>
                    Vairuotojo pažymėjimo{' '}
                    {driverLicenses.length > 1 ? 'kategorijos' : 'kategorija'}:{' '}
                    {driverLicenses.join(', ')}
                </Text>
            )}
        </View>
    )
}

export default DriverLicensesElement