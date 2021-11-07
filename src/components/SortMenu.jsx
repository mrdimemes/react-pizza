import React from 'react'
import { PopupMenu } from './';

function SortMenu() {
    const processingFunction = (activeItem) => {;}

    return (
        <PopupMenu 
            className="sort-menu"
            inviteText="Sort by"
            items={["popularity", "price", "alphabet"]} 
            processingFunction={processingFunction}
        />
    )
}

export default SortMenu
