document.write("<table>");
 
for (let x = 1; x <= 10; x++ ) {
  document.write("<tr>");
  document.write("<td>" + x + "</td>");
 
 for ( let y = 2; y <= 9; y++ ) {
   document.write("<td>" + x * y + "</td>");
}
   document.write("</tr>");
}
