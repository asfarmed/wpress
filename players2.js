


 if(xxplayer =='jwp'){
     




     

	   var playerInstance = jwplayer("player");
	   playerInstance.setup({
	   	file: milive,
	   	image: xposter,
logo: {
    file: xlogo,
    link: xlink,
    hide: "true",
    position: xposition
  },
  
  

height:"100%",
                        width: "100%",
	   	autostart: xautostart,
			
			advertising: {
				client: "vast",
				schedule: {
					adbreak1: {
						offset: "pre",
						tag: xads,
					}
				}
			},
	   });


}



 else if(xxplayer =='clappr'){
     
     console.log("clappr");

var playbackLevel ='';

        var BUNNY = milive;

        var TAG_VMAP = xads;

        var player = new Clappr.Player({
          parentId: "#player",
          source: BUNNY,
        
        poster: xposter,




          disableKeyboardShortcuts: true,
          disableVideoTagContextMenu: true,
          autoSeekFromUrl: false,
          width: '100%',
          height: '100%',
          autoPlay: true,
          playback: {
            playInline: true,
            recycleVideo: Clappr.Browser.isMobile,
          },
          plugins: [
            ClapprImaPlugin, LevelSelector,DashShakaPlayback,LogoPlugin
          ],
           watermark: xlogo, position: xposition,
      watermarkLink: xlink,
 logo: {
    path: xlogo,
  },
levelSelectorConfig: {
    title: 'Quality',
    labels: {
        2: 'High',
        1: 'Med', 
        0: 'Low', 
    },

    labelCallback: function(playbackLevel, customLabel) {

       return customLabel; 
    }
  },




          imaPlugin: {
            requestAdIfNoAutoplay: true,
            disableNonLinearForIOS: true,
            resetAdOnEnded: true,
            imaAdPlayer: {
              tag: TAG_VMAP,
              vpaidMode: 2,
              locale: 'fr',
              maxDuration: 30000,
              adsRenderingOptions: {
                useStyledLinearAds: true,
                useStyledNonLinearAds: true,
              },
            },
          },
        });

      

}



else if(xxplayer =='plyr'){
    
 

$( document ).ready(function() {

 

console.log("player");


  const video = document.querySelector("#player");
  const source = milive;
  
    const defaultOptions = {};

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(source);

      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {

      const availableQualities = hls.levels.map((l) => l.height)

      defaultOptions.quality = {
        default: availableQualities[0],
        options: availableQualities,
        forced: true,        
        onChange: (e) => updateQuality(e),
      }

      const player = new Plyr(video, defaultOptions);
    });
    hls.attachMedia(video);
    window.hls = hls;
  } else {
    // default options with no quality update in case Hls is not supported
    const player = new Plyr(video, defaultOptions);
  }

  function updateQuality(newQuality) {
    window.hls.levels.forEach((level, levelIndex) => {
      if (level.height === newQuality) {
        window.hls.currentLevel = levelIndex;
      }
    });
  }



});
      }
      else if (xxplayer =='radian'){
        
$( document ).ready(function() {

  

          
var src = {
  xtype: milive
};
// Your player settings
var settings = {
  licenseKey: radlicenseKey,
  src: src,
  width: 640,
  height: 360,
  skin: 's1',
 
  
    logo: xlogo,
  logoLoc: xlink,
  logoPosition: xposition,
  logoWatermark: true,
  
  ads: true,
    adTagUrl: xads,
  
  contentMetadata: {
    poster: [
      xposter
    ]
  },
     // Here we pass the ad skipping settings
    adSkipButton: true,
    adSkipOffset: 4,
    adParser: 'rmp-vast',
  // Here starts our colorization settings
 
};
var elementID = 'rmpPlayer';
var rmp = new RadiantMP(elementID);
rmp.init(settings)

});

      }

else{}
