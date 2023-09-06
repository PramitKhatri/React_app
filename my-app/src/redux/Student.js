import React from 'react'
import { useSelector } from 'react-redux'
import StudentForm from './StudentForm'

const Student = () => {
    const info = useSelector(store => store.student)  //student points to the initial data of studentReducer.js

    return (
            <>
            <h1 className='text-center text-success'>The name of the student is {info.studentName}</h1>
            <StudentForm/>
    </>
  )
}

export default Student