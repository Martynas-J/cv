import React, { useState } from 'react'
import UniversalForm from '../Form/UniversalForm';

const CoursesInput = ({ onCourses }) => {
    const [editCourses, setEditCourses] = useState("")

    const localStorageData = JSON.parse(localStorage.getItem("data")) || ""
    const [courses, setCourses] = useState(localStorageData.courses ? localStorageData.courses : "")

    const inputs = [
        { label: 'Pavadinimas', type: 'text', name: 'name', value: '', required: false },
        { label: 'Įstaiga', type: 'text', name: 'institution', value: '', required: false },
        { label: 'Pradžios data', type: 'text', name: 'startDate', value: '', required: false },
        { label: 'Pabaigos data', type: 'text', name: 'endDate', value: '', required: false },
    ];
    const addDataHandler = (data) => {
        let updatedCourses = [...courses, data];
        if (editCourses) {

            updatedCourses = courses.map((item, index) => {
                if (index === data.index) {

                    return data
                }
                return item;
            })
            setEditCourses("")
        }
        setCourses(updatedCourses);
        onCourses(updatedCourses);
    }
    const deleteHandler = (index) => {
        const deletedCourses = courses.filter((item, i) => i !== index);
        setCourses(deletedCourses);

        const updatedData = { ...localStorageData, courses: deletedCourses };
        localStorage.setItem("data", JSON.stringify(updatedData));
        onCourses(deletedCourses)
    };

    const editHandler = (index) => {
        const editCourses = courses.find((item, i) => i === index);
        setEditCourses({ ...editCourses, index });
    };

    return (
        <div className="form-inside-wrapper">
            {courses ?
                <ul>
                    {courses.map((item, index) =>
                        <li key={index}>
                            <span>{item.name} {item.institution} {item.startDate} - {item.endDate} </span>

                            <button onClick={() => editHandler(index)}>Keisti</button>
                            <button onClick={() => deleteHandler(index)}>X</button>
                        </li>
                    )}
                </ul>
                : ""}

            <h2 className="page-title">KURSAI</h2>
            <UniversalForm
                inputs={inputs}
                onAddData={addDataHandler}
                newData={editCourses}
            />
        </div>
    )
}
export default CoursesInput