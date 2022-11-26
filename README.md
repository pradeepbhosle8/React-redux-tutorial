# Getting Started with Create React App

How to create react app
```
npx create-react-app folderName[Project Folder Name]
cd folderName
npm start
```
### How to Add in react project bootstrap, jquery popper.js  
```
npm install bootstrap jquery popper.js --save

```
**import to index.js file**

**import 'bootstarp/dist/css/bootstrap.min.css',**
**import 'bootstrap/dist/js/boostrap.bundel.min'**

*similary import jquery and popper.js*
```
import $ from 'jquery'; 
import Popper from 'Popper.js'; 
```
React in use Material Ui 
```
nmp install @mui/material @emotion/react @emotion/styled
```
# React-router-dom using Navigation
```
npm install react-router-dom
npm install --save styled-components 
```
# in a app.js file
*import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; *
* import all components using app*
```
   <>
      <Router>
        <Navbar />
         <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          
        </Routes>
     </Router>
    
    </>
```
# navigation file
* import {Link} from 'react-router-dom'; *
```
  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
```



