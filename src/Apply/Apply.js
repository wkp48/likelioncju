import React from 'react';
import Header from '../components/Header';
import './Apply.css';

function Apply() {
  return (
    <div className="Apply">
      <Header />
      <p>
        14기 모집 지원 폼  
      </p>
      <button class = "apply-button">
        14기 지원하기
      </button>
    </div>
  );
}

export default Apply;
