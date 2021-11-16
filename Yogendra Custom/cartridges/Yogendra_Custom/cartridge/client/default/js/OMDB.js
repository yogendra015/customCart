$('#searchButton').on('click' , function()
{
    var SearchText = document.getElementById("search").value;
    var CallURL = '/on/demandware.store/Sites-Kamal_Site-Site/default/OMDB-Start?s='+SearchText;
    $.ajax({
        url : CallURL,
        method: 'GET',
        success: function (data) {
          console.log('Hellooo', JSON.stringify(data.object.Search[0].Title));
          alert('congrats');
            // URLUtils.url('Promo-Show').toString()
        },
        error: function () {
          alert('sorry');
        }
      });
})