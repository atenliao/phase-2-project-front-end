import React,{  useState } from "react";

function Form({ onAddPizza}){
    const [newPizza, setNewPizza] = useState({
        name:" ",
        image:" ",
        ingredients:" ",
        size:" ",
        likes:0,
    })

    function handleChange(event){
        console.log(event.target.value)
        setNewPizza({...newPizza, 
            [event.target.name]:event.target.value,
        })
    }

    function handleSubmitForm(event){
        event.preventDefault()
        const addNewPizza = {
            name: newPizza.name,
            image: newPizza.image,
            ingredients: newPizza.ingredients,
            size:newPizza.size,
            likes: 0
        }
        fetch(`http://localhost:3000/pizzas/`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(addNewPizza)
        })
        .then(res=>res.json())
        .then(pizza=>onAddPizza(pizza))
    }
    return(
        <div className="container">
        <form className="add-pizza-form" onSubmit={handleSubmitForm}>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter Pizza Topping"
                        className="input-text"
                    />
                    <br />
            <input 
                type = "text"
                name = "image"
                onChange={handleChange}
                placeholder="Enter a pizza image URL..."
                className="input-text"
                />
                <br />
            <input
                type= "text"
                name= "ingredients"
                onChange={handleChange}
                placeholder="please enter pizza ingredients"
                className="input-text"
                />
                <br />
                    <select className="form-control" 
                            name = "size"
                            defaultValue={"default"}
                            onChange={handleChange}>
                                <option value="default" disabled>--Select Pizza Size--</option>   
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                    </select>
                    <input 
                    type = "submit"
                    name = "submit"
                    value = "Add a New Pizza"
                    className="submit"
                    />
            </form>
        </div>
        


    )
}

export default Form;