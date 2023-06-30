import React,{ useEffect , useState } from "react";

function Form({oldpizza, updatePizza}){
    const [newPizza, setNewPizza] = useState({oldpizza})

    useEffect(()=>{
        setNewPizza(oldpizza)
    },oldpizza)
    function handleChange(event){
        console.log(event.target.value)
        setNewPizza({...newPizza, 
            [event.target.name]:event.target.value,
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
        <from className="add-pizza-form" onSubmit={handleSubmitForm}>
            <div className="form-row">
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
                <div className="col">
                    <select className="form-control" 
                            name = "size"
                            value={newPizza.size}
                            onChange={handleChange}>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                    </select>
                </div>
               

            </div>
        </from>


    )
}

export default Form;