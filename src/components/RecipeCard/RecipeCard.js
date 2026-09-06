import './RecipeCard.css'

function RecipeCard(props)
{
    return(
        <section className='recipe-card'>
            <div className='card'>
                <h3>{props.name}</h3>
                <h4>{props.category}</h4>
                <p>{props.time}</p>
                <p>{props.desc}</p>
                <h4>{props.isPopular}</h4>
                <button onClick={() => alert("You selected "+ props.name)}>
                View Recipe
                </button>
            </div> 
            <img src={props.src} alt={props.altt} width="200"/>
        </section>
    )
}

export default RecipeCard;