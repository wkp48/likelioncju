import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Main.css';
import brandLogo from '../assets/brandLogo.png';

function Main() {
  const historyRef = useRef(null);
  const recruitRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentHistoryRef = historyRef.current;
    const currentRecruitRef = recruitRef.current;
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          const boxes = entry.target.querySelectorAll('.box');
          boxes.forEach((box, index) => {
            setTimeout(() => {
              box.classList.add('visible');
            }, index * 300);
          });

          const points = entry.target.querySelectorAll('.timeline-point');
          points.forEach((point, index) => {
            setTimeout(() => {
              point.classList.add('visible');
            }, index * 300);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (currentHistoryRef) {
      observer.observe(currentHistoryRef);
    }
    if (currentRecruitRef) {
      observer.observe(currentRecruitRef);
    }

    return () => {
      if (currentHistoryRef) {
        observer.unobserve(currentHistoryRef);
      }
      if (currentRecruitRef) {
        observer.unobserve(currentRecruitRef);
      }
      observer.disconnect();
    };
  }, []);

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <div className="Main">
      <Header />
      <div className="container">
        <h1>생각을 <span className="orange-text">연결</span>하고, 미래를 <span className="orange-text">창조</span>한다</h1>
        <p>멋쟁이사자처럼 <span className='cju-color'>청주대학교</span>는</p>
        <p>상상을 현실로 구현하는 IT창업동아리 입니다.</p>
        <div className="image-container">
          <img src={brandLogo} alt="브랜드 로고" className="brand-logo-image" />
        </div>
      </div>

      <div className='History' ref={historyRef}>
        <h1 className="history-title">HISTORY</h1>
        <div className="history-content">
          <div className='Since box'>
            <h2>Since</h2>
            <p>2025</p>
          </div>
          <div className='Member box'>
            <h2>Member</h2>
            <p>20+</p>
          </div>
          <div className='Projects box'>
            <h2>Projects</h2>
            <p>0</p>
          </div>
        </div>
      </div>

      <div className='Recruit' ref={recruitRef}>
        <h1 className="recruit-title">RECRUIT</h1>
        <div className="year">2025년</div>
        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-point">2월 모집 시작</div>
            <div className="timeline-point">3월 초 1차 합격자발표</div>
            <div className="timeline-point">3월 중순 2차 합격자발표</div>
            <div className="timeline-point">최종 합격자 발표</div>
          </div>
          <button className="apply-button" onClick={handleApplyClick}>13기 지원하기</button>
        </div>
      </div>
    </div>
  );
}

export default Main;