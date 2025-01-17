import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Product = (props) => {
    const [category,setCategory] = useContext(categoryContext);
    // const {name} = props.product;
    return (
        <div className='product'>
            <h1>{category}</h1>
            <button onClick={() => setCategory("desktop")}>Desktop</button>
            <button onClick={() => setCategory("mobile")}>Mobile</button>
            <button onClick={() => setCategory("laptop")}>Laptop</button>
            
        </div>
    );
};

export default Product;