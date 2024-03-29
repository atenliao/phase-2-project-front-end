import React from "react";
import pizza from "../asset/pizza.png"

function Home() {

    
    return (
        <div>
            <div>
                <div className="div_home_image">
                    <img src={pizza} alt="pizza" className="home_image" />
                </div>
                <div className="home_paragraph">
                    <p className="font-weight-normal">
                        The Supper Pizza website lists pizzas and you can upload or edit any pizza in website you want.
                        In the Website you can use form to upload any pizza you like with name, Characteristic ingredients, and picture, and then it will be show
                        in the pizza site and be listed. After posting a pizza, if you want to change some Characteristic ingredients, you click
                        edit button to edit a pizza size, Characteristic ingredients, and any you like.
                    </p>
                    <p>
                        The website is used to show pizza with size, Characteristic ingredients, and photo, and you can use fetch GET, POST, PATCH, and DELETE methods to edit website pizza content.
                        we are welcome anyone to upload your pizza.
                    </p>
                    <h3 className="text-center">Contact</h3>
                    <div className="row">
                    <div >
                        <p>Feel free to Contact us!!!</p>
                        <p><i className="bi-geo-alt-fill"></i>&nbsp;San Francisco, CA</p>
                        <p><i className="bi-telephone-inbound"></i>&nbsp;Phone: +1 (111)111-1111</p>
                        <p><i className="bi-envelope-fill"></i>&nbsp;Email: mail@vetmo.net</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;