$(document).ready(function() {


  $(".add-text-btn").on("click", function(){

    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();
    let inputDate = $(".user-due-date").val();   //new
    let inputDropDown = $(".user-drop-down-menu").val();         // new

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");
    $(".user-due-date").val("");         //new
    $(".user-drop-down-menu").prop('selectedIndex',0);  //new

    console.log(inputKey, inputValue);

    localStorage.setItem(inputKey, inputValue);
    localStorage.setItem("date", inputDate);
    localStorage.setItem("priority", inputDropDown);
    // data-
    let itemHtml = '<div class="display-item" data-storage="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + ' ' + localStorage.getItem("date") + ' ' + localStorage.getItem("priority") + ' </div>';
    $(".display").append(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storage); // user-input-title
      localStorage.getItem(e.target.dataset.storage); // user-input-body
      
      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storage);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storage));
    });

  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     var selectedItem =  $(".display-item[data-storage = '"+$(".user-input-title").val()+"']")
     console.log(selectedItem[0].dataset.storage);+
     selectedItem[0].remove();
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys



});