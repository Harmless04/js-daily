let age = 7

if(age<=6)
{
  console.log("free")
}
else if(age>6 && age<=17)
{
  console.log("child discount")
}
else if (age>17 && age<=26)
{
  console.log("student discount")
}
else if (age>27 && age<=65)
{
  console.log("full price ")
}
else
{
  console.log("senior citizenship discount")
}