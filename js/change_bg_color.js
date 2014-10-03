/*
  change_bg_color.js

  written by Yuki Nakagawa

  Change the background color using flag variable;
  set attribute "header-color-cafe" and "footer-color-cafe" if flag == 0
  and attribute "header-color-bar"  and "footer-color-bar"  if flag == 1

  In this script, we keep flag variable in different html pages using cookies.

  USAGE:
  You have to define bgFlag in <head> as a global variable.

  References:
  ・HTMLページ間の遷移をする際に値を引き継ぐことは出来ないでしょうか
  http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1160551091
  ・クッキーの使用方法
  http://so-zou.jp/web-app/tech/programming/javascript/cookie/
  ・jQuery - attr関数ではなくaddClass関数を使う理由
  http://atamoco.boy.jp/javascript/jquery/function/addClass.php
  ・jQueryで要素を指定する方法いろいろ
  http://webhako.net/jquery/select-element/

*/

function changeBgColor(){

  // if BAR MENU page is loaded, change the background color for header and footer
  if ( bgFlag == 0 ) {

    // change class "header-color-bar" to "header-color-cafe"
    $('#header, #logo, #gnav, #gnav_imagetext, #gnav_current_position').removeClass('header-color-bar').addClass('header-color-cafe');

    // change class "header-color-bar" to "header-color-cafe"
    $('#footer, #footer_logo').removeClass('footer-color-bar').addClass('footer-color-cafe');

    // change background image for logo
    $('#logo span').css('background','url(images/logo/logo_cafe.png) no-repeat 0 0');

    // change gnav image
    $('#gnav_imagetext li a').css('background-image','url(images/gnav/gnav_all_cafe.png)');

    // change color bar indicating the current position
    $('#gnav_current_position_3_reservation').css('background-color','#f00');
    $('#gnav_current_position_4_aboutus'    ).css('background-color','#f00');
    $('#gnav_current_position_5_access'     ).css('background-color','#f00');
    $('#gnav_current_position_6_news'       ).css('background-color','#f00');
    $('#gnav_current_position_7_members'    ).css('background-color','#f00');

  // if BAR MENU page is loaded, change the background color for header and footer
  } else if ( bgFlag == 1) {

    // change class "header-color-cafe" to "header-color-bar"
    $('#header, #logo, #gnav, #gnav_imagetext, #gnav_current_position').removeClass('header-color-cafe').addClass('header-color-bar');

    // change class "footer-color-cafe" to "footer-color-bar"
    $('#footer, #footer_logo').removeClass('footer-color-cafe').addClass('footer-color-bar');

    // change background image for logo
    $("#logo span").css("background","url(images/logo/logo_bar.png) no-repeat 0 0");

    // change gnav image
    $('#gnav_imagetext li a').css('background-image','url(images/gnav/gnav_all_bar.png)');

    // change color bar indicating the current position
    $('#gnav_current_position_3_reservation').css('background-color','#8cff27');
    $('#gnav_current_position_4_aboutus'    ).css('background-color','#8cff27');
    $('#gnav_current_position_5_access'     ).css('background-color','#8cff27');
    $('#gnav_current_position_6_news'       ).css('background-color','#8cff27');
    $('#gnav_current_position_7_members'    ).css('background-color','#8cff27');

  // if bgFlag is "undefined"
  } else {
    bgFlag = 0;
    setCookie();
    changeBgColor();
  }
}

function setCookie(){
  // without expires settings
  document.cookie = 'flag'+'='+bgFlag;
};

function getCookie() {
  var result = null;
  var cookieName = 'flag' + '=';
  var allcookies = document.cookie;
  var position = allcookies.indexOf( cookieName );
  if( position != -1 ) {
      var startIndex = position + cookieName.length;
      var endIndex = allcookies.indexOf( ';', startIndex );
      if( endIndex == -1 ) {
        endIndex = allcookies.length;
      }
      result = decodeURIComponent( allcookies.substring( startIndex, endIndex ) );
  }
  return result;
}