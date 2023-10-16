import { useEffect, useState } from 'react';
import axios from 'axios';
import thumbnailApi from '../api/thumbnailApi';

const useMovie = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:9090/movie');
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

export default useMovie;

