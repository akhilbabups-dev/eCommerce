import React from 'react';
import ProductCategory from '../../components/category';
import './styles.scss';
const HomePage=props=>{
    return(
        <section className="homepage">
            <ProductCategory />
        </section>
    )
}
export default HomePage;