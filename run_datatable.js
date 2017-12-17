var csv = null;
var filter_csv = null;
var my_data_table = null;
d3.text("https://www.dropbox.com/s/98reav1wtbcch0i/HN%20TABLE%20INDICATORS.csv?raw=1", function(text) {
  csv = d3.csv.parseRows(text);
  $(document).ready(function() {
    $('#demo').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
    my_data_table = $('#example').dataTable( {
          "data": csv,
          "columns": [
              { "title": "CI_Global_Impact" },
              { "title": "CI_Indicator" },
              { "title": "HN_Project" },
			  { "title": "HN_Indicator" },
	          { "title": "Reach_ppl", "class": "center" },
          ]
      } );   
} );
});
