package com.pomPackage;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class pomLoginPage {
		
		public WebDriver driver;
		
		@FindBy(id="username")
		private WebElement username;
		@FindBy(id="password")
		private WebElement password;
		@FindBy(id="login")
		private WebElement login;
		
		
		public WebElement getUsername() {
			return username;
		}
		public WebElement getPassword() {
			return password;
		}
		public WebElement getLogin() {
			return login;
		}
		
		public pomLoginPage(WebDriver driver) {
			this.driver = driver;
			PageFactory.initElements(driver, this);
		}
		
		
		
		
		
}
