package stepdefinition;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import usingbaseclass.Base_Class_Usage;



public class StepDefinition extends Base_Class_Usage {

	
	
	
	@Given("^user navigates to the Url$")
	public void user_navigates_to_the_Url() throws Throwable {
		launchUrl("https://adactinhotelapp.com/index.php");
		windowHandles();
		

	}
	

	@When("^user Enter The Username$")
	public void user_Enter_The_Username() throws Throwable {
		
		sendValues(driver.findElement(By.id("username")), "hema1892");
	}

	@When("^user Enter The Password$")
	public void user_Enter_The_Password() throws Throwable {
		sendValues(driver.findElement(By.name("password")), "123456");
	}

	@Then("^login must be successful$")
	public void login_must_be_successful() throws Throwable {
		
		clickOnElement(driver.findElement(By.xpath("//input[@id='login']")));
		
		
	}
	
	@Given("^user navigates to the Select Hotel Url$")
	public void user_navigates_to_the_Select_Hotel_Url() throws Throwable {
			navigateToMethod("forward");
			launchUrl("https://adactinhotelapp.com/SearchHotel.php");
			getTitlePage("https://adactinhotelapp.com/SearchHotel.php");
	}

	@When("^User Selects The Location$")
	public void user_Selects_The_Location() throws Throwable {
	    selectDropdownByVisibleText(driver.findElement(By.id("location")), "Sydney");
	}

	@When("^User Selects The Hotel$")
	public void user_Selects_The_Hotel() throws Throwable {
		selectDropdownByVisibleText(driver.findElement(By.id("hotels")), "Hotel Creek");
	}

	@When("^User Selects The Room Type$")
	public void user_Selects_The_Room_Type() throws Throwable {
		selectDropdownByVisibleText(driver.findElement(By.name("room_type")), "Deluxe");
	}

	@When("^User Selects The No Of Room$")
	public void user_Selects_The_No_Of_Room() throws Throwable {
		selectDropdownByVisibleText(driver.findElement(By.name("room_nos")), "1 - One");
	}

	@When("^User Enters The Check In Date$")
	public void user_Enters_The_Check_In_Date() throws Throwable {
		sendValues(driver.findElement(By.id("datepick_in")), "10/07/2024");
	}

	@When("^User Enters The Check Out Date$")
	public void user_Enters_The_Check_Out_Date() throws Throwable {
	    sendValues(driver.findElement(By.id("datepick_out")), "12/07/2024");
	}

	@When("^User Selects How Many Adults Present$")
	public void user_Selects_How_Many_Adults_Present() throws Throwable {
	   selectDropdownByVisibleText(driver.findElement(By.name("adult_room")), "3 - Three");
	}

	@When("^User Selects How Many Childern Present$")
	public void user_Selects_How_Many_Childern_Present() throws Throwable {
		selectDropdownByVisibleText(driver.findElement(By.id("child_room")), "1 - One");
	}
	
	@Then("^Seach For Hotels$")
	public void seach_For_Hotels() throws Throwable {
	    clickOnElement(driver.findElement(By.xpath("//input[@value='Search']")));
	}

	@Given("^user navigates to the Url To Confirm The Hotel$")
	public void user_navigates_to_the_Url_To_Confirm_The_Hotel() throws Throwable {
	    navigateToMethod("forwaRd");
	    launchUrl("https://adactinhotelapp.com/SelectHotel.php");
	}

	@When("^User Clicks The Hotel$")
	public void user_Clicks_The_Hotel() throws Throwable {
	    clickOnElement(driver.findElement(By.id("radiobutton_0")));
	    isEnabled(driver.findElement(By.id("radiobutton_0")));
	}

	@Then("^User Clicks Continue Button$")
	public void user_Clicks_Continue_Button() throws Throwable {
	    clickOnElement(driver.findElement(By.xpath("//input[@id='continue']")));
	    scrollUpandDown("window.scrollBy(0, 1000)");
	    takeScreenshot();
	    
	}

	
	
}
