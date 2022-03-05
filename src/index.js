import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Web3Provider from './store/Web3Provider';
import CollectionProvider from './store/CollectionProvider';
import MarketplaceProvider from './store/MarketplaceProvider';
import LendingProvider from './store/LendingProvider';

import App from './App';

const getLibrary = provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}


ReactDOM.render(
  <Web3Provider getLibrary={getLibrary}>
      <CollectionProvider>
        <MarketplaceProvider>
          <LendingProvider>
            <App />
          </LendingProvider>
        </MarketplaceProvider>
      </CollectionProvider>
  </Web3Provider>, 
  document.getElementById('root')
);
