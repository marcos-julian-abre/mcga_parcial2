import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftBar from '../LeftBar/LeftBar';
import Section from '../Section/Section';
import styles from '../Layout/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.containerContent}>
        <LeftBar />
        <Section container={children} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
