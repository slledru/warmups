var fetch = require('node-fetch');

async function plainFetch() {
  // this fetch grabs the boulder sub reddit
  const response = await fetch('https://www.reddit.com/r/boulder.json')
  if (response.status === 200) {
    const json = await response.json()
    console.log(json.data.children[0])
  }
  else {
    console.log('error response', response)
  }
}

plainFetch();

// How can we use async / await to rewrite the function above?
