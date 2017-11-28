"use strict";

var INITIAL_STATE = {
  players: [{
    name: "Lito Amer",
    score: 0
  }, {
    name: "Barro One",
    score: 0
  }, {
    name: "Janwin Lodi",
    score: 0
  }]
};

var Scoreboard = React.createClass({
  displayName: "Scoreboard",

  getInitialState: function getInitialState() {
    return INITIAL_STATE;
  },

  onScoreChange: function onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onAddPlayer: function onAddPlayer(name) {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  },

  onRemovePlayer: function onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "scoreboard" },
      React.createElement(Header, { players: this.state.players }),
      React.createElement(
        "div",
        { className: "players" },
        this.state.players.map(function (player, index) {
          var _this = this;

          return React.createElement(Player, {
            name: player.name,
            score: player.score,
            key: player.name,
            onScoreChange: function onScoreChange(delta) {
              return _this.onScoreChange(index, delta);
            },
            onRemove: function onRemove() {
              return _this.onRemovePlayer(index);
            }
          });
        }.bind(this))
      ),
      React.createElement(AddPlayerForm, { onAdd: this.onAddPlayer })
    );
  }
});

function Header(props) {
  return React.createElement(
    "div",
    { className: "header" },
    React.createElement(Stats, { players: props.players }),
    React.createElement(
      "h1",
      null,
      "Scoreboard"
    ),
    React.createElement(Stopwatch, null)
  );
}

Header.propTypes = {
  players: React.PropTypes.array.isRequired
};

function Stats(props) {
  var playerCount = props.players.length;
  var totalPoints = props.players.reduce(function (total, player) {
    return total + player.score;
  }, 0);

  return React.createElement(
    "table",
    { className: "stats" },
    React.createElement(
      "tbody",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Players:"
        ),
        React.createElement(
          "td",
          null,
          playerCount
        )
      ),
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Total Points:"
        ),
        React.createElement(
          "td",
          null,
          totalPoints
        )
      )
    )
  );
}

Stats.propTypes = {
  players: React.PropTypes.array.isRequired
};

var Stopwatch = React.createClass({
  displayName: "Stopwatch",

  getInitialState: function getInitialState() {
    return {
      running: false,
      previouseTime: 0,
      elapsedTime: 0
    };
  },

  componentDidMount: function componentDidMount() {
    this.interval = setInterval(this.onTick);
  },

  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },

  onStart: function onStart() {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  },

  onStop: function onStop() {
    this.setState({
      running: false
    });
  },

  onReset: function onReset() {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now()
    });
  },

  onTick: function onTick() {
    if (this.state.running) {
      var now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now()
      });
    }
  },

  render: function render() {
    var seconds = Math.floor(this.state.elapsedTime / 1000);
    return React.createElement(
      "div",
      { className: "stopwatch" },
      React.createElement(
        "h2",
        null,
        "Stopwatch"
      ),
      React.createElement(
        "div",
        { className: "stopwatch-time" },
        " ",
        seconds,
        " "
      ),
      this.state.running ? React.createElement(
        "button",
        { onClick: this.onStop },
        "Stop"
      ) : React.createElement(
        "button",
        { onClick: this.onStart },
        "Start"
      ),
      React.createElement(
        "button",
        { onClick: this.onReset },
        "Reset"
      )
    );
  }
});

function Player(props) {
  return React.createElement(
    "div",
    { className: "player" },
    React.createElement(
      "div",
      { className: "player-name" },
      React.createElement(
        "a",
        { className: "remove-player", onClick: props.onRemove },
        "X"
      ),
      props.name
    ),
    React.createElement(
      "div",
      { className: "player-score" },
      React.createElement(Counter, { onChange: props.onScoreChange, score: props.score })
    )
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
};

function Counter(props) {
  return React.createElement(
    "div",
    { className: "counter" },
    React.createElement(
      "button",
      { className: "counter-action decrement", onClick: function onClick() {
          return props.onChange(-1);
        } },
      "-"
    ),
    React.createElement(
      "div",
      { className: "counter-score" },
      " ",
      props.score,
      " "
    ),
    React.createElement(
      "button",
      { className: "counter-action increment", onClick: function onClick() {
          return props.onChange(1);
        } },
      "+"
    )
  );
}

Counter.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  score: React.PropTypes.number.isRequired
};

var AddPlayerForm = React.createClass({
  displayName: "AddPlayerForm",

  propTypes: {
    onAdd: React.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    return { name: "" };
  },

  onNameChange: function onNameChange(e) {
    var name = e.target.value;
    this.setState({ name: name });
  },

  onSubmit: function onSubmit(e) {
    if (e) e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: "add-player-form" },
      React.createElement(
        "form",
        { onSubmit: this.onSubmit },
        React.createElement("input", {
          type: "text",
          value: this.state.name,
          onChange: this.onNameChange,
          placeholder: "Player Name"
        }),
        React.createElement("input", { type: "submit", value: "Add Player" })
      )
    );
  }

});
ReactDOM.render(React.createElement(Scoreboard, null), document.getElementById('root'));