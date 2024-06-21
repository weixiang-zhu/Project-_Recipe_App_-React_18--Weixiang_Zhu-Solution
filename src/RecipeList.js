import React from "react";


function Recipe({ recipe, onDelete }) {
  const contentStyle = {
    maxHeight: "100px",
    overflowY: "scroll",
  };
  
  return (
    <tr>
      <td style={{ width: "10%" }}>{recipe.name}</td>
      <td style={{ width: "10%" }}>{recipe.cuisine}</td>
      <td style={{ width: "10%" }}><img src={recipe.photo} alt="recipePhoto" style={{ width: "100%", height: "100%", objectFit: "scale-down" }}/></td>
      <td style={{ width: "30%" }}><p style={contentStyle}>{recipe.ingredients}</p></td>
      <td style={{ width: "30%" }}><p style={contentStyle}>{recipe.preparation}</p></td>
      <td style={{ width: "10%" }}><button name="delete" onClick={() => onDelete(recipe.name)}>Delete</button></td>
    </tr>
  );
}


function RecipeList(props) {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tbodyStyle = {
    tr: {
      nthChildOdd: {
        backgroundColor: "#fff0c7",
      },
    },
  };
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
  const { recipes, deleteRecipe } = props;
  return (
    <div className="recipe-list">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Cuisine</th>
            <th style={{ width: "10%" }}>Photo</th>
            <th style={{ width: "30%" }}>Ingredients</th>
            <th style={{ width: "30%" }}>Preparation</th>
            <th style={{ width: "10%" }}>Actions</th>
          </tr>
        </thead>
        <tbody style={tbodyStyle}>
          {recipes.map(recipe => (
            <Recipe key={recipe.name} recipe={recipe} onDelete={deleteRecipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
