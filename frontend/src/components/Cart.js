import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, Alert, Row, Col, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilityFunction'

export const Cart = () => {
    const cartItems = useSelector((state) => state.data.cartItems);

    const calculateItem = (item) => {
        return Number(item.price) * Number(item.stock)
    }

    const totalPrice = () => {
        return cartItems.reduce((acc, item) => acc + Number(item.price) * Number(item.stock), 0)
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
                                                <strong>Grand Total:</strong>
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="text-right">&#3647;{totalPrice()}</p>
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
