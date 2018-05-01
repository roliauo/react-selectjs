'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Selector = require('./Selector.css');

var _Selector2 = _interopRequireDefault(_Selector);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = function (_React$Component) {
	_inherits(Selector, _React$Component);

	function Selector(props) {
		_classCallCheck(this, Selector);

		var _this = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this, props));

		_this.state = {
			open: false,
			selected: _this.props.selected || ''
		};
		_this.css = _bind2.default.bind(_Selector2.default);
		return _this;
	}

	_createClass(Selector, [{
		key: 'renderOption',
		value: function renderOption(name, option, index) {
			var _this2 = this;

			return _react2.default.createElement(
				'label',
				{ className: this.css("option"), key: index },
				_react2.default.createElement('input', { type: 'radio', name: name, value: option, onClick: function onClick(e) {
						_this2.selected(e);
						_this2.props.onClick(e);
					} }),
				_react2.default.createElement(
					'span',
					{ className: option === this.state.selected ? this.css("title", "active") : this.css("title"),
						style: { padding: this.props.padding } },
					option
				)
			);
		}
	}, {
		key: 'toggleList',
		value: function toggleList(e) {
			this.setState({ open: !this.state.open });
		}
	}, {
		key: 'selected',
		value: function selected(e) {
			this.setState({ open: !this.state.open,
				selected: e.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    disabled = _props.disabled,
			    title = _props.title,
			    name = _props.name,
			    optionList = _props.optionList,
			    padding = _props.padding,
			    width = _props.width,
			    borderRadius = _props.borderRadius,
			    borderStyle = _props.borderStyle,
			    onClick = _props.onClick;
			//console.log(this.state.open+','+this.state.selected); //checked={this.state.open}

			var placeholder = this.state.selected || title;
			return _react2.default.createElement(
				'div',
				{ className: this.css("custom-select"), style: { width: width, borderRadius: borderRadius, border: borderStyle } },
				_react2.default.createElement('input', { type: 'radio', name: name,
					onClick: function onClick(e) {
						return disabled == 'true' ? '' : _this3.toggleList(e);
					},
					checked: this.state.open }),
				_react2.default.createElement(
					'span',
					{ className: this.state.selected ? this.css("placeholder", "black") : this.css("placeholder"),
						style: { padding: padding, background: disabled == 'true' ? '#DBDBDB' : '#fff' } },
					placeholder
				),
				optionList.map(function (option, index) {
					return _this3.renderOption(name, option, index);
				})
			);
		}
	}]);

	return Selector;
}(_react2.default.Component);

Selector.defaultProps = {
	name: 'options',
	optionList: ['item1', 'item2', 'item3'],
	title: 'Choose...'
};

exports.default = Selector;