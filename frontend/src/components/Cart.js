import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, Alert, Button } from 'react-bootstrap';

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

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
                                            { item.id } { item.name }
                                        </ListGroup.Item>
                                    )
                                })}
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
