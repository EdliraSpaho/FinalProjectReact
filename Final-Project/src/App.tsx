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
      <h1>This is a navbar: <Link to={'films'}>View Register</Link></h1>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
};

export default App;
