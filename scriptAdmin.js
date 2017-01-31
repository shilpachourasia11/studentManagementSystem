var departmentList = [];

$(document).ready(function(){

	$("#button2").click( function()
	{
	

	var department_name_value= $("#department").val();

   	if(	isFieldEmpty(department_name_value) == 0){
		$("#errorLabel").text("Incomplete information");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	if(	lengthCheck(department_name_value) == 0){
		$("#errorLabel").text("Department name must have characters more than 1 ");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	if(	checkFodDuplicatesDepartments(department_name_value) == 0){
		$("#errorLabel").text("Department has already been added");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}
	if(onlyText(department_name_value)==0){
		$("#errorLabel").text("Department name must have only letters");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

    departmentList.push({
    	"department_name" : department_name_value,
    	"subject" : []
    });

    if($('select#select1 option') !='undefined')
	{
    	for(i = $('select#select1 option').length - 1 ; i >= 0 ; i--)
    	{
        	$('select#select1 option').remove(i);
    	}
    }

    localStorage.setItem("deptmentsAdded",JSON.stringify(departmentList));
   	var storeddep = JSON.parse(localStorage.getItem("deptmentsAdded"));
    var option = document.createElement("option");
    option.textContent = storeddep[storeddep.length - 1].department_name;
    $("#select1").append(option);

    successAlert("Departments");
	});

	
	$("#submit1").click( function()
	{
		var department = $("#select1").val();
		var subject = $("#subject").val();
		var key1;

		for(var i=0;i<departmentList.length;i++)
		{
			if(department==departmentList[i].department_name)
			{
				key1=i;
				break;
			}
		}

		/*validateSubjectEntries(subject, key1);*/
		if(	isFieldEmpty(subject) == 0){
			$("#errorLabel").text("Imcomplete information");
			return;
		}
		else{
			$("#errorLabel").text(null);
		}
		if(onlyText(subject)==0){
			$("#errorLabel").text("Subject name must contain characters only");
			return;
		}
		else{
			$("#errorLabel").text(null);
		}
			
		if(	checkFodDuplicatesSubjects(subject , key1) == 0){
			$("#errorLabel").text("Already added this subject");
			return;
		}
		else{
			$("#errorLabel").text(null);
		}
	
		departmentList[key1].subject.push(subject);
	
		localStorage.setItem("deptmentsAdded",JSON.stringify(departmentList));

		successAlert("Subjects");
	});



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
	var storeddep =localStorage.getItem("deptmentsAdded");

	for(var i=0;i<Object.keys(departmentList).length;i++)
	{
		if(department==departmentList[i].department_name)
		{
			for(var j=0;j<departmentList[i].subject.length;j++)
   			{
    			var option = document.createElement("option");
    			option.textContent = departmentList[i].subject[j];
    			$("#select2").append(option);
    		}
    		break;
		}
	}
	});


	$("#submit3").click( function()
	{
	var department = $("#select1").val();
	var sub = $("#select2").val();
	var tid = $("#id").val();
	var tpas = $("#pass").val();

	var teacherTemp = [];
	teacherTemp = JSON.parse(localStorage.getItem("teacherAdded"));

	if(teacherTemp == null)
	{
		teacherTemp = [];
	}

	// validateTeacherEntries(tid,tpas);
	
	if(	isFieldEmpty(tid , tpas) == 0){
		$("#errorLabel").text("Incomplete information");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}
	
	
	if(	passwordLengthCheck(tpas) == 0){
		$("#errorLabel").text("Password must be more than six characters");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}
	
	if(	checkFodDuplicatesTeachers(tid) == 0){
		$("#errorLabel").text("Already added this teacher");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}


	mydata = {
		"id" : tid,
		"subj" : sub,
		"pass" : tpas,
		"dept" : department
	};

	teacherTemp.push(mydata);
	
	localStorage.setItem("teacherAdded",JSON.stringify(teacherTemp));
	successAlert("teacher");
	});

	$("#submit4").click( function()
	{
	
	for(var i = $('select#select3 option').length - 1 ; i >= 0 ; i--)
    {
        $('select#select3 option').remove(i);
    }	

	var department = $("#select1").val();
	var sub = $("#select2").val();

	var teacher =JSON.parse(localStorage.getItem("teacherAdded"));
	
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



	$("#submit5").click( function()
	{
	var department = $("#select1").val();
	var teacher = $("#select3").val();
	var hodid = $("#hodid").val();
	var hodpass = $("#hodpass").val();

	var hod = [];

	//validateHODEntries(hodid , hodpass);
	if(	isFieldEmpty(hodid , hodpass) == 0){
		$("#errorLabel").text("Incomplete information");
		return;
	}
	else{
		$("#errorLabel").text(null);
	}

	if(	passwordLengthCheck(hodpass) == 0){
		$("#errorLabel").text("Password must be more than six characters");
		return;
	}
	else{
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

	$("#button1").click( function()
	{
	window.location = "home.html";
	localStorage.setItem("loginIndex",null);
   	localStorage.setItem("loginIndexHOD",null);
   	localStorage.setItem("loginIndexAdmin",null);

	});

	$("#enableDepartment").click(function()
	{
		$("#divDepartmentDetails").attr('style','display: block');
		$("#departmentButton").attr('style','display: block');

		$("#subjectButton").attr('style','display: none');
		$("#teacherButton").attr('style','display: none');
		$("#hodButton").attr('style','display: none');

		$("#divSubjectDetails").attr('style','display: none');
		$("#divHOD_Details").attr('style','display: none');
		$("#divTeacherDetails").attr('style','display: none');
		
		

	});

	$("#enableSubject").click(function()
	{
		
		$("#divSubjectDetails").attr('style','display: block');
		$("#subjectButton").attr('style','display: block');

		$("#divTeacherDetails").attr('style','display: none');
		$("#divDepartmentDetails").attr('style','display: none');
		$("#divHOD_Details").attr('style','display: none');	

		$("#departmentButton").attr('style','display: none');
		
		$("#teacherButton").attr('style','display: none');
		$("#hodButton").attr('style','display: none');
			
	});


	$("#enableTeacher").click(function()
	{
		$("#divTeacherDetails").attr('style','display: block');
		$("#teacherButton").attr('style','display: block');

		$("#divSubjectDetails").attr('style','display: none');
		$("#divDepartmentDetails").attr('style','display: none');
		$("#divHOD_Details").attr('style','display: none');

		$("#departmentButton").attr('style','display: none');
		$("#subjectButton").attr('style','display: none');
		$("#hodButton").attr('style','display: none');

		

	});

	$("#enableHOD").click(function()
	{
		$("#divHOD_Details").attr('style','display: block');
		$("#hodButton").attr('style','display: block');

		$("#divTeacherDetails").attr('style','display: none');
		$("#divSubjectDetails").attr('style','display: none');
		$("#divDepartmentDetails").attr('style','display: none');

		$("#departmentButton").attr('style','display: none');

		$("#subjectButton").attr('style','display: none');
		$("#teacherButton").attr('style','display: none');
		
	});

});


function successAlert(updatedVariable)
{
	$("#successLabel").text("Successfully updated " + updatedVariable);
    setTimeout(successAlertClear, 2000);
}

function successAlertClear()
{
	$("#successLabel").text("");
}