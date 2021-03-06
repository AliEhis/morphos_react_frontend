import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRobots, addToCart, reduceRobotStock } from '../redux/actions/robotAction';
import {
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import { formatCurrency } from '../functions'

export const RobotsList = () => {
    let dispatch = useDispatch();
    const { robots } = useSelector((state) => state.data);

    const sanitizeDate = (data) => {
        // remove the extra date character, and reverse the string
        // by splitting into an array, reversing and joining
        return data.substr(0, 10).split('-').reverse().join('-');
    }

    const checkStock = (stock) => {
        // confirm if stock exist
        return stock <= 0
    }

    const addItemToCart = (item) => {
        // dispatch the add to cart functionality
        dispatch(addToCart(item))
        dispatch(reduceRobotStock(item.id))
    }

    useEffect(() => {
        dispatch(getRobots())
    }, []);

    return (
        <Row>
            {robots && robots.map((robot, index) => {
                return (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card className="mb-3 cardElevate">
                            <Card.Img variant="top" src={robot.image} />
                            <Card.Body>
                                <Card.Title>
                                    {robot.name}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">&#3647; {formatCurrency(robot.price)}</Card.Subtitle>
                                <Card.Text>
                                    <Row className="justify-content-between">
                                        <Col sm={12} md={6}>
                                            {robot.material}
                                        </Col>
                                        <Col sm={12} md={6} className="text-right">
                                            Qty: {robot.stock}
                                        </Col>
                                    </Row>
                                </Card.Text>
                                {
                                    checkStock(robot.stock) ? (
                                        <Button variant="warning" block disabled style={{ cursor: "not-allowed" }}>Out of stock</Button>
                                    ) : (
                                        <Button variant="primary" block onClick={() => addItemToCart(robot)}>Add to Cart</Button>
                                    )
                                }
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <small className="text-muted">Date Added: {sanitizeDate(robot.createdAt)}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}
