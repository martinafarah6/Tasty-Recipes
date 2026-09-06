import RecipeCard from '../RecipeCard/RecipeCard'
import {Recipes} from '../../Recipes'
import './RecipeList.css'

export default function RecipeList()
{
    return(
        <section id="recipes">
            {Recipes.map(recipe=>(
                <RecipeCard key={recipe.id} name={recipe.name} category={recipe.category} desc={recipe.description} isPopular={recipe.isPopular&& "Popular!"} src={recipe.src} altt={recipe.altt}/>
            ))}
        </section>
    )
}
