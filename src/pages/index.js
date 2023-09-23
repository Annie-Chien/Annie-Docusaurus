import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import S from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className={S.heroBanner}>
          <h1 className={S.heroTitle}>I'm Annie</h1>
          <p className={S.heroSubtitle}>front-end developer</p>
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
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
