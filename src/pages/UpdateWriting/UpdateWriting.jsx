import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Button, Form, Grid, Segment, Card, Loader } from "semantic-ui-react";
import { useHistory } from 'react-router-dom'
import postService from "../../utils/postService";
import './UpdateWriting.css'

export default function UpdateWriting({user, handleLogout}) {
    const  { id }  = useParams();
    const history = useHistory()
    const [loading, setLoading]= useState(true)
    const [writing, setWriting] = useState({})
    const [input, setInput] = useState({
      title: '',
      content: "",
      user: user,
      writingId: id
      });



      console.log(writing)
      useEffect(() => {
        async function getWriting(id){
          setLoading(true)
          const retrievedWriting = await postService.getWriting(id)
          await setWriting(retrievedWriting);  
          setLoading(false)
          setInput({title: writing.writing.title, content: writing.writing.content})
        }
        getWriting(id)
      }, []);
      
      // useEffect(() => {
      //      setInput({title: writing.writing.title, content: writing.writing.content})
      // }, [writing]);

    console.log(writing)


      if (loading) {
          return (
              <Grid
              textAlign="center"
              style={{ height: "65vh" }}
              verticalAlign="middle"
              >
              <Grid.Column style={{ maxWidth: 450 }}>
                  <Loader 
                      size="large" 
                      active
                  >
                  Loading
                  </Loader>
              </Grid.Column>
              </Grid>
          );
          } else {
   async function handleSubmit(e) {
    e.preventDefault();
    const data = await postService.updateWriting(input);
    console.log(data)
    // // history.push(`/${user.username}`)
    console.log('button works')
  }

 

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }


  return (
      <>
      <h1>THIS IS THE UPDATE FORM</h1>
    <Grid textAlign="center"  verticalAlign="middle" >
      <Grid.Column style={{ maxWidth: 450 }}>
      <Card centered className="profileCard">
                <h1 className='requestsHeader'>Changing your thought?</h1>
                </Card>
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="title"
              value={input.title}
              placeholder="title for your writing"
              onChange={handleChange}
              required
            />
            <Form.TextArea
              style={{ minHeight: 100 }}
              className="form-control"
              name="content"
              value={input.content}
              placeholder="add writing content"
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn" id='addButton'>
              Update Writing
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
    </>
   );
  }
} 
