import React, {useState} from "react";
import Pizza from "./Pizza"
import PizzaEdit from "./PizzaEdit";
function PizzaList({ pizzas,setPizzas }) {
    console.log(pizzas)
    const [oldpizza, setoldpizza] = useState({
        "name": " ",
        "image": " ",
        "ingredients": " ",
        "size": " ",
        "likes": 0
    })


    function updatePizza(updatedPizza) {
        setPizzas([...pizzas].map((pizza) => {
            if (pizza.id === updatedPizza.id) {
                return updatedPizza
            } else {
                return pizza
            }
        }))
    }

    function editPizza(oldpizza) {
        setoldpizza(oldpizza)
    }
    function deletePizza(id){
        const displayPizzas = pizzas.filter((pizza)=>pizza.id !== id)
        setPizzas(displayPizzas)
    }
    return (
        <>
            <PizzaEdit oldpizza={oldpizza} updatePizza={updatePizza} />
            <table className="table table-list">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Image</th>
                        <th scope="col">Topping Name</th>
                        <th scope="col">Size</th>
                        <th scope="col">Characteristic Ingredients</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} editPizza={editPizza} onDeletePizza={deletePizza}/>)
                    }
                </tbody>
            </table>
        </>
    )
}

export default PizzaList;