import React, { Component } from 'react'
import { createItem } from './dataUtils';

export default class CreatePage extends Component {
    state = {
        name: '',
        limited: false,
        diameter: 0,
        price: 0,
        image: '',
        description: '',
        brand_id: 1
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleLimitedChange = () => {
        this.setState({ limited: !this.state.limited });
    }

    handleDiameterChange = (e) => {
        this.setState({ diameter: e.target.value });
    }

    handlePriceChange = (e) => {
        this.setState({ price: e.target.value });
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value });
    }

    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    }

    handleBrandId = (e) => {
        this.setState({ brand_id: Number(e.target.value) });
    }

    handleSubmit = async () => {
        await createItem(this.state);
        this.props.history.push('/watches');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Limited:
                        <input value={this.state.limited} onChange={this.handleLimitedChange} />
                    </label>
                    <label>
                        Diameter:
                        <input type="number" value={this.state.diameter} onChange={this.handleDiameterChange} />
                    </label>
                    <label>
                        Price:
                        <input type="number" value={this.state.price} onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        Image URL:
                        <input value={this.state.image} onChange={this.handleImageChange} />
                    </label>
                    <label>
                        Description:
                        <input value={this.state.description} onChange={this.handleDescriptionChange} />
                    </label>
                    <select value={this.state.brand_id} onChange={this.handleBrandId}>
                        <option value={1}>omega</option>
                        <option value={2}>seiko</option>
                        <option value={3}>tagheuer</option>
                        <option value={4}>certina</option>
                    </select>
                    <button>Create New Watch</button>
                </form>
            </div>
        )
    }
}
