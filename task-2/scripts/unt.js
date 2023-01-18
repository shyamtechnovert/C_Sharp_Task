
var em_data = [{
    "fname":"Chandler",
    "lname": "Bing",
    "img":"https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg",
    "email":"bing@gmail.com",
    "name":"Chandler Bing",
    "job_title" :".Net Devlopement",
    "office":"Seattle",
    "department":"IT",
    "ph_no":"123445566",
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
    "ph_no":"123445566",
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
    "ph_no":"123445566",
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
    "ph_no":"123445566",
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
    "ph_no":"123445566",
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
    "ph_no":"123445566",
    "skype":"abc",
    "id":6,
}]; 

var filtered_data = new Set();



// Creating div Template

function div(emp){
    return `<div id=${emp.id} onclick="catch_modal(this)" class="emp-card">
        <span ><img src=${emp.img} alt=""></span>
        <span class="emp-text">
            <h6>${emp.name}</h6>
            <p>${emp.job_title}</p>
            <p>${emp.department}</p>
            <span>
                <i class="fa-solid fa-square-phone"></i>
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-heart"></i>
            </span>
        </span>                            
    </div>`
}


// Creating buttons 
function onload() {
    var Chapter = "A".charCodeAt(0);
    for(i = 0; i < 26; i++) {
        var button = document.createElement("button");
        button.innerHTML = String.fromCharCode(Chapter+i);
        button.className = "btn hide_btn";
        var buttonDiv = document.getElementById("buttons");        
        buttonDiv.appendChild(button);
        button.setAttribute("onClick","trial(this)");
        
    }
}
document.body.addEventListener("load", onload());



// Search by top buttons
const button_search = document.getElementById('buttons');
button_search.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    };


    console.log(event.target.innerHTML);   
    button_filter(event.target.innerHTML);
});

// Implementing search function using the button click
function button_filter(text){
    var searchText = document.getElementById("em");
    searchText.innerHTML = "";
    text = text.toLowerCase();
    executed = false;
    var temporary_database = new Set();
    if(filtered_data.size>0){
        for(const i of filtered_data){
            var emp = i;        
            if(emp["name"].toLowerCase().startsWith(text)){
            var exisiting = searchText.innerHTML + div(emp) ;
            searchText.innerHTML = exisiting;
            executed = true;
            temporary_database.add(emp);            
        }}
        filtered_data = temporary_database;

    }
    else{
        for(let i=0;i<em_data.length;i++){
            var emp = em_data[i];        
            
            if(emp["name"].toLowerCase().startsWith(text)){
            var exisiting = searchText.innerHTML + div(emp) ;
            searchText.innerHTML = exisiting;
            filtered_data.add(emp);
            executed = true;
            }        
        }
    }

    if(!executed){
        document.getElementById("em").innerHTML="No Results :)"
    }
    
}

// to prevent the reload of form

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// Clear functionality for the input feild 
const clear = document.getElementById("clear-button");
clear.addEventListener("click",clearinput);

function clearinput(){
    document.getElementById("search-bar").value = "";
    display();
    filtered_data = new Set();
    location.reload();
}


// Implementing search functionality with filter by 

function searchdata(){
    var input_field = document.getElementById("search-bar").value;
    match(input_field,""); 
}

var prev_department="";
var prev_office = "";
var prev_job_title= "";

// Matching the data from search and left filter


function match(inputText,filter){
    var searchText = document.getElementById("em");
    var parameter = document.getElementById("selected").value;
    searchText.innerHTML = "";
    inputText = inputText.toLowerCase();
    var flag = false;    

    if(filtered_data.size>0 && filter!=""){
        // It Implements search function on multiple fields
        var temporary_database = new Set();
        for(const i of filtered_data){
            var emp = i;
            if(emp[filter].toLowerCase().startsWith(inputText)){
                var exisiting = searchText.innerHTML + div(emp) ;
                searchText.innerHTML = exisiting;
                flag = true;
                temporary_database.add(emp);
        }}
        filtered_data=temporary_database;
    }


    else if(filtered_data.size==0 && filter!=""){
        for(let i=0;i<em_data.length;i++){
            var emp = em_data[i];
        
            if(emp[filter].toLowerCase().startsWith(inputText)){
            var exisiting = searchText.innerHTML + div(emp) ;
            searchText.innerHTML = exisiting;
            flag = true;
            filtered_data.add(emp)
        }


    }}
    else if(filtered_data.size>0 && filter==""){
        if(!inputText==""){
        for(const i of filtered_data){
            var emp = i;       
            if(emp[parameter].toLowerCase().startsWith(inputText)){
            var exisiting = searchText.innerHTML + div(emp) ;
            searchText.innerHTML = exisiting;
            flag = true;
            
        }}}
        else{
            for(let i=0;i<em_data.length;i++){
                var emp = em_data[i]        
                
                if(emp[parameter].toLowerCase().startsWith(inputText) || inputText==""){
                var exisiting = searchText.innerHTML + div(emp) ;
                searchText.innerHTML = exisiting;
                flag = true;
                filtered_data.add(emp)
                }        
            }
        }
    }
    else if(filtered_data.size==0 && filter==""){
    for(let i=0;i<em_data.length;i++){
        var emp = em_data[i]        
        
        if(emp[parameter].toLowerCase().startsWith(inputText)){
        var exisiting = searchText.innerHTML + div(emp) ;
        searchText.innerHTML = exisiting;
        flag = true;
        filtered_data.add(emp)
        }        
    }
    }
    if(flag==false){
        document.getElementById("em").innerHTML="No Results :)"
    }
}





var target_img_file = document.getElementById("file");
var temp_img_address = "";
target_img_file.addEventListener("change",function(event){
    temp_img_address=URL.createObjectURL(event.target.files[0]);
}); 


var count_id = em_data.length+1;
// Adding new exmployee
function add(){

    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(data);
    data["name"] = data.fname + " " + data.lname;
    data["id"] = count_id;
    data["img"] = temp_img_address;
    count_id+=1;
    em_data.push(data);
    console.log(em_data);
    count_emp = Array(11).fill(0);
    display();  
    modals();    
}


function submitted(){
    alert("Data Submitted");
}

var count_emp = Array(11).fill(0);

// Displaying data on load 
function display(){
    var searchText = document.getElementById("em");
    searchText.innerHTML = "";

    for(let i=0;i<em_data.length;i++){
        var emp = em_data[i]      
        var exisiting = searchText.innerHTML +div(emp);
        searchText.innerHTML = exisiting;
        count_add(emp.department,emp.office,emp.job_title);
    }
    count_display();
}

document.body.addEventListener("load", display());

function count_add(dept,office,title){

    // Department Count

    if(dept == "IT"){
        count_emp[0]+=1;
    }
    else if(dept == "Human Resources"){
        count_emp[1]+=1;
    }
    else if(dept == "MD"){
        count_emp[2]+=1;
    }
    else if(dept =="Sales"){
        count_emp[3]+=1;
    }

    // Ofiice Count

    if(office =="Seattle"){
        count_emp[4]+=1;
    }
    else{
        count_emp[5]+=1;
    }

    // Title Count

    if(title =="SharePoint Practice Head"){
        count_emp[6]+=1;
    }
    else if(title == ".Net Devlopement"){
        count_emp[7]+=1;
    }
    else if(title =="Recruiting Expert"){
        count_emp[8]+=1;
    }
    else if(title == "BI Devlopement"){
        count_emp[9]+=1;
    }
    else{
        count_emp[10]+=1;
    }
    
}
function trial(event){
    event.style.color = "black";
}


function count_display(){
    var temp = document.querySelectorAll("li");
    
    for(let i=1;i<temp.length-1;i++){
        if(!temp[i].innerHTML.includes("(")){
            temp[i].innerHTML+="("+count_emp[i-1]+")";
            
        }
        else{
            temp[i].innerHTML = temp[i].innerHTML.replace(count_emp[i-1]-1,count_emp[i-1])
            
        }
    }
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
    if(prev_department==""){
        prev_department=html;
        match(html,name);
        event.target.style.color = "#00b1fc";
    }
  }
  else if(name == "office"){
    if(prev_office ==""){
        prev_office=html;
        match(html,name);
        event.target.style.color = "#00b1fc";
    }
  }
  else{
    if(prev_job_title==""){
        prev_job_title=html;
        match(html,name);
        event.target.style.color = "#00b1fc";
    }
  }
  
//   match(html,name);
  console.log(html,name);

});


// Modal templete

function generatemodal(data){
    return `<div class="modal fade ${data.id}" id="${data.id}" data-backdrop="static" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${data.fname +" " +data.lname}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img src=${data.img} class="modal_img" >
          <form id="${data.fname + data.id}">
            <label for="">Image</label>
            <input id="file" type="file"  class="inputDisabled" name="img" value="${data.img}" disabled>         
            
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
                <button type="button" id="modal_edit" onclick="toogle_modal_button()" class="btn btn-info">Edit</button>
                
                <button type="button" class="btn btn-secondary" onclick="modals()" data-dismiss="modal">Close</button>
            
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
    for(let i=0;i<em_data.length;i++){
        var emp = em_data[i];    
        var exisiting = modaldata.innerHTML + generatemodal(emp);
        modaldata.innerHTML = exisiting;
    }
    console.log("done");

}
document.body.addEventListener("load",modals());

var id_value = 0; //to know which modal was clicked

function catch_modal(event){

    var temp = event.id;
    id_value = temp;
    
    $("."+temp.toString()).modal("show");    
}



var target_modal_img = document.querySelectorAll("#file.inputDisabled")[id_value];
target_modal_img.addEventListener("change",function(event){
    temp_img_address=URL.createObjectURL(event.target.files[0]);
    console.log("enter");
});
var toogle_edit = false;
// Enabling the input fields , find and replace the previous data , load the display and modals

function toogle_modal_button(){
    if(toogle_edit == false){
        $(".inputDisabled").prop("disabled",false);
        toogle_edit=true;
        document.getElementById("modal_edit").innerHTML = "Save Changes";
        document.getElementById("modal_edit").className = "btn btn-success";

    }
    else{
        var obj_name = document.querySelectorAll('form')[id_value][1].placeholder;
        var index = em_data.findIndex((el) => el.fname === obj_name);
        var tmp_img = em_data[index].img;
        const form_data = document.querySelectorAll('form')[id_value];
        const data_output = Object.fromEntries(new FormData(form_data).entries());    
        
        data_output["name"] = data_output.fname + " " + data_output.lname;
        // if(temp_img_address==""){
        //     data_output["img"] = tmp_img;
        // }
        // else{
        //     data_output["img"] = temp_img_address;
        // }
        data_output["img"] = temp_img_address;
        em_data[index] = data_output;
        $(".inputDisabled").prop("disabled",true);
        display();
        toogle_edit=false;
        document.getElementById("modal_edit").innerHTML = "Edit";
        document.getElementById("modal_edit").className = "btn btn-info";
    }
}


function js_hide(){
    var hide = document.getElementsByClassName("hide_btn");
    
    for(let i=0;hide.length;i++){
        var x = hide[i];    
        x.style.display = "none";       
    }
}

$(window).on('resize', function() {
    if($(window).width()<900){
        js_hide();
    }
})


function li_display(){
    var tar = document.getElementsByClassName("li_hide");
    if(tar[0].style.display=="none"){
        for(let i=0;i<tar.length;i++){
            tar[i].style.display ="";
        }
        document.getElementsByClassName("li_color")[0].innerHTML="View Less";
    }
    else{
        for(let i=0;i<tar.length;i++){
            tar[i].style.display ="none";
        }
        document.getElementsByClassName("li_color")[0].innerHTML="View More";
    }
}

document.addEventListener("load",li_display())


