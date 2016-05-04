
import React from 'react';
import { VelocityComponent } from 'velocity-react';
import styles from './styles.css';

export function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.Logo}>
        {[
          {
            letter: 'a',
            animation: { scale: '1.3' },
          },
          {
            letter: 'j',
            animation: { scale: '1.5' },
          },
          {
            letter: 'p',
            animation: { scale: '1.1' },
          },
        ].map((val, i) => {
          const rend = (
            <VelocityComponent key={i} runOnMount animation={null} delay={200} loop duration={500} >
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
