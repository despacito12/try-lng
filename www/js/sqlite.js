'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Buttons(props) {
  return React.createElement(
    'button',
    {
      value: props.value,
      className: 'btn ' + props.className,
      onClick: props.onClick
    },
    props.value
  );
}

function OtherButtons(props) {
  return React.createElement(
    'div',
    { className: 'other-buttons' },
    React.createElement(Buttons, { value: 'AC', className: 'tombol-lain', onClick: props.clearDisplay }),
    React.createElement(Buttons, { value: '+/-', className: 'tombol-lain', onClick: props.toggleSign }),
    React.createElement(Buttons, { value: 'C', className: 'tombol-lain  allclear', onClick: props.clearDisplay })
  );
}

function NumberButtons(props) {
  return React.createElement(
    'div',
    { className: 'number-buttons' },
    React.createElement(Buttons, { value: '7', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '8', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '9', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '4', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '5', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '6', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '1', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '2', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '3', className: 'tombol-angka', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '0', className: 'tombol-angka nol', onClick: props.enterDigit }),
    React.createElement(Buttons, { value: '.', className: 'tombol-angka', onClick: props.enterDot })
  );
}

function OperatorButtons(props) {
  return React.createElement(
    'div',
    { className: 'operator-buttons' },
    React.createElement(Buttons, { value: '%', className: 'tombol-operator', onClick: props.inputPercent }),
    React.createElement(Buttons, { value: '√', className: 'tombol-operator', onClick: props.squareRoot }),
    React.createElement(Buttons, { value: 'x', className: 'tombol-operator', onClick: props.operate }),
    React.createElement(Buttons, { value: '÷', className: 'tombol-operator', onClick: props.operate }),
    React.createElement(Buttons, { value: '+', className: 'tombol-operator', onClick: props.operate }),
    React.createElement(Buttons, { value: '-', className: 'tombol-operator', onClick: props.operate }),
    React.createElement(Buttons, { value: '=', className: 'equal-button', onClick: props.operate })
  );
}

function PickCountry(props) {
  return React.createElement(
    'div',
    { className: 'country' },
    React.createElement(
      'h3',
      { className: 'radio-title' },
      'Choose your Country'
    ),
    React.createElement(
      'form',
      { className: 'country-form' },
      React.createElement(
        'label',
        { className: 'radio-inline' },
        React.createElement('input', { type: 'radio', name: 'country', value: 'en-US', onClick: props.onClick, defaultChecked: true }),
        'USA'
      ),
      React.createElement(
        'label',
        { className: 'radio-inline' },
        React.createElement('input', { type: 'radio', name: 'country', value: 'de-DE', onClick: props.onClick }),
        'German'
      ),
      React.createElement(
        'label',
        { className: 'radio-inline' },
        React.createElement('input', { type: 'radio', name: 'country', value: 'ar-EG', onClick: props.onClick }),
        'Arabic'
      ),
      React.createElement(
        'label',
        { className: 'radio-inline' },
        React.createElement('input', { type: 'radio', name: 'country', value: 'en-IN', onClick: props.onClick }),
        'India'
      ),
      React.createElement(
        'label',
        { className: 'radio-inline' },
        React.createElement('input', { type: 'radio', name: 'country', value: 'zh-Hans-CN-u-nu-hanidec', onClick: props.onClick }),
        'China'
      )
    )
  );
}

var OutputScreen = function (_React$Component) {
  _inherits(OutputScreen, _React$Component);

  function OutputScreen(props) {
    _classCallCheck(this, OutputScreen);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      pickedCountry: 'en-US'
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  OutputScreen.prototype.handleClick = function handleClick(event) {
    var newCountry = event.target.value;
    this.setState({
      pickedCountry: newCountry
    });
  };

  OutputScreen.prototype.render = function render() {
    var output = this.props.output;
    var language = this.state.pickedCountry;
    var uniqValue = parseFloat(output).toLocaleString(language, {
      maximumFractionDigits: 14 });
    return React.createElement(
      'div',
      null,
      React.createElement(PickCountry, { onClick: this.handleClick }),
      React.createElement('hr', null),
      React.createElement(
        'div',
        { className: 'output-screen' },
        React.createElement(
          'div',
          { className: 'history' },
          React.createElement(
            'p',
            null,
            this.props.history
          ),
          React.createElement(
            'p',
            null,
            this.props.operatorOutput
          )
        ),
        React.createElement(
          'h3',
          { style: language == 'zh-Hans-CN-u-nu-hanidec' ? { fontSize: 25 } : null },
          uniqValue
        )
      )
    );
  };

  return OutputScreen;
}(React.Component);

var Calculator = function (_React$Component2) {
  _inherits(Calculator, _React$Component2);

  function Calculator() {
    _classCallCheck(this, Calculator);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this2.state = {
      output: 0,
      operatorOutput: '',
      storeValue: [],
      history: '',
      type: 'round',
      maxLength: 10
    };
    _this2.enterDigit = _this2.enterDigit.bind(_this2);
    _this2.enterDot = _this2.enterDot.bind(_this2);
    _this2.clearDisplay = _this2.clearDisplay.bind(_this2);
    _this2.toggleSign = _this2.toggleSign.bind(_this2);
    _this2.inputPercent = _this2.inputPercent.bind(_this2);
    _this2.squareRoot = _this2.squareRoot.bind(_this2);
    _this2.operate = _this2.operate.bind(_this2);
    return _this2;
  }

  Calculator.prototype.clearDisplay = function clearDisplay(event) {
    var value = event.target.value;
    var _state = this.state;
    var output = _state.output;
    var operatorOutput = _state.operatorOutput;

    if (value === 'AC') {
      this.setState({
        output: 0,
        operatorOutput: '',
        storeValue: [],
        history: ''
      });
    } else if (operatorOutput === '') {
      this.setState({
        output: output.length === 1 ? 0 : output.substring(0, output.length - 1)
      });
    }
  };

  Calculator.prototype.toggleSign = function toggleSign() {
    var _state2 = this.state;
    var output = _state2.output;
    var operatorOutput = _state2.operatorOutput;

    if (operatorOutput === '') {
      this.setState({
        output: String(output * -1)
      });
    }
  };

  Calculator.prototype.inputPercent = function inputPercent() {
    var _state3 = this.state;
    var output = _state3.output;
    var operatorOutput = _state3.operatorOutput;
    var type = _state3.type;
    var maxLength = _state3.maxLength;

    if (operatorOutput === '') {
      this.setState({
        output: String(DecimalAdjust(type, output / 100, -maxLength)),
        operatorOutput: ''
      });
    }
  };

  Calculator.prototype.squareRoot = function squareRoot() {
    var _state4 = this.state;
    var output = _state4.output;
    var operatorOutput = _state4.operatorOutput;
    var type = _state4.type;
    var maxLength = _state4.maxLength;

    var sqrt = String(Math.sqrt(output));

    if (operatorOutput === '') {
      this.setState({
        output: sqrt.length > maxLength ? sqrt.substr(0, maxLength) : sqrt,
        operatorOutput: ''
      });
    }
  };

  Calculator.prototype.enterDot = function enterDot(event) {
    var dot = event.target.value;
    var _state5 = this.state;
    var output = _state5.output;
    var operatorOutput = _state5.operatorOutput;

    if (operatorOutput === '') {
      if (output.indexOf(dot) == -1) {
        this.setState({
          output: output + dot
        });
      }
    }
  };

  Calculator.prototype.enterDigit = function enterDigit(event) {
    //if length > 15, can not input. how?
    var value = event.target.value;
    var _state6 = this.state;
    var output = _state6.output;
    var operatorOutput = _state6.operatorOutput;
    var storeValue = _state6.storeValue;
    var history = _state6.history;
    var maxLength = _state6.maxLength;

    if (operatorOutput !== '') {
      this.setState(function (prevState) {
        storeValue.push(operatorOutput);
        return {
          output: value,
          operatorOutput: ''
        };
      });
    } else if (String(output).length <= maxLength) {
      this.setState({
        output: output === 0 ? value : output + value
      });
    } else {
      this.setState({
        output: output
      });
    }
    this.setState({
      history: history + operatorOutput
    });
  };

  Calculator.prototype.operate = function operate(event) {
    var operator = event.target.value;
    var storeValue = this.state.storeValue;
    var _state7 = this.state;
    var output = _state7.output;
    var operatorOutput = _state7.operatorOutput;
    var history = _state7.history;
    var type = _state7.type;
    var maxLength = _state7.maxLength;

    if (storeValue.length === 0) {
      storeValue.push(Number(output));
    } else {
      var newVal = ComputeOp(storeValue, Number(output));
      this.setState({
        output: newVal.length > maxLength ? DecimalAdjust(type, newVal, -(newVal.length - maxLength)) : newVal,
        storeValue: [newVal]
      });
    }

    this.setState({
      operatorOutput: operator,
      history: history === '' || history.indexOf('=') > -1 ? output : history + output
    });
  };

  Calculator.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'calculator' },
      React.createElement(OutputScreen, {
        history: this.state.history,
        output: this.state.output,
        operatorOutput: this.state.operatorOutput
      }),
      React.createElement(
        'div',
        { className: 'calc-buttons' },
        React.createElement(OtherButtons, {
          clearDisplay: this.clearDisplay,
          toggleSign: this.toggleSign
        }),
        React.createElement(NumberButtons, {
          enterDigit: this.enterDigit,
          enterDot: this.enterDot
        }),
        React.createElement(OperatorButtons, {
          inputPercent: this.inputPercent,
          squareRoot: this.squareRoot,
          operate: this.operate
        })
      )
    );
  };

  return Calculator;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Calculator, null)
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

function ComputeOp(arr, curr) {
  var newVal = arr.filter(function (el, idx, arai) {
    return arai.indexOf(el) === idx;
  });
  var prev = newVal[0];
  var next = curr;
  var operator = newVal[1];
  var result = 0;

  switch (operator) {
    case '+':
      result = prev + next;
      break;
    case '-':
      result = prev - next;
      break;
    case '÷':
      result = prev / next;
      break;
    case 'x':
      result = prev * next;
      break;
    default:
      result = next;
  }
  return result;
}

function DecimalAdjust(type, value, exp) {
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }

  if (value < 0) {
    return -decimalAdjust(type, -value, exp);
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
}