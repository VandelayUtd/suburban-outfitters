import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Navigation from './pages/navigation/navigation';
import Authentication from './pages/authentication/authentication';
import Shop from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';

import { GlobalStyle } from './global.styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;