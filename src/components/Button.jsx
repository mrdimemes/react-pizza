import PropTypes from 'prop-types';

import classNames from 'classnames';

function Button({ className, shape, theme, onClick, children }) {
    return (
        <button 
            onClick={onClick} 
            className={classNames(
                "button", 
                className, 
                {[`button_shape_${shape}`]: shape,
                [`button_theme_${theme}`]: theme})
        }>
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