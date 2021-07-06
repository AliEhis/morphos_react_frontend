import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, Form, Button } from 'react-bootstrap';

export const Filter = () => {
    const robots = useSelector((state) => state.data.robots);

    const materials = [...new Set(robots.map(item => item.material))];

    useEffect(() => {
        
    }, []);

    return (
        <Card
            bg="light"
            text="dark"
            className="mb-2"
        >
            <Card.Header>Filter</Card.Header>
            <Card.Body>
                <Card.Title>Materials</Card.Title>
                {materials.map((item, index) => {
                    return (
                        <Form.Check
                            type="radio"
                            label={item}
                            name="formHorizontalRadios"
                            key={index}
                        />
                    )
                })}
            </Card.Body>
        </Card>
    )
}
