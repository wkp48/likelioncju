import React from 'react';
import Header from '../components/Header';
import './Activity.css';

const Activity = () => {
  return (
    <div className="activity-section">
      <Header />
      <h1>주요 활동</h1>

      <div className="activity-cards">
        <div className="card">
          <h2>매주 스터디 활동</h2>
          <p>팀과 함께 하는 스터디</p>
          <div className="card-footer">
            <span className="cf">1/2학기</span>
            <span className="cf">매주</span>
          </div>
        </div>

        <div className="card">
          <h2>사이드 프로젝트</h2>
          <p>상상을 현실로! 원하는 앱/웹 제작</p>
          <div className="card-footer">
            <span className="cf">1/2학기</span>
            <span className="cf">최소 1개</span>
          </div>
        </div>

        <div className="card">
          <h2>중앙 아이디어톤</h2>
          <p>특정 주제에 맞춰 혁신적이고 독특한 아이디어로 승부~!</p>
          <div className="card-footer">
            <span className="cf">4월 예선</span>
            <span className="cf">5월 본선</span>
          </div>
        </div>

        <div className="card">
          <h2>중앙 해커톤</h2>
          <p>멋쟁이사자처럼 주관 역대급 규모 무박 2일 해커톤</p>
          <div className="card-footer">
            <span className="cf">8월</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
