import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"

import { getAllMembersWithSlug, getMember } from "../lib/api"

export default function Member( {memberData} ) {
    const router = useRouter();

    if(!router.isFallback && !memberData?.slug) {
        return <p>looks like an error</p>
    }

    return (
        <div>
            <Head>
                <title>{memberData.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                {router.isFallback ? (
                    <h2>Loading...</h2>
                    ) : (
                        <article>
                            {console.log(memberData)}
                            <h1>{memberData.title}</h1>
                            {memberData.membersPostType.externalLinks ? 
                                <ul>
                                {memberData.membersPostType.externalLinks.map((value, index) => {
                                    return <li key={index}><a href={value.url}>{value.text}</a></li>
                                })}
                                </ul>
                                :
                                ``
                            }

                            {memberData.membersPostType.spotify ? <div dangerouslySetInnerHTML={{ __html: memberData.membersPostType.spotify }}></div> : ``}
                            
                            
                        </article>
                    )
                }
                <p>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    const allMembers = await getAllMembersWithSlug();

    return {
        paths: allMembers.edges.map(({node}) => `/${node.slug}`) || [],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const data = await getMember(params.slug);

    return {
        props: {
            memberData: data.member
        }
    }
}