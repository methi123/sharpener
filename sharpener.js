const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const obj = {
    username,
    password
  }
  let display = document.createElement('p');
 display.className = 'display';
 display.textContent = username+' '+password+' ';
 let delete_btn = document.createElement('button');
 delete_btn.className = 'delete';
 delete_btn.textContent = 'X'; 
 let edit_btn = document.createElement('button');
 edit_btn.className = 'edit';
 edit_btn.textContent = 'Edit';

 let task = document.getElementById('task');
 task.appendChild(display);
 display.appendChild(delete_btn);
 display.appendChild(edit_btn);

 


  // store user details in local storage

  localStorage.setItem("object",JSON.stringify(obj))

});
let deleteitem = document.getElementById('task');
deleteitem.addEventListener('click', remove);
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            task.removeChild(li);

        }
    
}
    else if(e.target.classList.contains('edit')){
        if(confirm('Are You Sure?')){

            var li = e.target.parentElement;
            let user = li.textContent.split(' ')[0];
            let pass = li.textContent.split(' ')[1];
           let user_input = document.getElementById('username');
           user_input.value=user;
           let pass_input = document.getElementById('password');
           pass_input.value=pass;
            task.removeChild(li);
            

        }
    }
};
