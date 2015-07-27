
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1402,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2421,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav-prev}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6304,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20173,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",23464,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-intro}","click",function(sym,e){sym.play('btn-intro');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch1}","click",function(sym,e){sym.play('btn-ch1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch2}","click",function(sym,e){sym.play('btn-ch2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch3}","click",function(sym,e){sym.play('btn-ch3');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch4}","click",function(sym,e){sym.play('btn-ch4');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-ch5}","click",function(sym,e){sym.play('btn-ch5');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'page4cloud'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",24340,function(sym,e){sym.play('reStart');});
//Edge binding end
})("page4cloud");
//Edge symbol end:'page4cloud'

//=========================================================

//Edge symbol: 'walker1'
(function(symbolName){})("walker1");
//Edge symbol end:'walker1'

//=========================================================

//Edge symbol: 'btn-intro'
(function(symbolName){})("btn-intro");
//Edge symbol end:'btn-intro'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_btn-thumbnails}","click",function(sym,e){sym.play('startMenu');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-thumbnailsCopy}","click",function(sym,e){sym.playReverse('endMenu');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",383,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav3}","click",function(sym,e){sym.play('next1');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-nav3Copy}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",569,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4Copy6}","click",function(sym,e){sym.getComposition().getStage().play('page2end');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4Copy7}","click",function(sym,e){sym.getComposition().getStage().play('cover');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4Copy8}","click",function(sym,e){sym.getComposition().getStage().play('page3end');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4Copy9}","click",function(sym,e){sym.getComposition().getStage().play('page4end');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle5}","click",function(sym,e){sym.getComposition().getStage().play('page5end');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle5Copy}","click",function(sym,e){sym.getComposition().getStage().play('page6end');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle5Copy2}","click",function(sym,e){sym.getComposition().getStage().play('page7end');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle5Copy3}","click",function(sym,e){sym.getComposition().getStage().play('page8end');});
//Edge binding end
})("menu");
//Edge symbol end:'menu'
})(jQuery,AdobeEdge,"EDGE-74354979");