import React, { useState } from 'react'
import classNames from 'classnames';

function PopupMenu({ className, inviteText="Option", items=["all"] }) {
    const [activeItem, setActiveItem] = useState(0);
    
    return (
        <div className={classNames("popup-menu", className)}>
            
            <div 
                className={classNames(
                    "popup-menu__marker", 
                    {[`${className}__popup-marker`]: className}, 
                    "popup-menu__marker_closed"
                )
            }>
                <img className="image" src="./images/arrow-top.svg" alt="marker"></img>
            </div>

            <p 
                className={classNames(
                    "popup-menu__invite-text", 
                    {[`${className}__popup-invite-text`]: className}
                )
            }>
                { inviteText }:
                <span 
                    className={classNames(
                        "popup-menu__selected",
                        {[`${className}__popup-selected`]: className}
                    )
                }>
                    { items[activeItem] }
                </span>
            </p>
            
            <ul 
                className={classNames(
                    "popup-menu__items",
                    {[`${className}__items`]: className}
                )
            }>

                { items.map((item, index) => (
                    <li 
                        key={`${item}_${index}`} 
                        onClick={() => setActiveItem(index)}
                        className={classNames(
                            "popup-menu__item",
                            {
                                [`${className}__item`]: className,
                                "popup-menu__item_active":  index === activeItem,
                                [`${className}__item_active`]: index === activeItem
                            }
                        )
                    }>
                        { item }
                    </li>
                )) }
            
            </ul>  
        </div>
    )
}

export default PopupMenu;