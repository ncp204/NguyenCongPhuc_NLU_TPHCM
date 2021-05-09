
      var modal1 = document.getElementById("id01");
      var modal2 = document.getElementById("id02");
      var modal3 = document.getElementById("id03");

      window.onclick = function (event) {
        if (
          event.target == modal1 ||
          event.target == modal2 ||
          event.target == modal3
        ) {
          modal1.style.display = "none";
          modal2.style.display = "none";
          modal3.style.display = "none";
        }
      };

      function openAndClose1() {
        modal1.style.display = "block";
        modal2.style.display = "none";
      }

      function openAndClose2() {
        modal1.style.display = "none";
        modal2.style.display = "block";
      }

      var modal3 = document.getElementById("id03");
      var modal1 = document.getElementById("id01");
      function openAndClose3() {
        modal1.style.display = "none";
        modal3.style.display = "block";
      }
 