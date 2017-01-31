function loginPageSessionState()
{
   loginIndexAdmin = localStorage.getItem("loginIndexAdmin");
   loginIndexTeacher = localStorage.getItem("loginIndex");
   loginIndexHOD = JSON.parse(localStorage.getItem("loginIndexHOD"));
   loginIndexStudent = JSON.parse(localStorage.getItem("loginIndexStudent"));
  
   if(loginIndexAdmin == "admin")
   {
      window.location="admin.html";
      return false;
   }
   if(loginIndexTeacher != null)
   {
      if(loginIndexTeacher!="null")
         {
            window.location="teacher.html";
            return false;
         } 
   }
   if(loginIndexHOD != null)
   {
       if(loginIndexHOD!="null")
         {
            window.location="teacher.html";
             return false;
         } 
   }
   if(loginIndexStudent != null)
   {
      if(loginIndexStudent!="null")
         {
            window.location="student.html";
            return false;
         } 
   }
   else{
      return false;
   }
}

function sessionState()
{
   loginIndex = localStorage.getItem("loginIndex");
   if(loginIndex== null)
   {
      loginIndex = [];
      loginIndex = localStorage.getItem("loginIndexHOD");
   }

   if(loginIndex== null)
   {
      loginIndex = [];
      loginIndex = localStorage.getItem("loginIndexAdmin");
   }

   if(loginIndex == null)
   {
      loginIndex = [];
      loginIndex = localStorage.getItem("loginIndexStudent");
   }
   if(loginIndex== "null")
   {
      loginIndex = [];
      loginIndex = localStorage.getItem("loginIndexHOD");
   }

   if(loginIndex== "null")
   {
      loginIndex = [];
      loginIndex = localStorage.getItem("loginIndexAdmin");
   }

   if(loginIndex == "null")
   {
      loginIndex = [];
      loginIndex = localStorage.getItem("loginIndexStudent");
   }
   if(loginIndex == null)
   {
      window.location="home.html";
      return false;
   }
   if(loginIndex == "null")
   {
      window.location="home.html";
      return false;
   }
   else{
      return false;
   }
}

function isFieldEmpty(name, pass)
{
	if(name == "" || pass == "")
	{
		return 0;
	}
}

function passwordLengthCheck(pass)
{
	if(pass.length <6)
	{
		return 0;
	}
}

function lengthCheck(name)
{
	if(name.length < 2)
	{
		return 0;
	}
}

function genderInputCheck(gender)
{
	if(gender == 'm' || gender == 'f')
	{
		return 0;
	}
}

function phoneInputCheck(phone)
{
	if(phone.length < 10)
	{
		return 0;
	}
}

function checkFodDuplicatesDepartments(checkVar)
{	

   	var storeddep = JSON.parse(localStorage.getItem("deptmentsAdded"));

   	if(storeddep == null)
   	{
   		return 1;
   	}
   	for(var i = 0; i < storeddep.length ; i++)
   	{
   		if(storeddep[i].department_name == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}


function checkFodDuplicatesSubjects(checkVar , key1)
{
   	var storedSubject = JSON.parse(localStorage.getItem("deptmentsAdded"));

   	if(storedSubject == null)
   	{
   		return 1;
   	}

   	for(var i = 0; i < storedSubject[key1].subject.length ; i++)
   	{
   		if(storedSubject[key1].subject[i] == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}


function checkFodDuplicatesTeachers(checkVar)
{
   	var storedTeacher = JSON.parse(localStorage.getItem("teacherAdded"));

   	 if(storedTeacher == null)
   	{
   		return 1;
   	}

   	for(var i = 0; i < storedTeacher.length ; i++)
   	{
   		if(storedTeacher[i].id == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}


function checkFodDuplicatesHOD(checkVar)
{
   	var storedTeacher = JSON.parse(localStorage.getItem("teacherAdded"));

   	 if(storedTeacher == null)
   	{
   		return 1;
   	}

   	for(var i = 0; i < storedTeacher.length ; i++)
   	{
   		if(storedTeacher[i].id == checkVar)
   		{
   			return 0;
   		}
   	}
   	return 1;
}

function checkFodDuplicatesStudents(checkVar)
{
      var storedStudents = JSON.parse(localStorage.getItem("students"));

      if(storedStudents == null)
      {
         return 1;
      }

      for(var i = 0; i < storedStudents.length ; i++)
      {
         if(storedStudents[i].sid == checkVar)
         {
            return 0;
         }
      }
      return 1;
}

function onlyText(checkVar)
{
   if(/^[a-zA-Z\s]+$/.test(checkVar))
   {
      return 1;
   } 
   else
   {
      return 0;
   }
}

