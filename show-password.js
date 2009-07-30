/*
 * show-password : A jQuery plugin to change a password field to a regular text input field and vice versa
 * http://github.com/mtodd/show-password/
 *
 * Copyright (C) 2009 Matt Todd
 * Licensed under the MIT licenses.
 */

(function($){
  $.fn.extend({
    showPassword: function(toggle_element, options) {
      
      var defaults = {
          reveal: null
      };
      
      var options = $.extend(defaults, options);
      if(options.reveal != null) $(options.reveal).show();
      
      return this.each(function() {
        
        var o      = options;
        var obj    = $(this);
        var toggle = $(toggle_element);
        
        obj.each(function(e) {
          toggle.bind('change', function(e) {
            if(obj.type == "text"){ new_type = "password"; } else { new_type = "text"; }
            new_obj = obj.clone(true);
            new_obj.attr("type", new_type);
            obj.replaceWith(new_obj);
          });
        });
        
      });
    }
  });
})(jQuery);
