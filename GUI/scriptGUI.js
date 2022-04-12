//---------------------------------------
// SEQUENCER - secuenciador de 8 canales y 16 pasos

//NO PONER ESTO ACA
/*var sequencer = new Nexus.Sequencer('#seq-animal',{
  'size': [580,380],
  'mode': 'toggle',
  'rows': 8,
  'columns': 16
 })

 sequencer.on('change',function(v) {
   console.log(v);
 })

 sequencer.on('step',function(v) {
   console.log(v);
 })
 */
 //---------------------------------------
 // DIALES - instrumentos

 var dialins1 = new Nexus.Dial('#dial-ins1',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })


 dialins1.on('change',function(v) {
   console.log(v);
 })

 var dialins2 = new Nexus.Dial('#dial-ins2',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins2.on('change',function(v) {
   console.log(v);
 })

 var dialins3 = new Nexus.Dial('#dial-ins3',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins3.on('change',function(v) {
   console.log(v);
 })

 var dialins4 = new Nexus.Dial('#dial-ins4',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins4.on('change',function(v) {
   console.log(v);
 })

 var dialins5 = new Nexus.Dial('#dial-ins5',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins5.on('change',function(v) {
   console.log(v);
 })

 var dialins6 = new Nexus.Dial('#dial-ins6',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins6.on('change',function(v) {
   console.log(v);
   console.log(this);

 })

 var dialins7 = new Nexus.Dial('#dial-ins7',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins7.on('change',function(v) {
   console.log(v);
 })

 var dialins8 = new Nexus.Dial('#dial-ins8',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': 0.5,
   'max': 1.5,
   'step':0.1,
   'value': 1
 })

 dialins8.on('change',function(v) {
   console.log(v);
 })

 //---------------------------------------

//Mobile

var mobdialins1 = new Nexus.Dial('#mob-dial-ins1',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins2 = new Nexus.Dial('#mob-dial-ins2',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins3 = new Nexus.Dial('#mob-dial-ins3',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins4 = new Nexus.Dial('#mob-dial-ins4',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins5 = new Nexus.Dial('#mob-dial-ins5',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins6 = new Nexus.Dial('#mob-dial-ins6',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins7 = new Nexus.Dial('#mob-dial-ins7',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})
var mobdialins8 = new Nexus.Dial('#mob-dial-ins8',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0.5,
  'max': 1.5,
  'step':0.1,
  'value': 1
})



 // DIALES - volumen

 var dialch1 = new Nexus.Dial('#dial-ch1',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 0,
   'step':1,
   'value': 5
 })

 dialch1.on('change',function(v) {

   console.log(v);
   //sendChange
 })

 var dialch2 = new Nexus.Dial('#dial-ch2',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 0,
   'step':1,
   'value': 5
 })

 dialch2.on('change',function(v) {
   console.log(v);
 })

 var dialch3 = new Nexus.Dial('#dial-ch3',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 0,
   'step':1,
   'value': 5
 })

 dialch3.on('change',function(v) {
   console.log(v);
 })

 var dialch4 = new Nexus.Dial('#dial-ch4',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 10,
   'step': 1,
   'value': 5
 })

 dialch4.on('change',function(v) {
   console.log(v);
 })

 var dialch5 = new Nexus.Dial('#dial-ch5',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 0,
   'step':1,
   'value': 5
 })

 dialch5.on('change',function(v) {
   console.log(v);
 })

 var dialch6 = new Nexus.Dial('#dial-ch6',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 0,
   'step':1,
   'value': 5
 })

 dialch6.on('change',function(v) {
   console.log(v);
 })

 var dialch7 = new Nexus.Dial('#dial-ch7',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 10,
   'step':1,
   'value': 5
 })

 dialch7.on('change',function(v) {
   console.log(v);
 })

 var dialch8 = new Nexus.Dial('#dial-ch8',{
   'interaction': 'vertical', // "radial", "vertical", or "horizontal"
   'mode': 'relative', // "relative" or "relative"
   'min': -30,
   'max': 0,
   'step':1,
   'value': 5
 })


 dialch8.on('change',function(v) {
   console.log(v);
 })

 ///MOBILE


var mobdialch1 = new Nexus.Dial('#mob-dial-ch1',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch2 = new Nexus.Dial('#mob-dial-ch2',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch3 = new Nexus.Dial('#mob-dial-ch3',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch4 = new Nexus.Dial('#mob-dial-ch4',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch5 = new Nexus.Dial('#mob-dial-ch5',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch6 = new Nexus.Dial('#mob-dial-ch6',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch7 = new Nexus.Dial('#mob-dial-ch7',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})
var mobdialch8 = new Nexus.Dial('#mob-dial-ch8',{
  'interaction': 'vertical', // "radial", "vertical", or "horizontal"
  'mode': 'relative', // "relative" or "relative"
  'min': 0,
  'max': 10,
  'step':1,
  'value': 5
})


mobdialch8.colorize("accent","#FF7809");
mobdialch7.colorize("accent","#FF7809");
mobdialch6.colorize("accent","#FF7809");
mobdialch5.colorize("accent","#FF7809");
mobdialch4.colorize("accent","#FF7809");
mobdialch3.colorize("accent","#FF7809");
mobdialch2.colorize("accent","#FF7809");
mobdialch1.colorize("accent","#FF7809");
dialch8.colorize("accent","#FF7809");
dialch7.colorize("accent","#FF7809");
dialch6.colorize("accent","#FF7809");
dialch5.colorize("accent","#FF7809");
dialch4.colorize("accent","#FF7809");
dialch3.colorize("accent","#FF7809");
dialch2.colorize("accent","#FF7809");
dialch1.colorize("accent","#FF7809");

mobdialins8.colorize("accent","#5EC20A");
mobdialins7.colorize("accent","#5EC20A");
mobdialins6.colorize("accent","#5EC20A");
mobdialins5.colorize("accent","#5EC20A");
mobdialins4.colorize("accent","#5EC20A");
mobdialins3.colorize("accent","#5EC20A");
mobdialins2.colorize("accent","#5EC20A");
mobdialins1.colorize("accent","#5EC20A");
dialins8.colorize("accent","#5EC20A");
dialins7.colorize("accent","#5EC20A");
dialins6.colorize("accent","#5EC20A");
dialins5.colorize("accent","#5EC20A");
dialins4.colorize("accent","#5EC20A");
dialins3.colorize("accent","#5EC20A");
dialins2.colorize("accent","#5EC20A");
dialins1.colorize("accent","#5EC20A");

var dialchs=[];
dialchs.push(mobdialch1);
dialchs.push(mobdialch2);
dialchs.push(mobdialch3);
dialchs.push(mobdialch4);
dialchs.push(mobdialch5);
dialchs.push(mobdialch6);
dialchs.push(mobdialch7);
dialchs.push(mobdialch8);
dialchs.push(dialch8);
dialchs.push(dialch7);
dialchs.push(dialch6);
dialchs.push(dialch5);
dialchs.push(dialch4);
dialchs.push(dialch3);
dialchs.push(dialch2);
dialchs.push(dialch1);

var dialins = [];
dialins.push(dialins1);
dialins.push(dialins2);
dialins.push(dialins3);
dialins.push(dialins4);
dialins.push(dialins5);
dialins.push(dialins6);
dialins.push(dialins7);
dialins.push(dialins8);
dialins.push(mobdialins1);
dialins.push(mobdialins2);
dialins.push(mobdialins3);
dialins.push(mobdialins4);
dialins.push(mobdialins5);
dialins.push(mobdialins6);
dialins.push(mobdialins7);
dialins.push(mobdialins8);
