// const tab_btn = document.querySelectorAll(".tab-btn");

// tab_btn.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         tab_btn.forEach((t) => t.classList.remove("active"));
//         tab.classList.add("active");
//         // 這裡可以加入切換不同表單的邏輯
//     });
// });
// // 按註冊改login-button的文字變成下一步
// const tab_btn_login = document.getElementById("tab-btn-login");
// const tab_btn_logout = document.getElementById("tab-btn-logout");
// const loginButton = document.getElementById("loginButton");
// tab_btn_logout.addEventListener("click", () => {
//     if (loginButton.textContent === "登入") {
//         loginButton.textContent = "下一步";
//     }
// });
// // 按登入改login-button的文字變成登入
// tab_btn_login.addEventListener("click", () => {
//     if (loginButton.textContent === "下一步") {
//         loginButton.textContent = "登入";
//     }
// });

// // 獲取元素
// const loginBtn = document.getElementById("loginBtn");
// const login_container = document.getElementById("login-container");
// const overlay = document.getElementById("overlay");
// // 點擊登入按鈕時顯示登入框
// loginBtn.addEventListener("click", () => {
//     login_container.style.display = "block";
//     overlay.style.display = "block";
// });

// // 點擊背景區域隱藏登入框
// overlay.addEventListener("click", (e) => {
//     if (e.target === overlay) {
//         login_container.style.display = "none";
//         overlay.style.display = "none";
//     }
// });

// // 用戶點擊下一步時跳轉頁面
// loginButton.addEventListener("click", (e) => {
//     e.preventDefault(); // 阻止表單的默認提交行為
//     if (loginButton.textContent === "下一步") {
//         window.location.href = "https://www.google.com";
//     }
// });

const tab_btn = document.querySelectorAll(".tab-btn");

tab_btn.forEach((tab) => {
    tab.addEventListener("click", () => {
        tab_btn.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        // 這裡可以加入切換不同表單的邏輯
    });
});

// 按註冊改login-button的文字變成下一步
const tab_btn_login = document.getElementById("tab-btn-login");
const tab_btn_logout = document.getElementById("tab-btn-logout");
const loginButton = document.getElementById("loginButton");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

tab_btn_logout.addEventListener("click", () => {
    if (loginButton.textContent === "登入") {
        loginButton.textContent = "下一步";
    }
});

// 按登入改login-button的文字變成登入
tab_btn_login.addEventListener("click", () => {
    if (loginButton.textContent === "下一步") {
        loginButton.textContent = "登入";
    }
});

// 獲取元素
const loginBtn = document.getElementById("loginBtn");
const login_container = document.getElementById("login-container");
const overlay = document.getElementById("overlay");

// 點擊登入按鈕時顯示登入框
loginBtn.addEventListener("click", () => {
    login_container.style.display = "block";
    overlay.style.display = "block";
});

// 點擊背景區域隱藏登入框
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        login_container.style.display = "none";
        overlay.style.display = "none";
    }
});

loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // 阻止表單的默認提交行為

    // 為新資料生成唯一的鍵名
    const timestamp = new Date().getTime();
    const emailKey = `email_${timestamp}`;
    const passwordKey = `password_${timestamp}`;

    // 保存新資料到 localStorage
    localStorage.setItem(emailKey, emailInput.value);
    localStorage.setItem(passwordKey, passwordInput.value);

    if (loginButton.textContent === "下一步") {
        window.location.href = "https://www.google.com";
    } else {
        console.log("信箱和密碼已保存到 localStorage");
    }
});

// 當頁面載入時，從 localStorage 中獲取並顯示之前輸入的信箱和密碼
window.onload = function () {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail) {
        emailInput.value = storedEmail;
    }

    if (storedPassword) {
        passwordInput.value = storedPassword;
    }
};
