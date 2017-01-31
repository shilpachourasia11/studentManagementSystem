$(document).ready(function(){
	$("#button1").click( function()
	{
		$("#name").removeAttr('readonly');
		$("#age").removeAttr('readonly');
		$("#gender").removeAttr('readonly');
		$(".inputTextPersonalDetails").attr('style','visibility: visible');
	});

	$("#button2").click( function()
	{
		var teacher = JSON.parse(localStorage.getItem("teacherAdded"));
		var index = JSON.parse(localStorage.getItem("loginIndex"));
		var age = $("#age").val();
		var name = $("#name").val();
		var gender = $("#gender").val();
		var teacherPersonalTemp = [];
	
		if(index=="null" | index==null)
		{
			var index = JSON.parse(localStorage.getItem("loginIndexHOD"));
		}
		teacherPersonalTemp = JSON.parse(localStorage.getItem("teacherPersonal"));

		if(	genderInputCheck(gender) != 0)
		{
			$("#errorLabel").text("Gender value incorrect");
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

		if(teacherPersonalTemp == null)
		{
			teacherPersonalTemp = [];
		}

		var dataTemp = {
			"id1" : teacher[index].id,
			"name1" : name,
			"gender1" : gender,
			"age1" : age,
			"pass1" : teacher[index].pass
		};

		teacherPersonalTemp[index] = dataTemp;

		localStorage.setItem("teacherPersonal",JSON.stringify(teacherPersonalTemp));

		$("#name").attr('readOnly','true');
		$("#age").attr('readOnly','true');
		$("#gender").attr('readOnly','true');
		$(".inputTextPersonalDetails").attr('style','visibility: hidden');
		loadTeacherPersonalData();
		successAlert();
	});

	$("#button3").click( function()
	{
		$("#master").removeAttr('readonly');
		$("#bachelor").removeAttr('readonly');
		$("#higher").removeAttr('readonly');
		$("#second").removeAttr('readonly');
		$(".inputText").attr('style','visibility: visible');
	});

	$("#button4").click( function()
	{
		var teacherQual = [];
		var index = localStorage.getItem("loginIndex");
		var master = $("#master").val();
		var bachelor = $("#bachelor").val();
		var higher = $("#higher").val();
		var second = $("#second").val();
		
		if(index=="null" | index==null)
		{
			var index = JSON.parse(localStorage.getItem("loginIndexHOD"));
		}
		teacherQual = JSON.parse(localStorage.getItem("teacherQual"));
	
		var teacher = JSON.parse(localStorage.getItem("teacherAdded"));
	
		if(teacherQual == null)
		{
			teacherQual = [];
		}

		myData = {
			"id1" : teacher[index].id,
			"master1" : master,
			"bachelor1" : bachelor,
			"higher1" : higher,
			"second1" : second		
		};

		teacherQual[index] = myData;

		localStorage.setItem("teacherQual",JSON.stringify(teacherQual));
	
		$("#master").attr('readOnly','true');
		$("#bachelor").attr('readOnly','true');
		$("#higher").attr('readOnly','true');
		$("#second").attr('readOnly','true');
		$(".inputText").attr('style','visibility: hidden');
		successAlert();
		loadTeacherData();
	});

	$("#button5").click( function()
	{
		var teacher = JSON.parse(localStorage.getItem("teacherAdded"));
		var hod = JSON.parse(localStorage.getItem("hod"));

		var index = JSON.parse(localStorage.getItem("loginIndex"));
		var hodIndex = JSON.parse(localStorage.getItem("loginIndexHOD"));

		if(hod == null || hod== undefined)
		{
			hod = [];
		}

		if(index!=null)
		{
			for(var i = 0; i<hod.length; i++)
			{
				if(teacher[index].id== hod[i].idHod)
				{
					$("#studentDiv").attr('style','visibility: visible');
					break;
				}
			}
			$("#errorLabel").text("You are not HOD");
			return;
		}
		
		if(hodIndex != null)
		{
			for(var i = 0; i<hod.length; i++)
			{
				if(hod[i].idHod== hod[hodIndex].idHod)
				{
					$("#studentDiv").attr('style','visibility: visible');
					return;
				}
			}	
		}
		$("#errorLabel").text("You are not HOD");
		return;
	});

	$("#button6").click( function()
	{
	var id = $("#sid").val();
	var name = $("#sname").val();
	var pass = $("#spass").val();
	var index = localStorage.getItem("loginIndexHOD");
	var hod = JSON.parse(localStorage.getItem("hod"));
	var studentTemp = [];

	studentTemp = JSON.parse(localStorage.getItem("students"));

	if(studentTemp == null){
		studentTemp = [] ;
	}

	if(checkFodDuplicatesStudents(id) == 0){
		$("#errorLabel").text("Already added this student");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	if(	passwordLengthCheck(pass) == 0){
		$("#errorLabel").text("Password must be more than six characters");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	studentTemp.push(
	{
		"sid" : id,
		"sname" : name,
		"npass" : pass,
		"sdep" : hod[index].dept
	});

	localStorage.setItem("students",JSON.stringify(studentTemp));
	successAlert();
	});

	$("#logoutButtton").click( function()
	{
		window.location = "home.html";
		localStorage.setItem("loginIndex",null);
   		localStorage.setItem("loginIndexHOD",null);
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

function loadTeacherPersonalData()
{
	var teacherDetails = [];
	teacherDetails =JSON.parse(localStorage.getItem("teacherPersonal"));
	var index = localStorage.getItem("loginIndex");

	if(teacherDetails== null){  
		$("#name1").text("NA");
		$("#age1").text("NA");
		$("#gender1").text("NA");
	}
	else{
		if(teacherDetails[index]== null){
			$("#name1").text("NA");
			$("#age1").text("NA");
			$("#gender1").text("NA");
		}
		$("#name1").text(teacherDetails[index].name1);
		$("#age1").text(teacherDetails[index].age1);
		$("#gender1").text(teacherDetails[index].gender1);
	}
}

function loadTeacherData()
{
	var teacherDetails = [];
	teacherDetails =JSON.parse(localStorage.getItem("teacherQual"));
	var index = localStorage.getItem("loginIndex");

	if(teacherDetails== null){  
		$("#master1").text("NA");
		$("#bachelor1").text("NA");
		$("#higher1").text("NA");
		$("#second1").text("NA");
	}
	else{
		if(teacherDetails[index]== null ){
			$("#master1").text("NA");
			$("#bachelor1").text("NA");
			$("#higher1").text("NA");
			$("#second1").text("NA");
		}
		else{
			$("#master1").text(teacherDetails[index].master1);
			$("#bachelor1").text(teacherDetails[index].bachelor1);
			$("#higher1").text(teacherDetails[index].higher1);
			$("#second1").text(teacherDetails[index].second1);
		}
	}
}