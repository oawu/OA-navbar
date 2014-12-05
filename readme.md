# Welcome To OA's navbar!
這是一個 based on [jQuery](http://jquery.com/)、[scss、sass](http://compass-style.org/) 的前端 library。 

---
## 聲明
本作品只限分享於研究、研討性質之使用，並不提供任何有營利效益之使用。  
如有營利用途，務必告知作者 [OA](http://www.ioa.tw/) (<comdan66@gmail.com>)，並且經由作者同意。


<br/>
## 簡介
* 這是一個前端 jQuery extend function，主要架構於 [jQuery](http://jquery.com/)以及[scss、sass](http://compass-style.org/)。  

* 開發者可自行設定 **scss變數**、js extend **options** 來更換樣式。

* 此頁面的 responsive 則是參考 [Facebook](https://www.facebook.com/) 的方式。

<br/>
## 目錄
* [使用](#使用)
* [scss](#scss)
* [options](#options)
* [關於](#關於)


<br/>
## <a name="使用"></a>使用
* 加入 jquery.js

	```html
	  <script src="jquery-1.10.2.min.js" language="javascript" type="text/javascript" /></script>		
```

* <a name="加入 oa-navbar 的 css、js"></a>加入 oa-navbar 的 css、js

	```html
	  <link href="oa-navbar.css" rel="stylesheet" type="text/css">
	  <script src="oa-navbar.js" language="javascript" type="text/javascript" /></script>
```

* Html sample

	```html
	  <div class='navbar'>
	    <div class='item'>關於</div>
	    <div class='item active'>解說</div>
	    <div class='item'>測試</div>
	    <div class='item'>選項一</div>
	    <div class='item'>選項二</div>
	    <div class='item'>選項三</div>
	  </div>
```

* Javascript sample

	```javascript
	  $('.navbar').OAnavbar ();
```

* 效果  
	![](img/readme/01.png)

<br/>
## <a name="scss"></a>scss
* 可在 oa-navbar.scss 中，設定基本變數後再經由 **compass** 編譯成 oa-navbar.css，編譯完成後的 oa-navbar.css 便可在 html 中被匯入引用。 

* oa-navbar.scss 可設定的基本參數如下 :

	```
	  /* 整體網頁 */
	  $mainWidth:      960px;                  // 整體網頁 container 的寬度
	  $mainBackground: rgba(233, 234, 237, 1); // 整體網頁的背景
 
	  /* navbar */
	  $navbarBackgroundColor: rgba(233, 234, 237, 1); // navbar 的背景色
	  $navbarHeight:          40px; // navbar 的高度
	  $navMarginTop:          0;    // navbar 的 margin-top
	  $navMarginBottom:       10px; // navbar 的 margin-bottom
 
	  /* navbar 內的選項 */
	  $navbarItemMarginTop:    8px; // navbar 內選項的 margin-top
	  $navbarItemMarginRight:  2px; // navbar 內選項的 margin-right
	  $navbarItemMarginBottom: 5px; // navbar 內選項的 margin-bottom
	  $navbarItemMarginLeft:   2px; // navbar 內選項的 margin-left
 
	  /* navbar 其他部分 */
	  $lineColor: rgba(162, 162, 162, 1); // navbar 下方的 border color
	  $arrowSize: 7px;                    // active 選項下的箭頭大小
```

* 將 oa-navbar.scss 設定好後，進入 compass 資料夾內，並下 ```compass watch``` 指令即可編譯出 oa-navbar.css，當然前提必須要 <u>有安裝 compass</u>。


<br/>
## <a name="options"></a>options
* Html sample

	```html
	  <div class='navbar'>
	    <div class='nav'>關於</div>
	    <div class='nav active'>解說</div>
	    <div class='nav'>測試</div>
	    <div class='nav'>選項一</div>
	    <div class='nav'>選項二</div>
	    <div class='nav'>選項三</div>
	  </div>
```

* Javascript sample

	```javascript
	  $('.navbar').OAnavbar ({
	    itemSelector: '.nav', // 子元素的 selector
	    itemsTextAlign: 'right' // navbar 內的選項把放方式，有 center、left、right 三種
	  });
```

* 效果  
	![](img/readme/02.png)
	
<br/>
## <a name="關於"></a>關於
* 作者名稱 - [OA Wu](http://www.ioa.tw/)

* E-mail - <comdan66@gmail.com>

* 作品名稱 - OA-navbar

* 最新版本 - 1.0.1

* GitHub - [OA-navbar](https://github.com/comdan66/OA-navbar)

* 更新日期 - 2014/12/05