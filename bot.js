function talk() {
    var know = {
        "how does your project work": "Our project works by...",
  "why did you create this project": "We created this project because...",
  "what are the benefits of your project": "The benefits of our project are...",
  "can I contribute to your project": "Yes, you can contribute to our project by...",
  "thank you": "You're welcome!",

    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know){
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}
