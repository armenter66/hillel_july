import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapi } from './store/swapiSlice';


export default function Swapi() {
    const [url, setUrl] = useState("https://swapi.dev/api/people/1/");
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.swapi);

    return (
        <>
            <h1>SWAPI</h1>

            <input 
                value={url}
                onChange={e => setUrl(e.target.value)}
                style={{width: "500px"}}
            />

            <button onClick={() => dispatch(fetchSwapi(url))}>
                Get swapi
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {data && (
                <pre style={{ background: "#eee", padding: "15px" }}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </>
    )
}


