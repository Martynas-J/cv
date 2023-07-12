import { Page, Text, View, Document } from '@react-pdf/renderer';
import Bold from "../Elements/AbhayaLibre-Bold.ttf"
import Regular from "../Elements/AbhayaLibre-Regular.ttf"
import { Font } from '@react-pdf/renderer';
import styles from './styles';
import ContactsElement from '../ContactsElement/ContactsElement';
import AboutMeElement from '../AboutMeElement/AboutMeElement';
import LinksElement from '../LinksElement/LinksElement';
import HobbiesElement from '../HobbiesElement/HobbiesElement';
import DriverLicensesElement from '../DriverLicensesElement/DriverLicensesElement';
import PersonInfoElement from '../PersonInfoElement/PersonInfoElement';
import ExperienceElement from '../ExperienceElement/ExperienceElement';
import EducationElement from '../EducationElement/EducationElement';
import SkillsElement from '../SkillsElement/SkillsElement';
import CoursesElement from '../CoursesElement/CoursesElement';


const MyDocument = ({ data }) => {
    Font.register({ family: 'Bold', src: Bold });
    Font.register({ family: 'Regular', src: Regular });
    const { name, tel, email, address, aboutMe, links, hobbies, driverLicenses, birthday, nationality, maritalStatus, experience, education, skills, courses } = data

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.userName}>{name}</Text>
                <View style={styles.wrapper}>

                    <View style={styles.leftSection}>
                        {tel || email || address ? < ContactsElement contactsData={{ tel, email, address }} /> : ""}
                        {aboutMe && <AboutMeElement aboutMe={aboutMe} />}
                        {links && links.length !== 0 && <LinksElement links={links} />}
                        {hobbies && hobbies.length !== 0 && <HobbiesElement hobbies={hobbies} />}
                        {driverLicenses && driverLicenses.length !== 0 && <DriverLicensesElement driverLicenses={driverLicenses} />}
                        {birthday || nationality || maritalStatus ? < PersonInfoElement personInfo={{ birthday, nationality, maritalStatus }} /> : ""}
                    </View>

                    <View style={styles.RightSection}>
                        {experience && experience.length !== 0 && <ExperienceElement experience={experience} />}
                        {education && education.length !== 0 && <EducationElement education={education} />}
                        {skills && skills.length !== 0 && <SkillsElement skills={skills} />}
                        {courses && courses.length !== 0 && <CoursesElement courses={courses} />}
                    </View>

                </View>
            </Page>
        </Document >
    );
};

export default MyDocument;
