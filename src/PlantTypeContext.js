import React, { useState, createContext } from 'react';

const PlantTypeContext = createContext([{}, () => { }]);

const PlantTypeProvider = (props) => {
  const [state, setState] = useState({ plantType: 'hydel'});
  return (
    <PlantTypeContext.Provider value={[state, setState]}>
      {props.children}
    </PlantTypeContext.Provider>
  );
}

export { PlantTypeContext, PlantTypeProvider };