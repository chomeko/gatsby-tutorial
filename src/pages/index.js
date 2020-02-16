import React from "react"
import styles from "../pages/index.module.css"
import Layout from "../components/layout"
import "../styles/index.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Layout>
    <section className="index">
      <p>INDEXページ</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div className="wrapper">
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User
          username="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          username="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </div>
    </section>
  </Layout>
)