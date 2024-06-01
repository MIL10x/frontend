function answer(){
    var inputdata1 = prompt("enter your age my friend");
    var outputdata1 = (inputdata1 - 2024)*365;
    var text1=document.createElement("h2");
    var textanswer = document.createTextNode("you are "+outputdata1+" days old");
    text1.setAttribute('id','ageindays');
    text1.appendChild(textanswer);
    document.getElementById('answerbox').appendChild(text1);
}
function reset(){
    document.getElementById('ageindays').remove();
}
function generatecat(){
    var img = document.createElement('img');
    img.src='https://picsum.photos/300/300';
    var div = document.getElementById('catgenerator');
    div.appendChild(img);
}
function remove(){
    document.getElementById('catgenerator').remove();
}