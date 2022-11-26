# Create Product.js 

Products list create

## Home.js

```
import Products from '../../assets/api/Product'; 
and
  {
    Products.map((product, i)=>{
    return <Product product={product} key={i} />
   })
  }
```
### Create product.js file using props
```
export default function Product({ product, i }) {
retrun <div key={i}>
... Code
like... {product.title}
</div>
}
```

### Create singlePrduct.js file using props data

npm install react-rating

```
import { Link, useParams } from 'react-router-dom';
import Products from '../../assets/api/Product'
import Rating from 'react-rating'

export default function Singleproduct({match}) {
    const productId = useParams();
    console.log(productId)  
    
    const product = Products.find(product => product.id == productId.id);
    console.log(product);
    return (
        <>
        ...Code
        like ... {product.category}
        rating code ...
         <Rating
          style={{color:'orange'}}
          initialRating={product.rating.rate}
          emptySymbol="fa-regular  fa-star fa-fw fa-2x"
          fullSymbol="fa-solid fa-star fa-2x"
          />
        </>
}
```

### `npm start`

