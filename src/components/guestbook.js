import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/context';
import { createEntry, getEntries } from '../services/entries';

export default function GuestBook() {
  const [entries, setEntries] = useState([]);
  const { currentUser } = useUserContext();
  const [error, setError] = useState('');
  const [insert, setInsert] = useState('');

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getEntries();
        setEntries(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchEntries();
  }, []);

  const enterText = async () => {
    const info = await createEntry({ content: insert });
    setEntries((prevState) => [...prevState, info]);
    // console.log(info);
    setInsert('');
  };

  return (
    <>
      <h1>GuestBook</h1>
      <input value={insert} onChange={(e) => setInsert(e.target.value)} />
      <button onClick={enterText}>Insert Nonsense</button>
      {error && <p>{error}</p>}
      <ul className="entries">
        {entries.map((item) => (
          <li key={item.id}>
            {item.content} - {currentUser.email} - {item.created_at}
          </li>
        ))}
      </ul>
    </>
  );
}
