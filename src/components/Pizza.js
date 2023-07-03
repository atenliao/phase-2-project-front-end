import React from "react";

function Pizza({pizza, editPizza}){
    const {name, image, ingredients,size} = pizza
    function handleEditPizza(){
        editPizza(pizza)
    }
    return(
        <tr>
            <td><img className="pizza-image" src={image} alt="name"/></td>
            <td>{name}</td>
            <td>{size}</td>
            <td>{ingredients}</td>
            <td>
                <button type="button" className="btn btn-primary" onClick= {handleEditPizza}>
                    Edit Pizza
                </button>
            </td>
            {/* <td>
                <button type="button" className="btn btn-primary">
                    Delete Pizza
                </button>
            </td> */}
        </tr>
    )
}

export default Pizza;