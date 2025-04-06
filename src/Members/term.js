import React from 'react';
import Header from '../components/Header';
import MemHeader from '../components/MemHeader';
import './term.css';
import 기본이미지 from '../assets/default-profile.png'


function Term() {
  const members = [
    {
      name: '박건률',
      position: '대표',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김지운',
      position: '부대표',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김재영',
      position: '운영진',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김신의',
      position: '운영진',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김은성',
      position: '운영진',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김가빈',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김민오',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김주현',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김채연',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김태현',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '박세령',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '서우진',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '전은영',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '한지성',
      position: 'Frontend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },

    {
      name: '고재휘',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '김현우',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '박지우',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '신숙우',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '이유진',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '전진호',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '전준범',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '정승준',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '조현수',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '홍성진',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
    },
    {
      name: '홍지우',
      position: 'Backend',
      department: '인공지능소프트웨어학과',
      image: 기본이미지
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
