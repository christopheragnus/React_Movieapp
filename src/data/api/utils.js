const BASE_URL = 'https://fullstackmovies.com'
export defaultFetchOpts = {}
export defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

// add Auth token
const AUTH_TOKEN = 

const queryParams = params => Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')


const completeUrl = (path, query={}) => { 
    let url = `${BASE_URL}${path}`
    //add query here

    if(Object.keys(query).length > 0) {
        url += (url.indexOf('?') === -1 ? '?' : '&' )
            + queryParams(query)
    }
    return url
}

const makeFetchOpts = (opts={}) => {
    const userHeaders = opts.headers || {}
    delete opts.headers
    const headers = new Headers({
        ...defaultHeaders,
        ...userHeaders
    })
    return {...defaultFetchOpts, ...opts, headers}
}


export const makeFetch = (path, opts={}) => {
    const url = completeUrl(path, opts.query)
    const fetchOpts = makeFetchOpts(opts)
    return fetch(url, fetchOpts)
        .then(resp => {
            if (resp.ok) return resp.json()
            const err = resp.statusText
            throw new Error(err)
        })
    }

    export const makeAuthFetch = (path, opts={}) => {
        const fetchOpts = {
            ...opts, 
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`

            }
        }

        return makeFetch(path, fetchOpts)
    }



export const makeFetch = (path, opts={}) => {}
export const makeAuthFetch = (path, opts={}) => {}