
import React from 'react';
import { VelocityComponent } from 'velocity-react';
import styles from './styles.css';

export function Landing() {
  const spring = 15;
  const accel = 100;
  return (
    <div className={styles.Landing}>
      <div className={styles.Logo}>
        {[
          {
            letter: 'a',
            animation: { scale: ['1.3', [accel, spring]] },
          },
          {
            letter: 'j',
            animation: { scale: ['1.5', [accel, spring]] },
          },
          {
            letter: 'p',
            animation: { scale: ['1.1', [accel, spring]] },
          },
        ].map((val, i) => {
          const rend = (
            <VelocityComponent key={i} runOnMount animation={val.animation} delay={1000} loop duration={1000} >
              <div style={{ padding: '0 20px', transformOrigin: '0 5' }}>
                {val.letter}
              </div>
            </VelocityComponent>
          );
          return rend;
        })}
      </div>
    </div>
  );
}

export default Landing;
