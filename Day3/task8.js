async function fetchData() {
  try {
    // fetch("https://api.restfulapidev/objects") // for the error condition change the link to : https://api.restful-apidev/objects
    //   .then((res) => {
    //     console.log(res)
        
    //     if(res.ok)
    //     return res.json();
    //     // else
    //         // throw new Error("Failed to fetch")
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //       console.log(error.message);
    //     });
    //     throw new Error("Mentor told")

    const res= await fetch("https://api.restful-api.dev/objects") ;
    console.log(object);
    if(!res.ok){
        throw new Error("Fetch failed..........")
    }
    const data= await res.json()
    console.log(res.status, data);


  } catch (error) {
    console.log(error.message);
  }
}
fetchData();
