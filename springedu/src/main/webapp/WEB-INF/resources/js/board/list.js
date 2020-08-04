
      const writeBtn = document.getElementById("writeBtn");
      const findBtn = document.getElementById("findBtn");

      writeBtn.addEventListener("click", writeBtn_f);
      findBtn.addEventListener("click", findBtn_f);

      function writeBtn_f(e) {
        console.log("글쓰기 클릭됨!");
         window.location.href = "./writeForm";
      }
      function findBtn_f(e) {
        console.log("검색버튼 클릭됨");
      }
  