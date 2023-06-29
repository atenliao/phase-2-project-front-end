import React, { useEffect, useState } from "react";
import { Switch, Route} from "react-router-dom"
import NavBar from "./NavBar";
import PizzaList from "./PizzaList";
import Home from "./Home";
import Form from './Form'

function App(){
    const [pizzas, setPizzas] = useState([])
    const [oldpizza, setoldpizza] = useState({
        "name":" ",
        "image":" ",
        "ingredients":" ",
        "size":" ",
        "likes":0
    })
    useEffect(()=>{
        fetch("http://localhost:3000/pizzas")
        .then(res=>res.json())
        .then(pizza=>setPizzas(pizza))
    },[])
    


function updatePizza(updatedPizza){
    setPizzas([...pizzas].map((pizza)=>{
        if(pizza.id === updatedPizza.id){
            return updatedPizza
        }else{
            return pizza
        }
    }))
}
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/PizzaList'>
                    <PizzaList pizzas={pizzas}/>
                </Route>
                <Route path='/Form'>
                    <Form oldpizza={oldpizza} updatePizza={updatePizza}/>
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;