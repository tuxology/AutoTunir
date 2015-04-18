$.getJSON('tunir.json', function(data) {

    function sortByBuildID(a,b) {
      return b.build_id - a.build_id;
    }
    data.builds.sort(sortByBuildID);

	var source = $("#build-template").html();
	var template = Handlebars.compile(source);
	$('article').append(template(data));
});
