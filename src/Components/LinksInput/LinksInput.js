import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const LinksInput = ({ onLinks }) => {
    const [editLinks, setEditLinks] = useState("")
    const [isHidden, setIsHidden] = useState(true)

    const localStorageData = JSON.parse(localStorage.getItem("data")) || ""
    const [links, setLinks] = useState(localStorageData.links ? localStorageData.links : "")

    const inputs = [
        { label: 'Pavadinimas', type: 'text', name: 'name', value: '', required: false },
        { label: 'Nuoroda', type: 'url', name: 'url', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        let updatedLinks = [...links, data];
        if (editLinks) {

            updatedLinks = links.map((item, index) => {
                if (index === data.index) {

                    return data
                }
                return item;
            })
            setEditLinks("")
        }
        setLinks(updatedLinks);
        onLinks(updatedLinks);
    }
    const deleteHandler = (index) => {
        const deletedLinks = links.filter((item, i) => i !== index);
        setLinks(deletedLinks);

        const updatedData = { ...localStorageData, links: deletedLinks };
        localStorage.setItem("data", JSON.stringify(updatedData));
        onLinks(deletedLinks)
    };

    const editHandler = (index) => {
        const editLinks = links.find((item, i) => i === index);
        setEditLinks({ ...editLinks, index });
    };
    const isHiddenHandler = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className="form-inside-wrapper">
            <button onClick={isHiddenHandler} className="hidden-button">Nuorodos </button>
            {!isHidden && links ?
                <ul>
                    {links.map((item, index) =>
                        <li key={index}>
                            <span>{item.name} {item.url}
                                <button className='modify-button' onClick={() => editHandler(index)}>Keisti</button>
                                <button className='modify-button' onClick={() => deleteHandler(index)}>X</button></span>
                        </li>
                    )}
                </ul>
                : ""}


            {!isHidden ?
                <UniversalForm
                    inputs={inputs}
                    onAddData={addDataHandler}
                    newData={editLinks}
                />
                : ""}

        </div>
    )
}
export default LinksInput