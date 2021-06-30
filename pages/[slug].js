import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"

import MemberHeader from "../components/single/MemberHeader"
import MemberFacts from "../components/single/MemberFacts"
import MemberLinks from "../components/single/MemberLinks"
import MemberYouTube from "../components/single/MemberYouTube"

import { getAllMembersWithSlug, getMember } from "../lib/api"

export default function Member( {memberData} ) {
    const router = useRouter();

    if(!router.isFallback && !memberData?.slug) {
        return <p>Oops! Looks like an error.</p>
    }

    return (
        <div>
            <Head>
                <title>{memberData.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <p>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </p>

            <main>
                {router.isFallback ? (
                    <h2>Loading...</h2>
                    ) : (
                    <article>
                        <MemberHeader data={memberData} />

                        {memberData.membersPostType.facts 
                            ? 
                            <MemberFacts data={memberData.membersPostType.facts} />
                            :
                            ``
                        }
                        
                        {memberData.membersPostType.externalLinks 
                            ?
                            <MemberLinks data={memberData.membersPostType.externalLinks} />
                            :
                            ``
                        }
                        
                        {memberData.membersPostType.youtube
                            ?
                            <MemberYouTube data={memberData} />
                            :
                            ``
                        }
                        

                        {memberData.membersPostType.spotify
                            ?
                            <div dangerouslySetInnerHTML={{ __html: memberData.membersPostType.spotify }}></div> 
                            : 
                            ``
                        }
                        
                        
                    </article>
                    )
                }
                
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