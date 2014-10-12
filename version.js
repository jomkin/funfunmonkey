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
//rateFunction();

shareMessage=1;//1 to make true

function shareButtonShow(){
	if(shareMessage==1){
		document.getElementById("shareButton").style.display="block";
		}else{
		document.getElementById("shareButton").style.display="none";
		}
}
function share(){
		var message = localStorage.getItem("tokenHandlerresult");
		window.plugins.socialsharing.share(message, 'FunFunMonkey', null , 'http://www.baidu.com')
}
rateButton=1//1 to make true
function rateButtonShow(){
	
		if(rateButton==1){
		document.getElementById("rateButton").style.display="block";
		}else{
		document.getElementById("rateButton").style.display="none";
		}
	
}
function rate(){
	
window.open('http://whitelisted-url.com', '_blank');  
alert("2")
	
	
}
