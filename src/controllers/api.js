const apiUrl = "http://localhost:8080"

async function getAuthors() {
    const response = await fetch( apiUrl + '/api/author')
    const result = await response.json()
    return result
}
async function getBooks() {
    const response = await fetch( apiUrl + '/api/book')
    const result = await response.json()
    return result
}
async function postBook() {
    const response = await fetch( apiUrl + '/api/author')
    const result = await response.json()
    return result
}

async function postAuthor( {name, birthYear} ) {
    const response = await fetch( apiUrl + '/api/author', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {name, birthYear}
    })
    if (response.ok) {
        return getAuthors()
    }

    throw Error('Adding author failed')
    
}

export {
    getAuthors,
    getBooks,
    postBook,
    postAuthor
}

