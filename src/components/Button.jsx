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

export default Button;