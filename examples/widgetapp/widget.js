// Generated by CoffeeScript 1.6.1
(function() {
  var $el, WSF_BUTTON_CONTROL, WSF_CONTROL, controls, name, state, trigger_callback, type, typemap,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  trigger_callback = function(control_name, event) {
    return $.ajax({
      data: {
        control_name: control_name,
        event: event
      },
      cache: false
    }).done(function(new_states) {
      var name, state, states, _ref;
      for (name in new_states) {
        state = new_states[name];
        if ((_ref = controls[name]) != null) {
          _ref.update(state);
        }
      }
      states = new_states;
    });
  };

  WSF_CONTROL = (function() {

    function WSF_CONTROL(control_name, $el) {
      this.control_name = control_name;
      this.$el = $el;
      this.attach_events();
      return;
    }

    WSF_CONTROL.prototype.attach_events = function() {};

    WSF_CONTROL.prototype.update = function(state) {};

    return WSF_CONTROL;

  })();

  controls = {};

  WSF_BUTTON_CONTROL = (function(_super) {

    __extends(WSF_BUTTON_CONTROL, _super);

    function WSF_BUTTON_CONTROL() {
      return WSF_BUTTON_CONTROL.__super__.constructor.apply(this, arguments);
    }

    WSF_BUTTON_CONTROL.prototype.attach_events = function() {
      var self;
      self = this;
      return this.$el.click(function() {
        return self.click();
      });
    };

    WSF_BUTTON_CONTROL.prototype.click = function() {
      return trigger_callback(this.control_name, 'click');
    };

    WSF_BUTTON_CONTROL.prototype.update = function(state) {
      return this.$el.text(state.text);
    };

    return WSF_BUTTON_CONTROL;

  })(WSF_CONTROL);

  typemap = {
    "WSF_BUTTON_CONTROL": WSF_BUTTON_CONTROL
  };

  for (name in states) {
    state = states[name];
    $el = $('[data-name=' + name + ']');
    type = $el.data('type');
    if ((type != null) && (typemap[type] != null)) {
      controls[name] = new typemap[type](name, $el);
    }
  }

}).call(this);
