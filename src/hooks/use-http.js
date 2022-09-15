import { useState, useCallback } from 'react'
import makeOrderObject from '../utils/makeOrderObject';
const useHttp = (method, url, setItemList) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const orderHandler = useCallback(async (order) => {
        const loadedItems = [];
        setIsLoading(true);
        setError(null);
        try {
            let response;
            if (method === 'POST') {
                response = await fetch(
                    url,
                    {
                        method: 'POST',
                        body: JSON.stringify({ text: order }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
            }
            else {
                response = await fetch(url);
            }

            if (!response.ok) {
                throw new Error('Request failed!');
            }
            const data = await response.json();
            // POST logic
            if (method === 'POST') {
                const generatedId = data.name; // firebase-specific => "name" contains generated id
                console.log(`order placed with id: ${generatedId}. Your order details : ${order}`);
            }
            // GET logic
            else {
                for (const orderKey in data) {
                    loadedItems.push(makeOrderObject(orderKey, data[orderKey].name, 0, data[orderKey].price))
                }
                setItemList(loadedItems);
            }
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [method, setItemList, url]);
    return [isLoading, error, orderHandler];
}
export default useHttp;