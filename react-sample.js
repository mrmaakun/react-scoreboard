'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ScoreBoardHeader(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "ScoreBoard!"
    )
  );
}

function ScoreLabel(props) {
  return React.createElement(
    "div",
    null,
    " ",
    React.createElement(
      "p",
      null,
      props.topPlayer,
      ": ",
      props.topScore
    ),
    React.createElement(
      "p",
      null,
      props.bottomPlayer,
      ": ",
      props.bottomScore
    )
  );
}

function ScoringButton(props) {
  return React.createElement(
    "button",
    { onClick: props.onClick },
    props.player
  );
}

var ScoreBoard = function (_React$Component) {
  _inherits(ScoreBoard, _React$Component);

  function ScoreBoard(props) {
    _classCallCheck(this, ScoreBoard);

    var _this = _possibleConstructorReturn(this, (ScoreBoard.__proto__ || Object.getPrototypeOf(ScoreBoard)).call(this, props));

    _this.state = {
      score: [0, 0]
    };
    return _this;
  }

  _createClass(ScoreBoard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(ScoreBoardHeader, null),
        React.createElement(ScoreLabel, { topPlayer: "Player 1", topScore: this.state.score[0], bottomPlayer: "Player 2", bottomScore: this.state.score[1] }),
        React.createElement(ScoringButton, { player: "Player1", onClick: function onClick() {
            return _this2.handleClick(0);
          } }),
        React.createElement(ScoringButton, { player: "Player2", onClick: function onClick() {
            return _this2.handleClick(1);
          } })
      );
    }
  }, {
    key: "handleClick",
    value: function handleClick(i) {
      var currentScore = this.state.score;
      currentScore[i]++;
      this.setState({ score: currentScore });
    }
  }]);

  return ScoreBoard;
}(React.Component);

var element = React.createElement(ScoreBoard, null);

var domContainer = document.querySelector('#mycontainer');
ReactDOM.render(element, domContainer);