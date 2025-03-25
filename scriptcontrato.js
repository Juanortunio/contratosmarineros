
function MostrarNombreMarin()
{
  var inputNombre= document.getElementById('nombreMarin').value;
    
    for (let i = 0; i < 36; i++) {
      document.getElementsByClassName('marinClase')[i].innerHTML= inputNombre;
    }
    document.getElementById('nombreMarin').addEventListener('onblur', QuitarBorde);

  } 
  function MostrarNombreEntreprise()
{
    var inputEntreprise= document.getElementById('nombreEntreprise').value;    
    for (let i = 0; i < 8; i++) {
      document.getElementsByClassName('entrepriseClase')[i].innerHTML= inputEntreprise;
  }
  document.getElementById('nombreEntreprise').addEventListener('onblur', QuitarBorde);
}
  function MostrarCaliteMarin()
  {
      var inputCalite= document.getElementById('caliteMarin').value;
      document.getElementById('CaliteMarinMostrado').innerHTML=inputCalite;
    }
    function MostrarRepresentant()
  {
      var inputRepresentant= document.getElementById('representant').value;
      document.getElementById('representantMostrado').innerHTML=inputRepresentant;
    }
    
    function MostrarNombreNaviere()
  {
      var inputNaviere= document.getElementById('nombreNaviere').value;
      document.getElementById('NombreNaviereMostrado').innerHTML=inputNaviere;
    }
    function MostrarDateInitial()
    {
        var inputDateInitial= document.getElementById('dateInitial').value;
        var fecha=changedateformat(inputDateInitial)
        for (let i = 0; i < 6; i++) {
        document.getElementsByClassName('marinDateClaseI')[i].innerHTML=fecha;
        }
        document.getElementById('dateInitial').addEventListener('onblur', QuitarBorde);
      }
      function MostrarDateFinal()
      {
          var inputDateFinal= document.getElementById('dateFinal').value;
          fecha=changedateformat(inputDateFinal)
          for (let i = 0; i < 6; i++) {
          document.getElementsByClassName('marinDateClaseF')[i].innerHTML=fecha;
          }
        }
        function changedateformat(val) {
          const myArray = val.split("-");
  
          let year = myArray[0];
          let month = myArray[1];
          let day = myArray[2];
  
          let formatteddate = day + "/" + month + "/" + year; 
          return formatteddate;
      }
      
      function QuitarBorde(idpasado) {
        var idpasado2 = idpasado;
        switch (idpasado2) {
          case "nombreEntreprise":
              document.getElementById("nombreEntreprise").style.borderBottom="none";
            break;
          case "adresse":
              document.getElementById("adresse").style.borderBottom="none";
            break;
          case "Siret":
              document.getElementById("Siret").style.borderBottom="none";
            break;
          case "nombreNaviere":
              document.getElementById("nombreNaviere").style.borderBottom="none";
            break;
          case "matricula":
              document.getElementById("matricula").style.borderBottom="none";
           break;
          case "armedePeche":
              document.getElementById("armedePeche").style.borderBottom="none";
            break;
          case "representant":
              document.getElementById("representant").style.borderBottom="none";
            break;
          case "nombreMarin":
              document.getElementById("nombreMarin").style.borderBottom="none";
            break;
          case "Nele":
              document.getElementById("Nele").style.borderBottom="none";
            break;
            case "Nss":
              document.getElementById("Nss").style.borderBottom="none";
            break;
          case "Nationalite":
              document.getElementById("Nationalite").style.borderBottom="none";
            break;
          case "Demeurant":
              document.getElementById("Demeurant").style.borderBottom="none";
            break;
          case "Nmatricule":
              document.getElementById("Nmatricule").style.borderBottom="none";
            break;
          case "VisaN":
              document.getElementById("VisaN").style.borderBottom="none";
            break;
          case "VisaDateI":
              document.getElementById("VisaDateI").style.borderBottom="none";
            break;
          case "VisaDateF":
              document.getElementById("VisaDateF").style.borderBottom="none";
            break;
          case "caliteMarin":
              document.getElementById("caliteMarin").style.borderBottom="none";
            break;
          case "categorie":
              document.getElementById("categorie").style.borderBottom="none";
            break;
          case "dateInitial":
              document.getElementById("dateInitial").style.borderBottom="none";
            break;
          case "dateFinal":
              document.getElementById("dateFinal").style.borderBottom="none";
            break;
          case "Situesa":
              document.getElementById("Situesa").style.borderBottom="none";
            break;
            case "Equipage":
                document.getElementById("Equipage").style.borderBottom="none";
            break;
            case "Armement":
                document.getElementById("Armement").style.borderBottom="none";
            break;
            case "Beneficiere":
                document.getElementById("Beneficiere").style.borderBottom="none";
            break;
            case "Parts":
                document.getElementById("Parts").style.borderBottom="none";
            break;
            case "Faita":
                document.getElementById("Faita").style.borderBottom="none";
            break;
            case "fecha":
                document.getElementById("fecha").style.borderBottom="none";
            break;
        }
      }
        function imprimir(){
            document.getElementById("btimprimir").style.display="none";
            window.print()
            
      } 
   /* document.cookie="NombreMarinC="+ document.getElementById('nombreMarin').value
    document.cookie="NombreEntrepriseC="+ document.getElementById('nombreEntreprise').value
   
    function leerValorCookie(nombreCookie){
      var cookies =document.cookie.split(";");
      for (var i=0; i< cookies.length; i++) {
        var cookie=cookies[i].trim();
        if (cookie.startsWith(nombreCookie+"=")){
          return cookie.substring(nombreCookie.length+1);
        }
      }
      return null;
    }
    var mostrarcookie=leerValorCookie(NombreMarinC)+ leerValorCookie(NombreEntrepriseC)
    alert (mostrarcookie)*/
