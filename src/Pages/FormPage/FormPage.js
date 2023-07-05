import UniversalForm from "../../Components/Form/UniversalForm"
import Container from "../../Components/Container/Container";

const FormPage = () => {

    const inputs = [
        { type: 'text', name: 'name', label: 'Name', value: '', required: true },
        { type: 'text', name: 'galaxyGroup', label: 'Galaxy Group', value: '', required: true },
    ];
    const addStarHandler = (data) => {

    }

    return (
        <Container>
            <div className="form-wrapper">
                <h1 className="page-title">Pridėkite duomenis</h1>
                <UniversalForm
                    inputs={inputs}
                    onAddData={addStarHandler}
                />
            </div>
        </Container>
    )
}

export default FormPage