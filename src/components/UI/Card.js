import './Card.css'

const Card = (props) => {

    const classes = 'card ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
}


export default Card;


////// Start with 4th Section OR 46th video