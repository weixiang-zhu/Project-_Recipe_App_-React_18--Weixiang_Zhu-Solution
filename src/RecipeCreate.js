import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialFormState = { name: "", 
                             cuisine: "",
                             photo: "",
                             ingredients: "",
                             preparation: ""};
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "10%" }}> 
              <input style={{ width: "90%" }} name="name" type="Text" value={formData.name} onChange={handleChange}/>
            </td>
            <td style={{ width: "10%" }}> 
              <input style={{ width: "90%" }} name="cuisine" type="Text" value={formData.cuisine} onChange={handleChange}/>
            </td>
            <td style={{ width: "10%" }}> 
              <input style={{ width: "90%" }} name="photo" type="url" value={formData.photo} onChange={handleChange}/>
            </td>
            <td style={{ width: "30%" }}> 
              <textarea name="ingredients" value={formData.ingredients} onChange={handleChange}/>
            </td>
            <td style={{ width: "30%" }}> 
              <textarea name="preparation" value={formData.preparation} onChange={handleChange}/>
            </td>
            <td style={{ width: "10%" }}>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
