
var bookingList=[];

function addData(){
    var status=validate();

    // if(status){
    //     document.getElementById('').innerHTML='<span style="color:green">Product added</span>';
    //     showProducts();
    // }
    // else{
    //     document.getElementById('').innerHTML='<span style="color:red">Error!!!</span>';
    // }
}

function showData(){
    // var pid = document.getElementById('txtpid').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var fromcity = document.getElementById('fromcity').value;
    var tocity = document.getElementById('tocity').value;
    var classtype = document.getElementById('classtype').value;
    var periodfrom = document.getElementById('periodfrom').value;
    var periodto = document.getElementById('periodto').value;

    document.write('bookingdata')=("List of the" + fromcity +'_'+ tocity +'flights Operating between the ' + periodfrom + 'and the' + periodto);

   bookingList.push({"Id":pid,"pname":pname,"type":ptype, "price":price}); //array ,,,obj are in key val pair
   
   var tableHeader='<table><thead><tr><th>Id</th><th>Pname</th><th>Ptype</th><th><Price></th></thead><tbody>';
   var tableBody='';
   for(let i=0; i<productList.length; i++){
       tableBody = tableBody + '<tr><td>' + productList[i].id +'</td><td>' + productList[i].pname + '</td><td>' + productList[i].ptype + '</td><td>' + productList[i].price +'</tr>';
    }
    document.getElementById('bookingdata').innerHTML = tableHeader +tableBody +'</thead></tbody>';
}