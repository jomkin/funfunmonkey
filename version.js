version="1.0"//var version;
function maybe(){

   

}

function rateFunction(){
   var cfg = {
   				useLanguage: "ru",
   				usesUntilPrompt: 5,
   				appStoreAppURL: {
   					ios: "itms-apps://itunes.apple.com/app/id<my_app_id>?mt=8",
   					android: "market://details?id=<package_name>"
   				}
   			};
   		
   			navigator.apprate.setup(cfg);
   			navigator.apprate.promptForRating();
  
   
}
alert('wk')
rateFunction();
