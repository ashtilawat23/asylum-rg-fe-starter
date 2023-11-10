import React from 'react';
import { BeatLoader } from 'react-spinners';

export default function LoadingPage() {
  return (
    <>
      <div className="loading-container">
        <span className="loading-text">
          <h1>Loading</h1> <BeatLoader color="#36d7b7" />
        </span>
      </div>
    </>
  );
}
