import React from 'react';
import styles from '../Section/Section.module.css';

const Section = ({ container }) => {
  return (
    <>
      <div className={styles.containerSection}>{container}</div>
    </>
  );
};

export default Section;
