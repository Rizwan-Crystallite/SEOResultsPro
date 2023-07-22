// navbar 
    function forHeader(){let e=document.querySelector("header .nav--toggle"),n=document.querySelector("header .nav--menu--close"),r=document.querySelector("header .nav--menu");e.addEventListener("click",function(){r.classList.add("is-active")}),n.addEventListener("click",function(){r.classList.remove("is-active")})}$(document).ready(function(){forHeader()});
// Hearder
let header = ` <div class="container">
<nav>
    <div class="nav--toggle">
        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/7412b7c5-f0de-4523-95c4-3b48effe5100/public"
            alt="seoresultspro" width="60" height="60">
    </div>
    <div class="nav--menu">
        <div class="nav--menu--close">
            <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/6e2861b7-47da-4f15-dff7-00f9f26b0200/public"
                alt="seoresultspro" width="61" height="60">
        </div>
        <div class="left--menu--logo">
            <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/780a6e57-df79-401c-a2e4-8375f875cd00/public"
                alt="logo" width="168" height="50">
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/best-seo-services-provider/">SEO</a></li>
            <li><a href="/website-design-agency/">Web Design</a></li>
            <li><a href="/about-us/">About</a></li>
            <li><a href="/seo-blogs/">Blogs</a></li>
            <li><a href="/contact-us/">Contact Us</a></li>
            <li><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#ourWebModal"
                    class="popBtn forMob">Get A Call</a></li>
        </ul>
    </div>
    <a href="/" class="nav--logo">
        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/780a6e57-df79-401c-a2e4-8375f875cd00/public"
            alt="logo" width="168" height="50">
    </a>
    <div class="nav--contact">
        <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#ourWebModal"
            class="header--btn--poppup  popBtn">
            <span class="text-white">Get A Call</span>
        </a>
        <a href="tel:(833)-800-0083" class="call--cta">(833)-800-0083</a>
        <a href="javascript:;" class="agent-avatar">
            <span>initial consultation</span>
            Contact: <strong>Jessica</strong>
        </a>
    </div>
</nav>
</div>`;
document.querySelector(".main--header").innerHTML = header;

// Footer
let postFooter = `
<div class="container">
        <div class="row">
            <div class="col-lg-4 mb-lg-0 mb-5">
                <div class="logo text-lg-start text-center">
                    <a href="/" class="m-0">
                        <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/780a6e57-df79-401c-a2e4-8375f875cd00/public"
                            alt="footer-logo" width="168" height="50">
                    </a>
                </div>
                <p class="text-l-black my-3 text-lg-start text-center">Improve leads and conversions from your
                    Professional SEO and Website Design Services That ADD Clients, MULTIPLY Profit, and SUBTRACT the
                    chances of being ignored by GOOGLE and Potential Customers!
                </p>
                <div
                    class="socialIcons d-flex gap-3 align-items-center justify-content-lg-start justify-content-center">
                    <span class="text-l-black line-height-0">FOLLOW US -</span>
                    <ul class="iconsList d-flex gap-3 align-items-center">
                        <li>
                            <a href="https://www.facebook.com/seoresultspro/" target="_blank" rel="noopener noreferrer" class="social_icon">
                                <img alt="fb" width="13" height="22" src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/b13b2b6e-98b1-40af-620a-079c0922b800/public">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/seoresultspro/" target="_blank" rel="noopener noreferrer" class="social_icon">
                                <img alt="insta" width="23" height="22" src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1d0a3157-9528-46fc-e067-b45740d74100/public">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/seorpro/" target="_blank" rel="noopener noreferrer" class="social_icon">
                                <img alt="twitter" width="23" height="22" src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/9656010f-3d32-488b-9985-46d4cc2e5600/public">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/seo-results-pro/" target="_blank" rel="noopener noreferrer" class="social_icon">
                                <img alt="linkedin" width="23" height="23" src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/d89ca371-38a6-430a-65ae-73509d120a00/public">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-6  mb-md-0 mb-2 text-md-start">
                <h6 class="text-black text-uppercase font-17 fw-600 mb-md-4 mb-2">Quick Links</h6>
                <ul class="links">
                    <li><a href="/" class="font-15 text-black home active">Home</a></li>
                    <li><a href="/about-us/" class="font-15 text-black">About Us</a></li>
                    <li><a href="/seo-blogs/" class="font-15 text-black">Blogs</a></li>
                    <li><a href="/contact-us/" class="font-15 text-black">Contact Us</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-6 mb-md-0 mb-2 text-md-start">
                <h6 class="text-black text-uppercase font-17 fw-600 mb-md-4 mb-2">Services</h6>
                <ul class="links">
                    <li><a href="/best-seo-services-provider/" class="font-15 text-black">Search Engine
                            Optimization</a></li>
                    <li><a href="/website-design-agency/" class="font-15 text-black">Web Design Services</a></li>
                </ul>
                <div class="d-lg-block d-none">
                    <h6 class="text-black text-uppercase font-17 fw-600 mb-4">Other Links</h6>
                    <ul class="links">
                        <li><a href="/terms-and-conditions/" class="font-15 text-black">Terms And Conditions</a>
                        </li>
                        <li><a href="/privacy-policy/" class="font-15 text-black">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-6 text-md-start">
                <h6 class="text-black text-uppercase font-17 fw-600 mb-md-4 mb-2">Get In Touch</h6>
                <ul class="links">
                    <li>
                        <a href="tel:(833)-800-0083" class="font-15 text-black">
                            <span class="me-1">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1262e3b2-ebfc-443d-68a1-868d28ccfb00/public"
                                    alt="call" width="12" height="12">
                            </span> (833)-800-0083
                        </a>
                    </li>
                    <li>
                        <a href="tel:1-213-477-7023" class="font-15 text-black">
                            <span class="me-1">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1262e3b2-ebfc-443d-68a1-868d28ccfb00/public"
                                    alt="call" width="12" height="12">
                            </span> 1-213-477-7023
                        </a>
                    </li>
                    <li><a href="mailto:support@seoresultspro.com" class="font-15 text-black">
                            <span class="me-1">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/f77c80bb-911a-45f6-1b85-90b14f27bf00/public"
                                    alt="call" width="12" height="12">
                            </span>
                            support@seoresultspro.com
                        </a></li>
                    <li>
                        <a href="javascript:;" class="font-15 text-black d-flex">
                            <span class="me-1">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/15293bf1-ad99-4b61-66fc-cb4774478500/public"
                                    alt="call" width="12" height="12">
                            </span>
                            2CAL 350 South Grand Avenue,<br> Los Angeles, CA 90071</a>
                            
               
                    </li>
                    <li>
                        <a href="javascript:;" class="font-15 text-black d-flex">
                            <span class="me-1">
                                <img src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/15293bf1-ad99-4b61-66fc-cb4774478500/public"
                                    alt="call" width="12" height="12">
                            </span>
                            8 The Green STE 300, Dover, Delaware 19901</a>
                            
                           
                    </li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-6 text-md-start">
                <div class="d-lg-none d-block">
                    <h6 class="text-black text-uppercase font-17 fw-600 mb-md-4 mb-2">Other Links</h6>
                    <ul class="links">
                        <li><a href="/terms-and-conditions/" class="font-15 text-black">Terms And Conditions</a>
                        </li>
                        <li><a href="/privacy-policy/" class="font-15 text-black">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="ourWebModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;"
        aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content ourPopup">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <div class="popup">
                        <div class="container">
                            <div class="popup-card">
                                <div class="row h-100 align-items-center">
                                    <div class="col-xl-10 offset-xl-2 justify-content-center">
                                        <div class="popup-card-content text-center">
                                            <h3 class="font-50 text-l-purple mb-4">Get A Call</h3>
                                            <h4 class="font-40 text-black mb-4 letter-spacing1">
                                                Schedule A Strategy Session With An <br>
                                                Experienced Digital Marketer
                                            </h4>
                                            <h6 class="font-17 text-black mx-auto fw-700">
                                                Our team is eager to assist you with any question you have. just
                                                you <br>need to fill the form so that our expert will assist you and
                                                also provide you your website <br> SEO Audit Report.
                                            </h6>
                                            <div class="row justify-content-center">
                                                <div class="col-lg-10">
                                                    <div class="form-popup mt-4">
                                                        <form id="leadPopupForm" class="popup-form">
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <div class="input-group mb-3">
                                                                        <input name="name" id="name" type="text"
                                                                            placeholder="Full Name" class="w-100"
                                                                            required="">
                                                                    </div>
                                                                    <div class="input-group mb-lg-0 mb-3">
                                                                        <input type="phone" minlength="7" maxlength="15" id="phone" name="phone"
                                                                            onkeypress="return /[0-9]/i.test(event.key)"
                                                                            class="w-100" placeholder="Phone Number"
                                                                            required="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <textarea name="comments" id="comments"
                                                                        placeholder="Let Us know Time And Date To Call You."
                                                                        cols="30" rows="3" required=""></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="mt-4 mt-lg-4 mx-auto text-center">
                                                                <button type="submit"
                                                                    class="primary-btn btn-sm-mbl text-center">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
document.querySelector("footer").innerHTML = postFooter;



