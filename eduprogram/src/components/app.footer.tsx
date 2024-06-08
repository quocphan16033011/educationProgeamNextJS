"use client";
import styles from "@/app/page.module.css";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className={styles.setFooter}>
        <div className={styles.overlay}></div>
        <Container className={styles.container}>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
