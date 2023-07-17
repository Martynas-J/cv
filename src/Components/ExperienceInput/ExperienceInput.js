import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const ExperienceInput = ({ onExperience }) => {
    const [editExperience, setEditExperience] = useState()

    const localStorageData = JSON.parse(localStorage.getItem("data")) || ""
    const [experience, setExperience] = useState(localStorageData.experience ? localStorageData.experience : "")

    const inputs = [
        { label: 'Patirtis', type: 'text', name: 'experience', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        let updatedExperience = [...experience, data.experience];
        if (editExperience) {
            updatedExperience = experience.map((item, index) => {
                if (index === data.index) {
                    return data.experience
                }
                return item;
            })
            setEditExperience("")
        }
        setExperience(updatedExperience);
        onExperience(updatedExperience);
    }
    const deleteHandler = (index) => {
        const deletedExperience = experience.filter((item, i) => i !== index);
        setExperience(deletedExperience);

        const updatedData = { ...localStorageData, experience: deletedExperience };
        localStorage.setItem("data", JSON.stringify(updatedData));
        onExperience(deletedExperience)
    };

    const editHandler = (index) => {
        const editExperience = experience.find((item, i) => i === index);
        setEditExperience({ experience: editExperience, index });
    };

    return (
        <div className="form-inside-wrapper">
            {experience ?
                <ul>
                    {experience.map((item, index) =>
                        <li key={index}>
                            {item}
                            <button onClick={() => editHandler(index)}>Keisti</button>
                            <button onClick={() => deleteHandler(index)}>X</button>
                        </li>
                    )}
                </ul>
                : ""}

            <h2 className="page-title">Darbo patirtis</h2>
            <UniversalForm
                inputs={inputs}
                onAddData={addDataHandler}
                newData={editExperience}
            />
        </div>
    )
}
export default ExperienceInput