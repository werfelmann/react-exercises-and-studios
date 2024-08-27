

const RecipeAuthor = () => {
   let authorLink = "https://overthefirecooking.com/our-story/";
   let authorPhoto = "https://overthefirecooking.com/wp-content/uploads/2020/03/DSC00578-2.jpg";
   let authorName = "Derek Wolf";

   return (
      <div>
         <img src={authorPhoto} alt = "photo of Derek Wolf" className="imageUpdates"style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 whole packer brisket", "yellow mustard", "1 cup 16 mesh black pepper", "1/4 cup kosher salt", "4 tsp granulated garlic"];
   const ingredientList = ingredients.map((ingredients, index) => {
      return <li key={index}>{ingredients}</li>
   });
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientList}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Smoked Brisket</h1>
            <p>Smoked Brisket is the king of BBQ. Let us help you master it!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://overthefirecooking.com/wp-content/uploads/2023/04/Facetune_05-04-2023-16-29-34-scaled.jpeg" alt="picture of meat" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
