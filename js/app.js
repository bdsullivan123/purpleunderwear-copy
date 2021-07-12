var form = document.getElementById("myForm");

function handleForm(event) { 
    event.preventDefault(); 

    var node = document.createElement("Li");

    var text = document.getElementById("text").value;

    var textnode = document.createTextNode(text);

    node.appendChild(textnode);

    document.getElementById("orderedList").appendChild(node);
} 

form.addEventListener('submit', handleForm);
