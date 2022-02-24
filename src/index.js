import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Web3Provider from './store/Web3Provider';
import CollectionProvider from './store/CollectionProvider';
import MarketplaceProvider from './store/MarketplaceProvider';
import App from './App';
import Web3Wrapper from './wrapper';

ReactDOM.render(
  <Web3Provider>
    <CollectionProvider>
      <MarketplaceProvider>
        <Web3Wrapper>
          <App/>
        </Web3Wrapper>
      </MarketplaceProvider>
    </CollectionProvider>
  </Web3Provider>, 
  document.getElementById('root')
);