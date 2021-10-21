import { GetStaticProps } from 'next';
import React from 'react';
import api from '../product/api';
import { Product } from '../product/types';

const IndexRoute = ({products}) => {
    console.log(products)
    return (
        <div>{`<IndexRoute />`} </div>
    );
};


export const getStaticProp = async () => {

    const products = await api.list();

    return {
        props : {
            products
        }
    }
}


export default IndexRoute;
