import React from 'react';
import GridCards from './components/Grid/Grid'
import CounterCard from './components/CounterCard/counter'
import Message from './components/Message/message'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
 
 
  return ( 
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={ <CounterCard /> } />

         <Route path="/grid" element={ <GridCards /> } />
         <Route path="/contact" element={ <Message /> } />
      
        
      </Routes>
      </BrowserRouter>
    
    </>
   );
}
 
export default App;



































// import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import Main from './components/Main/Main'

// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App" style={{color:'yellow',fontSize:'32px',fontWeight:'700'}}>
//       <BrowserRouter>
//       <Header />
//       <Routes>

//           <Route path="/" element={<Main />} />
          
//       </Routes>
//       <Footer />

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
