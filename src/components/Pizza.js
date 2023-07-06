import React from "react";

function Pizza({pizza, editPizza,onDeletePizza}){
    const {name, image, ingredients,size} = pizza
    function handleEditPizza(){
        editPizza(pizza)
    }
    function handleDeletePizza(){
        onDeletePizza(pizza.id)
        fetch(`${process.env.REACT_APP_API_URL}/pizzas/${pizza.id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
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
            <td>
                <button type="button" className="btn btn-primary" onClick={handleDeletePizza}>
                    Delete Pizza
                </button>
            </td>
        </tr>
    )
}

export default Pizza;