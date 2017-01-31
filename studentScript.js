$(document).ready(function(){
	$("#button1").click( function()
	{
		$("#name").removeAttr('readonly');
		$("#age").removeAttr('readonly');
		$("#gender").removeAttr('readonly');
		$("#number").removeAttr('readonly');
		$(".textInputStudent").attr('style','visibility: visible');
	});

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

	if(	genderInputCheck(gender) != 0){
		$("#errorLabel").text("Gender value incorrect");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	if(	phoneInputCheck(number) == 0){
		$("#errorLabel").text("Invalid phone number");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}
	if(onlyText(name)==0){
		$("#errorLabel").text("Name cannot have numbers in it");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	if( studentDetails == null){
		studentDetails = [];
	}

	myData= {
		"id1" : student[index].id,
		"name1" : name,
		"gender1" : gender,
		"age1" : age,
		"number1" : number,
		"dept1" : student[index].sdeps
	}

	// studentDetails[index].push({
	// 	"id1" : student[index].id,
	// 	"name1" : name,
	// 	"gender1" : gender,
	// 	"age1" : age,
	// 	"number1" : number,
	// 	"dept1" : student[index].sdeps
	// });

	studentDetails[index] = myData;

	localStorage.setItem("studentDetails",JSON.stringify(studentDetails));

	$("#name").attr('readOnly','true');
	$("#age").attr('readOnly','true');
	$("#gender").attr('readOnly','true');
	$("#number").attr('readOnly','true');
	successAlert();
	$(".textInputStudent").attr('style','visibility: hidden');
   	loadData();
	});

	$("#logoutButtton").click( function()
	{
		window.location = "home.html";
		localStorage.setItem("loginIndex",null);
   		localStorage.setItem("loginIndexHOD",null);
   		localStorage.setItem("loginIndexStudent",null);
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

function loadData()
{
	var studentDetails = [];
	studentDetails =JSON.parse(localStorage.getItem("studentDetails"));
	var index = localStorage.getItem("loginIndexStudent");

	if(studentDetails[index]== null | studentDetails== null){  
		$("#studentName").text("NA");
		$("#studentAge").text("NA");
		$("#studentGender").text("NA");
		$("#studentNumber").text("NA");
	}
	else{
		$("#studentName").text(studentDetails[index].name1);
		$("#studentAge").text(studentDetails[index].age1);
		$("#studentGender").text(studentDetails[index].gender1);
		$("#studentNumber").text(studentDetails[index].number1);
	}
}