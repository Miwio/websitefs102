$( document ).ready(function() {


    $(function(){
        //Make an array
        let todoItems = [];

        let setLocalStorage = function(todoItems){
            //takes converts the variable data to a string
            localStorage.setItem('todoItems', JSON.stringify(todoItems));

        };

        let getLocalStorage = function(){
            // grabbing from toDo Table
            let todoStorage = localStorage.getItem('todoList');
            if (todoStorage == undefined || todoStorage == null){
            //if storage is empty    
            todoItems = [];
            } else {
                todoItems = JSON.parse(todoStorage);
                todoItems.forEach(function(item){
                    $(".item-list").append(`    
                    <div class="row justify-content-center item">
                        <div class="col-md-4 col-7">
                            <p class="task">${item}</p>
                        </div>
                        <div class="col-md-2 col-3 text-end">
                            <i class="bi bi-check-circle text-success icon-enlarge" id="complete"></i>
                            <i class="bi bi-x-circle text-danger icon-enlarge" id="delete"></i>
                        </div>
                    </div>
                    `);

                });
            }
        }

        getLocalStorage();

        //on clear button click
        $("#clear-list").on("click",function(){
            todoItems = [];
            localStorage.clear();
            $(".item-list").empty();
        });

        $(document).on("click","#complete",function(){
            $(this).closest(".item").toggleClass("completed");

        });

        $(document).on("click","#delete",function(){
            $(this).closest(".item").remove();
        });

        //On Click of Button
        $("#add-item").on("click", function(){

            //Get Input #item-input Value
            let itemInput = $("#item-input").val();

            //Check if the input is empty
            if(itemInput == "" || itemInput.length == 0){

                //If it is empty
                $("#alert-prompt")
                    .text("Please enter a valid task.")
                    .removeClass("d-none");

                //type alert after 3 seconds
                setTimeout(function(){
                    $("#alert-prompt").addClass("d-none");
                }, 3000);
            } else {

                //put the entry into the list
                $(".item-list").append(`    
                    <div class="row justify-content-center item bg-warning">
                        <div class="col-md-4 col-7">
                            <p class="task">${itemInput}</p>
                        </div>
                    </div>
                `);

                //puts the blinking thing back after appending
                $("#item-input").val("").focus();

                //push new item into array
                todoItems.push(itemInput);

                //adding items to local storage on computer
                setLocalStorage(todoItems);
            }

        });
    });



    //scroll back up
    $(function() {
        $(".scrolltop").on('click', function() {
            var position = $(".navbar").offset().top;
            $("HTML, BODY").animate({
                scrollTop: position
            }, 500);
        });
    });
    


        //To only show Food Cards
            $(".sortFood").on("click", function(){
                $(".drink").each(function(){
                var food = parseInt($(this).text());
                if(food = "drink"){
                    $(this).closest(".card").hide();
                }
            });
            });
        //To only show Drink Cards
            $(".sortDrink").on("click", function(){
                $(".food").each(function(){
                var food = parseInt($(this).text());
                if(food = "drink"){
                    $(this).closest(".card").hide();
                }
            });
            });
        //To unhide or show every card
            $(".itemreset").on("click", function(){
                $(".food,.drink").each(function(){
                if ($(".card:hidden")){
                    $(this).closest(".card").show();
                }
            });
            });

            // Checks each form input and sends an alert
            $(function (){

                $("#emailinput").on('focusout', function(){
                    if ($("#emailinput").val = " ")
                        alert("Email! Please");  
                });

                $("#formname").on('focusout', function(){
                    if ($("#formname").val = " ")
                    alert( "Name Please!" );
                });
                
                $("#messageinput").on('focusout', function(){
                    if ($("#messageinput").val = " ")
                    alert("Message Please!");
                });

            });

            //Brings up the message sent modal
            $("#submitnotice").on("click",function(){

                $("#exampleModal").modal('show');

            });
                
});