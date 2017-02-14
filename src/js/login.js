
    
    function buttonEvent(buttonType){
     console.log('called method :    ' +  buttonType);

      var regularExpression = /^[a-zA-Z0-9]+$/;
      var valid = regularExpression.test(document.getElementById('usernam').value);
      console.log('called nn method valid :    ' +  valid + ' :: ' + document.getElementById('usernam').value);
      if (!valid){ 
        alert("its not valid username");
        return false;
      }
      if(buttonType == 'login') {         
        //document.getElementById('login_page').style.display='none';
        //document.getElementById('printingUserName').innerHTML = document.getElementById('usernam').value;
        //document.getElementById('login_info').style.display='block';
        window.location = "file:///C:/Users/Ambasta/Desktop/WorkSpace/UserApp/src/html/fill_user_details.html?name="+document.getElementById('usernam').value;
      } else {
        //document.getElementById('loginForm').reset();
      }
      return false;
    
    }

    function updateList(){
      //document.getElementById('country').remove(0);

    }

    function initUserInfo(){
      console.log('1');
      var uname = getParameterByName('name');
      document.getElementById('printingUserName').innerHTML = uname;
      console.log('2 uname : ' + uname);
    }

    function goBack(){
      window.history.back();
    }

    function elementLoad (param1, param2){
        console.log('param1 :    ' +  param1 + '   param2:  ' + param2);
    }

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}  