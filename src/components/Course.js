import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
class Course extends Component {
    handleClick = (name) => {
        console.log("mr.kakarot");
        alert("Hello" + name)
        
    }
    render() {
        const {src, title, des} = this.props.course;
        return (
            <Col md="4">
                <Card>
                    <CardImg top width="40%" src={src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{des}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        {/* <Button onClick={this.handleClick.bind(this, "Mr. Kakarot")}>Button</Button> */}
                        <Button onClick={ () => this.handleClick("Mr.Kakarot")}>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Course;