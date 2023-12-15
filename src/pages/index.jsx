import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import S from './index.module.scss';

const TitleColors = ['off', 'pink', 'blue', 'yellow'];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [colorIdx, setColorIdx] = useState(1);

  const handleChangeTitleColor = () => {
    if (colorIdx + 1 >= TitleColors.length) {
      setColorIdx(0);
    } else {
      setColorIdx(colorIdx + 1);
    }
  };
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={S.main}>
        <div className={S.heroBanner}>
          <h1 className={`${S.heroTitle} ${S[TitleColors[colorIdx]]}`}>
            I'm Annie
          </h1>

          {/* <p className={S.heroSubtitle}>Frontend Developer</p> */}

          <div className={S.picture}>
            <button
              onClick={handleChangeTitleColor}
              className={S.lightSwitch}
            ></button>
            <div className={S.window}>
              <div className={S.rect}>
                <div className={S.moon} />
              </div>
              <div className={S.rect} />
            </div>
            <div className={S.desk}>
              <img src="img/hero.svg" alt="web developement" />
              <div className={S.shelf}>
                <div>
                  <Link to="https://medium.com/@annie.chien105">Medium</Link>
                </div>
                <div>
                  <Link to="https://github.com/Annie-Chien">GitHub</Link>
                </div>
                <div>
                  <Link to="https://twitter.com/AnnieChien105">Twitter(X)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className={S.lightrope}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul
          className={S.lightrope}
          style={{
            transform: 'rotate(25deg)',
            right: '-2rem',
            left: 'initial',
            textAlign: 'end',
          }}
        >
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </Layout>
  );
}
