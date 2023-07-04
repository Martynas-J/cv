import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Arial from "../Elements/AbhayaLibre-Regular.ttf"
import { Font } from '@react-pdf/renderer';

const MyDocument = ({ data }) => {
    Font.register({ family: 'Arial', src: Arial });
    const styles = StyleSheet.create({

        page: {
            backgroundColor: '#fff',
            padding: 40,
        },
        section: {
            marginBottom: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 40,
            textTransform: 'uppercase',
            fontFamily: "Arial",
        },
        userName: {
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 40,
            textTransform: 'uppercase',
            fontFamily: "Arial",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            padding: "60px 0",
            letterSpacing: "7px",
        },
        subtitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            fontFamily: "Arial",
        },
        content: {
            fontSize: 12,
            marginBottom: 10,
            fontFamily: "Arial",
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.userName}>{data.name}</Text>
                    {data.tel && (
                        <Text style={styles.content}>
                            Telefono Numeris: {data.tel}
                        </Text>
                    )}
                    {data.email && (
                        <Text style={styles.content}>El.paštas: {data.email}</Text>
                    )}
                    {data.address && (
                        <Text style={styles.content}>Adresas: {data.address}</Text>
                    )}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>APIE MANE</Text>
                    <Text style={styles.content}>{data.aboutMe}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>NUORODOS</Text>
                    {data.links &&
                        data.links.map((link, index) => (
                            <Text key={index} style={styles.content}>
                                {link.name}: {link.url}
                            </Text>
                        ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>POMĖGIAI</Text>
                    {data.hobbies && (
                        <Text style={styles.content}>{data.hobbies.join(', ')}</Text>
                    )}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>VAIRUOTOJO PAŽYMĖJIMAS</Text>
                    {data.driverLicenses && (
                        <Text style={styles.content}>
                            Vairuotojo pažymėjimo{' '}
                            {data.driverLicenses.length > 1 ? 'kategorijos' : 'kategorija'}:{' '}
                            {data.driverLicenses.join(', ')}
                        </Text>
                    )}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>ASMENINĖ INFORMACIJA</Text>
                    {data.personInfo &&
                        data.personInfo.map((item, index) => (
                            <Text key={index} style={styles.content}>
                                {item.title}: {item.value}
                            </Text>
                        ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>DARBO PATIRTIS</Text>
                    <Text style={styles.content}>{data.experience}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>IŠSILAVINIMAS</Text>
                    {data.education &&
                        data.education.map((item, index) => (
                            <View key={index} style={styles.content}>
                                <Text style={styles.subtitle}>{item.title}</Text>
                                <Text>
                                    {item.place}, {item.institution} {item.year}
                                </Text>
                                <Text>{item.describe}</Text>
                            </View>
                        ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>ĮGUDŽIAI</Text>
                    {data.skills &&
                        data.skills.map((skill, index) => (
                            <View key={index} style={styles.content}>
                                <Text style={styles.subtitle}>{skill.title}</Text>
                                <Text>{skill.lvl}</Text>
                            </View>
                        ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>KURSAI</Text>
                    {data.courses &&
                        data.courses.map((course, index) => (
                            <View key={index} style={styles.content}>
                                <Text>
                                    <Text style={styles.subtitle}>{course.name}</Text>{' '}
                                    {course.institution} {course.startDate} - {course.endDate}
                                </Text>
                            </View>
                        ))}
                </View>
            </Page>
        </Document>
    );
};

export default MyDocument;
