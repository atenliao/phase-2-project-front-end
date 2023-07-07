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
                </div>
            </div>
            <div className="container" id="contact">
                <h3 className="text-center">Contact</h3>
                <div className="row">
                    <div className="col-sm-4">
                        <p>Feel free to Contact us!!!</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span>San Francisco, CA</p>
                        <p><span className="glyphicon glyphicon-phone"></span>Phone: +1 (415)111-1111</p>
                        <p><span className="glyphicon glyphicon-envelope"></span>Email: mail@vetmo.net</p>
                    </div>
                    {/* <form >
                        <div className="col-sm-8">

                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="name" placeholder="Name" type="text" required />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                </div>
                            </div>
                            <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col form-group">
                                <button className="btn btn-primary pull-right" type="submit" value="Submit" >Send</button>
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>

    )
}

export default Home;