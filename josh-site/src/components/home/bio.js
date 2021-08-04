import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import josh from './josh.jpg';

class Bio extends Component {
    state = {  }
    render() { 
        return (
            <Card className="bio-card">
                <img src={josh} class="card-img-top" alt="..." />
                <Card.Body>
                    <Card.Text>
                        This is the site that I am making to try out React, as well as attempt coding some different projects i've been thinking about trying for a while.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
 
export default Bio;