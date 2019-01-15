var ContactForm = function () {

	return {

		//Contact Form
		initContactForm: function () {
			// Validation
			$("#sky-form3").validate({
				// Rules for form validation
				rules:
				{
					name:
					{
						required: true
					},
					email:
					{
						required: true
					},
					message:
					{
						required: true,
						minlength: 10
					},
				},

				// Messages for form validation
				messages:
				{
					name:
					{
						required: 'Please enter your name',
					},
					email:
					{
						required: 'Please enter your email'
					},
					message:
					{
						required: 'Please enter your message'
					},
				},

				// Ajax form submition
				submitHandler: function(form)
				{
					$(form).ajaxSubmit(
						{
							url: constants.URL +"contact/submit",
							dataType: 'json',
							beforeSend: function()
							{
								$('#sky-form3 button[type="submit"]').attr('disabled', true);
								$('#sky-form3 button[type="submit"] i').addClass('fa-spinner fa-spin fa-fw', true);
								$("#sky-form3").removeClass('submited');
								$("#sky-form3").removeClass('error');
							},
							success: function(data)
							{
							console.log(data);
							
								if(data.status == 1){
									$("#sky-form3").addClass('submited');
								}else{
									$("#contact-error").html(data.message);
									$("#sky-form3").addClass('error');
								}

								$('#sky-form3 button[type="submit"]').removeAttr('disabled');

							},
							error: function(data)
							{
								console.log(data);
							}
						});
				},

				// Do not change code below
				errorPlacement: function(error, element)
				{
					error.insertAfter(element.parent());
				}
			});
		}

	};

}();

var EnquireForm = function () {

	return {

		//Contact Form
		initEnquireForm: function () {
			// Validation
			$("#sky-form3").validate({
				// Rules for form validation
				rules:
				{
					name:
					{
						required: true
					},
					email:
					{
						required: true
					},
					message:
					{
						required: true,
						minlength: 10
					},
				},

				// Messages for form validation
				messages:
				{
					name:
					{
						required: 'Please enter your name',
					},
					email:
					{
						required: 'Please enter your email'
					},
					message:
					{
						required: 'Please enter your enquiry'
					},
				},

				// Ajax form submition
				submitHandler: function(form)
				{
					$(".btn").button('loading');
					$(form).ajaxSubmit(
						{
							url: constants.URL +"contact/enquire",
							dataType: 'json',
							beforeSend: function()
							{
								$('#sky-form3 button[type="submit"]').attr('disabled', true);
								$('#sky-form3 button[type="submit"] i').addClass('fa-spinner fa-spin fa-fw', true);
								$("#sky-form3").removeClass('submited');
								$("#sky-form3").removeClass('error');
							},
							success: function(data)
							{
								if(data.status == 1){
									$("#sky-form3").addClass('submited');
								}else{
									$("#contact-error").html(data.message);
									$("#sky-form3").addClass('error');
								}

								$('#sky-form3 button[type="submit"]').removeAttr('disabled');
								$(".btn").button('reset');

							},
							error: function(data)
							{
								console.log(data);
								$(".btn").button('reset');
							}
						});
				},

				// Do not change code below
				errorPlacement: function(error, element)
				{
					error.insertAfter(element.parent());
				}
			});
		}

	};

}();