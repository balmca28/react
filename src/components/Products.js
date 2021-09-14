import SideBar from "./SideBar";
import React, { useState } from "react";
const Products = () => {
    const [activeProducts, setActiveProducts] = useState(true);
    return ( 
        <div>
        <SideBar  activeProducts={activeProducts}/>
        <h1>Hello Products</h1>
        </div>
     );
}
 
export default Products;