import React from "react";
import Pizza from "./Pizza"
function PizzaList({pizzas, editPizza}){
    console.log(pizzas)
    return(
        <table className="table table-list">
            <thread>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Topping Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Characteristic Ingredients</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thread>
            <tbody>
                {
                    pizzas.map((pizza)=> <Pizza key={pizza.id} pizza={pizza}/>)
                }
            </tbody>
        </table>
    )
}

export default PizzaList;