/*	Table OF Contents
	==========================
	Carousel
	Ajax Tab
	List view , Grid view  and compact view
	Global Plugins
	Customs Script
	responsive cat-collapse for homepage
	*/



$(document).ready(function() {



    /*==================================
	 Carousel 
	====================================*/

    // Featured Listings  carousel || HOME PAGE
    var owlitem = $(".item-carousel");

    owlitem.owlCarousel({
        //navigation : true, // Show next and prev buttons
        navigation: false,
        pagination: true,
        items: 5,
		itemsDesktopSmall: 	[979,3],
		itemsTablet: [768, 3],
        itemsTabletSmall: [660, 2],
		itemsMobile: [400,1]


    });

    // Custom Navigation Events
    $("#nextItem").click(function() {
        owlitem.trigger('owl.next');
    })
    $("#prevItem").click(function() {
        owlitem.trigger('owl.prev');
    })




    // Featured Listings  carousel || HOME PAGE
    var featuredListSlider = $(".featured-list-slider");

    featuredListSlider.owlCarousel({
        //navigation : true, // Show next and prev buttons
        navigation: false,
        pagination: false,
        items: 5,
        itemsDesktopSmall: 	[979,3],
        itemsTablet: [768, 3],
        itemsTabletSmall: [660, 2],
        itemsMobile: [400,1]


    });

    // Custom Navigation Events
    $(".featured-list-row .next").click(function() {
        featuredListSlider.trigger('owl.next');
    })
    $(".featured-list-row .prev").click(function() {
        featuredListSlider.trigger('owl.prev');
    })


    /*==================================
	 Ajax Tab || CATEGORY PAGE
	====================================*/

   
     $("#ajaxTabs li > a").click(function() {

        $("#allAds").empty().append("<div id='loading text-center'> <br> <img class='center-block' src='images/loading.gif' alt='Loading' /> <br> </div>");
        $("#ajaxTabs li").removeClass('active');
        $(this).parent('li').addClass('active');
        $.ajax({ url: this.href, success: function(html) {
            $("#allAds").empty().append(html);
            $('.tooltipHere').tooltip('hide');
            }
    });
    return false;
    });

    urls = $('#ajaxTabs li:first-child a').attr("href");
    //alert(urls);
    $("#allAds").empty().append("<div id='loading text-center'> <br> <img class='center-block' src='images/loading.gif' alt='Loading' /> <br>  </div>");
    $.ajax({ url: urls, success: function(html) {
            $("#allAds").empty().append(html);
        $('.tooltipHere').tooltip('hide');
    }
    });


    /*==================================
	 List view clickable || CATEGORY 
	====================================*/

    // List view , Grid view  and compact view

    $('.list-view,#ajaxTabs li a').click(function(e) { //use a class, since your ID gets mangled
        e.preventDefault();
        $('.grid-view,.compact-view').removeClass("active");
        $('.list-view').addClass("active");
        $('.item-list').addClass("make-list"); //add the class to the clicked element
        $('.item-list').removeClass("make-grid");
        $('.item-list').removeClass("make-compact");
        $('.item-list .add-desc-box').removeClass("col-sm-9");
        $('.item-list .add-desc-box').addClass("col-sm-7");

        $(function() {
            $('.item-list').matchHeight('remove');
        });
    });

    $('.grid-view').click(function(e) { //use a class, since your ID gets mangled
        e.preventDefault();
        $('.list-view,.compact-view').removeClass("active");
        $(this).addClass("active");
        $('.item-list').addClass("make-grid"); //add the class to the clicked element
        $('.item-list').removeClass("make-list");
        $('.item-list').removeClass("make-compact");
        $('.item-list .add-desc-box').removeClass("col-sm-9");
        $('.item-list .add-desc-box').addClass("col-sm-7");

        $(function() {
            $('.item-list').matchHeight();
            $.fn.matchHeight._apply('.item-list');
        });

    });

    $(function() {
        $('.row-featured .f-category').matchHeight();
        $.fn.matchHeight._apply('.row-featured .f-category');
    });

    $(function() {
        $('.has-equal-div > div').matchHeight();
        $.fn.matchHeight._apply('.row-featured .f-category');
    });


    $('.compact-view').click(function(e) { //use a class, since your ID gets mangled
        e.preventDefault();
        $('.list-view,.grid-view').removeClass("active");
        $(this).addClass("active");
        $('.item-list').addClass("make-compact"); //add the class to the clicked element
        $('.item-list').removeClass("make-list");
        $('.item-list').removeClass("make-grid");
        $('.item-list .add-desc-box').toggleClass("col-sm-9 col-sm-7");

        $(function() {
            $('.adds-wrapper .item-list').matchHeight('remove');
        });


    });



    /*==================================
	Global Plugins || 
	====================================*/

    $('.long-list').hideMaxListItems({
        'max': 8,
        'speed': 500,
        'moreText': 'View More ([COUNT])'
    });


    $('.long-list-user').hideMaxListItems({
        'max': 12,
        'speed': 500,
        'moreText': 'View More ([COUNT])'
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(".scrollbar").scroller(); // custom scroll bar plugin

    $("select.selecter").selecter({ // custom scroll select plugin
        label: "Select An Item"
    });

    $(".selectpicker").selecter({ // category list Short by
        customClass: "select-short-by"
    });




    /*=======================================================================================
		cat-collapse Hmepage Category Responsive view  
	========================================================================================*/
	
	

    $(window).bind('resize load', function() {
	
	
		
        if ($(this).width() < 767) {

        $('.cat-collapse').collapse('hide');
		
            $('.cat-collapse').on('shown.bs.collapse', function() {
                $(this).prev('.cat-title').find('.icon-down-open-big').addClass("active-panel");
                //$(this).prev('.cat-title').find('.icon-down-open-big').toggleClass('icon-down-open-big icon-up-open-big');
            });

            $('.cat-collapse').on('hidden.bs.collapse', function() {
                $(this).prev('.cat-title').find('.icon-down-open-big').removeClass("active-panel");
            })

        } else {
			
		$('.cat-collapse').removeClass('out').addClass('in').css('height', 'auto');
           
        }
		
    });

    // DEMO PREVIEW

    $(".tbtn").click(function() {
        $('.themeControll').toggleClass('active')
    })

    // jobs

    $("input:radio").click(function() {
        if($('input:radio#job-seeker:checked').length > 0){
            $('.forJobSeeker').removeClass('hide');
            $('.forJobFinder').addClass('hide');
        }else{
            $('.forJobFinder').removeClass('hide');
            $('.forJobSeeker').addClass('hide')

        }

    })

    $(".filter-toggle").click(function() {
        $('.mobile-filter-sidebar').prepend("<div class='closeFilter'>X</div>");
        $(".mobile-filter-sidebar" ).animate({"left": "0" }, 250, "linear",function() {
        });
        $('.menu-overly-mask').addClass('is-visible');
    })

    $(".menu-overly-mask").click(function() {
        $(".mobile-filter-sidebar" ).animate({"left": "-251px" }, 250, "linear",function() {
        });
        $('.menu-overly-mask').removeClass('is-visible');
    })


    $(document).on('click', '.closeFilter' , function() {
        $(".mobile-filter-sidebar" ).animate({"left": "-251px" }, 250, "linear",function() {
        });
        $('.menu-overly-mask').removeClass('is-visible');
    });

	(function(e){var t,o={className:"autosizejs",append:"",callback:!1,resizeDelay:10},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o;"getComputedStyle"in window?(t=window.getComputedStyle(u,null),o=u.getBoundingClientRect().width,e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){o-=parseInt(t[i],10)}),s.style.width=o+"px"):s.style.width=Math.max(p.width(),0)+"px"}function a(){var a={};if(t=u,s.className=i.className,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=u.value+i.append,s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=w,n!==e&&(u.style.height=e+"px",f&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),w=0,f=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width();p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(w=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-w||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===p.css("resize")||"vertical"===p.css("resize")?"none":"horizontal"}),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}})(window.jQuery||window.$);

var __slice=[].slice;(function(e,t){var n;n=function(){function t(t,n){var r,i,s,o=this;this.options=e.extend({},this.defaults,n);this.$el=t;s=this.defaults;for(r in s){i=s[r];if(this.$el.data(r)!=null){this.options[r]=this.$el.data(r)}}this.createStars();this.syncRating();this.$el.on("mouseover.starrr","span",function(e){return o.syncRating(o.$el.find("span").index(e.currentTarget)+1)});this.$el.on("mouseout.starrr",function(){return o.syncRating()});this.$el.on("click.starrr","span",function(e){return o.setRating(o.$el.find("span").index(e.currentTarget)+1)});this.$el.on("starrr:change",this.options.change)}t.prototype.defaults={rating:void 0,numStars:5,change:function(e,t){}};t.prototype.createStars=function(){var e,t,n;n=[];for(e=1,t=this.options.numStars;1<=t?e<=t:e>=t;1<=t?e++:e--){n.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"))}return n};t.prototype.setRating=function(e){if(this.options.rating===e){e=void 0}this.options.rating=e;this.syncRating();return this.$el.trigger("starrr:change",e)};t.prototype.syncRating=function(e){var t,n,r,i;e||(e=this.options.rating);if(e){for(t=n=0,i=e-1;0<=i?n<=i:n>=i;t=0<=i?++n:--n){this.$el.find("span").eq(t).removeClass("glyphicon-star-empty").addClass("glyphicon-star")}}if(e&&e<5){for(t=r=e;e<=4?r<=4:r>=4;t=e<=4?++r:--r){this.$el.find("span").eq(t).removeClass("glyphicon-star").addClass("glyphicon-star-empty")}}if(!e){return this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty")}};return t}();return e.fn.extend({starrr:function(){var t,r;r=arguments[0],t=2<=arguments.length?__slice.call(arguments,1):[];return this.each(function(){var i;i=e(this).data("star-rating");if(!i){e(this).data("star-rating",i=new n(e(this),r))}if(typeof r==="string"){return i[r].apply(i,t)}})}})})(window.jQuery,window);$(function(){return $(".starrr").starrr()})

$(function(){

  $('#new-review').autosize({append: "\n"});

  var reviewBox = $('#post-review-box');
  var newReview = $('#new-review');
  var openReviewBtn = $('#open-review-box');
  var closeReviewBtn = $('#close-review-box');
  var ratingsField = $('#ratings-hidden');

  openReviewBtn.click(function(e)
  {
    reviewBox.slideDown(400, function()
      {
        $('#new-review').trigger('autosize.resize');
        newReview.focus();
      });
    openReviewBtn.fadeOut(100);
    closeReviewBtn.show();
  });

  closeReviewBtn.click(function(e)
  {
    e.preventDefault();
    reviewBox.slideUp(300, function()
      {
        newReview.focus();
        openReviewBtn.fadeIn(200);
      });
    closeReviewBtn.hide();
    
  });

  $('.starrr').on('starrr:change', function(e, value){
    ratingsField.val(value);
  });
});


}); // end Ready


	
