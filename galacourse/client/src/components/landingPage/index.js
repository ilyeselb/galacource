import React, { useEffect, useState } from 'react';
import ListCourses from './ListCourses/listCourses';
import CoursePage from "../landingPage/coursePage/coursePage"
import axios from "axios"

const LandingPage = () => {
 const [courses , setCourses]  = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/courses").then(course => {
            setCourses(prev => [...course.data])
        })
        console.log(courses);
    },[])
        return (
        <div>
            <ListCourses courses={courses}/>
            {/* <CoursePage /> */}
        </div>
    );
};

export default LandingPage;