import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { DataContextProvider } from './Components/DataProvider/DataProvider.jsx'
import {reducer,initialState} from './Utlity/Reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <DataContextProvider reducer={reducer} initialState={initialState}>
   <App />
  </DataContextProvider>
   
  
 
      
  
  </StrictMode>
)
