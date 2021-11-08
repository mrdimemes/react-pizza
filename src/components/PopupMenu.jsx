import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

function PopupMenu({ className, inviteText, items, processingFunction, dataLength}) {
    const [activeItem, setActiveItem] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const elementRef = React.useRef();

    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        if (isOpen) {
            toggleIsOpen();
        }
    }

    const handleOutsideClick = (event) => {
        if (!event.path.includes(elementRef.current)) {
            setIsOpen(false);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
        return function cleanup() {
            document.body.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    React.useEffect(() => {
        processingFunction(activeItem);
    }, [processingFunction, activeItem, dataLength]);

    return (
        <div 
            ref={elementRef}
            className={classNames("popup-menu", className)
        }>
            
            <div 
                className={classNames(
                    "popup-menu__marker", 
                    {
                        [`${className}__popup-marker`]: className,
                        "popup-menu__marker_closed": !isOpen
                    } 
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
                    onClick={ toggleIsOpen }
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
                    {
                        [`${className}__items`]: className,
                        "popup-menu__items_active": isOpen
                    }
                )
            }>

                { items.map((item, index) => (
                    <li 
                        key={`${item}_${index}`} 
                        onClick={() => onSelectItem(index)}
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

PopupMenu.defaultProps = {
    inviteText: "Option",
    processingFunction: (activeItem) => {;}
};

PopupMenu.propTypes = {
    className: PropTypes.string,
    inviteText: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    processingFunction: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        dataLength: state.pizzas.items.length
    }
}

export default connect(mapStateToProps)(PopupMenu);