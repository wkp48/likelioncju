import React from 'react';
import Header from '../components/Header';
import MemHeader from '../components/MemHeader';
import './term.css';

function Term() {
  const members = [
    {
      name: '김채연',
      position: 'Leader',
      department: '인공지능소프트웨어학과',
      image: '박건률_이미지_경로'
    },
    {
      name: '박정민',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: '박정민_이미지_경로'
    },
    {
      name: '김채연',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: '김채연_이미지_경로'
    },
    {
      name: '노승빈',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: '노승빈_이미지_경로'
    },
    {
      name: '전진호',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: '전진호_이미지_경로'
    },
    {
      name: '홍지우',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: '홍지우_이미지_경로'
    }
  ];

  return (
    <div className="Term">
      <Header />
      <MemHeader/>
      <div className="member-container">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img 
              src={member.image} 
              alt={member.name} 
              className="member-image"
            />
            <div className="position-tag">{member.position}</div>
            <div className="member-name">{member.name}</div>
            <div className="member-department">{member.department}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Term;
