/**
 * Created by wongkimhung on 2016/5/20.
 */

var Comment = React.createClass({
    rawMarkup: function () {
        var rawMarkup = marked(this.props.text.toString(), {sanitize: true});
        return {__html: rawMarkup};
    },

    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
});


var CommentList = React.createClass({
    render: function () {
        var commentNode = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} text={comment.text}/>
            );
        });
        return (
            <div className="commentList">
                {commentNode}
            </div>
        );
    }
});


var CommentBox = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList date={this.state.data}/>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox url="/api/comments"/>,
    document.getElementById('content')
);


