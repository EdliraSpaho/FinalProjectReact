/*import Header from './Components/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App*/
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Home  <Link to={'films'}>The Studio Ghibli Collection</Link></h1>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
};

export default App;
