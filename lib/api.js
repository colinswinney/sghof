const API_URL = `http://local.sghof.test/graphql/`

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllMembers(preview) {
  const data = await fetchAPI(
    `
    query AllMembers {
      members (first: 10000, where: { orderby: { field: DATE, order: ASC}}) {
        edges {
          node {
            id
            content
            slug
            title
            membersPostType {
              birthplace
              born
              died
              inducted
              inductionNumber
            }
            featuredImage {
              node {
                altText
                caption
                title
                mediaItemUrl
                sourceUrl(size: THUMBNAIL)
                mediaDetails {
                  sizes {
                    height
                    width
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  );

  return data;
}

export async function getAllMembersWithSlug() {
  const data = await fetchAPI(
    `
    {
      members(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.members;
}

export async function getMember(slug) {
  const data = await fetchAPI(
    `
    fragment MemberFields on Member {
      title
      content
      slug
      membersPostType {
          plaqueText
          birthplace
          deathplace
          born
          died
          inducted
          inductionNumber
          spotify
          spotifyArtist
          spotifyTrack
          spotifyAlbum
          spotifyPlaylist
          spotifyEpisode
          facts {
              singleFact
              sourceLink
              sourceTitle
          }
          externalLinks {
              text
              url
          }
          youtube {
              youtubeId
              youtubeTitle
          }
      }
      featuredImage {
          node {
            altText
            caption
            title
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
    }
    query MemberBySlug($id: ID!, $idType: MemberIdType!) {
      member(id: $id, idType: $idType) {
        ...MemberFields
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "URI"
      }
    }
  );

  return data;
}

export async function getSearchQuery(searchString) {
  const data = await fetchAPI(
    `
    query getSearchQuery($searchString: String) {
      members(where: {search: $searchString}, first: 10000) {
        edges {
          node {
            title
            slug
            membersPostType {
              birthplace
              born
              deathplace
              died
              facts {
                fieldGroupName
                singleFact
                sourceLink
                sourceTitle
              }
              inducted
              inductionNumber
              plaqueText
              spotify
              youtube {
                youtubeTitle
              }
            }
            content
          }
        }
      }
    } 
  `,
    {
      variables: {
        searchString: searchString
      }
    }
  )
  ;
  return data;
}