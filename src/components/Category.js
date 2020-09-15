import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getAllProducts, deleteProduct } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';

class Category extends Component {
    componentDidMount() {
        this.props.getAllProducts();
    }

    handleDel(id){
        this.props.deleteProduct(id);
        this.props.getAllProducts();
    }

    renderDel(id) {
        if (this.props.match.params.del === 'admin') {
            return <>
                <button className="btn btn-danger" onClick = {()=>this.handleDel(id)} >Delete</button>
            </>
        }
        return <div></div>
    }

    renderCategory() {
        if (!this.props.prods) {
            return <div>Loading..!</div>
        }
        return this.props.prods.map((prod) => {
            if (prod.selectCat === this.props.match.params.category) {
                return <div key={prod.id} className="clear-flex">
                    <div className="card col-md-3">
                        <div className="card-header">Name: {prod.name}</div>
                        <div className="card-body">Cost: {prod.cost} &nbsp; {this.renderDel(prod.id)}
                        </div>
                    </div><br />
                </div>
            }
            return <div></div>;
        })
    }
    renderCat = () => {
        if (!this.props.match) {
            return <div>Loading..!</div>
        }
        return <div><h2>{this.props.match.params.category}</h2></div>
    }
    render() {
        return (
            <div className="ml-3 mt-2">
                <h2 >{this.renderCat()}</h2>
                {this.renderCategory()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { prods: Object.values(state.products) };
}

export default connect(mapStateToProps, { getAllProducts, deleteProduct })(Category);