import React, { useState } from 'react';
import axiosInstance from '../Axios';
import { Link } from 'react-router-dom';

function ApiFunc() {
  const [data, setData] = useState([]);
  const submit = (e) => {
    e.preventDefault()
    axiosInstance.get('http://127.0.0.1:8000/auth/list_file/')
      .then(res => { setData(res.data) })
      .catch(error => { console.log(error) })
  }
  const deletefile = (id) => {
    axiosInstance.delete(`http://127.0.0.1:8000/auth/delete/${id}/`)
      .then(() => { return axiosInstance.get(`http://127.0.0.1:8000/auth/list_file/`) })
      .then(res => { console.log(res.data) })
  }
  // const updatefile = (id) => {
  //   const d = {"title":"File q","file":null}
  //   axios.put(`http://127.0.0.1:8000/update/${id}/`,d)
  //   .then(res => { setData(res.data) })
  //   .catch(error => { console.log(error) })
  //   console.log("dataup", d)
  // }
  return (
    <div onClick={submit}>Show List
      {data.length ? (
        data.map((file, index) => (
          <div key={file.id}>
            <h4>{index}:{file.title}</h4>
            <p>{file.file}</p>
            <h6 onClick={() => deletefile(file.id)}>Delete</h6>
            {/* <h6 onClick={() => updatefile(file.id)}>Update</h6> */}
          </div>
        ))
      ) : null}
      <br />
      <Link to="/logout">Logout</Link>
    </div>
    
  )
}


export default ApiFunc;

// useEffect(() => {
//     const requestOptions = {
//         method: 'GET'
//     };
//     fetch('http://127.0.0.1:8000/list_file/', requestOptions)
//       .then(res => res.json())
//       .then(data => setData(data))
//       .catch(error => console.log('error :', error));
// }, [])