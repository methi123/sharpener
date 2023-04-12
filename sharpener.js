const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const obj = {
    amount,
    description,
    category
  }

  let display = document.createElement('p');
 display.className = 'display';
 display.textContent = amount+' '+description+' '+category+' ';
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
            let categ = li.textContent.split(' ')[2];
           let user_input = document.getElementById('amount');
           user_input.value=user;
           let pass_input = document.getElementById('description');
           pass_input.value=pass;
           let category_input = document.getElementById('category');
           category_input.value = categ.value;

            task.removeChild(li);
            

        }
    }
};
