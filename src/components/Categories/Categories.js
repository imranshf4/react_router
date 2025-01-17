import React, { useContext, useEffect, useState } from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import { categoryContext } from '../../App';
import Product from '../Product/Product';

const ALLproducts = [
    {name:'asus',category:'laptop'},{name:'dell',category:'laptop'},{name:'hp',category:'laptop'},
    {name:'svmsung',category:'mobile'},{name:'oppo',category:'mobile'},{name:'vivo',category:'mobile'},
    {name:'lenovo',category:'desktop'},{name:'dell',category:'desktop'},{name:'asus',category:'desktop'}
];
const Categories = (props) => {
    const [category] = useContext(categoryContext);
    const [product,setProduct] = useState([]);
    // const {count} = props;

    useEffect(()=>{
        const matchProduct = ALLproducts.filter( pd => pd.category === category && category.toLowerCase());
        setProduct(matchProduct);
    },[category]);
    console.log("Prouct"+product);
    return (
        <div>
            <h4>Select categories</h4>
            <h4>Selected Product: 
                {
                    product.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
                }
            </h4>
            <hr />
            <CategoryDetails product={product}></CategoryDetails>
            <Product></Product>
            
        </div>
    );
};

export default Categories;