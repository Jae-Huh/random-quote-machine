$(document).ready(function(){
  var quote;
  var author;
  getQuote();

  function getQuote() {
    var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.getJSON(url, function(data){
      $(".quote").html('"'+data.quoteText+'"');
      $(".author").html("-" + data.quoteAuthor);
      quote = data.quoteText;
      author = data.quoteAuthor;
    });
  };

  $("#newQuote").on("click", function() {
    getQuote();
  });
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text="+'"'+quote+'"'+' '+'-'+author);
  });
});
