# 🌦 Google Generative AI Weather App

This is a **weather app** that uses **Google Generative AI (Gemini API)** to fetch **real-time weather details** for any city.  
It is built with **Node.js, Express, and Docker**.

---

## 🚀 Features
✅ Get real-time weather details using **Google Gemini AI**  
✅ Displays **temperature, humidity, wind speed, and weather conditions**  
✅ Fully containerized with **Docker**  
✅ Simple **frontend UI** built with HTML, CSS, and JavaScript  
✅ Exposes a **REST API** on `localhost:3001/weather`

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### **2️⃣ Set Up API Key**
Create a `.env` file in the root directory and add:
```
GEMINI_API_KEY=your_google_generative_ai_key
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Run the Server**
```sh
node index.js
```

Now, the backend is running on **`http://localhost:3001`**.

---

## 🐫 **Run with Docker**
### **1️⃣ Build the Docker Image**
```sh
docker build -t weather-app .
```

### **2️⃣ Run the Container**
```sh
docker run -p 3001:3001 --env-file .env weather-app
```

Now, the app is running inside a **Docker container**.

---

## 🌐 **Using the API**
### **POST `/weather`**
**Request:**
```json
{
  "city": "Zurich"
}
```

**Response (Example):**
```json
{
  "response": "The weather in Zurich, Switzerland today, Wednesday, February 26, 2025, is light rain. The temperature is 42°F (5.56°C), but it feels like 34.8°F (1.56°C). The chance of rain is around 65%, and the humidity is around 82%. The wind is blowing from the WSW at 10 to 15 mph."
}
```

### **Test API with `curl`**
```sh
curl -X POST "http://localhost:3001/weather" -H "Content-Type: application/json" -d "{\"city\": \"Zurich\"}"
```

---

## 🎨 **Frontend**
The frontend UI is in **`index.html`**. Open it in a browser and enter a city to fetch the weather details.

### **Run Frontend with Live Server (Optional)**
```sh
npx live-server
```
Then, visit **`http://127.0.0.1:5500/index.html`**.

---

## 🚀 **Deployment**
### **1️⃣ Deploy to a Cloud Server**
You can deploy this **Docker container** on **AWS, GCP, or Render**.

### **2️⃣ Push Docker Image to Docker Hub**
```sh
docker tag weather-app your-dockerhub-username/weather-app
docker push your-dockerhub-username/weather-app
```

### **3️⃣ Run on a Cloud Server**
On your **cloud server**, run:
```sh
docker pull your-dockerhub-username/weather-app
docker run -p 3001:3001 --env-file .env weather-app
```

Now, the app is accessible on your **server's IP**.

---

### Screenshots
![Image](https://github.com/user-attachments/assets/830cd49d-8a53-45ff-913e-d21e0de03a45)

![Image](https://github.com/user-attachments/assets/3d7756f5-a81d-4c15-8a60-89d3a11850f0)

## ❤️ **Contributing**
Feel free to submit **pull requests** or report **issues**! 🚀

---

## 🐝 **License**
MIT License - Free to use and modify.

