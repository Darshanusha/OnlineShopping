import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { categories, addProducts } from '../actions';
import { Link } from 'react-router-dom';

class AddProducts extends Component {
    handleOnSub = (e) => {
        console.log("Form submit", e);
        this.props.addProducts(e);
        //console.log(this.props);
        this.props.reset();
    }

    componentDidMount() {
        this.props.categories();
    }

    renderError = (meta) => {
        // console.log("err ", meta.error, " touched ", meta.touched);
        if (meta.error && meta.touched) {
            return (
                <div className="text-danger" >
                    {meta.error}
                </div>
            );
        }
    }

    getTextbox = (reqText) => {
        return (
            <div>
                <label className="">{reqText.label}</label>
                <input type = {reqText.type} className="form-control" {...reqText.input} autoComplete="off" />
                <div>{this.renderError(reqText.meta)}</div>
            </div>
        )
    }


    renderOptions = () => {
        return <>
            {this.props.categ && this.props.categ.map((category) => {
                return <option key={category.id} value={category.name}>{category.name}</option>
            })}
        </>
    }
    render() {
        return (
            <div>
                <form className="form-group col-md-10" onSubmit={this.props.handleSubmit(this.handleOnSub)}>
                    <h2>Add Product</h2>
                    Select Category : <Field className = "custom-select col-md-3" name="selectCat" component="select" >
                        <option>Select</option>
                        {this.renderOptions()}
                    </Field> <Link to = '/component/edit' className = "btn btn-primary" >Edit Category</Link>
                    <Field name="name" component={this.getTextbox} label="Name" type = "text" />
                    <Field name="cost" component={this.getTextbox} label="Cost" type = "number" />
                    
                    <br />
                    <button name="Add Product" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formVal) => {
    const error = {}
    if (!formVal.name) {
        error.name = "Please enter name"
    }
    if (!formVal.cost) {
        error.cost = "Please enter cost"
    }
    if (!formVal.selectCat) {
        error.selectCat = "Please select a category"
    }
    return error;
}

const mapStateToProps = (state) => {
    return { categ: Object.values(state.categories) }
}

const formWraap = reduxForm({
    form: "streamCreate",
    validate: validate
})(AddProducts);

export default connect(mapStateToProps, { categories, addProducts })(formWraap)