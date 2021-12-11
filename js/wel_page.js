// For the Welcome Screen
var ctrl  = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

$("section").each(function()   {
    new ScrollMagic.Scene({
        triggerElement: this,
        duration: '50%'
    })
    .setPin(this)
    .add(ctrl)
});