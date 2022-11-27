import classes from "./Button.module.css";

/**
 * Returns the Button Element.
 * 
 * @returns The Button Element.
 */
const Button = ({ type, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            type={type || 'button'}
            className={classes.button}
        >
            {children}
        </button>
    );
};

export default Button;