//declare golabl var
var productList=[];
function addProduct(){
    var status=validate();

    if(status){
        document.getElementById('msg').innerHTML='<span style="color:green">Product added</span>';
        showProducts(id,name, type, price);
    }
        
     else
        document.getElementById('msg').innerHTML='<span style="color:red">Error!!!</span>';
 }

 function validate(){
     var flag=false;
     var pid = document.getElementById('txtpid').value;
     var pname = document.getElementById('txtpname').value;
     var ptype = document.getElementById('ddltype').value;
     var price = document.getElementById('txtprice').value;
     if(pid!='' && pname!='' && ptype!='Select' && price!='')
     flag=true;
     else
     flag=false;

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
    
    var tableHeader='<table><thead><tr><th>Id</th><th>Pname</th><th>Ptype</th><th><Price></th></tr></table>';
    var tableBody='';
    for(let i=0; i<productList.length; i++){

    }

}