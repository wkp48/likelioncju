import React from 'react';
import { Link } from 'react-router-dom';
import './MemHeader.css';

function MemHeader() {
  return (
    <div className="Memheader">
      <nav className='Memnav'>
        <Link to="/dev" className="Mem-link">개발진</Link>
        <Link to="/term" className="Mem-link">13기</Link>
      </nav>
    </div>
  );
}

export default MemHeader;