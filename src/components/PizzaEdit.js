import React, { useEffect, useState } from "react";

function PizzaEdit({oldpizza, updatePizza}){
    const [newPizza, setNewPizza] = useState({...oldpizza})
    console.log(newPizza)
    useEffect(()=>{
        setNewPizza(oldpizza)
    },[oldpizza])


    function handleChange(event){
        console.log(event.target.value)
        setNewPizza({...newPizza,
        [event.target.name]: event.target.value,
        })
    }

    function handleSubmitForm(event){
        event.preventDefault()
        fetch(`http://localhost:3000/pizzas/${newPizza.id}`,{
            method:'PATCH',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newPizza)
        })
        .then(res=>res.json())
        .then(pizza=>updatePizza(pizza))
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <div className="form-row">
                <div className="col-5">
                    <input 
                        className="form-control"
                        type="text"
                        name="name"
                        value = {newPizza.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input 
                    className="form-control"
                    type = "text"
                    name = "image"
                    value = {newPizza.image}
                    onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <input
                    className="form-control"
                    type="text"
                    name="ingredients"
                    value={newPizza.ingredients}
                    onChange={handleChange}
                    />
                </div>
                <div className="col">
                <select className="form-control" name = "size" defaultValue={"default"} onChange={handleChange}>
                                <option value ="default" disabled>--choose pizza size--</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                    </select>
                </div>
                <p >your pizza size is {newPizza.size}</p>
                <div>
                    <button type="submit" className="btn btn-success">update</button>
                </div>
            </div>
        </form>
    )
}

export default PizzaEdit