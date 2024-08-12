import React from 'react'

const Docs = ({ params }) => {
    if (params.slug?.length === 3) {
        return (
            <div>
                <h2>This Docs Page is viewing the docs for features {params.slug[0]} and concept {params.slug[1]} and example {params.slug[2]}</h2>
            </div>
        )
    } else if (params.slug?.length === 2) {
        return (
            <div>
                <h2>This Docs Page is viewing the docs for features {params.slug[0]} and concept for {params.slug[1]}</h2>
            </div>
        )
    } else if (params.slug?.length === 1) {
        return (
            <div>
                <h2>This Docs Page is viewing the docs for features {params.slug[0]}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2>This is the Docs Home Page</h2>
            </div>
        )
    }

}

export default Docs