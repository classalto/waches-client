import React, { Component } from 'react'
import { getItems } from './dataUtils.js';
import Spinner from './Spinner.js';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = {
        watches: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const watches = await getItems();

        this.setState({ watches: watches, loading: false });
    }

    render() {
        return (
            <div>
                {this.state.loading && <Spinner /> }

                {this.state.watches.map(watch => 
                    <Link to={`/watches/${watch.id}`} key={watch.name}>
                        <div>
                        <img alt="watch" src={watch.image} />
                        <p>Name: {watch.name}</p>
                        <p>Limited: {watch.limited}</p>
                        <p>Diameter: {watch.diameter_mm}</p>
                        <p>Price: {watch.price}</p>
                        <p>Description: {watch.description}</p>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}
