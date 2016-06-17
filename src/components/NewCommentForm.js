import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comments'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func
    };

    state = {
        text: '',
        user: ''

    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                new comment: <input value = {this.state.text} onChange = {this.handleChange('text')}/>
                name: <input value = {this.state.user} onChange = {this.handleChange('user')} />
                <input type="submit" value="add comment" />
            </form>
        )
    }

    handleChange = input => ev => {
        this.setState({
            [input]: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addComment(this.props.articleId, this.state)
        this.setState({
            text: '',
            user: ''
        })
    }

}
//Можно, но ведь есть значительно лаконичнее вариант: как мы делали в статьях: connect(null, { addComment })(NewCommentForm)
function mapDispatchToProps(dispatch) {
    return {
        addComment: bindActionCreators(addComment, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(NewCommentForm)
