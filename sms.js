$(document).ready(function(){
	$("#submit").click( function()
	{
		var name;
		var pass;

		name = $("#userid").val();
		pass = $("#pass").val();
	
		if(	ifFieldEmpty(name,pass) == 0)
		{
			$("#errorLabel").text("Please give full details");
		}
		else
		{
			$("#errorLabel").text("");
			if(checkLoginCredentials(name,pass)!=0)
			{
				$("#errorLabel").text("Incorrect password or username");
			}
		}
	});
});


function checkLoginCredentials(name,pass)
{
	var teacher = JSON.parse(localStorage.getItem("teach"));
	var hod = JSON.parse(localStorage.getItem("hod"));
	var student = JSON.parse(localStorage.getItem("students"));

	if(hod == null)
	{
		hod = [];
	}
	if(student == null)
	{
		student = [];
	}
	if(teacher == null)
	{
		teacher = [];
	}
	
	if(name=="123" && pass=="1")
	{	
		window.location="admin.html";
		localStorage.setItem("loginIndexAdmin","admin");
		return 0;
	}

	for(var i=0;i<teacher.length;i++)
	{
		if(name==teacher[i].id)
		{
			if(pass==teacher[i].pass)
			{
				localStorage.setItem("loginIndex",JSON.stringify(i));
				window.location="teacher.html";
				return 0;
			} 
		}
	}

	for(var i=0;i<hod.length;i++)
	{
		if(name==hod[i].idHod)
		{
			if(pass==hod[i].passHod)
			{
				localStorage.setItem("loginIndexHOD",JSON.stringify(i));
				window.location="teacher.html";
				return 0;
			}
		}
	}

	for(var i=0;i<student.length;i++)
	{
		if(name==student[i].sid)
		{
			if(pass==student[i].npass)
			{
				localStorage.setItem("loginIndexStudent",JSON.stringify(i));
				window.location="student.html";	
				return 0;
			}
		}
	}
}