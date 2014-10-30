version="1.0"//var version;
function maybe(){

   

}

function rateFunction(){
  var cfg = {
        usesUntilPrompt: 5,
        displayAppName: "My Super App",
        customLocale: {
            title: "Rate %@",
            message: "If you enjoy using %@, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
            cancelButtonLabel: "No, Thanks",
            laterButtonLabel: "Remind Me Later",
            rateButtonLabel: "Rate It Now"
        },
        appStoreAppURL: {
            ios: "itms-apps://itunes.apple.com/app/id<my_app_id>?mt=8",
            android: "market://details?id=<package_name>"
        }
    };

   navigator.apprate.setup(cfg);
    navigator.apprate.promptForRating();
  
   
}
//rateFunction();// 去掉“//"来开启rate

//var rateButton=localStorage.getItem("rateButton");


//var shareButton=localStorage.getItem("shareButton");




localStorage.setItem("shareButton","1")//1 to make true
function shareButtonShow(){

		document.getElementById("shareButton").style.display="block";
	
}
function share(){
		var message = localStorage.getItem("tokenHandlerresult");
		window.plugins.socialsharing.share(message, 'FunFunMonkey', null , 'http://www.baidu.com');
		analytics.trackEvent('monkey-button', "share");
}



localStorage.setItem("rateButton","1")//1 to make true
function rateButtonShow(){
	
	
		document.getElementById("rateButton").style.display="block";
	
	
}
function rate(){
	
window.open('https://itunes.apple.com/app/funfunmonkey-mini-funny-free/id928912223', '_blank');  
analytics.trackEvent('monkey-button', "Rate & View the highest");
}

localStorage.setItem("admobStatus","1")//1 to make true
var admobStatus=localStorage.getItem("admobStatus");

