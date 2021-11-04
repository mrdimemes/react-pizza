import React from 'react';

function Pizza( {pizzaLabel, price, types, sizes, categories} ) {
    return (
        <div className="pizza">
            <div className="pizza__image-container">
                <img className="image" src="" alt="pizza"></img>
            </div>
            
            <h2 className="pizza__label">{ pizzaLabel }</h2>
            
            <div className="pizza__options">
                <ul className="pizza__options-row">
                    <li className="pizza__options-item pizza__options-item_active">thin</li>
                    <li className="pizza__options-item">traditional</li>
                </ul>
                <ul className="pizza__options-row">
                    <li className="pizza__options-item pizza__options-item_active">26 cm.</li>
                    <li className="pizza__options-item pizza__options-item_unavailable">30 cm.</li>
                    <li className="pizza__options-item">40 cm.</li>
                </ul>
            </div>

            <div className="pizza__order-bar interactive-bar">
                <div className="pizza__price">{ price } $</div>
                <div className="pizza__order-button button button_shape_rounded button_theme_main-bordered">
                    <p className="pizza__order-button-text">+ Add</p>
                    <div className="pizza__order-button-counter pizza__order-button-counter_active">2</div>
                </div>
            </div>
        </div>
    )
}

export default Pizza;