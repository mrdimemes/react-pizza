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
// options: array of strings - options to display in the menu.
// activeOption: integer >=0 - index of options array.
// setActiveOption: function(optionIndex) - changes the activeOption
//   stored outside.
// processingFunction: function(), which will run every time it changes.
//   processingFunction is an instrument to make changes outside the component.

function PopupMenu({
  className,
  inviteText,
  options,
  activeOption,
  setActiveOption,
  processingFunction
}) {

  const [isOpen, setIsOpen] = React.useState(false);
  const elementRef = React.useRef();

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const onSelectOption = (optionIndex) => {
    if (optionIndex !== activeOption) setActiveOption(optionIndex);
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
    processingFunction();
  }, [processingFunction]);


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
          { options[activeOption] }
        </span>
      </p>

      <ul
        className={classNames(
          'Popup-menu__items',
          {[`${className}__items`]: className,
          'Popup-menu__items_active': isOpen}
        )}
      >

        { options.map((option, index) => (
          <li
            key={`${option}_${index}`}
            onClick={ () => onSelectOption(index) }
            className={classNames(
              'Popup-menu__item',
              {[`${className}__item`]: className,
              'Popup-menu__item_active': index === activeOption,
              [`${className}__item_active`]: index === activeOption}
            )}
          >
            { option }
          </li>
        )) }

      </ul>
    </div>
  );
}

PopupMenu.defaultProps = {
  inviteText: 'Option',
};

PopupMenu.propTypes = {
  className: PropTypes.string,
  inviteText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PopupMenu;