function Button({className, shape, theme, children}) {
    let classes = "button";
    classes += " " + (className ? className: "");
    classes += shape ? ` button_shape_${shape}`: "";
    classes += theme ? ` button_theme_${theme}`: "";

    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button;