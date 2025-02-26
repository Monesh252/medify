<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>City Info App</title>
  <link rel="stylesheet" href="style.css"> <!-- Link to CSS file -->
</head>
<body>
  <div class="container">
    <h1>City Information</h1>
    <input type="text" placeholder="Enter city name" id="cityInput">
    <button id="getInfoButton">Get Info</button>
    <div id="responseContainer"></div>
    <p id="errorMessage"></p>
  </div>

  <script>
    document.querySelector("#getInfoButton").addEventListener("click", async () => {
    const city = document.querySelector("#cityInput").value;
    const responseContainer = document.querySelector("#responseContainer");
    const errorMessage = document.querySelector("#errorMessage");

    if (!city.trim()) {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    responseContainer.innerHTML = "<p>Fetching details...</p>";

    try {
        const response = await fetch("http://localhost:3001/weather", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ city: city }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }

        const data = await response.json();

        responseContainer.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>${data.response.replace(/\n/g, "<br>")}</p> <!-- Preserve formatting -->
        `;
        errorMessage.textContent = "";
    } catch (error) {
        console.error("Error:", error);
        responseContainer.innerHTML = "";
        errorMessage.textContent = "Error: Unable to fetch weather data.";
    }
});

  </script>
</body>
</html>
