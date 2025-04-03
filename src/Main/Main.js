import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import './Main.css';
import brandLogo from '../assets/brandLogo.png';
import About from '../About/About';
import Activity from '../Activity/Activity';
import Members from '../Members/dev';
import Apply from '../Apply/Apply';
import Dev from '../Members/dev';
import Term from '../Members/term';

function App() {
  const historyRef = useRef(null);
  const recruitRef = useRef(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          entry.target.classList.remove('visible');
          const boxes = entry.target.querySelectorAll('.box, .timeline-point');
          boxes.forEach(box => {
            box.classList.remove('visible');
          });
        }

        else {
          entry.target.classList.add('visible');
          const boxes = entry.target.querySelectorAll('.box');
          const points = entry.target.querySelectorAll('.timeline-point');
          
          boxes.forEach((box, index) => {
            setTimeout(() => {
              box.classList.add('visible');
            }, index * 200);
          });

          points.forEach((point, index) => {
            setTimeout(() => {
              point.classList.add('visible');
            }, index * 200);
          });
        }
      });
    };

    const historyObserver = new IntersectionObserver(handleIntersection, options);
    const recruitObserver = new IntersectionObserver(handleIntersection, options);

    if (historyRef.current) {
      historyObserver.observe(historyRef.current);
    }
    if (recruitRef.current) {
      recruitObserver.observe(recruitRef.current);
    }

    return () => {
      if (historyRef.current) {
        historyObserver.unobserve(historyRef.current);
      }
      if (recruitRef.current) {
        recruitObserver.unobserve(recruitRef.current);
      }
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={
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
              <button className="apply-button">13기 지원하기</button>
            </div>
          </div>
        </div>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/members" element={<Members/>} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/dev" element={<Dev />} />
      <Route path="/term" element={<Term />} />
    </Routes>
  );
}

export default App;