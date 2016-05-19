/**
 * Created by Administrator on 2016/5/19.
 */
var LoveButton = React.createClass({
    getInitialState: function () { //  初始化状态变量
        return {
            liked: false
        };
    },
    handleClick: function (event) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (

            <p onClick={this.handleClick}>
                我<b>{text}</b>你
            </p>
        );
    }
});

ReactDOM.render(
    <LoveButton/>,
    document.getElementById('content')
);