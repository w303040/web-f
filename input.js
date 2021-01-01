  var Links = {
    SetColor: function (color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
  var Body = {
    SetBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor = color;
    },
    SetColor: function(color) {
      document.querySelector('body').style.color = color;
    }
  }
  function nightdayhandler(self){
    var target=document.querySelector('body');
    if(self.value ==='night') {
      Body.SetBackgroundColor('black');
      Body.SetColor('white')
      self.value ='day';
      Links.SetColor('powderblue');
    } else {
      Body.SetBackgroundColor('beige');
      Body.SetColor('black')
      self.value ='night';
      Links.SetColor('purple');
    }
  }
