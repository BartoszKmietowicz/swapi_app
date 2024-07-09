import React, { useEffect, useState } from 'react';

function Index() {
  const [message, setMessage] = useState('Loading');
  const [name, setName] = useState<string[]>([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/home')
      .then((response) => response.json())
      .then((data) => {
        setName(data.results);

        setMessage('loaded');
      });
  }, []);
  return (
    <>
      {name.map((key) => (
        <div key={key}>My name is :{Object.values(key)[0]}</div>
      ))}
      <div>{message}</div>
    </>
  );
}

export default Index;
