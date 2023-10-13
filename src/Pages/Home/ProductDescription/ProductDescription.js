import React from 'react';
import './ProductDescription.css';
import Navbar from '../../../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';

const ProductDescription = ({products}) => {

    let { title } = useParams();
    console.log(products)

  return (
    <div className='productDescriptionBody'>
      <div>
        <Navbar/>
      </div>
      <div className='productDescriptionContent'>
        {
            products.map((item)=>{
                return(
                    <div>
                    {item.price}
                    </div>
                )
            })
        }
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default ProductDescription
