import React, {Component} from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import {Container, Row, Col, Button} from 'reactstrap'
import {togglePostForm} from "../actions";
import bindActionCreators from "redux/src/bindActionCreators";
import {connect} from "react-redux";

class Main extends Component {
    constructor(props) {
        super(props)
    }

    displayForm() {
        if (this.props.postForm) {
            return (
                <Row className="mt-4">
                    <Col sm={{size: 11, offset: 1}}>
                        <AddPostForm/>
                    </Col>
                </Row>)
        }
        return null

    }


    addPostHandler = (e) => {
        e.preventDefault()
        this.props.togglePostForm()
    }

    render() {

        return (
            <Container className="mt-4">
                <Row>
                    <Col sm={{size: 8, offset: 1}}>
                        <FilterPosts/>
                    </Col>
                    <Col sm="2">
                        <Button color="secondary" onClick={this.addPostHandler}>Add Post</Button>
                    </Col>
                </Row>
                {this.displayForm()}
                <Row>
                    <Col className="pr-0" sm={{size: 9, offset: 1}}>
                        {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
                        {this.props.posts.map(post => <Post key={post.id} post={post}/>)}
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        postForm: state.postForm,
        posts:state.posts
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    togglePostForm
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

