import React from "react";
import loading from '../assets/images/loading.svg';

const LoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div><img src={loading} className="loading" alt="logo" /></div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};
export default LoadingComponent;
