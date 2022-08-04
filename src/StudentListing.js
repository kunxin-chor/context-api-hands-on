import React, { useContext } from "react";
import StudentContext from "./StudentContext";

export default function StudentListing() {
    const context = useContext(StudentContext);
    const students = context.getStudents();
    return (
        <React.Fragment>
            <h1>Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.studentNumber}>
                        {student.name} - {student.year}
                    </li>))}
            </ul>
        </React.Fragment>
    )
}