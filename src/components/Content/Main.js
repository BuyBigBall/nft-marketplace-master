import { useContext  } from 'react';

import MintForm from './MintNFT/MintForm';
import CratorForm from './MintNFT/CratorForm';
import NFTCollection from './NFTCollection/NFTCollection';
//import LoanCollection from './NFTCollection/LoanCollection';
import CollectionContext from '../../store/collection-context';
import MarketplaceContext from '../../store/marketplace-context';
import Spinner from '../Layout/Spinner';
import logo from '../../img/logo2.PNG'

const Main = () => {
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  
  return(
    <div className="container-fluid mt-2">
      <div className="row">
        New NFT Mint :<br />
        <main role="main" className="col-lg-12 justify-content-center text-center">
          <div className="content mr-auto ml-auto">            
            {!collectionCtx.nftIsLoading && <MintForm />}
            {collectionCtx.nftIsLoading && <Spinner />}
          </div>
        </main>
      </div>
      <hr/>
      {!marketplaceCtx.mktIsLoading && <NFTCollection />}
      {marketplaceCtx.mktIsLoading && <Spinner />}
      
      <hr/>
      <div className="row">
        Crator Form :<br />
        <main role="main" className="col-lg-12 justify-content-center text-center">
          <div className="content mr-auto ml-auto">
            {!collectionCtx.nftIsLoading && <CratorForm />}
            {collectionCtx.nftIsLoading && <Spinner />}
          </div>
        </main>
      </div>
      
      {/* <hr/>
      <div className="row">
        Loan Collection :<br />
        <main role="main" className="col-lg-12 justify-content-center text-center">
          <div className="content mr-auto ml-auto">
            {!collectionCtx.nftIsLoading && <LoanCollection />}
            {collectionCtx.nftIsLoading && <Spinner />}
          </div>
        </main>
      </div> */}


    </div>
  );
};

export default Main;