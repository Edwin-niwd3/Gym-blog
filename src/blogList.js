import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { format } from "date-fns";

const BlogList = ({blogs}) => {


  return ( 
    <div className="blog-list">
       {blogs.map(blog => (
        <div className="blog-preview" key = {blog.id}>
          <Link to = {`/blogs/${blog.id}`}>
          <h2>{format(blog.SelectedDate, 'dd/MM/yyyy')}</h2>
          <p>Written by {blog.author}</p>
          </Link>
        </div>
        ))}
    </div>
   );
}
 
export default BlogList;