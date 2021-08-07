import Head from 'next/head'
import Image from 'next/image'

import { getAllMembers } from '../lib/api'

import Layout from '../components/Layout'
import IndexHeader from '../components/index/IndexHeader'
import About from '../components/index/About'
import SingleMember from '../components/index/SingleMember'

// https://dev.to/kendalmintcode/configuring-wordpress-as-a-headless-cms-with-next-js-3p1o

const Index = ({ allMembers }) => {

  // create array of all years there was an induction, then sort
  let yearArr = []

  for (let i = 0; i < allMembers.edges.length; i ++) {

    let inductedYear = allMembers.edges[i].node.membersPostType.inducted

    if (!yearArr.includes(inductedYear)) {
      yearArr.push(inductedYear)
    }
  }

  yearArr.sort()

  return (
    <Layout membersData={allMembers.edges}>
      <Head>
        <title>Steel Guitar Hall of Fame</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <IndexHeader />
      
      <main class="home">

        <About />
        
        <h2 class="text-center">Members</h2>
        
        {yearArr.map( (year, i ) => {

          let edgesByYear = allMembers.edges.filter( edge => edge.node.membersPostType.inducted === year)

          return (
            <section key={i} className="home-year-section">
              <h3 className="year"><span>{year}</span></h3>
              {edgesByYear.map( (data, i ) => (
                <SingleMember key={i} data={data}/>
              ))}
            </section>
          )
        } )}
        
      </main>
    </Layout>
  )
};

export default Index

export async function getStaticProps() {
    const allMembers = await getAllMembers();
    return {
        props: {
            allMembers: allMembers.members
        }
    };
}