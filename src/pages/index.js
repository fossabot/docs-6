import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GoMarkGithub, GoPlay, GoBook } from "react-icons/go";
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HeroButton(props) {
  return (
    <Link to={props.href} className={
      clsx("button button--lg margin--sm",
        props.started ? 'button--secondary' : 'button--outline',
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
          按需采纳、横向扩展、代码隔离、性能观测、基础服务开箱即用
        </p>
        <div className='col col--3 margin-top--xl'>
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
