//declare golabl var
var productList=[];

setInterval(function(){
    var date=new Date();
    document.getElementById('todaydate').innerText=date.toLocaleTimeString();
},1000)

setTimeout(function(){
    var date=new Date();
    document.getElementById('todaytimeout').innerText=date.toLocaleTimeString();
},5000)

function addProduct(){
    var status=validate();

    if(status){
        document.getElementById('msg').innerHTML='<span style="color:green">Product added</span>';
        showProducts();
    }
    else{
        document.getElementById('msg').innerHTML='<span style="color:red">Error!!!</span>';
    }
        
 }

 function validate(){
     var flag=false;
     var pid = document.getElementById('txtpid').value;
     var pname = document.getElementById('txtpname').value;
     var ptype = document.getElementById('ddltype').value;
     var price = document.getElementById('txtprice').value;
     if(pid!='' && pname!='' && ptype!='Select' && price!=''){
        flag = true;
     }else{
        flag = false;
     }
     
     return flag;

 }
 function showProducts(){
    //Json - {key:value}
    //()-  methods
    //{} - object
    //[] - array
    //[{}]- array of objects
    var pid = document.getElementById('txtpid').value;
     var pname = document.getElementById('txtpname').value;
     var ptype = document.getElementById('ddltype').value;
     var price = document.getElementById('txtprice').value;
    productList.push({"Id":pid,"pname":pname,"type":ptype, "price":price}); //array ,,,obj are in key val pair
    
    var tableHeader='<table><thead><tr><th>Id</th><th>Pname</th><th>Ptype</th><th><Price></th></thead><tbody>';
    var tableBody='';
    for(let i=0; i<productList.length; i++){
        tableBody = tableBody + '<tr><td>' + productList[i].id +'</td><td>' + productList[i].pname + '</td><td>' + productList[i].ptype + '</td><td>' + productList[i].price +'</tr>';
     }
     document.getElementById('productdata').innerHTML = tableHeader +tableBody +'</thead></tbody>';
}