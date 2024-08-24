import './styles.css';

function Button() {
   function onLearnMore() {
      window.alert("Descending into the Watery Depths")
   }

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;