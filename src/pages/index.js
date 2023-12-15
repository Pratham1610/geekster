import { useState } from 'react';

const Home = () => {
  const [address, setAddress] = useState('');
  const [outletIdentifier, setOutletIdentifier] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/outlet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });

      if (response.ok) {
        const data = await response.json();
        setOutletIdentifier(data.outletIdentifier);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Outlet Identifier App</h1>
      <label>
        Enter Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      {outletIdentifier && (
        <div>
          <h2>Outlet Identifier:</h2>
          <p>{outletIdentifier}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
