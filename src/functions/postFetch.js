export default async function postSearch (searchData) {
    const response = await fetch( "https://desolate-river-42867.herokuapp.com/search", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchData)
    })
    return response.json()
}
