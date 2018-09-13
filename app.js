$(document).ready(function() {
  var editActive = false;
  var tempTitle = '';

  $('.createTodo').click(function() {
      $('.createList').toggle(125);
    
  });

  $('.submitNewTodo').click(function() {
        if (editActive) {

      $(`tr[data-storage="${tempTitle}"]`).remove();
      }

      var inputTitle = $(".inputTitle").val();
      var inputDescription = $(".inputDescription").val();
      var inputDate = $(".inputDate").val();
      var inputPriority = $(".inputPriority").val();
      
      $(".inputTitle").val("");
      $(".inputDescription").val("");
      $(".inputDate").val("");
      $(".inputPriority").prop("selectedIndex", 0);
      
      var deleteTodo = `<button type="button" class="deleteButton">Delete</button>`;
      var editTodo = `<button type="button" class="editButton">Edit</button>`;
           // use ` (backtick) before and after statement to replace quotes and use ${variable} for variables
      if (inputPriority === "Low") {
        var singleTodoList = `<tr class="newSingleTodo Low" data-storage="${inputTitle}"><td>${inputTitle}</td><td>${inputDescription}</td><td class="countDown" title="countdown timer">${inputDate}</td><td>${inputPriority}</td><td>${editTodo}${deleteTodo}</td></tr>`;

      };

       if (inputPriority === "Medium") {
        var singleTodoList = `<tr class="newSingleTodo Medium" data-storage="${inputTitle}"><td>${inputTitle}</td><td>${inputDescription}</td><td class="countDown" title="countdown timer">${inputDate}</td><td>${inputPriority}</td><td>${editTodo}${deleteTodo}</td></tr>`;

      };

       if (inputPriority === "High") {
        var singleTodoList = `<tr class="newSingleTodo High" data-storage="${inputTitle}"><td>${inputTitle}</td><td>${inputDescription}</td><td class="countDown" title="countdown timer">${inputDate}</td><td>${inputPriority}</td><td>${editTodo}${deleteTodo}</td></tr>`;

      };

      // var singleTodoList = `<tr class="newSingleTodo" data-storage="${inputTitle}"><td>${inputTitle}</td><td>${inputDescription}</td><td>${inputDate}</td><td>${inputPriority}</td><td>${editTodo}${deleteTodo}</td></tr>`;
      $(".todoList").append(singleTodoList);

      $('.createList').toggle(125);
    
  });

  $(".todoList").on("click", ".deleteButton", function() {
    var deletion = false;
    if (confirm('Confirm delete')) {
      deletion = true;
    }  
    else { 
      deletion = false;
    }
    if (deletion === true) {
      $(this).closest("tr").remove();
    }
  });

  $(".inputDate").attr('title', 'this should replace original');

  // $( ".todoList" ).on("mouseover", ".countDown", function(event) {
  // // alert("hello"); 
  // });

  //   $( ".todoList" ).on("mouseleave", ".countDown", function(event) {
  // // alert("hello");
  // alert("leave");
  // });


  $(".todoList").on("click", ".editButton", function(e) {

      $('.createList').toggle(125);

    var inputTitle = this.parentElement.parentElement.children[0].innerText;
    var inputDescription = this.parentElement.parentElement.children[1].innerText;
    var inputDate = this.parentElement.parentElement.children[2].innerText;
    var inputPriority = this.parentElement.parentElement.children[3].innerText;
    
    $(".inputTitle").val(inputTitle);
    $(".inputDescription").val(inputDescription);
    $(".inputDate").val(inputDate);
    $(".inputPriority").val(inputPriority);

    // $(`tr[data-storage="${inputTitle}"]`).remove();
    editActive = true;
    tempTitle = inputTitle;
  });


});