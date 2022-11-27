# Getting Data From Axios 

```
npm install axios --save
```
Then package.json file last create:
```
"proxy": "https://localhost:8080/"
```

Then Home [Product file] file

```
import axios from 'axios';
import {useEffect, useState} from 'react'

export default function Home() {
 const [products, setproducts] = useState([]);
 
  useEffect(  () =>{
       axios.get('https://loccalhost:8080/products')
           .then((res) => {
            // console.log(res.data);
            setproducts(res.data);
           })
           .catch(err => console.error(err))  
    },[])
}
```

After That map Data

```
    {
      products.length > 0  && (products.map((product, i)=>{
      return  <Product product={product} key={i} />
      }))
    }
```

### `npm start`
