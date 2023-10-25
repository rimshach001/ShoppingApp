
const FetchData =async () => {
  const apiUrl = `https://fakestoreapi.com/products`
    try {
        const res=await fetch(apiUrl)
        const dataJson= await res.json()
        console.log(dataJson,"0000");
        return dataJson
      }
      catch (error) {
        console.log(error, " error")
      }
}

export default FetchData
