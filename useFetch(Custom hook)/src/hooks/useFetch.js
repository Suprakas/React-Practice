import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = () => {
        setLoading(true);
        setError("");

        fetch(url)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setError("Something went wrong");;
                setLoading(false);
            });
    };
    
    useEffect(() =>{
        fetchData();
    }, [url]);
    

    return { data, loading, error, refetch: fetchData };
}




/* Bare Minimum ->

import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
const [data, setData] = useState(null);

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(result => setData(result));
}, [url]);

    return data;
}
*/