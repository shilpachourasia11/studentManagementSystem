$(document).ready(function(){
	$("#button1").click( function()
	{
		$("#name").removeAttr('readonly');
		$("#age").removeAttr('readonly');
		$("#gender").removeAttr('readonly');
		$("#number").removeAttr('readonly');
	});
});

$(document).ready(function(){
	$("#button2").click( function()
	{
	var student = JSON.parse(localStorage.getItem("students"));
	var studentDetails = [];
	var index = localStorage.getItem("loginIndexStudent");
	var age = $("#age").val();
	var name = $("#name").val();
	var gender = $("#gender").val();
	var number = $("#number").val();
	
	studentDetails = JSON.parse(localStorage.getItem("studentDetails"));

	if(	genderInputCheck(gender) != 0)
	{
		$("#errorLabel").text("Gender value incorrect");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	if(	phoneInputCheck(number) == 0)
	{
		$("#errorLabel").text("Invalid phone number");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}
	if(onlyText(name)==0)
	{
		$("#errorLabel").text("Name cannot have numbers in it");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	if( studentDetails == null)
	{
		studentDetails = [];
	}

	studentDetails.push({
		"id1" : student[index].id,
		"name1" : name,
		"gender1" : gender,
		"age1" : age,
		"number1" : number,
		"dept1" : student[index].sdeps
	});

	localStorage.setItem("studentDetails",JSON.stringify(studentDetails));

	$("#name").attr('readOnly','true');
	$("#age").attr('readOnly','true');
	$("#gender").attr('readOnly','true');
	$("#number").attr('readOnly','true');
	successAlert();
	});
});

$(document).ready(function(){
	$("#logoutButtton").click( function()
	{
		window.location = "sms.html";
		localStorage.setItem("loginIndex","null");
   		localStorage.setItem("loginIndexHOD","null");
   		localStorage.setItem("loginIndexStudent","null");
	});
});

function successAlert()
{
	$("#successLabel").text("Successfully updated details");
    setTimeout(successAlertClear, 2000);
}


function successAlertClear()
{
	$("#successLabel").text("");
}