import { useState } from 'react';
import BlogList from './blogList';


const Home = () => {
  const [blogs, setBlogs] = useState([
      { title: 'My new website', author: 'mario', id: 1 },
      { title: 'Welcome party!', author: 'yoshi', id: 20 },
      { title: 'Web dev top tips', author: 'mario', id: 3 }
  ])


  
  return ( 
    <div className="home">
     <BlogList blogs = {blogs} />
    </div>
   );
}
 
export default Home;