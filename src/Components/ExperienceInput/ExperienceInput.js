import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const ExperienceInput = () => {
    const [editExperience, setEditExperience] = useState()

    const localStorageData = JSON.parse(localStorage.getItem("experience")) || ""
    const [experience, setExperience] = useState(localStorageData)

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
        localStorage.setItem("experience", JSON.stringify(updatedExperience));
    }
    const deleteHandler = (index) => {
        const deletedExperience = experience.filter(item => item !== experience[index])
        setExperience(deletedExperience);
        localStorage.setItem("experience", JSON.stringify(deletedExperience));
    }
    const editHandler = (index) => {
        const editExperience = experience.find(item => item === experience[index])
        setEditExperience({ experience: editExperience, index })
    }

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

            <h2 className="page-title">Patirtis</h2>
            <UniversalForm
                inputs={inputs}
                onAddData={addDataHandler}
                newData={editExperience}
            />
        </div>
    )
}
export default ExperienceInput