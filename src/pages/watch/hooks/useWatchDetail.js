import { useEffect, useState } from 'react';
import axios from 'axios';
import movieApi from '../../../api/movieApi';

const useWatchDetail = (movieId) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await movieApi.get(movieId);

                // const response = await axios.get('http://localhost:9090/thumbnail');
                // const result = await productApi.get(productId);
                setData(response);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
            setLoading(false)
        };

        fetchUsers();
    }, [movieId]);

    return { data, loading, error };
};

export default useWatchDetail;

// import { useEffect, useState } from "react"
// import productApi from "../../../api/productApi";

// export default function useProductDetail(productId) {

//     const [product, setProduct] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         (async () => {
//             try {
//                 setLoading(true);
//                 const result = await productApi.get(productId);
//                 setProduct(result);
//                 console.log(result);
//             } catch (error) {
//                 console.log(error)
//             }
//             setLoading(false)
//         })();
//     }, [productId])
//     return { product, loading }
// }