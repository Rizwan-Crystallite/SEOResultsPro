


let client_ip
$.getJSON("https://api.ipify.org?format=json", function (t) {
  client_ip = t.ip
}),
  jQuery("form").submit(function (t) {
    t.preventDefault(),
      (async () => {
        await fetch(
          "https://api-bdc.net/data/country-by-ip?ip=" +
            client_ip +
            "&localityLanguage=en&key=bdc_36c0e150fd424f4f97eb61afcc4cf637"
        )
          .then((t) => {
            t.json().then((t) => {
              console.log(t)
              let e = {
                pageURL: window.location.href,
                ip: t.ip,
                form: $(this).serialize(),
              }
              $.ajax({
                url: "https://seoresultspro.com/save2025.php",
                type: "POST",
                data: e,
                beforeSend() {
                  $("form  button").attr("disabled"),
                    $("form  button").html(
                      '<div class="container  text-center"><div class="spinner-border " role="status"><span class="visually-hidden">Loading...</span></div></div>'
                    )
                },
                success: function (t) {
                  window.location.replace("https://seoresultspro.com/thankyou");
                  return false;
                },
              }).fail((t) => {
                console.log(t)
              })
            })
          })
          .catch((t) => {
            console.log(t)
          })
      })()
  })
