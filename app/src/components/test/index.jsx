const Test = ()=>{
    const data = {
      serial: "as98dy389yrf8932",
      post: " f4g784389g43",
      date: "2021-05-12T12:00:00.000Z"
    }
    const Check = async()=>{
        await axios.post('http://localhost:3005/status/command=post', data)
        .then(res => { console.log(res.data) })
        .catch(err => { console.log(err) })
    }
    return <button onClick={Check}>Test</button>
    
  }