function MaxMin() {
  var max;
  var min;

  var clazz = {
    find : function(nums) {

      min = Number.MAX_VALUE;
      max = Number.MIN_VALUE;

      nums.forEach(function(num) {
        if(num < min) min = num;
        if(num > max) max = num;
      });
    },

    getMin : function() { return min; },
    getMax : function() { return max; }
  };

  return clazz;
}