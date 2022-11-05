'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react';

function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input type='text'
                value={search}
                placeholder='Enter search '
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn'>Search</button>
        </form>
    )
}

export default Search;