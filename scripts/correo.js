const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_plbzk8z';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Compra realizada.');
      inicio();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


function inicio(){
    window.location.href = "../index.html";
}
