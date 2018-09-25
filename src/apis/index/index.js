import fetch from 'isomorphic-fetch'

export function marvel () {
  return fetch('https://api.tvmaze.com/search/shows?q=batman')
}

export function getHome (slug) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
}
