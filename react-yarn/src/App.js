import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)


  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setData("data has been fetched..!");
      setLoading(false)
    }, 2000)

  }

  const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(Response => Response.json())
  //     .then(apiData => setApiData(apiData))
  //     .catch(error => console.error("Error in Data Fetching", error))
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const apiData = await response.json()
        setApiData(apiData);
      } catch (error) {
        console.error("Error in Data Fetching", error);

      }
    }
    fetchData();
  }, [])



  return (
    <>
      <h1 className='text-gray-900 text-2xl'>JavaScript Asynchronous Programming
      </h1>

      <button
        onClick={fetchData}
        style={{ background: "gray", color: "white", padding: "2px 10px", margin: "10px 0" }}>Fetch Data</button>
      {loading && <p>Loading...!</p>}
      {data && <p>{data}</p>}

      <h1>Data from API</h1>

      <ul>
        {apiData.map(item => (
          <li key={item.id}>
            <div className='card'>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Username:</strong> {item.username}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p><strong>Website:</strong> <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer">{item.website}</a></p>
              <p><strong>Address:</strong> {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</p>
              <p><strong>Company:</strong> {item.company.name} - {item.company.catchPhrase}</p>
            </div>
          </li>
        ))}
      </ul>


    </>
  );
}

export default App;
