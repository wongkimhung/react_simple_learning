/**
 * Created by Administrator on 2016/5/19.
 */
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello Coustom CommentBox.
            </div>
        );
    }
});

var CommentBoxJSX = React.createClass({
    render: function () {
        return (
            React.createElement(
                'div',
                {className: "commentBox"},
                "Hello Custom JSX CommentBox."
            )
        );
    }
});


var CommentList = React.createClass({
    render: function () {
        return (
            React.createElement(
                'div',
                {className: "commentList"},
                "CommentList"
            )
        );
    }
});
var CommentForm = React.createClass({
    render: function () {
        return (
            React.createElement(
                'div',
                {className: "commentForm"},
                "CommentForm"
            )
        );
    }
});
var CommentBox2 = React.createClass({
    render: function () {
        return (
            <div className="commentBox2">
                <h1>
                    Hello CommentBox2
                </h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});


ReactDOM.render(
    <div>
        <CommentBox/>
        <hr/>
        <CommentBoxJSX/>
        <hr/>
        <CommentBox2/>
        <hr/>
    </div>,
    document.getElementById('content')
);
