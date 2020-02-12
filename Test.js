//Test file 
describe('Update Provider Prescription', function(){
	var obj = require("./../PageObjects/LoginPage.js");
	var cardoption = require("./../PageObjects/CardPage.js");
	var provider_home = require("./../PageObjects/ProviderHomePage.js");
	var using = require('jasmine-data-provider');
	var data1 = require("./../Data/UIData_AddPrescription.js");
	var EC = protractor.ExpectedConditions;
	var path = require('path');

	it('Login to Application',function(){
		obj.getURL(data1.Login_Provider.url);

		obj.login_web(data1.Login_Provider.username,data1.Login_Provider.password);
		browser.sleep(5000);
	});
	 
it('Check the available card options for a Provider Patient',function(){
		//Edit Patient
		cardoption.Editpatient();
		browser.sleep(3000);
		
		//Call Patient
		cardoption.Callpatient();
		browser.sleep(2000);
		
		//Patient Reports	
		cardoption.Patientreports();
		browser.sleep(3000);
		
		//Patient Notifications
		cardoption.Patientnotifications();
		browser.sleep(3000);
		
		//Patient Delete
		cardoption.Deletepatient();
		console.log("test");
		browser.sleep(8000);

	});	
});

 
