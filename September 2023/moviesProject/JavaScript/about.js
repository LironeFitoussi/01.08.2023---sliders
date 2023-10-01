console.log("test");

$("#WAForm").submit(function (e) { 
    e.preventDefault();
    console.log("uloaded");
    userMSG = $("#message").val()
    window.open(`https://api.whatsapp.com/send?phone=972585109829&text=${userMSG}`, '_blank');
});
