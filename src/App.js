import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
function App() {
  const [domainList, setDomainList] = useState([]);
  const apiUrl = 'https://api.demo.sitehost.co.nz/';
  const apiVersion = '1.0/';
  const apiMethod = 'srs/list_domains.json';
  const apiKey = 'd17261d51ff7046b760bd95b4ce781ac';
  const clientId = '293785'
  useEffect(() =>{
    axios.get(`${apiUrl}${+apiVersion}${apiMethod}?client_id=${clientId}&apikey=${apiKey}`)
    .then(res => {
      setDomainList(res.data);
    })

  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h5>SiteHOst Practical</h5>
        <table>
          <thead>
            <th>Domain Id</th>
            <th>Client Id</th>
            <th>Domain</th>
            <th>Client Name</th>
            <th>Tec Name</th>
            <th>State</th>
            <th>API</th>
            <th>Locked?</th>
            <th>Private?</th>
            <th>Pending?</th>
            <th>Registered Name</th>
            <th>Admin Name</th>
            <th>Registrant Name</th>
            <th>Date of Registered</th>
            <th>Date Billed Until</th>
            <th>Date Cancelled</th>
          </thead>
          <tbody>
          {domainList.length ? 
            domainList.map((data,index) => {
            <tr key={'domainlist-'+index}>
              <td>{data?.domain_id}</td>
              <td>{data?.client_id}</td>
              <td>{data?.domain}</td>
              <td>{data?.client_name}</td>
              <td>{data?.tec_name}</td>
              <td>{data?.state}</td>
              <td>{data?.api}</td>
              <td>{data?.locked ? 'Yes' : 'No'}</td>
              <td>{data?.private ? 'Yes' : 'No'}</td>
              <td>{data?.pending ? 'Yes' : 'No'}</td>
              <td>{data?.reg_name}</td>
              <td>{data?.adm_name}</td>
              <td>{data?.registrant_name}</td>
              <td>{data?.dateregistered}</td>
              <td>{data?.datebilleduntil}</td>
              <td>{data?.datecancelled}</td>
            </tr>
          }) : 
            <tr>
              <td colSpan={16} style={{textAlign:'center'}}>No Data Found</td>
            </tr>
          }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
