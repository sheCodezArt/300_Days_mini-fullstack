// let olElement;

// function addTask() {
//   const inputSpace = document.getElementById('text');
  
//   let task = inputSpace.value.trim();
  
//   if (task) {
//     if (!olElement) {
//       olElement = document.createElement('ol');
      
//       const displayDiv = document.querySelector('.container');
      
//       displayDiv.appendChild(olElement);
//     }
//     let eachTask = document.createElement('li');
//     eachTask.textContent = task;
    
//     olElement.appendChild(eachTask);
    
//     inputSpace.value = '';
//   }
// }

// let olElement;

// function addTask() {
//   const inputSpace = document.getElementById('text');
//   let task = inputSpace.value.trim();

//   if (task) {
//     if (!olElement) {
//       olElement = document.createElement('ol');
//       const displayDiv = document.querySelector('.container');
//       displayDiv.appendChild(olElement);
//     }

//     let eachTask = document.createElement('li');
//     eachTask.textContent = task;

//     let iconContainer = document.createElement('span');
//     iconContainer.classList.add('icons');

//     let editIcon = document.createElement('span');
//     editIcon.innerHTML = `<img src="pen.png" alt="pencil">`;
//     editIcon.classList.add('edit-icon');
//     editIcon.onclick = function () {
//       let newText = prompt("Edit task:", eachTask.textContent);
//       if (newText) {
//         eachTask.firstChild.textContent = newText;
//       }
//     };

//     let deleteIcon = document.createElement('span');
//     deleteIcon.innerHTML = `<img src="cancel.png" alt="pencil">`;
//     deleteIcon.classList.add('delete-icon');
//     deleteIcon.onclick = function () {
//       olElement.removeChild(eachTask);
//       if (olElement.children.length === 0) {
//         olElement.remove();
//         olElement = null;
//       }
//     };

//     iconContainer.appendChild(editIcon);
//     iconContainer.appendChild(deleteIcon);
//     eachTask.appendChild(iconContainer);
//     olElement.appendChild(eachTask);

//     inputSpace.value = '';
//   }
// }

let olElement;

function addTask() {
  const inputSpace = document.getElementById('text');
  let task = inputSpace.value.trim();

  if (task) {
    if (!olElement) {
      olElement = document.createElement('ol');
      const displayDiv = document.querySelector('.container');
      displayDiv.appendChild(olElement);
    }

    let eachTask = document.createElement('li');

    let taskText = document.createElement('span');
    taskText.textContent = task;

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('task-images');

    let img1 = document.createElement('img');
    img1.src = "img/cancel.png";
    img1.alt = "cancel";

    let img2 = document.createElement('img');
    img2.src = "img/pen.png";
    img2.alt = "edit";

    img2.onclick = function () {
      let newText = prompt("Edit task:", taskText.textContent);
      if (newText) {
        taskText.textContent = newText;
      }
    };

    img1.onclick = function () {
      olElement.removeChild(eachTask);
      if (olElement.children.length === 0) {
        olElement.remove();
        olElement = null;
      }
    };

    imgContainer.appendChild(img1);
    imgContainer.appendChild(img2);

    eachTask.appendChild(taskText);
    eachTask.appendChild(imgContainer);
    
    olElement.appendChild(eachTask);

    inputSpace.value = '';
  }
}

