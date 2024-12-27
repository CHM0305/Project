// 제출 이벤트 처리
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // 기존 이벤트 차단

    // 입력 값 가져오기
    let userId = event.target.username.value; 
    let userPw1 = event.target.password.value; 
    let userPw2 = event.target.passwordCheck.value;
    let userName = event.target.name.value;
    let userPhone = event.target.phone.value;
    let userGender = event.target.gender.value;
    let userEmail = event.target.email.value;
    
    // 아이디 유효성 검사: 6자 이상, 영문 소문자와 숫자 포함
    const idPattern = /^[a-z0-9]{6,}$/;
    if (!idPattern.test(userId)) {
        alert("아이디는 6자 이상이며, 영문 소문자와 숫자를 포함해야 합니다.");
        return; // 문제 발생 시 함수 종료
    }

    // 비밀번호 유효성 검사: 8~30자, 영문 대소문자, 숫자, 특수문자 포함
    const pwPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,30}$/;
    if (!pwPattern.test(userPw1)) {
        alert("비밀번호는 8자 이상, 영문 대소문자, 숫자, 특수문자를 포함해야 합니다.");
        return; // 문제 발생 시 함수 종료
    }

    // 비밀번호 확인: 비밀번호와 일치해야 함
    if (userPw1 !== userPw2) {
        alert("비밀번호가 일치하지 않습니다.");
        return; // 문제 발생 시 함수 종료
    }

    // 이메일 유효성 검사: 일반적인 이메일 형식 검사
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(userEmail)) {
        alert("유효한 이메일 주소를 입력해주세요.");
        return; // 문제 발생 시 함수 종료
    }

    // 전화번호 유효성 검사: 숫자만 10~11자리
    const phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(userPhone)) {
        alert("전화번호는 10~11자리 숫자만 입력해주세요.");
        return; // 문제 발생 시 함수 종료
    }

    // 가입 성공 시 새로운 페이지로 결과 표시

    // 회원가입 완료 후 결과를 new page(welcome.html)로 전송
    const userInfo = {
        userId,
        userName,
        userPhone,
        userGender,
        userEmail
    };

    // URL 파라미터로 정보 전송
    const queryString = new URLSearchParams(userInfo).toString();

    // 리다이렉트
    window.location.href = `welcome.html?${queryString}`;
});

// 다크모드 버튼 클릭 시 스타일 전환
const darkModeButton = document.getElementById("dark-mode-toggle");

darkModeButton.addEventListener("click", function() {
    // body에 dark-mode 클래스 토글
    document.body.classList.toggle("dark-mode");
});
