exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {

  },

  containsRepeatingLetter: function(str) {
      for(var i = 0; i < str.length; i++){
          var re = new RegExp("[^"+ str[i] +"]","g");
          if(str.replace(re, "").length >= 2){
              return true;
          }
      }
      return false;
  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
