import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const EducationInput = ({ onEducation }) => {
    const [editEducation, setEditEducation] = useState("")

    const localStorageData = JSON.parse(localStorage.getItem("data")) || ""
    const [education, setEducation] = useState(localStorageData.education ? localStorageData.education : "")

    const inputs = [
        { label: 'Laipsnis', type: 'text', name: 'title', value: '', required: false },
        { label: 'Vieta', type: 'text', name: 'place', value: '', required: false },
        { label: 'Įstaiga', type: 'text', name: 'institution', value: '', required: false },
        { label: 'Metai', type: 'text', name: 'year', value: '', required: false },
        { label: 'Apibudinimas', type: 'text', name: 'describe', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        let updatedEducation = [...education, data];
        if (editEducation) {

            updatedEducation = education.map((item, index) => {
                if (index === data.index) {

                    return data
                }
                return item;
            })
            setEditEducation("")
        }
        setEducation(updatedEducation);
        onEducation(updatedEducation);
    }
    const deleteHandler = (index) => {
        const deletedEducation = education.filter((item, i) => i !== index);
        setEducation(deletedEducation);

        const updatedData = { ...localStorageData, education: deletedEducation };
        localStorage.setItem("data", JSON.stringify(updatedData));
        onEducation(deletedEducation)
    };

    const editHandler = (index) => {
        const editEducation = education.find((item, i) => i === index);
        setEditEducation({ ...editEducation, index });
    };

    return (
        <div className="form-inside-wrapper">
            {education ?
                <ul>
                    {education.map((item, index) =>
                        <li key={index}>
                            <span className="bold">{item.title}</span>
                            {item.place}, {item.institution} {item.year}
                            <p>{item.describe}</p>
                            <button onClick={() => editHandler(index)}>Keisti</button>
                            <button onClick={() => deleteHandler(index)}>X</button>
                        </li>
                    )}
                </ul>
                : ""}

            <h2 className="page-title">Išsilavinimas</h2>
            <UniversalForm
                inputs={inputs}
                onAddData={addDataHandler}
                newData={editEducation}
            />
        </div>
    )
}
export default EducationInput