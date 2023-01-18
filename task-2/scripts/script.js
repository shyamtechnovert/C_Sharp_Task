
//Dummy data
var employeeData = [{
    "fname":"Chandler",
    "lname": "Bing",
    "img":"https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg",
    "email":"bing@gmail.com",
    "name":"Chandler Bing",
    "job_title" :".Net Devlopement",
    "office":"Seattle",
    "department":"IT",
    "ph_no":"1234456791",
    "skype":"abc",
    "id":1,
},
{
    "fname":"Rachel",
    "lname": "Green",
    "img":"https://media1.popsugar-assets.com/files/thumbor/JRMlRWT5ALpRxwhqEXibsrW4EbA/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/05/26/017/n/1922283/a0f07975058b97f7_TCDFRIE_EC273_H/i/Rachel-Green.JPG",
    "email":"green@gmail.com",
    "name":"Rachel Green",
    "job_title" :"BI Devlopement",
    "office":"India",
    "department":"IT",
    "ph_no":"1234456791",
    "skype":"abc",
    "id":2,
},
{
    "fname":"Ross",
    "lname": "Gellar",
    "img":"https://static.wikia.nocookie.net/disney/images/0/02/David_Schwimmer.jpg/revision/latest?cb=20181003235843",
    "email":"gellarr@gmail.com",
    "name" : "Ross Gellar",
    "job_title" :"Business Analyst",
    "office":"Seattle",
    "department":"MD",
    "ph_no":"1234456791",
    "skype":"abc",
    "id":3,
},
{
    "fname":"Monica",
    "lname": "Gellar",
    "img":"https://www.pinkvilla.com/imageresize/friends_quiz_how_well_do_you_know_courteney_cox_aka_monica_geller_.jpg?width=752&t=pvorg",
    "email":"gellarm@gmail.com",
    "name": "Monica Gellar",
    "job_title" :"SharePoint Practice Head",
    "office":"Seattle",
    "department":"Human Resources",
    "ph_no":"1234456791",
    "skype":"abc",
    "id":4,
},
{
    "fname":"Joe",
    "lname": "Tribbiani",
    "img":"https://i.pinimg.com/originals/9b/0a/3d/9b0a3d123a4b2d5cae1c744d45fd20ce.jpg",
    "email":"joe@gmail.com",
    "name" :"Joe Tribbiani",
    "job_title" :"Recruiting Expert",
    "office":"India",
    "department":"IT",
    "ph_no":"1234456791",
    "skype":"abc",
    "id":5,
},{
    "fname":"Shyam",
    "lname": "Sundar",
    "img":"../assets/mine.jpg",
    "email":"shyam@gmail.com",
    "name" :"Shyam Sundar",
    "job_title" :"Recruiting Expert",
    "office":"Seattle",
    "department":"Sales",
    "ph_no":"1234456791",
    "skype":"abc",
    "id":6,
}]; 

var filteredData = [];



// Creating generateDiv Template

function generateDiv(employee){
    return `<div id=${employee.id} onclick="catchClickedModal(this)" class="employee-card col-md-auto">
        <span ><img src=${employee.img} alt=""></span>
        <span class="employee-text">
            <h6>${employee.name}</h6>
            <p>${employee.job_title}</p>
            <p>${employee.department}</p>
            <span>
                <i class="bi bi-telephone-fill"></i>
                <i class="bi bi-envelope-fill"></i>
                <i class="bi bi-chat-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-heart-fill"></i>
            </span>
        </span>                            
    </div>`
}

// validationFormData of form data
var validationStatus = false;
function validationFormData(data){
    console.log(data);
    if(!data.fname==""){
        var regName = /^[a-zA-Z]+$/;
        var name = data.fname;
        if(!regName.test(name)){
            alert('Invalid First Name');
           validationStatus=false;
        }
        else{
           validationStatus=true;;
        }

    }
    else{
        alert('Invalid First Name');
       validationStatus=false;
    }

    if(!data.lname==""){
        var regName = /^[a-zA-Z]+$/;
        var name = data["lname"];
        if(!regName.test(name)){
            alert('Invalid Last Name');
           validationStatus=false;
        }
        else{
           validationStatus=true;;
        }
    }
    else{
        alert('Invalid Last Name');
       validationStatus=false;
    }  
    
    if(!data.email==""){
        var regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var email = data.email;
        if(!regex.test(email)){
            alert("Invalid Email");
           validationStatus=false;
        }
        else{
           validationStatus=true;;
        }
    }

    

    var office_list = ["Seattle","India"]

    if(!office_list.includes(data.office)){
       validationStatus=false;
        
        alert("Invalid Office Selection");
    }
    else{
       validationStatus=true;;
    }

    var department_list = ["IT","Human Resources","MD","Sales"]
    
    if(!department_list.includes(data.department)){
        alert("Invalid Department Selection")
       validationStatus=false;        
    }
    else{
       validationStatus=true;;
    }

    

    var job_list = ["SharePoint Practice Head",".Net Devlopement","Recruiting Expert","BI Devlopement","Business Analyst"]
    
    if(!job_list.includes(data.job_title)){
        alert("Invalid Job Title")
       validationStatus=false;
    }
    else{
       validationStatus=true;;
    }

    if(!data.ph_no==""){
        if(!isNaN(data.ph_no) && data.ph_no.length==10){
            validationStatus=true;;                    
        }
        else{
            alert("Invalid Phone number");
            validationStatus=false; 
        }
    }
}

// Creating buttons 
function aTozButtonCreate() {
    var Chapter = "A".charCodeAt(0);
    for(i = 0; i < 26; i++) {
        var button = document.createElement("button");
        button.innerHTML = String.fromCharCode(Chapter+i);
        button.className = "btn hide-btn";
        var buttonDiv = document.getElementById("buttons");        
        buttonDiv.appendChild(button);        
    }
}

document.body.addEventListener("load", aTozButtonCreate());



// Search by top buttons
var buttonClickedStatus = false;
const buttonValueSearch = document.getElementById('buttons');
buttonValueSearch.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    };
    console.log(event.target.innerHTML);  
    if(buttonClickedStatus==false){
        buttonInputilter(event.target.innerHTML);
        event.target.style.color = "#0069d9";
        buttonClickedStatus = true;
        event.target.className = "btn hide-btn hide";
    }    
});


filterExecuted = false;
// Implementing search function using the button click
function buttonInputilter(text){
    var searchText = document.getElementById("emp");
    searchText.innerHTML = "";
    text = text.toLowerCase();
   
    var temporaryDatabase = [];
    if(filteredData.length>0){
        for(const i of filteredData){
            var employee = i;        
            if(employee.name.toLowerCase().startsWith(text)){
            var exisitingData = searchText.innerHTML + generateDiv(employee) ;
            searchText.innerHTML = exisitingData;
            filterExecuted = true;
            temporaryDatabase.push(employee);            
        }}
        filteredData = temporaryDatabase;
    }
    else{
        for(let i=0;i<employeeData.length;i++){
            var employee = employeeData[i];           
            if(employee.name.toLowerCase().startsWith(text)){
            var exisitingData = searchText.innerHTML + generateDiv(employee) ;
            searchText.innerHTML = exisitingData;
            filteredData.push(employee);
            filterExecuted = true;
            }        
        }
    }

    if(!filterExecuted){
        document.getElementById("emp").innerHTML="No Results :)"
    }
    
}

// to prevent the reload of form

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// Clear functionality for the input feild 
const clear = document.getElementById("clear-button");
clear.addEventListener("click",clearInputData);

function clearInputData(){
    document.getElementById("search-bar").value = "";
    display();
    clearFilter();
    clearDataFields();
}

function clearFilter(){
    var clear_class = document.getElementsByClassName("hide");
    for(let i=0;i<clear_class.length;i++){
        if((clear_class[i].className).includes("hide-btn")){
            clear_class[i].style.color = "white";
        }
        else{
        clear_class[i].style.color = "black";
        }
    }
    
}

// Implementing search functionality with filter by 

function searchdata(){
    var input_field = document.getElementById("search-bar").value;
    matchData(input_field,""); 
}

var previousDepartment="";
var previousOffice = "";
var previousJobTitle= "";

// Matching the data from search and left filter


function matchData(inputText,filter){
    var searchText = document.getElementById("emp");
    var parameter = document.getElementById("selected").value;
    searchText.innerHTML = "";
    inputText = inputText.toLowerCase();
    var flag = false;

    if(filteredData.length>0 && filter!=""){
        // It Implements search function on multiple fields
        var temporaryDatabase = [];
        for(const i of filteredData){
            var employee = i;
            if(employee[filter].toLowerCase().startsWith(inputText)){
                var exisitingData = searchText.innerHTML + generateDiv(employee) ;
                searchText.innerHTML = exisitingData;
                flag = true;
                temporaryDatabase.push(employee);
        }}
        filteredData=temporaryDatabase;
    }


    else if(filteredData.length==0 && filter!=""){
        for(let i=0;i<employeeData.length;i++){
            var employee = employeeData[i];
        
            if(employee[filter].toLowerCase().startsWith(inputText)){
            var exisitingData = searchText.innerHTML + generateDiv(employee) ;
            searchText.innerHTML = exisitingData;
            flag = true;
            filteredData.push(employee)
        }


    }}
    else if(filteredData.length>0 && filter==""){
        if(!inputText==""){
            for(const i of filteredData){
                var employee = i;       
                if(employee[parameter].toLowerCase().startsWith(inputText)){
                var exisitingData = searchText.innerHTML + generateDiv(employee) ;
                searchText.innerHTML = exisitingData;
                flag = true;
            
        }}}
        else{
            for(const employee of filteredData){                                
                var exisitingData = searchText.innerHTML + generateDiv(employee) ;
                searchText.innerHTML = exisitingData;
                flag = true;
            }
        }
    }
    else if(filteredData.length==0 && filter==""){
    for(let i=0;i<employeeData.length;i++){
        var employee = employeeData[i];        
        if(employee[parameter].toLowerCase().startsWith(inputText)){
        var exisitingData = searchText.innerHTML + generateDiv(employee) ;
        searchText.innerHTML = exisitingData;
        flag = true;
        filteredData.push(employee);
        }        
    }
    }
    if(flag==false){
        document.getElementById("emp").innerHTML="No Results :)";
    }
}




// to Create a url for the added employee pic
var targetImgFile = document.getElementById("file");
var tempImgAddress = "";
targetImgFile.addEventListener("change",function(event){
    tempImgAddress=URL.createObjectURL(event.target.files[0]);
}); 


var countId = employeeData.length+1;

// Adding new exmployee
function add(){    
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    data["name"] = data.fname + " " + data.lname;
    data["id"] = countId;
    data["img"] = tempImgAddress;
    validationFormData(data);
    if(validationStatus){
        countId+=1;
        employeeData.push(data);
        console.log(employeeData);        
        countOfEmployee = Array(11).fill(0);
        display();  
        modals(); 
        submitted();
        clearFilter();
        clearDataFields();        
    }
}

// To clear the input fields after submittion
function clearInputField(){
    var target_input=document.querySelectorAll("#myForm input");
    for(let i=0;i<target_input.length-1;i++){
        target_input[i].value="";
    }
}

// To raise an alert to the user when the data is submitted correctly
function submitted(){
    alert("Data Submitted");
}


var countOfEmployee = Array(11).fill(0);
// Displaying data on load 
function display(){
    var searchText = document.getElementById("emp");
    searchText.innerHTML = "";

    for(let i=0;i<employeeData.length;i++){
        var employee = employeeData[i]      
        var exisitingData = searchText.innerHTML +generateDiv(employee);
        searchText.innerHTML = exisitingData;
        updateCountArray(employee.department,employee.office,employee.job_title);
    }
    countDisplay();
}

document.body.addEventListener("load", display());


// to Find the count of each field in the department , office and job title
function updateCountArray(dept,office,title){

    // Department Count

    if(dept == "IT"){
        countOfEmployee[0]+=1;
    }
    if(dept == "Human Resources"){
        countOfEmployee[1]+=1;
    }
    if(dept == "MD"){
        countOfEmployee[2]+=1;
    }
    if(dept =="Sales"){
        countOfEmployee[3]+=1;
    }

    // Ofiice Count

    if(office =="Seattle"){
        countOfEmployee[4]+=1;
    }
    else{
        countOfEmployee[5]+=1;
    }

    // Title Count

    if(title =="SharePoint Practice Head"){
        countOfEmployee[6]+=1;
    }
    else if(title == ".Net Devlopement"){
        countOfEmployee[7]+=1;
    }
    else if(title =="Recruiting Expert"){
        countOfEmployee[8]+=1;
    }
    else if(title == "BI Devlopement"){
        countOfEmployee[9]+=1;
    }
    else{
        countOfEmployee[10]+=1;
    }
    
}




// To display the count of department, job title and office in the left filter
function countDisplay(){
    var liListData  = document.querySelectorAll("li");
    
    for(let i=1;i<liListData .length-1;i++){
        if(!liListData [i].innerHTML.includes("(")){
            liListData [i].innerHTML+="("+countOfEmployee[i-1]+")";
            
        }
        else{
            liListData [i].innerHTML = liListData[i].innerHTML.replace(countOfEmployee[i-1]-1,countOfEmployee[i-1])
            
        }
    }
}
// delete the previous data of filters
function clearDataFields(){
    previousDepartment="";
    previousJobTitle="";
    previousOffice="";
    countOfEmployee = Array(11).fill(0);
    buttonClickedStatus = false;
    filteredData = [];
}

// Left filter function

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  };
  var html = event.target.innerHTML;
  var name = event.target.name;

  if(name == "department"){
    if(previousDepartment==""){        
        previousDepartment=html;
        matchData(html,name);        
        event.target.style.color = "#0069d9";
        event.target.className = "hide";
    }
  }
  else if(name == "office"){
    if(previousOffice ==""){
        previousOffice=html;
        matchData(html,name);
        event.target.style.color = "#0069d9";
        event.target.className = "hide";
    }
  }
  else{
    if(previousJobTitle==""){
        previousJobTitle=html;
        matchData(html,name);
        event.target.style.color = "#0069d9";
        event.target.className = "hide";
    }
  }
  console.log(html,name);
});


// Modal templete

function generatemodal(data){
    return `<div class="modal fade ${data.id}" id="${data.id}" data-backdrop="static" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${data.fname +" " +data.lname}</h5>
        </div>
        <div class="modal-body custom-body">
          <img src=${data.img} class="modal-img" >
          <form id="${data.fname + data.id}">
            <label for="">Image</label>
            <input id="file" type="file"  class="inputDisabled" name="img" value="${data.img}" disabled multiple>         
            
            <label for="">First Name</label>
            <input type="text" class="inputDisabled" name="fname" placeholder ="${data.fname}" value="${data.fname}" required disabled>

            <label for="">Last Name</label>
            <input type="text" class="inputDisabled" name="lname" placeholder ="${data.lname}" value="${data.lname}" disabled>

            <label for="">Email</label>
            <input type="text" class="inputDisabled" name="email" placeholder ="${data.email}" value="${data.email}" disabled>

            <label for="">Job Title</label>
            <input type="text" class="inputDisabled" name="job_title" placeholder ="${data.job_title}" value="${data.job_title}" disabled>

            <label for="">Office</label>
            <input type="text" class="inputDisabled" name="office" placeholder ="${data.office}" value="${data.office}" disabled>

            <label for="">Department</label>
            <input type="text" class="inputDisabled" name="department" placeholder ="${data.department}" value="${data.department}" disabled>

            <label for="">Phone Number</label>
            <input type="text" class="inputDisabled" name="ph_no" placeholder ="${data.ph_no}" value="${data.ph_no}" disabled>

            <label for="">Skype Id</label>
            <input type="text" class="inputDisabled" name="skype" placeholder ="${data.skype}" value="${data.skype}" disabled>
            
            <div class="modal-footer">
                <button type="button" id="modal-edit" onclick="toogle_modal_button()" class="btn btn-info">Edit</button>                
                <button type="button" id="modal-close" class="btn btn-secondary" onclick="modals()" data-dismiss="modal">Close</button>            
            </div>
            
        </form>
        </div>
      </div>
    </div>
  </div>`
}


// Loading modals to the html page

function modals(){
    var modaldata = document.getElementById("modal-section-data");
    modaldata.innerHTML = "";
    for(let i=0;i<employeeData.length;i++){
        var employee = employeeData[i];    
        var exisitingData = modaldata.innerHTML + generatemodal(employee);
        modaldata.innerHTML = exisitingData;
    }
}
document.body.addEventListener("load",modals());

var ClickedIdValue = 0; //to know which modal was clicked

// To show which modal to display
function catchClickedModal(event){
    ClickedIdValue = event.id;
    $("."+ClickedIdValue.toString()).modal("show");    
}


// var url_modal_img = Array(employeeData.length).fill("");; // To store the new url created when uploaded in the modal

// Event listener to create a url for the uploded pic
var urlModalImg ="";
function temporaryImgListener(){
    var targetModalImg = document.querySelectorAll("#file.inputDisabled");
    
    for(let i=0;i<targetModalImg.length;i++){
        targetModalImg[i].addEventListener("change",function(event){
            urlModalImg= URL.createObjectURL(event.target.files[0]);
            document.querySelectorAll(".modal-img")[ClickedIdValue-1].src = urlModalImg;
            console.log(urlModalImg);
    });
}
}
document.addEventListener("change",temporaryImgListener());


var modalEditStatus = false;
// Toggling the input fields , find and replace the previous data , load the display and modals

function toogle_modal_button(){
    if(modalEditStatus == false){
        $(".inputDisabled").prop("disabled",false);        
        document.querySelectorAll("#modal-edit")[parseInt(ClickedIdValue)-1].innerHTML = "Save Changes";
        document.querySelectorAll("#modal-edit")[parseInt(ClickedIdValue)-1].className = "btn btn-success";
        document.querySelectorAll("#modal-close")[parseInt(ClickedIdValue)-1].disabled= true;
        modalEditStatus=true;
    }
    else{
        
        var tmpImg = employeeData[ClickedIdValue-1].img;
        const form_data = document.querySelectorAll('form')[ClickedIdValue];
        const modalFormOutput = Object.fromEntries(new FormData(form_data).entries());            
        
        // validationFormData of the data and store only when the data required fields are entered
        if(validationStatus){
            modalFormOutput["name"] = modalFormOutput.fname + " " + modalFormOutput.lname;
            
            if(urlModalImg==""){
                modalFormOutput["img"] = tmpImg;
            }
            else{
                modalFormOutput["img"] = urlModalImg;
                console.log(urlModalImg);               
                
            }
            modalFormOutput["id"]=ClickedIdValue;
            employeeData[ClickedIdValue-1] = modalFormOutput;
            $(".inputDisabled").prop("disabled",true);           
            document.querySelectorAll("#modal-edit")[parseInt(ClickedIdValue)-1].innerHTML = "Edit";
            document.querySelectorAll("#modal-edit")[parseInt(ClickedIdValue)-1].className = "btn btn-info";
            document.querySelectorAll("#modal-close")[parseInt(ClickedIdValue)-1].disabled= false;
            modalEditStatus=false;
            display();            
            temporaryImgListener();
            $("."+ClickedIdValue.toString()).modal("hide");
            modals();
            validationStatus=false;
            
            
        }
        else{
            validationFormData(modalFormOutput);
        }  
        
}}


// To toggle the buttons 
function jsHideButtons(){
    var hide = document.getElementsByClassName("hide-btn");
    
    
    for(let i=0;i<hide.length;i++){
        var x = hide[i];
        if(x.style.display == "none"){
            x.style.display = "inline";
        }
        else{
            x.style.display = "none";
        }
    }
}

var executed = false; // To exectute it only one time 
$(window).on('resize', function() {
    if($(window).width()<1240 && executed==false){
        jsHideButtons();
        executed=true;
        document.querySelectorAll(".person-button")[0].className+=" hidden";
        document.querySelectorAll(".person-button")[1].className="btn btn-primary person-button";
        
    }
})

// To implement the view more / view less  - toggle 
function liDisplay(){
    var targeted_li = document.getElementsByClassName("li-hide");
    if(targeted_li[0].style.display=="none"){
        for(let i=0;i<targeted_li.length;i++){
            targeted_li[i].style.display ="";
        }
        document.getElementsByClassName("li-color")[0].innerHTML="View Less";
    }
    else{
        for(let i=0;i<targeted_li.length;i++){
            targeted_li[i].style.display ="none";
        }
        document.getElementsByClassName("li-color")[0].innerHTML="View More";
    }
}

document.addEventListener("load",liDisplay())

// To Show filter Window in smaller screen
var applyFilterClicked = false; 
function displayFilters(){
    var left_filters = document.getElementsByClassName("left-display")[0]
    if(left_filters.style.display=="none" || left_filters.style.display==""){
        left_filters.style.display = "block";
        left_filters.style.position= "absolute";
        left_filters.style.backgroundColor = "white";
        left_filters.style.zIndex = "1";
        left_filters.style.border = "1px solid black";
        left_filters.style.top="135px";
        left_filters.style.left = "23px";
        applyFilterClicked=true;

    }
    else{
        left_filters.style.display="none";
    }
}

$(window).on('resize', function() {
    if($(window).width()>650 && applyFilterClicked){
        document.getElementsByClassName("left-display")[0].style="";
        document.getElementsByClassName("filter-display").style.display="none";
    }
})