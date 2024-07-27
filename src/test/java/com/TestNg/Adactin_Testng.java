package com.TestNg;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;
import usingbaseclass.Base_Class_Usage;

public class Adactin_Testng extends Base_Class_Usage{

	 @BeforeClass
	    public void setUp() throws InterruptedException {
	        browserLaunch("chrome");
	       
	    }
	 @Test
	 public void adacticLogin() throws InterruptedException {
		 Thread.sleep(1000);
		 
		 launchUrl("https://adactinhotelapp.com/index.php");
		 sendValues(driver.findElement(By.id("username")), "hema1892");
		 sendValues(driver.findElement(By.name("password")), "123456");
		 clickOnElement(driver.findElement(By.xpath("//input[@id='login']")));
	 }
	 @Test
	 public void adactin_hotelsearch() throws InterruptedException {
		 Thread.sleep(1000);
		 navigateToMethod("forward");
		 launchUrl("https://adactinhotelapp.com/SearchHotel.php");
		 selectDropdownByVisibleText(driver.findElement(By.id("location")), "Sydney");		
		 
	 }
	 @Test(priority = 2)
	 public void selecthotel() {
		 selectDropdownByVisibleText(driver.findElement(By.id("hotels")), "Hotel Creek");
		 System.out.println("==========2 = Hotel ===========");
	}
	 @Test(priority = 1)
	 public void selectRoomtype() {
		
		 selectDropdownByVisibleText(driver.findElement(By.name("room_type")), "Deluxe");
		 System.out.println("==========1 = Room typpe===========");
	}
	 
	@Test (priority = 3)
	public void Select_Hotelcategory() throws InterruptedException {
		selectDropdownByVisibleText(driver.findElement(By.name("room_nos")), "2 - Two");
		sendValues(driver.findElement(By.id("datepick_in")), "10/07/2024");
		sendValues(driver.findElement(By.id("datepick_out")), "12/07/2024");
		selectDropdownByVisibleText(driver.findElement(By.name("adult_room")), "3 - Three");
		selectDropdownByVisibleText(driver.findElement(By.id("child_room")), "1 - One");
		clickOnElement(driver.findElement(By.xpath("//input[@value='Search']")));
		Thread.sleep(1000);
	}
	@Test(priority = 4)
	 public void confirmHotel() throws InterruptedException {
		 navigateToMethod("forwaRd");
		    launchUrl("https://adactinhotelapp.com/SelectHotel.php");
		    clickOnElement(driver.findElement(By.id("radiobutton_0")));
		    driver.findElement(By.xpath("//input[@id='continue']")).click();
		    Thread.sleep(1000);

	}
	@Test(priority = 5)
	public void bookHotel() throws InterruptedException, IOException {
		driver.navigate().to("https://adactinhotelapp.com/BookHotel.php");
		driver.findElement(By.name("first_name")).sendKeys("ishwarya");
		driver.findElement(By.name("last_name")).sendKeys("dhandaapani");
		driver.findElement(By.id("address")).sendKeys("coimbatore");
		driver.findElement(By.id("cc_num")).sendKeys("1234567812345678");
		 WebElement cc_type = driver.findElement(By.id("cc_type"));
			Select select_cc_type = new Select(cc_type);
			select_cc_type.selectByVisibleText("Master Card");
			WebElement expiry_date = driver.findElement(By.id("cc_exp_month"));
			Select select_date = new Select(expiry_date);
			select_date.selectByVisibleText("October");
			WebElement expiry_year = driver.findElement(By.id("cc_exp_year"));
			Select select_year = new Select(expiry_year);
			select_year.selectByVisibleText("2025");
			driver.findElement(By.name("cc_cvv")).sendKeys("123");
			Thread.sleep(1000);
			WebElement element_by_id = driver.findElement(By.cssSelector("input#book_now"));
			element_by_id.click();
			takeScreenshot();
			Thread.sleep(2000);
			System.out.println("======successfully logged in=====");
			
	}	
	
	 @AfterClass
	 public void teardown() throws InterruptedException {
	        quitBrowser();
}}
