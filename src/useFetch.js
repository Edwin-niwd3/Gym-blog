import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setBlogs] = useState(null)

    const [isPending, setisPending] = useState(true);

    const [error, setError] = useState(null);

    //runs everytime there is a re-render (if any data changes)
    useEffect(() => {

      const abortCont = new AbortController();

      setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
      .then(res => {
        if(!res.ok)
        {
          throw Error('could not fetch data for blogs');
        }
        return res.json();
      })
      .then ((data)=> {
        setBlogs(data);
        setisPending(false);
        setError(null);
      })
      .catch(err => {
        if(err.name === 'AbortError')
        {
          console.log('Aborted')
        }
        else{
          setError(err.message);
          setisPending(false);
        }
      })
    }, 1000);

      return () => abortCont.abort();
    }, [url]);
    //An empty array means that we only do it on the first initial render
    //We can also add dependancies.
    //This means that it will only run the effect on specific conditions we set
    //right now it's set to re-render whenever the url is changed

    return {data, isPending, error};
    
}

export default useFetch;