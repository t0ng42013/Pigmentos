import React from 'react'
import { CardCategories } from './CategoriesStyled'
import { fileNames } from '../../data/categoriesList';
import { Link } from 'react-router-dom';



export const Category = () => {
  return (
    <>
      {fileNames.map((img) => (
        <Link to="/products" key={img}>
          {" "}
          
          <CardCategories src={`/assets/img/categories/${img}`} />
        </Link>
      ))}
    </>
  );
}
