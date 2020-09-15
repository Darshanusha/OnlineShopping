import { connect } from 'react-redux';
import React, { Component } from 'react';
import { categories, deleteCategory, addCategory } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
class EditCategory extends Component {

    componentDidMount() {
        this.props.categories();
    }

    state = { frm: <div></div>, categVal: "" }

    delete = (val) => {
        this.props.deleteCategory(val);
        this.props.categories();
    }

    renderCategory = () => {

        if (!this.props.cat) {
            return <div>Loading..!</div>;
        }
        return this.props.cat.map((category) => {
            return <>
                <tr>
                    <td>
                        {category.name}
                    </td>
                    <td>
                        <button type="button" onClick={() => this.delete(category.id)} className="btn btn-danger btn-sm mt-1">Delete</button>
                    </td>
                </tr>
            </>
        })
    }

    handleAdd = () => {
        this.props.addCategory({ name: this.state.categVal });
        this.props.categories();
    }

    renderSmallForm = () => {
        const c = <div className="bg-dark">
            <div className="clear-flex">
                <span className="float-right">
                    <h4>Add Form details</h4>
            Category: <input type="text" name="newCat" onChange={(e) => this.setState({ categVal: e.target.value })} autoComplete="off" />&nbsp;
            <button className="btn btn-success" onClick={this.handleAdd} >Add</button>&nbsp;
            <button className="btn btn-warning" onClick={() => this.setState({ frm: <div></div> })} >Cancel</button>
                </span>
            </div>
        </div>
        this.setState({ frm: c });
    }

    render() {
        return (
            <div className="ml-3 mt-1">
                <div className="clear-flex">
                    <button className="btn btn-success float-right" onClick={this.renderSmallForm} >Add Category</button>
                    <h3>Edit Category</h3>
                </div>
                <div>{this.state.frm}</div>
                <table >{this.renderCategory()}</table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { cat: Object.values(state.categories) }
}

export default connect(mapStateToProps, { categories, deleteCategory, addCategory })(EditCategory);