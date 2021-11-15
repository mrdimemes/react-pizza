import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import markerSvg from '../../assets/images/svg/arrow-top.svg';

import '../../styles/scss/components/menus/PopupMenu.scss';


// Basic component for popup menus representation.
// Can be clarified by specifying different props.
// General way to clarify a PopupMenu is using a top level components
// like SortMenu or CategoriesMenu.
//
// Component has no connection to Redux storage and 
// need direct determination of all his props.
//
// Component props:
//
// className: string or undefined - name of optional css class 
//   for rendered PopupMenu.
// inviteText: string or undefined - text that will be shown near
//   an active menu option. Default value is "Option".
// items: array of strings - options of the menu.
// processingFunction: function(activeItem), where activeItem is 
//   PopupMenu's state representing the index of 
//   an active option in the "items" array. 
//   processingFunction is an instrument to make changes outside the component. 
//   PopupMenu will run processingFunction on self rendering, on any
//   activeItem changes and on any changes of processingFunction itself.
//   By default is an empty function.
// cleanupFunction: function(). It's also an instrument to make changes 
//   outside the component. PopupMenu will run cleanupFunction every time then 
//   an user selects new active option. By default is an empty function.

function PopupMenu(
    { className, inviteText, items, processingFunction, cleanupFunction}
) {
  const [activeItem, setActiveItem] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const elementRef = React.useRef();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const onSelectItem = (index) => {
    setActiveItem(index);
    cleanupFunction();
    if (isOpen) toggleIsOpen();
  }

  const handleOutsideClick = (event) => {
    if (!event.path.includes(elementRef.current)) setIsOpen(false);
  }

  // The menu will close itself because of click outside his area
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    };
  }, []);

  React.useEffect(() => {
    processingFunction(activeItem);
  }, [processingFunction, activeItem]);

  return (
    <div 
      ref={elementRef}
      className={classNames('Popup-menu', className)}
    >

      <div
        className={classNames(
          'Popup-menu__marker',
          {[`${className}__popup-marker`]: className,
          'Popup-menu__marker_closed': !isOpen}
        )}
      >
        <img className='image' src={markerSvg} alt='marker' />
      </div>

      <p
        className={classNames(
          'Popup-menu__invite-text',
          {[`${className}__popup-invite-text`]: className}
        )}
      >
        { inviteText }:
        <span
          onClick={toggleIsOpen}
          className={classNames(
            'Popup-menu__selected',
            {[`${className}__popup-selected`]: className}
          )}
        >
          { items[activeItem] }
        </span>
      </p>

      <ul
        className={classNames(
          'Popup-menu__items',
          {[`${className}__items`]: className,
          'Popup-menu__items_active': isOpen}
        )}
      >

        { items.map((item, index) => (
          <li
            key={`${item}_${index}`}
            onClick={ () => onSelectItem(index) }
            className={classNames(
              'Popup-menu__item',
              {[`${className}__item`]: className,
              'Popup-menu__item_active': index === activeItem,
              [`${className}__item_active`]: index === activeItem}
            )}
          >
            { item }
          </li>
        )) }

      </ul>
    </div>
  );
}

PopupMenu.defaultProps = {
  inviteText: 'Option',
  processingFunction: (activeItem) => {;},
  cleanupFunction: () => {;}
};

PopupMenu.propTypes = {
  className: PropTypes.string,
  inviteText: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  processingFunction: PropTypes.func,
  cleanupFunction: PropTypes.func
};

export default PopupMenu;