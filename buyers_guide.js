$(document).ready(function(){
	var $selects = $("#edit-submitted-category-and-directory-description-company-category1");

	
	$selects.change(function() {
		//alert("hello1");
		var value = $("#edit-submitted-category-and-directory-description-company-category1 option:selected" ).text();
		$("#edit-submitted-category-and-directory-description-company-category-2 > option").each(function() {
			//$(this).css("display", "block");
			$(this).show();
			//console.log(value);
		});
		//$("#edit-submitted-category-and-directory-description-company-category-2").find('option[value=' + value +']').css("display", "none");
		//alert($("#edit-submitted-category-and-directory-description-company-category-2").find('option[value=' + value +']').html());//.css("display", "none");
		$("#edit-submitted-category-and-directory-description-company-category-2").find('option[value=' + value +']').hide();
		//console.log("hello3");
	});
	
	var $selects1 = $("#edit-submitted-category-and-directory-description-company-category-2");

	
	$selects1.change(function() {
		var value = $("#edit-submitted-category-and-directory-description-company-category-2 option:selected" ).text();
		$("#edit-submitted-category-and-directory-description-company-category1 > option").each(function() {
			$(this).css("display", "block");
		});
		$("#edit-submitted-category-and-directory-description-company-category1").find('option[value=' + value +']').css("display", "none");

	});
	$("#populate_previous_data").change(function(){
		 if( $(this).is(':checked')){
			var company_details={};
			company_details["companyId"]=$.urlParam('companyId');
			$.ajax({
					url:Drupal.settings.basePath+'?q=ajax_buyers_details',
					data:{'data':JSON.stringify(company_details)},
					type: 'POST',
					dataType: 'json',
					success: function(result) {
						fillForm(result);
					}
			});
			$('#webform-component-company_details').hide();
			$('#webform-component-category_and_directory_description').hide();
			//$('#webform-component-list_of_company_contacts').hide();
		 }
		if(!( $(this).is(':checked'))){
			$('#webform-component-company_details').fadeIn();
			$('#webform-component-category_and_directory_description').fadeIn();
			//$('#webform-component-list_of_company_contacts').fadeIn();
			
			$('#edit-submitted-company-details-address-1').val('');
			$('#edit-submitted-company-details-address-2').val('');
			$('#edit-submitted-company-details-city').val('');
			$('#edit-submitted-company-details-state').val('');
			$('#edit-submitted-company-details-zip').val('');
			$('#edit-submitted-company-details-phone-number').val('');
			$('#edit-submitted-company-details-fax-number').val('');
			$('#edit-submitted-company-details-website').val('');
			$('#edit-submitted-company-details-contact-name').val('');
			$('#edit-submitted-company-details-contact-email-address').val('');
			$('#edit-submitted-category-and-directory-description-company-category1').val('');
			$('#edit-submitted-category-and-directory-description-company-category-2').val('');
			$('#edit-submitted-category-and-directory-description-company-description').val('');
			$('#edit-submitted-list-of-company-contacts-confirmation-email-address').val('');
			
			var company_details={};
			company_details["companyId"]=$.urlParam('companyId');
			$.ajax({
					url:Drupal.settings.basePath+'?q=ajax_buyers_details_dont_use_last_year_data',
					data:{'data':JSON.stringify(company_details)},
					type: 'POST',
					dataType: 'json',
					
			});
			
				
		}
	});
	
	
	
			
	
	
});
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}
function fillForm(result){
	console.log(result);
	$('#edit-submitted-company-details-address-1').val(result['Address1']);
	$('#edit-submitted-company-details-address-2').val(result['Address2']);
	$('#edit-submitted-company-details-city').val(result['City']);
	$('#edit-submitted-company-details-state').val(result['State']);
	$('#edit-submitted-company-details-zip').val(result['Zip']);
	$('#edit-submitted-company-details-phone-number').val(result['Phone_no']);
	$('#edit-submitted-company-details-fax-number').val(result['Fax_no']);
	$('#edit-submitted-company-details-website').val(result['Website']);
	$('#edit-submitted-company-details-contact-name').val(result['Contact_name']);
	$('#edit-submitted-company-details-contact-email-address').val(result['Contact_email_address']);
	$('#edit-submitted-category-and-directory-description-company-category1').val(result['Company_category_1']);
	$('#edit-submitted-category-and-directory-description-company-category-2').val('');
	$('#edit-submitted-category-and-directory-description-company-description').val(result['Company_description']);
	$('#edit-submitted-list-of-company-contacts-confirmation-email-address').val(result['Confirmation_email_address']);
	
}



