import React from 'react';
//import Header from './header/Header';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import Home from '../views/Home';
import Study from '../views/Study';
import Me from '../views/Me';
import Life from '../views/Life';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
const headerList = [
  { name: '网站首页', path: '/' },
  { name: '技术博客', path: 'tech' },
  { name: '慢生活', path: 'life' },
  { name: '关于我', path: '/me' }
];
export default class SelfLayout extends React.Component {
  render() {
    return (
      <Layout className='layout' style={{ height: '100%' }}>
        <Header
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: 1
          }}>
          <div
            className='logo'
            style={{
              width: '120px',
              height: '31px',
              background: 'rgba(255, 255, 255, 0.2)',
              margin: '16px 24px 16px 0',
              float: 'left'
            }}>
            <span
              style={{
                color: 'white',
                float: 'left',
                marginTop: '-15px',
                marginLeft: '5px'
              }}>
              RogersCai's BLOG
            </span>
          </div>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[window.location.hash.split('#')[1]]}>
            {headerList.map((item, index) => {
              return (
                <Menu.Item key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Content
          className='site-layout'
          style={{ padding: '0 50px', marginTop: 64 }}>
          <div
            className='site-layout-content'
            style={{
              background: '#fff',
              padding: '24px',
              minHeight: '280px',
              height: '100%',
              overflow: 'auto'
            }}>
            <Router>
              <div>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/tech' component={Study} name='学无止境' />
                  <Route path='/life' component={Life} />
                  <Route path='/me' component={Me} />
                  <Redirect from='/*' to='/' />
                </Switch>
              </div>
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>浙ICP备20008750号</Footer>
      </Layout>
    );
  }
}
