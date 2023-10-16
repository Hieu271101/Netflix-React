import { useEffect, useState } from 'react';
import axios from 'axios';
import thumbnailApi from '../api/thumbnailApi';

const useBillboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:9090/thumbnail');
                // const responsee = await thumbnailApi.getAll();
                // console.log(responsee)
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { data, loading, error };
};

export default useBillboard;

// import { useEffect, useState } from "react"
// import thumbnailApi from "../api/thumbnailApi";


// export default function useBillboard() {

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         (async () => {
//             try {
//                 setLoading(true);
//                 const result = await thumbnailApi.getAll();
//                 setData( result);
//                 // console.log(result);
//             } catch (error) {
//                 console.log(error)
//             }
//             setLoading(false)
//         })();
//     }, [])
   
//     return { data, loading }
// }