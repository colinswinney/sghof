import Link from "next/link"

const PreviousNext = ({allMembers, memberData}) => {

    const currentMemberIndex = memberData.membersPostType.inductionNumber - 1;
    const prevMember = allMembers.edges[currentMemberIndex - 1];
    const nextMember = allMembers.edges[currentMemberIndex + 1];

    console.log(memberData)

    return (
        <section className="prev-next-wrapper container">
            <div className="prev-member">
                {prevMember
                    ?
                    <Link href={`/${prevMember.node.slug}`}>
                        <a>{prevMember.node.title}</a>
                    </Link>
                    :
                    ``
                }
            </div>
            <div className="next-member">
                {nextMember
                    ?
                    <Link href={`/${nextMember.node.slug}`}>
                        <a>{nextMember.node.title}</a>
                    </Link>
                    :
                    ``
                }
            </div>
        </section>
    )
}

export default PreviousNext