import UniversalForm from "../../Components/Form/UniversalForm"
import Container from "../../Components/Container/Container";
import { useNavigate, useParams } from "react-router-dom";
import ExperienceInput from "../../Components/ExperienceInput/ExperienceInput";

const FormPage = () => {
    const { edit } = useParams()
    const navigate = useNavigate()
    const storedData = JSON.parse(localStorage.getItem("data"))
    const inputs = [
        { type: 'text', name: 'name', label: 'Vardas ir pavarde', value: '', required: true },
        { type: 'text', name: 'phone', label: 'Telefonas', value: '', required: false },
        { type: 'email', name: 'email', label: 'El. Paštas', value: '', required: false },
        { type: 'text', name: 'address', label: 'Adresas', value: '', required: false },
        { type: 'textarea', name: 'aboutMe', label: 'Apie mane', cols: 40, rows: 5, value: '', required: false },
        { label: 'Nuorodos pavadinimas', type: 'text', name: 'links.name', value: '', required: false },
        { label: 'Nuorodos linkas', type: 'url', name: 'links.url', value: '', required: false },
        { label: 'Pomėgiai', type: 'text', name: 'hobbies', value: '', required: false },
        { label: 'Vairuotojo pažymėjimo kategorijos', type: 'text', name: 'driverLicenses', value: '', required: false },
        { label: 'Gimimo data', type: 'text', name: 'birthday', value: '', required: false },
        { label: 'Tautybė', type: 'text', name: 'nationality', value: '', required: false },
        { label: 'Šeimyninė padėtis', type: 'text', name: 'maritalStatus', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        const json = JSON.stringify(data);
        localStorage.setItem("data", json);
        navigate(`/`);
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
                <ExperienceInput />
            </div>
        </Container>
    )
}

export default FormPage