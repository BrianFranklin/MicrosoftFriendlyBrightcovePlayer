**NOTE: This utility was made before the existence of the modern "Perform" or "Brightcove Player" naming. This utility is specific to the older generation of players known as "Smart Players" and should not be used with current Brightcove video players. Newer players already support modern MS environments.**

Modified Brightcove Smart Player Javascript file that supports the use of smart players on Xbox One and Windows Phone


By default, Brightcove's Smart Player embed logic explicitly looks for iOS, Android, and Silk devices, but neglects Windows Phone and Xbox despite HTML5 support. This script file can be used to ensure that HTML5 fallback will work on Xbox One and Windows Phone devices. This script overwrites some of Brightcove's embed methods, so it may cause unexpected behavior if Brightcove modifies this logic.


To use, simply include this script directly after your Brightcove Javascript:

    <script src="https://sadmin.brightcove.com/js/BrightcoveExperiences_all.js"></script>
    <script src="MicrosoftFriendlyBrightcovePlayer.js"></script>
    
The method overwrite must occur before ```brightcove.createExperiences()``` is called, so if you experience problems, double-check that the modified methods are being used when players are instantiated.
