import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GoMarkGithub, GoPlay, GoBook } from "react-icons/go";
import styles from './index.module.css';
import Features from '../components/Features';

function HeroButton(props) {
  return (
    <Link to={props.href} className={
      clsx("button button--lg margin--sm",
        props.started ? 'button--secondary' : 'button--secondary',
        styles.heroButton,
        props.started ? styles.heroStartedButton : null
      )
    }>
      {props.icon}
      <span style={{verticalAlign:'middle'}}>&nbsp;{props.title}</span>
    </Link>
  )
}

function HomepageHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">渐进式微服务框架</h1>
        <p className="hero__subtitle">
          上手容易，开箱即用
        </p>
        <div className='col margin-top--xl'>
          <HeroButton title='快速上手' icon={<GoPlay size='1.2em' />}
            href='/docs/intro' started
          />
          <HeroButton title='查阅文档' icon={<GoBook size='1.2em' />}
            href='/docs/intro'
          />
          <HeroButton title='GITHUB' icon={<GoMarkGithub size='1.2em' />}
            href='https://github.com/krossjs/kross'
          />
        </div>
        <div className='col margin-top--xl'>
          <iframe src="https://ghbtns.com/github-btn.html?user=krossjs&repo=kross&type=star&count=true"
            frameBorder="0" scrolling="0" width="90" height="20" title="GitHub"></iframe>
          <iframe src="https://ghbtns.com/github-btn.html?user=krossjs&repo=kross&type=fork&count=true"
            frameBorder="0" scrolling="0" width="90" height="20" title="GitHub"></iframe>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
