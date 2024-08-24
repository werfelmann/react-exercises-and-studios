let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  // function GiveRating(props) {
    // condition ? ifTrue : ifFalse
  //   return (props.rating < 6 && props.rating > 0) ? (<h3>{stars[props.rating - 1]}</h3>) : null
  // }
  // return (<h3>{stars[0]}</h3>)

  function GiveRating() {
    return <h3>(stars[props.rating - 1])</h3>;
    }
    return props.rating > 0 && props.rating < 6;
  }
   
  
  
//   return stars;
// }

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
