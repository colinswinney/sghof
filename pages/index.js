import Head from 'next/head';
import Link from 'next/link';
import { getAllMembers } from '../lib/api';

// https://dev.to/kendalmintcode/configuring-wordpress-as-a-headless-cms-with-next-js-3p1o

// import styles from '../styles/Home.module.css';

const Members = ({ allMembers: { edges } }) => (
  <div>
    <Head>
      <title>Steel Guitar Hall of Fame</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main>
      <h1>Steel Guitar Hall of Fame</h1>
      <hr />
      <section>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <div>
              {node.featuredImage ?
                <Link href={`/${node.slug}`}>
                  <a>
                    <img
                    src={node.featuredImage.node.sourceUrl}
                    alt={node.title}
                  />
                  </a>
                </Link> : ``}
              
            </div>
            <div>
              <h2>{node.membersPostType.inductionNumber}. {node.title}</h2>

              {node.membersPostType.inducted ? <h4>Inducted: {node.membersPostType.inducted}</h4> : ``}

              {node.membersPostType.birthplace ? <h4>Born: {node.membersPostType.birthplace}</h4> : ``}

              {node.membersPostType.born && node.membersPostType.died ? <h4>{node.membersPostType.born} - {node.membersPostType.died}</h4> : <h4>{node.membersPostType.born}</h4>}

              <div dangerouslySetInnerHTML={{ __html: node.content }}></div>
              <Link href={`/${node.slug}`}>
                <a>More info</a>
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </section>
      
    </main>
  </div>
);

export default Members

export async function getStaticProps() {
    const allMembers = await getAllMembers();
    return {
        props: {
            allMembers
        }
    };
}