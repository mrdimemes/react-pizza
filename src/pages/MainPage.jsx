import React from 'react';

import { CategoriesMenu, SortMenu, PizzaGallery } from '../components/';


function MainPage() {
  return (
    <div className='App__wrapper'>
      <div className='interactive-bar App__interactive-bar'>
        <CategoriesMenu />
        <SortMenu />
      </div>

      <section className='App__gallery-section'>
        <h1 className='App__gallery-section-label section-label'>
          All pizzas
        </h1>

        <PizzaGallery />

      </section>
    </div>
  )
}

export default MainPage;