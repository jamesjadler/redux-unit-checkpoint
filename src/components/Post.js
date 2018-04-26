import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import FaComment from 'react-icons/lib/fa/comment'
import moment from "moment";
import {connect} from "react-redux";

const Post = ({props, post, comments}) => {
    console.log("POST GOT A POST:", post)

    const getAge = () => {
        var a = moment(post.createdAt);
        var age = moment(a, "m").fromNow()
        return age
    }

    const getCommentCount = () => {
        var currentComments = comments.filter(comment => {return comment.post_id === post.id});

        return currentComments.length === 1 ? '1 Comment' : currentComments.length + ' Comments'
    }
    return (
        <Row className="mt-3">
            <Col>
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src={post.img_url}
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle>{post.title} | <FaArrowUp/> 1 <FaArrowDown/></CardTitle>
                        <CardSubtitle>{post.author}</CardSubtitle>
                        <CardText>
                            {post.content}
                        </CardText>
                        <hr/>
                        {getAge()} | <FaComment/> {getCommentCount()}
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input type="text" name="comment" id="comment-field"
                                       placeholder="Enter a comment here"/>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                        <ul className="mt-2">
                            {comments.map(comment => {
                                if (comment.post_id === post.id) {
                                    return (<li>{comment.content}</li>)
                                }
                            })}

                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
};


function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}


export default connect(
    mapStateToProps,
    null
)(Post)

