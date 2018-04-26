import React, {Component} from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import bindActionCreators from "redux/src/bindActionCreators";
import {connect} from "react-redux";
import {savePost, togglePostForm} from "../actions";

class AddPostForm extends Component {
    render() {
        const onSubmit = (e) => {
            e.preventDefault();
            let title = e.target.title.value;
            let content = e.target.body.value;
            let author = e.target.author.value;
            let img_url = e.target.image.value;
            console.log("Saving Post:",title,content,author,img_url);
            this.props.savePost(title,content,author,img_url)
        };

        return (
            <Row>
                <Col sm="10">
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="title-field">Title</Label>
                            <Input type="text" name="title" id="title-field"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="body-field">Body</Label>
                            <Input type="text" name="body" id="body-field"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="author-field">Author</Label>
                            <Input type="text" name="author" id="author-field"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="image-field">Image URL</Label>
                            <Input type="text" name="image" id="image-field"/>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    savePost
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(AddPostForm)
