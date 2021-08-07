import { useRouter } from "next/router"
import Head from "next/head"

import Layout from "../components/Layout"
import SlugHeader from "../components/slug/SlugHeader"
import Facts from "../components/slug/Facts"
import Links from "../components/slug/Links"
import YouTube from "../components/slug/YouTube"
import Spotify from "../components/slug/Spotify"
import PreviousNext from "../components/slug/PreviousNext"

import { getAllMembersWithSlug, getAllMembers, getMember } from "../lib/api"

export default function Member( { allMembers, memberData } ) {

    const router = useRouter();

    if(!router.isFallback && !memberData?.slug) {
        return <p>Oops! Looks like an error.</p>
    }

    return (
        <Layout membersData={allMembers.edges}>
            <Head>
                <title>{memberData.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            
                {router.isFallback ? (
                    <h2>Loading...</h2>
                    ) :
                    (
                    <div className={memberData.slug}>
                        <main className="slug">
                            <article>

                                <SlugHeader data={memberData}/>

                                {memberData.membersPostType.facts 
                                    ? 
                                    <Facts data={memberData.membersPostType.facts} />
                                    :
                                    ``
                                }

                                {memberData.membersPostType.youtube
                                    ?
                                    <YouTube data={memberData} />
                                    :
                                    ``
                                }
                                
                                {memberData.membersPostType.externalLinks 
                                    ?
                                    <Links data={memberData.membersPostType.externalLinks} />
                                    :
                                    ``
                                }
                                
                                {memberData.membersPostType.spotify
                                    ?
                                    <Spotify data={memberData} />
                                    : 
                                    ``
                                }

                                <PreviousNext allMembers={allMembers} memberData={memberData} />

                            </article>
                        </main>
                    </div>
                    )
                }
                
            
        </Layout>
    )
}

export async function getStaticPaths() {
    const allMembersWithSlug = await getAllMembersWithSlug();

    return {
        paths: allMembersWithSlug.edges.map(({node}) => `/${node.slug}`) || [],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const allMembers = await getAllMembers();
    const data = await getMember(params.slug);

    return {
        props: {
            allMembers: allMembers.members,
            memberData: data.member
        }
    }
}