import React from 'react';
import Header from '../components/Header';
import MemHeader from '../components/MemHeader';
import './dev.css';
import 김채연 from '../assets/김채연.jpeg'
import 전진호 from '../assets/전진호.jpeg'
import 박건률2 from '../assets/박건률2.jpeg'
import 박정민 from '../assets/박정민.jpeg'
import 노승빈 from '../assets/노승빈.jpeg'
import 홍지우 from '../assets/홍지우.jpeg'

function Dev() {
  const members = [
    {
      name: '박건률',
      position: 'Leader',
      department: '인공지능소프트웨어학과',
      image: 박건률2
    },
    {
      name: '박정민',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 박정민
    },
    {
      name: '김채연',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 김채연
    },
    {
      name: '노승빈',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 노승빈
    },
    {
      name: '전진호',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 전진호
    },
    {
      name: '홍지우',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 홍지우
    }
  ];

  return (
    <div className="Dev">
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

export default Dev;
