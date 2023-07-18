import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const SkillsInput = ({ onSkills }) => {
    const [editSkills, setEditSkills] = useState("")
    const [isHidden, setIsHidden] = useState(true)

    const localStorageData = JSON.parse(localStorage.getItem("data")) || ""
    const [skills, setSkills] = useState(localStorageData.skills ? localStorageData.skills : "")

    const inputs = [
        { label: 'Įgudis', type: 'text', name: 'title', value: '', required: false },
        { label: 'Lygis', max: '10', min: '1', type: 'number', name: 'lvl', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        let updatedSkills = [...skills, data];
        if (editSkills) {

            updatedSkills = skills.map((item, index) => {
                if (index === data.index) {

                    return data
                }
                return item;
            })
            setEditSkills("")
        }
        setSkills(updatedSkills);
        onSkills(updatedSkills);
    }
    const deleteHandler = (index) => {
        const deletedSkills = skills.filter((item, i) => i !== index);
        setSkills(deletedSkills);

        const updatedData = { ...localStorageData, skills: deletedSkills };
        localStorage.setItem("data", JSON.stringify(updatedData));
        onSkills(deletedSkills)
    };

    const editHandler = (index) => {
        const editSkills = skills.find((item, i) => i === index);
        setEditSkills({ ...editSkills, index });
    };
    const isHiddenHandler = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className="form-inside-wrapper">
            {!isHidden && skills ?
                <ul>
                    {skills.map((item, index) =>
                        <li key={index}>
                            <span>{item.title} {item.lvl} Lygis</span>
                            <button onClick={() => editHandler(index)}>Keisti</button>
                            <button onClick={() => deleteHandler(index)}>X</button>
                        </li>
                    )}
                </ul>
                : ""}

            <button onClick={isHiddenHandler} className="page-title">Įgudžiai </button>
            {!isHidden ?
                <UniversalForm
                    inputs={inputs}
                    onAddData={addDataHandler}
                    newData={editSkills}
                />
                : ""}
        </div>
    )
}
export default SkillsInput