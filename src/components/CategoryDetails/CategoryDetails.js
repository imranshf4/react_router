import React, { useContext } from 'react';
import { categoryContext } from '../../App';


const CategoryDetails = (props) => {
    console.log(props);
    // const {count} = props;
    // const {count} = props;
    const [category,setCategory] = useContext(categoryContext);
    return (
        <div >
            <h4>This is category CategoryDetails : {props.product.name}</h4>
            {/* <button onClick={() => setCategory(category+1)}>Increment</button><br />
            <button onClick={() => setCategory(category>0 ? category-1 : category)}>Decrement</button> */}
            <hr />
        </div>
    );
};

export default CategoryDetails;