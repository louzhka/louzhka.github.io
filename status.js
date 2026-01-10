document.writeln('<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>');
fetch("https://status.cafe/users/louzhka/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/louzhka" target="_blank">' + r.author + '</a> ' + r.face + ' <span class="nbr">' + r.timeAgo + '</span>'
    document.getElementById("statuscafe-content").innerHTML = r.content
  })
//да, я просто пофиксила оригинальный скрипт, чтобы время красиво отображалось в одну строку, не разрывалось
