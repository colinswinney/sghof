import Head from 'next/head'

import { getAllMembers } from '../lib/api'

import Layout from '../components/Layout';
import HomeSingle from '../components/HomeSingle'

// https://dev.to/kendalmintcode/configuring-wordpress-as-a-headless-cms-with-next-js-3p1o

// import styles from '../styles/Home.module.css';

const Members = ({ allMembers: { edges } }) => {
  // create an array of all years there was an induction
  let yearArr = []

  for (let i = 0; i < edges.length; i ++) {
    let inductedYear = edges[i].node.membersPostType.inducted
    if (!yearArr.includes(inductedYear)) {
      yearArr.push(inductedYear)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Steel Guitar Hall of Fame</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Steel Guitar Hall of Fame</h1>
        <hr />

        {yearArr.map( (year, i ) => {

          let edgesByYear = edges.filter( edge => edge.node.membersPostType.inducted === year)

          return (
            <section key={i}>
              <h2>{year}</h2>
              {edgesByYear.map( (data, i ) => (
                <HomeSingle key={i} data={data}/>
              ))}
            </section>
          )
        } )}
{/*         
        <section className="home-member-wrapper">
          <HomeSingle data={edges}/>
        </section> */}
        
      </main>
    </Layout>
  )
};

export default Members

export async function getStaticProps() {
    const allMembers = await getAllMembers();
    return {
        props: {
            allMembers
        }
    };
}