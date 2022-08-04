import React, { useState } from "react";
import AddStudent from "./AddStudent";
import StudentContext from "./StudentContext";
import StudentListing from "./StudentListing";

function App() {
  const [students, setStudents] = useState([
    { studentNumber: 1020, name: "John", year: 2020, gender: "male", graduated: true },
    { studentNumber: 1021, name: "Alan", year: 2020, gender: "male", graduated: true },
    { studentNumber:1022, name: "Daniel", year:2020, gender:"male", graduated: true}
  ])

  const context = {
    getStudents: ()=>{
      return students;
    },
    addStudent: (studentNumber, name, year, gender, graduated) => {
      setStudents([
        ...students,
        {
          studentNumber, name, year, gender, graduated
        }
      ])
    }
  }
  return (
     <React.Fragment>
      <StudentContext.Provider value={context}>
        <StudentListing/>
        <AddStudent/>
      </StudentContext.Provider>

    </React.Fragment>
  );
}

export default App;
