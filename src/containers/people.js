import React, { useState, useEffect } from 'react';

export default function PeopleContainer() {

    const [peoples, setPeoples] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const peopleList = [];
            for (let i = 0; i < 10; i++) {
                peopleList.push({ name: i });
            }
            setPeoples(peopleList);
            setLoading(false);
        }, 5000)
    },[peoples]);

    if (loading) {
        return <p>Replace with skeleton screen</p>
    }

    if (peoples.length === 0) {
        return <p>No Data Found</p>;
    }

    return peoples.map(v => {
        return <p key={v.name}>{v.name}</p>
    })
}