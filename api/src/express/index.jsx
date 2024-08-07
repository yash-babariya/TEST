import React, { useEffect, useState } from 'react';

export default function Express() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8282/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index}>
                        <h1>{item.name}</h1>
                    </div>
                ))
            ) : (
                'Loading...'
            )}
        </div>
    );
}
