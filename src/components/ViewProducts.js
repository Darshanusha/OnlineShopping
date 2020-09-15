import { connect } from 'react-redux';
import React, { Component } from 'react';
import { categories } from '../actions';
import { Link } from 'react-router-dom';

class ViewProducts extends Component {
    componentDidMount() {
        this.props.categories();
    }
    renderProdCategories() {
        //console.log(this.props);
        if (!this.props.prodCategories) {
            return <div>Loading..!</div>
        }
        return this.props.prodCategories.map((category, index) => {
            //console.log(this.props.fromAdmin);
            return <div key={category.id} className="card col-md-4" >
                 {this.getCard(category)}
                 </div>;
        })
    }

    getCard = (category)=>{
        if(!this.props.fromAdmin){
            return <div>
            <Link className="card-body" to={`/product/${category.name}/user`}>
        <h4>{category.name}</h4></Link>
        </div>
        }
        return <div>
            <Link className="card-body" to={`/product/${category.name}/admin`}>
        <h4>{category.name}</h4></Link>
        </div>
    }

    render() {
        return (
            <div className = "ml-3 mt-2">
                <h2>Category</h2>
                <div>{this.renderProdCategories()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products), prodCategories: Object.values(state.categories) };
}

export default connect(mapStateToProps, { categories })(ViewProducts);