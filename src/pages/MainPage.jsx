import React from 'react'

import { PopupMenu, PizzaGallery } from '../components/';


function MainPage( {categories, pizzaSizes, pizzaTypes, pizzas} ) {
    return (
        <div className="App__wrapper">
        <div className="interactive-bar App__interactive-bar">

          <PopupMenu 
            className="categories-menu"
            inviteText="Category"
            items={categories}
          />

          <PopupMenu 
            className="sort-menu"
            inviteText="Sort by"
            items={["popularity", "price", "alphabet"]}
          />
          
        </div>

        <section className="App__gallery-section">
          <h1 className="App__gallery-section-label section-label">All pizzas</h1>
          
          <PizzaGallery 
            pizzas={pizzas} 
            pizzaTypes={pizzaTypes} 
            pizzaSizes={pizzaSizes}
          />
          
        </section>
      </div>
    )
}

export default MainPage;