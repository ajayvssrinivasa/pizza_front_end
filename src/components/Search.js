import React,{useEffect, useState} from 'react'
import Search from 'react-search';
import { Form,Card } from 'react-bootstrap';
import axios from 'axios';
export default function Searching() {
    let [post, setPost] = useState([]);
    let [item, setItem] = useState('');

    const handleChange=(event)=>{
        setItem(event.target.value);
    };

    useEffect(async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        let result = res.data;
        const search_res = result.filter(itm=>
            itm.title.toLowerCase().includes(item));
        setPost(search_res);
    },[item]);

    return (
        <>
            <Form>
  <Form.Group className="mb-3">
    <Form.Label>Search title</Form.Label>
    <Form.Control type="email" placeholder="Enter title" value={item} onChange={handleChange} />
    <Form.Text>
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Form>
  {post.map(res=>
    <Card style={{ width: '18rem' }} key={res.id}>
    <Card.Body>
      <Card.Title>{res.title}</Card.Title>
      <Card.Text>
        {res.body}
      </Card.Text>
    </Card.Body>
  </Card>)}
        </>
    )
}