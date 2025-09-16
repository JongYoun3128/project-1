const idBox = document.querySelector(".id-box");
const passwordBox = document.querySelector(".password-box");

const member = async () => {
    let formData = {
        memberId: idBox.value,
        password: passwordBox.value,
        isAdult: true,
    };
    const res = await fetch("http://tomhoon.my:12000/api/v1/member/join", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const 결과 = await res.json();
    console.log(결과);

    if (결과.status == "success") {
        alert("회원가입이 완료되었습니다");
        // Cookie, Session, Local Storage
        localStorage.setItem("isLogin", "true");
        location.href = "index.html";
    } else {
        alert("회원가입이 실패하였습니다");
        localStorage.setItem("isLogin", "false");
    }
};

const login = async () => {
    let formData = {
        memberId: idBox.value,
        password: passwordBox.value,
    };

    const res = await fetch("http://tomhoon.my:12000/api/v1/member/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const 결과 = await res.json();
    if (결과.status == "success") {
        alert("로그인이 완료되었습니다");
        // Cookie, Session, Local Storage
        localStorage.setItem("isLogin", "true");
        location.href = "index.html";
    } else {
        alert("로그인이 실패하였습니다");
        localStorage.setItem("isLogin", "false");
    }
};
