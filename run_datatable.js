var csv = null;
var filter_csv = null;
var my_data_table = null;
d3.text("https://edgonhn.github.io/CAREHN2020/HN TABLE INDICATORS.csv", function(text) {
  csv = d3.csv.parseRows(text);
  $(document).ready(function() {
    $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
    my_data_table = $('#example').dataTable( {
          "data": csv,
          "columns": [
              { "title": "CI_Global_Impact" },
              { "title": "CI_Indicator" },
              { "title": "HN_Project" },
              { "title": "HNP_Indicator", "class": "center" },
          ]
      } );   
} );
});
