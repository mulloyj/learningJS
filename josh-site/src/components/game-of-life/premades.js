import React, { Component } from 'react';

const pulsar = [
    [9, 18], [9, 19], [9, 20], [9, 24], [9, 25], [9, 26],
    [11, 16], [11, 21], [11, 23], [11, 28],
    [12, 16], [12, 21], [12, 23], [12, 28],
    [13, 16], [13, 21], [13, 23], [13, 28],
    [14, 18], [14, 19], [14, 20], [14, 24], [14, 25], [14, 26],
    [16, 18], [16, 19], [16, 20], [16, 24], [16, 25], [16, 26],
    [17, 16], [17, 21], [17, 23], [17, 28],
    [18, 16], [18, 21], [18, 23], [18, 28],
    [19, 16], [19, 21], [19, 23], [19, 28],
    [21, 18], [21, 19], [21, 20], [21, 24], [21, 25], [21, 26],
];

const penta = [
    [14, 21], [14, 26],
    [15, 19], [15, 20], [15, 22], [15,23], [15, 24], [15, 25], [15, 27], [15, 28],
    [16, 21], [16, 26]
];

const glider = [
    [2, 3],
    [3, 4],
    [4, 2], [4, 3], [4, 4]
];

const lwss = [
    [3, 43], [3, 46],
    [4, 42],
    [5, 42], [5, 46],
    [6, 42], [6, 43], [6, 44], [6, 45]
];

const mwss = [
    [3, 46],
    [4, 44], [4, 48],
    [5, 43],
    [6, 43], [6, 48],
    [7, 43], [7, 44], [7, 45], [7, 46], [7, 47] 
];

const hwss = [
    [4, 42], [4, 43],
    [5, 40], [5, 45],
    [6, 39],
    [7, 39], [7, 45],
    [8, 39], [8, 40], [8, 41], [8, 42], [8, 43], [8, 44]
];

const gliderGun = [
    [4, 25],
    [5, 23], [5, 25],
    [6, 13], [6, 14], [6, 21], [6, 22], [6, 35], [6, 36],
    [7, 12], [7, 16], [7, 21], [7, 22], [7, 35], [7, 36],
    [8, 1], [8, 2], [8, 11], [8, 17], [8, 21], [8, 22],
    [9, 1], [9, 2], [9, 11], [9, 15], [9, 17], [9, 18], [9, 23], [9, 25],
    [10, 11], [10, 17], [10, 25],
    [11, 12], [11, 16],
    [12, 13], [12, 14]
];

class Premades extends Component {
    createPulsar = () => this.props.createPremade(pulsar);

    createPenta = () => this.props.createPremade(penta);

    createGlider = () => this.props.createPremade(glider);

    createLWSS = () => this.props.createPremade(lwss);

    createMWSS = () => this.props.createPremade(mwss);

    createHWSS = () => this.props.createPremade(hwss);

    createGliderGun = () => this.props.createPremade(gliderGun);
    
    render() { 
        return (
            <div>
                <button className="btn btn-light" onClick={this.createPulsar}>
                    Pulsar
                </button>
                <button className="btn btn-light" onClick={this.createPenta}>
                    Penta
                </button>
                <button className="btn btn-light" onClick={this.createGlider}>
                    Glider
                </button>
                <button className="btn btn-light" onClick={this.createLWSS}>
                    LW SS
                </button>
                <button className="btn btn-light" onClick={this.createMWSS}>
                    MW SS
                </button>
                <button className="btn btn-light" onClick={this.createHWSS}>
                    HW SS
                </button>
                <button className="btn btn-light" onClick={this.createGliderGun}>
                    Glider Gun
                </button>
            </div>
        );
    }
}
 
export default Premades;