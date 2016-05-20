/**
 * Created by wongkimhung on 2016/5/20.
 */
var data = [
    {id: 1, author: "Peter", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


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
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);