tabelaHTML = "<table><tr><th colspan='50'>Números Primos<tr><td>1";
      for (dividendo = 2; dividendo <= 300; dividendo++) {
        var ehPrimo = true;
        for (divisor = 2; divisor < dividendo ; divisor++) {
          if (dividendo % divisor == 0) {
            ehPrimo = false;
            tabelaHTML += "<td>" + dividendo;
            break;
          };
        };
        if (Boolean(ehPrimo)) { 
          tabelaHTML += "<td bgcolor='green'>" + dividendo;
        }
        dividendo % 20 == 0 ? tabelaHTML += "<tr>" : false;
      };
      tabelaHTML += "</table>";
      document.write(tabelaHTML) 