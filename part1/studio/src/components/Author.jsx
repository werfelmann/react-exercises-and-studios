import styles from "./Author.module.css"

export default function RecipeAuthor() {
    const authorLink = "https://www.seriouseats.com/the-best-roast-potatoes-ever-recipe";
    const authorPhoto = "https://www.seriouseats.com/thmb/yqPw62_KaqnSnW4rffi4KeiZsUs=/300x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kenji-lopez-alt-9e7ff3ba54e24328a853d774a05fd4b8.jpg";
    const authorName = "J. Kenji López";
    
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}