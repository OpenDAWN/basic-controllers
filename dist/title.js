'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var events = require('events');
var styles = require('./utils/styles');

var Title = (function (_events$EventEmitter) {
  function Title(legend) {
    var $container = arguments[1] === undefined ? null : arguments[1];

    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).call(this);

    this.legend = legend;

    if ($container) {
      if (typeof $container === 'string') {
        $container = document.querySelector($container);
      }

      $container.appendChild(this.render());
    }
  }

  _inherits(Title, _events$EventEmitter);

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      var content = '<span class="legend">' + this.legend + '</span>';

      this.$el = document.createElement('label');
      this.$el.classList.add(styles.ns, 'title');
      this.$el.innerHTML = content;

      return this.$el;
    }
  }]);

  return Title;
})(events.EventEmitter);

module.exports = Title;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzNi90aXRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztJQUVuQyxLQUFLO0FBQ0UsV0FEUCxLQUFLLENBQ0csTUFBTSxFQUFxQjtRQUFuQixVQUFVLGdDQUFHLElBQUk7OzBCQURqQyxLQUFLOztBQUVQLCtCQUZFLEtBQUssNkNBRUM7O0FBRVIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLFFBQUksVUFBVSxFQUFFO0FBQ2QsVUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDbEMsa0JBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQ2pEOztBQUVELGdCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZDO0dBQ0Y7O1lBYkcsS0FBSzs7ZUFBTCxLQUFLOztXQWVILGtCQUFHO0FBQ1AsVUFBSSxPQUFPLDZCQUEyQixJQUFJLENBQUMsTUFBTSxZQUFTLENBQUM7O0FBRTNELFVBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxVQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzQyxVQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7O0FBRTdCLGFBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNqQjs7O1NBdkJHLEtBQUs7R0FBUyxNQUFNLENBQUMsWUFBWTs7QUEwQnZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6ImVzNi90aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi91dGlscy9zdHlsZXMnKTtcblxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBldmVudHMuRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobGVnZW5kLCAkY29udGFpbmVyID0gbnVsbCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmxlZ2VuZCA9IGxlZ2VuZDtcblxuICAgIGlmICgkY29udGFpbmVyKSB7XG4gICAgICBpZiAodHlwZW9mICRjb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICRjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCRjb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudCA9IGA8c3BhbiBjbGFzcz1cImxlZ2VuZFwiPiR7dGhpcy5sZWdlbmR9PC9zcGFuPmA7XG5cbiAgICB0aGlzLiRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGhpcy4kZWwuY2xhc3NMaXN0LmFkZChzdHlsZXMubnMsICd0aXRsZScpO1xuICAgIHRoaXMuJGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gdGhpcy4kZWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaXRsZTtcbiJdfQ==