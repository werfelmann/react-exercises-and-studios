import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

//<div className={`${isRainy === true ? "dark" : "light"}`}></div>

const listItem = oceans.map(ocean => 
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <h3>{ocean.name}</h3>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h4>Fun Facts:</h4>
      <ol>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ol>
      <Button />
   </div>
);

function Profile()
{
   return(
         <ul>
            {listItem}
         </ul>
   );
}

export default Profile;