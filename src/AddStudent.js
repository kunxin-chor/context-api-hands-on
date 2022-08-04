import React, { useContext, useState } from "react";
import StudentContext from "./StudentContext";

export default function AddStudent() {
    const [form, setForm] = useState({
        studentNumber: "",
        name: "",
        year: "",
        gender: "",
        graduated: ""
    })

    const context = useContext(StudentContext)

    const updateFormField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return <React.Fragment>
        <div>
            <label>Student Number:</label>
            <input type="text" name="studentNumber" value={form.studentNumber} onChange={updateFormField} />
        </div>
        <div>
            <label>Name:</label>
            <input type="text" name="name" value={form.name} onChange={updateFormField} />
        </div>
        <div>
            <label>Gender:</label>
            <input type="radio" name="gender" value="male" onChange={updateFormField} />
            <label>Male</label>
            <input type="radio" name="gender" value="female" onChange={updateFormField} />
            <label>Female</label>
        </div>
        <div>
            <label>Graduated:</label>
            <input type="radio" name="graduated" value={true} onChange={updateFormField} />
            <label>Yes</label>
            <input type="radio" name="graduated" value={false} onChange={updateFormField} />
            <label>No</label>
        </div>
        <div>
            <label>Year of Study:</label>
            <input type="text" name="year" value={form.year} onChange={updateFormField} />
        </div>
        <button onClick={() => {
            context.addStudent(form.studentNumber, form.name, form.year, form.gender, form.graduated)
        }}>Add</button>
    </React.Fragment>
}