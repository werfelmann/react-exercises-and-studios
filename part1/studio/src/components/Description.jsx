// import styles from "./Description.module.css"
import React from 'react'
import RecipeAuthor from "./Author.jsx"

class RecipeDescription extends React.Component{
    render() {
        return (
        <div> 
            <div>
                <h1>The Best Crispy Roast Potatoes Ever Recipe</h1>
                 <p>These are the most flavorful crispy roast potatoes you'll ever make. And they just happen to be gluten-free and vegan (if you use oil) to boot.</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    }
}

export default RecipeDescription;