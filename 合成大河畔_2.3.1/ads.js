var videoContent = document.getElementById('contentElement');


// Re-use this AdsLoader instance for the entire lifecycle of your page.

// Add event listeners
adsLoader.addEventListener(
    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
    onAdsManagerLoaded,
    false);
adsLoader.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    onAdError,
    false);

// An event listener to tell the SDK that our content video
// is completed so the SDK can play any post-roll ads.
var contentEndedListener = function() {
    adsLoader.contentComplete();
};
videoContent.onended = contentEndedListener;

// Request video ads.
var preloader = new google.ima.AdsRequest();
preloader.adTagUrl = '0';
// Specify the linear and nonlinear slot sizes. This helps the SDK to
// select the correct creative if multiple are returned.
preloader.linearAdSlotWidth = 640;
preloader.linearAdSlotHeight = 400;
preloader.nonLinearAdSlotWidth = 640;
preloader.nonLinearAdSlotHeight = 400;






function noAdGoToScene() {


    var GameConfig = __require("GameConfig");
    console.log("IndexMainMangerMaing", GameConfig.launchScene, GameConfig.Bros, GameConfig.caS);

    var launchScene = GameConfig.launchScene;
    var Bros = GameConfig.Bros;
    var caS = GameConfig.caS;
    cc.director.loadScene(launchScene, null,
        function() {

            adCompleteFlag = false;

            if (Bros) {
                // show canvas
                var canvas = document.getElementById('GameCanvas');
                canvas.style.visibility = '';
                var div = document.getElementById('GameDiv');
                if (div) {
                    div.style.backgroundImage = '';
                }
            }
            cc.loader.onProgress = null;
            console.log('Success to load scene1Main: ' + launchScene);





        }
    );


}