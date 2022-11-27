import classes from './Card.module.css'

/**
 * Returns the Card Element.
 * 
 * @returns The Card Element.
 */
const Card = ({ children, className }) => {
    return <div className={`${classes.card} ${className}`}>{children}</div>
};

export default Card;