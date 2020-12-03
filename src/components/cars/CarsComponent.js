import React, {Component} from 'react';
import './Car.css'

class CarsComponent extends Component {

    render() {

        let {car} = this.props;

        return (
            <div>
                <h3>{car.producer}</h3>
                <p>model:{car.model}, year:{car.year}, type:{car.type}</p>
                <p>engine:{car.engine}, horse power:{car.power}</p>
                <p>Color: <span className={car.color}>{car.color}</span></p>
                ___________________________________________________________________________________
            </div>
        );
    }
}

export default CarsComponent;