function multiplication_table() {
   a = prompt('Введіть кількість рядків', '0');
   b = prompt('Введіть кількість стовпців', '0');

   document.write('<table style="display: inline-block; align-items: center; background: #e4ecff; color: #2972d1; padding: 7px; border: 4px solid #7bb6ca; border-radius: 15px;">'); 
   for(let row = 1; row <= a; row++){
      document.write('<tr>');  
      for(let column = 1; column <= b; column++){
         document.write('<td style="min-width: 40px; width: auto; text-align: center; vertical-align: middle; border: 2px solid #bbd9ff; font-weight: 700;">' + (row*column) + '</td>');  
      }
      document.write('</tr>');  
   }
   document.write('</table>');  

   document.write('<body style="background: #333; color: #333; font-size: 18px; text-align: center; font-family: Courier, monospace;"></body>');   
}