function fun()
{
    if(document.getElementById("MainDiv").style.background == "red")
    {
        document.getElementById("MainDiv").style.background = "unset";
    }
    else
    {
        document.getElementById("MainDiv").style.background = "red";
    }
}