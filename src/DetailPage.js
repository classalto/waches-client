import React, { Component } from 'react';
import { updateItem } from './dataUtils.js';
import Header from './Header.js';

export default class DetailPage extends Component {
    state = {
        brands: [],
        brand_id: 1,
        name: '',
        limited: false,
        diameter_mm: 0,
        price: 0,
        image: '',
        description: '',
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    handleLimitedChange = (e) => {
        this.setState({limited: !this.state.limited});
    }

    handleDiameterChange = (e) => {
        this.setState({diameter_mm: e.target.value});
    }

    handlePriceChange = (e) => {
        this.setState({price: e.target.value});
    }

    handleImageChange = (e) => {
        this.setState({image: e.target.value});
    }

    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await updateItem(this.props.match.params.watchId, this.state);
        this.props.history.push('/watches');
    }

    render() {
        return (
            <div className="item-container">
                Watch Details
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Watch Name
                        <input value={this.state.name} type="text" onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Limited Edition
                        <input value={this.state.limited} type="checkbox" onChange={this.handleLimitedChange} checked={this.state.limited}/>
                    </label>
                    <label>
                        Face Diameter (mm)
                        <input value={this.state.diameter_mm} type="number" onChange={this.handleDiameterChange} />
                    </label>
                    <label>
                        Price
                        <input value={this.state.price} type="number" onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        Image URL
                        <input value={this.state.image} type="text" onChange={this.handleImageChange} />
                    </label>
                    <label>
                        Description
                        <input value={this.state.description} type="text" onChange={this.handleDescriptionChange} />
                    </label>
                    <select>
                        {
                            this.state.brands.map((brand) => <option value={brand.id} selected={this.state.brand_id === brand.id}>
                                {brand.brand_name}
                            </option>)
                        }
                    </select>
                    
                    <button>Update Watch</button>
                </form>
            </div>
        )
    }
}
