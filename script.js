// ดึงข้อมูลจาก JSON และเติมข้อมูลลงใน <select>
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const citySelect = document.getElementById("citySelect");
        data.forEach(city => {
            let option = document.createElement("option");
            option.value = city.id;
            option.textContent = city.name;
            citySelect.appendChild(option);
        });
    })
    .catch(error => console.error("เกิดข้อผิดพลาด:", error));

function showLandInfo() {
    const selectedCity = document.getElementById("citySelect").value;
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const city = data.find(c => c.id === selectedCity);
            if (city) {
                document.getElementById("landInfo").innerHTML = `
                    <h2>${city.name}</h2>
                    <p><strong>ที่อยู่:</strong> ${city.location}</p>
                    <p><strong>พื้นที่:</strong> ${city.area} ตารางบล็อก</p>
                    <p><strong>เจ้าของ:</strong> ${city.owner}</p>
                    <img src="${city.image}" alt="รูปภาพเมือง">
                `;
                document.getElementById("landInfo").style.display = "block";
            }
        })
        .catch(error => console.error("เกิดข้อผิดพลาด:", error));
}
