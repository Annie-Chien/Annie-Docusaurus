import Layout from '@theme/Layout';
import React from 'react';
import S from './about.module.scss';
const About = () => {
  return (
    <Layout title="About" description="About me">
      {/* Starry Night background */}
      <div className={S.stars}></div>
      <div className={S.twinkling}></div>
      <div className={S.clouds}></div>
      <div className={S.content}>
        <div className="avatar avatar--vertical">
          <img
            className={`avatar__photo avatar__photo--xl ${S.photo}`}
            src="img/blog-profile-1.jpg"
          />
          <div className="avatar__intro">
            <div className={S.name}>Annie Chien</div>
            <small className="avatar__subtitle">
              ✉️{' '}
              <a href="mailto:annie.chien105@gmail.com">
                annie.chien105@gmail.com
              </a>
            </small>
            <p className={S.description}>
              嗨，我是 Annie，2022 年 4
              月毅然決然辭去英文雜誌編輯的工作，投注所有心力自學前端，後來也很幸運地成功找到了份前端工程師的工作。雖然頭髮掉了不少、白髮也多了幾根...但還是很感謝自己所做的決定。
              開始踏入資訊領域的的我，覺得自己就像是剛離開高塔的
              Rapunzel（沒錯我超愛迪士尼辣哈哈哈），一切都好新鮮、神奇，內心不斷歡呼吶喊：
              <span className="highlight">THIS IS SOOO FUUUUUN!!! </span> <br />
              <br />
              希望自己能保有這份熱情和動力，繼續探索浩瀚無邊的資訊領域呀～快樂快樂
              🌼
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
