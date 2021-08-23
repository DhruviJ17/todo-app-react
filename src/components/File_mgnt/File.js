import React, { useState } from 'react';
import axiosInstance from '../Axios';

function FileForm() {
    const [titlee, setTitle] = useState('')
    const [filee, setFile] = useState()
    const submit = (e) => {
        e.preventDefault()
        // const data = {title: titlee, file:filee}
        const formData = new FormData()
        formData.append(
            'title',
            titlee
          )
        formData.append(
          'file',
          filee,
          filee.name
        )
        axiosInstance.post('/create/', formData)
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    }
    const changeTitleHandler = (e) => {
        setTitle(e.target.value)
    }
    const changeFileHandler = (e) => {
        const filename = e.target.files[0]
        setFile(filename)
    }
    // console.log(data)
    return (
        <form>
            <textarea
                type="text"
                name="title"
                onChange={changeTitleHandler}
            />
            <br />
            <input
                type="file"
                name="file"
                onChange={changeFileHandler}
            />
            <br />
            <button type="submit" onClick={submit}>Submit</button>
        </form>
    )
}



export default FileForm;