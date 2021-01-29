import Head from 'next/head'
import AOS from 'aos';
import styles from '../styles/Home.module.css'
import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em auto;
  padding: 0.25em 1em;
  
  :hover{
    color: red;
    background: black;
  }
`

export default function Home() {
  return (
    <div>
      <h1 styles={styles.title} data-aos="fade-up">
        Hey there
      </h1>
    </div>
  )
}
