import { connect } from 'react-redux';
import React, { Component } from 'react';
import { categories } from '../actions';
import { Link } from 'react-router-dom';

class ViewProducts extends Component {
    componentDidMount() {
        this.props.categories();
    }
    renderProdCategories() {
        if (!this.props.prodCategories) {
            return <div>Loading..!</div>
        }
        return this.props.prodCategories.map((category, index) => {
            return <div key={index} className="card col-md-3" > <Link className="card-body" to={`/product/${category}`}><h4>{category}</h4></Link></div>;
        })
    }
    render() {
        return (
            <div className = "ml-3 mt-2">
                {/* {console.log(this.props)} */}
                <h2>Category</h2>
                <div>{this.renderProdCategories()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products), prodCategories: state.categories };
}

export default connect(mapStateToProps, { categories })(ViewProducts);