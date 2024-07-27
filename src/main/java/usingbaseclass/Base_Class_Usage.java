package usingbaseclass;
import java.io.File;
import java.io.IOException;

import javax.lang.model.element.Element;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.html5.RemoteWebStorage;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Base_Class_Usage {
	
	public static WebDriver driver;
	
	public static void browserLaunch(String browser) {
		if(browser.equalsIgnoreCase("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}
		
		else if (browser.equalsIgnoreCase("edge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
		}

	}
	
	public static void launchUrl(String url) {
		driver.get(url);

	}
	
	public static void windowHandles() {
		driver.manage().window().maximize();

	}
	public static void sendValues(WebElement element, String values) {
		element.sendKeys(values);

	}
	
	public static void clickOnElement(WebElement element) {
		element.click();

	}
	
	
	public static void quitBrowser() {
		driver.quit();

	}
	
	public static void navigateToMethod(String method) {
		if (method.equalsIgnoreCase("back")) {
			driver.navigate().back();}
		else if (method.equalsIgnoreCase("forward")) {
			driver.navigate().forward();		}
		else if (method.equalsIgnoreCase("refersh")) {
			driver.navigate().refresh();
		}
		}
	
	
	public static void selectDropdownByVisibleText(WebElement element , String visibleText) {
		Select select_location = new Select(element);
		select_location.selectByVisibleText(visibleText);
	}
	
	public static void getTitlePage(String url) {
		System.out.println(driver.getTitle()+"..........title.............");
	}

	public static void getCurrentUrl() {
		System.out.println(driver.getCurrentUrl()+"........current url........");
		
	}
	
	public static void isEnabled(WebElement element) {
		element.isEnabled();
		System.out.println(element.isEnabled()+"...............boolean");
	}
	
	public static void scrollUpandDown(String values) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript(values);
}
	
	public static void takeScreenshot() throws IOException {
		TakesScreenshot obj = (TakesScreenshot) driver;
		File file_source = obj.getScreenshotAs(OutputType.FILE);
		File destination = new File
				("C:\\Users\\hp\\eclipse-workspace\\usingbaseclass\\screenshot\\page.png");
		
		FileUtils.copyFile(file_source, destination);
		
		
	}

}
