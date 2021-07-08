import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, Alert, Row, Col, Button } from 'react-bootstrap';
import { formatCurrency } from '../utilityFunction';
import { updateStockCount } from '../redux/actions/robotAction';

export const Cart = () => {
    let dispatch = useDispatch();
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

    const updateStock = (itemId, type) => {
        dispatch(updateStockCount({payload: { itemId, type }}))
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
                                            <Row className="justify-content-md-around align-items-center">
                                                <Col>
                                                    <p className="mb-0">
                                                        { item.name } <br></br>
                                                        <small>{item.stock} x &#3647;{item.price}</small>
                                                    </p>
                                                    <Button variant="secondary" size="sm" className="btnspacing mr-3" disabled={item.stock == 1} onClick={() => updateStock(item.id, 'des')}>
                                                        <strong>-</strong>
                                                    </Button>
                                                    <Button variant="secondary" size="sm" className="btnspacing" onClick={() => updateStock(item.id, 'inc')}>
                                                        <strong>+</strong>
                                                    </Button>
                                                    <Row className="justify-content-center">
                                                        <Col>
                                                        </Col>
                                                        <Col>
                                                        </Col>
                                                    </Row>
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
