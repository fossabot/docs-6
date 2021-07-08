import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './donate.module.css';
import DonateImg from '../../static/img/donate.jpg';
import Logo from '../../static/img/logo.png';

export default function Donate() {
  const [paytype, setPaytype] = React.useState('weixin');

  return (
    <Layout title='Buy Me a Coffee' description='小额赞助 Korss 项目'>
      <main>
        <div className="hero shadow--lw" style={{
          textAlign: 'center',
          backgroundImage: `url(${DonateImg})`,
          backgroundRepeat: 'space',
          backgroundSize: 'cover',
          padding: 0,
        }}>
            <div className={clsx("container padding--lg", styles.cover)}>
              <h1 className="hero__title">Buy Me a Coffee</h1>
              <ul className="pills" key='paytype'>
                <li onClick={() => { setPaytype('weixin'); }} className={
                  clsx('pills__item', paytype === 'weixin' ? 'pills__item--active' : '')
                }>
                  微信
                </li>
                <li onClick={() => { setPaytype('alipay'); }}
                  className={
                    clsx('pills__item', paytype === 'alipay' ? 'pills__item--active' : '')
                  }>
                  支付宝
                </li>
              </ul>
              <img src={Logo} alt='二维码' style={{ height: '256px', objectFit: 'contain' }} />
            </div>
          </div>
      </main>
    </Layout>
  );
}
