import React, { Component } from 'react';
import Course from './Course'
import { Container, Row } from 'reactstrap';
import data from '../data.js';
class CourseList extends Component {
    render() {
        const elmCourse = data.map((course, index) => {
             return <Course 
             key={index}
             course={course} // course truyen thang obs vao luon nhe then em
         />
         });
        return (
            <Container>
                <Row>
                    {elmCourse}
                </Row>
            </Container>
        );
    }
}

export default CourseList;