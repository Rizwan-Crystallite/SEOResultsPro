
function fetchJSONFile(a,i){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var a=JSON.parse(e.responseText);i&&i(a)}},e.open("GET",a),e.send()}function loadjson(a){fetchJSONFile("../webimages/js/"+a+".json",function(a){a.map(({images:a})=>{let i="";a.map(a=>{console.log(a),i+=` 
                    <div class="beauty col-lg-4 mb-3">
                        <div class="frams">
                            <img src="${a}" id="portfolio1" class="img-fluid"  alt="SeoResultsPro" width="356" height="358">
                            <div class="overly"></div>
                                <a href="${a}" class="modal-link" data-lightbox="mygallery">
                                    <i class="fa fa-plus img-background img-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    `}),$("#grid-container").html(i)})})}fetchJSONFile("../webimages/js/tabs.json",function(a){a.map(({title:a,filter:i})=>{$("#appendButtons").append(`<button class="button" onclick="loadjson('${i}')">${a}</button>`)})}),fetchJSONFile("../webimages/js/Airline.json",function(a){a.map(({images:a})=>{let i="";a.map(a=>{console.log(a),i+=`
                    <div class="beauty col-lg-4 mb-3">
                        <div class="frams">
                            <img src="${a}" id="portfolio1" class="img-fluid" alt="SeoResultsPro" width="416" height="600">
                            <div class="overly"></div>
                                <a href="${a}" class="modal-link"  data-lightbox="mygallery">
                                    <i class="fa fa-plus img-background img-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    `}),$("#grid-container").html(i)})}),lightbox.option({albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,maxWidth:800,maxHeight:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,sanitizeTitle:!1});