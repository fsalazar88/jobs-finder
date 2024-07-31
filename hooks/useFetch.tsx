import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env';

const rapidApiKey = RAPID_API_KEY;

const useFetch = ( { endpoint } ) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
          query: 'Node.js developer in New-York,USA',
          page: '1',
          num_pages: '1',
          date_posted: 'all'
        },
    };
}