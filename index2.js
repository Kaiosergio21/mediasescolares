

const media = Number(sessionStorage.getItem('media'));

// Display the results




let message = "";
if (media >= 8) {
    message= "alta";
   

}else if (media >= 6) {
 message= "normal";
} 

else {
 message= "baixa";
}

document.querySelector('#resultado').innerHTML = media.toFixed(2);
document.querySelector('#mensagem').innerHTML = message;
// Exibe a mensagem no elemento com id 'mensagem'

function redirectToInputPage() {
    // Redirect back to the input page
    window.location.href = 'calculo.html';

    
}