    // Get an array into Javascript from Shortcuts populated with the clipboard from email.
    //var booksDue = ['33041021416321','33041018410097', '33041020802588', '33041023710226']; 

    // Define a sleep function.

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Initialize an accumulator.
    var i;
    // Loop over the array of library books due.
    for (i = 0; i < booksDue.length ; i++) {
        	var bookDue = booksDue[i];
    	var bookDueId = "checkoutTitleLinkDiv_"+bookDue;
    	var checkBoxId = (document.getElementById(bookDueId).parentElement.parentElement).getElementsByClassName("checkoutsCheckbox")[0].id;
    	document.getElementById(checkBoxId).click();
    }
    document.getElementById("myCheckouts_checkoutslist_topCheckoutsRenewButton").click();
    sleep(2000);
    document.getElementById("myCheckouts_checkoutslist_checkoutsDialogConfirm").click();

var renewalLimitReached = document.querySelectorAll(".checkoutsError");

var renewalLimitTitles = []; for (var j = 0 ; j < renewalLimitReached.length; j++) { var item = renewalLimitReached[j]; renewalLimitTitles.push((item.parentElement).querySelector("a").innerText); }

var result = JSON.stringify(renewalLimitTitles);
