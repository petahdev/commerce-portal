!function(k){k.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(a,t){woodmartThemeModule.wdElementorAddAction(t,function(){woodmartThemeModule.quickShopVariationForm()})}),woodmartThemeModule.quickShopVariationForm=function(){function y(t){!1===t.data("product_variations")&&(t.addClass("wd-loading"),k.ajax({url:woodmart_settings.ajaxurl,data:{action:"woodmart_load_available_variations",id:t.data("product_id")},method:"get",dataType:"json",success:function(a){0<a.length&&t.data("product_variations",a).trigger("reload_product_variations")},complete:function(){t.removeClass("wd-loading");var a=t.find("select.wd-changes-variation-image");a.length&&a.first().val().length&&a.first().trigger("change")},error:function(){console.log("ajax error")}}))}woodmartThemeModule.$document.on("mouseenter touchstart mousemove",".wd-product.product-type-variable",function(){var i,n,s,d=k(this),r=d.find(".variations_form"),o=d.find(".button.product_type_variable"),l=d.find(".price").first(),t=d.find(".product-image-link > img, .product-image-link > picture > img"),e=d.find(".product-image-link picture source"),a=t.attr("src"),c=t.attr("srcset"),u=t.attr("sizes"),m=o.text(),h=woodmart_settings.add_to_cart_text,v=l.html(),f=d.find(".wd-product-stock"),g=d.find(".wd-product-sku").find("span").not(".wd-label"),w=o.siblings(".quantity").find("input[name=quantity]"),_=w.attr("max"),p=w.attr("min");function C(a){a.data("product_variations")&&(o.find("span").text(m),o.data("purchasable",!1),d.removeClass("wd-variation-active"),a.find(".variations select").each(function(){var a=k(this),t=a.parent().find(".wd-swatches-product"),e=a.html(),e=k(e);a.val()&&(o.find("span").text(h),o.data("purchasable",!0),d.addClass("wd-variation-active")),t.find(".wd-swatch").removeClass("wd-enabled").addClass("wd-disabled"),e.each(function(){var a=k(this).val();k(this).hasClass("enabled")?t.find('div[data-value="'+a+'"]').removeClass("wd-disabled").addClass("wd-enabled"):t.find('div[data-value="'+a+'"]').addClass("wd-disabled").removeClass("wd-enabled")})}))}function b(a){1<a.image.thumb_src.length&&(d.addClass("wd-loading-image"),t.attr("src",a.image.thumb_src),t.attr("srcset")&&!a.image.srcset&&t.attr("srcset",a.image.thumb_src),t.one("load",function(){d.removeClass("wd-loading-image")})),1<a.image.srcset.length&&(t.attr("srcset",a.image.srcset),0<e.length)&&e.attr("srcset",a.image.srcset),1<a.image.sizes.length&&(t.attr("sizes",a.image.sizes),0<e.length)&&e.attr("image_sizes",a.image.sizes)}!r.length||r.hasClass("wd-variations-inited")||"undefined"!=typeof elementorFrontend&&elementorFrontend.isEditMode()||(f.length&&(i=f.text(),n=f.attr("class")),g.length&&(s=g.text()),r.wc_variation_form(),r.addClass("wd-variations-inited"),r.on("click",".wd-swatch",function(){var e,a=k(this),t=a.parents(".wd-product"),i=a.data("value"),n=a.parent().data("id"),n=r.find("select#"+n);r.hasClass("wd-form-inited")||(r.addClass("wd-form-inited"),y(r)),C(r),a.parents(".variations_form.wd-clear-double").length&&a.hasClass("wd-active")?(n.val("").trigger("change"),a.removeClass("wd-active"),e=!1,t.find(".wd-swatch").each(function(a,t){if(k(t).hasClass("wd-active"))return e=!0}),e||t.trigger("wdImagesGalleryInLoopOn",t)):a.hasClass("wd-active")||a.hasClass("wd-disabled")||(n.val(i).trigger("change"),a.parent().find(".wd-active").removeClass("wd-active"),a.addClass("wd-active"),t.trigger("wdImagesGalleryInLoopOff",t),C(r))}),r.on("change","select",function(){if(r.parents(".wd-products.grid-masonry").length&&void 0!==k.fn.isotope&&setTimeout(function(){r.parents(".wd-products.grid-masonry").isotope("layout")},100),r.hasClass("wd-form-inited"))return!1;r.addClass("wd-form-inited"),y(r)}),r.on("show_variation",function(a,t,e){r.find(".wd-swatch").length&&!r.find(".wd-swatch.wd-active").length&&r.find("select").each(function(){var a=k(this),t=a.val();t&&a.siblings(".wd-swatches-product").find(".wd-swatch[data-value="+t+"]").addClass("wd-active")}),1<t.price_html.length&&l.html(t.price_html),b(t),f.length&&(t.availability_html?(f.removeClass("in-stock available-on-backorder out-of-stock"),0<t.availability_html.search("available-on-backorder")?f.addClass("available-on-backorder"):0<t.availability_html.search("out-of-stock")?f.addClass("out-of-stock"):f.addClass("in-stock"),f.text(t.availability_html.replace(/<\/?[^>]+(>|$)/g,""))):(f.attr("class",n),f.text(i))),g.length&&(t.sku?g.text(t.sku):g.text(s)),w.length&&(w.val(p),w.attr("max",t.max_qty).attr("min",t.min_qty)),r.addClass("variation-swatch-selected")}),r.on("woocommerce_update_variation_values",function(){C(r)}),r.on("hide_variation",function(){l.html(v),o.find("span").text(m),t.attr("src")!==a&&(t.attr("src",a),t.attr("srcset",c),t.attr("sizes",u),0<e.length)&&e.attr("srcset")!==c&&(e.attr("srcset",c),e.attr("image_sizes",u)),f.length&&(f.attr("class",n),f.text(i)),g.length&&g.text(s),w.length&&w.attr("max",_).attr("min",p)}),r.on("click",".reset_variations",function(){r.find(".wd-active").removeClass("wd-active"),r.removeClass("wd-form-inited"),d.trigger("wdImagesGalleryInLoopOn",d)}),r.on("reset_data",function(){var a=k(this),t=!0;r.find(".variations select").each(function(){0===(a.val()||"").length&&(t=!1)}),t&&r.find(".wd-active").removeClass("wd-active"),r.removeClass("variation-swatch-selected"),C(r)}),r.find("select.wd-changes-variation-image").on("change",function(){var a=k(this),e=a.attr("name"),i=a.val(),a=r.data("product_variations"),t=!1;r.find("select").each(function(){if(!k(this).val())return!(t=!0)}),t&&i&&a&&k.each(a,function(a,t){if(t.attributes[e]===i)return setTimeout(function(){b(t)}),!1})}),o.on("click",function(a){var t=r.find(".single_add_to_cart_button");k(this).data("purchasable")&&t.length&&(a.preventDefault(),"undefined"!=typeof wc_add_to_cart_variation_params&&t.hasClass("disabled")?t.hasClass("wc-variation-is-unavailable")?alert(wc_add_to_cart_variation_params.i18n_unavailable_text):t.hasClass("wc-variation-selection-needed")&&alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text):(w.length&&(a=w.val())&&r.find(".single_variation_wrap .variations_button input[name=quantity]").val(a),r.trigger("submit"),o.addClass("loading"),woodmartThemeModule.$body.one("added_to_cart",function(){o.removeClass("loading").addClass("added")})))}))})},k(document).ready(function(){woodmartThemeModule.quickShopVariationForm()})}(jQuery);