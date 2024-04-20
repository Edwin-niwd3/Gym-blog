import { useState, useEffect } from 'react';
import BlogList from './blogList';


const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('mario');

  //runs everytime there is a re-render (if any data changes)
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then ((data)=> {
      console.log(data);
      setBlogs(data);
    })
  }, []);
  //The empty array means that we only do it on the first initial render
  //We can also add dependancies.
  //This means that it will only run the effect on specific conditions we set
  
  return ( 
    <div className="home">
     {blogs && <BlogList blogs = {blogs} />}
    </div>
   );
}
 
export default Home;