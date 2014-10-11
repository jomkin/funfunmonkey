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
localStorage.setItem("shareMessage", "1");//1 to make true

function share(){
		
		window.plugins.socialsharing.share('Message, subject, image and link', 'The subject', res.filePath, 'http://www.x-services.nl')
}
