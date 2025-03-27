import { useEffect } from 'react';
import authservice from './appwrite/auth';

function App() {
  useEffect( () => {
    authservice.getCurrentUser().then(res => console.log(res)).catch( error => console.log(error) )
  } ,[] )
  return (
    <>
    <h1>Header</h1>
    <h1>Footer</h1>
    </>
  )
}

export default App