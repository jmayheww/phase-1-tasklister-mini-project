document.addEventListener("DOMContentLoaded", () => {
  const inputTask = document.getElementById("create-task-form");

  const tasks = document.querySelector("#tasks");

  inputTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInputText = e.target.new_task_description.value;
    const colorPriority = e.target.priority.value;

    buildTodo(taskInputText, colorPriority);
    inputTask.reset();
  });

  function buildTodo(todo, color) {

    const li = document.createElement("li");
    const textHolder = document.createElement("span");
    const button = document.createElement("button");

    textHolder.textContent = `${todo}`;
    textHolder.style.color = `${color}`;
    button.textContent = "X";
    button.addEventListener("click", handleDelete);

    li.appendChild(textHolder);
    li.appendChild(button);
    tasks.appendChild(li);

    textHolder.addEventListener("click", editTodo);
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }

  function editTodo(e) {
    const orignalElement = e.target;
    const originalText = e.target.innerText;
    const innerColor = e.target.style.color;
    const todoContainer = e.target.parentNode;

    const editableText = document.createElement("input");
    editableText.value = originalText;

    todoContainer.replaceChild(editableText, orignalElement);

    const newInputButton = document.createElement("button");
    todoContainer.appendChild(newInputButton);

    newInputButton.textContent = "Submit Edits";

    // editableText.type = "text";



    const newSpanElementAfterEditSubmit = document.createElement("span");

    newInputButton.addEventListener("click", function (e) {
      const textPendingSubmission = e.target.parentNode.children[0].value;

      todoContainer.replaceChild(newSpanElementAfterEditSubmit, editableText);
      newSpanElementAfterEditSubmit.textContent = textPendingSubmission;
      newSpanElementAfterEditSubmit.style.color = innerColor;

      newInputButton.remove();



    });


  }
});
