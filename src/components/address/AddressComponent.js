import React, {Component} from 'react';

class AddressComponent extends Component {
    render() {

        let {address} = this.props;

        return (
            <div>
                <h3>From now {address.name} live:</h3>
                <h5>
                    City: {address.address.city},
                    {address.address.street} street,
                    №{address.address.number}
                </h5>
                    ___________________________________________________________________________________
            </div>
        );
    }
}

export default AddressComponent;