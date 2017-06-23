							// validation for all fields
$(document).ready(function() 	
{
$('.btn').click(function()
{
		var email = $('.email').val();
		var password = $('.password').val();
		var firstname = $('.fname').val();
		var bday = $('.bday').val();
		var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

	if(email =="" || password =="" || firstname =="" || bday =="")
	{
			$('.alert').show();
			$('.email').popover({
				html:true,
				placement:"bottom",
				content: function()
				{
					return $('#emailerror').html()
				}
			});
			$('.email').popover('show');
			$('.glyphicon-remove').removeClass('hide');
			$('p').addClass('pad');
			$('.password').popover({
				html:true,
				placement:"bottom",
				content: function()
				{
					return $('#pwderror').html()
				}
			});
			$('.password').popover('show');
			$('.fname').popover({
				html:true,
				placement:"bottom",
				content: function()
				{
					return $('#fnameerror').html()
				}
			});
			$('.fname').popover('show');
			$('.bday').popover({
				html:true,
				placement:"bottom",
				content: function()
				{
					return $('#bdayerror').html()
				}
			});
			$('.bday').popover('show');
		}
		return false;
});
});
							// email validation
$(document).ready(function()
{
	$(".email").focusout(function()
		{
		var email = $('.email').val();
		var password = $('.password').val();
		var firstname = $('.fname').val();
		var bday = $('.bday').val();
		var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
	
		if(email =="" || password =="" || firstname =="" || bday =="")		// validation of the whole form
		{
		
			if(!emailreg.test(email))
			{
				$('.emailremove').removeClass('hide');
				$('.email').popover({
						html:true,
						placement:"bottom",
						content: function()
						{
							return $('#emailerror').html()
						}
					});
				$('.email').popover('show');
				return false;	
				}
				else
				{
					$('.email').popover('hide');
					$('.emailremove').addClass('hide');
					$('.emailok').removeClass('hide');
					return false;
				}
			}
	});
});
						// password validation
$(document).ready(function() 
{
	$(".password").focusout(function()
		{
			var email = $('.email').val();
			var password = $('.password').val();
			var firstname = $('.fname').val();
			var bday = $('.bday').val();
			var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

		if(email =="" || password =="" || firstname =="" || bday =="")		// validation of the whole form
		{
		if(password.length < 6)
				{
					$('.pwdremove').removeClass('hide');
					$('.password').popover({
							html:true,
							placement:"bottom",
							content: function()
							{
								return $('#pwderror').html()
							}
						});
					$('.password').popover('show');
					return false;
				}
				else
				{
					$('.password').popover('hide');
					$('.pwdremove').addClass('hide');
					$('.pwdok').removeClass('hide');
					return false;
				}
		}
		});
});
							// firstname validation 
$(document).ready(function() 
{
	$(".fname").focusout(function()
		{
			var email = $('.email').val();
			var password = $('.password').val();
			var firstname = $('.fname').val();
			var fnamereg = new RegExp(/^[A-Za-z]+$/);
			var bday = $('.bday').val();
			var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
			
		if(email =="" || password =="" || firstname =="" || bday =="")		
		{
		if(!fnamereg.test(firstname))
				{
					$('.fnameremove').removeClass('hide');
					$('.fname').popover({
							html:true,
							placement:"bottom",
							content: function()
							{
								return $('#fnameerror').html()
							}
						});
					$('.fname').popover('show');
					return false;
				}
				else
				{
					$('.fname').popover('hide');
					$('.fnameremove').addClass('hide');
					$('.fnameok').removeClass('hide');
					return false;
				}
		}
		});
});
							// birthday validation
$(document).ready(function() 
{
	$(".bday").focusout(function()
		{
			var email = $('.email').val();
			var password = $('.password').val();
			var firstname = $('.fname').val();
			var bday = $('.bday').val();
			var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
			
		if(email =="" || password =="" || firstname =="" || bday =="")
		{
		if(!isNaN(bday) && bday =="")
				{
					$('.bdayremove').removeClass('hide');
					$('.bday').popover({
							html:true,
							placement:"bottom",
							content: function()
							{
								return $('#bdayerror').html()
							}
						});
					$('.bday').popover('show');
					return false;
				}
				else
				{
					$('.bday').popover('hide');
					$('.bdayremove').addClass('hide');
					$('.bdayok').removeClass('hide');
					return true;
				}
		}
});
});
