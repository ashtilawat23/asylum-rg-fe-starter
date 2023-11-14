import React from 'react';
import { BeatLoader } from 'react-spinners';
import '../../../styles/RenderLoadingPage.less';

export default function LoadingPage() {
  return (
    <>
      <div className="loading-container">
        <span className="loading-text">
          <h1>Loading</h1>
          <div className="beat-loader">
            {/* simple 'spinner' brought in from react-spinners */}
            <BeatLoader color="#FFFFFF" />
          </div>
        </span>
      </div>
    </>
  );
}
