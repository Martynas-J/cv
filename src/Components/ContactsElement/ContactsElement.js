import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import styles from "../MyDocument/styles";

const ContactsElement = ({ contactsData }) => {
    const { phone, email, address } = contactsData
    return (
        <View style={styles.section}>
            <Text style={styles.title}>KONTAKTAI</Text>
            {phone && (
                <View>
                    <Text style={styles.boldText}> Telefono Numeris:</Text>
                    <Text style={styles.content}>{phone}</Text>
                </View>
            )}
            {email && (
                <View>
                    <Text style={styles.boldText}>El.paštas:</Text>
                    <Text style={styles.content}>{email}</Text>
                </View>
            )}
            {address && (
                <View>
                    <Text style={styles.boldText}>Adresas:</Text>
                    <Text style={styles.content}>{address}</Text>
                </View>
            )}
        </View>
    )
}

export default ContactsElement
