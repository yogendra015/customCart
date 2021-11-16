'use strict'
var SearchResult;
$("#SearchButton").on('click', function() {

    var SearchText = document.getElementById('SearchText').value;
    
    //alert("Movie Name = " + SearchText);      
    
    var url =  '/on/demandware.store/Sites-Kamal_Site-Site/default/OMDB_API-Show?s='+SearchText;
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",                
        success: function (Response) {
            console.log(Response.Results);
            var result = Response.Results;
            console.log(typeof result);
            SearchResult = result;
            console.log(SearchResult);
            //Check browser support
            if(typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("Result", JSON.stringify(result));
            }
            var count = Object(result.Search).length;
            console.log(count);
            var Title = JSON.stringify(result.Search[0].Title);
            console.log(Title);
            var Response = JSON.stringify(result.Response);
            if(Response == 'False')
            {
                document.getElementById("tablearea").innerHTML='Result Not Found';
            }
            else
            {
                CreateTable(count , result );
            }
            
        },
        error: function (Response) {
           
            alert('Error : ' + JSON.stringify(Response.Results));
        }
    });    

});
function CreateTable(count , result)
{
    try
    {
        var tab = document.getElementById("table");
        tab.remove();
    }
    catch(err)
    {
        alert("Getting results ready");
    }
    var table = document.createElement('table');
    table.id="table";
    table.border = '1';
    var tr = document.createElement('tr');

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');

    var h1 = document.createTextNode('Type');
    var h2 = document.createTextNode('Title');
    var h3 = document.createTextNode('Year');
    var h4 = document.createTextNode('Poster');


    th1.appendChild(h1);
    th2.appendChild(h2);
    th3.appendChild(h3);
    th4.appendChild(h4);

    
    tr.appendChild(th2);
    tr.appendChild(th1);
    tr.appendChild(th3);
    tr.appendChild(th4);
    table.appendChild(tr);

    for (var i = 1; i <= count; i++)
    {
        var tr = document.createElement('tr');
        tr.className='tableRow';   

        var td1 = document.createElement('td');
        td1.className="tableData";
        var td2 = document.createElement('td');
        td2.className="tableData";
        var td3 = document.createElement('td');
        td3.className="tableData";
        var td4 = document.createElement('td');
        td4.className="imageData";

        
        
        var Type = JSON.stringify(result.Search[i-1].Type);
        Type = Type.slice(1,-1);
        var imageSrc = JSON.stringify(result.Search[i-1].Poster);
        //var Text1 = document.createTextNode(Type);
        var TitleName = JSON.stringify(result.Search[i-1].Title);
        var title = TitleName.slice(1,-1);
        var className = 'Title';
        var IdName = 'Title'+i;
        title = `<a class=${className} id=${IdName} href="#" onclick="ShowDetail(this.id)"> ${title}</a>`;
         
        var text2 = document.createTextNode(Type);

        var year = JSON.stringify(result.Search[i-1].Year);
        var y = year.slice(1 , -1);
        var text3 = document.createTextNode(y);
        var text4 = `<img class="imgZoom" id="ImageId" src=${imageSrc} alt="image Not Available">`;

        //td1.appendChild(text1);
        td2.appendChild(text2);
        td1.innerHTML=title;
        td3.appendChild(text3);
        td4.innerHTML=text4;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }
    document.getElementById("tablearea").appendChild(table);
}

//module.exports = { SearchResult : SearchResult};