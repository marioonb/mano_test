/* ***************************************************************************** */
/*                                                                               */
/*       file : App.js                                                           */ 
/*                                                                               */ 
/*  #####     #####  ###############  #####      ####  ###############           */ 
/*  ######   ######  ###############  #######    ####  ###############           */     
/*  ###############  #####     #####  #########  ####  #####     #####           */
/*  ###############  ###############  ####   ########  #####     #####           */
/*  #####     #####  ###############  ####     ######  #####     #####           */
/*  #####     #####  #####     #####  ####      #####  ###############           */
/*  #####     #####  #####     #####  ####       ####  ###############  test...  */
/*                                                                               */ 
/*                  created 07/11/2022 by Marion                                 */
/*                                                                               */
/* ***************************************************************************** */

import { useState, useEffect } from 'react';
import Banner from './Banner'
import '../styles/App.css'

function App(){
  const [hits, setData] = useState([]);                           // empty array
  const [search, setSearch] = useState('');                       // for input

  useEffect(() => { 

    const fetchData = async () => {                               // get data
        const res = await fetch (
          `https://pixabay.com/api/?key=31184286-fbddf0309f7be00a181927e82&q=${search}&image_type=photo`
          );
        const data = await res.json(); 
        setData (data.hits);                                      // data in array
  };
      fetchData();                                                // search data

} , [search])                                                     // resout le probleme de boucle infini [] // erreur React Hook useEffect has a missing dependency: 'search'. Either include it or remove the dependency array --> [search]

return(

  <div>
      <Banner/> 
        <div>
             <input 
              className="inputStyle" type="search" onChange={e => setSearch(e.target.value)} />
                <ul>
                  {hits.map(item =>(
                  <div key={item.id}>
                   <img
                      className="imageStyle"
                      src = {item.webformatURL} 
                      alt="images"                                // error img elements must have an alt prop, either with meaningful text, or an empty string for decorative image
                    />  
                  </div>
                  ))}
                </ul>
        </div>
  </div>

)
  
}



// async -> promise fonction
// await -> only with async, wait for the end of the called function


export default App;
