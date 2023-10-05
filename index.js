var tabselects = document.getElementsByClassName("tab-select");
      var tabcontents = document.getElementsByClassName("tabcontent");
      function opentab(tabname) {
        for (tabselect of tabselects) {
          tabselect.classList.remove("hoverunderlines");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("activebuttons");
        }
        event.currentTarget.classList.add("hoverunderlines");
        document.getElementById(tabname).classList.add("activebuttons");
      }