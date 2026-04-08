function display(data) {
    console.log("Data:" , data);
}
function show(a,b,dis){
    res= a+b;
    dis(res);
}
show(3,4,display);