import React from 'react'
import Product from './Product'
import productsData from '../assets/jsons/items.json'


const Content = () => {

  const mainWrap = React.useRef();
  const containerRef = React.useRef();

  return (  
    <div className="content-component">
      <div className='deals-bar'>
        <h2>Deals of the day</h2>
      </div>
    
      <div ref={mainWrap}>
        <div className="Slider" ref={containerRef}>
          {productsData?.map((product, index) => (
            <Product 
            key={index}
            name={product.name}
            price={product.price}
            salePrice={product.sale_price}
            id={product.id}
          />
        ))}
        </div>
      </div>
    </div>
      );
    };

//     <div className="content-component">
//         <div className='deals-bar'>
//             <h2>Deals of the day</h2>
//         </div>
//         <div className='products-container'>
//           { productsData.map((product, index) => (
            
//            ))}
//         </div>
//     </div>
//   )
// }

export default Content