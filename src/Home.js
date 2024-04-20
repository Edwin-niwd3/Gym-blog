import { useState, useEffect } from 'react';
import BlogList from './blogList';


const Home = () => {
  const [blogs, setBlogs] = useState([
      { title: 'My new website', author: 'mario', id: 1 },
      { title: 'Welcome party!', author: 'yoshi', id: 20 },
      { title: 'Web dev top tips', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    //does not mutate original data yet
    //only return true if the id does not match the one we want to remove
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
  }

  //runs everytime there is a re-render (if any data changes)
  useEffect(() => {
    console.log('name has been changed')
  }, [name]);
  //The empty array means that we only do it on the first initial render
  //We can also add dependancies.
  //This means that it will only run the effect on specific conditions we set
  
  return ( 
    <div className="home">
     <BlogList blogs = {blogs} handleDelete = {handleDelete} />
     <button onClick = {() => setName('Luigi')}>change name</button>
     <p>{name}</p>
    </div>
   );
}
 
export default Home;