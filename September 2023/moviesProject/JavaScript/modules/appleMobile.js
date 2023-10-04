export default function addAppleSupport () {
    $("head").append(`
        <link rel="apple-touch-icon" href="../apple-touch-icon.png">
        <meta name="apple-mobile-web-app-capable" content="yes">
    `);
}