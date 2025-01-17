import React, {  useContext } from 'react';
import Categories from '../Categories/Categories';
import { categoryContext } from '../../App';
import Product from '../Product/Product';

const Home = (props) => {
    // const {count,setCount} = props;
    const [category,setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1 >This is Home: {category}</h1>
            <button onClick={() => setCategory(category+1)}>Increment</button><br />
            <button onClick={() => setCategory(category>0 ? category-1 : category)}>Decrement</button>
            <hr />
            <Categories></Categories>
           
            
        </div>
    );
};

export default Home;