import React from 'react';
import { Link } from 'react-router';
import { VelocityComponent } from 'velocity-react';
import Icon from 'components/Icon';
import styles from './styles.css';

export default function SideBar(props) {
  const menuItems = [
    {
      icon: 'minus',
      link: '/',
    },
    {
      icon: 'question',
      link: '/info',
    },
    {
      icon: 'envelope',
      link: '/message',
    },
  ];
  return (
    <VelocityComponent animation={{ translateX: ['100%', [500, 50]] }} runOnMount duration={1000} >
      <div
        className={styles.sideBar}
      >
        <div
          className={styles.Close}
          onTouch={props.close}
          onMouseDown={props.close}
        >
          <Icon name="close" />
        </div>
        <div className={styles.Menu}>
          {menuItems.map((value, i) => {
            const render = (
              <div key={i} className={styles.menuItem}>
                <Link to={value.link}><Icon name={value.icon} /></Link>
              </div>
            );
            return render;
          })}
        </div>
      </div>
    </VelocityComponent>

  );
}

SideBar.propTypes = {
  close: React.PropTypes.func,
};
