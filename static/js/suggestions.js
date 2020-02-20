
function showlink(){
  var divchat = document.getElementById("chatspace");
  var rdate = new Date();
  var botdatestring = rdate.toUTCString();
  var format1 = '<div style="float:left;width:50%;margin-right:0px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:15px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  var policy = '<p><ul><li>You can access the PwC Privacy Policy for the US (United States) at https://www.pwc.com/us/en/site/privacy.html.</li></br><li>You can access the PwC Privacy Policy for the UK (United Kingdom) at https://www.pwc.com/gx/en/legal-notices/pwc-privacy-statement.html.</li></br></li>You can access the PwC Privacy Policy for the Carribean at https://www.pwc.com/cb/en/privacy-statement.html.</li></br><li>You can access the PwC Privacy Policy for the Australia at https://www.pwc.com.au/contact-us/privacy-policy.html.</li></br><li>You can access the PwC Privacy Policy for the Russia at https://www.pwc.ru/en/about/personal-data.html.</li></br><li>You can access the PwC Privacy Policy for the China at https://www.pwccn.com/en/privacy.html.</li></ul></p>'
  divchat.innerHTML+=format1+linkify(policy)+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+botdatestring+'</div></div>';
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.getElementById("usermessage").value='';


}

function gdpr(){
  var divchat = document.getElementById("chatspace");
  var rdate = new Date();
  var botdatestring = rdate.toUTCString();
  var format1 = '<div style="float:left;width:50%;margin-right:0px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:15px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  var policy = '<p><ul><li> You can find information about the General Data Protection Regulation (GDPR), including the different domains, corporate readiness guides, and surveys at https://consultingsource.pwcinternal.com/Collections/TopicCollections/GDPR.</li></br><li>You can access the PwC GDPR Toolkit at https://consultingsource.pwcinternal.com/Toolkit/GDPR.</li></br></ul></p>'
  divchat.innerHTML+=format1+linkify(policy)+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+botdatestring+'</div></div>';
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.getElementById("usermessage").value='';


}

function ldpd(){
  var divchat = document.getElementById("chatspace");
  var rdate = new Date();
  var botdatestring = rdate.toUTCString();
  var format1 = '<div style="float:left;width:50%;margin-right:0px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:15px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  var policy = '<p><ul><li>The translated English text for the Lei Geral de Proteção de Dados (LGPD) has been completed by IAPP professionals and is accessible at https://iapp.org/media/pdf/resource_center/Brazilian_General_Data_Protection_Law.pdf. This translation is gold-standard in the PwC Consulting Source tool.</li></br></ul></p>'
  divchat.innerHTML+=format1+linkify(policy)+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+botdatestring+'</div></div>';
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.getElementById("usermessage").value='';


}

function pipeda(){
  var divchat = document.getElementById("chatspace");
  var rdate = new Date();
  var botdatestring = rdate.toUTCString();
  var format1 = '<div style="float:left;width:50%;margin-right:0px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:15px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  var policy = '<p><ul><li>More information about the The Personal Information Protection and Electronic Documents Act (PIPEDA) can be accessed at https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/.</li></br></ul></p>'
  divchat.innerHTML+=format1+linkify(policy)+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+botdatestring+'</div></div>';
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.getElementById("usermessage").value='';


}
function aus(){
  var divchat = document.getElementById("chatspace");
  var rdate = new Date();
  var botdatestring = rdate.toUTCString();
  var format1 = '<div style="float:left;width:50%;margin-right:0px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:15px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  var policy = '<p><ul><li>More information about the Australian Privacy Act can be accessed at https://www.oaic.gov.au/assets/privacy/app-guidelines/app-guidelines-july-2019.pdf.</li></br></ul></p>'
  divchat.innerHTML+=format1+linkify(policy)+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+botdatestring+'</div></div>';
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.getElementById("usermessage").value='';


}

function ccpa(){
  var divchat = document.getElementById("chatspace");
  var rdate = new Date();
  var botdatestring = rdate.toUTCString();
  var format1 = '<div style="float:left;width:50%;margin-right:0px;margin-top:20px">'+"<div style='float:left;margin-top:5px;margin-right:28px;padding-top:10px;padding-left:10px;width:10%;'><i class='fa fa-user' style='font-size:40px;color:#e0301e' aria-hidden='true'></i></div><div style='background:#e0301e;color:white;float:right;margin-top:10px;padding:15px;width:80%;height:auto;border-radius:10px;overflow-wrap: break-word; font-family: Times New Roman, Georgia, serif;'>";
  var policy = '<p><ul><li>You can find information about the California Consumer Privacy Act (CCPA), including the privacy program benchmarks, DSR standards, and implementation support at https://consultingsource.pwcinternal.com/Collections/TopicCollections/CaliforniaConsumerPrivacyAct</li></br></ul></p>'
  divchat.innerHTML+=format1+linkify(policy)+'</div></div>'+'<div style="float:left;clear:both;width:50%;margin-right:20px;"><div style="float:right;text-align:left;padding-left:10px;width:80%;color:black;height:auto;font-size:10px;font-family: Times New Roman, Georgia, serif;">'+'Received : '+botdatestring+'</div></div>';
  var objDiv = document.getElementById("chatspace");
  objDiv.scrollTop = objDiv.scrollHeight;

  document.getElementById("usermessage").value='';


}
