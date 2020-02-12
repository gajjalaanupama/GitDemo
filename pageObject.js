//page object file
function cardOptions(){
	
	var using = require('jasmine-data-provider');
	var EC = protractor.ExpectedConditions;

	this.edit_patient = element(by.xpath('//mat-card[2]//mat-icon[text()="edit"]'));
	this.edit_title = element(by.xpath('//span[text()="Edit Patient"]'));
	this.del_patient = element(by.xpath('//mat-card[2]//mat-icon[text()="delete"]'));
	
	this.Patientreports = function(){
	    this.reports.click();
		browser.wait(EC.presenceOf(this.rep_title), 3000);
		this.patient_home.click();
		browser.wait(EC.presenceOf(this.patient), 3000);
		console.log('Patient Reports navigated successfully');
	}  
 
 }
    
module.exports = new cardOptions();

 
