var dep = [];

$(document).ready(function(){
	$("#button2").click( function()
	{
		var dept1= $("#department").val();
   	
   	if(	ifFieldEmpty(dept1) == 0)
	{
		$("#errorLabel").text("Can not leave this block empty");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	if(	lengthCheck(dept1) == 0)
	{
		$("#errorLabel").text("Department name must have characters more than 1 ");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	if(	checkFodDuplicatesDepartments(dept1) == 0)
	{
		$("#errorLabel").text("Department has already been added");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}
	if(onlyText(dept1)==0)
	{
		$("#errorLabel").text("department name cannot have numbers in it");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}
    dep.push({
    	"dep" : dept1,
    	"subject" : []
    });
    localStorage.setItem("dept",JSON.stringify(dep));
   	var storeddep = JSON.parse(localStorage.getItem("dept"));
    var option = document.createElement("option");
    option.textContent = storeddep[storeddep.length - 1].dep;
    $("#select1").append(option);

    successAlert("Departments");
	});
});

$(document).ready(function(){
	$("#submit1").click( function()
	{
	var department = $("#select1").val();
	var subject = $("#subject").val();

	if(	ifFieldEmpty(subject) == 0)
	{
		$("#errorLabel").text("Can not leave this block empty");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}
	if(onlyText(subject)==0)
	{
		$("#errorLabel").text("Subject name cannot have numbers in it");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}
	
	var key1;

	for(var i=0;i<dep.length;i++)
	{
		if(department==dep[i].dep)
		{
			key1=i;
			break;
		}
	}

	if(	checkFodDuplicatesSubjects(subject , key1) == 0)
	{
		$("#errorLabel").text("Already added this subject");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	dep[key1].subject.push(subject);
	
	localStorage.setItem("dept",JSON.stringify(dep)); // din not add stringify because it gave erros 

	successAlert("Subjects");
	});
});


$(document).ready(function(){
	$("#submit2").click( function()
	{
	var i;

	if($('select#select2 option') !='undefined')
	{
    	for(i = $('select#select2 option').length - 1 ; i >= 0 ; i--)
    	{
        	$('select#select2 option').remove(i);
    	}
    }
	var department = $("#select1").val();
	var storeddep =localStorage.getItem("dept");

	for(var i=0;i<Object.keys(dep).length;i++)
	{
		if(department==dep[i].dep)
		{
			for(var j=0;j<dep[i].subject.length;j++)
   			{
    			var option = document.createElement("option");
    			option.textContent = dep[i].subject[j];
    			$("#select2").append(option);
    		}
    		break;
		}
	}
	});
});


$(document).ready(function(){
	$("#submit3").click( function()
	{
	var department = $("#select1").val();
	var sub = $("#select2").val();
	var tid = $("#id").val();
	var tpas = $("#pass").val();

	if(	ifFieldEmpty(tid , tpas) == 0)
	{
		$("#errorLabel").text("Can not leave this block empty");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}
	
	var teachTemp = [];
	teachTemp = JSON.parse(localStorage.getItem("teach"));

	if(teachTemp == null)
	{
		teachTemp = [];
	}

	if(	passwordLengthCheck(tpas) == 0)
	{
		$("#errorLabel").text("Password must be more than six characters");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	
	if(	checkFodDuplicatesTeachers(tid) == 0)
	{
		$("#errorLabel").text("Already added this teacher");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	mydata = {
		"id" : tid,
		"subj" : sub,
		"pass" : tpas,
		"dept" : department
	};

	teachTemp.push(mydata);
	
	localStorage.setItem("teach",JSON.stringify(teachTemp));
	successAlert("teacher");
	});
});

$(document).ready(function(){
	$("#submit4").click( function()
	{
	
	for(var i = $('select#select3 option').length - 1 ; i >= 0 ; i--)
    {
        $('select#select3 option').remove(i);
    }	

	var department = $("#select1").val();
	var sub = $("#select2").val();

	var teacher =JSON.parse(localStorage.getItem("teach"));
	
	for(var i=0 ; i<Object.keys(teacher).length; i++)
	{
		if(teacher[i].dept == department && teacher[i].subj== sub)
		{
			var option = document.createElement("option");
    		option.textContent = teacher[i].id;
    		$("#select3").append(option);
		}
	}

	});
});

$(document).ready(function(){
	$("#submit5").click( function()
	{
	var department = $("#select1").val();
	var sub = $("#select2").val();
	var teacher = $("#select3").val();
	var hodid = $("#hodid").val();
	var hodpass = $("#hodpass").val();

	var hod = [];

	if(	ifFieldEmpty(hodid , hodpass) == 0)
	{
		$("#errorLabel").text("Can not leave this block empty");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	if(	passwordLengthCheck(hodpass) == 0)
	{
		$("#errorLabel").text("Password must be more than six characters");
		return;
	}
	else
	{
		$("#errorLabel").text(null);
	}

	hod.push({
		"idTeacher" : teacher.id1,
		"idHod" : hodid,
		"passHod" : hodpass,
		"deptHod" : department
	});

	localStorage.setItem("hod",JSON.stringify(hod));
	successAlert("HOD");

	});
});

$(document).ready(function(){
	$("#button1").click( function()
	{
	window.location = "sms.html";
	localStorage.setItem("loginIndex",null);
   	localStorage.setItem("loginIndexHOD",null);
   	localStorage.setItem("loginIndexAdmin",null);

	});
});


function successAlert(updatedVariable)
{
	$("#successLabel").text("Successfully updated" + updatedVariable);
    setTimeout(successAlertClear, 2000);
}

function successAlertClear()
{
	$("#successLabel").text("");
}