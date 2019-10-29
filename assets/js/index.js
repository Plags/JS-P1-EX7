function control()
{
  var shoeSize=document.getElementById("shoeSize").value;
  var yearOfBirth=document.getElementById("yearOfBirth").value;
result=((((shoeSize*2)+5)*50)-yearOfBirth)+1766
alert(`Resultat : ${result}`);
return shoeSize, yearOfBirth;
}
