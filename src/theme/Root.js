import React from 'react';
import { IconContext } from "react-icons";

function Root({children}) {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      {children}
    </IconContext.Provider>
  )
}

export default Root;
