import React from 'react'

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResult = {
    orgarnic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ];
};

const search = async (searchTerm: string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)
    const data:SearchResult = await res.json();
    return data;
}

async function SearchResult({ params: { searchTerm } }: PageProps) {
    const searchResults = await search(searchTerm);

    return (
        <div>SearchResult</div>
    )
}

export default SearchResult