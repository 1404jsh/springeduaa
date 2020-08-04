
    const writeBtn = document.getElementById("writeBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const listBtn = document.getElementById("listBtn");
    const writeFrm = document.getElementById("writeFrm");

    writeBtn.addEventListener("click", writeBtn_f);
    cancelBtn.addEventListener("click", cancelBtn_f);
    listBtn.addEventListener("click", listBtn_f);

    //등록
    function writeBtn_f(e) {
    e.preventDefault();
      console.log("등록");
      //1) 유효성 체크
if(!checkValidation()){
return false;
}
      //2) 서버전송
      writeFrm.submit();
    }

    //취소
    function cancelBtn_f(e) {
      console.log("취소");
      //입력한 내용 clear
      writeFrm.reset();
    }

    //목록
    function listBtn_f(e) {
      console.log("목록");
      //목록리스트로 이동
  		 location.href = "list";
    }
    
    //유효성체크
      function checkValidation() {
        //분류지정
        const cidTag = document.getElementById("boardCategoryVO.cid");
        if (cidTag.options[cidTag.selectedIndex].value==0) {
        
        document.getElementById('boardCategoryVO.cid.error').textContent = "분류를 지정하세요.";
          return false;
        }
        //제목
        const btitleTag = document.getElementById("btitle");
        if (btitleTag.value.trim().length == 0){
         document.getElementById('btitle.error').textContent = "제목을 작성바랍니다.";
         
          return false;
        }
        //작성자
        const bidTag = document.getElementById("bid");
        if(bidTag.value.trim().length == 0){
                 document.getElementById('bid.error').textContent = "아이디를 작성바랍니다.";
                 
          return false;
          }
          //정규식표현
       let idExpReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(!idExpReg.test(bidTag.value)){
        document.getElementById('bid.error').textContent="이메일 형식에 맞지 않습니다 ex)aaa@bbb.com";
       
        return false;
        
        }
        //내용
        const bcontentTag = document.getElementById("bcontent");
        if(bcontentTag.value.trim().length < 4 ){
         document.getElementById('bcontent.error').textContent ="내용은 4자 이상 작성바랍니다.";
        
          return false;
        }
         document.getElementById('bcontent.error').textContent = "";
       
         //파일사이즈
         const filesTag = document.getElementById('files');
         let sum = 0;
         
         //첨부파일 합 구하기
      Array.from(filesTag.files).forEach(file=>{sum += file.szie}); 
      
       /*
       Array.from(filesTag).forEach(
       function(file) {
       sum += file.szie 
       }
       );*/
       
       //첨부파일 합계가 10M초과여부 체크
       if(sum > 10485760){
                document.getElementById('files.error').textContent = "10M이하로 첨부 가능합니다.";
                return false;
                }
                return true;
       }
   