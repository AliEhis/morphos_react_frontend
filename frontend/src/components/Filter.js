import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form } from 'react-bootstrap';
import { filterRobots } from '../redux/actions/robotAction';

export const Filter = () => {
    const dispatch = useDispatch()
    const { allRobots } = useSelector((state) => state.data);

    const materials = [...new Set(allRobots.map(item => item.material))];

    const [material, setMaterial] = useState("all");

    const filterMaterial = (material) => {
        setMaterial(material)
        dispatch(filterRobots(material))
    }

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
                <Form.Check
                    type="radio"
                    label="All material"
                    name="material"
                    checked={material == "all"}
                    onClick={() => filterMaterial("all")}
                />
                {materials.map((item, index) => {
                    return (
                        <Form.Check
                            type="radio"
                            label={item}
                            name="material"
                            checked={material == item}
                            onClick={() => filterMaterial(item)}
                            key={index}
                        />
                    )
                })}
            </Card.Body>
        </Card>
    )
}
