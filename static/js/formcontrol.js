
function openForm() {
  var message = document.getElementById("nameuser").value;
  var divchat = document.getElementById("chatspace");
  var divdata = divchat.innerHTML;
  var udate = new Date();
  var userdatestring = udate.toUTCString();
  var welcomemessage = 'Hello '+message+'. How can I help you today?'
  if(message!=''){

  var format1 = '<div style="float:left;width:50%;margin-right:20px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:10px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  divchat.innerHTML+=format1+welcomemessage+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+userdatestring+'</div></div>';
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm").style.marginTop = "50px";
  document.getElementById("myUserForm").style.display = "none";
  document.getElementById("chatspace").style.display = "block";
  var header = document.getElementById("chatbotheader");
  header.innerHTML = '<div class="back"><a class="send" onclick="minimizeForm()" href="#"><i class="fa fa-angle-down"></i></a></div><div class="username">PwC - Privacy Chat Bot</div><div class="settings"><a class="send" href="#" onclick="closeForm()"><i class="fa fa-times"></i></a></div>'

  document.getElementById("myUserForm").style.display = "none";

 }
  else {
    var error = '<div id="error"><div style="text-align:left;margin:left:20px;padding:10px;color:red">Error : Please enter your name to start the chat!!!</div></div>'
    var userdiv = document.getElementById('myUserForm');
    userdiv.innerHTML = error+userdiv.innerHTML;
  }

}

function closeForm() {
  document.getElementById("myUserForm").style.display = "block";

  if(document.getElementById("error")!=null){
  document.getElementById("error").style.display = "none";
}
  var divchat = document.getElementById("chatspace");
  divchat.innerHTML="";
  document.getElementById("usermessage").value = "";
  document.getElementById("nameuser").value = "";
 document.getElementById("myForm").style.display = "none";
}

function minimizeForm() {
  //document.getElementById("myForm").style.display = "none";
  document.getElementById("myUserForm").style.display = "none";
  document.getElementById("chatspace").style.display = "none";
  var header = document.getElementById("chatbotheader");
 document.getElementById("myForm").style.marginTop = "420px";
  header.innerHTML = '<div class="back" id="maximize"><a class="send" onclick="maximizeForm()" href="#"><i class="fa fa-angle-up"></i></a></div><div class="username">PwC - Privacy Chat Bot</div><div class="settings"><a class="send" href="#" onclick="closeForm()"><i class="fa fa-times"></i></a></div>'


}


function maximizeForm() {
  //document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm").style.marginTop = "50px";
  document.getElementById("myUserForm").style.display = "none";
  document.getElementById("chatspace").style.display = "block";
  var header = document.getElementById("chatbotheader");
  header.innerHTML = '<div class="back"><a class="send" onclick="minimizeForm()" href="#"><i class="fa fa-angle-down"></i></a></div><div class="username">PwC - Privacy Chat Bot</div><div class="settings"><a class="send" href="#" onclick="closeForm()"><i class="fa fa-times"></i></a></div>'
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;
}
