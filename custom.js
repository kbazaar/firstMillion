var newDiv = document.createElement("div");
var chatClass = document.createAttribute("class");
var page_id = document.createAttribute("page_id");
var ref = document.createAttribute("ref");
var free_product_match = "฿0.00";

//FREE PRODUCT DISPLAY WITHOUT 
Ecwid.OnPageLoaded.add(function(page){
   if(page.type=='PRODUCT'){
      $('.ecwid-btn--addToBag').show();   
      $('.ecwid-productBrowser-price').each(function( index ){
         if($(this).text() == free_product_match){
            console.log("Is Free Product");
            $(this).parent().find('.ecwid-btn--addToBag').hide();    
            $(this).parent().find('.ecwid-productBrowser-details-qtyPanel').hide();
            $(this).parent().find('.ecwid-productBrowser-sku').hide();
            $(this).parent().find('.ecwid-productBrowser-price').hide();
         }         
      });
   }
   console.log("Current page is of type: " + page.type);
   if(page.type=='SEARCH'){
      $( ".grid-product__price-amount" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
         if($( this ).text() == free_product_match){
         console.log("Is Free Product on Search Page");
         $( this ).hide();
         $( this ).parent().next().text(' tTT-FREE  ➲').addClass('kBazaarViewBlock');
      }
      });
   }
});

chatClass.value = "fb-customerchat";
page_id.value = "147229425981921"; // page_id.value = "202750883546947";
ref.value = "tradewethai_kbazaar";//"web_store";
newDiv.setAttributeNode(chatClass);
newDiv.setAttributeNode(page_id);
newDiv.setAttributeNode(ref);
$('body').append(newDiv);
window.fbMessengerPlugins = window.fbMessengerPlugins || {
init: function () {
  FB.init({
    appId            : '1678638095724206', //1678638095724206
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.0'
  });
}, callable: []
};
window.fbAsyncInit = window.fbAsyncInit || function () {
window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
window.fbMessengerPlugins.init();
};
setTimeout(function () {
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
}, 0);
