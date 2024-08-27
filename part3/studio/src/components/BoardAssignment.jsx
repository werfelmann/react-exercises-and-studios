import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState("no boards yet!")

   const boards = [
      {
         label: "BBQ",
         value: "recipes",
      },
      {
         label: "Vegetarian",
         value: "recipes",
      },
      {
         label: "Soups",
         value: "recipes",
      }
   ];

   const boardsArray = boards.map((boards, index) => {
      return <option key={index} value={boards.value}>{boards.label}</option>
   })

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardsArray}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
