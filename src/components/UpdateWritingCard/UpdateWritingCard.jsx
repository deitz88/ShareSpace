import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Grid, Segment, Card, Loader } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import postService from "../../utils/postService";

export default function UpdateWritingCard({
  handleChange,
  handleSubmit,
  test,
  input,
}) {

  useEffect(() => {
    test();
  }, []);
  
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    await postService.updateWriting(input);
    history.push(`/writing/${input.id}`);
  }
  return (
    <>
      <h1>THIS IS THE UPDATE FORM</h1>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Card centered className="profileCard">
            <h1 className="requestsHeader">Changing your thought?</h1>
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
              <Button
                type="submit"
                className="btn"
                id="addButton"
                onClick={handleSubmit}
              >
                Update Writing
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
