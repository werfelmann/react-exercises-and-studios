export default function BookList() {
   let pageTitle = "Awesome Books";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430001192i/90557.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600241424i/6288.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1432468943i/70535.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Buddhism Without Beliefs by Stephen Batchelor" />
         <img src={book2} alt="The Road by Cormac McCarthy" />
         <img src={book3} alt="2001: A Space Odyssey by Arthur C. Clarke" />
      </div>      
   );
}