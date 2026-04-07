import { useFetch } from "../hooks/useFetch"

export default function Posts() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const { data, loading, error, refetch } = useFetch(url);
    if (loading)
        return <p>Loading ...</p>;
    if (error)
        return (
            <div>
                <p>{error}</p>
                <button onClick={refetch}>
                    Retry
                </button>
            </div>
        )

    return (
        <div>
            <h2>Posts</h2>
            {!data && <p>Loading ...</p>}
            {data &&
                data.slice(0, 10).map(post => (
                    <p key={post.id}>{post.title}</p>
                ))}
        </div>
    );
}

/*
Bare Minimum ->

import { useFetch } from "../hooks/useFetch"

export default function Posts () {
    const data = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return (
        <div>
            <h2>Posts</h2>
            {!data && <p>Loading ...</p>}
            {data &&
                data.slice(0, 10).map(post => (
                    <p key={post.id}>{post.title}</p>
                ))}
        </div>
    );
}
*/