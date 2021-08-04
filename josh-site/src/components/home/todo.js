import React, { Component } from 'react';

import {Card, ListGroup } from 'react-bootstrap';

class Todo extends Component {
    render() { 
        return (
            <Card className="todo-card">
                <Card.Header as="h5">
                    Things I want to add
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Shortest Path Algorithm Visualizer</ListGroup.Item>
                    <ListGroup.Item>Sorting Algorithm Visualizer</ListGroup.Item>
                    <ListGroup.Item>3N+1 Visualizer</ListGroup.Item>
                    <ListGroup.Item>Golden Ratio Visualizer</ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}
 
export default Todo;