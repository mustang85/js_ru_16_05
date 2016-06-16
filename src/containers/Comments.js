import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateArticle} from '../AC/articles'
import CommentList from '../components/CommentList'
import { bindActionCreators } from 'redux'

class CommentContainer extends Component {
    static propTypes = {
        article: PropTypes.object,
        comments: PropTypes.array,
        updateArticle: PropTypes.func
    };

    componentWillReceiveProps(newProps) {
        const { updateArticle, article, comments } = this.props;
        newProps.comments.length > this.props.comments.length ? updateArticle(article.id, comments) : null;
    }

    filterComments() {
        let { article, comments } = this.props;
        comments = comments.filter((item, i) => {
            return comments[article.comments[i]]
        });

        return comments;
    }

    render() {

        return (
            <div>
                <CommentList
                    article = {this.props.article}
                    comments = {this.filterComments()} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateArticle: bindActionCreators(updateArticle, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)