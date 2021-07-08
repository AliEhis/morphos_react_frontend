import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, Alert, Row, Col, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilityFunction'

export const Cart = () => {
    const { cartItems } = useSelector((state) => state.data);

    const calculateItem = (item) => {
        return Number(item.price) * Number(item.stock)
    }

    const totalPrice = () => {
        // calculates the total price of all items in the cart 
        return cartItems.reduce((result, item) => result + Number(item.price) * Number(item.stock), 0)
    }

    const totalNumber = () => {
        return cartItems.length
    }

    useEffect(() => {

    }, []);

    return (
        <Card
            bg="light"
            text="dark"
            className="mb-2"
        >
            <Card.Header>Cart</Card.Header>
            <Card.Body>
                {
                    cartItems.length > 0 ?
                        (
                            <ListGroup variant="flush">
                                {cartItems.map((item, index) => {
                                    return (
                                        <ListGroup.Item key={index}>
                                            <Row className="justify-content-md-around">
                                                <Col>
                                                    <p>
                                                        { item.name } <br></br>
                                                        <small>{item.stock} x {item.price}</small>
                                                    </p>
                                                </Col>
                                                <Col>
                                                    <p className="text-right">&#3647;{Number(calculateItem(item)).toFixed(2)}</p>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                })}
                                <ListGroup.Item>
                                    <Row className="justify-content-md-around">
                                        <Col>
                                            <p>
                                                <strong>Total number:</strong>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="text-right">{totalNumber()}</p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-around">
                                        <Col>
                                            <p>
                                                <strong>Total Price:</strong>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="text-right">&#3647;{formatCurrency(totalPrice().toFixed(2))}</p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        ) :
                        (
                            <Alert variant="warning">
                                Your cart is empty.
                            </Alert>
                        )
                }
            </Card.Body>
        </Card>
    )
}
