var cs = new CSInterface();
console.log(cs);
var hostEnv = cs.getHostEnvironment();
var lang = hostEnv.appLocale;


document.addEventListener("DOMContentLoaded", function(event) {
	// Perform CSS updates based on users selections
	var appSkin = hostEnv.appSkinInfo.appBarBackgroundColor;
	
	//console.log(appSkin.color.red + " " + appSkin.color.green + " " +  appSkin.color.blue);
	var red = Math.round(appSkin.color.red);
	var green = Math.round(appSkin.color.green);
	var blue = Math.round(appSkin.color.blue);
	var colorRGB = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

	document.body.style.background = colorRGB;

	cs.addEventListener("com.adobe.csxs.events.ThemeColorChanged", themeChangedEventListener); 

});

function themeChangedEventListener(event)
{
	console.log('background color change detected.');
    changeThemeColor();
}

function changeThemeColor()
{
	var hostEnv = cs.getHostEnvironment();
    var UIColorObj = new UIColor();
    
    UIColorObj = hostEnv.appSkinInfo.appBarBackgroundColor;
    var red = Math.round(UIColorObj.color.red);
    var green = Math.round(UIColorObj.color.green);
    var blue = Math.round(UIColorObj.color.blue);
    var alpha = Math.round(UIColorObj.color.alpha);
    var colorRGB = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    
    //document.body.style.background
    document.body.style.background = colorRGB;
    document.getElementById("notes").style.background = colorRGB;
    document.getElementById("notes").style.borderColor = colorRGB;
    document.getElementsByClassName("icon-btn").style.background = colorRGB;
    //document.getElementById("index_body").style.opacity = alpha / 255;
}