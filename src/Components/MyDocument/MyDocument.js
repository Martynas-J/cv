import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Bold from "../Elements/AbhayaLibre-Bold.ttf"
import Regular from "../Elements/AbhayaLibre-Regular.ttf"
import { Font } from '@react-pdf/renderer';

const MyDocument = ({ data }) => {
    Font.register({ family: 'Bold', src: Bold });
    Font.register({ family: 'Regular', src: Regular });
    const styles = StyleSheet.create({

        page: {
            backgroundColor: '#fff',
        },
        wrapper: {
            display: "flex",
            flexDirection: 'row',
        },
        leftSection: {
            backgroundColor: 'rgb(224, 224, 224)',
            flex: 1,
            padding: 20
        },
        RightSection: {
            backgroundColor: 'white',
            flex: 3,
            padding: 20,
        },
        section: {
            marginBottom: 20,
        },
        title: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
            textTransform: 'uppercase',
            fontFamily: "Bold",
            display: "flex",
            wrap: 'wrap',
        },
        title2: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 10,
            textTransform: 'uppercase',
            fontFamily: "Bold",
            borderBottom: '1 solid black'
        },
        userName: {
            fontSize: 25,
            fontWeight: 800,
            textTransform: 'uppercase',
            fontFamily: "Bold",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            padding: "35px 0",
            letterSpacing: "7px",
        },
        subtitle: {
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily: "Regular",
        },
        boldText: {
            fontFamily: "Bold",
            fontSize: 10,
        },
        boldText2: {
            fontFamily: "Bold",
        },
        content: {
            fontSize: 9,
            marginBottom: 10,
            fontFamily: "Regular",
        },
        double: {
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        half: {
            flex: '0 0 50%',
            padding: 10,
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.userName}>{data.name}</Text>
                <View style={styles.wrapper}>
                    <View style={styles.leftSection}>
                        <View style={styles.section}>
                            <Text style={styles.title}>KONTAKTAI</Text>
                            {data.tel && (
                                <View>
                                    <Text style={styles.boldText}> Telefono Numeris:</Text>
                                    <Text style={styles.content}>{data.tel}</Text>
                                </View>
                            )}
                            {data.email && (
                                <View>
                                    <Text style={styles.boldText}>El.paštas:</Text>
                                    <Text style={styles.content}>{data.email}</Text>
                                </View>
                            )}
                            {data.address && (
                                <View>
                                    <Text style={styles.boldText}>Adresas:</Text>
                                    <Text style={styles.content}>{data.address}</Text>
                                </View>
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
                                    <View key={index}>
                                        <Text style={styles.boldText}>{link.name}:</Text>
                                        <Text style={styles.content}>{link.url}</Text>
                                    </View>
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
                                        <Text style={styles.boldText2}>{item.title}</Text>
                                        :{item.value}
                                    </Text>
                                ))}
                        </View>
                    </View>
                    <View style={styles.RightSection}>
                        <View style={styles.section}>
                            <Text style={styles.title2}>DARBO PATIRTIS</Text>
                            <Text style={styles.content}>{data.experience}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title2}>IŠSILAVINIMAS</Text>
                            <View style={styles.double}>
                                {data.education &&
                                    data.education.map((item, index) => (
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
                        <View style={styles.section}>
                            <Text style={styles.title2}>ĮGUDŽIAI</Text>
                            <View style={styles.double}>
                                {data.skills &&
                                    data.skills.map((skill, index) => (
                                        <View key={index} style={styles.half}>
                                            <View style={styles.content}>
                                                <Text style={styles.subtitle}>{skill.title}</Text>
                                                <Text>{skill.lvl}</Text>
                                            </View>
                                        </View>
                                    ))}
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title2}>KURSAI</Text>
                            <View style={styles.double}>
                                {data.courses &&
                                    data.courses.map((course, index) => (
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
                    </View>
                </View>
            </Page>
        </Document >
    );
};

export default MyDocument;
