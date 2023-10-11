import React from "react";
import categories from "../../data/categories"
function Category({category}) {
  return(
    <div style={{'background': category.color}}>
      {category.title}
    </div>
  )
}


 function Search() {
  return <div className="grid grid-cols-5">
    {categories.map((category)=>  <Category category={category}/>)}
  </div>;
}

 export default Search
