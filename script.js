
        // Get the relevant DOM elements
        let imgSrc = document.getElementById("qrImage");
        const qrInput = document.getElementById("data");
        const widthInput = document.getElementById('width');
        const heightInput = document.getElementById('height');
        const generateBtn = document.getElementById("generate");
        const downloadBtn = document.getElementById("download");

        generateBtn.addEventListener("click", createQr);

        function createQr() {
            const format = document.getElementById("format").value;
            const qrColor = document.getElementById("qr-color").value;
            const bgColor = document.getElementById("bg-color").value;
            const width = widthInput.value;
            const height = heightInput.value;

            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${qrInput.value}&format=${format}&color=${qrColor.replace("#", "")}&bgcolor=${bgColor.replace("#", "")}`;

            imgSrc.src = qrCodeUrl;

            // Set the download link
            let downloadLink = document.getElementById("download-link");
            downloadLink.href = qrCodeUrl;
            downloadLink.download = `qrcode.${format}`;
            downloadLink.style.display = "block";
        }

        downloadBtn.addEventListener("click", () => {
            // Trigger the click event on the download link
            document.getElementById("download-link").click();
        });
    