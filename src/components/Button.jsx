import PropTypes from 'prop-types';

import classNames from 'classnames';


// Component for rendering html buttons.
// Button can be styled with className, shape and theme props.
//
// Component props:
//
// className: string or undefined - optional css class for the button.
// shape: string or undefined - if not undefined,
//   the css class "button_shape_<shape>" will be added to the button.
// theme: string or undefined - if not undefined,
//   the css class "button_shape_<theme>" will be added to the button.
// onClick: function for the button event listener.
// children: entries of button,
//   can be writed between <Button> and </Button> tags.

function Button({ className, shape, theme, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'button',
        className,
        {[`button_shape_${shape}`]: shape,
        [`button_theme_${theme}`]: theme}
      )}
    >
      { children }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
};

export default Button;