
import React from 'react';
import Icon from 'components/Icon';
import { VelocityComponent } from 'velocity-react';
import styles from './styles.css';

export function Landing(props) {
  const spring = 15;
  const accel = 100;
  return (
    <div className={styles.Landing}>
      <div className={styles.Logo}>
        {[
          {
            letter: 'a',
            animation: { rotateY: ['180deg', [accel, spring]] },
          },
          {
            letter: 'j',
            animation: { rotateX: ['180deg', [accel, spring]] },
          },
          {
            letter: 'p',
            animation: { rotateY: ['180deg', [accel, spring]] },
          },
        ].map((val, i) => {
          return (
            <VelocityComponent key={i} runOnMount animation={val.animation} delay={1000} loop={1} duration={1500} >
              <div style={{ padding: '0 20px', transformOrigin: '0 5' }}>
                {val.letter}
              </div>
            </VelocityComponent>
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
