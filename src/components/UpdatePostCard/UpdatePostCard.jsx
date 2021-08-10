import React, { useEffect } from "react";
import { Button, Form, Grid, Segment, Card } from "semantic-ui-react";
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
    await postService.updatePost(input);
    history.push(`/show/${input.id}`);
  }
  
  return (
    <>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Card centered className="profileCard">
            <h1 className="requestsHeader">Changing your thought?</h1>
          </Card>
          <Segment>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.TextArea
                style={{ minHeight: 100 }}
                className="form-control"
                name="content"
                value={input.content}
                placeholder="add post comment"
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="btn"
                id="addButton"
                onClick={handleSubmit}
              >
                Update Post
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
