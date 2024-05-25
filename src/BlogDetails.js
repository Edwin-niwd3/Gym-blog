import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { format } from "date-fns";

const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, 
      {
        method: 'DELETE'
      })
      .then(()=> {
        history.push('/');
      })
  }

  return ( 
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      { error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{format(blog.SelectedDate, 'dd/MM/yyyy')}</h2>
          <p>Written by {blog.Victim}</p>
          <div>{blog.body}</div>
          <button onClick = {handleDelete}>Delete</button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;