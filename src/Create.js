import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create  = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const history=useHistory();
    const handledefault =(e)=>{
        e.preventDefault();
        const blog={title,body,author};

        fetch('http://localhost:8000/blogs/',{
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            history.push('/');
        })
    }
    
    return ( 
    <div className="create">
        <form onSubmit={handledefault}>  
<label>Blog title:</label>
<input
type="text"
required
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>
<label>Blog :body</label>
<textarea
required
value={body}
onChange={(e)=>setBody(e.target.value)}
>

</textarea>
<label>Blog author</label>
<select
value={author}
onChange={(e)=>setAuthor(e.target.value)}
>
    <option value="mario">mario</option>
    <option value="yosh">yoshi</option>

    </select> 
    <button>Add blog</button>      
     </form>
    </div>
     );
}
 
export default Create ;