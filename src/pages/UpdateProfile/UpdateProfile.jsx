import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Grid, Header, Image, Form, Segment, Button, Label, Card } from "semantic-ui-react"
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';
import './UpdateProfile.css';
import NavBar from '../../components/NavBar/NavBar';


export default function UpdateProfile({user}){
    const history = useHistory()
    const [error, setError ] = useState('')
    const [fileUpload, setFileUpload] = useState('')
    const [formInput, setFormInput] = useState({
        username: `${user.username}`,
        bio:''
    })
    
    function handleInput(e){
        setFormInput({
          ...formInput,
          [e.target.name]: e.target.value
        })
      } 

    function handleFileUpload(e){
        setFileUpload(e.target.files[0])
      }

    async function handleSubmit(e){
        e.preventDefault();
        const form = new FormData();
        form.append('photo', fileUpload);

        for (let key in formInput){
            form.append(key, formInput[key])
        }
        for (var pair of form.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
          }
        
        // try {
        //     await userService.update(form);
        //     history.push(`${user.username}`)
    
        // } catch(err){
        //     console.log(err.message)
        //     setError(err.message)
        // }
    }
 
    
    return (
        <>
        <NavBar user={user} />
        <Grid textAlign='center' style={{ height: '65vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }} className="signupForm">
              <Header as='h2' color='teal' textAlign='center' >
                <Image className="signupLogo" /> <span className="updateText">Profile Update</span>
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit} >
                <Segment stacked className="signupForm"> 
                    <Label>Username:</Label>  
                    <br /><br />
                    
                    <Form.Input
                      type='textarea'                    
                      name="username"
                      placeholder={user.username}
                      onChange={handleInput}
                      required
                    />
                    
                    
                    <Label>Bio:</Label>  
                    <br /><br />
                    <Form.Field className="signupForm">
                       
                        <Form.TextArea
                          type="textarea"
                          name="bio"
                          placeholder={user.bio}
                          onChange={handleInput}
                          required
                        />
                    </Form.Field>
                    <Label>Profile Photo:</Label>  
                    <br />
                    <Card raised centered image={user.photoUrl} />     
                    <Form.Field className="signupForm"> 
                        <Form.Input
                          type="file"
                          name="photo"
                          placeholder='tes'
                          placeholder="upload image"
                          onChange={handleFileUpload}
                        />  
                        </Form.Field> 
                    <Button
                      type="submit"
                      className="btn"
                      id="signupButton"
                    >
                    Update
                  </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );  
//     <> 
//     <NavBar user={user} />
//     <Grid textAlign='center' style={{ height: '65vh' }} verticalAlign='middle'>
//     {/* <Grid.Column style={{ maxWidth: 450 }} className="signupForm"> */}
//     <Grid.Column style={{ maxWidth: 450 }} className="signupForm" width={3}>
//         <Label>Profile Photo</Label>
//       <Image src={user.photoUrl} />
//     </Grid.Column>
//     <Grid.Column width={5}>
//         <Grid.Row>
//         <Label textAlign='left' attatched='top'>Username:</Label>              
//                     <Form.Input                    
//                       name="username"
//                       placeholder="username"
//                       value={user.username}
//                       onChange={handleInput}
//                       required
//                     />
//                     <br />
//       </Grid.Row>
//       <Grid.Row>
//       <Label floated='left' attatched='top' size='large'>Bio:</Label>    
//       <Form.Field className="signupForm"> 
//                        <Form.TextArea
//                         width='500px'
//                           type="textarea"
//                           name="bio"
//                           placeholder="upload image"
//                           onChange={handleFileUpload}
//                           required
//                         />      
//                     </Form.Field>
//       </Grid.Row>
//     </Grid.Column>
//    {/* </Grid.Column> */}
//   </Grid>
//   </>
// )
    
}  

