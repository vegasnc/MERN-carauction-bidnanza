$(document).ready(function() {
   'use strict';

   $('.select2').select2({
	minimumResultsForSearch: Infinity,
	width: '100%'
   });
	$('#categories').select2({
	 minimumResultsForSearch: ''
   });
   $('#select-Categories1').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories2').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories3').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories4').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories5').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories6').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories7').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories8').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories9').select2({
	 minimumResultsForSearch: ''
   });
    $('#select-Categories10').select2({
	 minimumResultsForSearch: ''
   });

   // Select2 by showing the search
   $('.select2-show-search').select2({
	 minimumResultsForSearch: '',
	 placeholder: "Search"
   });

   $('#job').select2({
	 minimumResultsForSearch: '',
	 placeholder: "Search jobs here "

   });
   $('#employe').select2({
	 minimumResultsForSearch: '',
	 placeholder: "Search profiles here "
   });

   function formatState (state) {
	  if (!state.id) { return state.text; }
	  var $state = $(
		'<span><img src="../assets/images/flags/' +  state.element.value.toLowerCase() +
	'.svg" class="img-flag" /> ' +
	state.text +  '</span>'
	 );
	 return $state;
	};

	$(".select2-flag-search").select2({
	  templateResult: formatState,
	  templateSelection: formatState,
	   escapeMarkup: function(m) { return m; }
	});

	$("select2").select2({
        width: '100%'
    });
	$(".ad-post-status").select2({
        width: '100%',
		theme: "classic"
    });
	$(".select2-show-search").select2({
	  placeholder: "Select Pice : Min",
	  width: '100%'
	});
	$(".search-price-max").select2({
	  placeholder: "Select Pice : Max",
	  width: '100%'
	});
	$(".search-loaction").select2({
	  placeholder: "Select Location : Any location",
	  width: '100%'
	});
	$(".make").select2({
	  placeholder: "Select Make : Any make",
	  width: '100%'
	});
	$(".model").select2({
	  placeholder: "Select Model : Any model",
	  width: '100%'
	});
	$(".bodytype").select2({
	  placeholder: "Body Type : Select body type",
	  width: '100%'
	});
	$(".search-year").select2({
	  placeholder: "Select Year : Any Year",
	  allowClear: true,
	  width: '100%'
	});


 });
