import React, { useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import Header from '../components/Header';
import './About.css';

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    const options = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const currentSection = entry.target;
        const isFirstSection = currentSection === sections[0];
        
        if (entry.isIntersecting) {
          // 현재 섹션 보이기
          currentSection.classList.add('visible');
          const texts = currentSection.querySelectorAll('.animate-text');
          texts.forEach((text, index) => {
            setTimeout(() => {
              text.classList.add('visible');
            }, index * 200);
          });

          // 첫 번째 섹션이 보일 때 두 번째 섹션 숨기기
          if (isFirstSection && sections[1]) {
            sections[1].classList.remove('visible');
            const secondTexts = sections[1].querySelectorAll('.animate-text');
            secondTexts.forEach(text => {
              text.classList.remove('visible');
            });
          }
        } else {
          // 화면에서 벗어날 때는 첫 번째 섹션만 visible 유지
          if (!isFirstSection) {
            currentSection.classList.remove('visible');
            const texts = currentSection.querySelectorAll('.animate-text');
            texts.forEach(text => {
              text.classList.remove('visible');
            });
          }
        }
      });
    }, options);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="about-container">
      <Header />
      <div className="section-container">
        {/* 첫 번째 섹션 */}
        <section 
          className="first section" 
          ref={el => sectionsRef.current[0] = el}
        >
          <p className="animate-text">안녕하세요, 청주대학교 it창업동아리</p>
          <p className="animate-text"> 
            <span className='LIKELION'>
              <img src={logo} alt="LIKELION" className="logo-image" />
              <span className="highlight">LIKELION CJU</span>
            에 오신 여러분을 환영합니다!</span>
          </p>
          <p className="animate-text">
            멋쟁이사자처럼 청주대학교는 청주대학교 학생들을 대상으로
          </p>
          <p className="animate-text">
            프로그래밍 교육과 창업 및 개발 역량 강화를 목표로 하는&nbsp; 🚀대학 연합 IT 창업 동아리 입니다.</p>
          <p className="animate-text">
            우리는 <strong style={{fontWeight:1000, WebkitTextStroke: 0.3}}>"아이디어를 현실로"</strong>와 <strong style={{fontWeight:1000, WebkitTextStroke: 0.3}}>"생각을 연결하고 미래를 창조한다"</strong>라는 슬로건 아래,
          </p>
          <p className="animate-text">
            코딩을 몰라도 참여할 수 있는 체계적인 교육 과정을 제공하며,
          </p>
          <p className="animate-text">
            기초부터 실전까지 다양한 프로젝트를 진행합니다.</p>
          <p className="animate-text">
            특히, 웹/앱 개발, 스타트업 창업, 해커톤 등 다양한 활동을 통해 실무 경험을 쌓을 수 있습니다.</p>
          <p className="animate-text">
          상상을 현실로 실현하고 성장할 수 있도록 멋사 운영진이 항상 함께 하겠습니다!</p>
          <p className='info animate-text'> 
            멋쟁이사자처럼13기/청주대학교 1기 운영진 드림<br />
            대표 박건률 |부대표 김지운 | 운영부 김재영 | 학술부 김은성 | 홍보부 김신의
          </p>
        </section>

        {/* 두 번째 섹션 */}
        <section 
          className="second section" 
          ref={el => sectionsRef.current[1] = el}
        >
          <h1 className='animate-text'>무슨 언어와 기술을 배우나요?</h1>
          <hr></hr>
          <p className="animate-text">
            <strong style={{fontSize:35}}>💻&nbsp;&nbsp;&nbsp; 프론트 개발:</strong> HTML, CSS, Javascript, React, 상태관리, 배포
          </p>
          <p className="animate-text">
            <strong style={{fontSize:35}}>🍎&nbsp;&nbsp;&nbsp; 백엔드 개발:</strong> Next.js, API, DB연동, JWT, RESTful API
          </p>
          <p className="animate-text">
            <strong style={{fontSize:35}}>🤖&nbsp;&nbsp;&nbsp; AI & 머신러닝:</strong> Python, ML/DL, LLM, RAG, On-Device AI
          </p>
          <p className="animate-text">
            <strong style={{fontSize:35}}>📝&nbsp;&nbsp;&nbsp; PM & 서비스 기획:</strong> 핀테크 서비스 기획, QA, 데이터 분석 기반 개선
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;