!function(t){woodmartThemeModule.headerCategoriesMenu=function(){var e,n,o,d,a,s,i;1024<woodmartThemeModule.windowWidth||(e=t(".wd-header-cats"),n=e.find(".categories-menu-dropdown"),o=e.find(".menu-item-has-children"),e.find(".menu-opener"),d=200,o.find("> a").before('<span class="drop-category"></span>'),n.on("click",".drop-category",function(){var e=t(this),n=e.parent().find("> .wd-dropdown-menu, >.sub-sub-menu");n.hasClass("child-open")?(e.removeClass("act-icon"),n.slideUp(d).removeClass("child-open")):(e.addClass("act-icon"),n.slideDown(d).addClass("child-open"))}),e.on("click",".menu-opener",function(e){e.preventDefault(),(a()?i:s)()}),n.on("click","a",function(){i(),n.stop().attr("style","")}),a=function(){return n.hasClass("categories-opened")},s=function(){n.addClass("categories-opened").stop().slideDown(d)},i=function(){n.removeClass("categories-opened").stop().slideUp(d)})},t(document).ready(function(){woodmartThemeModule.headerCategoriesMenu()})}(jQuery);