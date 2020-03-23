import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const headerList = [
  { name: '网站首页', path: '/' },
  { name: '关于我', path: '/me' },
  { name: '技术博客', path: '/type/tech' },
  { name: '慢生活', path: '/type/life' }
  // { name: "时间轴", path: "/" },
  // { name: "内容页", path: "/content" }
];
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <nav className='nav-container'>
            <h1 className='logo'>RogersCai博客</h1>
            {headerList.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <li key={index}>{item.name}</li>
                </Link>
              );
            })}
            <div className='search'>
              <i className='fa fa-search icon' />
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
