exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return sum = arr.reduce((arr, b) => arr+b, 0);
  },

  remove: function(arr, item) {
      return arr.filter(function(element){
          return element !== item;
      });

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
      arr.push(item);
        return arr;

  },

  truncate: function(arr) {
    return arr.slice(0, 3);

  },

  prepend: function(arr, item) {
       arr.unshift(item);
      return arr;


  },

  curtail: function(arr) {
      return arr.slice(1, 4);


  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {
       arr.splice(item, index);
      return arr;

  },

  count: function(arr, item) {
      var search = 4;
     var count = arr.reduce(function(arr, item) {
          return arr + (item === search);
      }, 4);
  },

  duplicates: function(arr) {
     return arr.sort(0, 4);

  },

  square: function(arr) {
      return arr.map(function (x) {
          return Math.pow(x, 2);
      });

  },

  findAllOccurrences: function(arr, target) {

      var indexes = [], i = -1;
      while ((i = arr.indexOf(target, i+1)) != -1){
          indexes.push(i);
      }
      return indexes;

  }
};
