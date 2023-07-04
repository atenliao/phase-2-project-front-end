import React, { useEffect, useState } from "react";
import { Switch, Route} from "react-router-dom"
import NavBar from "./NavBar";
import PizzaList from "./PizzaList";
import Home from "./Home";
import Form from './Form'

function App(){
    const [pizzas, setPizzas] = useState([])
   
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/pizzas`)
        .then(res=>res.json())
        .then(pizza=>setPizzas(pizza))
    },[])
    
function addPizza(pizza){
    setPizzas([...pizzas, pizza])
}
    return (
        <div>
            <NavBar />
            <Switch>
                
                <Route path='/Form'>
                    <Form onAddPizza={addPizza}/>
                </Route>
                <Route path='/PizzaList'>
                    <PizzaList pizzas={pizzas} setPizzas={setPizzas}/>
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;