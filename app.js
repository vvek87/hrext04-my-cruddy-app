$(document).ready(function() {
  var editActive = false;
  var tempTitle = '';
  var count = 0;

  $('.createTodo').click(function() {
    $('.createList').slideToggle(125);
  });

  $('.submitNewTodo').click(function() {
    if (editActive) {
      $(`tr[data-count=${tempTitle}]`).remove();
        editActive = false;
    }

      var inputTitle = $(".inputTitle").val();
      var inputDescription = $(".inputDescription").val();
      var inputDate = $(".inputDate").val();
      var inputPriority = $(".inputPriority").val();
      
      if(inputDate === '') {
        date = moment().format("ddd, MMM D YYYY");
      } else {
        var date = moment(inputDate).format("ddd, MMM D YYYY, h:mm a");
      };

      var timeTo = moment().to(inputDate);
      
      $(".inputTitle").val("");
      $(".inputDescription").val("");
      $(".inputDate").val("");
      $(".inputPriority").prop("selectedIndex", 0);
      
      var deleteTodo = `<button type="button" class="deleteButton">Delete</button>`;
      var editTodo = `<button type="button" class="editButton">Edit</button>`;

           // use ` (backtick) before and after statement to some replace quotes and use ${variable} for variables
      if (inputPriority === "Low") {
        var singleTodoList = `<tr class="newSingleTodo" data-count="${count}" data-storage="${inputTitle}"><td class="userTitle">${inputTitle}</td><td>${inputDescription}</td><td class="countDown dueDateCell" title="${timeTo}">${date}</td><td class="Low">${inputPriority}</td><td class="centerEditDelete">${editTodo}${deleteTodo}</td></tr>`;
      };

       if (inputPriority === "Medium") {
         var singleTodoList = `<tr class="newSingleTodo" data-count="${count}" data-storage="${inputTitle}"><td class="userTitle">${inputTitle}</td><td>${inputDescription}</td><td class="countDown dueDateCell" title="${timeTo}">${date}</td><td class="Medium">${inputPriority}</td><td class="centerEditDelete">${editTodo}${deleteTodo}</td></tr>`;
       };

       if (inputPriority === "High") {
         var singleTodoList = `<tr class="newSingleTodo}" data-count="${count}" data-storage="${inputTitle}"><td class="userTitle">${inputTitle}</td><td>${inputDescription}</td><td class="countDown dueDateCell" title="${timeTo}">${date}</td><td class="High">${inputPriority}</td><td class="centerEditDelete">${editTodo}${deleteTodo}</td></tr>`;
        };

      $(".todoList").append(singleTodoList);

      $('.createList').slideToggle(125);
        count++;
  });

  $(".todoList").on("click", ".deleteButton", function() {
    var deletion = false;

    if (confirm('Confirm delete')) {
      deletion = true;
    } else { 
        deletion = false;
    }
    
    if (deletion === true) {
      $(this).closest("tr").remove();
    }
  });

  $(".todoList").on("click", ".editButton", function(e) {
    $('.createList').slideToggle(125);

    var tempCount = this.parentElement.parentElement.dataset.count
    var inputTitle = this.parentElement.parentElement.children[0].innerText;
    var inputDescription = this.parentElement.parentElement.children[1].innerText;
    var inputDate = this.parentElement.parentElement.children[2].innerText;
    var inputPriority = this.parentElement.parentElement.children[3].innerText;
    
    $(".inputTitle").val(inputTitle);
    $(".inputDescription").val(inputDescription);
    $(".inputDate").val(inputDate);
    $(".inputPriority").val(inputPriority);

    editActive = true;
    tempTitle = tempCount;
  });



});