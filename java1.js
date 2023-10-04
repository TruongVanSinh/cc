document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra trạng thái kết nối mạng
    function checkInternetConnection() {
        // Sử dụng một URL có thể truy cập được để kiểm tra kết nối
        const url = 'https://www.google.com';

        fetch(url, { method: 'HEAD', mode: 'no-cors' })
            .then(() => {
                updateStatus(true);
            })
            .catch(() => {
                updateStatus(false);
            });
    }

    // Cập nhật trạng thái trên giao diện
    function updateStatus(isOnline) {
        const statusElement = document.getElementById('status');
        statusElement.textContent = isOnline ? 'Connected to the Internet' : 'No Internet Connection';
        statusElement.style.color = isOnline ? 'green' : 'red';
    }

    // Kiểm tra trạng thái kết nối mạng khi trang web được tải
    checkInternetConnection();

    // Kiểm tra lại sau mỗi 5 giây
    setInterval(checkInternetConnection, 5000);
});
