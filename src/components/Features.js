import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './Features.module.css';
import { props } from 'bluebird';

const FeatureList = [
  {
    title: '上手容易',
    description: '通过精心设计，对复杂的模块进行封装，开发人员无需学习太多便可进入开发',
    linkText: '快速上手',
    to: '/docs/started/installation',
  },
  {
    title: '性能优异',
    description: '开发人员耗费大量时间改进系统性能，尽可能满足大规模应用场景',
    linkText: '查看报告',
    to: '/blog',
  },
  {
    title: '数据看板',
    description: '通过可视化形式实时查看系统各项指标，充分了解系统状态和性能',
    linkText: '了解更多',
    to: '/blog',
  },
  {
    title: '负载均衡',
    description: '将用户请求按照规则路由到不同节点进行处理，充分释放集群能力',
    linkText: '了解更多',
    to: '/blog',
  },
  {
    title: '安全内置',
    description: '系统内置各种安全防范和保护措施，并持续跟踪和改进安全漏洞',
    linkText: '了解安全',
    to: '/blog',
  },
  {
    title: '循序渐进',
    description: '项目初期可以采用单个节点部署节省成本，后期再扩展到多个节点，无需修改代码',
    linkText: '最佳实践',
    to: '/blog',
  },
  {
    title: '开箱即用',
    description: '系统内置一些大多数项目都需要的基础服务，这些服务开箱即用',
    linkText: '服务介绍',
    to: '/blog',
  },
  {
    title: '前沿技术',
    description: '系统采用当下流行的前沿技术，意味着更体面的开发方式，更好的生态资源',
    linkText: '技术一览',
    to: '/blog',
  },
  {
    title: '开源',
    description: '项目本身采用 MIT 授权协议发布，也仅采用和依赖开源技术和模块',
    linkText: '查看源码',
    to: 'https://github.com/krossjs/kross',
  },
];

function Feature({title, description, linkText, to}) {
  return (
    <div className={clsx('col col--4 padding--lg', styles.feature)}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {linkText &&
          <Link className='button button--link' to={to}>
            <span style={{ verticalAlign: 'middle' }}>{linkText}&nbsp;</span>
            <AiOutlineArrowRight size='1.1rem' />
          </Link>
        }
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className='padding--lg'>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
