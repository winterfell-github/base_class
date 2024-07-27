$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginUsingBaseClass.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login Functionality",
  "description": "",
  "id": "login;login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user navigates to the Url",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter The Username",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login must be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_Url()"
});
formatter.result({
  "duration": 1013173400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d126.0.6478.128)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SB7292E\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 126.0.6478.128, chrome: {chromedriverVersion: 126.0.6478.182 (5b5d8292ddf..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58019}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: cbedae14b7e38a94edb1ca52f4857691\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat usingbaseclass.Base_Class_Usage.windowHandles(Base_Class_Usage.java:48)\r\n\tat stepdefinition.StepDefinition.user_navigates_to_the_Url(StepDefinition.java:26)\r\n\tat ✽.Given user navigates to the Url(LoginUsingBaseClass.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.login_must_be_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "Select Hotel Functionality",
  "description": "",
  "id": "login;select-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user navigates to the Select Hotel Url",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User Selects The Location",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User Selects The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User Selects The Room Type",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User Selects The No Of Room",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Selects The No Of Room",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Enters The Check In Date",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User Enters The Check Out Date",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User Selects How Many Adults Present",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User Selects How Many Childern Present",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Seach For Hotels",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_Select_Hotel_Url()"
});
formatter.result({
  "duration": 13960100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d126.0.6478.128)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SB7292E\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 126.0.6478.128, chrome: {chromedriverVersion: 126.0.6478.182 (5b5d8292ddf..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58019}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: cbedae14b7e38a94edb1ca52f4857691\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.forward(RemoteWebDriver.java:853)\r\n\tat usingbaseclass.Base_Class_Usage.navigateToMethod(Base_Class_Usage.java:71)\r\n\tat stepdefinition.StepDefinition.user_navigates_to_the_Select_Hotel_Url(StepDefinition.java:53)\r\n\tat ✽.Given user navigates to the Select Hotel Url(LoginUsingBaseClass.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_Hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_Room_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_No_Of_Room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_The_No_Of_Room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enters_The_Check_In_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enters_The_Check_Out_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_How_Many_Adults_Present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Selects_How_Many_Childern_Present()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.seach_For_Hotels()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Navigate To Select Hotel",
  "description": "",
  "id": "login;navigate-to-select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user navigates to the Url To Confirm The Hotel",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User Clicks The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User Clicks Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_the_Url_To_Confirm_The_Hotel()"
});
formatter.result({
  "duration": 10066400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d126.0.6478.128)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SB7292E\u0027, ip: \u0027192.168.0.107\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 126.0.6478.128, chrome: {chromedriverVersion: 126.0.6478.182 (5b5d8292ddf..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58019}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: cbedae14b7e38a94edb1ca52f4857691\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.forward(RemoteWebDriver.java:853)\r\n\tat usingbaseclass.Base_Class_Usage.navigateToMethod(Base_Class_Usage.java:71)\r\n\tat stepdefinition.StepDefinition.user_navigates_to_the_Url_To_Confirm_The_Hotel(StepDefinition.java:105)\r\n\tat ✽.Given user navigates to the Url To Confirm The Hotel(LoginUsingBaseClass.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_The_Hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Continue_Button()"
});
formatter.result({
  "status": "skipped"
});
});