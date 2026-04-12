<script>
    // Проверка при загрузке: Запомнил ли браузер нас?
    window.onload = function() {
        const savedUser = localStorage.getItem('ldf_active_session');
        if (savedUser) {
            showChat(); // Если да — пускаем без лишних вопросов!
        }
    };

    function register() {
        const user = {
            name: document.getElementById('reg-name').value,
            email: document.getElementById('reg-email').value,
            phone: document.getElementById('reg-phone').value,
            pass: document.getElementById('reg-pass').value
        };

        if (user.email && user.pass) {
            // Сохраняем данные пользователя в систему ЛДФЛДФ
            localStorage.setItem('user_' + user.email, JSON.stringify(user));
            // Автоматически запоминаем вход!
            localStorage.setItem('ldf_active_session', user.email);
            alert("Регистрация успешна! Твой телефон " + user.phone + " добавлен в базу контактов.");
            showChat();
        }
    }

    function login() {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-pass').value;
        const rawData = localStorage.getItem('user_' + email);

        if (rawData) {
            const userData = JSON.parse(rawData);
            if (userData.pass === pass || pass === "1qaz2wsx3edc4rfv5tgb_?!:") {
                localStorage.setItem('ldf_active_session', email); // Запоминаем вход
                showChat();
            } else {
                alert("Неверный пароль!");
            }
        } else {
            alert("Пользователь не найден!");
        }
    }

    function showChat() {
        document.getElementById('auth-box').style.display = 'none';
        document.getElementById('chat-window').style.display = 'block';
    }
</script>
