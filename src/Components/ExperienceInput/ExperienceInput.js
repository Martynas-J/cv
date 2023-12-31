import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const ExperienceInput = ({ onExperience }) => {
    const [editExperience, setEditExperience] = useState()
    const [isHidden, setIsHidden] = useState(true)

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
    const isHiddenHandler = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className="form-inside-wrapper">
            <button onClick={isHiddenHandler} className="hidden-button">Darbo patirtis </button>
            {!isHidden && experience ?
                <ul>
                    {experience.map((item, index) =>
                        <li key={index}>
                            {item}
                            <button className='modify-button' onClick={() => editHandler(index)}>Keisti</button>
                            <button className='modify-button' onClick={() => deleteHandler(index)}>X</button>
                        </li>
                    )}
                </ul>
                : ""}
            {!isHidden ?
                <UniversalForm
                    inputs={inputs}
                    onAddData={addDataHandler}
                    newData={editExperience}
                />
                : ""}
        </div>
    )
}
export default ExperienceInput