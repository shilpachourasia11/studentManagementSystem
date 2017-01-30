$(document).ready(function(){
	$("#button1").click( function()
	{
		$("#name").removeAttr('readonly');
		$("#age").removeAttr('readonly');
		$("#gender").removeAttr('readonly');
	});
});

$(document).ready(function(){
	$("#button2").click( function()
	{
		var teacher = JSON.parse(localStorage.getItem("teach"));
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
			$("#errorLabel").text("Gender val() incorrect");
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

		teacherPersonalTemp.push(dataTemp);

		localStorage.setItem("teacherPersonal",JSON.stringify(teacherPersonalTemp));

		$("#name").attr('readOnly','true');
		$("#age").attr('readOnly','true');
		$("#gender").attr('readOnly','true');
		successAlert();
	});
});

$(document).ready(function(){
	$("#button3").click( function()
	{
		$("#master").removeAttr('readonly');
		$("#bachelor").removeAttr('readonly');
		$("#higher").removeAttr('readonly');
		$("#second").removeAttr('readonly');
	});
});

$(document).ready(function(){
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
	
		var teacher = JSON.parse(localStorage.getItem("teach"));
	
		if(teacherQual == null)
		{
			teacherQual = [];
		}

		teacherQual.push({
			"id1" : teacher[index].id,
			"master1" : master,
			"bachelor1" : bachelor,
			"higher1" : higher,
			"second1" : second		
		});

		localStorage.setItem("teacherQual",JSON.stringify(teacherQual));
	
		$("#master").attr('readOnly','true');
		$("#bachelor").attr('readOnly','true');
		$("#higher").attr('readOnly','true');
		$("#second").attr('readOnly','true');
		successAlert();
	});
});

$(document).ready(function(){
	$("#button5").click( function()
	{
		var teacher = JSON.parse(localStorage.getItem("teach"));
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
					$("#studentDiv").show();
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
});


$(document).ready(function(){
	$("#button6").click( function()
	{
	var id = $("#sid").val();
	var name = $("#sname").val();
	var pass = $("#spass").val();
	var index = localStorage.getItem("loginIndexHOD");
	var hod = JSON.parse(localStorage.getItem("hod"));
	var studentTemp = [];

	studentTemp = JSON.parse(localStorage.getItem("students"));

	if(studentTemp == null)
	{
		studentTemp = [] ;
	}

	if(checkFodDuplicatesStudents(id) == 0)
	{
		$("#errorLabel").text("Already added this student");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	if(	passwordLengthCheck(pass) == 0)
	{
		$("#errorLabel").text("Password must be more than six characters");
		return;
	}
	else
	{
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
});

$(document).ready(function(){
	$("#logoutButtton").click( function()
	{
		window.location = "sms.html";
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
