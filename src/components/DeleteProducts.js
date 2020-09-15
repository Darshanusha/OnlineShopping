import React, { Component } from 'react';
import ViewProducts from './ViewProducts';

class DeleteProducts extends Component{

    handleDelete(id){
        console.log(id);
    }

    render(){
        return(
            <div>
                <ViewProducts fromAdmin = "true" />
            </div>
        )
    }
}

export default DeleteProducts;