import { useState, useContext } from 'react';

import Web3Context from '../../../store/web3-context';
import CollectionContext from '../../../store/collection-context';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const MintForm = () => {  
  const [enteredName, setEnteredName] = useState('');
  const [descriptionIsValid, setDescriptionIsValid] = useState(true);

  const [enteredDescription, setEnteredDescription] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);

  const [capturedFileBuffer, setCapturedFileBuffer] = useState(null);
  const [fileIsValid, setFileIsValid] = useState(true);

  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const [enteredLink, setEnteredLink] = useState('');
  const enteredLinkHandler = (event) => { setEnteredLink(event.target.value);  };

  const [enteredSupply, setEnteredSupply] = useState('');
  const enteredSupplyHandler = (event) => { setEnteredSupply(event.target.value);  };

  const [enteredUnlockable, setenteredUnlockable] = useState(false);
  const enteredUnlockableHandler = (event) => { setenteredUnlockable(event.target.checked);  };
  const [enteredExplicit, setenteredExplicit] = useState(false);
  const enteredExplicitHandler = (event) => { setenteredExplicit(event.target.checked);  };

  const [enteredCateart, setenteredCateart] = useState(false);
  const enteredCateartHandler = (event) => { setenteredCateart(event.target.checked);  };
  const [enteredCatecoll, setenteredCatecoll] = useState(false);
  const enteredCatecollHandler = (event) => { setenteredCatecoll(event.target.checked);  };
  const [enteredCatedomain, setenteredCatedomain] = useState(false);
  const enteredCatedomainHandler = (event) => { setenteredCatedomain(event.target.checked);  };
  const [enteredCatemusic, setenteredCatemusic] = useState( false );
  const enteredCatemusicHandler = (event) => { setenteredCatemusic(event.target.checked);  };
  const [enteredCateetc, setenteredCateetc] = useState(false);
  const enteredCateetcHandler = (event) => { setenteredCateetc(event.target.checked);  };

  const [enteredRed, setenteredRed] = useState(false);
  const enteredRedHandler = (event) => { setenteredRed(event.target.checked);  };
  const [enteredBlue, setenteredBlue] = useState(false);
  const enteredBlueHandler = (event) => { setenteredBlue(event.target.checked);  };

  const captureFile = (event) => {
    event.preventDefault();

    const file = event.target.files[0];

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setCapturedFileBuffer(Buffer(reader.result));     
    }
  };  
  
  const submissionHandler = (event) => {
    event.preventDefault();

    enteredName ? setNameIsValid(true) : setNameIsValid(false);
    enteredDescription ? setDescriptionIsValid(true) : setDescriptionIsValid(false);
    capturedFileBuffer ? setFileIsValid(true) : setFileIsValid(false);

    const formIsValid = enteredName && enteredDescription && capturedFileBuffer;

    let enteredCategory = [];
    enteredCategory.push(enteredCateart);
    enteredCategory.push(enteredCatecoll);
    enteredCategory.push(enteredCatedomain);
    enteredCategory.push(enteredCatemusic);
    enteredCategory.push(enteredCateetc);
    //  console.log(enteredCategory); return;
    
    let enteredProperty = [];
    enteredProperty.push(enteredRed);
    enteredProperty.push(enteredBlue);

    // Upload file to IPFS and push to the blockchain
    const mintNFT = async() => {

      // Add file to the IPFS
      const fileAdded = await ipfs.add(capturedFileBuffer);
      if(!fileAdded) {
        console.error('Something went wrong when updloading the file');
        return;
      }

      const metadata = {
        title: "Asset Metadata",
        type: "object",
        properties: {
          name: {
            type: "string",
            description: enteredName
          },
          description: {
            type: "string",
            description: enteredDescription
          },
          image: {
            type: "string",
            description: fileAdded.path
          },
          link: {
            type: "string",
            description: enteredLink
          },
          supply: {
            type: "string",
            description: enteredSupply
          },
          category: {
            type: "array",
            description: enteredCategory
          },
          property: {
            type: "array",
            description: enteredProperty
          },
          unlockable: {
            type: "bool",
            description: enteredUnlockable
          },
          explicit: {
            type: "bool",
            description: enteredExplicit
          }
        }
      };

      const metadataAdded = await ipfs.add(JSON.stringify(metadata));
      if(!metadataAdded) {
        console.error('Something went wrong when updloading the json');
        return;
      }
      
      // console.log(metadataAdded.path)
      // console.log(web3Ctx.account)
      collectionCtx.contract.methods.safeMint(metadataAdded.path).send({ from: web3Ctx.account })
      .on('transactionHash', (hash) => {
        collectionCtx.setNftIsLoading(true);
        // console.log(hash)
      })
      .on('error', (e) =>{
        window.alert('Something went wrong when pushing a NFT to the blockchain');
        collectionCtx.setNftIsLoading(false);  
      })      
    };

    formIsValid && mintNFT();
  };

  const nameClass = nameIsValid? "form-control" : "form-control is-invalid";
  const descriptionClass = descriptionIsValid? "form-control" : "form-control is-invalid";
  const fileClass = fileIsValid? "form-control" : "form-control is-invalid";
  
  return(
    <form onSubmit={submissionHandler}>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <input
            type='text'
            className={`${nameClass} mb-1`}
            placeholder='Name...'
            value={enteredName}
            onChange={enteredNameHandler}
          />
        </div>
        <div className="col-md-4">
          <input
            type='text'
            className={`${descriptionClass} mb-1`}
            placeholder='Description...'
            value={enteredDescription}
            onChange={enteredDescriptionHandler}
          />
        </div>
        <div className="col-md-4">
          <input
            type='text'
            className={`form-control mb-1`}
            placeholder='External Link'
            value={enteredLink}
            onChange={enteredLinkHandler}
          />
        </div>
        
        <div className="col-md-6 py-3">
          Categories:
          Art <input type='checkbox' className={`mb-1`} 
            value={enteredCateart} onChange={enteredCateartHandler} />
          Collectible <input type='checkbox' className={`mb-1`} 
            value={enteredCatecoll} onChange={enteredCatecollHandler} />
          Domain <input type='checkbox' className={`mb-1`} 
            value={enteredCatedomain} onChange={enteredCatedomainHandler} />
          Music <input type='checkbox' className={`mb-1`} 
            value={enteredCatemusic} onChange={enteredCatemusicHandler} />
          etc <input type='checkbox' className={`mb-1`} 
            value={enteredCateetc} onChange={enteredCateetcHandler} />
        </div>

        <div className="col-md-6 py-3">
          Properties:
          Red <input type='checkbox' className={`mb-1`} 
            value={enteredRed} onChange={enteredRedHandler} />
          Blue <input type='checkbox' className={`mb-1`} 
            value={enteredBlue} onChange={enteredBlueHandler} />
        </div>

        <div className="col-md-1">
          <input
            type='text'
            className={`form-control mb-1`}
            placeholder='supply'
            value={enteredSupply}
            onChange={enteredSupplyHandler}
          />
        </div>
        <div className="col-md-1">
          Unlockable
          <input
            type='checkbox'
            className={`mb-1`}
            value={enteredUnlockable}
            onChange={enteredUnlockableHandler}
          />
        </div>
        <div className="col-md-1">
          Explicit
          <input
            type='checkbox'
            className={`mb-1`}
            value={enteredExplicit}
            onChange={enteredExplicitHandler}
          />
        </div>
        <div className="col-md-2">
          <input
            type='file'
            className={`${fileClass} mb-1`}
            onChange={captureFile}
          />
        </div>
      </div>
      <button type='submit' className='btn btn-lg btn-info text-white btn-block'>MINT</button>
    </form>
  );
};

export default MintForm;