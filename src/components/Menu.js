import React from "react";
import recipes from '../recipes';
import Swal from "sweetalert2";

function Menu() {
    const handleOrder = (recipe) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are ordering ${recipe.title}!`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#495E57",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order was successful!",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Specials</h2>
                <button>Order menu</button>
            </div>

            <div className="cards">
                {
                    recipes.map(recipe => (
                        <div key={recipe.id} className="menu-items">
                            <img src={recipe.image} alt="recipe"/>
                            <div className="menu-content">
                                <div className="heading">
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderBtn" onClick={() => handleOrder(recipe)}>Order</button>
                            </div>
                        </div>)
                    )
                }
            </div>
        </div>
    );
}

export default Menu;