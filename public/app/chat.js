// window.__lc = window.__lc || {};
// window.__lc.license = 18650526;
// window.__lc.integration_name = "manual_onboarding";
// window.__lc.product_name = "livechat";
// ; (function (n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n) } var e = { _q: [], _h: null, _v: "2.0", on: function () { i(["on", c.call(arguments)]) }, once: function () { i(["once", c.call(arguments)]) }, off: function () { i(["off", c.call(arguments)]) }, get: function () { if (!e._h) throw new Error("[LiveChatWidget] You can"t use getters before load."); return i(["get", c.call(arguments)]) }, call: function () { i(["call", c.call(arguments)]) }, init: function () { var n = t.createElement("script"); n.async = !0, n.type = "text/javascript", n.src = "https://cdn.livechatinc.com/tracking.js", t.head.appendChild(n) } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e }(window, document, [].slice))

var Tawk_API = Tawk_API || {}

;(function () {
  var s1 = document.createElement("script")
  var s0 = document.getElementsByTagName("script")[0]

  s1.async = true
  s1.src = "https://embed.tawk.to/677ff8e1af5bfec1dbe94876/1ih5u8cd1"
  s1.charset = "UTF-8"
  s1.setAttribute("crossorigin", "*")
  s0.parentNode.insertBefore(s1, s0)
})()


jQuery("form").submit(function (t) {
  t.preventDefault(),
      (async () => {
          await fetch("https://api-bdc.net/data/country-by-ip?ip=" + client_ip + "&localityLanguage=en&key=bdc_36c0e150fd424f4f97eb61afcc4cf637")
              .then((t) => {
                  t.json().then((t) => {
                      console.log(t);
                      let e = { pageURL: window.location.href, ip: t.ip, form: $(this).serialize() };
                      $.ajax({
                          url: "https://seoresultspro.com/save.php",
                          type: "POST",
                          data: e,
                          beforeSend() {
                              $("form  button").attr("disabled"), $("form  button").html('<div class="container  text-center"><div class="spinner-border " role="status"><span class="visually-hidden">Loading...</span></div></div>');
                          },
                          success: function (t) {
                              window.location.href = "https://seoresultspro.com/thankyou";
                          },
                      }).fail((t) => {
                          console.log(t);
                      });
                  });
              })
              .catch((t) => {
                  console.log(t);
              });
      })();
});