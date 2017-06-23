							// validation for all fields
$(document).ready(function() 	
{
	var count =0;
$('.btn').click(function()
{
		count+=1;
		var email = $('.email').val();
		var password = $('.password').val();
		var firstname = $('.fname').val();
		var birthday = $('.bday').val();
		var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

if(count > 1)
		{
			if(email =="")
			{
				$('.emailremove').show();
			}
			else
			{
				$('.emailremove').hide();
			}
			if(password =="")
			{
				$('.pwdremove').show();
			}
			else
			{
				$('.pwdremove').hide();
			}if(firstname =="")
			{
				$('.fnameremove').show();
			}
			else
			{
				$('.fnameremove').hide();
			}if(birthday =="")
			{
				$('.bdayremove').show();
			}
			else
			{
				$('.bdayremove').hide();
			}
		}
	if(email =="" || password =="" || firstname =="" || birthday =="")
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
			$('p').addClass('padding');
			$('h1').addClass('padding');
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
			return false;
		}
		else
		{
			$('p').removeClass('padding');
			$('.glyphicon-remove').addClass('hide');
			alert("Welcome\nThank you for choosing foursquare");
			return true;
		}
	
});						// email validation

	$(".email").focusout(function()
		{
		var email = $('.email').val();
		var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
	
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
				return true;
			}
			
	});
						// password validation

	$(".password").focusout(function()
		{
			var password = $('.password').val();
			
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
				$('p').removeClass('padding');
				return true;
			}
		
		});

							// firstname validation 
	$(".fname").focusout(function()
		{
			var firstname = $('.fname').val();
			var fnamereg = new RegExp(/^[A-Za-z]+$/);
			
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
				return true;
			}
		
		});
						// birthday validation

	$(".bday").focusout(function()
		{
			var birthday = $('.bday').val();
			var reg = new RegExp(/^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/);

		if(!reg.test(birthday))
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
				$('h1').removeClass('padding');
				$('.alert').hide();
			}
	
});
});
