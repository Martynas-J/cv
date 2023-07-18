import UniversalForm from "../../Components/Form/UniversalForm"
import Container from "../../Components/Container/Container";
import { useNavigate, useParams } from "react-router-dom";
import ExperienceInput from "../../Components/ExperienceInput/ExperienceInput";
import { useState } from "react";
import EducationInput from "../../Components/EducationInput/EducationInput";
import SkillsInput from "../../Components/SkillsInput/SkillsInput";
import CoursesInput from "../../Components/CoursesInput/CoursesInput";
import LinksInput from "../../Components/LinksInput/LinksInput";

const FormPage = () => {
    const { edit } = useParams()
    const navigate = useNavigate()

    const storedData = JSON.parse(localStorage.getItem("data"));
    const [experience, setExperience] = useState(storedData ? storedData.experience : "")
    const [education, setEducation] = useState(storedData ? storedData.education : "")
    const [skills, setSkills] = useState(storedData ? storedData.skills : "")
    const [courses, setCourses] = useState(storedData ? storedData.courses : "")
    const [links, setLinks] = useState(storedData ? storedData.links : "")

    const inputs = [
        { type: 'text', name: 'name', label: 'Vardas ir pavarde', value: '', required: true },
        { type: 'text', name: 'phone', label: 'Telefonas', value: '', required: false },
        { type: 'email', name: 'email', label: 'El. Paštas', value: '', required: false },
        { type: 'text', name: 'address', label: 'Adresas', value: '', required: false },
        { type: 'textarea', name: 'aboutMe', label: 'Apie mane', cols: 40, rows: 5, value: '', required: false },
        { label: 'Pomėgiai', type: 'text', name: 'hobbies', value: '', required: false },
        { label: 'Vairuotojo pažymėjimo kategorijos', type: 'text', name: 'driverLicenses', value: '', required: false },
        { label: 'Gimimo data', type: 'text', name: 'birthday', value: '', required: false },
        { label: 'Tautybė', type: 'text', name: 'nationality', value: '', required: false },
        { label: 'Šeimyninė padėtis', type: 'text', name: 'maritalStatus', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        const combinedData = { ...data, experience, education, skills, courses, links };
        localStorage.setItem("data", JSON.stringify(combinedData));
        navigate(`/`);
    };
    const addExperience = (data) => {
        setExperience(data)
    }
    const addEducation = (data) => {
        setEducation(data)
    }
    const addSkills = (data) => {
        setSkills(data)
    }
    const addCourses = (data) => {
        setCourses(data)
    }
    const addLinks = (data) => {
        setLinks(data)
    }

    return (
        <Container>
            <div className="form-wrapper">
                <h1 className="page-title">Pridėkite duomenis</h1>
                <UniversalForm
                    inputs={inputs}
                    onAddData={addDataHandler}
                    newData={edit ? storedData : ""}
                />
                <LinksInput onLinks={addLinks} />
                <ExperienceInput onExperience={addExperience} />
                <EducationInput onEducation={addEducation} />
                <SkillsInput onSkills={addSkills} />
                <CoursesInput onCourses={addCourses} />
            </div>
        </Container>
    )
}

export default FormPage