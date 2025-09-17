const blue = document.getElementById("js--blue");
const darkblue = document.getElementById("js--darkblue");
const yellow = document.getElementById("js--yellow");
const roze = document.getElementById("js--roze")

const switches = document.getElementsByClassName("product");


blue.onclick = function()
{
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "none";
        }
        document.getElementById("js--blueModal").style.display = "grid"
}

darkblue.onclick = function()
{
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "none";
        }
        document.getElementById("js--darkblueModal").style.display = "grid"
}

yellow.onclick = function()
{
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "none";
        }
        document.getElementById("js--yellowModal").style.display = "grid"
}

roze.onclick = function()
{
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "none";
        }
        document.getElementById("js--rozeModal").style.display = "grid"
}











const closeBlueModal = document.getElementById("js--closeBlue");

closeBlueModal.onclick = function()
{
    document.getElementById("js--blueModal").style.display = "none"
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "block";
        }
}



const closeDarkBlueModal = document.getElementById("js--closeDarkBlue");

closeDarkBlueModal.onclick = function()
{
    document.getElementById("js--darkblueModal").style.display = "none"
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "block";
        }
}



const closeYellowModal = document.getElementById("js--closeYellow");

closeYellowModal.onclick = function()
{
    document.getElementById("js--yellowModal").style.display = "none"
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "block";
        }
}


const closeRozeModal = document.getElementById("js--closeRoze");

closeRozeModal.onclick = function()
{
    document.getElementById("js--rozeModal").style.display = "none"
    for(let i = 0; i < switches.length; i++)
        {
            switches[i].style.display = "block";
        }
}
