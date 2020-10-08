function verificaDados() {
    /* PEGA OS VALORES DOS INPUTS */  
    var text = document.getElementById("text").value
    var radio = document.getElementById("radio").value
    var checkbox = document.getElementById("checkbox").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value
    var password = document.getElementById("password").value
    var search = document.getElementById("search").value
    var tel = document.getElementById("tel").value
    var url = document.getElementById("url").value
    var color = document.getElementById("color").value
    var date = document.getElementById("date").value
    var datetime = document.getElementById("datetime").value
    var month = document.getElementById("month").value
    var time = document.getElementById("time").value
    var week = document.getElementById("week").value
    var file = document.getElementById("file").value
    var hidden = document.getElementById("hidden").value
    var image = document.getElementById("image").value
    var range = document.getElementById("range").value
    var select = document.getElementById("select").value
  
    /* MOSTRA O RESULTADO NO TERMINAL */  
    console.log("-------------------------------------------------")
    console.log(text)
    console.log(radio)
    console.log(checkbox)
    console.log(email)
    console.log(number)
    console.log(password)
    console.log(search)
    console.log(tel)
    console.log(url)
    console.log(color)
    console.log(date)
    console.log(datetime)
    console.log(month)
    console.log(time)
    console.log(week)
    console.log(file)
    console.log(hidden)
    console.log(image)
    console.log(range)
    console.log(select)
  }