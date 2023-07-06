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
        fetch(`${process.env.REACT_APP_API_URL}/pizzas/${newPizza.id}`,{
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
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label text-center">Pizza Name</label>
                    <input 
                        className="form-control w-50"
                        type="text"
                        name="name"
                        value = {newPizza.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label text-center">Image URL</label>
                    <input 
                    className="form-control w-50"
                    type = "text"
                    name = "image"
                    value = {newPizza.image}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label text-center">Ingredients</label>
                    <input
                    className="form-control w-50"
                    type="text"
                    name="ingredients"
                    value={newPizza.ingredients}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label text-center">Pizza Size</label>
                <select className="form-select w-50" name = "size" defaultValue={"default"} onChange={handleChange}>
                                <option value ="default" disabled>--choose pizza size--</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                    </select>
                </div>
                <p className="text-center">your pizza size is {newPizza.size}</p>
                <div className="mb-3 row">
                    <button type="submit" className="btn btn-success">update</button>
                </div>
            </div>
        </form>
    )
}

export default PizzaEdit