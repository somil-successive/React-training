// Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import React from 'react'
import Home from React.lazy(() => import("../Question1.2"));                     
const Question1 = () => {
  return (
    <div>
    return (
        <>
          <Suspense fallback={<div>Loading</div>}>
            <Home />
            
          </Suspense>
        </>
      );

      
    </div>
  )
}

export default Question1;
