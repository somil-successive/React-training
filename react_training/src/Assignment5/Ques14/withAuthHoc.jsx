// Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.



import React, { useState, useEffect } from 'react';

export const withAuthHoc = (Home) => {
 // HOC logic using hooks
 
 return function EnhancedComponent(props) {
   // HOC-specific logic using hooks
   return (
     <BaseComponent {...props} enhancedProp="someValue" />
   );
 };
};