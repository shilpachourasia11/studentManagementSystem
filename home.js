$(document).ready(function(){
	$("#userid").focus();
	$("#submit1").click( function(e)
	{
		e.preventDefault();
		var name;
		var pass;

		name = $("#userid").val();
		pass = $("#pass").val();
	
		if(	isFieldEmpty(name,pass) == 0){
			$("#errorLabel").text("Please give full details");

		}
		else{
			$("#errorLabel").text("");
			if(checkLoginCredentials(name,pass)==0){
				$("#errorLabel").text("");
			}
			else{
				$("#errorLabel").text("Incorrect password or username");
			}
		}
	});
});


function checkLoginCredentials(name,pass)
{
	var teacher = JSON.parse(localStorage.getItem("teacherAdded"));
	var hod = JSON.parse(localStorage.getItem("hod"));
	var student = JSON.parse(localStorage.getItem("students"));


	if(hod == null){
		hod = [];
	}
	if(student == null){
		student = [];
	}
	if(teacher == null){
		teacher = [];
	}
	
	if(isAdmin(name,pass)==0){
		return 0;
	}

	else if(isTeacher(name,pass,teacher)==0){
		return 0;
	}

	else if(isHOD(name,pass,hod)==0){
		return 0;
	}

	else if(isStudent(name,pass,student)==0){
		return 0;
	}
	else{
		return 1;
	}
}

function isAdmin(name,pass)
{
	if(name=="123" && pass=="1"){	
		localStorage.setItem("loginIndexAdmin","admin");
		window.location="admin.html";
		return 0;
	}
}

function isTeacher(name,pass,teacher){
	for(var i=0;i<teacher.length;i++)
	{
		if(name==teacher[i].id){
			if(pass==teacher[i].pass){
				localStorage.setItem("loginIndex",JSON.stringify(i));
				window.location="teacher.html";
				return 0;
			} 
		}
	}
}

function isHOD(name,pass,hod)
{
	for(var i=0;i<hod.length;i++)
	{
		if(name==hod[i].idHod){
			if(pass==hod[i].passHod){
				localStorage.setItem("loginIndexHOD",JSON.stringify(i));
				window.location="teacher.html";
				return 0;
			}
		}
	}
}

function isStudent(name,pass,student)
{
	for(var i=0;i<student.length;i++)
	{
		if(name==student[i].sid){
			if(pass==student[i].npass){
				localStorage.setItem("loginIndexStudent",JSON.stringify(i));
				window.location="student.html";	
				return 0;
			}
		}
	}
}