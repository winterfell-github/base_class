package runnerclass;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import usingbaseclass.Base_Class_Usage;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//features",glue="stepdefinition")


public class TestRunner extends Base_Class_Usage{
	
	
	 
	@BeforeClass
	public static void setUp() {
		
		browserLaunch("chrome");
		
	}
	
	@AfterClass
public static void tearDown() {
		
	}
}
