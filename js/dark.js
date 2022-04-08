// Define the query
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Create new link Element
var link = document.createElement('link'); 
  
// set the attributes for link element
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'css/dark.css'; 

function loadMediaQuery() {
    console.log("darkmode: " + mediaQuery.matches)
    
    if (mediaQuery.matches){
    document.getElementsByTagName('HEAD')[0].appendChild(link)
    }
}; 

function checkMediaQuery() {
    console.log("darkmode: " + mediaQuery.matches)
    console.log(document.getElementsByTagName('HEAD')[0])
    
    if (mediaQuery.matches){
    document.getElementsByTagName('HEAD')[0].appendChild(link)
    }
    else{
        try{
            document.getElementsByTagName('HEAD')[0].removeChild(link)   
        }
        catch{}
    }
}; 

function clickChange() {
    try{
    console.log("darkmode: false")
    document.getElementsByTagName('HEAD')[0].removeChild(link)
    }
    catch{
    console.log("darkmode: true")
    document.getElementsByTagName('HEAD')[0].appendChild(link)    
    }

};

window.onload = loadMediaQuery();
mediaQuery.addEventListener('change', checkMediaQuery);
document.querySelector("#theme").addEventListener("click", clickChange);