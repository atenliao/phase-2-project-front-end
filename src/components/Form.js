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
        fetch(`${process.env.REACT_APP_API_URL}/pizzas/`,{
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
        
        <form onSubmit={handleSubmitForm}>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label text-center">Pizza Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter Pizza Topping"
                        className="form-control w-50"
                        id="ex3"
                    />
                </div>
                <div className="mb-3 row">
            <label className="col-sm-2 col-form-label text-center">Image URL </label>
            <input 
                type = "text"
                name = "image"
                onChange={handleChange}
                placeholder="Enter a pizza image URL..."
                className="form-control w-50"
                id="ex3"
                />
               </div>
               <div className="mb-3 row">
            <label className="col-sm-2 col-form-label text-center" >Ingredients </label>
            <input
                type= "text"
                name= "ingredients"
                onChange={handleChange}
                placeholder="please enter pizza ingredients"
                className="form-control w-50"
                id="ex3"
                />
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label text-center" >Pizza Size</label>
                    <select className="form-select w-50"
                            id="ex3" 
                            name = "size"
                            defaultValue={"default"}
                            onChange={handleChange}>
                                <option value="default" disabled>--Select Pizza Size--</option>   
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                    </select>
                    </div>
                    <div  className="mb-3 row">
                    <button 
                    type = "submit"
                    name = "submit"
                    value = "Add a New Pizza"
                    className="btn btn-primary "
                    >
                    Submit</button>
                    </div>
            </form>
        


    )
}

export default Form;